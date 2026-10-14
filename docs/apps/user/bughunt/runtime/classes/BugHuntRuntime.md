[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/user/bughunt/runtime](../README.md) / BugHuntRuntime

# Class: BugHuntRuntime

Defined in: [src/apps/user/bughunt/runtime.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L15)

## Extends

- [`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md)

## Implements

- [`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md)

## Constructors

### Constructor

> **new BugHuntRuntime**(`pid`, `parentPid`, `app`): `BugHuntRuntime`

Defined in: [src/apps/user/bughunt/runtime.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L29)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

#### Returns

`BugHuntRuntime`

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`constructor`](../../../../../ts/apps/process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`_criticalProcess`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#_criticalprocess)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_criticalProcess`](../../../../../ts/apps/process/classes/AppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L46)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`acceleratorStore`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#acceleratorstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`acceleratorStore`](../../../../../ts/apps/process/classes/AppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`altMenu`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#altmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`altMenu`](../../../../../ts/apps/process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`app`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#app)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`app`](../../../../../ts/apps/process/classes/AppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`blinking`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#blinking)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blinking`](../../../../../ts/apps/process/classes/AppProcess.md#blinking)

***

### bughunt

> **bughunt**: [`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md)

Defined in: [src/apps/user/bughunt/runtime.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L20)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`bughunt`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#bughunt)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`componentMount`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#componentmount)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`componentMount`](../../../../../ts/apps/process/classes/AppProcess.md#componentmount)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../../types/apps/app/type-aliases/AppContextMenu.md) = `{}`

Defined in: [src/ts/apps/process.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L47)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`contextMenu`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#contextmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`contextMenu`](../../../../../ts/apps/process/classes/AppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`crashReason`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#crashreason)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`crashReason`](../../../../../ts/apps/process/classes/AppProcess.md#crashreason)

***

### currentTab

> **currentTab**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/bughunt/runtime.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L17)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`currentTab`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#currenttab)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`dispatch`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#dispatch)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`dispatch`](../../../../../ts/apps/process/classes/AppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`draggable`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#draggable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`draggable`](../../../../../ts/apps/process/classes/AppProcess.md#draggable)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../../types/system/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L44)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevations`](../../../../../ts/apps/process/classes/AppProcess.md#elevations)

***

### loading

> **loading**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/bughunt/runtime.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L16)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`loading`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#loading)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`name`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#name)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`name`](../../../../../ts/apps/process/classes/AppProcess.md#name)

***

### overlayStore

> `protected` **overlayStore**: `Record`\<`string`, [`App`](../../../../../types/apps/app/interfaces/App.md)\>

Defined in: [src/apps/user/bughunt/runtime.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L22)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overlayStore`](../../../../../ts/apps/process/classes/AppProcess.md#overlaystore)

***

### overridePopulatable

> **overridePopulatable**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L39)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`overridePopulatable`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#overridepopulatable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overridePopulatable`](../../../../../ts/apps/process/classes/AppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`parentPid`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#parentpid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`parentPid`](../../../../../ts/apps/process/classes/AppProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`pid`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#pid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`pid`](../../../../../ts/apps/process/classes/AppProcess.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`renderArgs`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#renderargs)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`renderArgs`](../../../../../ts/apps/process/classes/AppProcess.md#renderargs)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L42)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`safeMode`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#safemode)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`safeMode`](../../../../../ts/apps/process/classes/AppProcess.md#safemode)

***

### selectedReport

> **selectedReport**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/bughunt/runtime.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L19)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`selectedReport`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#selectedreport)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`sourceUrl`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#sourceurl)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`sourceUrl`](../../../../../ts/apps/process/classes/AppProcess.md#sourceurl)

***

### store

> **store**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

Defined in: [src/apps/user/bughunt/runtime.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L18)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`store`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#store)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`toastMessage`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#toastmessage)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`toastMessage`](../../../../../ts/apps/process/classes/AppProcess.md#toastmessage)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`username`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#username)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`username`](../../../../../ts/apps/process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`userPreferences`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#userpreferences)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`userPreferences`](../../../../../ts/apps/process/classes/AppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`windowFullscreen`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#windowfullscreen)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowFullscreen`](../../../../../ts/apps/process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`windowIcon`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#windowicon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowIcon`](../../../../../ts/apps/process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`windowTitle`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#windowtitle)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`_disposed`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#_disposed)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`MEMORY`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#memory)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`STATE`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#state)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`__render__`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#__render__)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__render__`](../../../../../ts/apps/process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`__start`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#__start)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__start`](../../../../../ts/apps/process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`__stop`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#__stop)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__stop`](../../../../../ts/apps/process/classes/AppProcess.md#__stop)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`appStore`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#appstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`appStore`](../../../../../ts/apps/process/classes/AppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`blink`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#blink)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blink`](../../../../../ts/apps/process/classes/AppProcess.md#blink)

***

### changeTab()

> **changeTab**(`tab`): `Promise`\<`void`\>

Defined in: [src/apps/user/bughunt/runtime.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L44)

#### Parameters

##### tab

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`changeTab`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#changetab)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`BugHuntRuntime` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`BugHuntRuntime` \| `undefined`\>

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`closeIfSecondInstance`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#closeifsecondinstance)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`closeWindow`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#closewindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeWindow`](../../../../../ts/apps/process/classes/AppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`CrashDetection`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#crashdetection)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`elevate`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#elevate)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevate`](../../../../../ts/apps/process/classes/AppProcess.md#elevate)

***

### exportReport()

> **exportReport**(): `Promise`\<`void`\>

Defined in: [src/apps/user/bughunt/runtime.ts:101](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L101)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`exportReport`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#exportreport)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`getBody`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#getbody)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`getIcon`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#geticon)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`getIconCached`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#geticoncached)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`getIconStore`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#geticonstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconStore`](../../../../../ts/apps/process/classes/AppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `BugHuntRuntime`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`BugHuntRuntime`[]

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`getSingleton`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#getsingleton)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getSingleton`](../../../../../ts/apps/process/classes/AppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`getWindow`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#getwindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getWindow`](../../../../../ts/apps/process/classes/AppProcess.md#getwindow)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`hasOverlays`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#hasoverlays)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`hasOverlays`](../../../../../ts/apps/process/classes/AppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`HideToast`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#hidetoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`HideToast`](../../../../../ts/apps/process/classes/AppProcess.md#hidetoast)

***

### invalidateCaches()

> **invalidateCaches**(`restoreSelected?`): `Promise`\<`void`\>

Defined in: [src/apps/user/bughunt/runtime.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L62)

#### Parameters

##### restoreSelected?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`invalidateCaches`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#invalidatecaches)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`killSelf`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#killself)

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

### newReport()

> **newReport**(): `void`

Defined in: [src/apps/user/bughunt/runtime.ts:73](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L73)

#### Returns

`void`

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`newReport`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#newreport)

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/ts/apps/process.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L103)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`onClose`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#onclose)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`onClose`](../../../../../ts/apps/process/classes/AppProcess.md#onclose)

***

### refresh()

> **refresh**(`tab?`): `Promise`\<`void`\>

Defined in: [src/apps/user/bughunt/runtime.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L56)

#### Parameters

##### tab?

`string` = `...`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`refresh`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#refresh)

***

### render()

> **render**(): `Promise`\<`void`\>

Defined in: [src/apps/user/bughunt/runtime.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L38)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`render`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#render)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`requestFileLock`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#requestfilelock)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`requestFileLock`](../../../../../ts/apps/process/classes/AppProcess.md#requestfilelock)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`setSource`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#setsource)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`ShowToast`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#showtoast)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`spawnApp`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#spawnapp)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`spawnOverlay`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#spawnoverlay)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`spawnOverlayApp`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#spawnoverlayapp)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`startKeyboardShortcutListener`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#startkeyboardshortcutlistener)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`stopKeyboardShortcutListener`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#stopkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stopKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#stopkeyboardshortcutlistener)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`unfocusActiveElement`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#unfocusactiveelement)

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

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`unlockFile`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#unlockfile)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unlockFile`](../../../../../ts/apps/process/classes/AppProcess.md#unlockfile)

***

### userData()

> **userData**(): `void`

Defined in: [src/apps/user/bughunt/runtime.ts:90](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L90)

#### Returns

`void`

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`userData`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#userdata)

***

### viewLogs()

> **viewLogs**(): `void`

Defined in: [src/apps/user/bughunt/runtime.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/bughunt/runtime.ts#L79)

#### Returns

`void`

#### Implementation of

[`IBugHuntRuntime`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md).[`viewLogs`](../../../../../interfaces/runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md#viewlogs)
