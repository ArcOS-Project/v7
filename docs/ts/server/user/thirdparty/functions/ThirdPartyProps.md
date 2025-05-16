[**ArcOS v7**](../../../../../README.md)

***

[ArcOS v7](../../../../../modules.md) / [ts/server/user/thirdparty](../README.md) / ThirdPartyProps

# Function: ThirdPartyProps()

> **ThirdPartyProps**(`daemon`, `args`, `app`, `wrap`, `metaPath`, `workingDirectory?`): `object`

Defined in: [src/ts/server/user/thirdparty.ts:33](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/thirdparty.ts#L33)

## Parameters

### daemon

[`UserDaemon`](../../daemon/classes/UserDaemon.md)

### args

`any`[]

### app

[`App`](../../../../../types/app/interfaces/App.md)

### wrap

(`c`) => `string`

### metaPath

`string`

### workingDirectory?

`string`

## Returns

`object`

### $ENTRYPOINT

> **$ENTRYPOINT**: `string`

### $METADATA

> **$METADATA**: `string` = `metaPath`

### app

> **app**: [`App`](../../../../../types/app/interfaces/App.md)

### AppProcess

> **AppProcess**: *typeof* [`AppProcess`](../../../../apps/process/classes/AppProcess.md)

### argv

> **argv**: `any`[] = `args`

### axios

> **axios**: `AxiosStatic`

### BaseService

> **BaseService**: *typeof* [`BaseService`](../../../../services/base/classes/BaseService.md)

### convert

> **convert**: `object`

#### convert.arrayToBlob()

> **arrayToBlob**: (`buffer`, `type`) => `Blob`

##### Parameters

###### buffer

`ArrayBuffer`

###### type

`string` = `"text/plain"`

##### Returns

`Blob`

#### convert.arrayToText()

> **arrayToText**: (`buffer`) => `string`

##### Parameters

###### buffer

`ArrayLike`\<`number`\> | `ArrayBufferLike`

##### Returns

`string`

#### convert.blobToDataURL()

> **blobToDataURL**: (`blob`) => `Promise`\<`undefined` \| `string`\>

##### Parameters

###### blob

`Blob`

##### Returns

`Promise`\<`undefined` \| `string`\>

#### convert.blobToText()

> **blobToText**: (`blob`) => `Promise`\<`string`\>

##### Parameters

###### blob

`Blob`

##### Returns

`Promise`\<`string`\>

#### convert.textToArrayBuffer()

> **textToArrayBuffer**: (`text`) => `ArrayBuffer`

##### Parameters

###### text

`string`

##### Returns

`ArrayBuffer`

#### convert.textToBlob()

> **textToBlob**: (`text`, `type`) => `Blob`

##### Parameters

###### text

`string`

###### type

`string` = `"text/plain"`

##### Returns

`Blob`

### daemon

> **daemon**: [`UserDaemon`](../../daemon/classes/UserDaemon.md)

### dayjs

> **dayjs**: `__module`

### Debug()

> **Debug**: (`m`) => `void`

#### Parameters

##### m

`any`

#### Returns

`void`

### dispatch

> **dispatch**: [`SystemDispatch`](../../../../dispatch/classes/SystemDispatch.md) = `daemon.systemDispatch`

### env

> **env**: [`Environment`](../../../../kernel/env/classes/Environment.md) = `daemon.env`

### FilesystemDrive

> **FilesystemDrive**: *typeof* [`FilesystemDrive`](../../../../fs/drive/classes/FilesystemDrive.md)

### fs

> **fs**: [`Filesystem`](../../../../fs/classes/Filesystem.md) = `daemon.fs`

### handler

> **handler**: [`ProcessHandler`](../../../../process/handler/classes/ProcessHandler.md) = `daemon.handler`

### icons

> **icons**: `Record`\<`string`, `string`\>

### kernel

> **kernel**: [`WaveKernel`](../../../../kernel/classes/WaveKernel.md) = `daemon.kernel`

### KernelModule

> **KernelModule**: *typeof* [`KernelModule`](../../../../kernel/module/classes/KernelModule.md)

### load()

> **load**: (`path`) => `Promise`\<`any`\>

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`any`\>

### loadHtml()

> **loadHtml**: (`path`) => `Promise`\<`undefined` \| `string`\>

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `string`\>

### MessageBox()

> **MessageBox**: (`data`, `parentPid`, `overlay`) => `Promise`\<`void`\>

#### Parameters

##### data

[`MessageBoxData`](../../../../../types/messagebox/interfaces/MessageBoxData.md)

##### parentPid

`number`

##### overlay

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

### Process

> **Process**: *typeof* [`Process`](../../../../process/instance/classes/Process.md)

### runApp()

> **runApp**: (`process`, `metadataPath`, `parentPid?`, ...`args`) => `Promise`\<`undefined` \| [`ThirdPartyAppProcess`](../../../../apps/thirdparty/classes/ThirdPartyAppProcess.md)\>

#### Parameters

##### process

*typeof* [`ThirdPartyAppProcess`](../../../../apps/thirdparty/classes/ThirdPartyAppProcess.md)

##### metadataPath

`string`

##### parentPid?

`number`

##### args?

...`any`[]

#### Returns

`Promise`\<`undefined` \| [`ThirdPartyAppProcess`](../../../../apps/thirdparty/classes/ThirdPartyAppProcess.md)\>

### Server

> **Server**: `AxiosInstance` = `Axios`

### serviceHost

> **serviceHost**: `undefined` \| [`ServiceHost`](../../../../services/classes/ServiceHost.md) = `daemon.serviceHost`

### Sleep()

> **Sleep**: (`ms`) => `Promise`\<`unknown`\>

#### Parameters

##### ms

`number` = `0`

#### Returns

`Promise`\<`unknown`\>

### Store()

> **Store**: \<`T`\>(`initial?`) => [`ReadableStore`](../../../../writable/type-aliases/ReadableStore.md)\<`T`\>

#### Type Parameters

##### T

`T`

#### Parameters

##### initial?

`T`

#### Returns

[`ReadableStore`](../../../../writable/type-aliases/ReadableStore.md)\<`T`\>

### ThirdPartyAppProcess

> **ThirdPartyAppProcess**: *typeof* [`ThirdPartyAppProcess`](../../../../apps/thirdparty/classes/ThirdPartyAppProcess.md)

### TrayIconProcess

> **TrayIconProcess**: *typeof* [`TrayIconProcess`](../../../../ui/tray/process/classes/TrayIconProcess.md)

### util

> **util**: `object`

#### util.CountInstances()

> **CountInstances**: (`input`, `search`) => `number`

##### Parameters

###### input

`string`

###### search

`string`

##### Returns

`number`

#### util.decimalToHex()

> **decimalToHex**: (`value`, `maxLength`) => `string`

##### Parameters

###### value

`number`

###### maxLength

`number` = `2`

##### Returns

`string`

#### util.DownloadFile()

> **DownloadFile**: (`file`, `filename`, `mimetype?`) => `void`

##### Parameters

###### file

`ArrayBuffer`

###### filename

`string`

###### mimetype?

`string`

##### Returns

`void`

#### util.formatBytes()

> **formatBytes**: (`bytes`) => `string`

Formats the incoming bytes to a human-readable format

##### Parameters

###### bytes

`number`

The bytes to format

##### Returns

`string`

The formatted size

#### util.getDirectoryName()

> **getDirectoryName**: (`path`) => `string`

##### Parameters

###### path

`string`

##### Returns

`string`

#### util.getDriveLetter()

> **getDriveLetter**: (`path`, `allowUuid`) => `undefined` \| `string`

##### Parameters

###### path

`string`

###### allowUuid

`boolean` = `false`

##### Returns

`undefined` \| `string`

#### util.getParentDirectory()

> **getParentDirectory**: (`p`) => `string`

##### Parameters

###### p

`string`

##### Returns

`string`

#### util.htmlspecialchars()

> **htmlspecialchars**: (`text`) => `string`

##### Parameters

###### text

`string`

##### Returns

`string`

#### util.join()

> **join**: (...`args`) => `string`

##### Parameters

###### args

...`string`[]

##### Returns

`string`

#### util.onFileChange()

> **onFileChange**: (`path`, `callback`) => `void`

##### Parameters

###### path

`string`

###### callback

() => `void`

##### Returns

`void`

#### util.onFolderChange()

> **onFolderChange**: (`path`, `callback`) => `void`

##### Parameters

###### path

`string`

###### callback

() => `void`

##### Returns

`void`

#### util.Plural()

> **Plural**: (`s`, `x`) => `string`

##### Parameters

###### s

`string`

###### x

`number`

##### Returns

`string`

#### util.sha256()

> **sha256**: (`message`) => `Promise`\<`string`\>

##### Parameters

###### message

`string`

##### Returns

`Promise`\<`string`\>

#### util.sliceIntoChunks()

> **sliceIntoChunks**: (`arr`, `chunkSize`) => `any`[][]

##### Parameters

###### arr

`any`[]

###### chunkSize

`number`

##### Returns

`any`[][]

### workingDirectory

> **workingDirectory**: `string`
