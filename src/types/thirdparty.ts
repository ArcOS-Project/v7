import type { AppProcess } from "$ts/apps/process";
import type { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import type { MessageBox } from "$ts/dialog";
import type { FilesystemDrive } from "$ts/drives/drive";
import type { Process } from "$ts/process/instance";
import type { ServiceHost } from "$ts/services";
import type { CountInstances, decimalToHex, htmlspecialchars, Plural, sha256, sliceIntoChunks } from "$ts/util";
import type { arrayToBlob, arrayToText, blobToDataURL, blobToText, textToArrayBuffer, textToBlob } from "$ts/util/convert";
import type {
  DownloadFile,
  formatBytes,
  getDriveLetter,
  getItemNameFromPath,
  getParentDirectory,
  join,
  onFileChange,
  onFolderChange,
} from "$ts/util/fs";
import type { App } from "./app";
import type { AxiosInstance } from "./axios";
import type { dayjs } from "./dayjs";

export interface ThirdPartyPropMap {
  serviceHost: ServiceHost | undefined;
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
    getItemNameFromPath: typeof getItemNameFromPath;
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
  argv: any[];
  app: App;
  $ENTRYPOINT: string;
  $METADATA: string;
  SHELL_PID?: number;
  OPERATION_ID: string;
  load: (path: string) => Promise<any>;
  runApp: (
    process: typeof ThirdPartyAppProcess,
    metadataPath: string,
    parentPid?: number,
    ...args: any[]
  ) => Promise<ThirdPartyAppProcess | undefined>;
  runAppDirect: (
    process: typeof ThirdPartyAppProcess,
    metadataPath: string,
    parentPid?: number,
    ...args: any[]
  ) => Promise<ThirdPartyAppProcess | undefined>;
  loadHtml: (path: string) => Promise<string | undefined>;
  loadDirect: (path: string) => Promise<string | undefined>;
  Server: AxiosInstance;
  Debug: (m: any) => void;
  dayjs: (s: string) => dayjs.Dayjs;
  [key: string]: any;
}
