import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { arrayToText, textToBlob } from "$ts/util/convert";
import { getItemNameFromPath, join } from "$ts/util/fs";
import { tryJsonParse } from "$ts/json";
import { KernelStack } from "$ts/env";
import { authcode, detectJavaScript } from "$ts/util";
import type { App } from "$types/app";
import type { FilesystemType } from "$types/kernel";
import { Backend } from "../axios";
import type { UserDaemon } from "./daemon";
import { ThirdPartyProps } from "./thirdparty";

export function SupplementaryThirdPartyPropFunctions(
  daemon: UserDaemon,
  fs: FilesystemType,
  app: App,
  props: any,
  wrap: (c: string) => string,
  args: any[],
  metaPath: string
) {
  return {
    load: async (path: string) => {
      if (path.startsWith("http")) {
        try {
          await import(/* @vite-ignore */ path);
        } catch (e) {
          throw e;
        }
      }
      const filename = getItemNameFromPath(path);
      const contents = wrap(arrayToText((await fs.readFile(join(app.workingDirectory!, path)))!));
      await Backend.post(`/tpa/v2/${daemon.userInfo!._id}/${app.id}/${filename}`, textToBlob(contents), {
        headers: { Authorization: `Bearer ${daemon.token}` },
      });
      const dataUrl = `${import.meta.env.DW_SERVER_URL}/tpa/v3/${daemon.userInfo!._id}/${Date.now()}/${
        app.id
      }@${filename}${authcode()}`;

      try {
        const loaded = await import(/* @vite-ignore */ dataUrl);

        const { default: func } = loaded;

        if (!func) return undefined;

        return await func(ThirdPartyProps(daemon, args, app, wrap, metaPath, app.workingDirectory));
      } catch (e) {
        throw e;
      }
    },
    runApp: async (process: typeof ThirdPartyAppProcess, metadataPath: string, parentPid?: number, ...args: any[]) => {
      try {
        const metaStr = arrayToText((await fs.readFile(metadataPath))!);
        const metadata = tryJsonParse(metaStr);
        const renderTarget = daemon.getCurrentDesktop();

        if (typeof metadata === "string") throw new Error("Failed to parse metadata");

        const proc = await KernelStack().spawn<ThirdPartyAppProcess>(
          process,
          renderTarget,
          daemon.userInfo!._id,
          parentPid,
          {
            data: metadata,
            id: metadata.id,
            desktop: renderTarget ? renderTarget.id : undefined,
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
    runAppDirect: async (process: typeof ThirdPartyAppProcess, metadataPath: string, parentPid?: number, ...args: any[]) => {
      try {
        const metaStr = arrayToText((await fs.readFile(metadataPath))!);
        const metadata = tryJsonParse(metaStr);

        if (typeof metadata === "string") throw new Error("Failed to parse metadata");

        const proc = await KernelStack().spawn<ThirdPartyAppProcess>(
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
      const htmlCode = arrayToText((await fs.readFile(join(app.workingDirectory!, path)))!);

      const detected = detectJavaScript(htmlCode);

      if (detected) throw new Error(`- ${detected.join("\n- ")}`);

      return htmlCode;
    },
    loadDirect: async (path: string) => {
      const url = await fs.direct(join(app.workingDirectory!, path));
    },
  };
}
