/**
 * ArcOS JavaScript Execution Engine
 *
 * This file executes JS files in ArcOS under a relatively controlled environment.
 * It is part of the ArcOS TPA framework: a system for running third-party apps.
 *
 * All rights belong to their respective authors.
 *
 * © IzKuipers 2025
 */
import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { Fs, Server } from "$ts/env";
import { Process } from "$ts/process/instance";
import { Backend } from "$ts/server/axios";
import { TryGetDaemon, UserDaemon } from "$ts/server/user/daemon";
import { ThirdPartyProps } from "$ts/tpa/props";
import { authcode } from "$ts/util";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { getItemNameFromPath, getParentDirectory } from "$ts/util/fs";
import { UUID } from "$ts/uuid";
import type { App } from "$types/app";
import type { ThirdPartyPropMap } from "$types/thirdparty";
import * as acorn from "acorn";
import * as walk from "acorn-walk";

export class JsExec extends Process {
  public readonly TPA_REVISION = ThirdPartyAppProcess.TPA_REV;
  props?: ThirdPartyPropMap;
  userDaemon?: UserDaemon;
  app?: App;
  args: any[];
  metaPath?: string;
  filePath?: string;
  workingDirectory: string;
  operationId: string;
  
  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, filePath: string, ...args: any[]) {
    super(pid, parentPid);

    this.userDaemon = TryGetDaemon();
    this.args = args;
    this.filePath = filePath;
    this.workingDirectory = getParentDirectory(filePath);
    this.name = "JsExec";
    this.setSource(__SOURCE__);
    this.operationId = UUID();
  }

  async start() {
    if (!this.userDaemon || !this.filePath) return false;

    this.props = ThirdPartyProps(this);
  }

  //#endregion
  //#region URL

  async getTpaUrl(wrapped: string) {
    this.Log(`Getting TPA file URL`);

    const postUrl = this.getTpaPostUrl();
    const serverUrl = Server.url;
    const { appId, userId, filename } = this.getTpaUrlInfo();
    const now = Date.now();
    const ac = authcode();

    try {
      await Backend.post(postUrl, textToBlob(wrapped), {
        headers: { Authorization: `Bearer ${this.userDaemon?.token}` },
      });

      return `${serverUrl}/tpa/v3/${userId}/${now}/${appId}@${filename}${ac}`;
    } catch {
      throw new JsExecError(`Failed to create momentary TPA URL`);
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

  //#endregion
  //#region EXECUTION

  async exec(tpaUrl: string) {
    this.Log(`Executing ${this.filePath}`);

    const code = await import(/* @vite-ignore */ tpaUrl);

    if (!code.default || !(code.default instanceof Function)) throw new JsExecError("Expected a default function");

    try {
      const result = await code.default(this.props!);
      return result;
    } catch (e) {
      throw e;
    } finally {
      await this.killSelf();
    }
  }

  async getContents() {
    this.Log(`Reading script contents`);

    const unwrapped = arrayBufferToText((await Fs.readFile(this.filePath!))!);
    if (!unwrapped) throw new JsExecError(`Failed to read ${this.filePath}: not found`);

    await this.testFileContents(unwrapped);

    const wrapped = this.wrap(unwrapped);
    const tpaUrl = await this.getTpaUrl(wrapped);

    return await this.exec(tpaUrl);
  }

  //#endregion
  //#region HELPERS

  setApp(app: App, metaPath: string) {
    this.Log(`Setting app data to ${app.id} (${metaPath})`);

    if (this.app) return;

    if (app.tpaRevision && app.tpaRevision > this.TPA_REVISION)
      throw new JsExecError(
        `This application expects a newer version of the TPA framework than what ArcOS can supply. Please update your ArcOS version and try again.`
      );

    this.app = app;
    this.metaPath = metaPath;
    this.props = ThirdPartyProps(this);
  }

  private wrap(contents: string) {
    if (!this.props) throw new JsExecError(`No TPA props to use`);

    return `export default async function({${Object.keys(this.props).join(",")}}) {\nconst global = arguments;\n${contents}\n}`;
  }

  async testFileContents(unwrapped: string) {
    const isUnsafe = unwrapped.startsWith(`// #unsafe`);

    if (isUnsafe) return; // File is dangerous, TODO -> PERMISSIONS

    const ast = acorn.parse(unwrapped, {
      sourceType: "module",
      ecmaVersion: "latest",
      allowReturnOutsideFunction: true,
      allowAwaitOutsideFunction: true,
    });
    const hasExport = ast.body.some((node) => node.type.startsWith("Export"));
    const hasImport = ast.body.some((node) => node.type.startsWith("Import"));
    const hasDebugger = ast.body.some((node) => node.type.startsWith("Debugger"));
    const domReferences = await this.testFileContents_detectDomReferences(ast);

    for (const key in domReferences) {
      if ((domReferences as any)[key]) throw new JsExecError(`References to ${key} are not allowed.`);
    }

    if (hasExport) throw new JsExecError("Export statements are not valid inside of ArcOS");
    if (hasImport) throw new JsExecError("Import statements are not valid inside of ArcOS");
    if (hasDebugger) throw new JsExecError("Debugger triggers are not valid inside of ArcOS");
  }

  async testFileContents_detectDomReferences(ast: acorn.Program) {
    const results = { documentBody: false, appRenderer: false };

    walk.simple(ast, {
      MemberExpression(node) {
        const { object, property } = node;
        if (object.type === "Identifier" && object.name === "document") {
          switch ((property as any).name) {
            case "body":
              results.documentBody = true;
              break;
          }
        }
      },
      Literal(node) {
        if (typeof node.value === "string" && node.value.includes("#appRenderer")) results.appRenderer = true;
      },
    });

    return results;
  }
  
  //#endregion
}

export class JsExecError extends Error {
  constructor(message?: string, options?: ErrorOptions) {
    super(message, options);

    this.name = "JsExecError";
  }
}
