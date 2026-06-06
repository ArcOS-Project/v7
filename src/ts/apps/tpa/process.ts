import type { IThirdPartyProcess } from "$interfaces/IThirdPartyProcess";
import { Daemon, Fs, Stack } from "$ts/env";
import { Process } from "$ts/kernel/mods/stack/process/instance";
import { Sleep } from "$ts/sleep";
import { join } from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/apps/app";
import { AppRuntimeError } from "../error";
import { ThirdPartyAppProcess } from "../thirdparty";

export class ThirdPartyProcess extends Process implements IThirdPartyProcess {
  public static readonly TPA_REV = ThirdPartyAppProcess.TPA_REV;
  workingDirectory: string;
  operationId: string;
  mutationLock = false;
  handler = Stack; // TEMP
  app: AppProcessData;
  args: any[];
  windowIcon = Store<string>();
  userPreferences = Daemon.preferences;
  crashReason: string = "";
  windowTitle = Store<string>();
  componentMount = {};
  overridePopulatable?: boolean;
  elements: Record<string, HTMLLinkElement> = {};
  get username() {
    return Daemon!.username;
  }

  //#region LIFECYCLE
  constructor(
    pid: number,
    parentPid: number,
    app: AppProcessData,
    operationId: string,
    workingDirectory: string,
    ...args: any[]
  ) {
    super(pid, parentPid, app, operationId, workingDirectory, ...args);

    this.app = app;
    this.args = args;
    this.workingDirectory = workingDirectory;
    this.operationId = operationId;

    this.setSource(__SOURCE__);

    this.windowIcon.set(`@app::${app.id}`);
  }
  //#endregion

  async closeIfSecondInstance(): Promise<this | undefined> {
    if (this.STATE !== "starting") {
      throw new AppRuntimeError(
        "Violation: only call closeIfSecondInstance in IThirdPartyProcess.start so that it doesn't hang the stack."
      );
    }
    this.Log("Closing if second instance");

    const instances = this.getSingleton();

    if (instances.length) {
      await this.killSelf();
    }

    return instances.length ? instances[0] : undefined;
  }

  getSingleton(): this[] {
    const instances = [...Stack.store()].filter(([pid, proc]) => {
      const process = proc as IThirdPartyProcess;

      if (process.app.id !== this.app.id) return false;
      if (process.workingDirectory !== this.workingDirectory) return false;

      return true;
    });

    return instances.map(([pid, proc]) => proc) as this[];
  }

  async loadCSS(path: string) {
    const absolutePath = join(this.workingDirectory, path);
    const linkElement = this.elements[path] ?? document.createElement("link");
    const existing = !!this.elements[path];
    const url = await Fs.direct(absolutePath);

    if (!url) throw new Error("Failed to read CSS file");

    if (existing) {
      linkElement.href = "";
      await Sleep(0);
    }

    linkElement.rel = "stylesheet";
    linkElement.href = url;
    linkElement.dataset["appid"] = this.app.id;
    linkElement.dataset["pid"] = `${this.pid}`;

    this.elements[path] = linkElement;
    document.head.append(linkElement);
  }

  async __stop(): Promise<any> {
    for (const path in this.elements) {
      this.elements[path]?.remove();
    }

    return await this.stop();
  }

  closeWindow = this.killSelf.bind(this);
}
