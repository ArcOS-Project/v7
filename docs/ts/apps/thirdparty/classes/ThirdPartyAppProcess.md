[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/apps/thirdparty](../README.md) / ThirdPartyAppProcess

# Class: ThirdPartyAppProcess

Defined in: [src/ts/apps/thirdparty.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/thirdparty.ts#L9)

## Extends

- [`AppProcess`](../../process/classes/AppProcess.md)

## Implements

- [`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md)

## Constructors

### Constructor

> **new ThirdPartyAppProcess**(`pid`, `parentPid`, `app`, `operationId`, `workingDirectory`, ...`args`): `ThirdPartyAppProcess`

Defined in: [src/ts/apps/thirdparty.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/thirdparty.ts#L20)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../types/apps/app/type-aliases/AppProcessData.md)

##### operationId

`string`

##### workingDirectory

`string`

##### args

...`any`[]

#### Returns

`ThirdPartyAppProcess`

#### Overrides

[`AppProcess`](../../process/classes/AppProcess.md).[`constructor`](../../process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`_criticalProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#_criticalprocess)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`_criticalProcess`](../../process/classes/AppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L46)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`acceleratorStore`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#acceleratorstore)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`acceleratorStore`](../../process/classes/AppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`altMenu`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#altmenu)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`altMenu`](../../process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`app`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#app)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`app`](../../process/classes/AppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`blinking`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#blinking)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`blinking`](../../process/classes/AppProcess.md#blinking)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`componentMount`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#componentmount)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`componentMount`](../../process/classes/AppProcess.md#componentmount)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../types/apps/app/type-aliases/AppContextMenu.md) = `{}`

Defined in: [src/ts/apps/process.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L47)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`contextMenu`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#contextmenu)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`contextMenu`](../../process/classes/AppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`crashReason`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#crashreason)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`crashReason`](../../process/classes/AppProcess.md#crashreason)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`dispatch`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#dispatch)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`dispatch`](../../process/classes/AppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`draggable`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#draggable)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`draggable`](../../process/classes/AppProcess.md#draggable)

***

### elements

> **elements**: `Record`\<`string`, `Element`\> = `{}`

Defined in: [src/ts/apps/thirdparty.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/thirdparty.ts#L15)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`elements`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#elements)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../types/system/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L44)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`elevations`](../../process/classes/AppProcess.md#elevations)

***

### handler

> **handler**: [`IProcessHandler`](../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md) = `Stack`

Defined in: [src/ts/apps/thirdparty.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/thirdparty.ts#L16)

***

### mutationLock

> **mutationLock**: `boolean` = `false`

Defined in: [src/ts/apps/thirdparty.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/thirdparty.ts#L13)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`mutationLock`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#mutationlock)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`name`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#name)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`name`](../../process/classes/AppProcess.md#name)

***

### operationId

> **operationId**: `string`

Defined in: [src/ts/apps/thirdparty.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/thirdparty.ts#L12)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`operationId`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#operationid)

***

### overlayStore

> `protected` **overlayStore**: `Record`\<`string`, [`App`](../../../../types/apps/app/interfaces/App.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L43)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`overlayStore`](../../process/classes/AppProcess.md#overlaystore)

***

### overridePopulatable

> **overridePopulatable**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L39)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`overridePopulatable`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#overridepopulatable)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`overridePopulatable`](../../process/classes/AppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`parentPid`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#parentpid)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`parentPid`](../../process/classes/AppProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`pid`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#pid)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`pid`](../../process/classes/AppProcess.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`renderArgs`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#renderargs)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`renderArgs`](../../process/classes/AppProcess.md#renderargs)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L42)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`safeMode`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#safemode)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`safeMode`](../../process/classes/AppProcess.md#safemode)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`sourceUrl`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#sourceurl)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`sourceUrl`](../../process/classes/AppProcess.md#sourceurl)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`toastMessage`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#toastmessage)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`toastMessage`](../../process/classes/AppProcess.md#toastmessage)

***

### urlCache

> **urlCache**: `Record`\<`string`, `string`\> = `{}`

Defined in: [src/ts/apps/thirdparty.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/thirdparty.ts#L14)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`urlCache`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#urlcache)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`username`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#username)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`username`](../../process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`userPreferences`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#userpreferences)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`userPreferences`](../../process/classes/AppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`windowFullscreen`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#windowfullscreen)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`windowFullscreen`](../../process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`windowIcon`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#windowicon)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`windowIcon`](../../process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`windowTitle`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#windowtitle)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`windowTitle`](../../process/classes/AppProcess.md#windowtitle)

***

### workingDirectory

> **workingDirectory**: `string`

Defined in: [src/ts/apps/thirdparty.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/thirdparty.ts#L11)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`workingDirectory`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#workingdirectory)

***

### TPA\_REV

> `readonly` `static` **TPA\_REV**: `2` = `2`

Defined in: [src/ts/apps/thirdparty.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/thirdparty.ts#L10)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`_disposed`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#_disposed)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`_disposed`](../../process/classes/AppProcess.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`MEMORY`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#memory)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`MEMORY`](../../process/classes/AppProcess.md#memory)

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/apps/process.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L52)

##### Returns

[`IShellRuntime`](../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`shell`](../../process/classes/AppProcess.md#shell)

***

### STATE

#### Get Signature

> **get** **STATE**(): [`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L17)

##### Returns

[`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

#### Set Signature

> **set** **STATE**(`value`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L21)

##### Parameters

###### value

[`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

##### Returns

`void`

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`STATE`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#state)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`STATE`](../../process/classes/AppProcess.md#state)

## Methods

### \_\_render\_\_()

> **\_\_render\_\_**(`body`): `Promise`\<`void`\>

Defined in: [src/ts/apps/thirdparty.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/thirdparty.ts#L39)

#### Parameters

##### body

`HTMLDivElement`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`__render__`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#__render__)

#### Overrides

[`AppProcess`](../../process/classes/AppProcess.md).[`__render__`](../../process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`__start`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#__start)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`__start`](../../process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`__stop`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#__stop)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`__stop`](../../process/classes/AppProcess.md#__stop)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`appStore`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#appstore)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`appStore`](../../process/classes/AppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`blink`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#blink)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`blink`](../../process/classes/AppProcess.md#blink)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`ThirdPartyAppProcess` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`ThirdPartyAppProcess` \| `undefined`\>

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`closeIfSecondInstance`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#closeifsecondinstance)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`closeIfSecondInstance`](../../process/classes/AppProcess.md#closeifsecondinstance)

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

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`closeWindow`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#closewindow)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`closeWindow`](../../process/classes/AppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`CrashDetection`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#crashdetection)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`CrashDetection`](../../process/classes/AppProcess.md#crashdetection)

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

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`elevate`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#elevate)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`elevate`](../../process/classes/AppProcess.md#elevate)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`getBody`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#getbody)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`getBody`](../../process/classes/AppProcess.md#getbody)

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

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`getIcon`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#geticon)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`getIcon`](../../process/classes/AppProcess.md#geticon)

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

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`getIconCached`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#geticoncached)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`getIconCached`](../../process/classes/AppProcess.md#geticoncached)

***

### getIconStore()

> **getIconStore**(`id`): [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:387](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L387)

#### Parameters

##### id

`string`

#### Returns

[`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`getIconStore`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#geticonstore)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`getIconStore`](../../process/classes/AppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `ThirdPartyAppProcess`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`ThirdPartyAppProcess`[]

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`getSingleton`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#getsingleton)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`getSingleton`](../../process/classes/AppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`getWindow`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#getwindow)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`getWindow`](../../process/classes/AppProcess.md#getwindow)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`hasOverlays`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#hasoverlays)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`hasOverlays`](../../process/classes/AppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`HideToast`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#hidetoast)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`HideToast`](../../process/classes/AppProcess.md#hidetoast)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`killSelf`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#killself)

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

[`LogLevel`](../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`Log`](../../process/classes/AppProcess.md#log)

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/ts/apps/process.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L103)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`onClose`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#onclose)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`onClose`](../../process/classes/AppProcess.md#onclose)

***

### render()

> **render**(`args`): `any`

Defined in: [src/ts/apps/process.ts:163](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L163)

#### Parameters

##### args

[`RenderArgs`](../../../../types/system/process/type-aliases/RenderArgs.md)

#### Returns

`any`

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`render`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#render)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`render`](../../process/classes/AppProcess.md#render)

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

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`requestFileLock`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#requestfilelock)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`requestFileLock`](../../process/classes/AppProcess.md#requestfilelock)

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

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`setSource`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#setsource)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`setSource`](../../process/classes/AppProcess.md#setsource)

***

### ShowToast()

> **ShowToast**(`toast`, `durationMs?`): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:107](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L107)

#### Parameters

##### toast

[`ToastMessage`](../../../../types/apps/app/interfaces/ToastMessage.md)

##### durationMs?

`number` = `3000`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`ShowToast`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#showtoast)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`ShowToast`](../../process/classes/AppProcess.md#showtoast)

***

### spawnApp()

> **spawnApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:362](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L362)

#### Type Parameters

##### T

`T` *extends* [`IProcess`](../../../../interfaces/IProcess/interfaces/IProcess.md) = [`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

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

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`spawnApp`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#spawnapp)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`spawnApp`](../../process/classes/AppProcess.md#spawnapp)

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

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`spawnOverlay`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#spawnoverlay)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`spawnOverlay`](../../process/classes/AppProcess.md#spawnoverlay)

***

### spawnOverlayApp()

> **spawnOverlayApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:366](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L366)

#### Type Parameters

##### T

`T` *extends* [`IProcess`](../../../../interfaces/IProcess/interfaces/IProcess.md) = [`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

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

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`spawnOverlayApp`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#spawnoverlayapp)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`spawnOverlayApp`](../../process/classes/AppProcess.md#spawnoverlayapp)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L49)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`start`](../../process/classes/AppProcess.md#start)

***

### startKeyboardShortcutListener()

> **startKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:270](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L270)

#### Returns

`void`

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`startKeyboardShortcutListener`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#startkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`startKeyboardShortcutListener`](../../process/classes/AppProcess.md#startkeyboardshortcutlistener)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`stop`](../../process/classes/AppProcess.md#stop)

***

### stopKeyboardShortcutListener()

> **stopKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:276](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L276)

#### Returns

`void`

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`stopKeyboardShortcutListener`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#stopkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`stopKeyboardShortcutListener`](../../process/classes/AppProcess.md#stopkeyboardshortcutlistener)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`unfocusActiveElement`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#unfocusactiveelement)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`unfocusActiveElement`](../../process/classes/AppProcess.md#unfocusactiveelement)

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

[`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md).[`unlockFile`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md#unlockfile)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`unlockFile`](../../process/classes/AppProcess.md#unlockfile)
