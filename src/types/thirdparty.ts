import type { IServiceHost } from "$interfaces/service";
import type { MessageBox } from "$ts/dialog";
import type { CountInstances, decimalToHex, htmlspecialchars, Plural, sha256, sliceIntoChunks } from "$ts/util";
import type {
  arrayBufferToBlob,
  arrayBufferToText,
  blobToDataURL,
  blobToText,
  textToArrayBuffer,
  textToBlob,
} from "$ts/util/convert";
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
import type { IAppProcess } from "../interfaces/app";
import type { App } from "./app";
import type { AxiosInstance } from "./axios";
import type { dayjs } from "./dayjs";

export interface ThirdPartyPropMap {
  serviceHost: IServiceHost | undefined;
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
    arrayToText: typeof arrayBufferToText;
    textToArrayBuffer: typeof textToArrayBuffer;
    blobToText: typeof blobToText;
    textToBlob: typeof textToBlob;
    arrayToBlob: typeof arrayBufferToBlob;
    blobToDataURL: typeof blobToDataURL;
  };
  workingDirectory: string;
  Process: Function;
  AppProcess: Function;
  ThirdPartyAppProcess: Function;
  FilesystemDrive: Function;
  argv: any[];
  app: App;
  $ENTRYPOINT: string;
  $METADATA: string;
  SHELL_PID?: number;
  OPERATION_ID: string;
  load: (path: string) => Promise<any>;
  runApp: (
    process: Function,
    metadataPath: string,
    parentPid?: number,
    ...args: any[]
  ) => Promise<IThirdPartyAppProcess | undefined>;
  runAppDirect: (
    process: Function,
    metadataPath: string,
    parentPid?: number,
    ...args: any[]
  ) => Promise<IThirdPartyAppProcess | undefined>;
  loadHtml: (path: string) => Promise<string | undefined>;
  loadDirect: (path: string) => Promise<string | undefined>;
  Server: AxiosInstance;
  Debug: (m: any) => void;
  dayjs: (s: string) => dayjs.Dayjs;
  [key: string]: any;
}

export interface IThirdPartyAppProcess extends IAppProcess {
  workingDirectory: string;
  operationId: string;
  mutationLock: boolean;
  urlCache: Record<string, string>;
  elements: Record<string, Element>;
  __render__(body: HTMLDivElement): Promise<void>;
}
