[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/components/multiupdategui/runtime](../README.md) / MultiUpdateGuiRuntime

# Class: MultiUpdateGuiRuntime

Defined in: [src/apps/components/multiupdategui/runtime.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L12)

## Extends

- [`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md)

## Implements

- [`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md)

## Constructors

### Constructor

> **new MultiUpdateGuiRuntime**(`pid`, `parentPid`, `app`, `updates`): `MultiUpdateGuiRuntime`

Defined in: [src/apps/components/multiupdategui/runtime.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L28)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

##### updates

[`UpdateInfo`](../../../../../types/tpa/package/interfaces/UpdateInfo.md)[]

#### Returns

`MultiUpdateGuiRuntime`

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`constructor`](../../../../../ts/apps/process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`_criticalProcess`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#_criticalprocess)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_criticalProcess`](../../../../../ts/apps/process/classes/AppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L46)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`acceleratorStore`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#acceleratorstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`acceleratorStore`](../../../../../ts/apps/process/classes/AppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`altMenu`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#altmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`altMenu`](../../../../../ts/apps/process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`app`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#app)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`app`](../../../../../ts/apps/process/classes/AppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`blinking`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#blinking)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blinking`](../../../../../ts/apps/process/classes/AppProcess.md#blinking)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`componentMount`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#componentmount)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`componentMount`](../../../../../ts/apps/process/classes/AppProcess.md#componentmount)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../../types/apps/app/type-aliases/AppContextMenu.md) = `{}`

Defined in: [src/ts/apps/process.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L47)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`contextMenu`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#contextmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`contextMenu`](../../../../../ts/apps/process/classes/AppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`crashReason`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#crashreason)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`crashReason`](../../../../../ts/apps/process/classes/AppProcess.md#crashreason)

***

### currentPackage

> **currentPackage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

Defined in: [src/apps/components/multiupdategui/runtime.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L17)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`currentPackage`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#currentpackage)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`dispatch`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#dispatch)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`dispatch`](../../../../../ts/apps/process/classes/AppProcess.md#dispatch)

***

### done

> **done**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/components/multiupdategui/runtime.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L19)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`done`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#done)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`draggable`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#draggable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`draggable`](../../../../../ts/apps/process/classes/AppProcess.md#draggable)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../../types/system/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L44)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevations`](../../../../../ts/apps/process/classes/AppProcess.md#elevations)

***

### errored

> **errored**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`[]\>

Defined in: [src/apps/components/multiupdategui/runtime.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L20)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`errored`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#errored)

***

### focused

> **focused**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/components/multiupdategui/runtime.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L22)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`focused`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#focused)

***

### logs

> **logs**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`Record`\<`string`, [`InstallStatus`](../../../../../types/tpa/package/type-aliases/InstallStatus.md)\>\>

Defined in: [src/apps/components/multiupdategui/runtime.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L21)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`logs`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#logs)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`name`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#name)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`overridePopulatable`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#overridepopulatable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overridePopulatable`](../../../../../ts/apps/process/classes/AppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`parentPid`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#parentpid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`parentPid`](../../../../../ts/apps/process/classes/AppProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`pid`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#pid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`pid`](../../../../../ts/apps/process/classes/AppProcess.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`renderArgs`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#renderargs)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`renderArgs`](../../../../../ts/apps/process/classes/AppProcess.md#renderargs)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L42)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`safeMode`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#safemode)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`safeMode`](../../../../../ts/apps/process/classes/AppProcess.md#safemode)

***

### showLog

> **showLog**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/components/multiupdategui/runtime.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L23)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`showLog`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#showlog)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`sourceUrl`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#sourceurl)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`sourceUrl`](../../../../../ts/apps/process/classes/AppProcess.md#sourceurl)

***

### status

> **status**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`MultiUpdateStatus`](../../types/type-aliases/MultiUpdateStatus.md)\>

Defined in: [src/apps/components/multiupdategui/runtime.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L16)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`status`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#status)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`toastMessage`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#toastmessage)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`toastMessage`](../../../../../ts/apps/process/classes/AppProcess.md#toastmessage)

***

### unified

> **unified**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/components/multiupdategui/runtime.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L24)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`unified`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#unified)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`username`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#username)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`username`](../../../../../ts/apps/process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`userPreferences`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#userpreferences)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`userPreferences`](../../../../../ts/apps/process/classes/AppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`windowFullscreen`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#windowfullscreen)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowFullscreen`](../../../../../ts/apps/process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`windowIcon`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#windowicon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowIcon`](../../../../../ts/apps/process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`windowTitle`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#windowtitle)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowTitle`](../../../../../ts/apps/process/classes/AppProcess.md#windowtitle)

***

### working

> **working**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/components/multiupdategui/runtime.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L18)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`working`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#working)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`_disposed`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#_disposed)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`MEMORY`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#memory)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`STATE`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#state)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`__render__`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#__render__)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__render__`](../../../../../ts/apps/process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`__start`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#__start)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__start`](../../../../../ts/apps/process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`__stop`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#__stop)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__stop`](../../../../../ts/apps/process/classes/AppProcess.md#__stop)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`appStore`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#appstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`appStore`](../../../../../ts/apps/process/classes/AppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`blink`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#blink)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blink`](../../../../../ts/apps/process/classes/AppProcess.md#blink)

***

### checkForErrors()

> **checkForErrors**(): `void`

Defined in: [src/apps/components/multiupdategui/runtime.ts:154](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L154)

#### Returns

`void`

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`checkForErrors`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#checkforerrors)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`MultiUpdateGuiRuntime` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`MultiUpdateGuiRuntime` \| `undefined`\>

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`closeIfSecondInstance`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#closeifsecondinstance)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`closeWindow`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#closewindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeWindow`](../../../../../ts/apps/process/classes/AppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`CrashDetection`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#crashdetection)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`elevate`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#elevate)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevate`](../../../../../ts/apps/process/classes/AppProcess.md#elevate)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`getBody`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#getbody)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`getIcon`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#geticon)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`getIconCached`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#geticoncached)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`getIconStore`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#geticonstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconStore`](../../../../../ts/apps/process/classes/AppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `MultiUpdateGuiRuntime`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`MultiUpdateGuiRuntime`[]

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`getSingleton`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#getsingleton)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getSingleton`](../../../../../ts/apps/process/classes/AppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`getWindow`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#getwindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getWindow`](../../../../../ts/apps/process/classes/AppProcess.md#getwindow)

***

### go()

> **go**(): `Promise`\<`void`\>

Defined in: [src/apps/components/multiupdategui/runtime.ts:92](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L92)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`go`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#go)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`hasOverlays`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#hasoverlays)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`hasOverlays`](../../../../../ts/apps/process/classes/AppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`HideToast`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#hidetoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`HideToast`](../../../../../ts/apps/process/classes/AppProcess.md#hidetoast)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`killSelf`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#killself)

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

### mainAction()

> **mainAction**(): `void`

Defined in: [src/apps/components/multiupdategui/runtime.ts:160](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L160)

#### Returns

`void`

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`mainAction`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#mainaction)

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/apps/components/multiupdategui/runtime.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L63)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`onClose`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#onclose)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`onClose`](../../../../../ts/apps/process/classes/AppProcess.md#onclose)

***

### packageFailed()

> **packageFailed**(`appId`): `void`

Defined in: [src/apps/components/multiupdategui/runtime.ts:83](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L83)

#### Parameters

##### appId

`string`

#### Returns

`void`

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`packageFailed`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#packagefailed)

***

### render()

> **render**(): `Promise`\<`void`\>

Defined in: [src/apps/components/multiupdategui/runtime.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L54)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`render`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#render)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`requestFileLock`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#requestfilelock)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`setSource`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#setsource)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`ShowToast`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#showtoast)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`spawnApp`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#spawnapp)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`spawnOverlay`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#spawnoverlay)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`spawnOverlayApp`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#spawnoverlayapp)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`spawnOverlayApp`](../../../../../ts/apps/process/classes/AppProcess.md#spawnoverlayapp)

***

### start()

> **start**(): `Promise`\<`false` \| `undefined`\>

Defined in: [src/apps/components/multiupdategui/runtime.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L37)

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`start`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#start)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`start`](../../../../../ts/apps/process/classes/AppProcess.md#start)

***

### startKeyboardShortcutListener()

> **startKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:270](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L270)

#### Returns

`void`

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`startKeyboardShortcutListener`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#startkeyboardshortcutlistener)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`stopKeyboardShortcutListener`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#stopkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stopKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#stopkeyboardshortcutlistener)

***

### toggleLog()

> **toggleLog**(): `void`

Defined in: [src/apps/components/multiupdategui/runtime.ts:165](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L165)

#### Returns

`void`

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`toggleLog`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#togglelog)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`unfocusActiveElement`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#unfocusactiveelement)

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

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`unlockFile`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#unlockfile)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unlockFile`](../../../../../ts/apps/process/classes/AppProcess.md#unlockfile)

***

### updatePackageStatus()

> **updatePackageStatus**(`appId`, `newData`): `void`

Defined in: [src/apps/components/multiupdategui/runtime.ts:72](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/multiupdategui/runtime.ts#L72)

#### Parameters

##### appId

`string`

##### newData

`Partial`\<[`MultiUpdateStatusNode`](../../types/interfaces/MultiUpdateStatusNode.md)\>

#### Returns

`void`

#### Implementation of

[`IMultiUpdateGuiRuntime`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md).[`updatePackageStatus`](../../../../../interfaces/runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md#updatepackagestatus)
