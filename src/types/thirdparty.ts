import type { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import type { SystemDispatch } from "$ts/dispatch";
import type { Filesystem } from "$ts/fs";
import type { arrayToBlob, arrayToText, blobToDataURL, blobToText, textToArrayBuffer, textToBlob } from "$ts/fs/convert";
import type {
  DownloadFile,
  formatBytes,
  getItemNameFromPath,
  getDriveLetter,
  getParentDirectory,
  join,
  onFileChange,
  onFolderChange,
} from "$ts/fs/util";
import type { WaveKernel } from "$ts/kernel";
import type { Environment } from "$ts/kernel/env";
import type { ProcessHandler } from "$ts/process/handler";
import type { UserDaemon } from "$ts/server/user/daemon";
import type { ServiceHost } from "$ts/services";
import type { CountInstances, decimalToHex, htmlspecialchars, Plural, sha256, sliceIntoChunks } from "$ts/util";
import type { App } from "./app";
import type { AxiosInstance } from "./axios";
import type { dayjs } from "./dayjs";

export interface ThirdPartyPropMap {
  kernel: WaveKernel;
  daemon: UserDaemon;
  handler: ProcessHandler;
  fs: Filesystem;
  env: Environment;
  serviceHost: ServiceHost | undefined;
  dispatch: SystemDispatch;
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
  argv: any[];
  app: App;
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
  Server: AxiosInstance;
  Debug: (m: any) => void;
  dayjs: (s: string) => dayjs.Dayjs;
  [key: string]: any;
}
