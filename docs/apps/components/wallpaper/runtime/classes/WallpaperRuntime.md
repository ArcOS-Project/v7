[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/components/wallpaper/runtime](../README.md) / WallpaperRuntime

# Class: WallpaperRuntime

Defined in: [src/apps/components/wallpaper/runtime.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L16)

## Extends

- [`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md)

## Implements

- [`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md)

## Constructors

### Constructor

> **new WallpaperRuntime**(`pid`, `parentPid`, `app`, `desktopDir?`): `WallpaperRuntime`

Defined in: [src/apps/components/wallpaper/runtime.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L38)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

##### desktopDir?

`string`

#### Returns

`WallpaperRuntime`

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`constructor`](../../../../../ts/apps/process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`_criticalProcess`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#_criticalprocess)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_criticalProcess`](../../../../../ts/apps/process/classes/AppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L46)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`acceleratorStore`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#acceleratorstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`acceleratorStore`](../../../../../ts/apps/process/classes/AppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`altMenu`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#altmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`altMenu`](../../../../../ts/apps/process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`app`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#app)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`app`](../../../../../ts/apps/process/classes/AppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`blinking`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#blinking)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blinking`](../../../../../ts/apps/process/classes/AppProcess.md#blinking)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`componentMount`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#componentmount)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`componentMount`](../../../../../ts/apps/process/classes/AppProcess.md#componentmount)

***

### CONFIG\_PATH

> **CONFIG\_PATH**: `string`

Defined in: [src/apps/components/wallpaper/runtime.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L17)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`CONFIG_PATH`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#config_path)

***

### Configuration

> **Configuration**: [`IConfigurator`](../../../../../interfaces/IConfigurator/interfaces/IConfigurator.md)\<[`DesktopIcons`](../../types/type-aliases/DesktopIcons.md)\>

Defined in: [src/apps/components/wallpaper/runtime.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L26)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`Configuration`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#configuration)

***

### contents

> **contents**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`DirectoryReadReturn`](../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/apps/components/wallpaper/runtime.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L18)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`contents`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#contents)

***

### contextMenu

> **contextMenu**: [`AppContextMenu`](../../../../../types/apps/app/type-aliases/AppContextMenu.md)

Defined in: [src/apps/components/wallpaper/runtime.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L34)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`contextMenu`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#contextmenu)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`contextMenu`](../../../../../ts/apps/process/classes/AppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`crashReason`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#crashreason)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`crashReason`](../../../../../ts/apps/process/classes/AppProcess.md#crashreason)

***

### directory

> **directory**: `string`

Defined in: [src/apps/components/wallpaper/runtime.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L24)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`directory`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#directory)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`dispatch`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#dispatch)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`dispatch`](../../../../../ts/apps/process/classes/AppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`draggable`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#draggable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`draggable`](../../../../../ts/apps/process/classes/AppProcess.md#draggable)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../../types/system/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L44)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevations`](../../../../../ts/apps/process/classes/AppProcess.md#elevations)

***

### iconsElement

> **iconsElement**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`HTMLDivElement`\>

Defined in: [src/apps/components/wallpaper/runtime.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L21)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`iconsElement`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#iconselement)

***

### loading

> **loading**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/components/wallpaper/runtime.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L23)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`loading`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#loading)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`name`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#name)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`name`](../../../../../ts/apps/process/classes/AppProcess.md#name)

***

### orphaned

> **orphaned**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`[]\>

Defined in: [src/apps/components/wallpaper/runtime.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L22)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`orphaned`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#orphaned)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`overridePopulatable`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#overridepopulatable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overridePopulatable`](../../../../../ts/apps/process/classes/AppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`parentPid`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#parentpid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`parentPid`](../../../../../ts/apps/process/classes/AppProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`pid`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#pid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`pid`](../../../../../ts/apps/process/classes/AppProcess.md#pid)

***

### Positions

> **Positions**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`DesktopIcons`](../../types/type-aliases/DesktopIcons.md)\>

Defined in: [src/apps/components/wallpaper/runtime.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L25)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`Positions`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#positions)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`renderArgs`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#renderargs)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`renderArgs`](../../../../../ts/apps/process/classes/AppProcess.md#renderargs)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L42)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`safeMode`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#safemode)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`safeMode`](../../../../../ts/apps/process/classes/AppProcess.md#safemode)

***

### selected

> **selected**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/components/wallpaper/runtime.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L19)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`selected`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#selected)

***

### shortcuts

> **shortcuts**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ShortcutStore`](../../../../../types/system/shortcut/type-aliases/ShortcutStore.md)\>

Defined in: [src/apps/components/wallpaper/runtime.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L20)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`shortcuts`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#shortcuts)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`sourceUrl`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#sourceurl)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`sourceUrl`](../../../../../ts/apps/process/classes/AppProcess.md#sourceurl)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`toastMessage`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#toastmessage)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`toastMessage`](../../../../../ts/apps/process/classes/AppProcess.md#toastmessage)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`username`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#username)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`username`](../../../../../ts/apps/process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`userPreferences`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#userpreferences)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`userPreferences`](../../../../../ts/apps/process/classes/AppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`windowFullscreen`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#windowfullscreen)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowFullscreen`](../../../../../ts/apps/process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`windowIcon`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#windowicon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowIcon`](../../../../../ts/apps/process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`windowTitle`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#windowtitle)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`_disposed`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#_disposed)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`MEMORY`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#memory)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`STATE`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#state)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`__render__`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#__render__)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__render__`](../../../../../ts/apps/process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`__start`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#__start)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__start`](../../../../../ts/apps/process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`__stop`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#__stop)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__stop`](../../../../../ts/apps/process/classes/AppProcess.md#__stop)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`appStore`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#appstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`appStore`](../../../../../ts/apps/process/classes/AppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`blink`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#blink)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blink`](../../../../../ts/apps/process/classes/AppProcess.md#blink)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`WallpaperRuntime` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`WallpaperRuntime` \| `undefined`\>

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`closeIfSecondInstance`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#closeifsecondinstance)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`closeWindow`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#closewindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeWindow`](../../../../../ts/apps/process/classes/AppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`CrashDetection`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#crashdetection)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`CrashDetection`](../../../../../ts/apps/process/classes/AppProcess.md#crashdetection)

***

### deleteItem()

> **deleteItem**(`path`): `Promise`\<`boolean`\>

Defined in: [src/apps/components/wallpaper/runtime.ts:186](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L186)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`deleteItem`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#deleteitem)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`elevate`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#elevate)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevate`](../../../../../ts/apps/process/classes/AppProcess.md#elevate)

***

### findAndDeleteOrphans()

> **findAndDeleteOrphans**(`contents`): `void`

Defined in: [src/apps/components/wallpaper/runtime.ts:101](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L101)

#### Parameters

##### contents

[`DirectoryReadReturn`](../../../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`

#### Returns

`void`

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`findAndDeleteOrphans`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#findanddeleteorphans)

***

### findFreeDesktopIconPosition()

> **findFreeDesktopIconPosition**(`identifier`, `wrapper?`): `Promise`\<`unknown`\> \| \{ `x`: `number`; `y`: `number`; \}

Defined in: [src/apps/components/wallpaper/runtime.ts:125](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L125)

#### Parameters

##### identifier

`string`

##### wrapper?

`HTMLDivElement` = `...`

#### Returns

`Promise`\<`unknown`\> \| \{ `x`: `number`; `y`: `number`; \}

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`findFreeDesktopIconPosition`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#findfreedesktopiconposition)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`getBody`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#getbody)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`getIcon`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#geticon)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`getIconCached`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#geticoncached)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`getIconStore`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#geticonstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconStore`](../../../../../ts/apps/process/classes/AppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `WallpaperRuntime`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`WallpaperRuntime`[]

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`getSingleton`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#getsingleton)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getSingleton`](../../../../../ts/apps/process/classes/AppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`getWindow`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#getwindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getWindow`](../../../../../ts/apps/process/classes/AppProcess.md#getwindow)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`hasOverlays`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#hasoverlays)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`hasOverlays`](../../../../../ts/apps/process/classes/AppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`HideToast`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#hidetoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`HideToast`](../../../../../ts/apps/process/classes/AppProcess.md#hidetoast)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`killSelf`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#killself)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`onClose`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#onclose)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`onClose`](../../../../../ts/apps/process/classes/AppProcess.md#onclose)

***

### render()

> **render**(): `Promise`\<`false` \| `undefined`\>

Defined in: [src/apps/components/wallpaper/runtime.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L57)

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`render`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#render)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`requestFileLock`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#requestfilelock)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`setSource`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#setsource)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`ShowToast`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#showtoast)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`spawnApp`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#spawnapp)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`spawnOverlay`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#spawnoverlay)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`spawnOverlayApp`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#spawnoverlayapp)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`spawnOverlayApp`](../../../../../ts/apps/process/classes/AppProcess.md#spawnoverlayapp)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/apps/components/wallpaper/runtime.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L53)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`startKeyboardShortcutListener`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#startkeyboardshortcutlistener)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`stopKeyboardShortcutListener`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#stopkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stopKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#stopkeyboardshortcutlistener)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`unfocusActiveElement`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#unfocusactiveelement)

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

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`unlockFile`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#unlockfile)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unlockFile`](../../../../../ts/apps/process/classes/AppProcess.md#unlockfile)

***

### updateContents()

> **updateContents**(): `Promise`\<`void`\>

Defined in: [src/apps/components/wallpaper/runtime.ts:80](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L80)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`updateContents`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#updatecontents)

***

### uploadItems()

> **uploadItems**(): `Promise`\<`void`\>

Defined in: [src/apps/components/wallpaper/runtime.ts:194](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/wallpaper/runtime.ts#L194)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWallpaperRuntime`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md).[`uploadItems`](../../../../../interfaces/runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md#uploaditems)
