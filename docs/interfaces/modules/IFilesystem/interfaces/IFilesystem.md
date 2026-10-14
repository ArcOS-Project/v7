[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/modules/IFilesystem](../README.md) / IFilesystem

# Interface: IFilesystem

Defined in: [src/interfaces/modules/IFilesystem.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L16)

## Extends

- [`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md)

## Properties

### drives

> **drives**: `Record`\<`string`, [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)\>

Defined in: [src/interfaces/modules/IFilesystem.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L17)

***

### id

> **id**: `string`

Defined in: [src/interfaces/modules/IKernelModule.ts:3](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L3)

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`id`](../../IKernelModule/interfaces/IKernelModule.md#id)

***

### loadedProxies

> **loadedProxies**: [`IFilesystemProxy`](../../../IFilesystemDrive/interfaces/IFilesystemProxy.md)[]

Defined in: [src/interfaces/modules/IFilesystem.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L18)

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/modules/IKernelModule.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L5)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`__init`](../../IKernelModule/interfaces/IKernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L19)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`_init`](../../IKernelModule/interfaces/IKernelModule.md#_init)

***

### bulk()

> **bulk**\<`T`\>(`path`, `extension`): `Promise`\<`Record`\<`string`, `T`\>\>

Defined in: [src/interfaces/modules/IFilesystem.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L42)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### path

`string`

##### extension

`string`

#### Returns

`Promise`\<`Record`\<`string`, `T`\>\>

***

### copyItem()

> **copyItem**(`source`, `destination`, `dispatch?`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L47)

#### Parameters

##### source

`string`

##### destination

`string`

##### dispatch?

`boolean`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

***

### createDirectory()

> **createDirectory**(`path`, `dispatch?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L43)

#### Parameters

##### path

`string`

##### dispatch?

`boolean`

#### Returns

`Promise`\<`boolean`\>

***

### defaultProgress()

> **defaultProgress**(`d`): `void`

Defined in: [src/interfaces/modules/IFilesystem.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L56)

#### Parameters

##### d

[`FilesystemProgress`](../../../../types/system/fs/interfaces/FilesystemProgress.md)

#### Returns

`void`

***

### deleteItem()

> **deleteItem**(`path`, `dispatch?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L49)

#### Parameters

##### path

`string`

##### dispatch?

`boolean`

#### Returns

`Promise`\<`boolean`\>

***

### direct()

> **direct**(`path`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L59)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

***

### getDriveById()

> **getDriveById**(`id`): [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)

Defined in: [src/interfaces/modules/IFilesystem.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L20)

#### Parameters

##### id

`string`

#### Returns

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)

***

### getDriveByLetter()

> **getDriveByLetter**(`letter`, `error?`): [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)

Defined in: [src/interfaces/modules/IFilesystem.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L31)

#### Parameters

##### letter

`string`

##### error?

`boolean`

#### Returns

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)

***

### getDriveByPath()

> **getDriveByPath**(`path`): [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)

Defined in: [src/interfaces/modules/IFilesystem.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L33)

#### Parameters

##### path

`string`

#### Returns

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)

***

### getDriveIdByIdentifier()

> **getDriveIdByIdentifier**(`identifier`): `string`

Defined in: [src/interfaces/modules/IFilesystem.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L28)

#### Parameters

##### identifier

`string`

#### Returns

`string`

***

### getDriveIdentifier()

> **getDriveIdentifier**(`path`): `string`

Defined in: [src/interfaces/modules/IFilesystem.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L32)

#### Parameters

##### path

`string`

#### Returns

`string`

***

### getProxyInfo()

> **getProxyInfo**(`p`, `topLevel?`): [`FsProxyInfo`](../../../../types/system/fs/interfaces/FsProxyInfo.md) \| `undefined`

Defined in: [src/interfaces/modules/IFilesystem.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L37)

#### Parameters

##### p

`string`

##### topLevel?

`boolean`

#### Returns

[`FsProxyInfo`](../../../../types/system/fs/interfaces/FsProxyInfo.md) \| `undefined`

***

### imageThumbnail()

> **imageThumbnail**(`path`, `width`, `height?`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L63)

#### Parameters

##### path

`string`

##### width

`number`

##### height?

`number`

#### Returns

`Promise`\<`string` \| `undefined`\>

***

### isDirectory()

> **isDirectory**(`path`): `Promise`\<`false` \| [`DirectoryReadReturn`](../../../../types/system/fs/interfaces/DirectoryReadReturn.md)\>

Defined in: [src/interfaces/modules/IFilesystem.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L61)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| [`DirectoryReadReturn`](../../../../types/system/fs/interfaces/DirectoryReadReturn.md)\>

***

### isKmod()

> **isKmod**(): `void`

Defined in: [src/interfaces/modules/IKernelModule.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L6)

#### Returns

`void`

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`isKmod`](../../IKernelModule/interfaces/IKernelModule.md#iskmod)

***

### lockFile()

> **lockFile**(`path`, `pid`): `Promise`\<`void`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L57)

#### Parameters

##### path

`string`

##### pid

`number`

#### Returns

`Promise`\<`void`\>

***

### mountDrive()

> **mountDrive**\<`T`\>(`id`, `supplier`, `letter?`, `onProgress?`, ...`args`): `Promise`\<`false` \| `T`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L21)

#### Type Parameters

##### T

`T` *extends* [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md) = [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)

#### Parameters

##### id

`string`

##### supplier

[`Constructs`](../../../common/interfaces/Constructs.md)\<`T`\>

##### letter?

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

##### args

...`any`[]

#### Returns

`Promise`\<`false` \| `T`\>

***

### moveItem()

> **moveItem**(`source`, `destination`, `dispatch?`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L48)

#### Parameters

##### source

`string`

##### destination

`string`

##### dispatch?

`boolean`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

***

### nextAvailableDriveLetter()

> **nextAvailableDriveLetter**(): `string` \| `undefined`

Defined in: [src/interfaces/modules/IFilesystem.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L60)

#### Returns

`string` \| `undefined`

***

### readDir()

> **readDir**(`path`): `Promise`\<[`DirectoryReadReturn`](../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L41)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

***

### readFile()

> **readFile**(`path`, `onProgress?`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L44)

#### Parameters

##### path

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

***

### releaseLock()

> **releaseLock**(`path`, `pid`): `Promise`\<`void`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L58)

#### Parameters

##### path

`string`

##### pid

`number`

#### Returns

`Promise`\<`void`\>

***

### removeDriveLetter()

> **removeDriveLetter**(`p`): `string`

Defined in: [src/interfaces/modules/IFilesystem.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L35)

#### Parameters

##### p

`string`

#### Returns

`string`

***

### stat()

> **stat**(`path`): `Promise`\<[`ExtendedStat`](../../../../types/system/fs/interfaces/ExtendedStat.md) \| `undefined`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L62)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`ExtendedStat`](../../../../types/system/fs/interfaces/ExtendedStat.md) \| `undefined`\>

***

### tree()

> **tree**(`path`): `Promise`\<[`RecursiveDirectoryReadReturn`](../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L46)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`RecursiveDirectoryReadReturn`](../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

***

### tryGetProxyInfo()

> **tryGetProxyInfo**(`p`, `topLevel?`): [`FsProxyInfo`](../../../../types/system/fs/interfaces/FsProxyInfo.md) \| `undefined`

Defined in: [src/interfaces/modules/IFilesystem.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L38)

#### Parameters

##### p

`string`

##### topLevel?

`boolean`

#### Returns

[`FsProxyInfo`](../../../../types/system/fs/interfaces/FsProxyInfo.md) \| `undefined`

***

### tryHandleProxyReadDir()

> **tryHandleProxyReadDir**(`p`): `Promise`\<[`DirectoryReadReturn`](../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L39)

#### Parameters

##### p

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

***

### tryHandleProxyReadFile()

> **tryHandleProxyReadFile**(`p`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L40)

#### Parameters

##### p

`string`

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

***

### umountAllOfType()

> **umountAllOfType**(`identifiesAs`, `fromSystem?`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/IFilesystem.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L30)

#### Parameters

##### identifiesAs

`string`

##### fromSystem?

`boolean`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### umountDrive()

> **umountDrive**(`id`, `fromSystem?`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L29)

#### Parameters

##### id

`string`

##### fromSystem?

`boolean`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

***

### uploadFiles()

> **uploadFiles**(`target`, `accept?`, `multiple?`, `onProgress?`): `Promise`\<[`UploadReturn`](../../../../types/system/fs/type-aliases/UploadReturn.md)\>

Defined in: [src/interfaces/modules/IFilesystem.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L50)

#### Parameters

##### target

`string`

##### accept?

`string`

##### multiple?

`boolean`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`UploadReturn`](../../../../types/system/fs/type-aliases/UploadReturn.md)\>

***

### validateDriveLetter()

> **validateDriveLetter**(`letter`): `void`

Defined in: [src/interfaces/modules/IFilesystem.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L36)

#### Parameters

##### letter

`string`

#### Returns

`void`

***

### validatePath()

> **validatePath**(`p`): `void`

Defined in: [src/interfaces/modules/IFilesystem.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L34)

#### Parameters

##### p

`string`

#### Returns

`void`

***

### writeFile()

> **writeFile**(`path`, `data`, `onProgress?`, `dispatch?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/modules/IFilesystem.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IFilesystem.ts#L45)

#### Parameters

##### path

`string`

##### data

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

##### dispatch?

`boolean`

#### Returns

`Promise`\<`boolean`\>
