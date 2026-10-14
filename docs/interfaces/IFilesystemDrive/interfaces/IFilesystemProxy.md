[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/IFilesystemDrive](../README.md) / IFilesystemProxy

# Interface: IFilesystemProxy

Defined in: [src/interfaces/IFilesystemDrive.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L52)

## Properties

### displayName?

> `readonly` `optional` **displayName?**: `string`

Defined in: [src/interfaces/IFilesystemDrive.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L54)

***

### uuid

> **uuid**: `string`

Defined in: [src/interfaces/IFilesystemDrive.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L53)

## Methods

### readDir()

> **readDir**(`path`): `Promise`\<[`DirectoryReadReturn`](../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L55)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

***

### readFile()

> **readFile**(`path`, `onProgress?`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/interfaces/IFilesystemDrive.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IFilesystemDrive.ts#L56)

#### Parameters

##### path

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>
