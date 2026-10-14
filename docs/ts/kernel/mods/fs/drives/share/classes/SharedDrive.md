[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/fs/drives/share](../README.md) / SharedDrive

# Class: SharedDrive

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L15)

## Extends

- [`FilesystemDrive`](../../generic/classes/FilesystemDrive.md)

## Implements

- [`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md)

## Constructors

### Constructor

> **new SharedDrive**(`uuid`, `letter`, `info`): `SharedDrive`

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L35)

#### Parameters

##### uuid

`string`

##### letter

`string`

##### info

[`SharedDriveType`](../../../../../../../types/server/shares/interfaces/SharedDriveType.md)

#### Returns

`SharedDrive`

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`constructor`](../../generic/classes/FilesystemDrive.md#constructor)

## Properties

### BUSY

> **BUSY**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L27)

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`BUSY`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#busy)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`BUSY`](../../generic/classes/FilesystemDrive.md#busy)

***

### CAPABILITIES

> **CAPABILITIES**: `Record`\<[`DriveCapabilities`](../../../../../../../types/system/fs/type-aliases/DriveCapabilities.md), `boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L21)

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`CAPABILITIES`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#capabilities)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`CAPABILITIES`](../../generic/classes/FilesystemDrive.md#capabilities)

***

### driveLetter

> **driveLetter**: `string` \| `undefined`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L17)

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`driveLetter`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#driveletter)

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

> **FILESYSTEM\_LONG**: `string` = `"Shared Drive Filesystem"`

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L20)

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`FILESYSTEM_LONG`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#filesystem_long)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FILESYSTEM_LONG`](../../generic/classes/FilesystemDrive.md#filesystem_long)

***

### FILESYSTEM\_SHORT

> **FILESYSTEM\_SHORT**: `string` = `"SDFS"`

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L19)

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`FILESYSTEM_SHORT`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#filesystem_short)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FILESYSTEM_SHORT`](../../generic/classes/FilesystemDrive.md#filesystem_short)

***

### FIXED

> `readonly` **FIXED**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L20)

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`FIXED`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#fixed)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FIXED`](../../generic/classes/FilesystemDrive.md#fixed)

***

### HIDDEN

> `readonly` **HIDDEN**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L23)

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`HIDDEN`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#hidden)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`HIDDEN`](../../generic/classes/FilesystemDrive.md#hidden)

***

### IDENTIFIES\_AS

> **IDENTIFIES\_AS**: `string` = `"share"`

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L18)

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`IDENTIFIES_AS`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#identifies_as)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`IDENTIFIES_AS`](../../generic/classes/FilesystemDrive.md#identifies_as)

***

### label

> **label**: `string` = `""`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L18)

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`label`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#label)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`label`](../../generic/classes/FilesystemDrive.md#label)

***

### READONLY

> `readonly` **READONLY**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L22)

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`READONLY`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#readonly)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`READONLY`](../../generic/classes/FilesystemDrive.md#readonly)

***

### REMOVABLE

> `readonly` **REMOVABLE**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L21)

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`REMOVABLE`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#removable)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`REMOVABLE`](../../generic/classes/FilesystemDrive.md#removable)

***

### server

> **server**: [`IServerManager`](../../../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md)

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L16)

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`server`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#server)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`server`](../../generic/classes/FilesystemDrive.md#server)

***

### shareId

> **shareId**: `string` \| `undefined`

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L16)

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`shareId`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#shareid)

***

### shareInfo

> **shareInfo**: [`SharedDriveType`](../../../../../../../types/server/shares/interfaces/SharedDriveType.md)

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L17)

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`shareInfo`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#shareinfo)

***

### uuid

> **uuid**: `string` = `""`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L19)

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`uuid`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#uuid)

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

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`__spinDown`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#__spindown)

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

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`__spinUp`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#__spinup)

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

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`_spinDown`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#_spindown)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`_spinDown`](../../generic/classes/FilesystemDrive.md#_spindown)

***

### \_spinUp()

> **\_spinUp**(): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L41)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`_spinUp`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#_spinup)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`_spinUp`](../../generic/classes/FilesystemDrive.md#_spinup)

***

### bulk()

> **bulk**\<`T`\>(`path`, `extension`): `Promise`\<`Record`\<`string`, `T`\>\>

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:111](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L111)

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

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`bulk`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#bulk)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`bulk`](../../generic/classes/FilesystemDrive.md#bulk)

***

### copyItem()

> **copyItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L79)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`copyItem`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#copyitem)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`copyItem`](../../generic/classes/FilesystemDrive.md#copyitem)

***

### createDirectory()

> **createDirectory**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L57)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`createDirectory`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#createdirectory)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`createDirectory`](../../generic/classes/FilesystemDrive.md#createdirectory)

***

### deleteItem()

> **deleteItem**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:89](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L89)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`deleteItem`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#deleteitem)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`deleteItem`](../../generic/classes/FilesystemDrive.md#deleteitem)

***

### direct()

> **direct**(`path`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:106](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L106)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`direct`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#direct)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`direct`](../../generic/classes/FilesystemDrive.md#direct)

***

### imageThumbnail()

> **imageThumbnail**(`path`, `width`, `height?`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:121](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L121)

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

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`imageThumbnail`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#imagethumbnail)

#### Overrides

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

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`isCapable`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#iscapable)

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

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`lockFile`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#lockfile)

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

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`Log`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#log)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`Log`](../../generic/classes/FilesystemDrive.md#log)

***

### moveItem()

> **moveItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:84](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L84)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`moveItem`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#moveitem)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`moveItem`](../../generic/classes/FilesystemDrive.md#moveitem)

***

### quota()

> **quota**(): `Promise`\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:94](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L94)

#### Returns

`Promise`\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`quota`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#quota)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`quota`](../../generic/classes/FilesystemDrive.md#quota)

***

### readDir()

> **readDir**(`path?`): `Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L52)

#### Parameters

##### path?

`string` = `""`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`readDir`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#readdir)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`readDir`](../../generic/classes/FilesystemDrive.md#readdir)

***

### readFile()

> **readFile**(`path`, `onProgress`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L62)

#### Parameters

##### path

`string`

##### onProgress

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`readFile`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#readfile)

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

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`releaseLock`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#releaselock)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`releaseLock`](../../generic/classes/FilesystemDrive.md#releaselock)

***

### stat()

> **stat**(`path`): `Promise`\<[`ExtendedStat`](../../../../../../../types/system/fs/interfaces/ExtendedStat.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L116)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`ExtendedStat`](../../../../../../../types/system/fs/interfaces/ExtendedStat.md) \| `undefined`\>

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`stat`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#stat)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`stat`](../../generic/classes/FilesystemDrive.md#stat)

***

### tree()

> **tree**(`path?`): `Promise`\<[`RecursiveDirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:74](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L74)

#### Parameters

##### path?

`string` = `""`

#### Returns

`Promise`\<[`RecursiveDirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`tree`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#tree)

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

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`tryIsCapable`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#tryiscapable)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`tryIsCapable`](../../generic/classes/FilesystemDrive.md#tryiscapable)

***

### writeFile()

> **writeFile**(`path`, `blob`, `onProgress`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/share.ts:69](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/share.ts#L69)

#### Parameters

##### path

`string`

##### blob

`Blob`

##### onProgress

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ISharedDrive`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md).[`writeFile`](../../../../../../../interfaces/drives/ISharedDrive/interfaces/ISharedDrive.md#writefile)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`writeFile`](../../generic/classes/FilesystemDrive.md#writefile)
