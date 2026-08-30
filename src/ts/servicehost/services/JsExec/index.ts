/**
 * ArcOS JavaScript Execution Engine Service
 *
 * This file executes JS files in ArcOS under a relatively controlled environment.
 * It is part of the ArcOS TPA framework: a system for running third-party apps.
 *
 * All rights belong to their respective authors.
 *
 * © IzKuipers 2025
 */
import type { IServiceHost } from "$interfaces/IServiceHost";
import type { ITpaConnector } from "$interfaces/modules/server/ITpaConnector";
import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { ThirdPartyProps } from "$ts/apps/tpa/props";
import { Daemon, Fs } from "$ts/env";
import { BaseService } from "$ts/servicehost/base";
import { arrayBufferToText } from "$ts/util/convert";
import { getItemNameFromPath, getParentDirectory } from "$ts/util/fs";
import { UUID } from "$ts/util/uuid";
import type { App } from "$types/apps/app";
import type { Service } from "$types/services/service";
import type { ParsedImportStatement } from "$types/tpa/thirdparty";
import * as acorn from "acorn";
import type { JsExecEngineData } from "$types/tpa/engine";
import type { IJsExecService } from "$interfaces/services/IJsExec";

export class JsExecService extends BaseService implements IJsExecService {
  public readonly TPA_REVISION = ThirdPartyAppProcess.TPA_REV;

  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, name: string, host: IServiceHost, initBroadcast?: (msg: string) => void) {
    super(pid, parentPid, name, host, initBroadcast);

    this.setSource(__SOURCE__);
  }

  async start() {
    this.initBroadcast?.("Starting TPA service");
  }

  //#endregion
  //#region URL

  private async getTpaUrl(engine: JsExecEngineData, wrapped: string) {
    this.Log(`Getting TPA file URL`);

    const { appId, userId, filename } = this.getTpaUrlInfo(engine);
    try {
      const urlResult = await Daemon!.GetConnector<ITpaConnector>("TpaConnector").CreateUrl(wrapped, userId, appId, filename);

      if (!urlResult.success) throw new JsExecError();
      return urlResult.result!;
    } catch (e: any) {
      throw new JsExecError(`Failed to create momentary TPA URL: ${e?.message ?? e}`);
    }
  }

  private getTpaPostUrl(engine: JsExecEngineData) {
    const { appId, userId, filename } = this.getTpaUrlInfo(engine);

    return `/tpa/v2/${userId}/${appId}/${filename}`;
  }

  private getTpaUrlInfo(engine: JsExecEngineData) {
    const appId = engine.app?.id || "ArcOS";
    const userId = Daemon?.userInfo?._id || "SYSTEM";
    const filename = getItemNameFromPath(engine.filePath!);

    return { appId, userId, filename };
  }

  //#endregion
  //#region EXECUTION

  private async exec(engine: JsExecEngineData, tpaUrl: string) {
    this.Log(`Executing ${engine.filePath}`);

    const code = await import(/* @vite-ignore */ tpaUrl);

    if (!code.default || !(code.default instanceof Function)) throw new JsExecError("Expected a default function");

    try {
      const result = await code.default(engine.props!);
      return result;
    } catch (e) {
      throw e;
    }
  }

  async getContents(engine: JsExecEngineData) {
    this.Log(`Reading script contents`);

    const unwrapped = this.convertImportStatementsToRegex(arrayBufferToText((await Fs.readFile(engine.filePath!))!)!);
    if (!unwrapped) throw new JsExecError(`Failed to read ${engine.filePath}: not found`);

    await this.testFileContents(unwrapped);

    const wrapped = this.wrap(engine, unwrapped);
    const tpaUrl = await this.getTpaUrl(engine, wrapped);

    return await this.exec(engine, tpaUrl);
  }

  //#endregion
  //#region HELPERS

  private setApp(engine: JsExecEngineData, app: App, metaPath?: string) {
    this.Log(`Setting app data to ${app.id} (${metaPath ?? "<unknown meta>"})`);

    if (engine.app) return engine;

    if (app.tpaRevision && app.tpaRevision > this.TPA_REVISION)
      throw new JsExecError(
        `This application expects a newer version of the TPA framework than what ArcOS can supply. Please update your ArcOS version and try again.`
      );

    engine.app = app;
    engine.metaPath = metaPath;
    engine.props = ThirdPartyProps(engine);
  }

  private wrap(engine: JsExecEngineData, contents: string) {
    if (!engine.props) throw new JsExecError(`No TPA props to use`);

    return `export default async function({${Object.keys(engine.props).join(",")}}) {\nconst global = arguments;\n${contents}\n}`;
  }

  private convertImportStatementsToRegex(sourceFile: string) {
    if (!sourceFile) return sourceFile;
    const regex =
      /import(?:(?:(?:[ \n\t]+(?<default>[^ *\n\t\{\},]+)[ \n\t]*(?:,|[ \n\t]+))?(?<destructured>[ \n\t]*\{(?:[ \n\t]*[^ \n\t"'\{\}]+[ \n\t]*,?)+\})?[ \n\t]*)|[ \n\t]*\*[ \n\t]*as[ \n\t]+(?<wildcard>[^ \n\t\{\}]+)[ \n\t]+)from[ \n\t]*(?:['"])(?<filename>[^'"\n]+)(?<quote>['"])/gm;
    const matches = sourceFile
      .matchAll(regex)
      .toArray()
      .map((m) => ({ ...m.groups, original: m[0] })) as ParsedImportStatement[];

    for (const match of matches) {
      const { destructured, default: defaultImport, filename, quote, wildcard } = match;
      let loadStatement = `const ${destructured || defaultImport || wildcard} = await load(${quote}${filename}${quote})`;

      sourceFile = sourceFile.replace(match.original, loadStatement);
    }

    return sourceFile;
  }

  private async testFileContents(unwrapped: string) {
    try {
      const ast = acorn.parse(unwrapped, {
        sourceType: "module",
        ecmaVersion: "latest",
        allowReturnOutsideFunction: true,
        allowAwaitOutsideFunction: true,
      });
      const hasExport = ast.body.some((node) => node.type.startsWith("Export"));
      const hasImport = ast.body.some((node) => node.type.startsWith("Import"));
      const hasDebugger = ast.body.some((node) => node.type.startsWith("Debugger"));

      if (hasExport) throw new JsExecError("Export statements are not valid inside of ArcOS");
      if (hasImport) throw new JsExecError("Import statements are not valid inside of ArcOS");
      if (hasDebugger) throw new JsExecError("Debugger triggers are not valid inside of ArcOS");
    } catch (e) {
      throw new JsExecError(`An error occurred while parsing the source file: ${e}`);
    }
  }

  //#endregion

  setupEngine(filePath: string, app?: App, metaPath?: string, ...args: any[]) {
    let engine = {} as JsExecEngineData;
    engine.args = args;
    engine.filePath = filePath;
    engine.workingDirectory = getParentDirectory(filePath);
    engine.operationId = UUID();

    if (app && metaPath) {
      this.setApp(engine, app, metaPath);
    }

    return engine;
  }

  async Invoke(filePath: string, app?: App, metaPath?: string, ...args: any[]) {
    let engine = this.setupEngine(filePath, app, metaPath, ...args);

    return this.getContents(engine);
  }
}

export class JsExecError extends Error {
  constructor(message?: string, options?: ErrorOptions) {
    super(message, options);

    this.name = "JsExecError";
  }
}

export const jsExecService: Service = {
  name: "TPA Service",
  description: "Provides the interface to spawn TPAs.",
  process: JsExecService,
  initialState: "started",
  startCondition(daemon) {
    return daemon.preferences().security.enableThirdParty;
  },
};
