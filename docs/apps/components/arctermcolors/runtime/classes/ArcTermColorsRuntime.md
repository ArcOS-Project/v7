[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/components/arctermcolors/runtime](../README.md) / ArcTermColorsRuntime

# Class: ArcTermColorsRuntime

Defined in: [src/apps/components/arctermcolors/runtime.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L15)

## Extends

- [`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md)

## Implements

- [`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md)

## Constructors

### Constructor

> **new ArcTermColorsRuntime**(`pid`, `parentPid`, `app`, `path?`): `ArcTermColorsRuntime`

Defined in: [src/apps/components/arctermcolors/runtime.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L23)

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

`ArcTermColorsRuntime`

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`constructor`](../../../../../ts/apps/process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`_criticalProcess`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#_criticalprocess)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_criticalProcess`](../../../../../ts/apps/process/classes/AppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L46)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`acceleratorStore`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#acceleratorstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`acceleratorStore`](../../../../../ts/apps/process/classes/AppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`altMenu`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#altmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`altMenu`](../../../../../ts/apps/process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`app`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#app)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`app`](../../../../../ts/apps/process/classes/AppProcess.md#app)

***

### arcTermConfiguration

> **arcTermConfiguration**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ArcTermConfiguration`](../../../../../types/terminal/interfaces/ArcTermConfiguration.md)\>

Defined in: [src/apps/components/arctermcolors/runtime.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L17)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`arcTermConfiguration`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#arctermconfiguration)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`blinking`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#blinking)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blinking`](../../../../../ts/apps/process/classes/AppProcess.md#blinking)

***

### changed

> **changed**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/components/arctermcolors/runtime.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L19)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`changed`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#changed)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`componentMount`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#componentmount)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`componentMount`](../../../../../ts/apps/process/classes/AppProcess.md#componentmount)

***

### CONFIG\_PATH

> **CONFIG\_PATH**: `string`

Defined in: [src/apps/components/arctermcolors/runtime.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L16)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`CONFIG_PATH`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#config_path)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../../types/apps/app/type-aliases/AppContextMenu.md) = `{}`

Defined in: [src/ts/apps/process.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L47)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`contextMenu`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#contextmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`contextMenu`](../../../../../ts/apps/process/classes/AppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`crashReason`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#crashreason)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`crashReason`](../../../../../ts/apps/process/classes/AppProcess.md#crashreason)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`dispatch`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#dispatch)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`dispatch`](../../../../../ts/apps/process/classes/AppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`draggable`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#draggable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`draggable`](../../../../../ts/apps/process/classes/AppProcess.md#draggable)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../../types/system/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L44)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevations`](../../../../../ts/apps/process/classes/AppProcess.md#elevations)

***

### mode

> **mode**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`"custom"` \| `"presets"`\>

Defined in: [src/apps/components/arctermcolors/runtime.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L18)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`mode`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#mode)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`name`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#name)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`overridePopulatable`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#overridepopulatable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overridePopulatable`](../../../../../ts/apps/process/classes/AppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`parentPid`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#parentpid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`parentPid`](../../../../../ts/apps/process/classes/AppProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`pid`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#pid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`pid`](../../../../../ts/apps/process/classes/AppProcess.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`renderArgs`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#renderargs)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`renderArgs`](../../../../../ts/apps/process/classes/AppProcess.md#renderargs)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L42)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`safeMode`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#safemode)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`safeMode`](../../../../../ts/apps/process/classes/AppProcess.md#safemode)

***

### savePath?

> `optional` **savePath?**: `string`

Defined in: [src/apps/components/arctermcolors/runtime.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L20)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`savePath`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#savepath)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`sourceUrl`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#sourceurl)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`sourceUrl`](../../../../../ts/apps/process/classes/AppProcess.md#sourceurl)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`toastMessage`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#toastmessage)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`toastMessage`](../../../../../ts/apps/process/classes/AppProcess.md#toastmessage)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`username`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#username)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`username`](../../../../../ts/apps/process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`userPreferences`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#userpreferences)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`userPreferences`](../../../../../ts/apps/process/classes/AppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`windowFullscreen`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#windowfullscreen)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowFullscreen`](../../../../../ts/apps/process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`windowIcon`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#windowicon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowIcon`](../../../../../ts/apps/process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`windowTitle`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#windowtitle)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`_disposed`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#_disposed)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`MEMORY`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#memory)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`STATE`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#state)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`__render__`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#__render__)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__render__`](../../../../../ts/apps/process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`__start`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#__start)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__start`](../../../../../ts/apps/process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`__stop`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#__stop)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__stop`](../../../../../ts/apps/process/classes/AppProcess.md#__stop)

***

### applyConfiguration()

> **applyConfiguration**(): `Promise`\<`void`\>

Defined in: [src/apps/components/arctermcolors/runtime.ts:139](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L139)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`applyConfiguration`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#applyconfiguration)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`appStore`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#appstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`appStore`](../../../../../ts/apps/process/classes/AppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`blink`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#blink)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blink`](../../../../../ts/apps/process/classes/AppProcess.md#blink)

***

### choosePreset()

> **choosePreset**(`preset`): `void`

Defined in: [src/apps/components/arctermcolors/runtime.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L62)

#### Parameters

##### preset

[`ArcTermColorPreset`](../../types/interfaces/ArcTermColorPreset.md)

#### Returns

`void`

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`choosePreset`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#choosepreset)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`ArcTermColorsRuntime` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`ArcTermColorsRuntime` \| `undefined`\>

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`closeIfSecondInstance`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#closeifsecondinstance)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`closeWindow`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#closewindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeWindow`](../../../../../ts/apps/process/classes/AppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`CrashDetection`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#crashdetection)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`CrashDetection`](../../../../../ts/apps/process/classes/AppProcess.md#crashdetection)

***

### customFromPreset()

> **customFromPreset**(`preset`): `void`

Defined in: [src/apps/components/arctermcolors/runtime.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L57)

#### Parameters

##### preset

[`ArcTermColorPreset`](../../types/interfaces/ArcTermColorPreset.md)

#### Returns

`void`

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`customFromPreset`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#customfrompreset)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`elevate`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#elevate)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevate`](../../../../../ts/apps/process/classes/AppProcess.md#elevate)

***

### error\_savePath()

> **error\_savePath**(): `Promise`\<`boolean`\>

Defined in: [src/apps/components/arctermcolors/runtime.ts:168](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L168)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`error_savePath`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#error_savepath)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`getBody`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#getbody)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`getIcon`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#geticon)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`getIconCached`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#geticoncached)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`getIconStore`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#geticonstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconStore`](../../../../../ts/apps/process/classes/AppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `ArcTermColorsRuntime`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`ArcTermColorsRuntime`[]

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`getSingleton`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#getsingleton)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getSingleton`](../../../../../ts/apps/process/classes/AppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`getWindow`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#getwindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getWindow`](../../../../../ts/apps/process/classes/AppProcess.md#getwindow)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`hasOverlays`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#hasoverlays)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`hasOverlays`](../../../../../ts/apps/process/classes/AppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`HideToast`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#hidetoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`HideToast`](../../../../../ts/apps/process/classes/AppProcess.md#hidetoast)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`killSelf`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#killself)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`onClose`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#onclose)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`onClose`](../../../../../ts/apps/process/classes/AppProcess.md#onclose)

***

### openPreset()

> **openPreset**(): `Promise`\<`void`\>

Defined in: [src/apps/components/arctermcolors/runtime.ts:104](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L104)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`openPreset`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#openpreset)

***

### readConfiguration()

> **readConfiguration**(): `Promise`\<`void`\>

Defined in: [src/apps/components/arctermcolors/runtime.ts:149](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L149)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`readConfiguration`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#readconfiguration)

***

### readPresetFromFile()

> **readPresetFromFile**(`path?`): `Promise`\<`boolean`\>

Defined in: [src/apps/components/arctermcolors/runtime.ts:118](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L118)

#### Parameters

##### path?

`string` \| `undefined` = `...`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`readPresetFromFile`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#readpresetfromfile)

***

### render()

> **render**(): `Promise`\<`void`\>

Defined in: [src/apps/components/arctermcolors/runtime.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L45)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`render`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#render)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`requestFileLock`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#requestfilelock)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`requestFileLock`](../../../../../ts/apps/process/classes/AppProcess.md#requestfilelock)

***

### savePresetToFile()

> **savePresetToFile**(`state?`): `Promise`\<`void`\>

Defined in: [src/apps/components/arctermcolors/runtime.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L79)

#### Parameters

##### state?

[`ArcTermConfiguration`](../../../../../types/terminal/interfaces/ArcTermConfiguration.md) = `...`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`savePresetToFile`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#savepresettofile)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`setSource`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#setsource)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`ShowToast`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#showtoast)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`spawnApp`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#spawnapp)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`spawnOverlay`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#spawnoverlay)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`spawnOverlayApp`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#spawnoverlayapp)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`spawnOverlayApp`](../../../../../ts/apps/process/classes/AppProcess.md#spawnoverlayapp)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/apps/components/arctermcolors/runtime.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L30)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`startKeyboardShortcutListener`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#startkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`startKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#startkeyboardshortcutlistener)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/apps/components/arctermcolors/runtime.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L43)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`stopKeyboardShortcutListener`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#stopkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stopKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#stopkeyboardshortcutlistener)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`unfocusActiveElement`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#unfocusactiveelement)

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

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`unlockFile`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#unlockfile)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unlockFile`](../../../../../ts/apps/process/classes/AppProcess.md#unlockfile)

***

### writeDefaultConfiguration()

> **writeDefaultConfiguration**(): `Promise`\<`void`\>

Defined in: [src/apps/components/arctermcolors/runtime.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/arctermcolors/runtime.ts#L49)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTermColorsRuntime`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md).[`writeDefaultConfiguration`](../../../../../interfaces/runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md#writedefaultconfiguration)
