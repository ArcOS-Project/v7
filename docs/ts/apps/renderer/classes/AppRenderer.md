[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/apps/renderer](../README.md) / AppRenderer

# Class: AppRenderer

Defined in: [src/ts/apps/renderer.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L22)

## Extends

- [`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md)

## Implements

- [`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md)

## Constructors

### Constructor

> **new AppRenderer**(`pid`, `parentPid`, `target`): `AppRenderer`

Defined in: [src/ts/apps/renderer.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L33)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### target

`string`

#### Returns

`AppRenderer`

#### Overrides

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`constructor`](../../../kernel/mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `true`

Defined in: [src/ts/apps/renderer.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L29)

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`_criticalProcess`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#_criticalprocess)

#### Overrides

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../../kernel/mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### appStore

> **appStore**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`Map`\<`string`, [`AppProcessData`](../../../../types/apps/app/type-aliases/AppProcessData.md)\>\>

Defined in: [src/ts/apps/renderer.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L27)

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`appStore`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#appstore)

***

### currentState

> **currentState**: `number`[] = `[]`

Defined in: [src/ts/apps/renderer.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L23)

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`currentState`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#currentstate)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`dispatch`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#dispatch)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`dispatch`](../../../kernel/mods/stack/process/instance/classes/Process.md#dispatch)

***

### focusedPid

> **focusedPid**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`number`\>

Defined in: [src/ts/apps/renderer.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L26)

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`focusedPid`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#focusedpid)

***

### lastInteract?

> `optional` **lastInteract?**: [`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

Defined in: [src/ts/apps/renderer.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L28)

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`lastInteract`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#lastinteract)

***

### maxZIndex

> **maxZIndex**: `number` = `1e6`

Defined in: [src/ts/apps/renderer.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L25)

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`maxZIndex`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#maxzindex)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`name`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#name)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`name`](../../../kernel/mods/stack/process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`parentPid`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#parentpid)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`parentPid`](../../../kernel/mods/stack/process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`pid`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#pid)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`pid`](../../../kernel/mods/stack/process/instance/classes/Process.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`sourceUrl`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#sourceurl)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`sourceUrl`](../../../kernel/mods/stack/process/instance/classes/Process.md#sourceurl)

***

### target

> **target**: `HTMLDivElement`

Defined in: [src/ts/apps/renderer.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L24)

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`target`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#target)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`_disposed`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#_disposed)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`_disposed`](../../../kernel/mods/stack/process/instance/classes/Process.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`MEMORY`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#memory)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`MEMORY`](../../../kernel/mods/stack/process/instance/classes/Process.md#memory)

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

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`STATE`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#state)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`STATE`](../../../kernel/mods/stack/process/instance/classes/Process.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`__start`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#__start)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`__start`](../../../kernel/mods/stack/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`__stop`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#__stop)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`__stop`](../../../kernel/mods/stack/process/instance/classes/Process.md#__stop)

***

### \_renderAltMenu()

> **\_renderAltMenu**(`process`): `HTMLDivElement`

Defined in: [src/ts/apps/renderer.ts:358](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L358)

#### Parameters

##### process

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`_renderAltMenu`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#_renderaltmenu)

***

### \_renderTitlebar()

> **\_renderTitlebar**(`process`): `HTMLDivElement` \| `undefined`

Defined in: [src/ts/apps/renderer.ts:265](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L265)

#### Parameters

##### process

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

#### Returns

`HTMLDivElement` \| `undefined`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`_renderTitlebar`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#_rendertitlebar)

***

### \_renderToast()

> **\_renderToast**(`process`): `HTMLDivElement`

Defined in: [src/ts/apps/renderer.ts:419](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L419)

#### Parameters

##### process

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

#### Returns

`HTMLDivElement`

***

### \_resizeGrabbers()

> **\_resizeGrabbers**(`process`, `window`): `undefined`

Defined in: [src/ts/apps/renderer.ts:445](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L445)

#### Parameters

##### process

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

##### window

`HTMLDivElement`

#### Returns

`undefined`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`_resizeGrabbers`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#_resizegrabbers)

***

### \_resizer()

> **\_resizer**(`window`, `resizer`): `HTMLDivElement`

Defined in: [src/ts/apps/renderer.ts:466](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L466)

#### Parameters

##### window

`HTMLDivElement`

##### resizer

[`WindowResizer`](../../../../types/apps/app/interfaces/WindowResizer.md)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`_resizer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#_resizer)

***

### \_windowClasses()

> **\_windowClasses**(`proc`, `window`, `data`): `void`

Defined in: [src/ts/apps/renderer.ts:155](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L155)

#### Parameters

##### proc

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

##### window

`HTMLDivElement`

##### data

[`App`](../../../../types/apps/app/interfaces/App.md)

#### Returns

`void`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`_windowClasses`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#_windowclasses)

***

### \_windowDraggable()

> **\_windowDraggable**(`proc`, `window`): `void`

Defined in: [src/ts/apps/renderer.ts:212](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L212)

#### Parameters

##### proc

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

##### window

`HTMLDivElement`

#### Returns

`void`

***

### \_windowEvents()

> **\_windowEvents**(`proc`, `window`, `titlebar`, `data`): `void`

Defined in: [src/ts/apps/renderer.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L226)

#### Parameters

##### proc

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

##### window

`HTMLDivElement`

##### titlebar

`HTMLDivElement` \| `undefined`

##### data

[`App`](../../../../types/apps/app/interfaces/App.md)

#### Returns

`void`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`_windowEvents`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#_windowevents)

***

### centerWindow()

> **centerWindow**(`proc`): `Promise`\<`void`\>

Defined in: [src/ts/apps/renderer.ts:194](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L194)

#### Parameters

##### proc

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`centerWindow`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#centerwindow)

***

### disposedCheck()

> **disposedCheck**(): `void`

Defined in: [src/ts/apps/renderer.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L56)

#### Returns

`void`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`disposedCheck`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#disposedcheck)

***

### focusPid()

> **focusPid**(`pid`): `void`

Defined in: [src/ts/apps/renderer.ts:249](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L249)

#### Parameters

##### pid

`number`

#### Returns

`void`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`focusPid`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#focuspid)

***

### getAppInstances()

> **getAppInstances**(`id`, `originPid?`): [`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)[]

Defined in: [src/ts/apps/renderer.ts:716](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L716)

#### Parameters

##### id

`string`

##### originPid?

`number`

#### Returns

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)[]

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`getAppInstances`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#getappinstances)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`killSelf`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#killself)

#### Inherited from

`Process.killSelf`

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

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`Log`](../../../kernel/mods/stack/process/instance/classes/Process.md#log)

***

### notifyCrash()

> **notifyCrash**(`data`, `reason`, `process?`): `Promise`\<`void`\>

Defined in: [src/ts/apps/renderer.ts:730](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L730)

#### Parameters

##### data

[`App`](../../../../types/apps/app/interfaces/App.md)

##### reason

`any`

##### process?

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`notifyCrash`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#notifycrash)

***

### remove()

> **remove**(`pid`): `Promise`\<`void`\>

Defined in: [src/ts/apps/renderer.ts:559](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L559)

#### Parameters

##### pid

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`remove`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#remove)

***

### render()

> **render**(`process`, `renderTarget`): `Promise`\<`void`\>

Defined in: [src/ts/apps/renderer.ts:64](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L64)

#### Parameters

##### process

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

##### renderTarget

`HTMLDivElement` \| `undefined`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`render`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#render)

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

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`requestFileLock`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#requestfilelock)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`requestFileLock`](../../../kernel/mods/stack/process/instance/classes/Process.md#requestfilelock)

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

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`setSource`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#setsource)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`setSource`](../../../kernel/mods/stack/process/instance/classes/Process.md#setsource)

***

### snapWindow()

> **snapWindow**(`pid`, `variant`): `void`

Defined in: [src/ts/apps/renderer.ts:659](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L659)

#### Parameters

##### pid

`number`

##### variant

`string`

#### Returns

`void`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`snapWindow`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#snapwindow)

***

### start()

> `protected` **start**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/renderer.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L47)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`start`](../../../kernel/mods/stack/process/instance/classes/Process.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`stop`](../../../kernel/mods/stack/process/instance/classes/Process.md#stop)

***

### toggleFullscreen()

> **toggleFullscreen**(`pid`): `void`

Defined in: [src/ts/apps/renderer.ts:696](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L696)

#### Parameters

##### pid

`number`

#### Returns

`void`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`toggleFullscreen`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#togglefullscreen)

***

### toggleMaximize()

> **toggleMaximize**(`pid`): `void`

Defined in: [src/ts/apps/renderer.ts:587](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L587)

#### Parameters

##### pid

`number`

#### Returns

`void`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`toggleMaximize`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#togglemaximize)

***

### toggleMinimize()

> **toggleMinimize**(`pid`): `void`

Defined in: [src/ts/apps/renderer.ts:676](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L676)

#### Parameters

##### pid

`number`

#### Returns

`void`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`toggleMinimize`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#toggleminimize)

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

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`unlockFile`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#unlockfile)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../../kernel/mods/stack/process/instance/classes/Process.md#unlockfile)

***

### unMinimize()

> **unMinimize**(`pid`): `void`

Defined in: [src/ts/apps/renderer.ts:623](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L623)

#### Parameters

##### pid

`number`

#### Returns

`void`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`unMinimize`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#unminimize)

***

### unsnapWindow()

> **unsnapWindow**(`pid`, `dispatch?`): `void`

Defined in: [src/ts/apps/renderer.ts:640](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L640)

#### Parameters

##### pid

`number`

##### dispatch?

`boolean` = `true`

#### Returns

`void`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`unsnapWindow`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#unsnapwindow)

***

### updateDraggableDisabledState()

> **updateDraggableDisabledState**(`pid`, `window`): `void`

Defined in: [src/ts/apps/renderer.ts:607](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/renderer.ts#L607)

#### Parameters

##### pid

`number`

##### window

`HTMLDivElement`

#### Returns

`void`

#### Implementation of

[`IAppRenderer`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md).[`updateDraggableDisabledState`](../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md#updatedraggabledisabledstate)
