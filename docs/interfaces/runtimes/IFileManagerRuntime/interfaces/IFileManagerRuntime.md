[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/runtimes/IFileManagerRuntime](../README.md) / IFileManagerRuntime

# Interface: IFileManagerRuntime

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L14)

## Extends

- [`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean`

Defined in: [src/interfaces/IProcess.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L11)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`_criticalProcess`](../../../IAppProcess/interfaces/IAppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md)

Defined in: [src/interfaces/IAppProcess.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L25)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`acceleratorStore`](../../../IAppProcess/interfaces/IAppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/interfaces/IAppProcess.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L27)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`altMenu`](../../../IAppProcess/interfaces/IAppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/interfaces/IAppProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L17)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`app`](../../../IAppProcess/interfaces/IAppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L30)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`blinking`](../../../IAppProcess/interfaces/IAppProcess.md#blinking)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\>

Defined in: [src/interfaces/IAppProcess.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L18)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`componentMount`](../../../IAppProcess/interfaces/IAppProcess.md#componentmount)

***

### contents

> **contents**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`DirectoryReadReturn`](../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L16)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../types/apps/app/type-aliases/AppContextMenu.md)

Defined in: [src/interfaces/IAppProcess.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L26)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`contextMenu`](../../../IAppProcess/interfaces/IAppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string`

Defined in: [src/interfaces/IAppProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L14)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`crashReason`](../../../IAppProcess/interfaces/IAppProcess.md#crashreason)

***

### directoryListing

> **directoryListing**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`HTMLDivElement`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L30)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/interfaces/IProcess.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L6)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`dispatch`](../../../IAppProcess/interfaces/IAppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/interfaces/IAppProcess.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L29)

#### Inherited from

[`IWriterRuntime`](../../IWriterRuntime/interfaces/IWriterRuntime.md).[`draggable`](../../IWriterRuntime/interfaces/IWriterRuntime.md#draggable)

***

### drive

> **drive**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md) \| `undefined`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L29)

***

### drives

> **drives**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`Record`\<`string`, [`QuotedDrive`](../../../../apps/user/filemanager/types/type-aliases/QuotedDrive.md)\>\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L23)

***

### errored

> **errored**: [`BooleanStore`](../../../../types/shared/writable/type-aliases/BooleanStore.md)

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L19)

***

### loading

> **loading**: [`BooleanStore`](../../../../types/shared/writable/type-aliases/BooleanStore.md)

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L18)

***

### loadSave?

> `optional` **loadSave?**: [`LoadSaveDialogData`](../../../../apps/user/filemanager/types/interfaces/LoadSaveDialogData.md)

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L26)

***

### name

> **name**: `string`

Defined in: [src/interfaces/IProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L9)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`name`](../../../IAppProcess/interfaces/IAppProcess.md#name)

***

### notice

> **notice**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`FileManagerNotice`](../../../../apps/user/filemanager/types/interfaces/FileManagerNotice.md) \| `undefined`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L24)

***

### overridePopulatable

> **overridePopulatable**: `boolean`

Defined in: [src/interfaces/IAppProcess.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L21)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`overridePopulatable`](../../../IAppProcess/interfaces/IAppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/interfaces/IProcess.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L8)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`parentPid`](../../../IAppProcess/interfaces/IAppProcess.md#parentpid)

***

### path

> **path**: [`StringStore`](../../../../types/shared/writable/type-aliases/StringStore.md)

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L15)

***

### pid

> **pid**: `number`

Defined in: [src/interfaces/IProcess.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L7)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`pid`](../../../IAppProcess/interfaces/IAppProcess.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../types/system/process/type-aliases/RenderArgs.md)

Defined in: [src/interfaces/IAppProcess.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L24)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`renderArgs`](../../../IAppProcess/interfaces/IAppProcess.md#renderargs)

***

### rootFolders

> **rootFolders**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`FolderEntry`](../../../../types/system/fs/interfaces/FolderEntry.md)[]\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L22)

***

### safeMode

> **safeMode**: `boolean`

Defined in: [src/interfaces/IAppProcess.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L23)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`safeMode`](../../../IAppProcess/interfaces/IAppProcess.md#safemode)

***

### saveName

> **saveName**: [`StringStore`](../../../../types/shared/writable/type-aliases/StringStore.md)

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L27)

***

### selection

> **selection**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`[]\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L20)

***

### shortcuts

> **shortcuts**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ShortcutStore`](../../../../types/system/shortcut/type-aliases/ShortcutStore.md)\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L17)

***

### showNotice

> **showNotice**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L25)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [src/interfaces/IProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L12)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`sourceUrl`](../../../IAppProcess/interfaces/IAppProcess.md#sourceurl)

***

### starting

> **starting**: [`BooleanStore`](../../../../types/shared/writable/type-aliases/BooleanStore.md)

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L21)

***

### STATE

> **STATE**: [`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/interfaces/IProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L13)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`STATE`](../../../IAppProcess/interfaces/IAppProcess.md#state)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L22)

#### Inherited from

[`IWriterRuntime`](../../IWriterRuntime/interfaces/IWriterRuntime.md).[`toastMessage`](../../IWriterRuntime/interfaces/IWriterRuntime.md#toastmessage)

***

### username

> **username**: `string`

Defined in: [src/interfaces/IAppProcess.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L20)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`username`](../../../IAppProcess/interfaces/IAppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/interfaces/IAppProcess.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L19)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`userPreferences`](../../../IAppProcess/interfaces/IAppProcess.md#userpreferences)

***

### virtual

> **virtual**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`VirtualFileManagerLocation`](../../../../apps/user/filemanager/types/interfaces/VirtualFileManagerLocation.md) \| `undefined`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L28)

***

### virtualLocations

> **virtualLocations**: `Record`\<`string`, [`VirtualFileManagerLocation`](../../../../apps/user/filemanager/types/interfaces/VirtualFileManagerLocation.md)\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L31)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L28)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`windowFullscreen`](../../../IAppProcess/interfaces/IAppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L16)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`windowIcon`](../../../IAppProcess/interfaces/IAppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L15)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`windowTitle`](../../../IAppProcess/interfaces/IAppProcess.md#windowtitle)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/interfaces/IProcess.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L10)

##### Returns

`boolean`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`_disposed`](../../../IAppProcess/interfaces/IAppProcess.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/interfaces/IProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L14)

##### Returns

`number`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`MEMORY`](../../../IAppProcess/interfaces/IAppProcess.md#memory)

## Methods

### \_\_render\_\_()

> **\_\_render\_\_**(`body`): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L36)

#### Parameters

##### body

`HTMLDivElement`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`__render__`](../../../IAppProcess/interfaces/IAppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L15)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`__start`](../../../IAppProcess/interfaces/IAppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IAppProcess.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`__stop`](../../../IAppProcess/interfaces/IAppProcess.md#__stop)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/interfaces/IAppProcess.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L59)

#### Returns

[`IApplicationStorage`](../../../services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`appStore`](../../../IAppProcess/interfaces/IAppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L63)

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`blink`](../../../IAppProcess/interfaces/IAppProcess.md#blink)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`IFileManagerRuntime` \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L39)

#### Returns

`Promise`\<`IFileManagerRuntime` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`closeIfSecondInstance`](../../../IAppProcess/interfaces/IAppProcess.md#closeifsecondinstance)

***

### closeWindow()

> **closeWindow**(`kill?`): `Promise`\<`boolean` \| `void`\>

Defined in: [src/interfaces/IAppProcess.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L34)

#### Parameters

##### kill?

`boolean`

#### Returns

`Promise`\<`boolean` \| `void`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`closeWindow`](../../../IAppProcess/interfaces/IAppProcess.md#closewindow)

***

### confirmLoadSave()

> **confirmLoadSave**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L61)

#### Returns

`Promise`\<`void`\>

***

### confirmUmountDrive()

> **confirmUmountDrive**(`drive`, `id`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L40)

#### Parameters

##### drive

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`CrashDetection`](../../../IAppProcess/interfaces/IAppProcess.md#crashdetection)

***

### createShortcut()

> **createShortcut**(`name`, `path`, `folder?`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L49)

#### Parameters

##### name

`string`

##### path

`string`

##### folder?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### deleteSelected()

> **deleteSelected**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L50)

#### Returns

`Promise`\<`void`\>

***

### DirectoryNotFound()

> **DirectoryNotFound**(): `void`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L59)

#### Returns

`void`

***

### downloadSelected()

> **downloadSelected**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L51)

#### Returns

`Promise`\<`void`\>

***

### elevate()

> **elevate**(`id`): `Promise`\<`unknown`\>

Defined in: [src/interfaces/IAppProcess.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L58)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`elevate`](../../../IAppProcess/interfaces/IAppProcess.md#elevate)

***

### EnterKey()

> **EnterKey**(`alternative?`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L56)

#### Parameters

##### alternative?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/interfaces/IAppProcess.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L41)

#### Returns

`HTMLDivElement`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`getBody`](../../../IAppProcess/interfaces/IAppProcess.md#getbody)

***

### getIcon()

> **getIcon**(`id`): `Promise`\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L60)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`getIcon`](../../../IAppProcess/interfaces/IAppProcess.md#geticon)

***

### getIconCached()

> **getIconCached**(`id`): `string`

Defined in: [src/interfaces/IAppProcess.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L61)

#### Parameters

##### id

`string`

#### Returns

`string`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`getIconCached`](../../../IAppProcess/interfaces/IAppProcess.md#geticoncached)

***

### getIconStore()

> **getIconStore**(`id`): [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L62)

#### Parameters

##### id

`string`

#### Returns

[`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`getIconStore`](../../../IAppProcess/interfaces/IAppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `IFileManagerRuntime`[]

Defined in: [src/interfaces/IAppProcess.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L38)

#### Returns

`IFileManagerRuntime`[]

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`getSingleton`](../../../IAppProcess/interfaces/IAppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/interfaces/IAppProcess.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L40)

#### Returns

`HTMLDivElement`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`getWindow`](../../../IAppProcess/interfaces/IAppProcess.md#getwindow)

***

### handleVirtualLocation()

> **handleVirtualLocation**(`path`): `void`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L63)

#### Parameters

##### path

`string`

#### Returns

`void`

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/interfaces/IAppProcess.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L42)

#### Returns

`boolean`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`hasOverlays`](../../../IAppProcess/interfaces/IAppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L33)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`HideToast`](../../../IAppProcess/interfaces/IAppProcess.md#hidetoast)

***

### isDirectory()

> **isDirectory**(`path`, `workingPath?`): `boolean`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L57)

#### Parameters

##### path

`string`

##### workingPath?

`string`

#### Returns

`boolean`

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`killSelf`](../../../IAppProcess/interfaces/IAppProcess.md#killself)

***

### lockRefresh()

> **lockRefresh**(): `void`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L35)

#### Returns

`void`

***

### navigate()

> **navigate**(`path`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L33)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L31)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`onClose`](../../../IAppProcess/interfaces/IAppProcess.md#onclose)

***

### openFile()

> **openFile**(`path`): `void`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L48)

#### Parameters

##### path

`string`

#### Returns

`void`

***

### parentDir()

> **parentDir**(): `void`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L37)

#### Returns

`void`

***

### pasteFiles()

> **pasteFiles**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L46)

#### Returns

`Promise`\<`void`\>

***

### refresh()

> **refresh**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L34)

#### Returns

`Promise`\<`void`\>

***

### render()

> **render**(`args`): `any`

Defined in: [src/interfaces/IAppProcess.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L35)

#### Parameters

##### args

[`RenderArgs`](../../../../types/system/process/type-aliases/RenderArgs.md)

#### Returns

`any`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`render`](../../../IAppProcess/interfaces/IAppProcess.md#render)

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/IProcess.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L18)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`requestFileLock`](../../../IAppProcess/interfaces/IAppProcess.md#requestfilelock)

***

### selectorDown()

> **selectorDown**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L55)

#### Returns

`Promise`\<`void`\>

***

### selectorUp()

> **selectorUp**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L54)

#### Returns

`Promise`\<`void`\>

***

### setCopyFiles()

> **setCopyFiles**(`files?`): `void`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L44)

#### Parameters

##### files?

`string`[]

#### Returns

`void`

***

### setCutFiles()

> **setCutFiles**(`files?`): `void`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L45)

#### Parameters

##### files?

`string`[]

#### Returns

`void`

***

### setSource()

> **setSource**(`source`): `void`

Defined in: [src/interfaces/IProcess.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L20)

#### Parameters

##### source

`string`

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`setSource`](../../../IAppProcess/interfaces/IAppProcess.md#setsource)

***

### setupLoadSave()

> **setupLoadSave**(`loadSave?`): `void`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L62)

#### Parameters

##### loadSave?

[`LoadSaveDialogData`](../../../../apps/user/filemanager/types/interfaces/LoadSaveDialogData.md)

#### Returns

`void`

***

### shareAccessIsAdministrative()

> **shareAccessIsAdministrative**(`drive`): `boolean`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L58)

#### Parameters

##### drive

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)

#### Returns

`boolean`

***

### ShowToast()

> **ShowToast**(`toast`, `durationMs?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L32)

#### Parameters

##### toast

[`ToastMessage`](../../../../types/apps/app/interfaces/ToastMessage.md)

##### durationMs?

`number`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`ShowToast`](../../../IAppProcess/interfaces/IAppProcess.md#showtoast)

***

### singlefySelected()

> **singlefySelected**(): `void`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L52)

#### Returns

`void`

***

### spawnApp()

> **spawnApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L48)

#### Type Parameters

##### T

`T` *extends* [`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md) = [`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md)

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`spawnApp`](../../../IAppProcess/interfaces/IAppProcess.md#spawnapp)

***

### spawnOverlay()

> **spawnOverlay**(`id`, ...`args`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L47)

#### Parameters

##### id

`string`

##### args

...`any`[]

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`spawnOverlay`](../../../IAppProcess/interfaces/IAppProcess.md#spawnoverlay)

***

### spawnOverlayApp()

> **spawnOverlayApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L53)

#### Type Parameters

##### T

`T` *extends* [`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md) = [`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md)

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`spawnOverlayApp`](../../../IAppProcess/interfaces/IAppProcess.md#spawnoverlayapp)

***

### startKeyboardShortcutListener()

> **startKeyboardShortcutListener**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L43)

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`startKeyboardShortcutListener`](../../../IAppProcess/interfaces/IAppProcess.md#startkeyboardshortcutlistener)

***

### stopKeyboardShortcutListener()

> **stopKeyboardShortcutListener**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L44)

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`stopKeyboardShortcutListener`](../../../IAppProcess/interfaces/IAppProcess.md#stopkeyboardshortcutlistener)

***

### SystemFolderDeletionRestricted()

> **SystemFolderDeletionRestricted**(`userPathKey`): `void`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L60)

#### Parameters

##### userPathKey

`string`

#### Returns

`void`

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L46)

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`unfocusActiveElement`](../../../IAppProcess/interfaces/IAppProcess.md#unfocusactiveelement)

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/IProcess.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L19)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`unlockFile`](../../../IAppProcess/interfaces/IAppProcess.md#unlockfile)

***

### unlockRefresh()

> **unlockRefresh**(`refresh?`): `void`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L36)

#### Parameters

##### refresh?

`boolean`

#### Returns

`void`

***

### unmountDrive()

> **unmountDrive**(`drive`, `id`): `void`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L39)

#### Parameters

##### drive

[`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)

##### id

`string`

#### Returns

`void`

***

### updateAltMenu()

> **updateAltMenu**(): `void`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L41)

#### Returns

`void`

***

### updateDrives()

> **updateDrives**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L38)

#### Returns

`Promise`\<`void`\>

***

### updateNotice()

> **updateNotice**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L43)

#### Returns

`Promise`\<`void`\>

***

### updateRootFolders()

> **updateRootFolders**(): `void`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L42)

#### Returns

`void`

***

### updateSelection()

> **updateSelection**(`e`, `path`): `void`

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L53)

#### Parameters

##### e

`MouseEvent`

##### path

`string`

#### Returns

`void`

***

### uploadItems()

> **uploadItems**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IFileManagerRuntime.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IFileManagerRuntime.ts#L47)

#### Returns

`Promise`\<`void`\>
