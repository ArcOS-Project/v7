[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/tpa/thirdparty](../README.md) / ThirdPartyPropMap

# Interface: ThirdPartyPropMap

Defined in: [src/types/tpa/thirdparty.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L19)

## Indexable

> \[`key`: `string`\]: `any`

## Properties

### $ENTRYPOINT

> **$ENTRYPOINT**: `string`

Defined in: [src/types/tpa/thirdparty.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L61)

***

### $METADATA

> **$METADATA**: `string`

Defined in: [src/types/tpa/thirdparty.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L62)

***

### app

> **app**: [`App`](../../../apps/app/interfaces/App.md)

Defined in: [src/types/tpa/thirdparty.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L58)

***

### AppProcess

> **AppProcess**: [`IAppProcessConstructor`](../../../../interfaces/IAppProcess/interfaces/IAppProcessConstructor.md)

Defined in: [src/types/tpa/thirdparty.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L53)

***

### argv

> **argv**: `any`[]

Defined in: [src/types/tpa/thirdparty.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L57)

***

### BaseService

> **BaseService**: [`Constructs`](../../../../interfaces/common/interfaces/Constructs.md)\<[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md)\>

Defined in: [src/types/tpa/thirdparty.ts:81](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L81)

***

### contextProps

> **contextProps**: (`node`, `args`) => \{ `destroy`: () => `void`; \} \| `undefined`

Defined in: [src/types/tpa/thirdparty.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L85)

#### Parameters

##### node

`HTMLElement`

##### args

`any`[]

#### Returns

\{ `destroy`: () => `void`; \} \| `undefined`

***

### convert

> **convert**: `object`

Defined in: [src/types/tpa/thirdparty.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L43)

#### arrayToBlob

> **arrayToBlob**: (`buffer`, `type?`) => `Blob`

##### Parameters

###### buffer

`ArrayBuffer`

###### type?

`string`

##### Returns

`Blob`

#### arrayToText

> **arrayToText**: (`buffer`) => `string` \| `undefined`

##### Parameters

###### buffer

`ArrayBuffer` \| `ArrayLike`\<`number`\> \| `SharedArrayBuffer`

##### Returns

`string` \| `undefined`

#### blobToDataURL

> **blobToDataURL**: (`blob`) => `Promise`\<`string` \| `undefined`\>

##### Parameters

###### blob

`Blob`

##### Returns

`Promise`\<`string` \| `undefined`\>

#### blobToText

> **blobToText**: (`blob`) => `Promise`\<`string`\>

##### Parameters

###### blob

`Blob`

##### Returns

`Promise`\<`string`\>

#### textToArrayBuffer

> **textToArrayBuffer**: (`text`) => `ArrayBuffer`

##### Parameters

###### text

`string`

##### Returns

`ArrayBuffer`

#### textToBlob

> **textToBlob**: (`text`, `type?`) => `Blob`

##### Parameters

###### text

`string`

###### type?

`string`

##### Returns

`Blob`

***

### CustomTitlebar

> **CustomTitlebar**: [`Constructs`](../../../../interfaces/common/interfaces/Constructs.md)\<[`ICustomTitlebar`](../../../../interfaces/ICustomTitlebar/interfaces/ICustomTitlebar.md)\>

Defined in: [src/types/tpa/thirdparty.ts:84](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L84)

***

### daemon

> **daemon**: [`IUserDaemon`](../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

Defined in: [src/types/tpa/thirdparty.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L23)

***

### Debug

> **Debug**: (`m`) => `void`

Defined in: [src/types/tpa/thirdparty.ts:83](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L83)

#### Parameters

##### m

`any`

#### Returns

`void`

***

### env

> **env**: [`IEnvironment`](../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md)

Defined in: [src/types/tpa/thirdparty.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L20)

***

### FilesystemDrive

> **FilesystemDrive**: [`Constructs`](../../../../interfaces/common/interfaces/Constructs.md)\<[`IFilesystemDrive`](../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)\>

Defined in: [src/types/tpa/thirdparty.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L56)

***

### fs

> **fs**: [`IFilesystem`](../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md)

Defined in: [src/types/tpa/thirdparty.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L22)

***

### handler

> **handler**: [`IProcessHandler`](../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md)

Defined in: [src/types/tpa/thirdparty.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L21)

***

### HiddenUserPaths

> **HiddenUserPaths**: `string`[]

Defined in: [src/types/tpa/thirdparty.ts:97](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L97)

***

### icons

> **icons**: `Record`\<`string`, `string`\>

Defined in: [src/types/tpa/thirdparty.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L26)

***

### load

> **load**: (`path`) => `Promise`\<`any`\>

Defined in: [src/types/tpa/thirdparty.ts:65](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L65)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`any`\>

***

### loadDirect

> **loadDirect**: (`path`) => `Promise`\<`string` \| `undefined`\>

Defined in: [src/types/tpa/thirdparty.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L79)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

***

### loadHtml

> **loadHtml**: (`path`) => `Promise`\<`string` \| `undefined`\>

Defined in: [src/types/tpa/thirdparty.ts:78](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L78)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

***

### MessageBox

> **MessageBox**: (`data`, `parentPid`, `overlay?`) => `Promise`\<`void`\>

Defined in: [src/types/tpa/thirdparty.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L25)

#### Parameters

##### data

[`MessageBoxData`](../../../shared/messagebox/interfaces/MessageBoxData.md)

##### parentPid

`number`

##### overlay?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### OPERATION\_ID

> **OPERATION\_ID**: `string`

Defined in: [src/types/tpa/thirdparty.ts:64](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L64)

***

### Process

> **Process**: [`Constructs`](../../../../interfaces/common/interfaces/Constructs.md)\<[`IProcess`](../../../../interfaces/IProcess/interfaces/IProcess.md)\>

Defined in: [src/types/tpa/thirdparty.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L52)

***

### runApp

> **runApp**: (`process`, `metadataPath`, `parentPid?`, ...`args`) => `Promise`\<[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md) \| `undefined`\>

Defined in: [src/types/tpa/thirdparty.ts:66](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L66)

#### Parameters

##### process

[`IAppProcessConstructor`](../../../../interfaces/IAppProcess/interfaces/IAppProcessConstructor.md)

##### metadataPath

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md) \| `undefined`\>

***

### runAppDirect

> **runAppDirect**: (`process`, `metadataPath`, `parentPid?`, ...`args`) => `Promise`\<[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md) \| `undefined`\>

Defined in: [src/types/tpa/thirdparty.ts:72](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L72)

#### Parameters

##### process

[`IAppProcessConstructor`](../../../../interfaces/IAppProcess/interfaces/IAppProcessConstructor.md)

##### metadataPath

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md) \| `undefined`\>

***

### Server

> **Server**: [`AxiosInstance`](../../../libraries/axios/interfaces/AxiosInstance.md)

Defined in: [src/types/tpa/thirdparty.ts:80](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L80)

***

### serviceHost

> **serviceHost**: [`IServiceHost`](../../../../interfaces/IServiceHost/interfaces/IServiceHost.md) \| `undefined`

Defined in: [src/types/tpa/thirdparty.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L24)

***

### SHELL\_PID?

> `optional` **SHELL\_PID?**: `number`

Defined in: [src/types/tpa/thirdparty.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L63)

***

### Sleep

> **Sleep**: (`ms?`) => `Promise`\<`void`\>

Defined in: [src/types/tpa/thirdparty.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L59)

#### Parameters

##### ms?

`number`

#### Returns

`Promise`\<`void`\>

***

### Store

> **Store**: \<`T`\>(`initial?`) => [`ReadableStore`](../../../shared/writable/type-aliases/ReadableStore.md)\<`T`\>

Defined in: [src/types/tpa/thirdparty.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L60)

#### Type Parameters

##### T

`T`

#### Parameters

##### initial?

`T`

#### Returns

[`ReadableStore`](../../../shared/writable/type-aliases/ReadableStore.md)\<`T`\>

***

### SystemFolders

> **SystemFolders**: `string`[]

Defined in: [src/types/tpa/thirdparty.ts:96](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L96)

***

### ThirdPartyAppProcess

> **ThirdPartyAppProcess**: [`Constructs`](../../../../interfaces/common/interfaces/Constructs.md)\<[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md)\>

Defined in: [src/types/tpa/thirdparty.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L54)

***

### ThirdPartyProcess

> **ThirdPartyProcess**: [`Constructs`](../../../../interfaces/common/interfaces/Constructs.md)\<[`IThirdPartyProcess`](../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md)\>

Defined in: [src/types/tpa/thirdparty.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L55)

***

### TrayIconProcess

> **TrayIconProcess**: [`Constructs`](../../../../interfaces/common/interfaces/Constructs.md)\<[`ITrayIconProcess`](../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md)\>

Defined in: [src/types/tpa/thirdparty.ts:82](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L82)

***

### UserPathCaptions

> **UserPathCaptions**: `Record`\<`string`, `string`\>

Defined in: [src/types/tpa/thirdparty.ts:94](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L94)

***

### UserPathIcons

> **UserPathIcons**: `Record`\<`string`, `string`\>

Defined in: [src/types/tpa/thirdparty.ts:95](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L95)

***

### UserPaths

> **UserPaths**: `Record`\<`string`, `string`\>

Defined in: [src/types/tpa/thirdparty.ts:93](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L93)

***

### util

> **util**: `object`

Defined in: [src/types/tpa/thirdparty.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L27)

#### CountInstances

> **CountInstances**: (`input`, `search`) => `number`

##### Parameters

###### input

`string`

###### search

`string`

##### Returns

`number`

#### decimalToHex

> **decimalToHex**: (`value`, `maxLength?`) => `string`

##### Parameters

###### value

`number`

###### maxLength?

`number`

##### Returns

`string`

#### DownloadFile

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

#### formatBytes

> **formatBytes**: (`bytes`) => `string`

##### Parameters

###### bytes

`number`

##### Returns

`string`

#### getDriveLetter

> **getDriveLetter**: (`path`, `allowUuid?`) => `string` \| `undefined`

##### Parameters

###### path

`string`

###### allowUuid?

`boolean`

##### Returns

`string` \| `undefined`

#### getItemNameFromPath

> **getItemNameFromPath**: (`path`) => `string`

##### Parameters

###### path

`string`

##### Returns

`string`

#### getParentDirectory

> **getParentDirectory**: (`p`) => `string`

##### Parameters

###### p

`string`

##### Returns

`string`

#### htmlspecialchars

> **htmlspecialchars**: (`text`) => `string`

##### Parameters

###### text

`string`

##### Returns

`string`

#### join

> **join**: (...`args`) => `string`

##### Parameters

###### args

...`string`[]

##### Returns

`string`

#### onFileChange

> **onFileChange**: (`path`, `callback`) => `void`

##### Parameters

###### path

`string`

###### callback

() => `void`

##### Returns

`void`

#### onFolderChange

> **onFolderChange**: (`path`, `callback`) => `void`

##### Parameters

###### path

`string`

###### callback

() => `void`

##### Returns

`void`

#### Plural

> **Plural**: (`s`, `x`) => `string`

##### Parameters

###### s

`string`

###### x

`number`

##### Returns

`string`

#### sha256

> **sha256**: (`message`) => `Promise`\<`string`\>

##### Parameters

###### message

`string`

##### Returns

`Promise`\<`string`\>

#### sliceIntoChunks

> **sliceIntoChunks**: (`arr`, `chunkSize`) => `any`[][]

##### Parameters

###### arr

`any`[]

###### chunkSize

`number`

##### Returns

`any`[][]

***

### workingDirectory

> **workingDirectory**: `string`

Defined in: [src/types/tpa/thirdparty.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/tpa/thirdparty.ts#L51)
