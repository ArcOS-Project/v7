[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/daemon/contexts/filesystem](../README.md) / FilesystemUserContext

# Class: FilesystemUserContext

Defined in: [src/ts/daemon/contexts/filesystem.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L31)

## Extends

- [`UserContext`](../../../context/classes/UserContext.md)

## Implements

- [`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md)

## Constructors

### Constructor

> **new FilesystemUserContext**(`id`, `daemon`): `FilesystemUserContext`

Defined in: [src/ts/daemon/contexts/filesystem.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L42)

#### Parameters

##### id

`string`

##### daemon

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`FilesystemUserContext`

#### Overrides

[`UserContext`](../../../context/classes/UserContext.md).[`constructor`](../../../context/classes/UserContext.md#constructor)

## Properties

### fileHandlers

> **fileHandlers**: `Record`\<`string`, [`FileHandler`](../../../../../types/system/fs/interfaces/FileHandler.md)\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L34)

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`fileHandlers`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#filehandlers)

***

### mountedDrives

> **mountedDrives**: `string`[] = `[]`

Defined in: [src/ts/daemon/contexts/filesystem.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L35)

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`mountedDrives`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#mounteddrives)

***

### TempFs?

> `optional` **TempFs?**: [`IMemoryFilesystemDrive`](../../../../../interfaces/drives/IMemoryFilesystemDrive/interfaces/IMemoryFilesystemDrive.md)

Defined in: [src/ts/daemon/contexts/filesystem.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L33)

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`TempFs`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#tempfs)

## Accessors

### \_disposed

#### Get Signature

> **get** `protected` **\_disposed**(): `boolean`

Defined in: [src/ts/daemon/context.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L59)

##### Returns

`boolean`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_disposed`](../../../context/classes/UserContext.md#_disposed)

***

### appStorage

#### Get Signature

> **get** `protected` **appStorage**(): () => [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L51)

##### Returns

() => [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`appStorage`](../../../context/classes/UserContext.md#appstorage)

***

### initialized

#### Get Signature

> **get** `protected` **initialized**(): `boolean`

Defined in: [src/ts/daemon/context.ts:83](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L83)

##### Returns

`boolean`

#### Set Signature

> **set** `protected` **initialized**(`value`): `void`

Defined in: [src/ts/daemon/context.ts:87](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L87)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`initialized`](../../../context/classes/UserContext.md#initialized)

***

### pid

#### Get Signature

> **get** `protected` **pid**(): `number`

Defined in: [src/ts/daemon/context.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L63)

##### Returns

`number`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`pid`](../../../context/classes/UserContext.md#pid)

***

### safeMode

#### Get Signature

> **get** `protected` **safeMode**(): `boolean`

Defined in: [src/ts/daemon/context.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L55)

##### Returns

`boolean`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`safeMode`](../../../context/classes/UserContext.md#safemode)

***

### serviceHost

#### Get Signature

> **get** `protected` **serviceHost**(): [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L47)

##### Returns

[`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md) \| `undefined`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`serviceHost`](../../../context/classes/UserContext.md#servicehost)

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L12)

##### Returns

[`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`shell`](../../../context/classes/UserContext.md#shell)

***

### userInfo

#### Get Signature

> **get** `protected` **userInfo**(): [`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

Defined in: [src/ts/daemon/context.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L67)

##### Returns

[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

#### Set Signature

> **set** `protected` **userInfo**(`value`): `void`

Defined in: [src/ts/daemon/context.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L71)

##### Parameters

###### value

[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

##### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`userInfo`](../../../context/classes/UserContext.md#userinfo)

***

### username

#### Get Signature

> **get** `protected` **username**(): `string`

Defined in: [src/ts/daemon/context.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L75)

##### Returns

`string`

#### Set Signature

> **set** `protected` **username**(`username`): `void`

Defined in: [src/ts/daemon/context.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L79)

##### Parameters

###### username

`string`

##### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`username`](../../../context/classes/UserContext.md#username)

## Methods

### \_\_deactivate()

> **\_\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L31)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`__deactivate`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#__deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__deactivate`](../../../context/classes/UserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`__init`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#__init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__init`](../../../context/classes/UserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L53)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`_deactivate`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#_deactivate)

#### Overrides

[`UserContext`](../../../context/classes/UserContext.md).[`_deactivate`](../../../context/classes/UserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L48)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`_init`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#_init)

#### Overrides

[`UserContext`](../../../context/classes/UserContext.md).[`_init`](../../../context/classes/UserContext.md#_init)

***

### copyMultiple()

> **copyMultiple**(`sources`, `destination`, `pid`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:295](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L295)

#### Parameters

##### sources

`string`[]

##### destination

`string`

##### pid

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`copyMultiple`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#copymultiple)

***

### determineCategorizedDiskUsage()

> **determineCategorizedDiskUsage**(): `Promise`\<[`CategorizedDiskUsage`](../../../../../types/user/interfaces/CategorizedDiskUsage.md)\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:483](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L483)

#### Returns

`Promise`\<[`CategorizedDiskUsage`](../../../../../types/user/interfaces/CategorizedDiskUsage.md)\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`determineCategorizedDiskUsage`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#determinecategorizeddiskusage)

***

### FileProgress()

> **FileProgress**(`initialData`, `parentPid?`): `Promise`\<[`FileProgressMutator`](../../../../../apps/components/fsprogress/types/interfaces/FileProgressMutator.md)\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:112](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L112)

#### Parameters

##### initialData

`Partial`\<[`FsProgressOperation`](../../../../../apps/components/fsprogress/types/interfaces/FsProgressOperation.md)\>

##### parentPid?

`number`

#### Returns

`Promise`\<[`FileProgressMutator`](../../../../../apps/components/fsprogress/types/interfaces/FileProgressMutator.md)\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`FileProgress`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#fileprogress)

***

### findHandlerToOpenFile()

> **findHandlerToOpenFile**(`path`): `Promise`\<[`FileOpenerResult`](../../../../../types/system/fs/interfaces/FileOpenerResult.md)[]\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:349](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L349)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`FileOpenerResult`](../../../../../types/system/fs/interfaces/FileOpenerResult.md)[]\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`findHandlerToOpenFile`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#findhandlertoopenfile)

***

### getAllFileHandlers()

> **getAllFileHandlers**(): `Promise`\<[`FileOpenerResult`](../../../../../types/system/fs/interfaces/FileOpenerResult.md)[]\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:389](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L389)

#### Returns

`Promise`\<[`FileOpenerResult`](../../../../../types/system/fs/interfaces/FileOpenerResult.md)[]\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`getAllFileHandlers`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#getallfilehandlers)

***

### getThumbnailFor()

> **getThumbnailFor**(`path`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:517](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L517)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`getThumbnailFor`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#getthumbnailfor)

***

### LoadSaveDialog()

> **LoadSaveDialog**(`data`): `Promise`\<`string`[] \| \[`undefined`\]\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:415](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L415)

#### Parameters

##### data

`Omit`\<[`LoadSaveDialogData`](../../../../../apps/user/filemanager/types/interfaces/LoadSaveDialogData.md), `"returnId"`\>

#### Returns

`Promise`\<`string`[] \| \[`undefined`\]\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`LoadSaveDialog`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#loadsavedialog)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/daemon/context.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L41)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`Log`](../../../context/classes/UserContext.md#log)

***

### mountLegacyFilesystem()

> **mountLegacyFilesystem**(`connectionInfo`): `Promise`\<`false` \| [`ILegacyServerDrive`](../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md)\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:526](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L526)

#### Parameters

##### connectionInfo

[`LegacyConnectionInfo`](../../../../../types/external/legacy/interfaces/LegacyConnectionInfo.md)

#### Returns

`Promise`\<`false` \| [`ILegacyServerDrive`](../../../../../interfaces/drives/ILegacyServerDrive/interfaces/ILegacyServerDrive.md)\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`mountLegacyFilesystem`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#mountlegacyfilesystem)

***

### mountSourceDrive()

> **mountSourceDrive**(): `Promise`\<`false` \| [`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:641](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L641)

#### Returns

`Promise`\<`false` \| [`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`mountSourceDrive`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#mountsourcedrive)

***

### mountZip()

> **mountZip**(`path`, `letter?`, `fromSystem?`): `Promise`\<`false` \| [`ZIPDrive`](../../../../kernel/mods/fs/drives/zip/classes/ZIPDrive.md) \| `undefined`\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L61)

#### Parameters

##### path

`string`

##### letter?

`string`

##### fromSystem?

`boolean` = `false`

#### Returns

`Promise`\<`false` \| [`ZIPDrive`](../../../../kernel/mods/fs/drives/zip/classes/ZIPDrive.md) \| `undefined`\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`mountZip`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#mountzip)

***

### moveMultiple()

> **moveMultiple**(`sources`, `destination`, `pid`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:239](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L239)

#### Parameters

##### sources

`string`[]

##### destination

`string`

##### pid

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`moveMultiple`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#movemultiple)

***

### moveToTrashOrDeleteItem()

> **moveToTrashOrDeleteItem**(`path`, `dispatch?`): `Promise`\<`boolean`\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:541](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L541)

Deletes the specified item WITH SUPPORT FOR RECYCLING

#### Parameters

##### path

`string`

The file or folder to delete

##### dispatch?

`boolean` = `false`

Whether or not to trigger fs-flush

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`moveToTrashOrDeleteItem`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#movetotrashordeleteitem)

***

### moveToTrashOrDeleteItemAck()

> **moveToTrashOrDeleteItemAck**(`directory`, `paths`, `dispatch?`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:551](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L551)

#### Parameters

##### directory

`string`

##### paths

`string`[]

##### dispatch?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`moveToTrashOrDeleteItemAck`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#movetotrashordeleteitemack)

***

### openFile()

> **openFile**(`path`, `shortcut?`): `Promise`\<`any`\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:435](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L435)

#### Parameters

##### path

`string`

##### shortcut?

[`ArcShortcut`](../../../../../types/system/shortcut/interfaces/ArcShortcut.md)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`openFile`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#openfile)

***

### openWith()

> **openWith**(`path`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:475](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L475)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`openWith`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#openwith)

***

### pasteItems()

> **pasteItems**(`destination`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:688](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L688)

#### Parameters

##### destination

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`pasteItems`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#pasteitems)

***

### setCopyList()

> **setCopyList**(`paths`): `void`

Defined in: [src/ts/daemon/contexts/filesystem.ts:683](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L683)

#### Parameters

##### paths

`string`[]

#### Returns

`void`

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`setCopyList`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#setcopylist)

***

### setCutList()

> **setCutList**(`paths`): `void`

Defined in: [src/ts/daemon/contexts/filesystem.ts:678](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L678)

#### Parameters

##### paths

`string`[]

#### Returns

`void`

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`setCutList`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#setcutlist)

***

### SystemFolderDeletionRestricted()

> **SystemFolderDeletionRestricted**(`userPathKey`): `void`

Defined in: [src/ts/daemon/contexts/filesystem.ts:701](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L701)

#### Parameters

##### userPathKey

`string`

#### Returns

`void`

***

### unmountMountedDrives()

> **unmountMountedDrives**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:104](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L104)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`unmountMountedDrives`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#unmountmounteddrives)

***

### uploadItems()

> **uploadItems**(`path`, `accept?`, `multiple?`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`UploadReturn`](../../../../../types/system/fs/type-aliases/UploadReturn.md)\>\>

Defined in: [src/ts/daemon/contexts/filesystem.ts:645](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/filesystem.ts#L645)

#### Parameters

##### path

`string`

##### accept?

`string` = `"*/*"`

##### multiple?

`boolean` = `true`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`UploadReturn`](../../../../../types/system/fs/type-aliases/UploadReturn.md)\>\>

#### Implementation of

[`IFilesystemUserContext`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md).[`uploadItems`](../../../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md#uploaditems)
