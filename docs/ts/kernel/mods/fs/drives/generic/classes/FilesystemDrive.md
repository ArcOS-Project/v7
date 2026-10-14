[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/fs/drives/generic](../README.md) / FilesystemDrive

# Class: FilesystemDrive

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L15)

## Extended by

- [`AdminFileSystem`](../../admin/classes/AdminFileSystem.md)
- [`AdminServerDrive`](../../aefs/classes/AdminServerDrive.md)
- [`DevDrive`](../../devenv/classes/DevDrive.md)
- [`LegacyServerDrive`](../../legacy/classes/LegacyServerDrive.md)
- [`SharedDrive`](../../share/classes/SharedDrive.md)
- [`SourceFilesystemDrive`](../../src/classes/SourceFilesystemDrive.md)
- [`MemoryFilesystemDrive`](../../temp/classes/MemoryFilesystemDrive.md)
- [`UserDrive`](../../userfs/classes/UserDrive.md)
- [`ZIPDrive`](../../zip/classes/ZIPDrive.md)

## Implements

- [`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)

## Constructors

### Constructor

> **new FilesystemDrive**(`uuid`, `letter?`, ...`args`): `FilesystemDrive`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L45)

#### Parameters

##### uuid

`string`

##### letter?

`string`

##### args

...`any`[]

#### Returns

`FilesystemDrive`

## Properties

### BUSY

> **BUSY**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L27)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`BUSY`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#busy)

***

### CAPABILITIES

> **CAPABILITIES**: `Record`\<[`DriveCapabilities`](../../../../../../../types/system/fs/type-aliases/DriveCapabilities.md), `boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L30)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`CAPABILITIES`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#capabilities)

***

### driveLetter

> **driveLetter**: `string` \| `undefined`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L17)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`driveLetter`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#driveletter)

***

### fileLocks

> `protected` **fileLocks**: `Record`\<`string`, `number`\> = `{}`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L28)

***

### FILESYSTEM\_LONG

> `readonly` **FILESYSTEM\_LONG**: `string` = `"Generic Filesystem"`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L26)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`FILESYSTEM_LONG`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#filesystem_long)

***

### FILESYSTEM\_SHORT

> `readonly` **FILESYSTEM\_SHORT**: `string` = `"GFS"`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L25)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`FILESYSTEM_SHORT`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#filesystem_short)

***

### FIXED

> `readonly` **FIXED**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L20)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`FIXED`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#fixed)

***

### HIDDEN

> `readonly` **HIDDEN**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L23)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`HIDDEN`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#hidden)

***

### IDENTIFIES\_AS

> `readonly` **IDENTIFIES\_AS**: `string` = `"generic"`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L24)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`IDENTIFIES_AS`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#identifies_as)

***

### label

> **label**: `string` = `""`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L18)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`label`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#label)

***

### READONLY

> `readonly` **READONLY**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L22)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`READONLY`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#readonly)

***

### REMOVABLE

> `readonly` **REMOVABLE**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L21)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`REMOVABLE`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#removable)

***

### server

> **server**: [`IServerManager`](../../../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md)

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L16)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`server`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#server)

***

### uuid

> **uuid**: `string` = `""`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L19)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`uuid`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#uuid)

## Methods

### \_\_spinDown()

> **\_\_spinDown**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:100](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L100)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`__spinDown`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#__spindown)

***

### \_\_spinUp()

> **\_\_spinUp**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L71)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`__spinUp`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#__spinup)

***

### \_spinDown()

> **\_spinDown**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:114](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L114)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`_spinDown`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#_spindown)

***

### \_spinUp()

> **\_spinUp**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:110](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L110)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`_spinUp`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#_spinup)

***

### bulk()

> **bulk**\<`T`\>(`path`, `extension`): `Promise`\<`Record`\<`string`, `T`\>\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:175](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L175)

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

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`bulk`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#bulk)

***

### copyItem()

> **copyItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:149](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L149)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`copyItem`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#copyitem)

***

### createDirectory()

> **createDirectory**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:129](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L129)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`createDirectory`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#createdirectory)

***

### deleteItem()

> **deleteItem**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:157](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L157)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`deleteItem`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#deleteitem)

***

### direct()

> **direct**(`path`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:161](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L161)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`direct`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#direct)

***

### imageThumbnail()

> **imageThumbnail**(`path`, `width`, `height?`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:194](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L194)

#### Parameters

##### path

`string`

##### width

`number`

##### height?

`number`

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`imageThumbnail`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#imagethumbnail)

***

### isCapable()

> **isCapable**(`capability`): `void`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:183](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L183)

#### Parameters

##### capability

[`DriveCapabilities`](../../../../../../../types/system/fs/type-aliases/DriveCapabilities.md)

#### Returns

`void`

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`isCapable`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#iscapable)

***

### lockFile()

> **lockFile**(`path`, `pid`): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L56)

#### Parameters

##### path

`string`

##### pid

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`lockFile`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#lockfile)

***

### Log()

> **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L52)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`Log`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#log)

***

### moveItem()

> **moveItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:153](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L153)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`moveItem`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#moveitem)

***

### quota()

> **quota**(): `Promise`\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:165](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L165)

#### Returns

`Promise`\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`quota`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#quota)

***

### readDir()

> **readDir**(`path`): `Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:118](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L118)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`readDir`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#readdir)

***

### readFile()

> **readFile**(`path`, `onProgress?`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:133](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L133)

#### Parameters

##### path

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`readFile`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#readfile)

***

### releaseLock()

> **releaseLock**(`path`, `pid`, `fromSystem?`): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L63)

#### Parameters

##### path

`string`

##### pid

`number`

##### fromSystem?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`releaseLock`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#releaselock)

***

### stat()

> **stat**(`path`): `Promise`\<[`FilesystemStat`](../../../../../../../types/system/fs/interfaces/FilesystemStat.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:179](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L179)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`FilesystemStat`](../../../../../../../types/system/fs/interfaces/FilesystemStat.md) \| `undefined`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`stat`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#stat)

***

### tree()

> **tree**(`path`): `Promise`\<[`RecursiveDirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:141](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L141)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`RecursiveDirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`tree`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#tree)

***

### tryIsCapable()

> **tryIsCapable**(`capability`): `boolean`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:190](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L190)

#### Parameters

##### capability

[`DriveCapabilities`](../../../../../../../types/system/fs/type-aliases/DriveCapabilities.md)

#### Returns

`boolean`

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`tryIsCapable`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#tryiscapable)

***

### writeFile()

> **writeFile**(`path`, `data`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:137](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L137)

#### Parameters

##### path

`string`

##### data

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`writeFile`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#writefile)
