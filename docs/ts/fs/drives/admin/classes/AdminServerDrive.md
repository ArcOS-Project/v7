[**ArcOS v7**](../../../../../README.md)

***

[ArcOS v7](../../../../../modules.md) / [ts/fs/drives/admin](../README.md) / AdminServerDrive

# Class: AdminServerDrive

Defined in: [src/ts/fs/drives/admin.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L12)

## Extends

- [`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md)

## Constructors

### Constructor

> **new AdminServerDrive**(`kernel`, `uuid`, `letter`, `token`, `targetUsername`): `AdminServerDrive`

Defined in: [src/ts/fs/drives/admin.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L21)

#### Parameters

##### kernel

[`WaveKernel`](../../../../kernel/classes/WaveKernel.md)

##### uuid

`string`

##### letter

`string`

##### token

`string`

##### targetUsername

`string`

#### Returns

`AdminServerDrive`

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`constructor`](../../../drive/classes/FilesystemDrive.md#constructor)

## Properties

### BUSY

> **BUSY**: `boolean` = `false`

Defined in: [src/ts/fs/drive.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L21)

#### Inherited from

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`BUSY`](../../../drive/classes/FilesystemDrive.md#busy)

***

### driveLetter

> **driveLetter**: `undefined` \| `string`

Defined in: [src/ts/fs/drive.ts:10](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L10)

#### Inherited from

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`driveLetter`](../../../drive/classes/FilesystemDrive.md#driveletter)

***

### fileLocks

> `protected` **fileLocks**: `Record`\<`string`, `number`\> = `{}`

Defined in: [src/ts/fs/drive.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L22)

#### Inherited from

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`fileLocks`](../../../drive/classes/FilesystemDrive.md#filelocks)

***

### FILESYSTEM\_LONG

> **FILESYSTEM\_LONG**: `string` = `"Admin Filesystem"`

Defined in: [src/ts/fs/drives/admin.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L19)

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`FILESYSTEM_LONG`](../../../drive/classes/FilesystemDrive.md#filesystem_long)

***

### FILESYSTEM\_SHORT

> **FILESYSTEM\_SHORT**: `string` = `"AFS"`

Defined in: [src/ts/fs/drives/admin.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L18)

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`FILESYSTEM_SHORT`](../../../drive/classes/FilesystemDrive.md#filesystem_short)

***

### FIXED

> **FIXED**: `boolean` = `false`

Defined in: [src/ts/fs/drives/admin.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L16)

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`FIXED`](../../../drive/classes/FilesystemDrive.md#fixed)

***

### HIDDEN

> `readonly` **HIDDEN**: `boolean` = `false`

Defined in: [src/ts/fs/drive.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L17)

#### Inherited from

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`HIDDEN`](../../../drive/classes/FilesystemDrive.md#hidden)

***

### IDENTIFIES\_AS

> **IDENTIFIES\_AS**: `string` = `"admin"`

Defined in: [src/ts/fs/drives/admin.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L17)

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`IDENTIFIES_AS`](../../../drive/classes/FilesystemDrive.md#identifies_as)

***

### kernel

> **kernel**: [`WaveKernel`](../../../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/fs/drive.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L13)

#### Inherited from

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`kernel`](../../../drive/classes/FilesystemDrive.md#kernel)

***

### label

> **label**: `string` = `""`

Defined in: [src/ts/fs/drive.ts:11](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L11)

#### Inherited from

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`label`](../../../drive/classes/FilesystemDrive.md#label)

***

### READONLY

> **READONLY**: `boolean` = `true`

Defined in: [src/ts/fs/drives/admin.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L15)

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`READONLY`](../../../drive/classes/FilesystemDrive.md#readonly)

***

### REMOVABLE

> `readonly` **REMOVABLE**: `boolean` = `false`

Defined in: [src/ts/fs/drive.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L15)

#### Inherited from

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`REMOVABLE`](../../../drive/classes/FilesystemDrive.md#removable)

***

### server

> **server**: [`ServerManager`](../../../../server/classes/ServerManager.md)

Defined in: [src/ts/fs/drive.ts:9](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L9)

#### Inherited from

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`server`](../../../drive/classes/FilesystemDrive.md#server)

***

### uuid

> **uuid**: `string` = `""`

Defined in: [src/ts/fs/drive.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L12)

#### Inherited from

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`uuid`](../../../drive/classes/FilesystemDrive.md#uuid)

## Methods

### \_\_spinDown()

> **\_\_spinDown**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drive.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L60)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`__spinDown`](../../../drive/classes/FilesystemDrive.md#__spindown)

***

### \_\_spinUp()

> **\_\_spinUp**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drive.ts:50](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L50)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`__spinUp`](../../../drive/classes/FilesystemDrive.md#__spinup)

***

### \_spinDown()

> **\_spinDown**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drive.ts:74](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L74)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`_spinDown`](../../../drive/classes/FilesystemDrive.md#_spindown)

***

### \_spinUp()

> **\_spinUp**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drives/admin.ts:29](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L29)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`_spinUp`](../../../drive/classes/FilesystemDrive.md#_spinup)

***

### bulk()

> **bulk**\<`T`\>(`path`, `extension`): `Promise`\<`Record`\<`string`, `T`\>\>

Defined in: [src/ts/fs/drives/admin.ts:149](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L149)

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

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`bulk`](../../../drive/classes/FilesystemDrive.md#bulk)

***

### copyItem()

> **copyItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drives/admin.ts:56](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L56)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`copyItem`](../../../drive/classes/FilesystemDrive.md#copyitem)

***

### createDirectory()

> **createDirectory**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drives/admin.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L48)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`createDirectory`](../../../drive/classes/FilesystemDrive.md#createdirectory)

***

### deleteItem()

> **deleteItem**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drives/admin.ts:52](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L52)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`deleteItem`](../../../drive/classes/FilesystemDrive.md#deleteitem)

***

### direct()

> **direct**(`path`): `Promise`\<`undefined` \| `string`\>

Defined in: [src/ts/fs/drives/admin.ts:133](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L133)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `string`\>

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`direct`](../../../drive/classes/FilesystemDrive.md#direct)

***

### lockFile()

> **lockFile**(`path`, `pid`): `Promise`\<`void`\>

Defined in: [src/ts/fs/drive.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L24)

#### Parameters

##### path

`string`

##### pid

`number`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`lockFile`](../../../drive/classes/FilesystemDrive.md#lockfile)

***

### Log()

> **Log**(`message`, `level`): `void`

Defined in: [src/ts/fs/drive.ts:46](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L46)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`Log`](../../../drive/classes/FilesystemDrive.md#log)

***

### moveItem()

> **moveItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drives/admin.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L60)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`moveItem`](../../../drive/classes/FilesystemDrive.md#moveitem)

***

### quota()

> **quota**(): `Promise`\<[`UserQuota`](../../../../../types/fs/interfaces/UserQuota.md)\>

Defined in: [src/ts/fs/drives/admin.ts:116](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L116)

#### Returns

`Promise`\<[`UserQuota`](../../../../../types/fs/interfaces/UserQuota.md)\>

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`quota`](../../../drive/classes/FilesystemDrive.md#quota)

***

### readDir()

> **readDir**(`path`): `Promise`\<`undefined` \| [`DirectoryReadReturn`](../../../../../types/fs/interfaces/DirectoryReadReturn.md)\>

Defined in: [src/ts/fs/drives/admin.ts:64](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L64)

#### Parameters

##### path

`string` = `""`

#### Returns

`Promise`\<`undefined` \| [`DirectoryReadReturn`](../../../../../types/fs/interfaces/DirectoryReadReturn.md)\>

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`readDir`](../../../drive/classes/FilesystemDrive.md#readdir)

***

### readFile()

> **readFile**(`path`, `onProgress`): `Promise`\<`undefined` \| `ArrayBuffer`\>

Defined in: [src/ts/fs/drives/admin.ts:79](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L79)

#### Parameters

##### path

`string`

##### onProgress

[`FilesystemProgressCallback`](../../../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`undefined` \| `ArrayBuffer`\>

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`readFile`](../../../drive/classes/FilesystemDrive.md#readfile)

***

### releaseLock()

> **releaseLock**(`path`, `pid`, `fromSystem`): `Promise`\<`void`\>

Defined in: [src/ts/fs/drive.ts:30](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L30)

#### Parameters

##### path

`string`

##### pid

`number`

##### fromSystem

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`releaseLock`](../../../drive/classes/FilesystemDrive.md#releaselock)

***

### tree()

> **tree**(`path`): `Promise`\<`undefined` \| [`RecursiveDirectoryReadReturn`](../../../../../types/fs/interfaces/RecursiveDirectoryReadReturn.md)\>

Defined in: [src/ts/fs/drives/admin.ts:101](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L101)

#### Parameters

##### path

`string` = `""`

#### Returns

`Promise`\<`undefined` \| [`RecursiveDirectoryReadReturn`](../../../../../types/fs/interfaces/RecursiveDirectoryReadReturn.md)\>

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`tree`](../../../drive/classes/FilesystemDrive.md#tree)

***

### writeFile()

> **writeFile**(`path`, `data`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drives/admin.ts:39](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drives/admin.ts#L39)

#### Parameters

##### path

`string`

##### data

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`FilesystemDrive`](../../../drive/classes/FilesystemDrive.md).[`writeFile`](../../../drive/classes/FilesystemDrive.md#writefile)
