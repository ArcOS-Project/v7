[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/fs/drives/temp](../README.md) / MemoryFilesystemDrive

# Class: MemoryFilesystemDrive

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L14)

## Extends

- [`FilesystemDrive`](../../generic/classes/FilesystemDrive.md)

## Implements

- [`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md)

## Constructors

### Constructor

> **new MemoryFilesystemDrive**(`kernel`, `uuid`, `letter?`): `MemoryFilesystemDrive`

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L37)

#### Parameters

##### kernel

`any`

##### uuid

`string`

##### letter?

`string`

#### Returns

`MemoryFilesystemDrive`

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`constructor`](../../generic/classes/FilesystemDrive.md#constructor)

## Properties

### BUSY

> **BUSY**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L27)

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`BUSY`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#busy)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`BUSY`](../../generic/classes/FilesystemDrive.md#busy)

***

### CAPABILITIES

> **CAPABILITIES**: `Record`\<[`DriveCapabilities`](../../../../../../../types/system/fs/type-aliases/DriveCapabilities.md), `boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L22)

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`CAPABILITIES`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#capabilities)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`CAPABILITIES`](../../generic/classes/FilesystemDrive.md#capabilities)

***

### driveLetter

> **driveLetter**: `string` \| `undefined`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L17)

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`driveLetter`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#driveletter)

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

> **FILESYSTEM\_LONG**: `string` = `"Temporary Filesystem"`

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L18)

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`FILESYSTEM_LONG`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#filesystem_long)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FILESYSTEM_LONG`](../../generic/classes/FilesystemDrive.md#filesystem_long)

***

### FILESYSTEM\_SHORT

> **FILESYSTEM\_SHORT**: `string` = `"TFS"`

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L19)

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`FILESYSTEM_SHORT`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#filesystem_short)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FILESYSTEM_SHORT`](../../generic/classes/FilesystemDrive.md#filesystem_short)

***

### FIXED

> **FIXED**: `boolean` = `true`

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L16)

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`FIXED`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#fixed)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FIXED`](../../generic/classes/FilesystemDrive.md#fixed)

***

### HIDDEN

> **HIDDEN**: `boolean` = `true`

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L20)

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`HIDDEN`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#hidden)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`HIDDEN`](../../generic/classes/FilesystemDrive.md#hidden)

***

### IDENTIFIES\_AS

> **IDENTIFIES\_AS**: `string` = `"temp"`

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L17)

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`IDENTIFIES_AS`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#identifies_as)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`IDENTIFIES_AS`](../../generic/classes/FilesystemDrive.md#identifies_as)

***

### label

> **label**: `string` = `"TEMP"`

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L21)

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`label`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#label)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`label`](../../generic/classes/FilesystemDrive.md#label)

***

### READONLY

> `readonly` **READONLY**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L22)

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`READONLY`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#readonly)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`READONLY`](../../generic/classes/FilesystemDrive.md#readonly)

***

### REMOVABLE

> `readonly` **REMOVABLE**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L21)

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`REMOVABLE`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#removable)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`REMOVABLE`](../../generic/classes/FilesystemDrive.md#removable)

***

### server

> **server**: [`IServerManager`](../../../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md)

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L16)

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`server`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#server)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`server`](../../generic/classes/FilesystemDrive.md#server)

***

### uuid

> **uuid**: `string` = `""`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L19)

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`uuid`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#uuid)

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

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`__spinDown`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#__spindown)

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

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`__spinUp`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#__spinup)

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

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`_spinDown`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#_spindown)

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

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`_spinUp`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#_spinup)

#### Inherited from

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

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`bulk`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#bulk)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`bulk`](../../generic/classes/FilesystemDrive.md#bulk)

***

### copyItem()

> **copyItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:246](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L246)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`copyItem`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#copyitem)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`copyItem`](../../generic/classes/FilesystemDrive.md#copyitem)

***

### createDirectory()

> **createDirectory**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:149](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L149)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`createDirectory`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#createdirectory)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`createDirectory`](../../generic/classes/FilesystemDrive.md#createdirectory)

***

### deleteItem()

> **deleteItem**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:261](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L261)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`deleteItem`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#deleteitem)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`deleteItem`](../../generic/classes/FilesystemDrive.md#deleteitem)

***

### direct()

> **direct**(`path`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:265](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L265)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`direct`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#direct)

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

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`imageThumbnail`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#imagethumbnail)

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

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`isCapable`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#iscapable)

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

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`lockFile`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#lockfile)

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

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`Log`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#log)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`Log`](../../generic/classes/FilesystemDrive.md#log)

***

### moveItem()

> **moveItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:254](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L254)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`moveItem`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#moveitem)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`moveItem`](../../generic/classes/FilesystemDrive.md#moveitem)

***

### quota()

> **quota**(): `Promise`\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:273](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L273)

#### Returns

`Promise`\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`quota`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#quota)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`quota`](../../generic/classes/FilesystemDrive.md#quota)

***

### readDir()

> **readDir**(`path`): `Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:106](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L106)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`readDir`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#readdir)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`readDir`](../../generic/classes/FilesystemDrive.md#readdir)

***

### readFile()

> **readFile**(`path`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:165](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L165)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`readFile`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#readfile)

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

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`releaseLock`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#releaselock)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`releaseLock`](../../generic/classes/FilesystemDrive.md#releaselock)

***

### restoreSnapshot()

> **restoreSnapshot**(`snapshot`): `void`

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:303](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L303)

#### Parameters

##### snapshot

`Record`\<`string`, `any`\>

#### Returns

`void`

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`restoreSnapshot`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#restoresnapshot)

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

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`stat`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#stat)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`stat`](../../generic/classes/FilesystemDrive.md#stat)

***

### takeSnapshot()

> **takeSnapshot**(): `Promise`\<`Record`\<`string`, `any`\>\>

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:299](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L299)

#### Returns

`Promise`\<`Record`\<`string`, `any`\>\>

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`takeSnapshot`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#takesnapshot)

***

### tree()

> **tree**(`path`): `Promise`\<[`RecursiveDirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:204](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L204)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`RecursiveDirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`tree`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#tree)

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

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`tryIsCapable`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#tryiscapable)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`tryIsCapable`](../../generic/classes/FilesystemDrive.md#tryiscapable)

***

### writeFile()

> **writeFile**(`path`, `data`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/temp.ts:174](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/temp.ts#L174)

#### Parameters

##### path

`string`

##### data

`Blob`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IMemoryFilesystemDrive`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md).[`writeFile`](../../../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md#writefile)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`writeFile`](../../generic/classes/FilesystemDrive.md#writefile)
