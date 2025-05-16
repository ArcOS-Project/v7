[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [ts/fs](../README.md) / Filesystem

# Class: Filesystem

Defined in: [src/ts/fs/index.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L17)

## Extends

- [`KernelModule`](../../kernel/module/classes/KernelModule.md)

## Constructors

### Constructor

> **new Filesystem**(`kernel`, `id`): `Filesystem`

Defined in: [src/ts/fs/index.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L21)

#### Parameters

##### kernel

[`WaveKernel`](../../kernel/classes/WaveKernel.md)

##### id

`string`

#### Returns

`Filesystem`

#### Overrides

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`constructor`](../../kernel/module/classes/KernelModule.md#constructor)

## Properties

### drives

> **drives**: `Record`\<`string`, [`FilesystemDrive`](../drive/classes/FilesystemDrive.md)\> = `{}`

Defined in: [src/ts/fs/index.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L19)

***

### id

> **id**: `string`

Defined in: [src/ts/kernel/module/index.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L8)

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`id`](../../kernel/module/classes/KernelModule.md#id)

***

### IS\_KMOD

> `protected` `readonly` **IS\_KMOD**: `true` = `true`

Defined in: [src/ts/kernel/module/index.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L6)

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`IS_KMOD`](../../kernel/module/classes/KernelModule.md#is_kmod)

***

### kernel

> `protected` **kernel**: [`WaveKernel`](../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/kernel/module/index.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L7)

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`kernel`](../../kernel/module/classes/KernelModule.md#kernel)

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`__init`](../../kernel/module/classes/KernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/fs/index.ts:27](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L27)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`_init`](../../kernel/module/classes/KernelModule.md#_init)

***

### bulk()

> **bulk**\<`T`\>(`path`, `extension`): `Promise`\<`Record`\<`string`, `T`\>\>

Defined in: [src/ts/fs/index.ts:151](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L151)

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

> **copyItem**(`source`, `destination`, `dispatch`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/index.ts:228](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L228)

#### Parameters

##### source

`string`

##### destination

`string`

##### dispatch

`boolean` = `true`

#### Returns

`Promise`\<`boolean`\>

***

### createDirectory()

> **createDirectory**(`path`, `dispatch`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/index.ts:163](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L163)

#### Parameters

##### path

`string`

##### dispatch

`boolean` = `true`

#### Returns

`Promise`\<`boolean`\>

***

### defaultProgress()

> **defaultProgress**(`d`): `void`

Defined in: [src/ts/fs/index.ts:370](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L370)

#### Parameters

##### d

[`FilesystemProgress`](../../../types/fs/interfaces/FilesystemProgress.md)

#### Returns

`void`

***

### deleteItem()

> **deleteItem**(`path`, `dispatch`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/index.ts:283](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L283)

#### Parameters

##### path

`string`

##### dispatch

`boolean` = `true`

#### Returns

`Promise`\<`boolean`\>

***

### direct()

> **direct**(`path`): `Promise`\<`undefined` \| `string`\>

Defined in: [src/ts/fs/index.ts:398](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L398)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `string`\>

***

### getDriveById()

> **getDriveById**(`id`): [`FilesystemDrive`](../drive/classes/FilesystemDrive.md)

Defined in: [src/ts/fs/index.ts:29](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L29)

#### Parameters

##### id

`string`

#### Returns

[`FilesystemDrive`](../drive/classes/FilesystemDrive.md)

***

### getDriveByLetter()

> **getDriveByLetter**(`letter`, `error`): [`FilesystemDrive`](../drive/classes/FilesystemDrive.md)

Defined in: [src/ts/fs/index.ts:90](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L90)

#### Parameters

##### letter

`string`

##### error

`boolean` = `true`

#### Returns

[`FilesystemDrive`](../drive/classes/FilesystemDrive.md)

***

### getDriveByPath()

> **getDriveByPath**(`path`): [`FilesystemDrive`](../drive/classes/FilesystemDrive.md)

Defined in: [src/ts/fs/index.ts:110](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L110)

#### Parameters

##### path

`string`

#### Returns

[`FilesystemDrive`](../drive/classes/FilesystemDrive.md)

***

### getDriveIdByIdentifier()

> **getDriveIdByIdentifier**(`identifier`): `string`

Defined in: [src/ts/fs/index.ts:65](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L65)

#### Parameters

##### identifier

`string`

#### Returns

`string`

***

### getDriveIdentifier()

> **getDriveIdentifier**(`path`): `string`

Defined in: [src/ts/fs/index.ts:102](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L102)

#### Parameters

##### path

`string`

#### Returns

`string`

***

### lockFile()

> **lockFile**(`path`, `pid`): `Promise`\<`void`\>

Defined in: [src/ts/fs/index.ts:374](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L374)

#### Parameters

##### path

`string`

##### pid

`number`

#### Returns

`Promise`\<`void`\>

***

### Log()

> `protected` **Log**(`message`, `level`): `void`

Defined in: [src/ts/kernel/module/index.ts:30](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L30)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`Log`](../../kernel/module/classes/KernelModule.md#log)

***

### mountDrive()

> **mountDrive**\<`T`\>(`id`, `supplier`, `letter?`, `onProgress?`, ...`args?`): `Promise`\<`false` \| `T`\>

Defined in: [src/ts/fs/index.ts:35](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L35)

#### Type Parameters

##### T

`T` = [`FilesystemDrive`](../drive/classes/FilesystemDrive.md)

#### Parameters

##### id

`string`

##### supplier

*typeof* [`FilesystemDrive`](../drive/classes/FilesystemDrive.md)

##### letter?

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../types/fs/type-aliases/FilesystemProgressCallback.md)

##### args?

...`any`[]

#### Returns

`Promise`\<`false` \| `T`\>

***

### moveItem()

> **moveItem**(`source`, `destination`, `dispatch`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/index.ts:255](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L255)

#### Parameters

##### source

`string`

##### destination

`string`

##### dispatch

`boolean` = `true`

#### Returns

`Promise`\<`boolean`\>

***

### nextAvailableDriveLetter()

> **nextAvailableDriveLetter**(): `undefined` \| `string`

Defined in: [src/ts/fs/index.ts:411](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L411)

#### Returns

`undefined` \| `string`

***

### readDir()

> **readDir**(`path`): `Promise`\<`undefined` \| [`DirectoryReadReturn`](../../../types/fs/interfaces/DirectoryReadReturn.md)\>

Defined in: [src/ts/fs/index.ts:140](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L140)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| [`DirectoryReadReturn`](../../../types/fs/interfaces/DirectoryReadReturn.md)\>

***

### readFile()

> **readFile**(`path`, `onProgress?`): `Promise`\<`undefined` \| `ArrayBuffer`\>

Defined in: [src/ts/fs/index.ts:180](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L180)

#### Parameters

##### path

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`undefined` \| `ArrayBuffer`\>

***

### releaseLock()

> **releaseLock**(`path`, `pid`): `Promise`\<`void`\>

Defined in: [src/ts/fs/index.ts:386](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L386)

#### Parameters

##### path

`string`

##### pid

`number`

#### Returns

`Promise`\<`void`\>

***

### removeDriveLetter()

> **removeDriveLetter**(`p`): `string`

Defined in: [src/ts/fs/index.ts:122](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L122)

#### Parameters

##### p

`string`

#### Returns

`string`

***

### tree()

> **tree**(`path`): `Promise`\<`undefined` \| [`RecursiveDirectoryReadReturn`](../../../types/fs/interfaces/RecursiveDirectoryReadReturn.md)\>

Defined in: [src/ts/fs/index.ts:215](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L215)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| [`RecursiveDirectoryReadReturn`](../../../types/fs/interfaces/RecursiveDirectoryReadReturn.md)\>

***

### umountDrive()

> **umountDrive**(`id`, `fromSystem`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/index.ts:73](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L73)

#### Parameters

##### id

`string`

##### fromSystem

`boolean` = `false`

##### onProgress?

[`FilesystemProgressCallback`](../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

***

### uploadFiles()

> **uploadFiles**(`target`, `accept`, `multiple`, `onProgress?`): `Promise`\<[`UploadReturn`](../../../types/fs/type-aliases/UploadReturn.md)\>

Defined in: [src/ts/fs/index.ts:299](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L299)

#### Parameters

##### target

`string`

##### accept

`string` = `"*/*"`

##### multiple

`boolean` = `false`

##### onProgress?

[`FilesystemProgressCallback`](../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`UploadReturn`](../../../types/fs/type-aliases/UploadReturn.md)\>

***

### validateDriveLetter()

> **validateDriveLetter**(`letter`): `void`

Defined in: [src/ts/fs/index.ts:133](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L133)

#### Parameters

##### letter

`string`

#### Returns

`void`

***

### validatePath()

> **validatePath**(`p`): `void`

Defined in: [src/ts/fs/index.ts:116](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L116)

#### Parameters

##### p

`string`

#### Returns

`void`

***

### writeFile()

> **writeFile**(`path`, `data`, `onProgress?`, `dispatch?`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/index.ts:194](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/index.ts#L194)

#### Parameters

##### path

`string`

##### data

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../types/fs/type-aliases/FilesystemProgressCallback.md)

##### dispatch?

`boolean` = `true`

#### Returns

`Promise`\<`boolean`\>
