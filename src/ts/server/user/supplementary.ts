import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import type { Filesystem } from "$ts/fs";
import { arrayToText } from "$ts/fs/convert";
import { getDirectoryName, getParentDirectory, join } from "$ts/fs/util";
import { tryJsonParse } from "$ts/json";
import { detectJavaScript } from "$ts/util";
import type { App } from "$types/app";
import type { UserDaemon } from "./daemon";
import { ThirdPartyProps } from "./thirdparty";

export function SupplementaryThirdPartyPropFunctions(
  daemon: UserDaemon,
  fs: Filesystem,
  app: App,
  props: any,
  wrap: (c: string) => string,
  args: any[],
  metaPath: string,
  workingDirectory = app.workingDirectory
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
      const contents = wrap(arrayToText((await fs.readFile(join(workingDirectory!, path)))!));
      const dataUrl = `data:application/javascript;base64,${btoa(contents)}`;

      try {
        const loaded = await import(/* @vite-ignore */ dataUrl);

        const { default: func } = loaded;

        if (!func) return undefined;

        return await func(ThirdPartyProps(daemon, args, app, wrap, metaPath, getParentDirectory(join(workingDirectory!, path))));
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

        const proc = await daemon.handler.spawn<ThirdPartyAppProcess>(
          process,
          renderTarget,
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

    loadHtml: async (path: string) => {
      const htmlCode = arrayToText((await fs.readFile(join(workingDirectory!, path)))!);

      const detected = detectJavaScript(htmlCode);

      if (detected) throw new Error(`- ${detected.join("\n- ")}`);

      return htmlCode;
    },
  };
}
