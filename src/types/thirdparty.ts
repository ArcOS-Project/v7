import type { SystemDispatch } from "$ts/dispatch";
import type { WaveKernel } from "$ts/kernel";
import type { Environment } from "$ts/kernel/env";
import type { ProcessHandler } from "$ts/process/handler";
import type { UserDaemon } from "$ts/server/user/daemon";
import type { ServiceHost } from "$ts/services";
import { MessageBox } from "$ts/dialog";
import type { CountInstances, decimalToHex, htmlspecialchars, Plural, sha256, sliceIntoChunks } from "$ts/util";
import type {
  DownloadFile,
  formatBytes,
  getDirectoryName,
  getDriveLetter,
  getParentDirectory,
  join,
  onFileChange,
  onFolderChange,
} from "$ts/fs/util";
import type { Filesystem } from "$ts/fs";
import type { arrayToBlob, arrayToText, blobToDataURL, blobToText, textToArrayBuffer, textToBlob } from "$ts/fs/convert";
import type { Process } from "$ts/process/instance";
import type { AppProcess } from "$ts/apps/process";
import type { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import type { FilesystemDrive } from "$ts/fs/drive";
import type { KernelModule } from "$ts/kernel/module";
import type { App } from "./app";
import type { Store } from "$ts/writable";
import type { Sleep } from "$ts/sleep";
import type axios from "axios";
import type { Axios } from "$ts/server/axios";
import type { BaseService } from "$ts/services/base";
import type { TrayIconProcess } from "$ts/ui/tray/process";
import type dayjs from "dayjs";

export interface ThirdPartyPropMap {
  kernel: WaveKernel;
  daemon: UserDaemon;
  handler: ProcessHandler;
  fs: Filesystem;
  env: Environment;
  serviceHost: ServiceHost | undefined;
  dispatch: SystemDispatch;
  MessageBox: typeof MessageBox;
  icons: Record<string, string>;
  util: {
    htmlspecialchars: typeof htmlspecialchars;
    Plural: typeof Plural;
    sliceIntoChunks: typeof sliceIntoChunks;
    decimalToHex: typeof decimalToHex;
    sha256: typeof sha256;
    CountInstances: typeof CountInstances;
    join: typeof join;
    getDirectoryName: typeof getDirectoryName;
    getParentDirectory: typeof getParentDirectory;
    getDriveLetter: typeof getDriveLetter;
    formatBytes: typeof formatBytes;
    DownloadFile: typeof DownloadFile;
    onFileChange: typeof onFileChange;
    onFolderChange: typeof onFolderChange;
  };
  convert: {
    arrayToText: typeof arrayToText;
    textToArrayBuffer: typeof textToArrayBuffer;
    blobToText: typeof blobToText;
    textToBlob: typeof textToBlob;
    arrayToBlob: typeof arrayToBlob;
    blobToDataURL: typeof blobToDataURL;
  };
  workingDirectory: string;
  Process: typeof Process;
  AppProcess: typeof AppProcess;
  ThirdPartyAppProcess: typeof ThirdPartyAppProcess;
  FilesystemDrive: typeof FilesystemDrive;
  KernelModule: typeof KernelModule;
  argv: any[];
  app: App;
  Store: typeof Store;
  Sleep: typeof Sleep;
  $ENTRYPOINT: string;
  $METADATA: string;
  load: (path: string) => Promise<any>;
  runApp: (
    process: typeof ThirdPartyAppProcess,
    metadataPath: string,
    parentPid?: number,
    ...args: any[]
  ) => Promise<ThirdPartyAppProcess | undefined>;
  loadHtml: (path: string) => Promise<string | undefined>;
  axios: typeof axios;
  Server: typeof Axios;
  BaseService: typeof BaseService;
  TrayIconProcess: typeof TrayIconProcess;
  Debug: (m: any) => void;
  dayjs: typeof dayjs;
}
