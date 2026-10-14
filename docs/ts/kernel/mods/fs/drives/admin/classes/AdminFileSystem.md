[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/fs/drives/admin](../README.md) / AdminFileSystem

# Class: AdminFileSystem

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L18)

## Extends

- [`FilesystemDrive`](../../generic/classes/FilesystemDrive.md)

## Implements

- [`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)

## Constructors

### Constructor

> **new AdminFileSystem**(`uuid`, `letter`): `AdminFileSystem`

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L40)

#### Parameters

##### uuid

`string`

##### letter

`string`

#### Returns

`AdminFileSystem`

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`constructor`](../../generic/classes/FilesystemDrive.md#constructor)

## Properties

### BUSY

> **BUSY**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L27)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`BUSY`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#busy)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`BUSY`](../../generic/classes/FilesystemDrive.md#busy)

***

### CAPABILITIES

> **CAPABILITIES**: `Record`\<[`DriveCapabilities`](../../../../../../../types/system/fs/type-aliases/DriveCapabilities.md), `boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L25)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`CAPABILITIES`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#capabilities)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`CAPABILITIES`](../../generic/classes/FilesystemDrive.md#capabilities)

***

### driveLetter

> **driveLetter**: `string` \| `undefined`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L17)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`driveLetter`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#driveletter)

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

> **FILESYSTEM\_LONG**: `string` = `"Admin Filesystem"`

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L23)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`FILESYSTEM_LONG`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#filesystem_long)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FILESYSTEM_LONG`](../../generic/classes/FilesystemDrive.md#filesystem_long)

***

### FILESYSTEM\_SHORT

> **FILESYSTEM\_SHORT**: `string` = `"AFS"`

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L22)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`FILESYSTEM_SHORT`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#filesystem_short)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FILESYSTEM_SHORT`](../../generic/classes/FilesystemDrive.md#filesystem_short)

***

### FIXED

> **FIXED**: `boolean` = `true`

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L20)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`FIXED`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#fixed)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FIXED`](../../generic/classes/FilesystemDrive.md#fixed)

***

### HIDDEN

> `readonly` **HIDDEN**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L23)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`HIDDEN`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#hidden)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`HIDDEN`](../../generic/classes/FilesystemDrive.md#hidden)

***

### IDENTIFIES\_AS

> **IDENTIFIES\_AS**: `string` = `"admin"`

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L21)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`IDENTIFIES_AS`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#identifies_as)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`IDENTIFIES_AS`](../../generic/classes/FilesystemDrive.md#identifies_as)

***

### label

> **label**: `string` = `"Administrators"`

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L24)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`label`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#label)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`label`](../../generic/classes/FilesystemDrive.md#label)

***

### READONLY

> **READONLY**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L19)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`READONLY`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#readonly)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`READONLY`](../../generic/classes/FilesystemDrive.md#readonly)

***

### REMOVABLE

> `readonly` **REMOVABLE**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L21)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`REMOVABLE`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#removable)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`REMOVABLE`](../../generic/classes/FilesystemDrive.md#removable)

***

### server

> **server**: [`IServerManager`](../../../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md)

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L16)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`server`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#server)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`server`](../../generic/classes/FilesystemDrive.md#server)

***

### uuid

> **uuid**: `string` = `""`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L19)

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`uuid`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#uuid)

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

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`__spinDown`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#__spindown)

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

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`__spinUp`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#__spinup)

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

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`_spinDown`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#_spindown)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`_spinDown`](../../generic/classes/FilesystemDrive.md#_spindown)

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

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`_spinUp`](../../generic/classes/FilesystemDrive.md#_spinup)

***

### bulk()

> **bulk**\<`T`\>(`path`, `extension`): `Promise`\<`Record`\<`string`, `T`\>\>

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:182](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L182)

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

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`bulk`](../../generic/classes/FilesystemDrive.md#bulk)

***

### copyItem()

> **copyItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L85)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`copyItem`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#copyitem)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`copyItem`](../../generic/classes/FilesystemDrive.md#copyitem)

***

### createDirectory()

> **createDirectory**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L57)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`createDirectory`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#createdirectory)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`createDirectory`](../../generic/classes/FilesystemDrive.md#createdirectory)

***

### deleteItem()

> **deleteItem**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L71)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`deleteItem`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#deleteitem)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`deleteItem`](../../generic/classes/FilesystemDrive.md#deleteitem)

***

### direct()

> **direct**(`path`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:186](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L186)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`direct`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#direct)

#### Overrides

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

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`imageThumbnail`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#imagethumbnail)

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

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`isCapable`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#iscapable)

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

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`lockFile`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#lockfile)

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

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`Log`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#log)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`Log`](../../generic/classes/FilesystemDrive.md#log)

***

### moveItem()

> **moveItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:105](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L105)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`moveItem`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#moveitem)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`moveItem`](../../generic/classes/FilesystemDrive.md#moveitem)

***

### quota()

> **quota**(): `Promise`\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:165](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L165)

#### Returns

`Promise`\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`quota`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#quota)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`quota`](../../generic/classes/FilesystemDrive.md#quota)

***

### readDir()

> **readDir**(`path?`): `Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:125](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L125)

#### Parameters

##### path?

`string` = `""`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`readDir`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#readdir)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`readDir`](../../generic/classes/FilesystemDrive.md#readdir)

***

### readFile()

> **readFile**(`path`, `onProgress`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:137](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L137)

#### Parameters

##### path

`string`

##### onProgress

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`readFile`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#readfile)

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

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`releaseLock`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#releaselock)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`releaseLock`](../../generic/classes/FilesystemDrive.md#releaselock)

***

### stat()

> **stat**(`path`): `Promise`\<[`FilesystemStat`](../../../../../../../types/system/fs/interfaces/FilesystemStat.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:194](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L194)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`FilesystemStat`](../../../../../../../types/system/fs/interfaces/FilesystemStat.md) \| `undefined`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`stat`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#stat)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`stat`](../../generic/classes/FilesystemDrive.md#stat)

***

### tree()

> **tree**(`path?`): `Promise`\<[`RecursiveDirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:153](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L153)

#### Parameters

##### path?

`string` = `""`

#### Returns

`Promise`\<[`RecursiveDirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`tree`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#tree)

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

[`IFilesystemDrive`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md).[`tryIsCapable`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md#tryiscapable)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`tryIsCapable`](../../generic/classes/FilesystemDrive.md#tryiscapable)

***

### writeFile()

> **writeFile**(`path`, `data`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/admin.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/admin.ts#L44)

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

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`writeFile`](../../generic/classes/FilesystemDrive.md#writefile)
