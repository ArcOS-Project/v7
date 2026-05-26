import type { Constructs } from "$interfaces/common";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ICustomTitlebar } from "$interfaces/ICustomTitlebar";
import type { IFilesystemDrive } from "$interfaces/IFilesystemDrive";
import type { IProcess } from "$interfaces/IProcess";
import type { IBaseService, IServiceHost } from "$interfaces/IServiceHost";
import type { IThirdPartyAppProcess } from "$interfaces/IThirdPartyAppProcess";
import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { IEnvironment } from "$interfaces/modules/IEnvironment";
import type { IFilesystem } from "$interfaces/modules/IFilesystem";
import type { IProcessHandler } from "$interfaces/modules/IProcessHandler";
import type { ITrayIconProcess } from "$interfaces/services/ITrayHostService";
import type { App } from "./app";
import type { AxiosInstance } from "./axios";
import type { MessageBoxData } from "./messagebox";
import type { ReadableStore } from "./writable";

export interface ThirdPartyPropMap {
  env: IEnvironment;
  handler: IProcessHandler;
  fs: IFilesystem;
  daemon: IUserDaemon;
  serviceHost: IServiceHost | undefined;
  MessageBox: (data: MessageBoxData, parentPid: number, overlay?: boolean) => Promise<void>;
  icons: Record<string, string>;
  util: {
    htmlspecialchars: (text: string) => string;
    Plural: (s: string, x: number) => string;
    sliceIntoChunks: (arr: any[], chunkSize: number) => any[][];
    decimalToHex: (value: number, maxLength?: number) => string;
    sha256: (message: string) => Promise<string>;
    CountInstances: (input: string, search: string) => number;
    join: (...args: string[]) => string;
    getItemNameFromPath: (path: string) => string;
    getParentDirectory: (p: string) => string;
    getDriveLetter: (path: string, allowUuid?: boolean) => string | undefined;
    formatBytes: (bytes: number) => string;
    DownloadFile: (file: ArrayBuffer, filename: string, mimetype?: string | undefined) => void;
    onFileChange: (path: string, callback: () => void) => void;
    onFolderChange: (path: string, callback: () => void) => void;
  };
  convert: {
    arrayToText: (buffer: (ArrayBuffer | SharedArrayBuffer) | ArrayLike<number>) => string | undefined;
    textToArrayBuffer: (text: string) => ArrayBuffer;
    blobToText: (blob: Blob) => Promise<string>;
    textToBlob: (text: string, type?: string) => Blob;
    arrayToBlob: (buffer: ArrayBuffer, type?: string) => Blob;
    blobToDataURL: (blob: Blob) => Promise<string | undefined>;
  };
  workingDirectory: string;
  Process: Constructs<IProcess>;
  AppProcess: Constructs<IAppProcess>;
  ThirdPartyAppProcess: Constructs<IThirdPartyAppProcess>;
  FilesystemDrive: Constructs<IFilesystemDrive>;
  argv: any[];
  app: App;
  Sleep: (ms?: number) => Promise<void>;
  Store: <T>(initial?: T | undefined) => ReadableStore<T>;
  $ENTRYPOINT: string;
  $METADATA: string;
  SHELL_PID?: number;
  OPERATION_ID: string;
  load: (path: string) => Promise<any>;
  runApp: (
    process: Constructs<IAppProcess>,
    metadataPath: string,
    parentPid?: number,
    ...args: any[]
  ) => Promise<IThirdPartyAppProcess | undefined>;
  runAppDirect: (
    process: Constructs<IAppProcess>,
    metadataPath: string,
    parentPid?: number,
    ...args: any[]
  ) => Promise<IThirdPartyAppProcess | undefined>;
  loadHtml: (path: string) => Promise<string | undefined>;
  loadDirect: (path: string) => Promise<string | undefined>;
  Server: AxiosInstance;
  BaseService: Constructs<IBaseService>;
  TrayIconProcess: Constructs<ITrayIconProcess>;
  Debug: (m: any) => void;
  CustomTitlebar: Constructs<ICustomTitlebar>;
  contextProps: (
    node: HTMLElement,
    args: any[]
  ) =>
    | {
        destroy: () => void;
      }
    | undefined;
  UserPaths: Record<string, string>;
  UserPathCaptions: Record<string, string>;
  UserPathIcons: Record<string, string>;
  SystemFolders: string[];
  HiddenUserPaths: string[];
  [key: string]: any;
}
