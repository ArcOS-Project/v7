[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/kernel/mods/fs](../README.md) / Filesystem

# Class: Filesystem

Defined in: [src/ts/kernel/mods/fs/index.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L25)

## Extends

- [`KernelModule`](../../../module/classes/KernelModule.md)

## Implements

- [`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md)

## Constructors

### Constructor

> **new Filesystem**(`kernel`, `id`): `Filesystem`

Defined in: [src/ts/kernel/mods/fs/index.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L34)

#### Parameters

##### kernel

[`IWaveKernel`](../../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md)

##### id

`string`

#### Returns

`Filesystem`

#### Overrides

[`KernelModule`](../../../module/classes/KernelModule.md).[`constructor`](../../../module/classes/KernelModule.md#constructor)

## Properties

### drives

> **drives**: `Record`\<`string`, [`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)\> = `{}`

Defined in: [src/ts/kernel/mods/fs/index.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L29)

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`drives`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#drives)

***

### id

> **id**: `string`

Defined in: [src/ts/kernel/module/index.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L9)

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`id`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#id)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`id`](../../../module/classes/KernelModule.md#id)

***

### IS\_KMOD

> `protected` `readonly` **IS\_KMOD**: `true` = `true`

Defined in: [src/ts/kernel/module/index.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L8)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`IS_KMOD`](../../../module/classes/KernelModule.md#is_kmod)

***

### loadedProxies

> **loadedProxies**: [`IFilesystemProxy`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemProxy.md)[] = `[]`

Defined in: [src/ts/kernel/mods/fs/index.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L30)

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`loadedProxies`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#loadedproxies)

***

### state?

> `protected` `optional` **state?**: [`IStateHandler`](../../../../../interfaces/IStateHandler/interfaces/IStateHandler.md)

Defined in: [src/ts/kernel/module/index.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L10)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`state`](../../../module/classes/KernelModule.md#state)

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`__init`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#__init)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`__init`](../../../module/classes/KernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L40)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`_init`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#_init)

#### Overrides

[`KernelModule`](../../../module/classes/KernelModule.md).[`_init`](../../../module/classes/KernelModule.md#_init)

***

### bulk()

> **bulk**\<`T`\>(`path`, `extension`): `Promise`\<`Record`\<`string`, `T`\>\>

Defined in: [src/ts/kernel/mods/fs/index.ts:237](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L237)

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

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`bulk`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#bulk)

***

### copyItem()

> **copyItem**(`source`, `destination`, `dispatch?`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:322](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L322)

#### Parameters

##### source

`string`

##### destination

`string`

##### dispatch?

`boolean` = `true`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`copyItem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#copyitem)

***

### createDirectory()

> **createDirectory**(`path`, `dispatch?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:251](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L251)

#### Parameters

##### path

`string`

##### dispatch?

`boolean` = `true`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`createDirectory`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#createdirectory)

***

### defaultProgress()

> **defaultProgress**(`d`): `void`

Defined in: [src/ts/kernel/mods/fs/index.ts:592](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L592)

#### Parameters

##### d

[`FilesystemProgress`](../../../../../types/system/fs/interfaces/FilesystemProgress.md)

#### Returns

`void`

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`defaultProgress`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#defaultprogress)

***

### deleteItem()

> **deleteItem**(`path`, `dispatch?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:494](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L494)

#### Parameters

##### path

`string`

##### dispatch?

`boolean` = `true`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`deleteItem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#deleteitem)

***

### direct()

> **direct**(`path`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:620](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L620)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`direct`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#direct)

***

### getDriveById()

> **getDriveById**(`id`): [`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)

Defined in: [src/ts/kernel/mods/fs/index.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L48)

#### Parameters

##### id

`string`

#### Returns

[`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`getDriveById`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#getdrivebyid)

***

### getDriveByLetter()

> **getDriveByLetter**(`letter`, `error?`): [`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)

Defined in: [src/ts/kernel/mods/fs/index.ts:127](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L127)

#### Parameters

##### letter

`string`

##### error?

`boolean` = `true`

#### Returns

[`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`getDriveByLetter`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#getdrivebyletter)

***

### getDriveByPath()

> **getDriveByPath**(`path`): [`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)

Defined in: [src/ts/kernel/mods/fs/index.ts:147](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L147)

#### Parameters

##### path

`string`

#### Returns

[`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`getDriveByPath`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#getdrivebypath)

***

### getDriveIdByIdentifier()

> **getDriveIdByIdentifier**(`identifier`): `string`

Defined in: [src/ts/kernel/mods/fs/index.ts:84](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L84)

#### Parameters

##### identifier

`string`

#### Returns

`string`

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`getDriveIdByIdentifier`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#getdriveidbyidentifier)

***

### getDriveIdentifier()

> **getDriveIdentifier**(`path`): `string`

Defined in: [src/ts/kernel/mods/fs/index.ts:139](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L139)

#### Parameters

##### path

`string`

#### Returns

`string`

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`getDriveIdentifier`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#getdriveidentifier)

***

### getProxyInfo()

> **getProxyInfo**(`path`, `topLevel?`): [`FsProxyInfo`](../../../../../types/system/fs/interfaces/FsProxyInfo.md) \| `undefined`

Defined in: [src/ts/kernel/mods/fs/index.ts:178](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L178)

#### Parameters

##### path

`string`

##### topLevel?

`boolean`

#### Returns

[`FsProxyInfo`](../../../../../types/system/fs/interfaces/FsProxyInfo.md) \| `undefined`

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`getProxyInfo`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#getproxyinfo)

***

### imageThumbnail()

> **imageThumbnail**(`path`, `width`, `height?`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:676](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L676)

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

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`imageThumbnail`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#imagethumbnail)

***

### isDirectory()

> **isDirectory**(`path`): `Promise`\<`false` \| [`DirectoryReadReturn`](../../../../../types/system/fs/interfaces/DirectoryReadReturn.md)\>

Defined in: [src/ts/kernel/mods/fs/index.ts:646](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L646)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| [`DirectoryReadReturn`](../../../../../types/system/fs/interfaces/DirectoryReadReturn.md)\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`isDirectory`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#isdirectory)

***

### isKmod()

> **isKmod**(): `void`

Defined in: [src/ts/kernel/module/index.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L36)

#### Returns

`void`

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`isKmod`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#iskmod)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`isKmod`](../../../module/classes/KernelModule.md#iskmod)

***

### lockFile()

> **lockFile**(`path`, `pid`): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:596](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L596)

#### Parameters

##### path

`string`

##### pid

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`lockFile`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#lockfile)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/module/index.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L30)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`Log`](../../../module/classes/KernelModule.md#log)

***

### mountDrive()

> **mountDrive**\<`T`\>(`id`, `supplier`, `letter?`, `onProgress?`, ...`args`): `Promise`\<`false` \| `T`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L54)

#### Type Parameters

##### T

`T` *extends* [`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md) = [`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)

#### Parameters

##### id

`string`

##### supplier

[`Constructs`](../../../../../interfaces/common/interfaces/Constructs.md)\<`T`\>

##### letter?

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

##### args

...`any`[]

#### Returns

`Promise`\<`false` \| `T`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`mountDrive`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#mountdrive)

***

### moveItem()

> **moveItem**(`source`, `destination`, `dispatch?`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:357](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L357)

#### Parameters

##### source

`string`

##### destination

`string`

##### dispatch?

`boolean` = `true`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`moveItem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#moveitem)

***

### nextAvailableDriveLetter()

> **nextAvailableDriveLetter**(): `string` \| `undefined`

Defined in: [src/ts/kernel/mods/fs/index.ts:635](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L635)

#### Returns

`string` \| `undefined`

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`nextAvailableDriveLetter`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#nextavailabledriveletter)

***

### readDir()

> **readDir**(`path`): `Promise`\<[`DirectoryReadReturn`](../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:223](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L223)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`readDir`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#readdir)

***

### readFile()

> **readFile**(`path`, `onProgress?`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:269](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L269)

#### Parameters

##### path

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`readFile`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#readfile)

***

### releaseLock()

> **releaseLock**(`path`, `pid`): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:608](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L608)

#### Parameters

##### path

`string`

##### pid

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`releaseLock`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#releaselock)

***

### removeDriveLetter()

> **removeDriveLetter**(`p`): `string`

Defined in: [src/ts/kernel/mods/fs/index.ts:160](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L160)

#### Parameters

##### p

`string`

#### Returns

`string`

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`removeDriveLetter`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#removedriveletter)

***

### stat()

> **stat**(`path`): `Promise`\<[`ExtendedStat`](../../../../../types/system/fs/interfaces/ExtendedStat.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:663](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L663)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`ExtendedStat`](../../../../../types/system/fs/interfaces/ExtendedStat.md) \| `undefined`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`stat`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#stat)

***

### tree()

> **tree**(`path`): `Promise`\<[`RecursiveDirectoryReadReturn`](../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:308](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L308)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`RecursiveDirectoryReadReturn`](../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`tree`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#tree)

***

### tryGetProxyInfo()

> **tryGetProxyInfo**(`path`, `topLevel?`): [`FsProxyInfo`](../../../../../types/system/fs/interfaces/FsProxyInfo.md) \| `undefined`

Defined in: [src/ts/kernel/mods/fs/index.ts:201](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L201)

#### Parameters

##### path

`string`

##### topLevel?

`boolean`

#### Returns

[`FsProxyInfo`](../../../../../types/system/fs/interfaces/FsProxyInfo.md) \| `undefined`

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`tryGetProxyInfo`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#trygetproxyinfo)

***

### tryHandleProxyReadDir()

> **tryHandleProxyReadDir**(`path`): `Promise`\<[`DirectoryReadReturn`](../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:209](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L209)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`tryHandleProxyReadDir`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#tryhandleproxyreaddir)

***

### tryHandleProxyReadFile()

> **tryHandleProxyReadFile**(`path`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:216](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L216)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`tryHandleProxyReadFile`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#tryhandleproxyreadfile)

***

### umountAllOfType()

> **umountAllOfType**(`identifiesAs`, `fromSystem?`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/fs/index.ts:109](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L109)

#### Parameters

##### identifiesAs

`string`

##### fromSystem?

`boolean` = `false`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`umountAllOfType`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#umountalloftype)

***

### umountDrive()

> **umountDrive**(`id`, `fromSystem?`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:92](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L92)

#### Parameters

##### id

`string`

##### fromSystem?

`boolean` = `false`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`umountDrive`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#umountdrive)

***

### uploadFiles()

> **uploadFiles**(`target`, `accept?`, `multiple?`, `onProgress?`): `Promise`\<[`UploadReturn`](../../../../../types/system/fs/type-aliases/UploadReturn.md)\>

Defined in: [src/ts/kernel/mods/fs/index.ts:511](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L511)

#### Parameters

##### target

`string`

##### accept?

`string` = `"*/*"`

##### multiple?

`boolean` = `false`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`UploadReturn`](../../../../../types/system/fs/type-aliases/UploadReturn.md)\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`uploadFiles`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#uploadfiles)

***

### validateDriveLetter()

> **validateDriveLetter**(`letter`): `void`

Defined in: [src/ts/kernel/mods/fs/index.ts:171](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L171)

#### Parameters

##### letter

`string`

#### Returns

`void`

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`validateDriveLetter`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#validatedriveletter)

***

### validatePath()

> **validatePath**(`p`): `void`

Defined in: [src/ts/kernel/mods/fs/index.ts:153](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L153)

#### Parameters

##### p

`string`

#### Returns

`void`

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`validatePath`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#validatepath)

***

### writeFile()

> **writeFile**(`path`, `data`, `onProgress?`, `dispatch?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/fs/index.ts:286](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/index.ts#L286)

#### Parameters

##### path

`string`

##### data

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

##### dispatch?

`boolean` = `true`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystem`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md).[`writeFile`](../../../../../interfaces/modules/IFilesystem/interfaces/IFilesystem.md#writefile)
