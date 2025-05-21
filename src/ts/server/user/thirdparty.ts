import { AppProcess } from "$ts/apps/process";
import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { MessageBox } from "$ts/dialog";
import { arrayToBlob, arrayToText, blobToDataURL, blobToText, textToArrayBuffer, textToBlob } from "$ts/fs/convert";
import { FilesystemDrive } from "$ts/fs/drive";
import {
  DownloadFile,
  formatBytes,
  getDirectoryName,
  getDriveLetter,
  getParentDirectory,
  join,
  onFileChange,
  onFolderChange,
} from "$ts/fs/util";
import { getAllImages } from "$ts/images";
import { WindowSettingsIcon } from "$ts/images/general";
import { tryJsonStringify } from "$ts/json";
import { KernelModule } from "$ts/kernel/module";
import { Process } from "$ts/process/instance";
import { BaseService } from "$ts/services/base";
import { Sleep } from "$ts/sleep";
import { TrayIconProcess } from "$ts/ui/tray/process";
import { CountInstances, decimalToHex, htmlspecialchars, Plural, sha256, sliceIntoChunks } from "$ts/util";
import { Store } from "$ts/writable";
import type { App } from "$types/app";
import axios from "axios";
import dayjs from "dayjs";
import { Backend } from "../axios";
import type { UserDaemon } from "./daemon";
import { SupplementaryThirdPartyPropFunctions } from "./supplementary";
import type { ThirdPartyPropMap } from "$types/thirdparty";

export function ThirdPartyProps(
  daemon: UserDaemon,
  args: any[],
  app: App,
  wrap: (c: string) => string,
  metaPath: string,
  workingDirectory?: string
): ThirdPartyPropMap {
  const props = {
    kernel: daemon.kernel,
    daemon,
    handler: daemon.handler,
    fs: daemon.fs,
    env: daemon.env,
    serviceHost: daemon.serviceHost,
    dispatch: daemon.systemDispatch,
    MessageBox,
    icons: getAllImages(),
    util: {
      htmlspecialchars,
      Plural,
      sliceIntoChunks,
      decimalToHex,
      sha256,
      CountInstances,
      join,
      getDirectoryName,
      getParentDirectory,
      getDriveLetter,
      formatBytes,
      DownloadFile,
      onFileChange,
      onFolderChange,
    },
    convert: {
      arrayToText,
      textToArrayBuffer,
      blobToText,
      textToBlob,
      arrayToBlob,
      blobToDataURL,
    },
    workingDirectory: workingDirectory || app.workingDirectory!,
    Process,
    AppProcess,
    ThirdPartyAppProcess,
    FilesystemDrive,
    KernelModule,
    argv: args,
    app,
    Store,
    Sleep,
    $ENTRYPOINT: app.entrypoint?.includes(":/") ? app.entrypoint! : join(app.workingDirectory!, app.entrypoint!),
    $METADATA: metaPath,
    load: async (path: string): Promise<any> => {},
    runApp: async (
      process: typeof ThirdPartyAppProcess,
      metadataPath: string,
      parentPid?: number,
      ...args: any[]
    ): Promise<ThirdPartyAppProcess | undefined> => undefined,
    loadHtml: async (path: string): Promise<string | undefined> => undefined,
    axios,
    Server: Backend,
    BaseService,
    TrayIconProcess,
    Debug: (m: any) => {
      MessageBox(
        {
          title: "🐛🪵",
          message: tryJsonStringify(m, 2),
          image: WindowSettingsIcon,
          sound: "arcos.dialog.info",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        },
        +daemon.env.get("shell_pid")
      );
    },
    dayjs,
  };

  const supplementary = SupplementaryThirdPartyPropFunctions(daemon, daemon.fs, app, props, wrap, args, metaPath);

  for (const [key, supp] of Object.entries(supplementary)) {
    (props as any)[key] = supp;
  }

  return props;
}
