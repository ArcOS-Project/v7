[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [ts/state](../README.md) / StateHandler

# Class: StateHandler

Defined in: [src/ts/state/index.ts:11](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/state/index.ts#L11)

## Extends

- [`Process`](../../process/instance/classes/Process.md)

## Constructors

### Constructor

> **new StateHandler**(`handler`, `pid`, `parentPid`, `instanceName`, `store`): `StateHandler`

Defined in: [src/ts/state/index.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/state/index.ts#L18)

#### Parameters

##### handler

[`ProcessHandler`](../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

##### instanceName

`string`

##### store

`Record`\<`string`, [`State`](../../../types/state/interfaces/State.md)\> = `States`

#### Returns

`StateHandler`

#### Overrides

[`Process`](../../process/instance/classes/Process.md).[`constructor`](../../process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `true`

Defined in: [src/ts/state/index.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/state/index.ts#L16)

#### Overrides

[`Process`](../../process/instance/classes/Process.md).[`_criticalProcess`](../../process/instance/classes/Process.md#_criticalprocess)

***

### \_disposed

> **\_disposed**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L21)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`_disposed`](../../process/instance/classes/Process.md#_disposed)

***

### currentState

> **currentState**: `string` = `""`

Defined in: [src/ts/state/index.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/state/index.ts#L13)

***

### dispatch

> **dispatch**: [`ProcessDispatch`](../../process/dispatch/classes/ProcessDispatch.md)

Defined in: [src/ts/process/instance.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L15)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`dispatch`](../../process/instance/classes/Process.md#dispatch)

***

### env

> **env**: [`Environment`](../../kernel/env/classes/Environment.md)

Defined in: [src/ts/process/instance.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L12)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`env`](../../process/instance/classes/Process.md#env)

***

### fs

> **fs**: [`Filesystem`](../../fs/classes/Filesystem.md)

Defined in: [src/ts/process/instance.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L23)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`fs`](../../process/instance/classes/Process.md#fs)

***

### handler

> **handler**: [`ProcessHandler`](../../process/handler/classes/ProcessHandler.md)

Defined in: [src/ts/process/instance.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L14)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`handler`](../../process/instance/classes/Process.md#handler)

***

### kernel

> **kernel**: [`WaveKernel`](../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/process/instance.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L17)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`kernel`](../../process/instance/classes/Process.md#kernel)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/process/instance.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L20)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`name`](../../process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/process/instance.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L19)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`parentPid`](../../process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/process/instance.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L18)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`pid`](../../process/instance/classes/Process.md#pid)

***

### soundBus

> **soundBus**: [`SoundBus`](../../soundbus/classes/SoundBus.md)

Defined in: [src/ts/process/instance.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L13)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`soundBus`](../../process/instance/classes/Process.md#soundbus)

***

### stateAppProcess

> **stateAppProcess**: `undefined` \| [`AppProcess`](../../apps/process/classes/AppProcess.md)

Defined in: [src/ts/state/index.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/state/index.ts#L15)

***

### stateProps

> **stateProps**: `Record`\<`string`, `Record`\<`any`, `any`\>\> = `{}`

Defined in: [src/ts/state/index.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/state/index.ts#L14)

***

### store

> **store**: `Record`\<`string`, [`State`](../../../types/state/interfaces/State.md)\> = `{}`

Defined in: [src/ts/state/index.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/state/index.ts#L12)

***

### systemDispatch

> **systemDispatch**: [`SystemDispatch`](../../dispatch/classes/SystemDispatch.md)

Defined in: [src/ts/process/instance.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L16)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`systemDispatch`](../../process/instance/classes/Process.md#systemdispatch)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L48)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`__start`](../../process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:54](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L54)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`__stop`](../../process/instance/classes/Process.md#__stop)

***

### getStateLoaders()

> **getStateLoaders**(): `object`

Defined in: [src/ts/state/index.ts:153](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/state/index.ts#L153)

#### Returns

`object`

##### cssLoader

> **cssLoader**: `HTMLLinkElement`

##### htmlLoader

> **htmlLoader**: `HTMLDivElement`

##### main

> **main**: `HTMLDivElement`

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/process/instance.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L60)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`killSelf`](../../process/instance/classes/Process.md#killself)

***

### loadState()

> **loadState**(`id`, `props`, `instant`): `Promise`\<`void`\>

Defined in: [src/ts/state/index.ts:26](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/state/index.ts#L26)

#### Parameters

##### id

`string`

##### props

`Record`\<`string`, `any`\> = `{}`

##### instant

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

***

### loadStateAsApp()

> **loadStateAsApp**(`data`, `props`): `Promise`\<`void`\>

Defined in: [src/ts/state/index.ts:122](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/state/index.ts#L122)

#### Parameters

##### data

[`State`](../../../types/state/interfaces/State.md)

##### props

`Record`\<`string`, `any`\>

#### Returns

`Promise`\<`void`\>

***

### loadStateNormally()

> **loadStateNormally**(`id`, `data`, `htmlLoader`, `cssLoader`): `Promise`\<`void`\>

Defined in: [src/ts/state/index.ts:102](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/state/index.ts#L102)

#### Parameters

##### id

`string`

##### data

[`State`](../../../types/state/interfaces/State.md)

##### htmlLoader

`HTMLDivElement`

##### cssLoader

`HTMLLinkElement`

#### Returns

`Promise`\<`void`\>

***

### Log()

> `protected` **Log**(`message`, `level`): `void`

Defined in: [src/ts/process/instance.ts:67](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L67)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`Log`](../../process/instance/classes/Process.md#log)

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

[`Process`](../../process/instance/classes/Process.md).[`requestFileLock`](../../process/instance/classes/Process.md#requestfilelock)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L44)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`start`](../../process/instance/classes/Process.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/state/index.ts:163](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/state/index.ts#L163)

#### Returns

`Promise`\<`any`\>

#### Overrides

[`Process`](../../process/instance/classes/Process.md).[`stop`](../../process/instance/classes/Process.md#stop)

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

[`Process`](../../process/instance/classes/Process.md).[`unlockFile`](../../process/instance/classes/Process.md#unlockfile)
