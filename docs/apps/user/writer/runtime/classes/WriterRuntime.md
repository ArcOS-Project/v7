[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/user/writer/runtime](../README.md) / WriterRuntime

# Class: WriterRuntime

Defined in: [src/apps/user/writer/runtime.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L17)

## Extends

- [`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md)

## Implements

- [`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md)

## Constructors

### Constructor

> **new WriterRuntime**(`pid`, `parentPid`, `app`, `path?`): `WriterRuntime`

Defined in: [src/apps/user/writer/runtime.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L35)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

##### path?

`string`

#### Returns

`WriterRuntime`

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`constructor`](../../../../../ts/apps/process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`_criticalProcess`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#_criticalprocess)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_criticalProcess`](../../../../../ts/apps/process/classes/AppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md)

Defined in: [src/apps/user/writer/runtime.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L31)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`acceleratorStore`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#acceleratorstore)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`acceleratorStore`](../../../../../ts/apps/process/classes/AppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`altMenu`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#altmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`altMenu`](../../../../../ts/apps/process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`app`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#app)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`app`](../../../../../ts/apps/process/classes/AppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`blinking`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#blinking)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blinking`](../../../../../ts/apps/process/classes/AppProcess.md#blinking)

***

### buffer

> **buffer**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/writer/runtime.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L18)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`buffer`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#buffer)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`componentMount`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#componentmount)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`componentMount`](../../../../../ts/apps/process/classes/AppProcess.md#componentmount)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../../types/apps/app/type-aliases/AppContextMenu.md) = `{}`

Defined in: [src/ts/apps/process.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L47)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`contextMenu`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#contextmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`contextMenu`](../../../../../ts/apps/process/classes/AppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`crashReason`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#crashreason)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`crashReason`](../../../../../ts/apps/process/classes/AppProcess.md#crashreason)

***

### directoryName

> **directoryName**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/writer/runtime.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L22)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`directoryName`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#directoryname)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`dispatch`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#dispatch)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`dispatch`](../../../../../ts/apps/process/classes/AppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`draggable`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#draggable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`draggable`](../../../../../ts/apps/process/classes/AppProcess.md#draggable)

***

### drive

> **drive**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`IFilesystemDrive`](../../../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md) \| `undefined`\>

Defined in: [src/apps/user/writer/runtime.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L25)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`drive`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#drive)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../../types/system/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L44)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevations`](../../../../../ts/apps/process/classes/AppProcess.md#elevations)

***

### filename

> **filename**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/writer/runtime.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L20)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`filename`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#filename)

***

### input

> **input**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`HTMLTextAreaElement`\>

Defined in: [src/apps/user/writer/runtime.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L24)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`input`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#input)

***

### mimeIcon

> **mimeIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/writer/runtime.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L26)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`mimeIcon`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#mimeicon)

***

### mimetype

> **mimetype**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/writer/runtime.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L21)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`mimetype`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#mimetype)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`name`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#name)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`name`](../../../../../ts/apps/process/classes/AppProcess.md#name)

***

### openedFile

> **openedFile**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/writer/runtime.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L19)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`openedFile`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#openedfile)

***

### original

> **original**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/writer/runtime.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L23)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`original`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#original)

***

### overlayStore

> `protected` **overlayStore**: `Record`\<`string`, [`App`](../../../../../types/apps/app/interfaces/App.md)\>

Defined in: [src/apps/user/writer/runtime.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L28)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overlayStore`](../../../../../ts/apps/process/classes/AppProcess.md#overlaystore)

***

### overridePopulatable

> **overridePopulatable**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L39)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`overridePopulatable`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#overridepopulatable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overridePopulatable`](../../../../../ts/apps/process/classes/AppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`parentPid`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#parentpid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`parentPid`](../../../../../ts/apps/process/classes/AppProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`pid`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#pid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`pid`](../../../../../ts/apps/process/classes/AppProcess.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`renderArgs`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#renderargs)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`renderArgs`](../../../../../ts/apps/process/classes/AppProcess.md#renderargs)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L42)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`safeMode`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#safemode)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`safeMode`](../../../../../ts/apps/process/classes/AppProcess.md#safemode)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`sourceUrl`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#sourceurl)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`sourceUrl`](../../../../../ts/apps/process/classes/AppProcess.md#sourceurl)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`toastMessage`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#toastmessage)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`toastMessage`](../../../../../ts/apps/process/classes/AppProcess.md#toastmessage)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`username`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#username)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`username`](../../../../../ts/apps/process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`userPreferences`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#userpreferences)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`userPreferences`](../../../../../ts/apps/process/classes/AppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`windowFullscreen`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#windowfullscreen)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowFullscreen`](../../../../../ts/apps/process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`windowIcon`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#windowicon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowIcon`](../../../../../ts/apps/process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`windowTitle`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#windowtitle)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`_disposed`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#_disposed)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`MEMORY`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#memory)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`STATE`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#state)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`__render__`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#__render__)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__render__`](../../../../../ts/apps/process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`__start`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#__start)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__start`](../../../../../ts/apps/process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`__stop`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#__stop)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__stop`](../../../../../ts/apps/process/classes/AppProcess.md#__stop)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`appStore`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#appstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`appStore`](../../../../../ts/apps/process/classes/AppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`blink`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#blink)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blink`](../../../../../ts/apps/process/classes/AppProcess.md#blink)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`WriterRuntime` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`WriterRuntime` \| `undefined`\>

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`closeIfSecondInstance`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#closeifsecondinstance)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`closeWindow`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#closewindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeWindow`](../../../../../ts/apps/process/classes/AppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`CrashDetection`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#crashdetection)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`CrashDetection`](../../../../../ts/apps/process/classes/AppProcess.md#crashdetection)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`elevate`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#elevate)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevate`](../../../../../ts/apps/process/classes/AppProcess.md#elevate)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`getBody`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#getbody)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`getIcon`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#geticon)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`getIconCached`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#geticoncached)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`getIconStore`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#geticonstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconStore`](../../../../../ts/apps/process/classes/AppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `WriterRuntime`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`WriterRuntime`[]

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`getSingleton`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#getsingleton)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getSingleton`](../../../../../ts/apps/process/classes/AppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`getWindow`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#getwindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getWindow`](../../../../../ts/apps/process/classes/AppProcess.md#getwindow)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`hasOverlays`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#hasoverlays)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`hasOverlays`](../../../../../ts/apps/process/classes/AppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`HideToast`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#hidetoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`HideToast`](../../../../../ts/apps/process/classes/AppProcess.md#hidetoast)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`killSelf`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#killself)

#### Inherited from

`AppProcess.killSelf`

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

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/apps/user/writer/runtime.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L51)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`onClose`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#onclose)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`onClose`](../../../../../ts/apps/process/classes/AppProcess.md#onclose)

***

### openFile()

> **openFile**(): `Promise`\<`void`\>

Defined in: [src/apps/user/writer/runtime.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`openFile`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#openfile)

***

### readFile()

> **readFile**(`path`): `Promise`\<`void`\>

Defined in: [src/apps/user/writer/runtime.ts:98](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L98)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`readFile`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#readfile)

***

### render()

> **render**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [src/apps/user/writer/runtime.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L43)

#### Parameters

##### \_\_namedParameters

###### path

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`render`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#render)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`requestFileLock`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#requestfilelock)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`requestFileLock`](../../../../../ts/apps/process/classes/AppProcess.md#requestfilelock)

***

### saveAs()

> **saveAs**(): `Promise`\<`void`\>

Defined in: [src/apps/user/writer/runtime.ts:191](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L191)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`saveAs`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#saveas)

***

### saveChanges()

> **saveChanges**(`force?`): `Promise`\<`void`\>

Defined in: [src/apps/user/writer/runtime.ts:158](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L158)

#### Parameters

##### force?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`saveChanges`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#savechanges)

***

### selectAll()

> **selectAll**(): `void`

Defined in: [src/apps/user/writer/runtime.ts:231](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/writer/runtime.ts#L231)

#### Returns

`void`

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`selectAll`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#selectall)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`setSource`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#setsource)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`setSource`](../../../../../ts/apps/process/classes/AppProcess.md#setsource)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`ShowToast`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#showtoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`ShowToast`](../../../../../ts/apps/process/classes/AppProcess.md#showtoast)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`spawnApp`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#spawnapp)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`spawnOverlay`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#spawnoverlay)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`spawnOverlayApp`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#spawnoverlayapp)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`spawnOverlayApp`](../../../../../ts/apps/process/classes/AppProcess.md#spawnoverlayapp)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L49)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`start`](../../../../../ts/apps/process/classes/AppProcess.md#start)

***

### startKeyboardShortcutListener()

> **startKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:270](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L270)

#### Returns

`void`

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`startKeyboardShortcutListener`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#startkeyboardshortcutlistener)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`stopKeyboardShortcutListener`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#stopkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stopKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#stopkeyboardshortcutlistener)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`unfocusActiveElement`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#unfocusactiveelement)

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

[`IWriterRuntime`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`unlockFile`](../../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#unlockfile)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unlockFile`](../../../../../ts/apps/process/classes/AppProcess.md#unlockfile)
