[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/fs/drives/src](../README.md) / SourceFilesystemDrive

# Class: SourceFilesystemDrive

Defined in: [src/ts/kernel/mods/fs/drives/src.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/src.ts#L10)

## Extends

- [`FilesystemDrive`](../../generic/classes/FilesystemDrive.md)

## Constructors

### Constructor

> **new SourceFilesystemDrive**(`uuid`, `letter?`): `SourceFilesystemDrive`

Defined in: [src/ts/kernel/mods/fs/drives/src.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/src.ts#L43)

#### Parameters

##### uuid

`string`

##### letter?

`string`

#### Returns

`SourceFilesystemDrive`

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`constructor`](../../generic/classes/FilesystemDrive.md#constructor)

## Properties

### BUSY

> **BUSY**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L27)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`BUSY`](../../generic/classes/FilesystemDrive.md#busy)

***

### CAPABILITIES

> **CAPABILITIES**: `Record`\<[`DriveCapabilities`](../../../../../../../types/system/fs/type-aliases/DriveCapabilities.md), `boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/src.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/src.ts#L28)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`CAPABILITIES`](../../generic/classes/FilesystemDrive.md#capabilities)

***

### driveLetter

> **driveLetter**: `string` \| `undefined`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L17)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`driveLetter`](../../generic/classes/FilesystemDrive.md#driveletter)

***

### fileLocks

> `protected` **fileLocks**: `Record`\<`string`, `number`\> = `{}`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L28)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`fileLocks`](../../generic/classes/FilesystemDrive.md#filelocks)

***

### FILESYSTEM\_LONG

> **FILESYSTEM\_LONG**: `string` = `"Source Code Filesystem"`

Defined in: [src/ts/kernel/mods/fs/drives/src.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/src.ts#L13)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FILESYSTEM_LONG`](../../generic/classes/FilesystemDrive.md#filesystem_long)

***

### FILESYSTEM\_SHORT

> **FILESYSTEM\_SHORT**: `string` = `"SCFS"`

Defined in: [src/ts/kernel/mods/fs/drives/src.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/src.ts#L12)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FILESYSTEM_SHORT`](../../generic/classes/FilesystemDrive.md#filesystem_short)

***

### FIXED

> **FIXED**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/src.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/src.ts#L15)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FIXED`](../../generic/classes/FilesystemDrive.md#fixed)

***

### HIDDEN

> **HIDDEN**: `boolean` = `true`

Defined in: [src/ts/kernel/mods/fs/drives/src.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/src.ts#L18)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`HIDDEN`](../../generic/classes/FilesystemDrive.md#hidden)

***

### IDENTIFIES\_AS

> **IDENTIFIES\_AS**: `string` = `"src"`

Defined in: [src/ts/kernel/mods/fs/drives/src.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/src.ts#L11)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`IDENTIFIES_AS`](../../generic/classes/FilesystemDrive.md#identifies_as)

***

### label

> **label**: `string` = `"Source Code"`

Defined in: [src/ts/kernel/mods/fs/drives/src.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/src.ts#L14)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`label`](../../generic/classes/FilesystemDrive.md#label)

***

### READONLY

> **READONLY**: `boolean` = `true`

Defined in: [src/ts/kernel/mods/fs/drives/src.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/src.ts#L17)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`READONLY`](../../generic/classes/FilesystemDrive.md#readonly)

***

### REMOVABLE

> **REMOVABLE**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/src.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/src.ts#L16)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`REMOVABLE`](../../generic/classes/FilesystemDrive.md#removable)

***

### server

> **server**: [`IServerManager`](../../../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md)

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L16)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`server`](../../generic/classes/FilesystemDrive.md#server)

***

### uuid

> **uuid**: `string` = `""`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L19)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`uuid`](../../generic/classes/FilesystemDrive.md#uuid)

## Methods

### \_\_spinDown()

> **\_\_spinDown**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:100](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L100)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`__spinDown`](../../generic/classes/FilesystemDrive.md#__spindown)

***

### \_\_spinUp()

> **\_\_spinUp**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L71)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`__spinUp`](../../generic/classes/FilesystemDrive.md#__spinup)

***

### \_spinDown()

> **\_spinDown**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:114](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L114)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`_spinDown`](../../generic/classes/FilesystemDrive.md#_spindown)

***

### \_spinUp()

> **\_spinUp**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/src.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/src.ts#L47)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`_spinUp`](../../generic/classes/FilesystemDrive.md#_spinup)

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

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`bulk`](../../generic/classes/FilesystemDrive.md#bulk)

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

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`copyItem`](../../generic/classes/FilesystemDrive.md#copyitem)

***

### createDirectory()

> **createDirectory**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:129](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L129)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`createDirectory`](../../generic/classes/FilesystemDrive.md#createdirectory)

***

### deleteItem()

> **deleteItem**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:157](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L157)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`deleteItem`](../../generic/classes/FilesystemDrive.md#deleteitem)

***

### direct()

> **direct**(`path`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:161](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L161)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`direct`](../../generic/classes/FilesystemDrive.md#direct)

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

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`imageThumbnail`](../../generic/classes/FilesystemDrive.md#imagethumbnail)

***

### isCapable()

> **isCapable**(`capability`): `void`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:183](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L183)

#### Parameters

##### capability

[`DriveCapabilities`](../../../../../../../types/system/fs/type-aliases/DriveCapabilities.md)

#### Returns

`void`

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`isCapable`](../../generic/classes/FilesystemDrive.md#iscapable)

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

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`lockFile`](../../generic/classes/FilesystemDrive.md#lockfile)

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

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`Log`](../../generic/classes/FilesystemDrive.md#log)

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

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`moveItem`](../../generic/classes/FilesystemDrive.md#moveitem)

***

### quota()

> **quota**(): `Promise`\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:165](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L165)

#### Returns

`Promise`\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`quota`](../../generic/classes/FilesystemDrive.md#quota)

***

### readDir()

> **readDir**(`path`): `Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/src.ts:77](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/src.ts#L77)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`readDir`](../../generic/classes/FilesystemDrive.md#readdir)

***

### readFile()

> **readFile**(`path`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/src.ts:121](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/src.ts#L121)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`readFile`](../../generic/classes/FilesystemDrive.md#readfile)

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

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`releaseLock`](../../generic/classes/FilesystemDrive.md#releaselock)

***

### stat()

> **stat**(`path`): `Promise`\<[`FilesystemStat`](../../../../../../../types/system/fs/interfaces/FilesystemStat.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:179](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L179)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`FilesystemStat`](../../../../../../../types/system/fs/interfaces/FilesystemStat.md) \| `undefined`\>

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`stat`](../../generic/classes/FilesystemDrive.md#stat)

***

### tree()

> **tree**(`path`): `Promise`\<[`RecursiveDirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:141](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L141)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`RecursiveDirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`tree`](../../generic/classes/FilesystemDrive.md#tree)

***

### tryIsCapable()

> **tryIsCapable**(`capability`): `boolean`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:190](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L190)

#### Parameters

##### capability

[`DriveCapabilities`](../../../../../../../types/system/fs/type-aliases/DriveCapabilities.md)

#### Returns

`boolean`

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`tryIsCapable`](../../generic/classes/FilesystemDrive.md#tryiscapable)

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

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`writeFile`](../../generic/classes/FilesystemDrive.md#writefile)
