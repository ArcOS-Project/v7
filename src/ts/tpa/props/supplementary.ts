import type { IThirdPartyAppProcess } from "$interfaces/thirdparty";
import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { Fs, Stack } from "$ts/env";
import { JsExec } from "$ts/jsexec";
import { tryJsonParse } from "$ts/json";
import { detectJavaScript } from "$ts/util";
import { arrayBufferToText } from "$ts/util/convert";
import { join } from "$ts/util/fs";

export function SupplementaryThirdPartyPropFunctions(engine: JsExec) {
  return {
    load: async (path: string) => {
      if (path.startsWith("http")) {
        try {
          await import(/* @vite-ignore */ path);
        } catch (e) {
          throw e;
        }
      }

      try {
        const subEngine = await Stack.spawn<JsExec>(
          JsExec,
          undefined,
          engine.userDaemon?.userInfo?._id,
          engine.pid,
          join(engine.workingDirectory, path)
        );

        if (engine.app && engine.metaPath) {
          subEngine?.setApp(engine.app, engine.metaPath);
        }

        return await subEngine?.getContents();
      } catch (e) {
        throw e;
      }
    },
    runApp: async (process: typeof ThirdPartyAppProcess, metadataPath: string, parentPid?: number, ...args: any[]) => {
      const daemon = engine.userDaemon;
      const app = engine.app;

      if (!app || !daemon) throw new Error(`Illegal runApp operation on a non-app JsExec`);

      try {
        const metaStr = arrayBufferToText((await Fs.readFile(metadataPath))!);
        const metadata = tryJsonParse(metaStr);
        const renderTarget = daemon.workspaces!.getCurrentDesktop();

        if (typeof metadata === "string") throw new Error("Failed to parse metadata");

        const proc = await Stack.spawn<ThirdPartyAppProcess>(
          process,
          renderTarget,
          daemon.userInfo!._id,
          parentPid,
          {
            data: metadata,
            id: metadata.id,
            desktop: renderTarget ? renderTarget.id : undefined,
          },
          engine.operationId,
          app.workingDirectory,
          ...args
        );

        app.process = proc;

        return proc;
      } catch (e) {
        throw e;
      }
    },
    runAppDirect: async (process: typeof ThirdPartyAppProcess, metadataPath: string, parentPid?: number, ...args: any[]) => {
      const daemon = engine.userDaemon;
      const app = engine.app;

      if (!app || !daemon) throw new Error(`Illegal runApp operation on a non-app JsExec`);

      try {
        const metaStr = arrayBufferToText((await Fs.readFile(metadataPath))!);
        const metadata = tryJsonParse(metaStr);

        if (typeof metadata === "string") throw new Error("Failed to parse metadata");

        const proc = await Stack.spawn<IThirdPartyAppProcess>(
          process,
          undefined,
          daemon.userInfo!._id,
          parentPid,
          {
            data: metadata,
            id: metadata.id,
          },
          app.workingDirectory,
          ...args
        );

        app.process = proc;

        return proc;
      } catch (e) {
        throw e;
      }
    },
    loadHtml: async (path: string) => {
      const htmlCode = arrayBufferToText((await Fs.readFile(join(engine.workingDirectory, path)))!);

      const detected = detectJavaScript(htmlCode!);

      if (detected) throw new Error(`- ${detected.join("\n- ")}`);

      return htmlCode;
    },
    loadDirect: async (path: string) => {
      const url = await Fs.direct(join(engine.workingDirectory!, path));
    },
  };
}
