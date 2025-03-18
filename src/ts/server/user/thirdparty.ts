import { AppProcess } from "$ts/apps/process";
import { ThirdPartyAppProcess } from "$ts/apps/thirdparty";
import { MessageBox } from "$ts/dialog";
import { arrayToBlob, arrayToText, blobToDataURL, blobToText, textToArrayBuffer, textToBlob } from "$ts/fs/convert";
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
import { Process } from "$ts/process/instance";
import { CountInstances, decimalToHex, htmlspecialchars, Plural, sha256, sliceIntoChunks } from "$ts/util";
import type { App } from "$types/app";
import type { UserDaemon } from "./daemon";
import { SupplementaryThirdPartyPropFunctions } from "./supplementary";

export function ThirdPartyProps(daemon: UserDaemon, args: any[], app: App, wrap: (c: string) => string, metaPath: string) {
  const props: Record<string, any> = {
    kernel: daemon.kernel,
    daemon,
    handler: daemon.handler,
    fs: daemon.fs,
    env: daemon.env,
    dispatch: daemon.globalDispatch,
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
    Process,
    AppProcess,
    ThirdPartyAppProcess,
    argv: args,
    app,
    $ENTRYPOINT: app.entrypoint?.includes(":/") ? app.entrypoint! : join(app.workingDirectory!, app.entrypoint!),
    $METADATA: metaPath,
  };

  const supplementary = SupplementaryThirdPartyPropFunctions(daemon, daemon.fs, app, props, wrap);

  for (const [key, supp] of Object.entries(supplementary)) {
    props[key] = supp;
  }

  return props;
}
