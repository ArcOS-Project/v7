[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/core/loginapp/runtime](../README.md) / LoginAppRuntime

# Class: LoginAppRuntime

Defined in: [src/apps/core/loginapp/runtime.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L29)

## Extends

- [`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md)

## Implements

- [`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md)

## Constructors

### Constructor

> **new LoginAppRuntime**(`pid`, `parentPid`, `app`, `props?`): `LoginAppRuntime`

Defined in: [src/apps/core/loginapp/runtime.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L46)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

##### props?

[`LoginAppProps`](../../types/interfaces/LoginAppProps.md)

#### Returns

`LoginAppRuntime`

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`constructor`](../../../../../ts/apps/process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`_criticalProcess`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#_criticalprocess)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_criticalProcess`](../../../../../ts/apps/process/classes/AppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L46)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`acceleratorStore`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#acceleratorstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`acceleratorStore`](../../../../../ts/apps/process/classes/AppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`altMenu`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#altmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`altMenu`](../../../../../ts/apps/process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`app`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#app)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`app`](../../../../../ts/apps/process/classes/AppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`blinking`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#blinking)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blinking`](../../../../../ts/apps/process/classes/AppProcess.md#blinking)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`componentMount`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#componentmount)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`componentMount`](../../../../../ts/apps/process/classes/AppProcess.md#componentmount)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../../types/apps/app/type-aliases/AppContextMenu.md) = `{}`

Defined in: [src/ts/apps/process.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L47)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`contextMenu`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#contextmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`contextMenu`](../../../../../ts/apps/process/classes/AppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`crashReason`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#crashreason)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`crashReason`](../../../../../ts/apps/process/classes/AppProcess.md#crashreason)

***

### DEFAULT\_WALLPAPER

> **DEFAULT\_WALLPAPER**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/core/loginapp/runtime.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L30)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`DEFAULT_WALLPAPER`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#default_wallpaper)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`dispatch`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#dispatch)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`dispatch`](../../../../../ts/apps/process/classes/AppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`draggable`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#draggable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`draggable`](../../../../../ts/apps/process/classes/AppProcess.md#draggable)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../../types/system/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L44)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevations`](../../../../../ts/apps/process/classes/AppProcess.md#elevations)

***

### errorMessage

> **errorMessage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/core/loginapp/runtime.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L32)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`errorMessage`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#errormessage)

***

### hideProfileImage

> **hideProfileImage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/core/loginapp/runtime.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L36)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`hideProfileImage`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#hideprofileimage)

***

### loadingStatus

> **loadingStatus**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/core/loginapp/runtime.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L31)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`loadingStatus`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#loadingstatus)

***

### loginBackground

> **loginBackground**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/core/loginapp/runtime.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L35)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`loginBackground`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#loginbackground)

***

### loginProps?

> `optional` **loginProps?**: [`LoginAppProps`](../../types/interfaces/LoginAppProps.md)

Defined in: [src/apps/core/loginapp/runtime.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L41)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`loginProps`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#loginprops)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`name`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#name)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`overridePopulatable`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#overridepopulatable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overridePopulatable`](../../../../../ts/apps/process/classes/AppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`parentPid`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#parentpid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`parentPid`](../../../../../ts/apps/process/classes/AppProcess.md#parentpid)

***

### persistence

> **persistence**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`PersistenceInfo`](../../types/interfaces/PersistenceInfo.md) \| `undefined`\>

Defined in: [src/apps/core/loginapp/runtime.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L37)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`persistence`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#persistence)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`pid`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#pid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`pid`](../../../../../ts/apps/process/classes/AppProcess.md#pid)

***

### profileImage

> **profileImage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/core/loginapp/runtime.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L33)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`profileImage`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#profileimage)

***

### profileName

> **profileName**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/core/loginapp/runtime.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L34)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`profileName`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#profilename)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`renderArgs`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#renderargs)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`renderArgs`](../../../../../ts/apps/process/classes/AppProcess.md#renderargs)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/apps/core/loginapp/runtime.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L40)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`safeMode`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#safemode)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`safeMode`](../../../../../ts/apps/process/classes/AppProcess.md#safemode)

***

### server

> **server**: [`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md)

Defined in: [src/apps/core/loginapp/runtime.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L39)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`server`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#server)

***

### serverInfo

> **serverInfo**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ServerInfo`](../../../../../types/server/interfaces/ServerInfo.md)\>

Defined in: [src/apps/core/loginapp/runtime.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L38)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`serverInfo`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#serverinfo)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`sourceUrl`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#sourceurl)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`sourceUrl`](../../../../../ts/apps/process/classes/AppProcess.md#sourceurl)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`toastMessage`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#toastmessage)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`toastMessage`](../../../../../ts/apps/process/classes/AppProcess.md#toastmessage)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`username`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#username)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`username`](../../../../../ts/apps/process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`userPreferences`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#userpreferences)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`userPreferences`](../../../../../ts/apps/process/classes/AppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`windowFullscreen`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#windowfullscreen)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowFullscreen`](../../../../../ts/apps/process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`windowIcon`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#windowicon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowIcon`](../../../../../ts/apps/process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`windowTitle`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#windowtitle)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`_disposed`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#_disposed)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`MEMORY`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#memory)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`STATE`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#state)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`__render__`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#__render__)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__render__`](../../../../../ts/apps/process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`__start`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#__start)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__start`](../../../../../ts/apps/process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`__stop`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#__stop)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__stop`](../../../../../ts/apps/process/classes/AppProcess.md#__stop)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`appStore`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#appstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`appStore`](../../../../../ts/apps/process/classes/AppProcess.md#appstore)

***

### askForTotp()

> **askForTotp**(`userId`): `Promise`\<`unknown`\>

Defined in: [src/apps/core/loginapp/runtime.ts:380](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L380)

#### Parameters

##### userId

`string` \| `undefined`

#### Returns

`Promise`\<`unknown`\>

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`blink`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#blink)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blink`](../../../../../ts/apps/process/classes/AppProcess.md#blink)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`LoginAppRuntime` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`LoginAppRuntime` \| `undefined`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`closeIfSecondInstance`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#closeifsecondinstance)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`closeWindow`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#closewindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeWindow`](../../../../../ts/apps/process/classes/AppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`CrashDetection`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#crashdetection)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`CrashDetection`](../../../../../ts/apps/process/classes/AppProcess.md#crashdetection)

***

### createUser()

> **createUser**(): `void`

Defined in: [src/apps/core/loginapp/runtime.ts:422](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L422)

#### Returns

`void`

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`createUser`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#createuser)

***

### deletePersistence()

> **deletePersistence**(): `Promise`\<`void`\>

Defined in: [src/apps/core/loginapp/runtime.ts:450](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L450)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`deletePersistence`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#deletepersistence)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`elevate`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#elevate)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevate`](../../../../../ts/apps/process/classes/AppProcess.md#elevate)

***

### firstRun()

> **firstRun**(`daemon`): `Promise`\<`void`\>

Defined in: [src/apps/core/loginapp/runtime.ts:403](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L403)

#### Parameters

##### daemon

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`firstRun`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#firstrun)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`getBody`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#getbody)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`getIcon`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#geticon)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`getIconCached`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#geticoncached)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`getIconStore`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#geticonstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconStore`](../../../../../ts/apps/process/classes/AppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `LoginAppRuntime`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`LoginAppRuntime`[]

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`getSingleton`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#getsingleton)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getSingleton`](../../../../../ts/apps/process/classes/AppProcess.md#getsingleton)

***

### getWelcomeString()

> **getWelcomeString**(): `string`

Defined in: [src/apps/core/loginapp/runtime.ts:123](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L123)

#### Returns

`string`

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`getWelcomeString`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#getwelcomestring)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`getWindow`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#getwindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getWindow`](../../../../../ts/apps/process/classes/AppProcess.md#getwindow)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`hasOverlays`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#hasoverlays)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`hasOverlays`](../../../../../ts/apps/process/classes/AppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`HideToast`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#hidetoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`HideToast`](../../../../../ts/apps/process/classes/AppProcess.md#hidetoast)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`killSelf`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#killself)

#### Inherited from

`AppProcess.killSelf`

***

### loadPersistence()

> **loadPersistence**(): `Promise`\<`void`\>

Defined in: [src/apps/core/loginapp/runtime.ts:430](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L430)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`loadPersistence`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#loadpersistence)

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

### logoff()

> **logoff**(`userDaemon`): `Promise`\<`void`\>

Defined in: [src/apps/core/loginapp/runtime.ts:178](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L178)

#### Parameters

##### userDaemon

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`logoff`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#logoff)

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/ts/apps/process.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L103)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`onClose`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#onclose)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`onClose`](../../../../../ts/apps/process/classes/AppProcess.md#onclose)

***

### proceed()

> **proceed**(`identifier`, `password`): `Promise`\<`void`\>

Defined in: [src/apps/core/loginapp/runtime.ts:293](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L293)

#### Parameters

##### identifier

`string`

##### password

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`proceed`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#proceed)

***

### render()

> **render**(): `Promise`\<`false` \| `undefined`\>

Defined in: [src/apps/core/loginapp/runtime.ts:78](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L78)

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`render`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#render)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`requestFileLock`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#requestfilelock)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`requestFileLock`](../../../../../ts/apps/process/classes/AppProcess.md#requestfilelock)

***

### resetCookies()

> **resetCookies**(): `void`

Defined in: [src/apps/core/loginapp/runtime.ts:373](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L373)

#### Returns

`void`

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`resetCookies`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#resetcookies)

***

### restart()

> **restart**(`userDaemon?`): `Promise`\<`void`\>

Defined in: [src/apps/core/loginapp/runtime.ts:257](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L257)

#### Parameters

##### userDaemon?

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`restart`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#restart)

***

### savePersistence()

> **savePersistence**(`username`, `profilePicture`, `loginWallpaper?`): `void`

Defined in: [src/apps/core/loginapp/runtime.ts:443](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L443)

#### Parameters

##### username

`string`

##### profilePicture

`string`

##### loginWallpaper?

`string`

#### Returns

`void`

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`savePersistence`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#savepersistence)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`setSource`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#setsource)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`setSource`](../../../../../ts/apps/process/classes/AppProcess.md#setsource)

***

### setUserDisplayStuff()

> **setUserDisplayStuff**(`userDaemon`, `applyBackground?`): `Promise`\<`void`\>

Defined in: [src/apps/core/loginapp/runtime.ts:132](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L132)

#### Parameters

##### userDaemon

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

##### applyBackground?

`boolean` = `true`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`setUserDisplayStuff`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#setuserdisplaystuff)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`ShowToast`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#showtoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`ShowToast`](../../../../../ts/apps/process/classes/AppProcess.md#showtoast)

***

### shutdown()

> **shutdown**(`userDaemon?`): `Promise`\<`void`\>

Defined in: [src/apps/core/loginapp/runtime.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L226)

#### Parameters

##### userDaemon?

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`shutdown`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#shutdown)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`spawnApp`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#spawnapp)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`spawnOverlay`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#spawnoverlay)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`spawnOverlayApp`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#spawnoverlayapp)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`spawnOverlayApp`](../../../../../ts/apps/process/classes/AppProcess.md#spawnoverlayapp)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/apps/core/loginapp/runtime.ts:70](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L70)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`start`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#start)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`start`](../../../../../ts/apps/process/classes/AppProcess.md#start)

***

### startDaemon()

> **startDaemon**(`token`, `username`, `info?`): `Promise`\<`void`\>

Defined in: [src/apps/core/loginapp/runtime.ts:146](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L146)

#### Parameters

##### token

`string`

##### username

`string`

##### info?

[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`startDaemon`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#startdaemon)

***

### startKeyboardShortcutListener()

> **startKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:270](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L270)

#### Returns

`void`

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`startKeyboardShortcutListener`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#startkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`startKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#startkeyboardshortcutlistener)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/apps/core/loginapp/runtime.ts:74](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L74)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`stop`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#stop)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stop`](../../../../../ts/apps/process/classes/AppProcess.md#stop)

***

### stopKeyboardShortcutListener()

> **stopKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:276](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L276)

#### Returns

`void`

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`stopKeyboardShortcutListener`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#stopkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stopKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#stopkeyboardshortcutlistener)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`unfocusActiveElement`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#unfocusactiveelement)

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

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`unlockFile`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#unlockfile)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unlockFile`](../../../../../ts/apps/process/classes/AppProcess.md#unlockfile)

***

### updateServerStuff()

> **updateServerStuff**(): `void`

Defined in: [src/apps/core/loginapp/runtime.ts:459](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/core/loginapp/runtime.ts#L459)

#### Returns

`void`

#### Implementation of

[`ILoginAppRuntime`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md).[`updateServerStuff`](../../../../../interfaces/runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md#updateserverstuff)
