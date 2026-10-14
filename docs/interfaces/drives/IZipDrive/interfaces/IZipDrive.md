[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/drives/IZipDrive](../README.md) / IZipDrive

# Interface: IZipDrive

Defined in: [src/interfaces/drives/IZipDrive.ts:4](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/drives/IZipDrive.ts#L4)

## Extends

- [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)

## Properties

### BUSY

> **BUSY**: `boolean`

Defined in: [src/interfaces/IFilesystemDrive.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L27)

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`BUSY`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#busy)

***

### CAPABILITIES

> `readonly` **CAPABILITIES**: `Record`\<[`DriveCapabilities`](../../../../types/system/fs/type-aliases/DriveCapabilities.md), `boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L26)

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`CAPABILITIES`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#capabilities)

***

### driveLetter

> **driveLetter**: `string` \| `undefined`

Defined in: [src/interfaces/IFilesystemDrive.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L16)

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`driveLetter`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#driveletter)

***

### FILESYSTEM\_LONG

> `readonly` **FILESYSTEM\_LONG**: `string`

Defined in: [src/interfaces/IFilesystemDrive.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L25)

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`FILESYSTEM_LONG`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#filesystem_long)

***

### FILESYSTEM\_SHORT

> `readonly` **FILESYSTEM\_SHORT**: `string`

Defined in: [src/interfaces/IFilesystemDrive.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L24)

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`FILESYSTEM_SHORT`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#filesystem_short)

***

### FIXED

> `readonly` **FIXED**: `boolean`

Defined in: [src/interfaces/IFilesystemDrive.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L19)

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`FIXED`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#fixed)

***

### HIDDEN

> `readonly` **HIDDEN**: `boolean`

Defined in: [src/interfaces/IFilesystemDrive.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L22)

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`HIDDEN`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#hidden)

***

### IDENTIFIES\_AS

> `readonly` **IDENTIFIES\_AS**: `string`

Defined in: [src/interfaces/IFilesystemDrive.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L23)

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`IDENTIFIES_AS`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#identifies_as)

***

### label

> **label**: `string`

Defined in: [src/interfaces/IFilesystemDrive.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L17)

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`label`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#label)

***

### READONLY

> `readonly` **READONLY**: `boolean`

Defined in: [src/interfaces/IFilesystemDrive.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L21)

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`READONLY`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#readonly)

***

### REMOVABLE

> `readonly` **REMOVABLE**: `boolean`

Defined in: [src/interfaces/IFilesystemDrive.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L20)

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`REMOVABLE`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#removable)

***

### server

> **server**: [`IServerManager`](../../../modules/IServerManager/interfaces/IServerManager.md)

Defined in: [src/interfaces/IFilesystemDrive.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L15)

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`server`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#server)

***

### uuid

> **uuid**: `string`

Defined in: [src/interfaces/IFilesystemDrive.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L18)

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`uuid`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#uuid)

## Methods

### \_\_spinDown()

> **\_\_spinDown**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L32)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`__spinDown`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#__spindown)

***

### \_\_spinUp()

> **\_\_spinUp**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L31)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`__spinUp`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#__spinup)

***

### \_spinDown()

> **\_spinDown**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L34)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`_spinDown`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#_spindown)

***

### \_spinUp()

> **\_spinUp**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L33)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`_spinUp`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#_spinup)

***

### \_sync()

> **\_sync**(`progress?`): `Promise`\<`void`\>

Defined in: [src/interfaces/drives/IZipDrive.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/drives/IZipDrive.ts#L5)

#### Parameters

##### progress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`void`\>

***

### bulk()

> **bulk**\<`T`\>(`path`, `extension`): `Promise`\<`Record`\<`string`, `T`\>\>

Defined in: [src/interfaces/IFilesystemDrive.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L45)

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

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`bulk`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#bulk)

***

### copyItem()

> **copyItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L40)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`copyItem`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#copyitem)

***

### createDirectory()

> **createDirectory**(`path`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L36)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`createDirectory`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#createdirectory)

***

### deleteItem()

> **deleteItem**(`path`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L42)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`deleteItem`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#deleteitem)

***

### direct()

> **direct**(`path`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L43)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`direct`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#direct)

***

### imageThumbnail()

> **imageThumbnail**(`path`, `width`, `height?`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L49)

#### Parameters

##### path

`string`

##### width

`number`

##### height?

`number`

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`imageThumbnail`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#imagethumbnail)

***

### isCapable()

> **isCapable**(`capability`): `void`

Defined in: [src/interfaces/IFilesystemDrive.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L47)

#### Parameters

##### capability

[`DriveCapabilities`](../../../../types/system/fs/type-aliases/DriveCapabilities.md)

#### Returns

`void`

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`isCapable`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#iscapable)

***

### lockFile()

> **lockFile**(`path`, `pid`): `Promise`\<`void`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L29)

#### Parameters

##### path

`string`

##### pid

`number`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`lockFile`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#lockfile)

***

### Log()

> **Log**(`message`, `level?`): `void`

Defined in: [src/interfaces/IFilesystemDrive.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L28)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../types/shared/logging/enumerations/LogLevel.md)

#### Returns

`void`

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`Log`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#log)

***

### moveItem()

> **moveItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L41)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`moveItem`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#moveitem)

***

### quota()

> **quota**(): `Promise`\<[`UserQuota`](../../../../types/system/fs/interfaces/UserQuota.md)\>

Defined in: [src/interfaces/IFilesystemDrive.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L44)

#### Returns

`Promise`\<[`UserQuota`](../../../../types/system/fs/interfaces/UserQuota.md)\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`quota`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#quota)

***

### readDir()

> **readDir**(`path`): `Promise`\<[`DirectoryReadReturn`](../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L35)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`readDir`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#readdir)

***

### readFile()

> **readFile**(`path`, `onProgress?`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L37)

#### Parameters

##### path

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`readFile`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#readfile)

***

### releaseLock()

> **releaseLock**(`path`, `pid`, `fromSystem?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L30)

#### Parameters

##### path

`string`

##### pid

`number`

##### fromSystem?

`boolean`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`releaseLock`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#releaselock)

***

### stat()

> **stat**(`path`): `Promise`\<[`FilesystemStat`](../../../../types/system/fs/interfaces/FilesystemStat.md) \| `undefined`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L46)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`FilesystemStat`](../../../../types/system/fs/interfaces/FilesystemStat.md) \| `undefined`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`stat`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#stat)

***

### tree()

> **tree**(`path`): `Promise`\<[`RecursiveDirectoryReadReturn`](../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L39)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`RecursiveDirectoryReadReturn`](../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`tree`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#tree)

***

### tryIsCapable()

> **tryIsCapable**(`capability`): `boolean`

Defined in: [src/interfaces/IFilesystemDrive.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L48)

#### Parameters

##### capability

[`DriveCapabilities`](../../../../types/system/fs/type-aliases/DriveCapabilities.md)

#### Returns

`boolean`

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`tryIsCapable`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#tryiscapable)

***

### writeFile()

> **writeFile**(`path`, `data`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L38)

#### Parameters

##### path

`string`

##### data

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md).[`writeFile`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md#writefile)
