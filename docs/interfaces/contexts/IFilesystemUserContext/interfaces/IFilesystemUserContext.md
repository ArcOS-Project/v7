[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/IFilesystemUserContext](../README.md) / IFilesystemUserContext

# Interface: IFilesystemUserContext

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L14)

## Extends

- [`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md)

## Properties

### fileHandlers

> **fileHandlers**: `Record`\<`string`, [`FileHandler`](../../../../types/system/fs/interfaces/FileHandler.md)\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L16)

***

### mountedDrives

> **mountedDrives**: `string`[]

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L17)

***

### TempFs?

> `optional` **TempFs?**: [`IMemoryFilesystemDrive`](../../../drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md)

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L15)

## Methods

### \_\_deactivate()

> **\_\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:90](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L90)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`__deactivate`](../../../IUserDaemon/interfaces/IUserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:88](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L88)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`__init`](../../../IUserDaemon/interfaces/IUserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L19)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`_deactivate`](../../../IUserDaemon/interfaces/IUserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L18)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`_init`](../../../IUserDaemon/interfaces/IUserContext.md#_init)

***

### copyMultiple()

> **copyMultiple**(`sources`, `destination`, `pid`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L24)

#### Parameters

##### sources

`string`[]

##### destination

`string`

##### pid

`number`

#### Returns

`Promise`\<`void`\>

***

### determineCategorizedDiskUsage()

> **determineCategorizedDiskUsage**(): `Promise`\<[`CategorizedDiskUsage`](../../../../types/user/interfaces/CategorizedDiskUsage.md)\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L30)

#### Returns

`Promise`\<[`CategorizedDiskUsage`](../../../../types/user/interfaces/CategorizedDiskUsage.md)\>

***

### FileProgress()

> **FileProgress**(`initialData`, `parentPid?`): `Promise`\<[`FileProgressMutator`](../../../../apps/components/fsprogress/types/interfaces/FileProgressMutator.md)\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L22)

#### Parameters

##### initialData

`Partial`\<[`FsProgressOperation`](../../../../apps/components/fsprogress/types/interfaces/FsProgressOperation.md)\>

##### parentPid?

`number`

#### Returns

`Promise`\<[`FileProgressMutator`](../../../../apps/components/fsprogress/types/interfaces/FileProgressMutator.md)\>

***

### findHandlerToOpenFile()

> **findHandlerToOpenFile**(`path`): `Promise`\<[`FileOpenerResult`](../../../../types/system/fs/interfaces/FileOpenerResult.md)[]\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L25)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`FileOpenerResult`](../../../../types/system/fs/interfaces/FileOpenerResult.md)[]\>

***

### getAllFileHandlers()

> **getAllFileHandlers**(): `Promise`\<[`FileOpenerResult`](../../../../types/system/fs/interfaces/FileOpenerResult.md)[]\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L26)

#### Returns

`Promise`\<[`FileOpenerResult`](../../../../types/system/fs/interfaces/FileOpenerResult.md)[]\>

***

### getThumbnailFor()

> **getThumbnailFor**(`path`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L31)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

***

### LoadSaveDialog()

> **LoadSaveDialog**(`data`): `Promise`\<`string`[] \| \[`undefined`\]\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L27)

#### Parameters

##### data

`Omit`\<[`LoadSaveDialogData`](../../../../apps/user/filemanager/types/interfaces/LoadSaveDialogData.md), `"returnId"`\>

#### Returns

`Promise`\<`string`[] \| \[`undefined`\]\>

***

### mountLegacyFilesystem()

> **mountLegacyFilesystem**(`connectionInfo`): `Promise`\<`false` \| [`ILegacyServerDrive`](../../../drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md)\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L32)

#### Parameters

##### connectionInfo

[`LegacyConnectionInfo`](../../../../types/external/legacy/interfaces/LegacyConnectionInfo.md)

#### Returns

`Promise`\<`false` \| [`ILegacyServerDrive`](../../../drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md)\>

***

### mountSourceDrive()

> **mountSourceDrive**(): `Promise`\<`false` \| [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L35)

#### Returns

`Promise`\<`false` \| [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)\>

***

### mountZip()

> **mountZip**(`path`, `letter?`, `fromSystem?`): `Promise`\<`false` \| [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md) \| `undefined`\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L20)

#### Parameters

##### path

`string`

##### letter?

`string`

##### fromSystem?

`boolean`

#### Returns

`Promise`\<`false` \| [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md) \| `undefined`\>

***

### moveMultiple()

> **moveMultiple**(`sources`, `destination`, `pid`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L23)

#### Parameters

##### sources

`string`[]

##### destination

`string`

##### pid

`number`

#### Returns

`Promise`\<`void`\>

***

### moveToTrashOrDeleteItem()

> **moveToTrashOrDeleteItem**(`path`, `dispatch?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L33)

#### Parameters

##### path

`string`

##### dispatch?

`boolean`

#### Returns

`Promise`\<`boolean`\>

***

### moveToTrashOrDeleteItemAck()

> **moveToTrashOrDeleteItemAck**(`directory`, `paths`, `dispatch?`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L34)

#### Parameters

##### directory

`string`

##### paths

`string`[]

##### dispatch?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### openFile()

> **openFile**(`path`, `shortcut?`): `Promise`\<`any`\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L28)

#### Parameters

##### path

`string`

##### shortcut?

[`ArcShortcut`](../../../../types/system/shortcut/interfaces/ArcShortcut.md)

#### Returns

`Promise`\<`any`\>

***

### openWith()

> **openWith**(`path`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L29)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

***

### pasteItems()

> **pasteItems**(`destination`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L39)

#### Parameters

##### destination

`string`

#### Returns

`Promise`\<`void`\>

***

### setCopyList()

> **setCopyList**(`paths`): `void`

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L37)

#### Parameters

##### paths

`string`[]

#### Returns

`void`

***

### setCutList()

> **setCutList**(`paths`): `void`

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L38)

#### Parameters

##### paths

`string`[]

#### Returns

`void`

***

### unmountMountedDrives()

> **unmountMountedDrives**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L21)

#### Returns

`Promise`\<`void`\>

***

### uploadItems()

> **uploadItems**(`path`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`UploadReturn`](../../../../types/system/fs/type-aliases/UploadReturn.md)\>\>

Defined in: [src/interfaces/contexts/IFilesystemUserContext.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IFilesystemUserContext.ts#L36)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`UploadReturn`](../../../../types/system/fs/type-aliases/UploadReturn.md)\>\>
