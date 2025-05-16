[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [ts/services](../README.md) / ServiceHost

# Class: ServiceHost

Defined in: [src/ts/services/index.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/index.ts#L14)

## Extends

- [`Process`](../../process/instance/classes/Process.md)

## Constructors

### Constructor

> **new ServiceHost**(`handler`, `pid`, `parentPid`): `ServiceHost`

Defined in: [src/ts/services/index.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/index.ts#L20)

#### Parameters

##### handler

[`ProcessHandler`](../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

#### Returns

`ServiceHost`

#### Overrides

[`Process`](../../process/instance/classes/Process.md).[`constructor`](../../process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `true`

Defined in: [src/ts/services/index.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/index.ts#L16)

#### Overrides

[`Process`](../../process/instance/classes/Process.md).[`_criticalProcess`](../../process/instance/classes/Process.md#_criticalprocess)

***

### \_disposed

> **\_disposed**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L21)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`_disposed`](../../process/instance/classes/Process.md#_disposed)

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

### Services

> **Services**: [`ReadableServiceStore`](../../../types/service/type-aliases/ReadableServiceStore.md)

Defined in: [src/ts/services/index.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/index.ts#L15)

***

### soundBus

> **soundBus**: [`SoundBus`](../../soundbus/classes/SoundBus.md)

Defined in: [src/ts/process/instance.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L13)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`soundBus`](../../process/instance/classes/Process.md#soundbus)

***

### STORE

> `readonly` **STORE**: `Map`\<`string`, \{ `changedAt?`: `number`; `description`: `string`; `id?`: `string`; `initialState?`: [`InitialServiceState`](../../../types/service/type-aliases/InitialServiceState.md); `loadedAt?`: `number`; `name`: `string`; `pid?`: `number`; `process`: *typeof* [`BaseService`](../base/classes/BaseService.md); `startCondition?`: (`daemon`) => [`MaybePromise`](../../../types/common/type-aliases/MaybePromise.md)\<`boolean`\>; \}\>

Defined in: [src/ts/services/index.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/index.ts#L24)

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

### getService()

> **getService**\<`T`\>(`id`): `undefined` \| `T`

Defined in: [src/ts/services/index.ts:150](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/index.ts#L150)

#### Type Parameters

##### T

`T` *extends* [`BaseService`](../base/classes/BaseService.md) = [`BaseService`](../base/classes/BaseService.md)

#### Parameters

##### id

`string`

#### Returns

`undefined` \| `T`

***

### init()

> **init**(): `Promise`\<`void`\>

Defined in: [src/ts/services/index.ts:127](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/index.ts#L127)

#### Returns

`Promise`\<`void`\>

***

### initialRun()

> **initialRun**(): `Promise`\<`void`\>

Defined in: [src/ts/services/index.ts:117](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/index.ts#L117)

#### Returns

`Promise`\<`void`\>

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/process/instance.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L60)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`killSelf`](../../process/instance/classes/Process.md#killself)

***

### loadStore()

> **loadStore**(`store`): `boolean`

Defined in: [src/ts/services/index.ts:33](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/index.ts#L33)

#### Parameters

##### store

[`ServiceStore`](../../../types/service/type-aliases/ServiceStore.md)

#### Returns

`boolean`

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

### restartService()

> **restartService**(`id`): `Promise`\<[`ServiceChangeResult`](../../../types/service/type-aliases/ServiceChangeResult.md)\>

Defined in: [src/ts/services/index.ts:106](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/index.ts#L106)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ServiceChangeResult`](../../../types/service/type-aliases/ServiceChangeResult.md)\>

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L44)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`start`](../../process/instance/classes/Process.md#start)

***

### startService()

> **startService**(`id`): `Promise`\<`"success"` \| `"err_noExist"` \| `"err_alreadyRunning"` \| `"err_startCondition"` \| `"err_spawnFailed"`\>

Defined in: [src/ts/services/index.ts:55](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/index.ts#L55)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`"success"` \| `"err_noExist"` \| `"err_alreadyRunning"` \| `"err_startCondition"` \| `"err_spawnFailed"`\>

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:40](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L40)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`stop`](../../process/instance/classes/Process.md#stop)

***

### stopService()

> **stopService**(`id`): `Promise`\<[`ServiceChangeResult`](../../../types/service/type-aliases/ServiceChangeResult.md)\>

Defined in: [src/ts/services/index.ts:81](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/index.ts#L81)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ServiceChangeResult`](../../../types/service/type-aliases/ServiceChangeResult.md)\>

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

***

### verifyServicesProcesses()

> **verifyServicesProcesses**(): `Promise`\<`void`\>

Defined in: [src/ts/services/index.ts:136](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/index.ts#L136)

#### Returns

`Promise`\<`void`\>
