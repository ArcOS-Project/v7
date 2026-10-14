[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/fs/drives/zip](../README.md) / ZIPDrive

# Class: ZIPDrive

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L13)

## Extends

- [`FilesystemDrive`](../../generic/classes/FilesystemDrive.md)

## Implements

- [`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md)

## Constructors

### Constructor

> **new ZIPDrive**(`uuid`, `letter`, `path`): `ZIPDrive`

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L37)

#### Parameters

##### uuid

`string`

##### letter

`string`

##### path

`string`

#### Returns

`ZIPDrive`

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`constructor`](../../generic/classes/FilesystemDrive.md#constructor)

## Properties

### BUSY

> **BUSY**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L27)

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`BUSY`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#busy)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`BUSY`](../../generic/classes/FilesystemDrive.md#busy)

***

### CAPABILITIES

> **CAPABILITIES**: `Record`\<[`DriveCapabilities`](../../../../../../../types/system/fs/type-aliases/DriveCapabilities.md), `boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L22)

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`CAPABILITIES`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#capabilities)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`CAPABILITIES`](../../generic/classes/FilesystemDrive.md#capabilities)

***

### driveLetter

> **driveLetter**: `string` \| `undefined`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L17)

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`driveLetter`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#driveletter)

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

> **FILESYSTEM\_LONG**: `string` = `"ZIP Filesystem"`

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L21)

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`FILESYSTEM_LONG`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#filesystem_long)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FILESYSTEM_LONG`](../../generic/classes/FilesystemDrive.md#filesystem_long)

***

### FILESYSTEM\_SHORT

> **FILESYSTEM\_SHORT**: `string` = `"ZipFS"`

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L20)

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`FILESYSTEM_SHORT`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#filesystem_short)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FILESYSTEM_SHORT`](../../generic/classes/FilesystemDrive.md#filesystem_short)

***

### FIXED

> `readonly` **FIXED**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L20)

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`FIXED`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#fixed)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FIXED`](../../generic/classes/FilesystemDrive.md#fixed)

***

### HIDDEN

> `readonly` **HIDDEN**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L23)

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`HIDDEN`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#hidden)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`HIDDEN`](../../generic/classes/FilesystemDrive.md#hidden)

***

### IDENTIFIES\_AS

> **IDENTIFIES\_AS**: `string` = `"zip"`

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L19)

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`IDENTIFIES_AS`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#identifies_as)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`IDENTIFIES_AS`](../../generic/classes/FilesystemDrive.md#identifies_as)

***

### label

> **label**: `string` = `""`

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L14)

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`label`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#label)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`label`](../../generic/classes/FilesystemDrive.md#label)

***

### READONLY

> **READONLY**: `boolean` = `true`

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L18)

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`READONLY`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#readonly)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`READONLY`](../../generic/classes/FilesystemDrive.md#readonly)

***

### REMOVABLE

> **REMOVABLE**: `boolean` = `true`

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L17)

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`REMOVABLE`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#removable)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`REMOVABLE`](../../generic/classes/FilesystemDrive.md#removable)

***

### server

> **server**: [`IServerManager`](../../../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md)

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L16)

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`server`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#server)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`server`](../../generic/classes/FilesystemDrive.md#server)

***

### uuid

> **uuid**: `string` = `""`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L19)

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`uuid`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#uuid)

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

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`__spinDown`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#__spindown)

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

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`__spinUp`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#__spinup)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`__spinUp`](../../generic/classes/FilesystemDrive.md#__spinup)

***

### \_spinDown()

> **\_spinDown**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L61)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`_spinDown`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#_spindown)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`_spinDown`](../../generic/classes/FilesystemDrive.md#_spindown)

***

### \_spinUp()

> **\_spinUp**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L43)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`_spinUp`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#_spinup)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`_spinUp`](../../generic/classes/FilesystemDrive.md#_spinup)

***

### \_sync()

> **\_sync**(`progress?`): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:181](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L181)

#### Parameters

##### progress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`_sync`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#_sync)

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

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`bulk`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#bulk)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`bulk`](../../generic/classes/FilesystemDrive.md#bulk)

***

### copyItem()

> **copyItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:173](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L173)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`copyItem`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#copyitem)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`copyItem`](../../generic/classes/FilesystemDrive.md#copyitem)

***

### createDirectory()

> **createDirectory**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:138](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L138)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`createDirectory`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#createdirectory)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`createDirectory`](../../generic/classes/FilesystemDrive.md#createdirectory)

***

### deleteItem()

> **deleteItem**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:142](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L142)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`deleteItem`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#deleteitem)

#### Overrides

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

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`direct`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#direct)

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

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`imageThumbnail`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#imagethumbnail)

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

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`isCapable`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#iscapable)

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

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`lockFile`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#lockfile)

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

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`Log`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#log)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`Log`](../../generic/classes/FilesystemDrive.md#log)

***

### moveItem()

> **moveItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:177](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L177)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`moveItem`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#moveitem)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`moveItem`](../../generic/classes/FilesystemDrive.md#moveitem)

***

### quota()

> **quota**(): `Promise`\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:165](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L165)

#### Returns

`Promise`\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`quota`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#quota)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`quota`](../../generic/classes/FilesystemDrive.md#quota)

***

### readDir()

> **readDir**(`path`): `Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:70](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L70)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`readDir`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#readdir)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`readDir`](../../generic/classes/FilesystemDrive.md#readdir)

***

### readFile()

> **readFile**(`path`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:124](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L124)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`readFile`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#readfile)

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

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`releaseLock`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#releaselock)

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

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`stat`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#stat)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`stat`](../../generic/classes/FilesystemDrive.md#stat)

***

### tree()

> **tree**(`path`): `Promise`\<[`RecursiveDirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:146](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L146)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`RecursiveDirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`tree`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#tree)

#### Overrides

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

#### Implementation of

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`tryIsCapable`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#tryiscapable)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`tryIsCapable`](../../generic/classes/FilesystemDrive.md#tryiscapable)

***

### writeFile()

> **writeFile**(`path`, `data`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/zip.ts:134](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/zip.ts#L134)

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

[`IZipDrive`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md).[`writeFile`](../../../../../../../interfaces/drives/IZipDrive/interfaces/IZipDrive.md#writefile)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`writeFile`](../../generic/classes/FilesystemDrive.md#writefile)
