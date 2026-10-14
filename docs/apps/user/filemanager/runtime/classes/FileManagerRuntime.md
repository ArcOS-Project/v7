[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/user/filemanager/runtime](../README.md) / FileManagerRuntime

# Class: FileManagerRuntime

Defined in: [src/apps/user/filemanager/runtime.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L25)

## Extends

- [`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md)

## Implements

- [`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md)

## Constructors

### Constructor

> **new FileManagerRuntime**(`pid`, `parentPid`, `app`, `path?`, `loadSave?`): `FileManagerRuntime`

Defined in: [src/apps/user/filemanager/runtime.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L59)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

##### path?

`string`

##### loadSave?

[`LoadSaveDialogData`](../../types/interfaces/LoadSaveDialogData.md)

#### Returns

`FileManagerRuntime`

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`constructor`](../../../../../ts/apps/process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`_criticalProcess`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#_criticalprocess)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_criticalProcess`](../../../../../ts/apps/process/classes/AppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L46)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`acceleratorStore`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#acceleratorstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`acceleratorStore`](../../../../../ts/apps/process/classes/AppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`altMenu`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#altmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`altMenu`](../../../../../ts/apps/process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`app`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#app)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`app`](../../../../../ts/apps/process/classes/AppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`blinking`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#blinking)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blinking`](../../../../../ts/apps/process/classes/AppProcess.md#blinking)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`componentMount`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#componentmount)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`componentMount`](../../../../../ts/apps/process/classes/AppProcess.md#componentmount)

***

### contents

> **contents**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`DirectoryReadReturn`](../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/apps/user/filemanager/runtime.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L27)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`contents`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#contents)

***

### contextMenu

> **contextMenu**: [`AppContextMenu`](../../../../../types/apps/app/type-aliases/AppContextMenu.md)

Defined in: [src/apps/user/filemanager/runtime.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L55)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`contextMenu`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#contextmenu)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`contextMenu`](../../../../../ts/apps/process/classes/AppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`crashReason`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#crashreason)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`crashReason`](../../../../../ts/apps/process/classes/AppProcess.md#crashreason)

***

### directoryListing

> **directoryListing**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`HTMLDivElement`\>

Defined in: [src/apps/user/filemanager/runtime.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L41)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`directoryListing`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#directorylisting)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`dispatch`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#dispatch)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`dispatch`](../../../../../ts/apps/process/classes/AppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`draggable`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#draggable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`draggable`](../../../../../ts/apps/process/classes/AppProcess.md#draggable)

***

### drive

> **drive**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md) \| `undefined`\>

Defined in: [src/apps/user/filemanager/runtime.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L40)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`drive`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#drive)

***

### drives

> **drives**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`Record`\<`string`, [`QuotedDrive`](../../types/type-aliases/QuotedDrive.md)\>\>

Defined in: [src/apps/user/filemanager/runtime.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L34)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`drives`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#drives)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../../types/system/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L44)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevations`](../../../../../ts/apps/process/classes/AppProcess.md#elevations)

***

### errored

> **errored**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/filemanager/runtime.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L30)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`errored`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#errored)

***

### loading

> **loading**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/filemanager/runtime.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L29)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`loading`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#loading)

***

### loadSave

> **loadSave**: [`LoadSaveDialogData`](../../types/interfaces/LoadSaveDialogData.md) \| `undefined`

Defined in: [src/apps/user/filemanager/runtime.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L37)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`loadSave`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#loadsave)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`name`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#name)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`name`](../../../../../ts/apps/process/classes/AppProcess.md#name)

***

### notice

> **notice**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`FileManagerNotice`](../../types/interfaces/FileManagerNotice.md) \| `undefined`\>

Defined in: [src/apps/user/filemanager/runtime.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L35)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`notice`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#notice)

***

### overlayStore

> `protected` **overlayStore**: `Record`\<`string`, [`App`](../../../../../types/apps/app/interfaces/App.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L43)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overlayStore`](../../../../../ts/apps/process/classes/AppProcess.md#overlaystore)

***

### overridePopulatable

> **overridePopulatable**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L39)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`overridePopulatable`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#overridepopulatable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overridePopulatable`](../../../../../ts/apps/process/classes/AppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`parentPid`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#parentpid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`parentPid`](../../../../../ts/apps/process/classes/AppProcess.md#parentpid)

***

### path

> **path**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/filemanager/runtime.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L26)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`path`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#path)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`pid`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#pid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`pid`](../../../../../ts/apps/process/classes/AppProcess.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`renderArgs`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#renderargs)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`renderArgs`](../../../../../ts/apps/process/classes/AppProcess.md#renderargs)

***

### rootFolders

> **rootFolders**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`FolderEntry`](../../../../../types/system/fs/interfaces/FolderEntry.md)[]\>

Defined in: [src/apps/user/filemanager/runtime.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L33)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`rootFolders`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#rootfolders)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L42)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`safeMode`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#safemode)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`safeMode`](../../../../../ts/apps/process/classes/AppProcess.md#safemode)

***

### saveName

> **saveName**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/filemanager/runtime.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L38)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`saveName`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#savename)

***

### selection

> **selection**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`[]\>

Defined in: [src/apps/user/filemanager/runtime.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L31)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`selection`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#selection)

***

### shortcuts

> **shortcuts**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ShortcutStore`](../../../../../types/system/shortcut/type-aliases/ShortcutStore.md)\>

Defined in: [src/apps/user/filemanager/runtime.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L28)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`shortcuts`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#shortcuts)

***

### showNotice

> **showNotice**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/filemanager/runtime.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L36)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`showNotice`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#shownotice)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`sourceUrl`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#sourceurl)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`sourceUrl`](../../../../../ts/apps/process/classes/AppProcess.md#sourceurl)

***

### starting

> **starting**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/filemanager/runtime.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L32)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`starting`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#starting)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`toastMessage`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#toastmessage)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`toastMessage`](../../../../../ts/apps/process/classes/AppProcess.md#toastmessage)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`username`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#username)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`username`](../../../../../ts/apps/process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`userPreferences`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#userpreferences)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`userPreferences`](../../../../../ts/apps/process/classes/AppProcess.md#userpreferences)

***

### virtual

> **virtual**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`VirtualFileManagerLocation`](../../types/interfaces/VirtualFileManagerLocation.md) \| `undefined`\>

Defined in: [src/apps/user/filemanager/runtime.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L39)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`virtual`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#virtual)

***

### virtualLocations

> **virtualLocations**: `Record`\<`string`, [`VirtualFileManagerLocation`](../../types/interfaces/VirtualFileManagerLocation.md)\>

Defined in: [src/apps/user/filemanager/runtime.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L42)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`virtualLocations`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#virtuallocations)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`windowFullscreen`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#windowfullscreen)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowFullscreen`](../../../../../ts/apps/process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`windowIcon`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#windowicon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowIcon`](../../../../../ts/apps/process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`windowTitle`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#windowtitle)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowTitle`](../../../../../ts/apps/process/classes/AppProcess.md#windowtitle)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`_disposed`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#_disposed)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_disposed`](../../../../../ts/apps/process/classes/AppProcess.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`MEMORY`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#memory)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`MEMORY`](../../../../../ts/apps/process/classes/AppProcess.md#memory)

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/apps/process.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L52)

##### Returns

[`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`shell`](../../../../../ts/apps/process/classes/AppProcess.md#shell)

***

### STATE

#### Get Signature

> **get** **STATE**(): [`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L17)

##### Returns

[`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

#### Set Signature

> **set** **STATE**(`value`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L21)

##### Parameters

###### value

[`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

##### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`STATE`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#state)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`STATE`](../../../../../ts/apps/process/classes/AppProcess.md#state)

## Methods

### \_\_render\_\_()

> **\_\_render\_\_**(`body`): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:167](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L167)

#### Parameters

##### body

`HTMLDivElement`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`__render__`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#__render__)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__render__`](../../../../../ts/apps/process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`__start`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#__start)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__start`](../../../../../ts/apps/process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`__stop`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#__stop)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__stop`](../../../../../ts/apps/process/classes/AppProcess.md#__stop)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`appStore`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#appstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`appStore`](../../../../../ts/apps/process/classes/AppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`blink`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#blink)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blink`](../../../../../ts/apps/process/classes/AppProcess.md#blink)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`FileManagerRuntime` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`FileManagerRuntime` \| `undefined`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`closeIfSecondInstance`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#closeifsecondinstance)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeIfSecondInstance`](../../../../../ts/apps/process/classes/AppProcess.md#closeifsecondinstance)

***

### closeWindow()

> **closeWindow**(`kill?`): `Promise`\<`boolean` \| `void`\>

Defined in: [src/ts/apps/process.ts:122](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L122)

#### Parameters

##### kill?

`boolean` = `true`

#### Returns

`Promise`\<`boolean` \| `void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`closeWindow`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#closewindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeWindow`](../../../../../ts/apps/process/classes/AppProcess.md#closewindow)

***

### confirmLoadSave()

> **confirmLoadSave**(): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:702](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L702)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`confirmLoadSave`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#confirmloadsave)

***

### confirmUmountDrive()

> **confirmUmountDrive**(`drive`, `id`): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:278](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L278)

#### Parameters

##### drive

[`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)

##### id

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`confirmUmountDrive`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#confirmumountdrive)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`CrashDetection`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#crashdetection)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`CrashDetection`](../../../../../ts/apps/process/classes/AppProcess.md#crashdetection)

***

### createShortcut()

> **createShortcut**(`name`, `path`, `folder?`): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:404](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L404)

#### Parameters

##### name

`string`

##### path

`string`

##### folder?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`createShortcut`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#createshortcut)

***

### deleteSelected()

> **deleteSelected**(): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:430](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L430)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`deleteSelected`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#deleteselected)

***

### DirectoryNotFound()

> **DirectoryNotFound**(): `void`

Defined in: [src/apps/user/filemanager/runtime.ts:653](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L653)

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`DirectoryNotFound`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#directorynotfound)

***

### downloadSelected()

> **downloadSelected**(): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:437](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L437)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`downloadSelected`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#downloadselected)

***

### elevate()

> **elevate**(`id`): `Promise`\<`unknown`\>

Defined in: [src/ts/apps/process.ts:370](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L370)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`unknown`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`elevate`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#elevate)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevate`](../../../../../ts/apps/process/classes/AppProcess.md#elevate)

***

### EnterKey()

> **EnterKey**(`alternative?`): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:568](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L568)

#### Parameters

##### alternative?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`EnterKey`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#enterkey)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`getBody`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#getbody)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getBody`](../../../../../ts/apps/process/classes/AppProcess.md#getbody)

***

### getIcon()

> **getIcon**(`id`): `Promise`\<`string`\>

Defined in: [src/ts/apps/process.ts:379](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L379)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`getIcon`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#geticon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIcon`](../../../../../ts/apps/process/classes/AppProcess.md#geticon)

***

### getIconCached()

> **getIconCached**(`id`): `string`

Defined in: [src/ts/apps/process.ts:383](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L383)

#### Parameters

##### id

`string`

#### Returns

`string`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`getIconCached`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#geticoncached)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconCached`](../../../../../ts/apps/process/classes/AppProcess.md#geticoncached)

***

### getIconStore()

> **getIconStore**(`id`): [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:387](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L387)

#### Parameters

##### id

`string`

#### Returns

[`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`getIconStore`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#geticonstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconStore`](../../../../../ts/apps/process/classes/AppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `FileManagerRuntime`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`FileManagerRuntime`[]

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`getSingleton`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#getsingleton)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getSingleton`](../../../../../ts/apps/process/classes/AppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`getWindow`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#getwindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getWindow`](../../../../../ts/apps/process/classes/AppProcess.md#getwindow)

***

### handleVirtualLocation()

> **handleVirtualLocation**(`path`): `void`

Defined in: [src/apps/user/filemanager/runtime.ts:747](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L747)

#### Parameters

##### path

`string`

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`handleVirtualLocation`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#handlevirtuallocation)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`hasOverlays`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#hasoverlays)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`hasOverlays`](../../../../../ts/apps/process/classes/AppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`HideToast`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#hidetoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`HideToast`](../../../../../ts/apps/process/classes/AppProcess.md#hidetoast)

***

### isDirectory()

> **isDirectory**(`path`, `workingPath?`): `boolean`

Defined in: [src/apps/user/filemanager/runtime.ts:626](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L626)

#### Parameters

##### path

`string`

##### workingPath?

`string`

#### Returns

`boolean`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`isDirectory`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#isdirectory)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`killSelf`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#killself)

#### Inherited from

`AppProcess.killSelf`

***

### lockRefresh()

> **lockRefresh**(): `void`

Defined in: [src/apps/user/filemanager/runtime.ts:189](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L189)

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`lockRefresh`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#lockrefresh)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L85)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`Log`](../../../../../ts/apps/process/classes/AppProcess.md#log)

***

### navigate()

> **navigate**(`path`): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:123](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L123)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`navigate`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#navigate)

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/ts/apps/process.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L103)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`onClose`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#onclose)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`onClose`](../../../../../ts/apps/process/classes/AppProcess.md#onclose)

***

### openFile()

> **openFile**(`path`): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:394](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L394)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`openFile`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#openfile)

***

### parentDir()

> **parentDir**(): `void`

Defined in: [src/apps/user/filemanager/runtime.ts:201](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L201)

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`parentDir`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#parentdir)

***

### pasteFiles()

> **pasteFiles**(): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:369](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L369)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`pasteFiles`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#pastefiles)

***

### refresh()

> **refresh**(): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:143](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L143)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`refresh`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#refresh)

***

### render()

> **render**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:68](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L68)

#### Parameters

##### \_\_namedParameters

[`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`render`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#render)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`render`](../../../../../ts/apps/process/classes/AppProcess.md#render)

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L91)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`requestFileLock`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#requestfilelock)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`requestFileLock`](../../../../../ts/apps/process/classes/AppProcess.md#requestfilelock)

***

### selectorDown()

> **selectorDown**(): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:548](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L548)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`selectorDown`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#selectordown)

***

### selectorUp()

> **selectorUp**(): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:528](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L528)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`selectorUp`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#selectorup)

***

### setCopyFiles()

> **setCopyFiles**(`files?`): `void`

Defined in: [src/apps/user/filemanager/runtime.ts:352](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L352)

#### Parameters

##### files?

`string`[] = `...`

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`setCopyFiles`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#setcopyfiles)

***

### setCutFiles()

> **setCutFiles**(`files?`): `void`

Defined in: [src/apps/user/filemanager/runtime.ts:361](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L361)

#### Parameters

##### files?

`string`[] = `...`

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`setCutFiles`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#setcutfiles)

***

### setSource()

> **setSource**(`source`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:115](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L115)

#### Parameters

##### source

`string`

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`setSource`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#setsource)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`setSource`](../../../../../ts/apps/process/classes/AppProcess.md#setsource)

***

### setupLoadSave()

> **setupLoadSave**(`loadSave?`): `void`

Defined in: [src/apps/user/filemanager/runtime.ts:718](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L718)

#### Parameters

##### loadSave?

[`LoadSaveDialogData`](../../types/interfaces/LoadSaveDialogData.md) \| `undefined` = `...`

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`setupLoadSave`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#setuploadsave)

***

### shareAccessIsAdministrative()

> **shareAccessIsAdministrative**(`drive`): `boolean`

Defined in: [src/apps/user/filemanager/runtime.ts:634](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L634)

#### Parameters

##### drive

[`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)

#### Returns

`boolean`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`shareAccessIsAdministrative`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#shareaccessisadministrative)

***

### ShowToast()

> **ShowToast**(`toast`, `durationMs?`): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:107](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L107)

#### Parameters

##### toast

[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md)

##### durationMs?

`number` = `3000`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`ShowToast`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#showtoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`ShowToast`](../../../../../ts/apps/process/classes/AppProcess.md#showtoast)

***

### singlefySelected()

> **singlefySelected**(): `void`

Defined in: [src/apps/user/filemanager/runtime.ts:498](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L498)

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`singlefySelected`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#singlefyselected)

***

### spawnApp()

> **spawnApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:362](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L362)

#### Type Parameters

##### T

`T` *extends* [`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md) = [`IAppProcess`](../../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`spawnApp`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#spawnapp)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`spawnApp`](../../../../../ts/apps/process/classes/AppProcess.md#spawnapp)

***

### spawnOverlay()

> **spawnOverlay**(`id`, ...`args`): `Promise`\<`boolean`\>

Defined in: [src/ts/apps/process.ts:336](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L336)

#### Parameters

##### id

`string`

##### args

...`any`[]

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`spawnOverlay`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#spawnoverlay)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`spawnOverlay`](../../../../../ts/apps/process/classes/AppProcess.md#spawnoverlay)

***

### spawnOverlayApp()

> **spawnOverlayApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:366](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L366)

#### Type Parameters

##### T

`T` *extends* [`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md) = [`IAppProcess`](../../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`spawnOverlayApp`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#spawnoverlayapp)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`spawnOverlayApp`](../../../../../ts/apps/process/classes/AppProcess.md#spawnoverlayapp)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:92](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L92)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`start`](../../../../../ts/apps/process/classes/AppProcess.md#start)

***

### startKeyboardShortcutListener()

> **startKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:270](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L270)

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`startKeyboardShortcutListener`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#startkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`startKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#startkeyboardshortcutlistener)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stop`](../../../../../ts/apps/process/classes/AppProcess.md#stop)

***

### stopKeyboardShortcutListener()

> **stopKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:276](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L276)

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`stopKeyboardShortcutListener`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#stopkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stopKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#stopkeyboardshortcutlistener)

***

### SystemFolderDeletionRestricted()

> **SystemFolderDeletionRestricted**(`userPathKey`): `void`

Defined in: [src/apps/user/filemanager/runtime.ts:682](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L682)

#### Parameters

##### userPathKey

`string`

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`SystemFolderDeletionRestricted`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#systemfolderdeletionrestricted)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`unfocusActiveElement`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#unfocusactiveelement)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unfocusActiveElement`](../../../../../ts/apps/process/classes/AppProcess.md#unfocusactiveelement)

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L103)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`unlockFile`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#unlockfile)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unlockFile`](../../../../../ts/apps/process/classes/AppProcess.md#unlockfile)

***

### unlockRefresh()

> **unlockRefresh**(`refresh?`): `void`

Defined in: [src/apps/user/filemanager/runtime.ts:194](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L194)

#### Parameters

##### refresh?

`boolean` = `true`

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`unlockRefresh`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#unlockrefresh)

***

### unmountDrive()

> **unmountDrive**(`drive`, `id`): `void`

Defined in: [src/apps/user/filemanager/runtime.ts:251](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L251)

#### Parameters

##### drive

[`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md)

##### id

`string`

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`unmountDrive`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#unmountdrive)

***

### updateAltMenu()

> **updateAltMenu**(): `void`

Defined in: [src/apps/user/filemanager/runtime.ts:302](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L302)

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`updateAltMenu`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#updatealtmenu)

***

### updateDrives()

> **updateDrives**(): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:213](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L213)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`updateDrives`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#updatedrives)

***

### updateNotice()

> **updateNotice**(): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:322](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L322)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`updateNotice`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#updatenotice)

***

### updateRootFolders()

> **updateRootFolders**(): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:308](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L308)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`updateRootFolders`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#updaterootfolders)

***

### updateSelection()

> **updateSelection**(`e`, `path`): `void`

Defined in: [src/apps/user/filemanager/runtime.ts:507](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L507)

#### Parameters

##### e

`MouseEvent`

##### path

`string`

#### Returns

`void`

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`updateSelection`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#updateselection)

***

### uploadItems()

> **uploadItems**(): `Promise`\<`void`\>

Defined in: [src/apps/user/filemanager/runtime.ts:388](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/filemanager/runtime.ts#L388)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileManagerRuntime`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md).[`uploadItems`](../../../../../interfaces/runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md#uploaditems)
