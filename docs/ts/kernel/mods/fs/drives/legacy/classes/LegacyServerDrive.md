[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/fs/drives/legacy](../README.md) / LegacyServerDrive

# Class: LegacyServerDrive

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L8)

## Extends

- [`FilesystemDrive`](../../generic/classes/FilesystemDrive.md)

## Implements

- [`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md)

## Constructors

### Constructor

> **new LegacyServerDrive**(`uuid`, `letter`, `connection`): `LegacyServerDrive`

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L57)

#### Parameters

##### uuid

`string`

##### letter

`string`

##### connection

[`LegacyConnectionInfo`](../../../../../../../types/external/legacy/interfaces/LegacyConnectionInfo.md)

#### Returns

`LegacyServerDrive`

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`constructor`](../../generic/classes/FilesystemDrive.md#constructor)

## Properties

### BUSY

> **BUSY**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L27)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`BUSY`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#busy)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`BUSY`](../../generic/classes/FilesystemDrive.md#busy)

***

### CAPABILITIES

> **CAPABILITIES**: `Record`\<[`DriveCapabilities`](../../../../../../../types/system/fs/type-aliases/DriveCapabilities.md), `boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L42)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`CAPABILITIES`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#capabilities)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`CAPABILITIES`](../../generic/classes/FilesystemDrive.md#capabilities)

***

### DEFAULT\_DIRECTORY

> **DEFAULT\_DIRECTORY**: [`UserDirectory`](../../../../../../../types/external/legacy/interfaces/UserDirectory.md)

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L28)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`DEFAULT_DIRECTORY`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#default_directory)

***

### DEFAULT\_QUOTA

> **DEFAULT\_QUOTA**: [`FSQuota`](../../../../../../../types/external/legacy/interfaces/FSQuota.md)

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L35)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`DEFAULT_QUOTA`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#default_quota)

***

### driveLetter

> **driveLetter**: `string` \| `undefined`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L17)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`driveLetter`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#driveletter)

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

> **FILESYSTEM\_LONG**: `string` = `"Legacy Server FS"`

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L9)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`FILESYSTEM_LONG`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#filesystem_long)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FILESYSTEM_LONG`](../../generic/classes/FilesystemDrive.md#filesystem_long)

***

### FILESYSTEM\_SHORT

> **FILESYSTEM\_SHORT**: `string` = `"LSFS"`

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L10)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`FILESYSTEM_SHORT`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#filesystem_short)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FILESYSTEM_SHORT`](../../generic/classes/FilesystemDrive.md#filesystem_short)

***

### FIXED

> **FIXED**: `boolean` = `true`

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L12)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`FIXED`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#fixed)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`FIXED`](../../generic/classes/FilesystemDrive.md#fixed)

***

### HIDDEN

> `readonly` **HIDDEN**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L23)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`HIDDEN`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#hidden)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`HIDDEN`](../../generic/classes/FilesystemDrive.md#hidden)

***

### IDENTIFIES\_AS

> **IDENTIFIES\_AS**: `string` = `"legacy"`

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L11)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`IDENTIFIES_AS`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#identifies_as)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`IDENTIFIES_AS`](../../generic/classes/FilesystemDrive.md#identifies_as)

***

### label

> **label**: `string` = `""`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L18)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`label`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#label)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`label`](../../generic/classes/FilesystemDrive.md#label)

***

### READONLY

> **READONLY**: `boolean` = `true`

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L14)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`READONLY`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#readonly)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`READONLY`](../../generic/classes/FilesystemDrive.md#readonly)

***

### REMOVABLE

> **REMOVABLE**: `boolean` = `true`

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L13)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`REMOVABLE`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#removable)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`REMOVABLE`](../../generic/classes/FilesystemDrive.md#removable)

***

### server

> **server**: [`IServerManager`](../../../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md)

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L16)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`server`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#server)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`server`](../../generic/classes/FilesystemDrive.md#server)

***

### TEST\_MODES

> **TEST\_MODES**: \[`boolean`, `number`\][]

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L20)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`TEST_MODES`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#test_modes)

***

### uuid

> **uuid**: `string` = `""`

Defined in: [src/ts/kernel/mods/fs/drives/generic.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/generic.ts#L19)

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`uuid`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#uuid)

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

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`__spinDown`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#__spindown)

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

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`__spinUp`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#__spinup)

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

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`_spinDown`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#_spindown)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`_spinDown`](../../generic/classes/FilesystemDrive.md#_spindown)

***

### \_spinUp()

> **\_spinUp**(): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:64](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L64)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`_spinUp`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#_spinup)

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

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`bulk`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#bulk)

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

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`copyItem`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#copyitem)

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

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`createDirectory`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#createdirectory)

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

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`deleteItem`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#deleteitem)

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

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`direct`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#direct)

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

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`imageThumbnail`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#imagethumbnail)

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

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`isCapable`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#iscapable)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`isCapable`](../../generic/classes/FilesystemDrive.md#iscapable)

***

### legacy\_generateToken()

> **legacy\_generateToken**(`username`, `password`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:135](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L135)

#### Parameters

##### username

`string`

##### password

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`legacy_generateToken`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#legacy_generatetoken)

***

### legacy\_quota()

> **legacy\_quota**(): `Promise`\<[`FSQuota`](../../../../../../../types/external/legacy/interfaces/FSQuota.md)\>

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:150](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L150)

#### Returns

`Promise`\<[`FSQuota`](../../../../../../../types/external/legacy/interfaces/FSQuota.md)\>

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`legacy_quota`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#legacy_quota)

***

### legacy\_readDir()

> **legacy\_readDir**(`path`): `Promise`\<[`UserDirectory`](../../../../../../../types/external/legacy/interfaces/UserDirectory.md)\>

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:83](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L83)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`UserDirectory`](../../../../../../../types/external/legacy/interfaces/UserDirectory.md)\>

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`legacy_readDir`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#legacy_readdir)

***

### legacy\_readFile()

> **legacy\_readFile**(`path`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:95](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L95)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`legacy_readFile`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#legacy_readfile)

***

### legacy\_testConnection()

> **legacy\_testConnection**(`server`, `authCode?`): `Promise`\<`false` \| \{ `port`: `number`; `proto`: `string`; `url`: `string`; \}\>

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:108](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L108)

#### Parameters

##### server

`string`

##### authCode?

`string` = `""`

#### Returns

`Promise`\<`false` \| \{ `port`: `number`; `proto`: `string`; `url`: `string`; \}\>

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`legacy_testConnection`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#legacy_testconnection)

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

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`lockFile`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#lockfile)

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

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`Log`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#log)

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

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`moveItem`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#moveitem)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`moveItem`](../../generic/classes/FilesystemDrive.md#moveitem)

***

### quota()

> **quota**(): `Promise`\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:198](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L198)

#### Returns

`Promise`\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`quota`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#quota)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`quota`](../../generic/classes/FilesystemDrive.md#quota)

***

### readDir()

> **readDir**(`path`): `Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:166](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L166)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`readDir`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#readdir)

#### Overrides

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`readDir`](../../generic/classes/FilesystemDrive.md#readdir)

***

### readFile()

> **readFile**(`path`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/drives/legacy.ts:194](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/drives/legacy.ts#L194)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`readFile`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#readfile)

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

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`releaseLock`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#releaselock)

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

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`stat`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#stat)

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

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`tree`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#tree)

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

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`tryIsCapable`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#tryiscapable)

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

#### Implementation of

[`ILegacyServerDrive`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md).[`writeFile`](../../../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md#writefile)

#### Inherited from

[`FilesystemDrive`](../../generic/classes/FilesystemDrive.md).[`writeFile`](../../generic/classes/FilesystemDrive.md#writefile)
