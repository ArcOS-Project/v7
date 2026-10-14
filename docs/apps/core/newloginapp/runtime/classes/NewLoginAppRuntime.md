[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/core/newloginapp/runtime](../README.md) / NewLoginAppRuntime

# Class: NewLoginAppRuntime

Defined in: [src/apps/core/newloginapp/runtime.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L36)

## Extends

- [`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md)

## Implements

- [`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md)

## Constructors

### Constructor

> **new NewLoginAppRuntime**(`pid`, `parentPid`, `app`, `options?`): `NewLoginAppRuntime`

Defined in: [src/apps/core/newloginapp/runtime.ts:68](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L68)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

##### options?

[`LoginScreenOptions`](../../types/interfaces/LoginScreenOptions.md)

#### Returns

`NewLoginAppRuntime`

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`constructor`](../../../../../ts/apps/process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`_criticalProcess`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#_criticalprocess)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_criticalProcess`](../../../../../ts/apps/process/classes/AppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L46)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`acceleratorStore`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#acceleratorstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`acceleratorStore`](../../../../../ts/apps/process/classes/AppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`altMenu`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#altmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`altMenu`](../../../../../ts/apps/process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`app`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#app)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`app`](../../../../../ts/apps/process/classes/AppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`blinking`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#blinking)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blinking`](../../../../../ts/apps/process/classes/AppProcess.md#blinking)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`componentMount`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#componentmount)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`componentMount`](../../../../../ts/apps/process/classes/AppProcess.md#componentmount)

***

### Config

> **Config**: [`IConfigurator`](../../../../../interfaces/IConfigurator/interfaces/IConfigurator.md)\<[`LoginPersistence`](../../types/interfaces/LoginPersistence.md)\>

Defined in: [src/apps/core/newloginapp/runtime.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L45)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`Config`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#config)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../../types/apps/app/type-aliases/AppContextMenu.md) = `{}`

Defined in: [src/ts/apps/process.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L47)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`contextMenu`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#contextmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`contextMenu`](../../../../../ts/apps/process/classes/AppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`crashReason`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#crashreason)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`crashReason`](../../../../../ts/apps/process/classes/AppProcess.md#crashreason)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`dispatch`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#dispatch)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`dispatch`](../../../../../ts/apps/process/classes/AppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`draggable`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#draggable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`draggable`](../../../../../ts/apps/process/classes/AppProcess.md#draggable)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../../types/system/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L44)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevations`](../../../../../ts/apps/process/classes/AppProcess.md#elevations)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`name`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#name)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`overridePopulatable`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#overridepopulatable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overridePopulatable`](../../../../../ts/apps/process/classes/AppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`parentPid`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#parentpid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`parentPid`](../../../../../ts/apps/process/classes/AppProcess.md#parentpid)

***

### Persistence

> **Persistence**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`LoginPersistence`](../../types/interfaces/LoginPersistence.md)\>

Defined in: [src/apps/core/newloginapp/runtime.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L44)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`Persistence`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#persistence)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`pid`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#pid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`pid`](../../../../../ts/apps/process/classes/AppProcess.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`renderArgs`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#renderargs)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`renderArgs`](../../../../../ts/apps/process/classes/AppProcess.md#renderargs)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L42)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`safeMode`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#safemode)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`safeMode`](../../../../../ts/apps/process/classes/AppProcess.md#safemode)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`sourceUrl`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#sourceurl)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`sourceUrl`](../../../../../ts/apps/process/classes/AppProcess.md#sourceurl)

***

### State

> **State**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`LoginState`](../../types/interfaces/LoginState.md)\>

Defined in: [src/apps/core/newloginapp/runtime.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L40)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`State`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#state)

***

### Status

> **Status**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`LoginStatus`](../../types/interfaces/LoginStatus.md)\>

Defined in: [src/apps/core/newloginapp/runtime.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L41)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`Status`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#status)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`toastMessage`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#toastmessage)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`toastMessage`](../../../../../ts/apps/process/classes/AppProcess.md#toastmessage)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`username`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#username)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`username`](../../../../../ts/apps/process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`userPreferences`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#userpreferences)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`userPreferences`](../../../../../ts/apps/process/classes/AppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`windowFullscreen`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#windowfullscreen)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowFullscreen`](../../../../../ts/apps/process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`windowIcon`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#windowicon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowIcon`](../../../../../ts/apps/process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`windowTitle`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#windowtitle)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`_disposed`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#_disposed)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`MEMORY`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#memory)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`MEMORY`](../../../../../ts/apps/process/classes/AppProcess.md#memory)

***

### ServerInfo

#### Get Signature

> **get** **ServerInfo**(): [`ServerInfo`](../../../../../types/server/interfaces/ServerInfo.md) \| `undefined`

Defined in: [src/apps/core/newloginapp/runtime.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L53)

##### Returns

[`ServerInfo`](../../../../../types/server/interfaces/ServerInfo.md) \| `undefined`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`ServerInfo`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#serverinfo)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`STATE`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#state-1)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`STATE`](../../../../../ts/apps/process/classes/AppProcess.md#state)

***

### WelcomeString

#### Get Signature

> **get** **WelcomeString**(): `"Hi, go to sleep"` \| `"Good morning"` \| `"Good afternoon"` \| `"Good evening"`

Defined in: [src/apps/core/newloginapp/runtime.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L57)

##### Returns

`"Hi, go to sleep"` \| `"Good morning"` \| `"Good afternoon"` \| `"Good evening"`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`WelcomeString`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#welcomestring)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`__render__`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#__render__)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__render__`](../../../../../ts/apps/process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`__start`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#__start)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__start`](../../../../../ts/apps/process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`__stop`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#__stop)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__stop`](../../../../../ts/apps/process/classes/AppProcess.md#__stop)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`appStore`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#appstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`appStore`](../../../../../ts/apps/process/classes/AppProcess.md#appstore)

***

### AskFor2FA()

> **AskFor2FA**(`userId?`): `Promise`\<`boolean`\>

Defined in: [src/apps/core/newloginapp/runtime.ts:304](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L304)

#### Parameters

##### userId?

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`AskFor2FA`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#askfor2fa)

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`blink`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#blink)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blink`](../../../../../ts/apps/process/classes/AppProcess.md#blink)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`NewLoginAppRuntime` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`NewLoginAppRuntime` \| `undefined`\>

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`closeIfSecondInstance`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#closeifsecondinstance)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`closeWindow`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#closewindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeWindow`](../../../../../ts/apps/process/classes/AppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`CrashDetection`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#crashdetection)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`CrashDetection`](../../../../../ts/apps/process/classes/AppProcess.md#crashdetection)

***

### CreateUser()

> **CreateUser**(): `void`

Defined in: [src/apps/core/newloginapp/runtime.ts:269](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L269)

#### Returns

`void`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`CreateUser`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#createuser)

***

### DismissError()

> **DismissError**(): `void`

Defined in: [src/apps/core/newloginapp/runtime.ts:502](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L502)

#### Returns

`void`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`DismissError`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#dismisserror)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`elevate`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#elevate)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevate`](../../../../../ts/apps/process/classes/AppProcess.md#elevate)

***

### ForgotPassword()

> **ForgotPassword**(): `Promise`\<`void`\>

Defined in: [src/apps/core/newloginapp/runtime.ts:273](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L273)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`ForgotPassword`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#forgotpassword)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`getBody`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#getbody)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`getIcon`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#geticon)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`getIconCached`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#geticoncached)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`getIconStore`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#geticonstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconStore`](../../../../../ts/apps/process/classes/AppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `NewLoginAppRuntime`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`NewLoginAppRuntime`[]

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`getSingleton`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#getsingleton)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getSingleton`](../../../../../ts/apps/process/classes/AppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`getWindow`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#getwindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getWindow`](../../../../../ts/apps/process/classes/AppProcess.md#getwindow)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`hasOverlays`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#hasoverlays)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`hasOverlays`](../../../../../ts/apps/process/classes/AppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`HideToast`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#hidetoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`HideToast`](../../../../../ts/apps/process/classes/AppProcess.md#hidetoast)

***

### JumpstartUserDaemon()

> **JumpstartUserDaemon**(`token`, `userInfo`): `Promise`\<`void`\>

Defined in: [src/apps/core/newloginapp/runtime.ts:205](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L205)

#### Parameters

##### token

`string`

##### userInfo

[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`JumpstartUserDaemon`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#jumpstartuserdaemon)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`killSelf`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#killself)

#### Inherited from

`AppProcess.killSelf`

***

### LoadLoginStateUsingPersistenceFrom()

> **LoadLoginStateUsingPersistenceFrom**(`userId`): `void`

Defined in: [src/apps/core/newloginapp/runtime.ts:185](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L185)

#### Parameters

##### userId

`string`

#### Returns

`void`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`LoadLoginStateUsingPersistenceFrom`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#loadloginstateusingpersistencefrom)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`onClose`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#onclose)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`onClose`](../../../../../ts/apps/process/classes/AppProcess.md#onclose)

***

### PerformLogin()

> **PerformLogin**(`identity`, `password`): `Promise`\<`void`\>

Defined in: [src/apps/core/newloginapp/runtime.ts:236](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L236)

#### Parameters

##### identity

`string`

##### password

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`PerformLogin`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#performlogin)

***

### PerformRestart()

> **PerformRestart**(`userDaemon?`): `Promise`\<`void`\>

Defined in: [src/apps/core/newloginapp/runtime.ts:408](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L408)

#### Parameters

##### userDaemon?

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`PerformRestart`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#performrestart)

***

### PerformShutdown()

> **PerformShutdown**(`userDaemon?`): `Promise`\<`void`\>

Defined in: [src/apps/core/newloginapp/runtime.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L375)

#### Parameters

##### userDaemon?

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`PerformShutdown`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#performshutdown)

***

### RemoveUser()

> **RemoveUser**(`userId`): `void`

Defined in: [src/apps/core/newloginapp/runtime.ts:162](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L162)

#### Parameters

##### userId

`string`

#### Returns

`void`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`RemoveUser`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#removeuser)

***

### render()

> **render**(`args`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/apps/core/newloginapp/runtime.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L91)

#### Parameters

##### args

[`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md)

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`render`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#render)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`requestFileLock`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#requestfilelock)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`requestFileLock`](../../../../../ts/apps/process/classes/AppProcess.md#requestfilelock)

***

### ResetCookies()

> **ResetCookies**(): `void`

Defined in: [src/apps/core/newloginapp/runtime.ts:479](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L479)

#### Returns

`void`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`ResetCookies`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#resetcookies)

***

### SaveUserPersistence()

> **SaveUserPersistence**(`info`): `void`

Defined in: [src/apps/core/newloginapp/runtime.ts:129](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L129)

#### Parameters

##### info

[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

#### Returns

`void`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`SaveUserPersistence`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#saveuserpersistence)

***

### SelectUser()

> **SelectUser**(`userId`): `void`

Defined in: [src/apps/core/newloginapp/runtime.ts:177](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L177)

#### Parameters

##### userId

`string`

#### Returns

`void`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`SelectUser`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#selectuser)

***

### SetLastUsed()

> **SetLastUsed**(`userId`): `void`

Defined in: [src/apps/core/newloginapp/runtime.ts:153](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L153)

#### Parameters

##### userId

`string`

#### Returns

`void`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`SetLastUsed`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#setlastused)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`setSource`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#setsource)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`setSource`](../../../../../ts/apps/process/classes/AppProcess.md#setsource)

***

### ShowError()

> **ShowError**(`message`): `void`

Defined in: [src/apps/core/newloginapp/runtime.ts:516](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L516)

#### Parameters

##### message

`string`

#### Returns

`void`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`ShowError`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#showerror)

***

### ShowErrorAndWait()

> **ShowErrorAndWait**(`message`): `Promise`\<`void`\>

Defined in: [src/apps/core/newloginapp/runtime.ts:528](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L528)

#### Parameters

##### message

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`ShowErrorAndWait`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#showerrorandwait)

***

### ShowLoading()

> **ShowLoading**(`message`): `void`

Defined in: [src/apps/core/newloginapp/runtime.ts:536](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L536)

#### Parameters

##### message

`string`

#### Returns

`void`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`ShowLoading`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#showloading)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`ShowToast`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#showtoast)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`spawnApp`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#spawnapp)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`spawnOverlay`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#spawnoverlay)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`spawnOverlayApp`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#spawnoverlayapp)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`spawnOverlayApp`](../../../../../ts/apps/process/classes/AppProcess.md#spawnoverlayapp)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/apps/core/newloginapp/runtime.ts:77](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L77)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`startKeyboardShortcutListener`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#startkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`startKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#startkeyboardshortcutlistener)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/apps/core/newloginapp/runtime.ts:87](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/newloginapp/runtime.ts#L87)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stop`](../../../../../ts/apps/process/classes/AppProcess.md#stop)

***

### stopKeyboardShortcutListener()

> **stopKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:276](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L276)

#### Returns

`void`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`stopKeyboardShortcutListener`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#stopkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stopKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#stopkeyboardshortcutlistener)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`unfocusActiveElement`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#unfocusactiveelement)

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

[`INewLoginAppRuntime`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md).[`unlockFile`](../../../../../interfaces/runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md#unlockfile)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unlockFile`](../../../../../ts/apps/process/classes/AppProcess.md#unlockfile)
