import { AppProcess } from "$ts/apps/process";
import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { __Console__ } from "$ts/console";
import { contextProps } from "$ts/context/actions.svelte";
import { MessageBox } from "$ts/dialog";
import { FilesystemDrive } from "$ts/kernel/mods/fs/drives/drive";
import { Env } from "$ts/env";
import { getAllImages } from "$ts/images";
import type { JsExec } from "$ts/jsexec";
import { tryJsonStringify } from "$ts/json";
import { Process } from "$ts/process/instance";
import { Backend } from "$ts/server/axios";
import { HiddenUserPaths, SystemFolders, UserPathCaptions, UserPathIcons, UserPaths } from "$ts/server/user/store";
import { BaseService } from "$ts/services/base";
import { Sleep } from "$ts/sleep";
import { CustomTitlebar } from "$ts/ui/thirdparty/titlebar";
import { TrayIconProcess } from "$ts/ui/tray/process";
import { CountInstances, decimalToHex, htmlspecialchars, Plural, sha256, sliceIntoChunks } from "$ts/util";
import { arrayBufferToBlob, arrayBufferToText, blobToDataURL, blobToText, textToArrayBuffer, textToBlob } from "$ts/util/convert";
import {
  DownloadFile,
  formatBytes,
  getDriveLetter,
  getItemNameFromPath,
  getParentDirectory,
  join,
  onFileChange,
  onFolderChange,
} from "$ts/util/fs";
import { Store } from "$ts/writable";
import type { ThirdPartyPropMap } from "$types/thirdparty";
import axios from "axios";
import dayjs from "dayjs";
import { SupplementaryThirdPartyPropFunctions } from "./supplementary";

export function ThirdPartyProps(engine: JsExec): ThirdPartyPropMap {
  const props = {
    serviceHost: engine.userDaemon?.serviceHost, // TODO: PERMISSION_SERVICE_HOST
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
      getItemNameFromPath,
      getParentDirectory,
      getDriveLetter,
      formatBytes,
      DownloadFile,
      onFileChange,
      onFolderChange,
    },
    convert: {
      arrayToText: arrayBufferToText,
      textToArrayBuffer,
      blobToText,
      textToBlob,
      arrayToBlob: arrayBufferToBlob,
      blobToDataURL,
    },
    workingDirectory: engine.workingDirectory || engine.app?.workingDirectory!,
    Process,
    AppProcess,
    ThirdPartyAppProcess,
    FilesystemDrive,
    argv: engine.args,
    app: engine.app,
    Store,
    Sleep,
    $ENTRYPOINT: engine.filePath,
    $METADATA: engine.metaPath,
    SHELL_PID: +Env.get("shell_pid"),
    OPERATION_ID: engine.operationId,
    load: async (path: string): Promise<any> => {},
    runApp: async (
      process: typeof ThirdPartyAppProcess,
      metadataPath: string,
      parentPid?: number,
      ...args: any[]
    ): Promise<ThirdPartyAppProcess | undefined> => undefined,
    loadHtml: async (path: string): Promise<string | undefined> => undefined,
    axios,
    Server: Backend, // TODO: PERMISSION_SERVER_INTERACT
    BaseService,
    TrayIconProcess,
    Debug: (m: any) => {
      MessageBox(
        {
          title: "🐛🪵",
          message: tryJsonStringify(m, 2),
          image: "WindowSettingsIcon",
          sound: "arcos.dialog.info",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
        },
        +Env.get("shell_pid")
      );
    },
    CustomTitlebar,
    contextProps,
    dayjs,
    console: __Console__,
    LogLevel: {
      info: 0,
      warning: 1,
      error: 2,
      critical: 3,
    },
    UserPaths,
    UserPathCaptions,
    UserPathIcons,
    SystemFolders,
    HiddenUserPaths,
  };

  const supplementary = SupplementaryThirdPartyPropFunctions(engine);

  for (const [key, supp] of Object.entries(supplementary)) {
    (props as any)[key] = supp;
  }

  //@ts-ignore
  return props;
}
