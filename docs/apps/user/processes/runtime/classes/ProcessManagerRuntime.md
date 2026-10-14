[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/user/processes/runtime](../README.md) / ProcessManagerRuntime

# Class: ProcessManagerRuntime

Defined in: [src/apps/user/processes/runtime.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L18)

## Extends

- [`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md)

## Implements

- [`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md)

## Constructors

### Constructor

> **new ProcessManagerRuntime**(`pid`, `parentPid`, `app`, `page?`): `ProcessManagerRuntime`

Defined in: [src/apps/user/processes/runtime.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L30)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

##### page?

`string`

#### Returns

`ProcessManagerRuntime`

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`constructor`](../../../../../ts/apps/process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`_criticalProcess`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#_criticalprocess)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_criticalProcess`](../../../../../ts/apps/process/classes/AppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L46)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`acceleratorStore`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#acceleratorstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`acceleratorStore`](../../../../../ts/apps/process/classes/AppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`altMenu`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#altmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`altMenu`](../../../../../ts/apps/process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`app`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#app)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`app`](../../../../../ts/apps/process/classes/AppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`blinking`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#blinking)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blinking`](../../../../../ts/apps/process/classes/AppProcess.md#blinking)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`componentMount`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#componentmount)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`componentMount`](../../../../../ts/apps/process/classes/AppProcess.md#componentmount)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../../types/apps/app/type-aliases/AppContextMenu.md) = `{}`

Defined in: [src/ts/apps/process.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L47)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`contextMenu`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#contextmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`contextMenu`](../../../../../ts/apps/process/classes/AppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`crashReason`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#crashreason)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`crashReason`](../../../../../ts/apps/process/classes/AppProcess.md#crashreason)

***

### currentTab

> **currentTab**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/processes/runtime.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L21)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`currentTab`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#currenttab)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`dispatch`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#dispatch)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`dispatch`](../../../../../ts/apps/process/classes/AppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`draggable`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#draggable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`draggable`](../../../../../ts/apps/process/classes/AppProcess.md#draggable)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../../types/system/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L44)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevations`](../../../../../ts/apps/process/classes/AppProcess.md#elevations)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/apps/user/processes/runtime.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L26)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`host`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#host)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`name`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#name)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`name`](../../../../../ts/apps/process/classes/AppProcess.md#name)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`overridePopulatable`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#overridepopulatable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overridePopulatable`](../../../../../ts/apps/process/classes/AppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`parentPid`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#parentpid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`parentPid`](../../../../../ts/apps/process/classes/AppProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`pid`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#pid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`pid`](../../../../../ts/apps/process/classes/AppProcess.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`renderArgs`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#renderargs)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`renderArgs`](../../../../../ts/apps/process/classes/AppProcess.md#renderargs)

***

### running

> **running**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`number`\>

Defined in: [src/apps/user/processes/runtime.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L20)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`running`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#running)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L42)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`safeMode`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#safemode)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`safeMode`](../../../../../ts/apps/process/classes/AppProcess.md#safemode)

***

### selected

> **selected**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/processes/runtime.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L19)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`selected`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#selected)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`sourceUrl`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#sourceurl)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`sourceUrl`](../../../../../ts/apps/process/classes/AppProcess.md#sourceurl)

***

### tabs

> **tabs**: `Record`\<`string`, `Component`\>

Defined in: [src/apps/user/processes/runtime.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L22)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`tabs`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#tabs)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`toastMessage`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#toastmessage)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`toastMessage`](../../../../../ts/apps/process/classes/AppProcess.md#toastmessage)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`username`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#username)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`username`](../../../../../ts/apps/process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`userPreferences`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#userpreferences)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`userPreferences`](../../../../../ts/apps/process/classes/AppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`windowFullscreen`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#windowfullscreen)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowFullscreen`](../../../../../ts/apps/process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`windowIcon`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#windowicon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowIcon`](../../../../../ts/apps/process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`windowTitle`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#windowtitle)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`_disposed`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#_disposed)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`MEMORY`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#memory)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`STATE`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#state)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`__render__`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#__render__)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__render__`](../../../../../ts/apps/process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`__start`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#__start)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__start`](../../../../../ts/apps/process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`__stop`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#__stop)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__stop`](../../../../../ts/apps/process/classes/AppProcess.md#__stop)

***

### appInfoFor()

> **appInfoFor**(`proc`): `void`

Defined in: [src/apps/user/processes/runtime.ts:179](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L179)

#### Parameters

##### proc

[`IAppProcess`](../../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

#### Returns

`void`

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`appInfoFor`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#appinfofor)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`appStore`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#appstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`appStore`](../../../../../ts/apps/process/classes/AppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`blink`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#blink)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blink`](../../../../../ts/apps/process/classes/AppProcess.md#blink)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`ProcessManagerRuntime` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`ProcessManagerRuntime` \| `undefined`\>

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`closeIfSecondInstance`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#closeifsecondinstance)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`closeWindow`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#closewindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeWindow`](../../../../../ts/apps/process/classes/AppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`CrashDetection`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#crashdetection)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`elevate`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#elevate)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevate`](../../../../../ts/apps/process/classes/AppProcess.md#elevate)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`getBody`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#getbody)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`getIcon`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#geticon)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`getIconCached`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#geticoncached)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`getIconStore`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#geticonstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconStore`](../../../../../ts/apps/process/classes/AppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `ProcessManagerRuntime`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`ProcessManagerRuntime`[]

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`getSingleton`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#getsingleton)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getSingleton`](../../../../../ts/apps/process/classes/AppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`getWindow`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#getwindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getWindow`](../../../../../ts/apps/process/classes/AppProcess.md#getwindow)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`hasOverlays`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#hasoverlays)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`hasOverlays`](../../../../../ts/apps/process/classes/AppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`HideToast`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#hidetoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`HideToast`](../../../../../ts/apps/process/classes/AppProcess.md#hidetoast)

***

### kill()

> **kill**(`proc`): `Promise`\<`void`\>

Defined in: [src/apps/user/processes/runtime.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L49)

#### Parameters

##### proc

[`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`kill`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#kill)

***

### killError()

> **killError**(`name`, `result`): `void`

Defined in: [src/apps/user/processes/runtime.ts:93](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L93)

#### Parameters

##### name

`string`

##### result

[`ProcessKillResult`](../../../../../types/system/process/type-aliases/ProcessKillResult.md)

#### Returns

`void`

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`killError`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#killerror)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`killSelf`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#killself)

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

Defined in: [src/ts/apps/process.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L103)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`onClose`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#onclose)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`onClose`](../../../../../ts/apps/process/classes/AppProcess.md#onclose)

***

### processInfoFor()

> **processInfoFor**(`proc`): `void`

Defined in: [src/apps/user/processes/runtime.ts:184](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L184)

#### Parameters

##### proc

[`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md)

#### Returns

`void`

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`processInfoFor`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#processinfofor)

***

### render()

> **render**(): `Promise`\<`false` \| `undefined`\>

Defined in: [src/apps/user/processes/runtime.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L38)

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`render`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#render)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`requestFileLock`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#requestfilelock)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`requestFileLock`](../../../../../ts/apps/process/classes/AppProcess.md#requestfilelock)

***

### restartService()

> **restartService**(`id`): `Promise`\<`void`\>

Defined in: [src/apps/user/processes/runtime.ts:140](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L140)

#### Parameters

##### id

[`ServiceIdentifier`](../../../../../interfaces/IServiceHost/type-aliases/ServiceIdentifier.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`restartService`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#restartservice)

***

### serviceInfoFor()

> **serviceInfoFor**(`id`): `void`

Defined in: [src/apps/user/processes/runtime.ts:172](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L172)

#### Parameters

##### id

[`ServiceIdentifier`](../../../../../interfaces/IServiceHost/type-aliases/ServiceIdentifier.md)

#### Returns

`void`

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`serviceInfoFor`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#serviceinfofor)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`setSource`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#setsource)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`ShowToast`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#showtoast)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`spawnApp`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#spawnapp)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`spawnOverlay`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#spawnoverlay)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`spawnOverlayApp`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#spawnoverlayapp)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`startKeyboardShortcutListener`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#startkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`startKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#startkeyboardshortcutlistener)

***

### startService()

> **startService**(`id`): `Promise`\<`void`\>

Defined in: [src/apps/user/processes/runtime.ts:165](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L165)

#### Parameters

##### id

[`ServiceIdentifier`](../../../../../interfaces/IServiceHost/type-aliases/ServiceIdentifier.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`startService`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#startservice)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`stopKeyboardShortcutListener`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#stopkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stopKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#stopkeyboardshortcutlistener)

***

### stopService()

> **stopService**(`id`): `Promise`\<`void`\>

Defined in: [src/apps/user/processes/runtime.ts:111](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/processes/runtime.ts#L111)

#### Parameters

##### id

[`ServiceIdentifier`](../../../../../interfaces/IServiceHost/type-aliases/ServiceIdentifier.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`stopService`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#stopservice)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`unfocusActiveElement`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#unfocusactiveelement)

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

[`IProcessManagerRuntime`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md).[`unlockFile`](../../../../../interfaces/runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md#unlockfile)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unlockFile`](../../../../../ts/apps/process/classes/AppProcess.md#unlockfile)
