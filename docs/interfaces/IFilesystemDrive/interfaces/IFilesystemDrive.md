[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/IFilesystemDrive](../README.md) / IFilesystemDrive

# Interface: IFilesystemDrive

Defined in: [src/interfaces/IFilesystemDrive.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L14)

## Extended by

- [`ILegacyServerDrive`](../../drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md)
- [`IMemoryFilesystemDrive`](../../drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md)
- [`ISharedDrive`](../../drives/ISharedDrive/interfaces/ISharedDrive.md)
- [`IZipDrive`](../../drives/IZipDrive/interfaces/IZipDrive.md)

## Properties

### BUSY

> **BUSY**: `boolean`

Defined in: [src/interfaces/IFilesystemDrive.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L27)

***

### CAPABILITIES

> `readonly` **CAPABILITIES**: `Record`\<[`DriveCapabilities`](../../../types/system/fs/type-aliases/DriveCapabilities.md), `boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L26)

***

### driveLetter

> **driveLetter**: `string` \| `undefined`

Defined in: [src/interfaces/IFilesystemDrive.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L16)

***

### FILESYSTEM\_LONG

> `readonly` **FILESYSTEM\_LONG**: `string`

Defined in: [src/interfaces/IFilesystemDrive.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L25)

***

### FILESYSTEM\_SHORT

> `readonly` **FILESYSTEM\_SHORT**: `string`

Defined in: [src/interfaces/IFilesystemDrive.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L24)

***

### FIXED

> `readonly` **FIXED**: `boolean`

Defined in: [src/interfaces/IFilesystemDrive.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L19)

***

### HIDDEN

> `readonly` **HIDDEN**: `boolean`

Defined in: [src/interfaces/IFilesystemDrive.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L22)

***

### IDENTIFIES\_AS

> `readonly` **IDENTIFIES\_AS**: `string`

Defined in: [src/interfaces/IFilesystemDrive.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L23)

***

### label

> **label**: `string`

Defined in: [src/interfaces/IFilesystemDrive.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L17)

***

### READONLY

> `readonly` **READONLY**: `boolean`

Defined in: [src/interfaces/IFilesystemDrive.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L21)

***

### REMOVABLE

> `readonly` **REMOVABLE**: `boolean`

Defined in: [src/interfaces/IFilesystemDrive.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L20)

***

### server

> **server**: [`IServerManager`](../../modules/IServerManager/interfaces/IServerManager.md)

Defined in: [src/interfaces/IFilesystemDrive.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L15)

***

### uuid

> **uuid**: `string`

Defined in: [src/interfaces/IFilesystemDrive.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L18)

## Methods

### \_\_spinDown()

> **\_\_spinDown**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L32)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

***

### \_\_spinUp()

> **\_\_spinUp**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L31)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

***

### \_spinDown()

> **\_spinDown**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L34)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

***

### \_spinUp()

> **\_spinUp**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L33)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

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

***

### createDirectory()

> **createDirectory**(`path`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L36)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteItem()

> **deleteItem**(`path`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L42)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

***

### direct()

> **direct**(`path`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L43)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

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

***

### isCapable()

> **isCapable**(`capability`): `void`

Defined in: [src/interfaces/IFilesystemDrive.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L47)

#### Parameters

##### capability

[`DriveCapabilities`](../../../types/system/fs/type-aliases/DriveCapabilities.md)

#### Returns

`void`

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

***

### Log()

> **Log**(`message`, `level?`): `void`

Defined in: [src/interfaces/IFilesystemDrive.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L28)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../types/shared/logging/enumerations/LogLevel.md)

#### Returns

`void`

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

***

### quota()

> **quota**(): `Promise`\<[`UserQuota`](../../../types/system/fs/interfaces/UserQuota.md)\>

Defined in: [src/interfaces/IFilesystemDrive.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L44)

#### Returns

`Promise`\<[`UserQuota`](../../../types/system/fs/interfaces/UserQuota.md)\>

***

### readDir()

> **readDir**(`path`): `Promise`\<[`DirectoryReadReturn`](../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L35)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

***

### readFile()

> **readFile**(`path`, `onProgress?`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L37)

#### Parameters

##### path

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

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

***

### stat()

> **stat**(`path`): `Promise`\<[`FilesystemStat`](../../../types/system/fs/interfaces/FilesystemStat.md) \| `undefined`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L46)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`FilesystemStat`](../../../types/system/fs/interfaces/FilesystemStat.md) \| `undefined`\>

***

### tree()

> **tree**(`path`): `Promise`\<[`RecursiveDirectoryReadReturn`](../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L39)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`RecursiveDirectoryReadReturn`](../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

***

### tryIsCapable()

> **tryIsCapable**(`capability`): `boolean`

Defined in: [src/interfaces/IFilesystemDrive.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L48)

#### Parameters

##### capability

[`DriveCapabilities`](../../../types/system/fs/type-aliases/DriveCapabilities.md)

#### Returns

`boolean`

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

[`FilesystemProgressCallback`](../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>
