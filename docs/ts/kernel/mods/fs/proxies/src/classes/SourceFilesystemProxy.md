[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/fs/proxies/src](../README.md) / SourceFilesystemProxy

# Class: SourceFilesystemProxy

Defined in: [src/ts/kernel/mods/fs/proxies/src.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/src.ts#L9)

## Extends

- [`FilesystemProxy`](../../generic/classes/FilesystemProxy.md)

## Constructors

### Constructor

> **new SourceFilesystemProxy**(`uuid`): `SourceFilesystemProxy`

Defined in: [src/ts/kernel/mods/fs/proxies/src.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/src.ts#L13)

#### Parameters

##### uuid

`string`

#### Returns

`SourceFilesystemProxy`

#### Overrides

[`FilesystemProxy`](../../generic/classes/FilesystemProxy.md).[`constructor`](../../generic/classes/FilesystemProxy.md#constructor)

## Properties

### displayName?

> `readonly` `optional` **displayName?**: `string` = `"SRC"`

Defined in: [src/ts/kernel/mods/fs/proxies/src.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/src.ts#L11)

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

> `static` **PROXY\_UUID**: `string` = `"cbd4bfd4-a232-4b34-ad60-183591fa5e92"`

Defined in: [src/ts/kernel/mods/fs/proxies/src.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/src.ts#L10)

#### Overrides

[`FilesystemProxy`](../../generic/classes/FilesystemProxy.md).[`PROXY_UUID`](../../generic/classes/FilesystemProxy.md#proxy_uuid)

## Methods

### readDir()

> **readDir**(`path`): `Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/proxies/src.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/src.ts#L49)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

#### Overrides

[`FilesystemProxy`](../../generic/classes/FilesystemProxy.md).[`readDir`](../../generic/classes/FilesystemProxy.md#readdir)

***

### readFile()

> **readFile**(`path`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/kernel/mods/fs/proxies/src.ts:93](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/fs/proxies/src.ts#L93)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Overrides

[`FilesystemProxy`](../../generic/classes/FilesystemProxy.md).[`readFile`](../../generic/classes/FilesystemProxy.md#readfile)
