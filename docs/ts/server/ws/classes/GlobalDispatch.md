[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/server/ws](../README.md) / GlobalDispatch

# Class: GlobalDispatch

Defined in: [src/ts/server/ws/index.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/ws/index.ts#L7)

## Extends

- [`BaseService`](../../../services/base/classes/BaseService.md)

## Constructors

### Constructor

> **new GlobalDispatch**(`handler`, `pid`, `parentPid`, `name`, `host`): `GlobalDispatch`

Defined in: [src/ts/server/ws/index.ts:11](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/ws/index.ts#L11)

#### Parameters

##### handler

[`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

##### name

`string`

##### host

[`ServiceHost`](../../../services/classes/ServiceHost.md)

#### Returns

`GlobalDispatch`

#### Overrides

[`BaseService`](../../../services/base/classes/BaseService.md).[`constructor`](../../../services/base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L22)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`_criticalProcess`](../../../services/base/classes/BaseService.md#_criticalprocess)

***

### \_disposed

> **\_disposed**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L21)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`_disposed`](../../../services/base/classes/BaseService.md#_disposed)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/services/base.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/base.ts#L7)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`activated`](../../../services/base/classes/BaseService.md#activated)

***

### authorized

> **authorized**: `boolean` = `false`

Defined in: [src/ts/server/ws/index.ts:9](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/ws/index.ts#L9)

***

### client

> **client**: `undefined` \| `Socket`\<`DefaultEventsMap`, `DefaultEventsMap`\>

Defined in: [src/ts/server/ws/index.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/ws/index.ts#L8)

***

### dispatch

> **dispatch**: [`ProcessDispatch`](../../../process/dispatch/classes/ProcessDispatch.md)

Defined in: [src/ts/process/instance.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L15)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`dispatch`](../../../services/base/classes/BaseService.md#dispatch)

***

### env

> **env**: [`Environment`](../../../kernel/env/classes/Environment.md)

Defined in: [src/ts/process/instance.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L12)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`env`](../../../services/base/classes/BaseService.md#env)

***

### fs

> **fs**: [`Filesystem`](../../../fs/classes/Filesystem.md)

Defined in: [src/ts/process/instance.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L23)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`fs`](../../../services/base/classes/BaseService.md#fs)

***

### handler

> **handler**: [`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)

Defined in: [src/ts/process/instance.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L14)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`handler`](../../../services/base/classes/BaseService.md#handler)

***

### host

> **host**: [`ServiceHost`](../../../services/classes/ServiceHost.md)

Defined in: [src/ts/services/base.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/base.ts#L6)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`host`](../../../services/base/classes/BaseService.md#host)

***

### kernel

> **kernel**: [`WaveKernel`](../../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/process/instance.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L17)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`kernel`](../../../services/base/classes/BaseService.md#kernel)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/process/instance.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L20)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`name`](../../../services/base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/process/instance.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L19)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`parentPid`](../../../services/base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/process/instance.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L18)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`pid`](../../../services/base/classes/BaseService.md#pid)

***

### soundBus

> **soundBus**: [`SoundBus`](../../../soundbus/classes/SoundBus.md)

Defined in: [src/ts/process/instance.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L13)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`soundBus`](../../../services/base/classes/BaseService.md#soundbus)

***

### systemDispatch

> **systemDispatch**: [`SystemDispatch`](../../../dispatch/classes/SystemDispatch.md)

Defined in: [src/ts/process/instance.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L16)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`systemDispatch`](../../../services/base/classes/BaseService.md#systemdispatch)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L48)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`__start`](../../../services/base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:54](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L54)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`__stop`](../../../services/base/classes/BaseService.md#__stop)

***

### \_activate()

> **\_activate**(...`args`): `Promise`\<`void`\>

Defined in: [src/ts/services/base.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/base.ts#L16)

#### Parameters

##### args

...`any`[]

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`_activate`](../../../services/base/classes/BaseService.md#_activate)

***

### activate()

> **activate**(`token`): `Promise`\<`void`\>

Defined in: [src/ts/server/ws/index.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/ws/index.ts#L19)

#### Parameters

##### token

`string`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`BaseService`](../../../services/base/classes/BaseService.md).[`activate`](../../../services/base/classes/BaseService.md#activate)

***

### afterActivate()

> **afterActivate**(): `Promise`\<`void`\>

Defined in: [src/ts/services/base.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/base.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`afterActivate`](../../../services/base/classes/BaseService.md#afteractivate)

***

### connected()

> **connected**(`token`): `Promise`\<`void`\>

Defined in: [src/ts/server/ws/index.ts:29](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/ws/index.ts#L29)

#### Parameters

##### token

`string`

#### Returns

`Promise`\<`void`\>

***

### emit()

> **emit**(`event`, ...`data`): `void`

Defined in: [src/ts/server/ws/index.ts:52](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/ws/index.ts#L52)

#### Parameters

##### event

`string`

##### data

...`any`[]

#### Returns

`void`

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/process/instance.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L60)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`killSelf`](../../../services/base/classes/BaseService.md#killself)

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

[`BaseService`](../../../services/base/classes/BaseService.md).[`Log`](../../../services/base/classes/BaseService.md#log)

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

[`BaseService`](../../../services/base/classes/BaseService.md).[`requestFileLock`](../../../services/base/classes/BaseService.md#requestfilelock)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L44)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`start`](../../../services/base/classes/BaseService.md#start)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/ts/server/ws/index.ts:57](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/ws/index.ts#L57)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`BaseService`](../../../services/base/classes/BaseService.md).[`stop`](../../../services/base/classes/BaseService.md#stop)

***

### subscribe()

> **subscribe**\<`T`\>(`event`, `callback`): `void`

Defined in: [src/ts/server/ws/index.ts:47](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/ws/index.ts#L47)

#### Type Parameters

##### T

`T` *extends* `any`[] = `any`[]

#### Parameters

##### event

`string`

##### callback

(...`data`) => `void`

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

[`BaseService`](../../../services/base/classes/BaseService.md).[`unlockFile`](../../../services/base/classes/BaseService.md#unlockfile)
