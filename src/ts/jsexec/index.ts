import { KernelServerUrl } from "$ts/env";
import { Process } from "$ts/process/instance";
import { Backend } from "$ts/server/axios";
import { TryGetDaemon, UserDaemon } from "$ts/server/user/daemon";
import { ThirdPartyProps } from "$ts/server/user/thirdparty";
import { authcode } from "$ts/util";
import { arrayToText, textToBlob } from "$ts/util/convert";
import { getItemNameFromPath, getParentDirectory } from "$ts/util/fs";
import type { App } from "$types/app";
import type { ThirdPartyPropMap } from "$types/thirdparty";

export class JsExec extends Process {
  props?: ThirdPartyPropMap;
  userDaemon?: UserDaemon;
  app?: App;
  args: any[];
  metaPath?: string;
  filePath?: string;
  workingDirectory: string;

  constructor(pid: number, parentPid: number, filePath: string, ...args: any[]) {
    super(pid, parentPid);

    this.userDaemon = TryGetDaemon();
    this.args = args;
    this.filePath = filePath;
    this.workingDirectory = getParentDirectory(filePath);
  }

  setApp(app: App, metaPath: string) {
    this.Log(`Setting app data to ${app.id} (${metaPath})`);

    if (this.app) return;

    this.app = app;
    this.metaPath = metaPath;
    this.props = ThirdPartyProps(this);
  }

  async start() {
    if (!this.userDaemon || !this.filePath) return false;

    this.props = ThirdPartyProps(this);
  }

  private wrap(contents: string) {
    if (!this.props) throw new Error(`No TPA props to use`);

    return `export default async function({${Object.keys(this.props).join(",")}}) {\nconst global = arguments;\n${contents}\n}`;
  }

  async getContents() {
    this.Log(`Reading script contents`);
    try {
      const unwrapped = arrayToText((await this.fs.readFile(this.filePath!))!);
      if (!unwrapped) throw new Error("Failed to read the file contents");

      const wrapped = this.wrap(unwrapped);
      const tpaUrl = await this.getTpaUrl(wrapped);

      return await this.exec(tpaUrl);
    } catch {
      return false;
    }
  }

  async getTpaUrl(wrapped: string) {
    this.Log(`Getting TPA file URL`);

    const postUrl = this.getTpaPostUrl();
    const serverUrl = KernelServerUrl();
    const { appId, userId, filename } = this.getTpaUrlInfo();
    const now = Date.now();
    const ac = authcode();

    try {
      await Backend.post(postUrl, textToBlob(wrapped), {
        headers: { Authorization: `Bearer ${this.userDaemon?.token}` },
      });

      return `${serverUrl}/tpa/v3/${userId}/${now}/${appId}@${filename}${ac}`;
    } catch {
      throw new Error(`Failed to create momentary TPA URL`);
    }
  }

  getTpaPostUrl() {
    const { appId, userId, filename } = this.getTpaUrlInfo();

    return `/tpa/v2/${userId}/${appId}/${filename}`;
  }

  getTpaUrlInfo() {
    const appId = this.app?.id || "ArcOS";
    const userId = this.userDaemon?.userInfo?._id || "SYSTEM";
    const filename = getItemNameFromPath(this.filePath!);

    return { appId, userId, filename };
  }

  async exec(tpaUrl: string) {
    this.Log(`Executing ${this.filePath}`);

    const code = await import(/* @vite-ignore */ tpaUrl);

    if (!code.default || !(code.default instanceof Function)) throw new Error("Expected a default function");

    const result = await code.default(this.props!);

    await this.killSelf();

    return result;
  }
}
