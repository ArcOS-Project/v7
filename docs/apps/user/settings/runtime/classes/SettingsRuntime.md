[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/user/settings/runtime](../README.md) / SettingsRuntime

# Class: SettingsRuntime

Defined in: [src/apps/user/settings/runtime.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L26)

## Extends

- [`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md)

## Implements

- [`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md)

## Constructors

### Constructor

> **new SettingsRuntime**(`pid`, `parentPid`, `app`, `page?`, `slide?`): `SettingsRuntime`

Defined in: [src/apps/user/settings/runtime.ts:70](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L70)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

##### page?

`string`

##### slide?

`string`

#### Returns

`SettingsRuntime`

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`constructor`](../../../../../ts/apps/process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`_criticalProcess`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#_criticalprocess)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_criticalProcess`](../../../../../ts/apps/process/classes/AppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L46)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`acceleratorStore`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#acceleratorstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`acceleratorStore`](../../../../../ts/apps/process/classes/AppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`altMenu`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#altmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`altMenu`](../../../../../ts/apps/process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`app`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#app)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`app`](../../../../../ts/apps/process/classes/AppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`blinking`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#blinking)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blinking`](../../../../../ts/apps/process/classes/AppProcess.md#blinking)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`componentMount`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#componentmount)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`componentMount`](../../../../../ts/apps/process/classes/AppProcess.md#componentmount)

***

### contextMenu

> **contextMenu**: [`AppContextMenu`](../../../../../types/apps/app/type-aliases/AppContextMenu.md)

Defined in: [src/apps/user/settings/runtime.ts:66](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L66)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`contextMenu`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#contextmenu)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`contextMenu`](../../../../../ts/apps/process/classes/AppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`crashReason`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#crashreason)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`crashReason`](../../../../../ts/apps/process/classes/AppProcess.md#crashreason)

***

### currentPage

> **currentPage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/settings/runtime.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L27)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`currentPage`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#currentpage)

***

### currentSlide

> **currentSlide**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/settings/runtime.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L28)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`currentSlide`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#currentslide)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`dispatch`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#dispatch)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`dispatch`](../../../../../ts/apps/process/classes/AppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`draggable`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#draggable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`draggable`](../../../../../ts/apps/process/classes/AppProcess.md#draggable)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../../types/system/elevation/interfaces/ElevationData.md)\>

Defined in: [src/apps/user/settings/runtime.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L42)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevations`](../../../../../ts/apps/process/classes/AppProcess.md#elevations)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`name`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#name)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`name`](../../../../../ts/apps/process/classes/AppProcess.md#name)

***

### overlayStore

> `protected` **overlayStore**: `Record`\<`string`, [`App`](../../../../../types/apps/app/interfaces/App.md)\>

Defined in: [src/apps/user/settings/runtime.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L32)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overlayStore`](../../../../../ts/apps/process/classes/AppProcess.md#overlaystore)

***

### overridePopulatable

> **overridePopulatable**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L39)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`overridePopulatable`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#overridepopulatable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overridePopulatable`](../../../../../ts/apps/process/classes/AppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`parentPid`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#parentpid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`parentPid`](../../../../../ts/apps/process/classes/AppProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`pid`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#pid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`pid`](../../../../../ts/apps/process/classes/AppProcess.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`renderArgs`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#renderargs)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`renderArgs`](../../../../../ts/apps/process/classes/AppProcess.md#renderargs)

***

### requestedSlide

> **requestedSlide**: `string` \| `undefined`

Defined in: [src/apps/user/settings/runtime.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L30)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`requestedSlide`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#requestedslide)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L42)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`safeMode`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#safemode)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`safeMode`](../../../../../ts/apps/process/classes/AppProcess.md#safemode)

***

### slideVisible

> **slideVisible**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/settings/runtime.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L29)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`slideVisible`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#slidevisible)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`sourceUrl`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#sourceurl)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`sourceUrl`](../../../../../ts/apps/process/classes/AppProcess.md#sourceurl)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`toastMessage`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#toastmessage)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`toastMessage`](../../../../../ts/apps/process/classes/AppProcess.md#toastmessage)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`username`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#username)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`username`](../../../../../ts/apps/process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`userPreferences`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#userpreferences)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`userPreferences`](../../../../../ts/apps/process/classes/AppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`windowFullscreen`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#windowfullscreen)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowFullscreen`](../../../../../ts/apps/process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`windowIcon`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#windowicon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowIcon`](../../../../../ts/apps/process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`windowTitle`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#windowtitle)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`_disposed`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#_disposed)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`MEMORY`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#memory)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`STATE`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#state)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`__render__`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#__render__)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__render__`](../../../../../ts/apps/process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`__start`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#__start)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__start`](../../../../../ts/apps/process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`__stop`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#__stop)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__stop`](../../../../../ts/apps/process/classes/AppProcess.md#__stop)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`appStore`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#appstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`appStore`](../../../../../ts/apps/process/classes/AppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`blink`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#blink)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blink`](../../../../../ts/apps/process/classes/AppProcess.md#blink)

***

### chooseLoginBackground()

> **chooseLoginBackground**(): `Promise`\<`void`\>

Defined in: [src/apps/user/settings/runtime.ts:297](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L297)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`chooseLoginBackground`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#chooseloginbackground)

***

### chooseProfilePicture()

> **chooseProfilePicture**(): `Promise`\<`void`\>

Defined in: [src/apps/user/settings/runtime.ts:257](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L257)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`chooseProfilePicture`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#chooseprofilepicture)

***

### chooseWallpaper()

> **chooseWallpaper**(): `Promise`\<`void`\>

Defined in: [src/apps/user/settings/runtime.ts:270](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L270)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`chooseWallpaper`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#choosewallpaper)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`SettingsRuntime` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`SettingsRuntime` \| `undefined`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`closeIfSecondInstance`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#closeifsecondinstance)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`closeWindow`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#closewindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeWindow`](../../../../../ts/apps/process/classes/AppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`CrashDetection`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#crashdetection)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`CrashDetection`](../../../../../ts/apps/process/classes/AppProcess.md#crashdetection)

***

### deleteThemeConfirmation()

> **deleteThemeConfirmation**(`id?`): `void`

Defined in: [src/apps/user/settings/runtime.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L230)

#### Parameters

##### id?

`string`

#### Returns

`void`

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`deleteThemeConfirmation`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#deletethemeconfirmation)

***

### disableTotp()

> **disableTotp**(): `Promise`\<`void`\>

Defined in: [src/apps/user/settings/runtime.ts:330](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L330)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`disableTotp`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#disabletotp)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`elevate`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#elevate)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevate`](../../../../../ts/apps/process/classes/AppProcess.md#elevate)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`getBody`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#getbody)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`getIcon`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#geticon)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`getIconCached`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#geticoncached)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`getIconStore`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#geticonstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconStore`](../../../../../ts/apps/process/classes/AppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `SettingsRuntime`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`SettingsRuntime`[]

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`getSingleton`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#getsingleton)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getSingleton`](../../../../../ts/apps/process/classes/AppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`getWindow`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#getwindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getWindow`](../../../../../ts/apps/process/classes/AppProcess.md#getwindow)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`hasOverlays`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#hasoverlays)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`hasOverlays`](../../../../../ts/apps/process/classes/AppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`HideToast`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#hidetoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`HideToast`](../../../../../ts/apps/process/classes/AppProcess.md#hidetoast)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`killSelf`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#killself)

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

### loginActivity()

> **loginActivity**(): `Promise`\<`void`\>

Defined in: [src/apps/user/settings/runtime.ts:139](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L139)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`loginActivity`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#loginactivity)

***

### logOutEverywhere()

> **logOutEverywhere**(): `Promise`\<`void`\>

Defined in: [src/apps/user/settings/runtime.ts:147](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L147)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`logOutEverywhere`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#logouteverywhere)

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/ts/apps/process.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L103)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`onClose`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#onclose)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`onClose`](../../../../../ts/apps/process/classes/AppProcess.md#onclose)

***

### render()

> **render**(): `Promise`\<`false` \| `undefined`\>

Defined in: [src/apps/user/settings/runtime.ts:80](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L80)

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`render`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#render)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`requestFileLock`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#requestfilelock)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`setSource`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#setsource)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`setSource`](../../../../../ts/apps/process/classes/AppProcess.md#setsource)

***

### setup2fa()

> **setup2fa**(): `Promise`\<`void`\>

Defined in: [src/apps/user/settings/runtime.ts:314](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L314)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`setup2fa`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#setup2fa)

***

### showSlide()

> **showSlide**(`id`): `Promise`\<`void`\>

Defined in: [src/apps/user/settings/runtime.ts:122](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L122)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`showSlide`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#showslide)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`ShowToast`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#showtoast)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`spawnApp`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#spawnapp)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`spawnOverlay`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#spawnoverlay)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`spawnOverlayApp`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#spawnoverlayapp)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`startKeyboardShortcutListener`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#startkeyboardshortcutlistener)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`stopKeyboardShortcutListener`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#stopkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stopKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#stopkeyboardshortcutlistener)

***

### switchPage()

> **switchPage**(`pageId`): `void`

Defined in: [src/apps/user/settings/runtime.ts:109](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L109)

#### Parameters

##### pageId

`string`

#### Returns

`void`

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`switchPage`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#switchpage)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`unfocusActiveElement`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#unfocusactiveelement)

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

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`unlockFile`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#unlockfile)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unlockFile`](../../../../../ts/apps/process/classes/AppProcess.md#unlockfile)

***

### uploadWallpaper()

> **uploadWallpaper**(): `Promise`\<`void`\>

Defined in: [src/apps/user/settings/runtime.ts:185](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L185)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`uploadWallpaper`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#uploadwallpaper)

***

### viewLicense()

> **viewLicense**(): `Promise`\<`void`\>

Defined in: [src/apps/user/settings/runtime.ts:207](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/settings/runtime.ts#L207)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISettingsRuntime`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md).[`viewLicense`](../../../../../interfaces/runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md#viewlicense)
