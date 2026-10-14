[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/fs/proxies/generic](../README.md) / FilesystemProxy

# Class: FilesystemProxy

Defined in: [src/ts/kernel/mods/fs/proxies/generic.ts:4](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/generic.ts#L4)

## Extended by

- [`MountsFilesystemProxy`](../../mounts/classes/MountsFilesystemProxy.md)
- [`SourceFilesystemProxy`](../../src/classes/SourceFilesystemProxy.md)

## Implements

- [`IFilesystemProxy`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemProxy.md)

## Constructors

### Constructor

> **new FilesystemProxy**(`uuid`): `FilesystemProxy`

Defined in: [src/ts/kernel/mods/fs/proxies/generic.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/generic.ts#L9)

#### Parameters

##### uuid

`string`

#### Returns

`FilesystemProxy`

## Properties

### displayName?

> `readonly` `optional` **displayName?**: `string`

Defined in: [src/ts/kernel/mods/fs/proxies/generic.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/generic.ts#L7)

#### Implementation of

[`IFilesystemProxy`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemProxy.md).[`displayName`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemProxy.md#displayname)

***

### uuid

> **uuid**: `string`

Defined in: [src/ts/kernel/mods/fs/proxies/generic.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/generic.ts#L6)

#### Implementation of

[`IFilesystemProxy`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemProxy.md).[`uuid`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemProxy.md#uuid)

***

### PROXY\_UUID

> `static` **PROXY\_UUID**: `string` = `""`

Defined in: [src/ts/kernel/mods/fs/proxies/generic.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/generic.ts#L5)

## Methods

### readDir()

> **readDir**(`path`): `Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/proxies/generic.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/generic.ts#L13)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`IFilesystemProxy`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemProxy.md).[`readDir`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemProxy.md#readdir)

***

### readFile()

> **readFile**(`path`, `onProgress?`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/proxies/generic.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/generic.ts#L17)

#### Parameters

##### path

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Implementation of

[`IFilesystemProxy`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemProxy.md).[`readFile`](../../../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemProxy.md#readfile)
