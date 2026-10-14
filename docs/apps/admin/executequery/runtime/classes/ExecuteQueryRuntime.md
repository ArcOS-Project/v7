[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/admin/executequery/runtime](../README.md) / ExecuteQueryRuntime

# Class: ExecuteQueryRuntime

Defined in: [src/apps/admin/executequery/runtime.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L27)

## Extends

- [`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md)

## Implements

- [`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md)

## Constructors

### Constructor

> **new ExecuteQueryRuntime**(`pid`, `parentPid`, `app`): `ExecuteQueryRuntime`

Defined in: [src/apps/admin/executequery/runtime.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L49)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

#### Returns

`ExecuteQueryRuntime`

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`constructor`](../../../../../ts/apps/process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`_criticalProcess`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#_criticalprocess)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_criticalProcess`](../../../../../ts/apps/process/classes/AppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L46)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`acceleratorStore`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#acceleratorstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`acceleratorStore`](../../../../../ts/apps/process/classes/AppProcess.md#acceleratorstore)

***

### admin

> **admin**: [`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md)

Defined in: [src/apps/admin/executequery/runtime.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L39)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`admin`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#admin)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`altMenu`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#altmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`altMenu`](../../../../../ts/apps/process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`app`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#app)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`app`](../../../../../ts/apps/process/classes/AppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`blinking`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#blinking)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blinking`](../../../../../ts/apps/process/classes/AppProcess.md#blinking)

***

### columns

> **columns**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`[]\>

Defined in: [src/apps/admin/executequery/runtime.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L34)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`columns`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#columns)

***

### columnTypes

> **columnTypes**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`[]\>

Defined in: [src/apps/admin/executequery/runtime.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L35)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`columnTypes`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#columntypes)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`componentMount`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#componentmount)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`componentMount`](../../../../../ts/apps/process/classes/AppProcess.md#componentmount)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../../types/apps/app/type-aliases/AppContextMenu.md) = `{}`

Defined in: [src/ts/apps/process.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L47)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`contextMenu`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#contextmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`contextMenu`](../../../../../ts/apps/process/classes/AppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`crashReason`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#crashreason)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`crashReason`](../../../../../ts/apps/process/classes/AppProcess.md#crashreason)

***

### dataSource

> **dataSource**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`any`[]\>

Defined in: [src/apps/admin/executequery/runtime.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L29)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`dataSource`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#datasource)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`dispatch`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#dispatch)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`dispatch`](../../../../../ts/apps/process/classes/AppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`draggable`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#draggable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`draggable`](../../../../../ts/apps/process/classes/AppProcess.md#draggable)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../../types/system/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L44)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevations`](../../../../../ts/apps/process/classes/AppProcess.md#elevations)

***

### expressions

> **expressions**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`QueryExpressionsType`](../../types/type-aliases/QueryExpressionsType.md)\>

Defined in: [src/apps/admin/executequery/runtime.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L36)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`expressions`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#expressions)

***

### loading

> **loading**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/admin/executequery/runtime.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L31)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`loading`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#loading)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`name`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#name)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`name`](../../../../../ts/apps/process/classes/AppProcess.md#name)

***

### overlayStore

> `protected` **overlayStore**: `Record`\<`string`, [`App`](../../../../../types/apps/app/interfaces/App.md)\>

Defined in: [src/apps/admin/executequery/runtime.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L42)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overlayStore`](../../../../../ts/apps/process/classes/AppProcess.md#overlaystore)

***

### overridePopulatable

> **overridePopulatable**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L39)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`overridePopulatable`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#overridepopulatable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overridePopulatable`](../../../../../ts/apps/process/classes/AppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`parentPid`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#parentpid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`parentPid`](../../../../../ts/apps/process/classes/AppProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`pid`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#pid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`pid`](../../../../../ts/apps/process/classes/AppProcess.md#pid)

***

### queryDesignations

> `readonly` **queryDesignations**: [`QueryDesignationsType`](../../types/type-aliases/QueryDesignationsType.md)

Defined in: [src/apps/admin/executequery/runtime.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L41)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`queryDesignations`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#querydesignations)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`renderArgs`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#renderargs)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`renderArgs`](../../../../../ts/apps/process/classes/AppProcess.md#renderargs)

***

### result

> **result**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`any`[]\>

Defined in: [src/apps/admin/executequery/runtime.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L28)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`result`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#result)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L42)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`safeMode`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#safemode)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`safeMode`](../../../../../ts/apps/process/classes/AppProcess.md#safemode)

***

### selectedSource

> **selectedSource**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`""` \| `"tokens"` \| `"users"` \| `"indexes"` \| `"activities"` \| `"shares"` \| `"logs"` \| `"reports"` \| `"totp"` \| `"auditlog"` \| `"ips"`\>

Defined in: [src/apps/admin/executequery/runtime.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L30)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`selectedSource`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#selectedsource)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`sourceUrl`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#sourceurl)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`sourceUrl`](../../../../../ts/apps/process/classes/AppProcess.md#sourceurl)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`toastMessage`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#toastmessage)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`toastMessage`](../../../../../ts/apps/process/classes/AppProcess.md#toastmessage)

***

### totalCount

> **totalCount**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`number`\>

Defined in: [src/apps/admin/executequery/runtime.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L33)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`totalCount`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#totalcount)

***

### truncated

> **truncated**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/admin/executequery/runtime.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L32)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`truncated`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#truncated)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`username`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#username)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`username`](../../../../../ts/apps/process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`userPreferences`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#userpreferences)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`userPreferences`](../../../../../ts/apps/process/classes/AppProcess.md#userpreferences)

***

### users

> **users**: [`ExpandedUserInfo`](../../../../../types/user/type-aliases/ExpandedUserInfo.md)[] = `[]`

Defined in: [src/apps/admin/executequery/runtime.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L40)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`users`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#users)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`windowFullscreen`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#windowfullscreen)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowFullscreen`](../../../../../ts/apps/process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`windowIcon`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#windowicon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowIcon`](../../../../../ts/apps/process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`windowTitle`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#windowtitle)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`_disposed`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#_disposed)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`MEMORY`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#memory)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`STATE`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#state)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`__render__`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#__render__)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__render__`](../../../../../ts/apps/process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`__start`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#__start)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__start`](../../../../../ts/apps/process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`__stop`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#__stop)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__stop`](../../../../../ts/apps/process/classes/AppProcess.md#__stop)

***

### addExpression()

> **addExpression**(): `void`

Defined in: [src/apps/admin/executequery/runtime.ts:289](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L289)

#### Returns

`void`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`addExpression`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#addexpression)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`appStore`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#appstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`appStore`](../../../../../ts/apps/process/classes/AppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`blink`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#blink)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blink`](../../../../../ts/apps/process/classes/AppProcess.md#blink)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`ExecuteQueryRuntime` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`ExecuteQueryRuntime` \| `undefined`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`closeIfSecondInstance`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#closeifsecondinstance)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`closeWindow`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#closewindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeWindow`](../../../../../ts/apps/process/classes/AppProcess.md#closewindow)

***

### comparison\_doesNotInclude()

> **comparison\_doesNotInclude**(`value`, `__namedParameters`, `valueIsObject?`): `boolean`

Defined in: [src/apps/admin/executequery/runtime.ts:215](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L215)

#### Parameters

##### value

`any`

##### \_\_namedParameters

[`QueryExpression`](../../types/interfaces/QueryExpression.md)

##### valueIsObject?

`boolean` = `false`

#### Returns

`boolean`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`comparison_doesNotInclude`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#comparison_doesnotinclude)

***

### comparison\_includes()

> **comparison\_includes**(`value`, `__namedParameters`, `valueIsObject?`): `any`

Defined in: [src/apps/admin/executequery/runtime.ts:201](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L201)

#### Parameters

##### value

`any`

##### \_\_namedParameters

[`QueryExpression`](../../types/interfaces/QueryExpression.md)

##### valueIsObject?

`boolean` = `false`

#### Returns

`any`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`comparison_includes`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#comparison_includes)

***

### comparison\_isBoolean()

> **comparison\_isBoolean**(`value`, `__namedParameters`): `boolean`

Defined in: [src/apps/admin/executequery/runtime.ts:237](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L237)

#### Parameters

##### value

`any`

##### \_\_namedParameters

[`QueryExpression`](../../types/interfaces/QueryExpression.md)

#### Returns

`boolean`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`comparison_isBoolean`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#comparison_isboolean)

***

### comparison\_isDefined()

> **comparison\_isDefined**(`value`): `boolean`

Defined in: [src/apps/admin/executequery/runtime.ts:229](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L229)

#### Parameters

##### value

`any`

#### Returns

`boolean`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`comparison_isDefined`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#comparison_isdefined)

***

### comparison\_isEqualTo()

> **comparison\_isEqualTo**(`value`, `__namedParameters`, `valueIsObject?`): `boolean`

Defined in: [src/apps/admin/executequery/runtime.ts:185](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L185)

#### Parameters

##### value

`any`

##### \_\_namedParameters

[`QueryExpression`](../../types/interfaces/QueryExpression.md)

##### valueIsObject?

`boolean` = `false`

#### Returns

`boolean`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`comparison_isEqualTo`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#comparison_isequalto)

***

### comparison\_isGreaterThan()

> **comparison\_isGreaterThan**(`value`, `__namedParameters`): `boolean`

Defined in: [src/apps/admin/executequery/runtime.ts:249](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L249)

#### Parameters

##### value

`any`

##### \_\_namedParameters

[`QueryExpression`](../../types/interfaces/QueryExpression.md)

#### Returns

`boolean`

***

### comparison\_isGreaterThanOrEqualTo()

> **comparison\_isGreaterThanOrEqualTo**(`value`, `__namedParameters`): `boolean`

Defined in: [src/apps/admin/executequery/runtime.ts:253](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L253)

#### Parameters

##### value

`any`

##### \_\_namedParameters

[`QueryExpression`](../../types/interfaces/QueryExpression.md)

#### Returns

`boolean`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`comparison_isGreaterThanOrEqualTo`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#comparison_isgreaterthanorequalto)

***

### comparison\_isLessThan()

> **comparison\_isLessThan**(`value`, `__namedParameters`): `boolean`

Defined in: [src/apps/admin/executequery/runtime.ts:241](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L241)

#### Parameters

##### value

`any`

##### \_\_namedParameters

[`QueryExpression`](../../types/interfaces/QueryExpression.md)

#### Returns

`boolean`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`comparison_isLessThan`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#comparison_islessthan)

***

### comparison\_isLessThanOrEqualTo()

> **comparison\_isLessThanOrEqualTo**(`value`, `__namedParameters`): `boolean`

Defined in: [src/apps/admin/executequery/runtime.ts:245](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L245)

#### Parameters

##### value

`any`

##### \_\_namedParameters

[`QueryExpression`](../../types/interfaces/QueryExpression.md)

#### Returns

`boolean`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`comparison_isLessThanOrEqualTo`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#comparison_islessthanorequalto)

***

### comparison\_isNotDefined()

> **comparison\_isNotDefined**(`value`): `boolean`

Defined in: [src/apps/admin/executequery/runtime.ts:233](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L233)

#### Parameters

##### value

`any`

#### Returns

`boolean`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`comparison_isNotDefined`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#comparison_isnotdefined)

***

### comparison\_isNotEqualTo()

> **comparison\_isNotEqualTo**(`value`, `__namedParameters`, `valueIsObject?`): `boolean`

Defined in: [src/apps/admin/executequery/runtime.ts:193](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L193)

#### Parameters

##### value

`any`

##### \_\_namedParameters

[`QueryExpression`](../../types/interfaces/QueryExpression.md)

##### valueIsObject?

`boolean` = `false`

#### Returns

`boolean`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`comparison_isNotEqualTo`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#comparison_isnotequalto)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`CrashDetection`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#crashdetection)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`CrashDetection`](../../../../../ts/apps/process/classes/AppProcess.md#crashdetection)

***

### deleteExpression()

> **deleteExpression**(`index`): `void`

Defined in: [src/apps/admin/executequery/runtime.ts:274](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L274)

#### Parameters

##### index

`number`

#### Returns

`void`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`deleteExpression`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#deleteexpression)

***

### deleteQuery()

> **deleteQuery**(`name`): `Promise`\<`boolean`\>

Defined in: [src/apps/admin/executequery/runtime.ts:383](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L383)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`deleteQuery`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#deletequery)

***

### duplicateExpression()

> **duplicateExpression**(`index`): `void`

Defined in: [src/apps/admin/executequery/runtime.ts:260](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L260)

#### Parameters

##### index

`number`

#### Returns

`void`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`duplicateExpression`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#duplicateexpression)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`elevate`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#elevate)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevate`](../../../../../ts/apps/process/classes/AppProcess.md#elevate)

***

### evaluateExpression()

> **evaluateExpression**(`item`, `expression`): `boolean`

Defined in: [src/apps/admin/executequery/runtime.ts:141](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L141)

#### Parameters

##### item

`any`

##### expression

[`QueryExpression`](../../types/interfaces/QueryExpression.md)

#### Returns

`boolean`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`evaluateExpression`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#evaluateexpression)

***

### executeQuery()

> **executeQuery**(): `Promise`\<`void`\>

Defined in: [src/apps/admin/executequery/runtime.ts:113](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L113)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`executeQuery`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#executequery)

***

### exportResults()

> **exportResults**(): `Promise`\<`void`\>

Defined in: [src/apps/admin/executequery/runtime.ts:303](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L303)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`exportResults`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#exportresults)

***

### findMostColumnsOf()

> **findMostColumnsOf**(`input`): `string`[]

Defined in: [src/apps/admin/executequery/runtime.ts:416](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L416)

#### Parameters

##### input

`any`[]

#### Returns

`string`[]

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`findMostColumnsOf`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#findmostcolumnsof)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`getBody`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#getbody)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`getIcon`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#geticon)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`getIconCached`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#geticoncached)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`getIconStore`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#geticonstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconStore`](../../../../../ts/apps/process/classes/AppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `ExecuteQueryRuntime`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`ExecuteQueryRuntime`[]

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`getSingleton`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#getsingleton)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getSingleton`](../../../../../ts/apps/process/classes/AppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`getWindow`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#getwindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getWindow`](../../../../../ts/apps/process/classes/AppProcess.md#getwindow)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`hasOverlays`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#hasoverlays)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`hasOverlays`](../../../../../ts/apps/process/classes/AppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`HideToast`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#hidetoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`HideToast`](../../../../../ts/apps/process/classes/AppProcess.md#hidetoast)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`killSelf`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#killself)

#### Inherited from

`AppProcess.killSelf`

***

### loadQuery()

> **loadQuery**(`name`): `Promise`\<`boolean`\>

Defined in: [src/apps/admin/executequery/runtime.ts:368](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L368)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`loadQuery`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#loadquery)

***

### loadQueryDialog()

> **loadQueryDialog**(): `Promise`\<`boolean`\>

Defined in: [src/apps/admin/executequery/runtime.ts:327](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L327)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`loadQueryDialog`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#loadquerydialog)

***

### loadQueryList()

> **loadQueryList**(): `Promise`\<`string`[]\>

Defined in: [src/apps/admin/executequery/runtime.ts:339](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L339)

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`loadQueryList`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#loadquerylist)

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

### noAccessToSource()

> **noAccessToSource**(): `void`

Defined in: [src/apps/admin/executequery/runtime.ts:396](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L396)

#### Returns

`void`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`noAccessToSource`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#noaccesstosource)

***

### normalizeQueryPath()

> **normalizeQueryPath**(`name`): `string`

Defined in: [src/apps/admin/executequery/runtime.ts:389](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L389)

#### Parameters

##### name

`string`

#### Returns

`string`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`normalizeQueryPath`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#normalizequerypath)

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/ts/apps/process.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L103)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`onClose`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#onclose)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`onClose`](../../../../../ts/apps/process/classes/AppProcess.md#onclose)

***

### render()

> **render**(): `Promise`\<`void`\>

Defined in: [src/apps/admin/executequery/runtime.ts:64](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L64)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`render`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#render)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`requestFileLock`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#requestfilelock)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`requestFileLock`](../../../../../ts/apps/process/classes/AppProcess.md#requestfilelock)

***

### saveQuery()

> **saveQuery**(`name`, `data?`): `Promise`\<`void`\>

Defined in: [src/apps/admin/executequery/runtime.ts:348](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L348)

#### Parameters

##### name

`string`

##### data?

[`QueryExpressionsType`](../../types/type-aliases/QueryExpressionsType.md) = `...`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`saveQuery`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#savequery)

***

### saveQueryDialog()

> **saveQueryDialog**(): `Promise`\<`boolean`\>

Defined in: [src/apps/admin/executequery/runtime.ts:333](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L333)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`saveQueryDialog`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#savequerydialog)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`setSource`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#setsource)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`ShowToast`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#showtoast)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`spawnApp`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#spawnapp)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`spawnOverlay`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#spawnoverlay)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`spawnOverlayApp`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#spawnoverlayapp)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`spawnOverlayApp`](../../../../../ts/apps/process/classes/AppProcess.md#spawnoverlayapp)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/apps/admin/executequery/runtime.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L57)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`startKeyboardShortcutListener`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#startkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`startKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#startkeyboardshortcutlistener)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/apps/admin/executequery/runtime.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L63)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`stopKeyboardShortcutListener`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#stopkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stopKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#stopkeyboardshortcutlistener)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`unfocusActiveElement`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#unfocusactiveelement)

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

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`unlockFile`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#unlockfile)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unlockFile`](../../../../../ts/apps/process/classes/AppProcess.md#unlockfile)

***

### updateColumnTypes()

> **updateColumnTypes**(`items?`): `void`

Defined in: [src/apps/admin/executequery/runtime.ts:93](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L93)

#### Parameters

##### items?

`any`[] = `...`

#### Returns

`void`

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`updateColumnTypes`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#updatecolumntypes)

***

### updateResult()

> **updateResult**(`key`): `Promise`\<`void`\>

Defined in: [src/apps/admin/executequery/runtime.ts:69](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/admin/executequery/runtime.ts#L69)

#### Parameters

##### key

`""` \| `"tokens"` \| `"users"` \| `"indexes"` \| `"activities"` \| `"shares"` \| `"logs"` \| `"reports"` \| `"totp"` \| `"auditlog"` \| `"ips"`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IExecuteQueryRuntime`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md).[`updateResult`](../../../../../interfaces/runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md#updateresult)
