[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/server/bughunt](../README.md) / BugHuntProc

# Interface: BugHuntProc

Defined in: [src/types/server/bughunt.ts:84](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L84)

## Extends

- [`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean`

Defined in: [src/interfaces/IProcess.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L11)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`_criticalProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../apps/accelerator/type-aliases/AppKeyCombinations.md)

Defined in: [src/interfaces/IAppProcess.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L25)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`acceleratorStore`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/interfaces/IAppProcess.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L27)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`altMenu`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../apps/app/type-aliases/AppProcessData.md)

Defined in: [src/interfaces/IAppProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L17)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`app`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L30)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`blinking`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#blinking)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\>

Defined in: [src/interfaces/IAppProcess.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L18)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`componentMount`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#componentmount)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../apps/app/type-aliases/AppContextMenu.md)

Defined in: [src/interfaces/IAppProcess.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L26)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`contextMenu`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string`

Defined in: [src/interfaces/IAppProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L14)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`crashReason`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#crashreason)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/interfaces/IProcess.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L6)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`dispatch`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/interfaces/IAppProcess.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L29)

#### Inherited from

[`IWriterRuntime`](../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`draggable`](../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#draggable)

***

### invalidateCaches

> **invalidateCaches**: (`restoreSelected?`) => `Promise`\<`void`\>

Defined in: [src/types/server/bughunt.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L85)

#### Parameters

##### restoreSelected?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### name

> **name**: `string`

Defined in: [src/interfaces/IProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L9)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`name`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#name)

***

### overridePopulatable

> **overridePopulatable**: `boolean`

Defined in: [src/interfaces/IAppProcess.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L21)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`overridePopulatable`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/interfaces/IProcess.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L8)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`parentPid`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/interfaces/IProcess.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L7)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`pid`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../system/process/type-aliases/RenderArgs.md)

Defined in: [src/interfaces/IAppProcess.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L24)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`renderArgs`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#renderargs)

***

### safeMode

> **safeMode**: `boolean`

Defined in: [src/interfaces/IAppProcess.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L23)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`safeMode`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#safemode)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [src/interfaces/IProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L12)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`sourceUrl`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#sourceurl)

***

### STATE

> **STATE**: [`ProcessState`](../../../system/process/type-aliases/ProcessState.md)

Defined in: [src/interfaces/IProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L13)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`STATE`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#state)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L22)

#### Inherited from

[`IWriterRuntime`](../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md).[`toastMessage`](../../../../interfaces/runtimes/IWriterRuntime/interfaces/IWriterRuntime.md#toastmessage)

***

### username

> **username**: `string`

Defined in: [src/interfaces/IAppProcess.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L20)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`username`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../user/interfaces/UserPreferences.md)\>

Defined in: [src/interfaces/IAppProcess.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L19)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`userPreferences`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L28)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`windowFullscreen`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L16)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`windowIcon`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L15)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`windowTitle`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#windowtitle)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/interfaces/IProcess.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L10)

##### Returns

`boolean`

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`_disposed`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/interfaces/IProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L14)

##### Returns

`number`

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`MEMORY`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#memory)

## Methods

### \_\_render\_\_()

> **\_\_render\_\_**(`body`): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L36)

#### Parameters

##### body

`HTMLDivElement`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`__render__`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L15)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`__start`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IAppProcess.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`__stop`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#__stop)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/interfaces/IAppProcess.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L59)

#### Returns

[`IApplicationStorage`](../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`appStore`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L63)

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`blink`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#blink)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`BugHuntProc` \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L39)

#### Returns

`Promise`\<`BugHuntProc` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`closeIfSecondInstance`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#closeifsecondinstance)

***

### closeWindow()

> **closeWindow**(`kill?`): `Promise`\<`boolean` \| `void`\>

Defined in: [src/interfaces/IAppProcess.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L34)

#### Parameters

##### kill?

`boolean`

#### Returns

`Promise`\<`boolean` \| `void`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`closeWindow`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`CrashDetection`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#crashdetection)

***

### elevate()

> **elevate**(`id`): `Promise`\<`unknown`\>

Defined in: [src/interfaces/IAppProcess.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L58)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`elevate`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#elevate)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/interfaces/IAppProcess.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L41)

#### Returns

`HTMLDivElement`

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`getBody`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#getbody)

***

### getIcon()

> **getIcon**(`id`): `Promise`\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L60)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`getIcon`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#geticon)

***

### getIconCached()

> **getIconCached**(`id`): `string`

Defined in: [src/interfaces/IAppProcess.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L61)

#### Parameters

##### id

`string`

#### Returns

`string`

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`getIconCached`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#geticoncached)

***

### getIconStore()

> **getIconStore**(`id`): [`ReadableStore`](../../../shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L62)

#### Parameters

##### id

`string`

#### Returns

[`ReadableStore`](../../../shared/writable/type-aliases/ReadableStore.md)\<`string`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`getIconStore`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `BugHuntProc`[]

Defined in: [src/interfaces/IAppProcess.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L38)

#### Returns

`BugHuntProc`[]

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`getSingleton`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/interfaces/IAppProcess.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L40)

#### Returns

`HTMLDivElement`

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`getWindow`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#getwindow)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/interfaces/IAppProcess.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L42)

#### Returns

`boolean`

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`hasOverlays`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L33)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`HideToast`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#hidetoast)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`killSelf`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#killself)

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L31)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`onClose`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#onclose)

***

### render()

> **render**(`args`): `any`

Defined in: [src/interfaces/IAppProcess.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L35)

#### Parameters

##### args

[`RenderArgs`](../../../system/process/type-aliases/RenderArgs.md)

#### Returns

`any`

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`render`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#render)

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/IProcess.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L18)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`requestFileLock`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#requestfilelock)

***

### setSource()

> **setSource**(`source`): `void`

Defined in: [src/interfaces/IProcess.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L20)

#### Parameters

##### source

`string`

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`setSource`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#setsource)

***

### ShowToast()

> **ShowToast**(`toast`, `durationMs?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L32)

#### Parameters

##### toast

[`ToastMessage`](../../../apps/app/interfaces/ToastMessage.md)

##### durationMs?

`number`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`ShowToast`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#showtoast)

***

### spawnApp()

> **spawnApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L48)

#### Type Parameters

##### T

`T` *extends* [`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md) = [`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`spawnApp`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#spawnapp)

***

### spawnOverlay()

> **spawnOverlay**(`id`, ...`args`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L47)

#### Parameters

##### id

`string`

##### args

...`any`[]

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`spawnOverlay`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#spawnoverlay)

***

### spawnOverlayApp()

> **spawnOverlayApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L53)

#### Type Parameters

##### T

`T` *extends* [`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md) = [`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`spawnOverlayApp`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#spawnoverlayapp)

***

### startKeyboardShortcutListener()

> **startKeyboardShortcutListener**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L43)

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`startKeyboardShortcutListener`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#startkeyboardshortcutlistener)

***

### stopKeyboardShortcutListener()

> **stopKeyboardShortcutListener**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L44)

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`stopKeyboardShortcutListener`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#stopkeyboardshortcutlistener)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L46)

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`unfocusActiveElement`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#unfocusactiveelement)

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/IProcess.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L19)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`unlockFile`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#unlockfile)
