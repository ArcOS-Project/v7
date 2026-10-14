[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/fs/proxies/mounts](../README.md) / MountsFilesystemProxy

# Class: MountsFilesystemProxy

Defined in: [src/ts/kernel/mods/fs/proxies/mounts.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/mounts.ts#L6)

## Extends

- [`FilesystemProxy`](../../generic/classes/FilesystemProxy.md)

## Constructors

### Constructor

> **new MountsFilesystemProxy**(`uuid`): `MountsFilesystemProxy`

Defined in: [src/ts/kernel/mods/fs/proxies/mounts.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/mounts.ts#L10)

#### Parameters

##### uuid

`string`

#### Returns

`MountsFilesystemProxy`

#### Overrides

[`FilesystemProxy`](../../generic/classes/FilesystemProxy.md).[`constructor`](../../generic/classes/FilesystemProxy.md#constructor)

## Properties

### displayName?

> `readonly` `optional` **displayName?**: `string` = `"Drives"`

Defined in: [src/ts/kernel/mods/fs/proxies/mounts.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/mounts.ts#L8)

#### Overrides

[`FilesystemProxy`](../../generic/classes/FilesystemProxy.md).[`displayName`](../../generic/classes/FilesystemProxy.md#displayname)

***

### uuid

> **uuid**: `string`

Defined in: [src/ts/kernel/mods/fs/proxies/generic.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/generic.ts#L6)

#### Inherited from

[`FilesystemProxy`](../../generic/classes/FilesystemProxy.md).[`uuid`](../../generic/classes/FilesystemProxy.md#uuid)

***

### PROXY\_UUID

> `static` **PROXY\_UUID**: `string` = `"fedd3ed3-3550-4850-a7c4-c096b1907d91"`

Defined in: [src/ts/kernel/mods/fs/proxies/mounts.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/mounts.ts#L7)

#### Overrides

[`FilesystemProxy`](../../generic/classes/FilesystemProxy.md).[`PROXY_UUID`](../../generic/classes/FilesystemProxy.md#proxy_uuid)

## Methods

### readDir()

> **readDir**(`sourcePath`): `Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/proxies/mounts.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/mounts.ts#L32)

#### Parameters

##### sourcePath

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

#### Overrides

[`FilesystemProxy`](../../generic/classes/FilesystemProxy.md).[`readDir`](../../generic/classes/FilesystemProxy.md#readdir)

***

### readFile()

> **readFile**(`sourcePath`, `onProgress?`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/proxies/mounts.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/mounts.ts#L24)

#### Parameters

##### sourcePath

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Overrides

[`FilesystemProxy`](../../generic/classes/FilesystemProxy.md).[`readFile`](../../generic/classes/FilesystemProxy.md#readfile)
