[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/user/appstore/runtime](../README.md) / AppStoreRuntime

# Class: AppStoreRuntime

Defined in: [src/apps/user/appstore/runtime.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L24)

## Extends

- [`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md)

## Implements

- [`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md)

## Constructors

### Constructor

> **new AppStoreRuntime**(`pid`, `parentPid`, `app`, `page?`, `props?`): `AppStoreRuntime`

Defined in: [src/apps/user/appstore/runtime.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L35)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

##### page?

`number`

##### props?

`Record`\<`string`, `any`\>

#### Returns

`AppStoreRuntime`

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`constructor`](../../../../../ts/apps/process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`_criticalProcess`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#_criticalprocess)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_criticalProcess`](../../../../../ts/apps/process/classes/AppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L46)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`acceleratorStore`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#acceleratorstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`acceleratorStore`](../../../../../ts/apps/process/classes/AppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`altMenu`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#altmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`altMenu`](../../../../../ts/apps/process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`app`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#app)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`app`](../../../../../ts/apps/process/classes/AppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`blinking`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#blinking)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blinking`](../../../../../ts/apps/process/classes/AppProcess.md#blinking)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`componentMount`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#componentmount)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`componentMount`](../../../../../ts/apps/process/classes/AppProcess.md#componentmount)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../../types/apps/app/type-aliases/AppContextMenu.md) = `{}`

Defined in: [src/ts/apps/process.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L47)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`contextMenu`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#contextmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`contextMenu`](../../../../../ts/apps/process/classes/AppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`crashReason`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#crashreason)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`crashReason`](../../../../../ts/apps/process/classes/AppProcess.md#crashreason)

***

### currentPage

> **currentPage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/appstore/runtime.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L29)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`currentPage`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#currentpage)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`dispatch`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#dispatch)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`dispatch`](../../../../../ts/apps/process/classes/AppProcess.md#dispatch)

***

### distrib

> **distrib**: [`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md)

Defined in: [src/apps/user/appstore/runtime.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L31)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`distrib`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#distrib)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`draggable`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#draggable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`draggable`](../../../../../ts/apps/process/classes/AppProcess.md#draggable)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../../types/system/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L44)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevations`](../../../../../ts/apps/process/classes/AppProcess.md#elevations)

***

### loadingPage

> **loadingPage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/appstore/runtime.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L26)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`loadingPage`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#loadingpage)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`name`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#name)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`name`](../../../../../ts/apps/process/classes/AppProcess.md#name)

***

### operations

> **operations**: `Record`\<`string`, [`IInstallerProcessBase`](../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md)\> = `{}`

Defined in: [src/apps/user/appstore/runtime.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L30)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`operations`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#operations)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`overridePopulatable`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#overridepopulatable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overridePopulatable`](../../../../../ts/apps/process/classes/AppProcess.md#overridepopulatable)

***

### pageProps

> **pageProps**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`Record`\<`string`, `any`\>\>

Defined in: [src/apps/user/appstore/runtime.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L27)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`pageProps`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#pageprops)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`parentPid`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#parentpid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`parentPid`](../../../../../ts/apps/process/classes/AppProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`pid`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#pid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`pid`](../../../../../ts/apps/process/classes/AppProcess.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`renderArgs`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#renderargs)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`renderArgs`](../../../../../ts/apps/process/classes/AppProcess.md#renderargs)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L42)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`safeMode`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#safemode)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`safeMode`](../../../../../ts/apps/process/classes/AppProcess.md#safemode)

***

### searching

> **searching**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/appstore/runtime.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L28)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`searching`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#searching)

***

### searchQuery

> **searchQuery**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/appstore/runtime.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L25)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`searchQuery`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#searchquery)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`sourceUrl`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#sourceurl)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`sourceUrl`](../../../../../ts/apps/process/classes/AppProcess.md#sourceurl)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`toastMessage`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#toastmessage)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`toastMessage`](../../../../../ts/apps/process/classes/AppProcess.md#toastmessage)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`username`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#username)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`username`](../../../../../ts/apps/process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`userPreferences`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#userpreferences)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`userPreferences`](../../../../../ts/apps/process/classes/AppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`windowFullscreen`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#windowfullscreen)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowFullscreen`](../../../../../ts/apps/process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`windowIcon`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#windowicon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowIcon`](../../../../../ts/apps/process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`windowTitle`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#windowtitle)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`_disposed`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#_disposed)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`MEMORY`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#memory)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`STATE`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#state)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`__render__`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#__render__)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__render__`](../../../../../ts/apps/process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`__start`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#__start)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__start`](../../../../../ts/apps/process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`__stop`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#__stop)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__stop`](../../../../../ts/apps/process/classes/AppProcess.md#__stop)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`appStore`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#appstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`appStore`](../../../../../ts/apps/process/classes/AppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`blink`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#blink)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blink`](../../../../../ts/apps/process/classes/AppProcess.md#blink)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`AppStoreRuntime` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`AppStoreRuntime` \| `undefined`\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`closeIfSecondInstance`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#closeifsecondinstance)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`closeWindow`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#closewindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeWindow`](../../../../../ts/apps/process/classes/AppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`CrashDetection`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#crashdetection)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`CrashDetection`](../../../../../ts/apps/process/classes/AppProcess.md#crashdetection)

***

### deletePackage()

> **deletePackage**(`pkg`): `Promise`\<`boolean`\>

Defined in: [src/apps/user/appstore/runtime.ts:243](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L243)

#### Parameters

##### pkg

[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`deletePackage`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#deletepackage)

***

### deprecatePackage()

> **deprecatePackage**(`pkg`): `Promise`\<`boolean`\>

Defined in: [src/apps/user/appstore/runtime.ts:223](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L223)

#### Parameters

##### pkg

[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`deprecatePackage`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#deprecatepackage)

***

### discardOperation()

> **discardOperation**(`id`): `boolean`

Defined in: [src/apps/user/appstore/runtime.ts:413](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L413)

#### Parameters

##### id

`string`

#### Returns

`boolean`

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`discardOperation`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#discardoperation)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`elevate`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#elevate)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevate`](../../../../../ts/apps/process/classes/AppProcess.md#elevate)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`getBody`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#getbody)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`getIcon`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#geticon)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`getIconCached`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#geticoncached)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`getIconStore`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#geticonstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconStore`](../../../../../ts/apps/process/classes/AppProcess.md#geticonstore)

***

### getRunningOperation()

> **getRunningOperation**(`pkg`): [`IInstallerProcessBase`](../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md)

Defined in: [src/apps/user/appstore/runtime.ts:423](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L423)

#### Parameters

##### pkg

[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)

#### Returns

[`IInstallerProcessBase`](../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md)

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`getRunningOperation`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#getrunningoperation)

***

### getSingleton()

> **getSingleton**(): `AppStoreRuntime`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`AppStoreRuntime`[]

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`getSingleton`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#getsingleton)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getSingleton`](../../../../../ts/apps/process/classes/AppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`getWindow`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#getwindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getWindow`](../../../../../ts/apps/process/classes/AppProcess.md#getwindow)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`hasOverlays`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#hasoverlays)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`hasOverlays`](../../../../../ts/apps/process/classes/AppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`HideToast`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#hidetoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`HideToast`](../../../../../ts/apps/process/classes/AppProcess.md#hidetoast)

***

### installPackage()

> **installPackage**(`pkg`, `onDownloadProgress?`): `Promise`\<`false` \| `0` \| [`IInstallerProcessBase`](../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md) \| `"elevateCancel"`\>

Defined in: [src/apps/user/appstore/runtime.ts:111](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L111)

#### Parameters

##### pkg

[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)

##### onDownloadProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`false` \| `0` \| [`IInstallerProcessBase`](../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md) \| `"elevateCancel"`\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`installPackage`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#installpackage)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`killSelf`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#killself)

#### Inherited from

`AppProcess.killSelf`

***

### learnMoreBlocking()

> **learnMoreBlocking**(): `void`

Defined in: [src/apps/user/appstore/runtime.ts:388](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L388)

#### Returns

`void`

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`learnMoreBlocking`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#learnmoreblocking)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`onClose`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#onclose)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`onClose`](../../../../../ts/apps/process/classes/AppProcess.md#onclose)

***

### publishPackage()

> **publishPackage**(): `Promise`\<`boolean`\>

Defined in: [src/apps/user/appstore/runtime.ts:263](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L263)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`publishPackage`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#publishpackage)

***

### readmeFallback()

> **readmeFallback**(`pkg`): `string`

Defined in: [src/apps/user/appstore/runtime.ts:364](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L364)

#### Parameters

##### pkg

[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)

#### Returns

`string`

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`readmeFallback`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#readmefallback)

***

### registerOperation()

> **registerOperation**(`id`, `proc`): `boolean`

Defined in: [src/apps/user/appstore/runtime.ts:404](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L404)

#### Parameters

##### id

`string`

##### proc

[`IInstallerProcessBase`](../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md)

#### Returns

`boolean`

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`registerOperation`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#registeroperation)

***

### render()

> **render**(`__namedParameters`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/apps/user/appstore/runtime.ts:73](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L73)

#### Parameters

##### \_\_namedParameters

###### page?

`string`

###### props?

`Record`\<`string`, `any`\>

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`render`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#render)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`requestFileLock`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#requestfilelock)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`requestFileLock`](../../../../../ts/apps/process/classes/AppProcess.md#requestfilelock)

***

### Search()

> **Search**(): `Promise`\<`void`\>

Defined in: [src/apps/user/appstore/runtime.ts:104](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L104)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`Search`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#search)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`setSource`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#setsource)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`ShowToast`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#showtoast)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`spawnApp`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#spawnapp)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`spawnOverlay`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#spawnoverlay)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`spawnOverlayApp`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#spawnoverlayapp)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`spawnOverlayApp`](../../../../../ts/apps/process/classes/AppProcess.md#spawnoverlayapp)

***

### start()

> **start**(): `Promise`\<`false` \| `undefined`\>

Defined in: [src/apps/user/appstore/runtime.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L43)

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`start`](../../../../../ts/apps/process/classes/AppProcess.md#start)

***

### startKeyboardShortcutListener()

> **startKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:270](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L270)

#### Returns

`void`

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`startKeyboardShortcutListener`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#startkeyboardshortcutlistener)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`stopKeyboardShortcutListener`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#stopkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stopKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#stopkeyboardshortcutlistener)

***

### switchPage()

> **switchPage**(`id`, `props?`, `force?`): `Promise`\<`void`\>

Defined in: [src/apps/user/appstore/runtime.ts:81](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L81)

#### Parameters

##### id

`string`

##### props?

`Record`\<`string`, `any`\>

##### force?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`switchPage`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#switchpage)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`unfocusActiveElement`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#unfocusactiveelement)

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

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`unlockFile`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#unlockfile)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unlockFile`](../../../../../ts/apps/process/classes/AppProcess.md#unlockfile)

***

### updatePackage()

> **updatePackage**(`pkg`, `onDownloadProgress?`): `Promise`\<`false` \| `0` \| [`IInstallerProcessBase`](../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md)\>

Defined in: [src/apps/user/appstore/runtime.ts:166](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L166)

#### Parameters

##### pkg

[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)

##### onDownloadProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`false` \| `0` \| [`IInstallerProcessBase`](../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md)\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`updatePackage`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#updatepackage)

***

### updateStoreItem()

> **updateStoreItem**(`pkg`): `Promise`\<`void`\>

Defined in: [src/apps/user/appstore/runtime.ts:315](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L315)

#### Parameters

##### pkg

[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`updateStoreItem`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#updatestoreitem)

***

### viewImage()

> **viewImage**(`url`, `name?`): `Promise`\<`void`\>

Defined in: [src/apps/user/appstore/runtime.ts:427](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/appstore/runtime.ts#L427)

#### Parameters

##### url

`string`

##### name?

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppStoreRuntime`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md).[`viewImage`](../../../../../interfaces/runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md#viewimage)
