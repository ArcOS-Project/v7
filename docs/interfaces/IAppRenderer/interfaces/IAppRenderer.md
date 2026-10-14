[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/IAppRenderer](../README.md) / IAppRenderer

# Interface: IAppRenderer

Defined in: [src/interfaces/IAppRenderer.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L7)

## Extends

- [`IProcess`](../../IProcess/interfaces/IProcess.md)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean`

Defined in: [src/interfaces/IAppRenderer.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L14)

#### Overrides

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`_criticalProcess`](../../IProcess/interfaces/IProcess.md#_criticalprocess)

***

### appStore

> **appStore**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`Map`\<`string`, [`AppProcessData`](../../../types/apps/app/type-aliases/AppProcessData.md)\>\>

Defined in: [src/interfaces/IAppRenderer.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L12)

***

### currentState

> **currentState**: `number`[]

Defined in: [src/interfaces/IAppRenderer.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L8)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/interfaces/IProcess.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L6)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`dispatch`](../../IProcess/interfaces/IProcess.md#dispatch)

***

### focusedPid

> **focusedPid**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`number`\>

Defined in: [src/interfaces/IAppRenderer.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L11)

***

### lastInteract?

> `optional` **lastInteract?**: [`IAppProcess`](../../IAppProcess/interfaces/IAppProcess.md)

Defined in: [src/interfaces/IAppRenderer.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L13)

***

### maxZIndex

> **maxZIndex**: `number`

Defined in: [src/interfaces/IAppRenderer.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L10)

***

### name

> **name**: `string`

Defined in: [src/interfaces/IProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L9)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`name`](../../IProcess/interfaces/IProcess.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/interfaces/IProcess.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L8)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`parentPid`](../../IProcess/interfaces/IProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/interfaces/IProcess.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L7)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`pid`](../../IProcess/interfaces/IProcess.md#pid)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [src/interfaces/IProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L12)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`sourceUrl`](../../IProcess/interfaces/IProcess.md#sourceurl)

***

### STATE

> **STATE**: [`ProcessState`](../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/interfaces/IProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L13)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`STATE`](../../IProcess/interfaces/IProcess.md#state)

***

### target

> **target**: `HTMLDivElement`

Defined in: [src/interfaces/IAppRenderer.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L9)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/interfaces/IProcess.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L10)

##### Returns

`boolean`

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`_disposed`](../../IProcess/interfaces/IProcess.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/interfaces/IProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L14)

##### Returns

`number`

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`MEMORY`](../../IProcess/interfaces/IProcess.md#memory)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L15)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`__start`](../../IProcess/interfaces/IProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L16)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`__stop`](../../IProcess/interfaces/IProcess.md#__stop)

***

### \_renderAltMenu()

> **\_renderAltMenu**(`process`): `HTMLDivElement`

Defined in: [src/interfaces/IAppRenderer.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L21)

#### Parameters

##### process

[`IAppProcess`](../../IAppProcess/interfaces/IAppProcess.md)

#### Returns

`HTMLDivElement`

***

### \_renderTitlebar()

> **\_renderTitlebar**(`process`): `HTMLDivElement` \| `undefined`

Defined in: [src/interfaces/IAppRenderer.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L20)

#### Parameters

##### process

[`IAppProcess`](../../IAppProcess/interfaces/IAppProcess.md)

#### Returns

`HTMLDivElement` \| `undefined`

***

### \_resizeGrabbers()

> **\_resizeGrabbers**(`process`, `window`): `undefined`

Defined in: [src/interfaces/IAppRenderer.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L22)

#### Parameters

##### process

[`IAppProcess`](../../IAppProcess/interfaces/IAppProcess.md)

##### window

`HTMLDivElement`

#### Returns

`undefined`

***

### \_resizer()

> **\_resizer**(`window`, `resizer`): `HTMLDivElement`

Defined in: [src/interfaces/IAppRenderer.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L23)

#### Parameters

##### window

`HTMLDivElement`

##### resizer

[`WindowResizer`](../../../types/apps/app/interfaces/WindowResizer.md)

#### Returns

`HTMLDivElement`

***

### \_windowClasses()

> **\_windowClasses**(`proc`, `window`, `data`): `void`

Defined in: [src/interfaces/IAppRenderer.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L17)

#### Parameters

##### proc

[`IAppProcess`](../../IAppProcess/interfaces/IAppProcess.md)

##### window

`HTMLDivElement`

##### data

[`App`](../../../types/apps/app/interfaces/App.md)

#### Returns

`void`

***

### \_windowEvents()

> **\_windowEvents**(`proc`, `window`, `titlebar`, `data`): `void`

Defined in: [src/interfaces/IAppRenderer.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L18)

#### Parameters

##### proc

[`IAppProcess`](../../IAppProcess/interfaces/IAppProcess.md)

##### window

`HTMLDivElement`

##### titlebar

`HTMLDivElement` \| `undefined`

##### data

[`App`](../../../types/apps/app/interfaces/App.md)

#### Returns

`void`

***

### centerWindow()

> **centerWindow**(`proc`): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppRenderer.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L34)

#### Parameters

##### proc

[`IAppProcess`](../../IAppProcess/interfaces/IAppProcess.md)

#### Returns

`Promise`\<`void`\>

***

### disposedCheck()

> **disposedCheck**(): `void`

Defined in: [src/interfaces/IAppRenderer.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L15)

#### Returns

`void`

***

### focusPid()

> **focusPid**(`pid`): `void`

Defined in: [src/interfaces/IAppRenderer.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L19)

#### Parameters

##### pid

`number`

#### Returns

`void`

***

### getAppInstances()

> **getAppInstances**(`id`, `originPid?`): [`IAppProcess`](../../IAppProcess/interfaces/IAppProcess.md)[]

Defined in: [src/interfaces/IAppRenderer.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L32)

#### Parameters

##### id

`string`

##### originPid?

`number`

#### Returns

[`IAppProcess`](../../IAppProcess/interfaces/IAppProcess.md)[]

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`killSelf`](../../IProcess/interfaces/IProcess.md#killself)

***

### notifyCrash()

> **notifyCrash**(`data`, `reason`, `process?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppRenderer.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L33)

#### Parameters

##### data

[`App`](../../../types/apps/app/interfaces/App.md)

##### reason

`any`

##### process?

[`IAppProcess`](../../IAppProcess/interfaces/IAppProcess.md)

#### Returns

`Promise`\<`void`\>

***

### remove()

> **remove**(`pid`): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppRenderer.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L24)

#### Parameters

##### pid

`number`

#### Returns

`Promise`\<`void`\>

***

### render()

> **render**(`process`, `renderTarget`): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppRenderer.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L16)

#### Parameters

##### process

[`IAppProcess`](../../IAppProcess/interfaces/IAppProcess.md)

##### renderTarget

`HTMLDivElement` \| `undefined`

#### Returns

`Promise`\<`void`\>

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

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`requestFileLock`](../../IProcess/interfaces/IProcess.md#requestfilelock)

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

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`setSource`](../../IProcess/interfaces/IProcess.md#setsource)

***

### snapWindow()

> **snapWindow**(`pid`, `variant`): `void`

Defined in: [src/interfaces/IAppRenderer.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L29)

#### Parameters

##### pid

`number`

##### variant

`string`

#### Returns

`void`

***

### toggleFullscreen()

> **toggleFullscreen**(`pid`): `void`

Defined in: [src/interfaces/IAppRenderer.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L31)

#### Parameters

##### pid

`number`

#### Returns

`void`

***

### toggleMaximize()

> **toggleMaximize**(`pid`): `void`

Defined in: [src/interfaces/IAppRenderer.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L25)

#### Parameters

##### pid

`number`

#### Returns

`void`

***

### toggleMinimize()

> **toggleMinimize**(`pid`): `void`

Defined in: [src/interfaces/IAppRenderer.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L30)

#### Parameters

##### pid

`number`

#### Returns

`void`

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

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`unlockFile`](../../IProcess/interfaces/IProcess.md#unlockfile)

***

### unMinimize()

> **unMinimize**(`pid`): `void`

Defined in: [src/interfaces/IAppRenderer.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L27)

#### Parameters

##### pid

`number`

#### Returns

`void`

***

### unsnapWindow()

> **unsnapWindow**(`pid`, `dispatch?`): `void`

Defined in: [src/interfaces/IAppRenderer.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L28)

#### Parameters

##### pid

`number`

##### dispatch?

`boolean`

#### Returns

`void`

***

### updateDraggableDisabledState()

> **updateDraggableDisabledState**(`pid`, `window`): `void`

Defined in: [src/interfaces/IAppRenderer.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppRenderer.ts#L26)

#### Parameters

##### pid

`number`

##### window

`HTMLDivElement`

#### Returns

`void`
