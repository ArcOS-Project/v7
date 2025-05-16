[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/fs/drive](../README.md) / FilesystemDrive

# Class: FilesystemDrive

Defined in: [src/ts/fs/drive.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L8)

## Extended by

- [`AdminServerDrive`](../../drives/admin/classes/AdminServerDrive.md)
- [`ServerDrive`](../../drives/server/classes/ServerDrive.md)
- [`MemoryFilesystemDrive`](../../drives/temp/classes/MemoryFilesystemDrive.md)
- [`ZIPDrive`](../../drives/zipdrive/classes/ZIPDrive.md)
- [`SharedDrive`](../../shares/drive/classes/SharedDrive.md)

## Constructors

### Constructor

> **new FilesystemDrive**(`kernel`, `uuid`, `letter?`, ...`args?`): `FilesystemDrive`

Defined in: [src/ts/fs/drive.ts:38](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L38)

#### Parameters

##### kernel

[`WaveKernel`](../../../kernel/classes/WaveKernel.md)

##### uuid

`string`

##### letter?

`string`

##### args?

...`any`[]

#### Returns

`FilesystemDrive`

## Properties

### BUSY

> **BUSY**: `boolean` = `false`

Defined in: [src/ts/fs/drive.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L21)

***

### driveLetter

> **driveLetter**: `undefined` \| `string`

Defined in: [src/ts/fs/drive.ts:10](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L10)

***

### fileLocks

> `protected` **fileLocks**: `Record`\<`string`, `number`\> = `{}`

Defined in: [src/ts/fs/drive.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L22)

***

### FILESYSTEM\_LONG

> `readonly` **FILESYSTEM\_LONG**: `string` = `"Generic Filesystem"`

Defined in: [src/ts/fs/drive.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L20)

***

### FILESYSTEM\_SHORT

> `readonly` **FILESYSTEM\_SHORT**: `string` = `"GFS"`

Defined in: [src/ts/fs/drive.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L19)

***

### FIXED

> `readonly` **FIXED**: `boolean` = `false`

Defined in: [src/ts/fs/drive.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L14)

***

### HIDDEN

> `readonly` **HIDDEN**: `boolean` = `false`

Defined in: [src/ts/fs/drive.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L17)

***

### IDENTIFIES\_AS

> `readonly` **IDENTIFIES\_AS**: `string` = `"generic"`

Defined in: [src/ts/fs/drive.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L18)

***

### kernel

> **kernel**: [`WaveKernel`](../../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/fs/drive.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L13)

***

### label

> **label**: `string` = `""`

Defined in: [src/ts/fs/drive.ts:11](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L11)

***

### READONLY

> `readonly` **READONLY**: `boolean` = `false`

Defined in: [src/ts/fs/drive.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L16)

***

### REMOVABLE

> `readonly` **REMOVABLE**: `boolean` = `false`

Defined in: [src/ts/fs/drive.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L15)

***

### server

> **server**: [`ServerManager`](../../../server/classes/ServerManager.md)

Defined in: [src/ts/fs/drive.ts:9](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L9)

***

### uuid

> **uuid**: `string` = `""`

Defined in: [src/ts/fs/drive.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L12)

## Methods

### \_\_spinDown()

> **\_\_spinDown**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drive.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L60)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

***

### \_\_spinUp()

> **\_\_spinUp**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drive.ts:50](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L50)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

***

### \_spinDown()

> **\_spinDown**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drive.ts:74](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L74)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

***

### \_spinUp()

> **\_spinUp**(`onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drive.ts:70](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L70)

#### Parameters

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

***

### bulk()

> **bulk**\<`T`\>(`path`, `extension`): `Promise`\<`Record`\<`string`, `T`\>\>

Defined in: [src/ts/fs/drive.ts:135](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L135)

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

Defined in: [src/ts/fs/drive.ts:109](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L109)

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

Defined in: [src/ts/fs/drive.ts:89](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L89)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteItem()

> **deleteItem**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drive.ts:117](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L117)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

***

### direct()

> **direct**(`path`): `Promise`\<`undefined` \| `string`\>

Defined in: [src/ts/fs/drive.ts:121](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L121)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `string`\>

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

***

### Log()

> **Log**(`message`, `level`): `void`

Defined in: [src/ts/fs/drive.ts:46](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L46)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

***

### moveItem()

> **moveItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drive.ts:113](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L113)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

***

### quota()

> **quota**(): `Promise`\<[`UserQuota`](../../../../types/fs/interfaces/UserQuota.md)\>

Defined in: [src/ts/fs/drive.ts:125](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L125)

#### Returns

`Promise`\<[`UserQuota`](../../../../types/fs/interfaces/UserQuota.md)\>

***

### readDir()

> **readDir**(`path`): `Promise`\<`undefined` \| [`DirectoryReadReturn`](../../../../types/fs/interfaces/DirectoryReadReturn.md)\>

Defined in: [src/ts/fs/drive.ts:78](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L78)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| [`DirectoryReadReturn`](../../../../types/fs/interfaces/DirectoryReadReturn.md)\>

***

### readFile()

> **readFile**(`path`, `onProgress?`): `Promise`\<`undefined` \| `ArrayBuffer`\>

Defined in: [src/ts/fs/drive.ts:93](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L93)

#### Parameters

##### path

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`undefined` \| `ArrayBuffer`\>

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

***

### tree()

> **tree**(`path`): `Promise`\<`undefined` \| [`RecursiveDirectoryReadReturn`](../../../../types/fs/interfaces/RecursiveDirectoryReadReturn.md)\>

Defined in: [src/ts/fs/drive.ts:101](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L101)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| [`RecursiveDirectoryReadReturn`](../../../../types/fs/interfaces/RecursiveDirectoryReadReturn.md)\>

***

### writeFile()

> **writeFile**(`path`, `data`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/drive.ts:97](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/drive.ts#L97)

#### Parameters

##### path

`string`

##### data

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>
