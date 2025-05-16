[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/apps/renderer](../README.md) / AppRenderer

# Class: AppRenderer

Defined in: [src/ts/apps/renderer.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L16)

## Extends

- [`Process`](../../../process/instance/classes/Process.md)

## Constructors

### Constructor

> **new AppRenderer**(`handler`, `pid`, `parentPid`, `target`): `AppRenderer`

Defined in: [src/ts/apps/renderer.ts:25](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L25)

#### Parameters

##### handler

[`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

##### target

`string`

#### Returns

`AppRenderer`

#### Overrides

[`Process`](../../../process/instance/classes/Process.md).[`constructor`](../../../process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `true`

Defined in: [src/ts/apps/renderer.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L23)

#### Overrides

[`Process`](../../../process/instance/classes/Process.md).[`_criticalProcess`](../../../process/instance/classes/Process.md#_criticalprocess)

***

### \_disposed

> **\_disposed**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L21)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`_disposed`](../../../process/instance/classes/Process.md#_disposed)

***

### appStore

> **appStore**: [`ReadableStore`](../../../writable/type-aliases/ReadableStore.md)\<`Map`\<`string`, [`AppProcessData`](../../../../types/app/type-aliases/AppProcessData.md)\>\>

Defined in: [src/ts/apps/renderer.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L21)

***

### currentState

> **currentState**: `number`[] = `[]`

Defined in: [src/ts/apps/renderer.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L17)

***

### defaultApps

> **defaultApps**: [`AppStorage`](../../../../types/app/type-aliases/AppStorage.md) = `BuiltinApps`

Defined in: [src/ts/apps/renderer.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L22)

***

### dispatch

> **dispatch**: [`ProcessDispatch`](../../../process/dispatch/classes/ProcessDispatch.md)

Defined in: [src/ts/process/instance.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L15)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`dispatch`](../../../process/instance/classes/Process.md#dispatch)

***

### env

> **env**: [`Environment`](../../../kernel/env/classes/Environment.md)

Defined in: [src/ts/process/instance.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L12)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`env`](../../../process/instance/classes/Process.md#env)

***

### focusedPid

> **focusedPid**: [`ReadableStore`](../../../writable/type-aliases/ReadableStore.md)\<`number`\>

Defined in: [src/ts/apps/renderer.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L20)

***

### fs

> **fs**: [`Filesystem`](../../../fs/classes/Filesystem.md)

Defined in: [src/ts/process/instance.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L23)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`fs`](../../../process/instance/classes/Process.md#fs)

***

### handler

> **handler**: [`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)

Defined in: [src/ts/process/instance.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L14)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`handler`](../../../process/instance/classes/Process.md#handler)

***

### kernel

> **kernel**: [`WaveKernel`](../../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/process/instance.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L17)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`kernel`](../../../process/instance/classes/Process.md#kernel)

***

### maxZIndex

> **maxZIndex**: `number` = `1e6`

Defined in: [src/ts/apps/renderer.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L19)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/process/instance.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L20)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`name`](../../../process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/process/instance.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L19)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`parentPid`](../../../process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/process/instance.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L18)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`pid`](../../../process/instance/classes/Process.md#pid)

***

### soundBus

> **soundBus**: [`SoundBus`](../../../soundbus/classes/SoundBus.md)

Defined in: [src/ts/process/instance.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L13)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`soundBus`](../../../process/instance/classes/Process.md#soundbus)

***

### systemDispatch

> **systemDispatch**: [`SystemDispatch`](../../../dispatch/classes/SystemDispatch.md)

Defined in: [src/ts/process/instance.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L16)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`systemDispatch`](../../../process/instance/classes/Process.md#systemdispatch)

***

### target

> **target**: `HTMLDivElement`

Defined in: [src/ts/apps/renderer.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L18)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L48)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`__start`](../../../process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:54](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L54)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`__stop`](../../../process/instance/classes/Process.md#__stop)

***

### \_renderAltMenu()

> **\_renderAltMenu**(`process`): `HTMLDivElement`

Defined in: [src/ts/apps/renderer.ts:286](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L286)

#### Parameters

##### process

[`AppProcess`](../../process/classes/AppProcess.md)

#### Returns

`HTMLDivElement`

***

### \_renderTitlebar()

> **\_renderTitlebar**(`process`): `undefined` \| `HTMLDivElement`

Defined in: [src/ts/apps/renderer.ts:206](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L206)

#### Parameters

##### process

[`AppProcess`](../../process/classes/AppProcess.md)

#### Returns

`undefined` \| `HTMLDivElement`

***

### \_windowClasses()

> **\_windowClasses**(`proc`, `window`, `data`): `void`

Defined in: [src/ts/apps/renderer.ts:120](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L120)

#### Parameters

##### proc

[`AppProcess`](../../process/classes/AppProcess.md)

##### window

`HTMLDivElement`

##### data

[`App`](../../../../types/app/interfaces/App.md)

#### Returns

`void`

***

### \_windowEvents()

> **\_windowEvents**(`proc`, `window`, `titlebar`, `data`): `void`

Defined in: [src/ts/apps/renderer.ts:159](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L159)

#### Parameters

##### proc

[`AppProcess`](../../process/classes/AppProcess.md)

##### window

`HTMLDivElement`

##### titlebar

`undefined` | `HTMLDivElement`

##### data

[`App`](../../../../types/app/interfaces/App.md)

#### Returns

`void`

***

### disposedCheck()

> **disposedCheck**(): `void`

Defined in: [src/ts/apps/renderer.ts:36](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L36)

#### Returns

`void`

***

### focusPid()

> **focusPid**(`pid`): `void`

Defined in: [src/ts/apps/renderer.ts:190](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L190)

#### Parameters

##### pid

`number`

#### Returns

`void`

***

### getAppInstances()

> **getAppInstances**(`id`, `originPid?`): [`AppProcess`](../../process/classes/AppProcess.md)[]

Defined in: [src/ts/apps/renderer.ts:485](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L485)

#### Parameters

##### id

`string`

##### originPid?

`number`

#### Returns

[`AppProcess`](../../process/classes/AppProcess.md)[]

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/process/instance.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L60)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`killSelf`](../../../process/instance/classes/Process.md#killself)

***

### Log()

> `protected` **Log**(`message`, `level`): `void`

Defined in: [src/ts/process/instance.ts:67](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L67)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`Log`](../../../process/instance/classes/Process.md#log)

***

### notifyCrash()

> **notifyCrash**(`data`, `e`, `process`): `void`

Defined in: [src/ts/apps/renderer.ts:499](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L499)

#### Parameters

##### data

[`App`](../../../../types/app/interfaces/App.md)

##### e

`Error`

##### process

[`AppProcess`](../../process/classes/AppProcess.md)

#### Returns

`void`

***

### remove()

> **remove**(`pid`): `Promise`\<`void`\>

Defined in: [src/ts/apps/renderer.ts:340](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L340)

#### Parameters

##### pid

`number`

#### Returns

`Promise`\<`void`\>

***

### render()

> **render**(`process`, `renderTarget`): `Promise`\<`void`\>

Defined in: [src/ts/apps/renderer.ts:42](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L42)

#### Parameters

##### process

[`AppProcess`](../../process/classes/AppProcess.md)

##### renderTarget

`undefined` | `HTMLDivElement`

#### Returns

`Promise`\<`void`\>

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/process/instance.ts:73](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L73)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `false`\>

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`requestFileLock`](../../../process/instance/classes/Process.md#requestfilelock)

***

### snapWindow()

> **snapWindow**(`pid`, `variant`): `void`

Defined in: [src/ts/apps/renderer.ts:432](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L432)

#### Parameters

##### pid

`number`

##### variant

`string`

#### Returns

`void`

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L44)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`start`](../../../process/instance/classes/Process.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:40](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L40)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`stop`](../../../process/instance/classes/Process.md#stop)

***

### toggleFullscreen()

> **toggleFullscreen**(`pid`): `void`

Defined in: [src/ts/apps/renderer.ts:465](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L465)

#### Parameters

##### pid

`number`

#### Returns

`void`

***

### toggleMaximize()

> **toggleMaximize**(`pid`): `void`

Defined in: [src/ts/apps/renderer.ts:368](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L368)

#### Parameters

##### pid

`number`

#### Returns

`void`

***

### toggleMinimize()

> **toggleMinimize**(`pid`): `void`

Defined in: [src/ts/apps/renderer.ts:449](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L449)

#### Parameters

##### pid

`number`

#### Returns

`void`

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/process/instance.ts:85](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L85)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `false`\>

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`unlockFile`](../../../process/instance/classes/Process.md#unlockfile)

***

### unMinimize()

> **unMinimize**(`pid`): `void`

Defined in: [src/ts/apps/renderer.ts:396](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L396)

#### Parameters

##### pid

`number`

#### Returns

`void`

***

### unsnapWindow()

> **unsnapWindow**(`pid`, `dispatch`): `void`

Defined in: [src/ts/apps/renderer.ts:413](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L413)

#### Parameters

##### pid

`number`

##### dispatch

`boolean` = `true`

#### Returns

`void`

***

### updateDraggableDisabledState()

> **updateDraggableDisabledState**(`pid`, `window`): `void`

Defined in: [src/ts/apps/renderer.ts:380](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/renderer.ts#L380)

#### Parameters

##### pid

`number`

##### window

`HTMLDivElement`

#### Returns

`void`
