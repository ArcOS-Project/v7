[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/apps/storage](../README.md) / ApplicationStorage

# Class: ApplicationStorage

Defined in: [src/ts/apps/storage.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/storage.ts#L12)

## Extends

- [`BaseService`](../../../services/base/classes/BaseService.md)

## Constructors

### Constructor

> **new ApplicationStorage**(`handler`, `pid`, `parentPid`, `name`, `host`): `ApplicationStorage`

Defined in: [src/ts/apps/storage.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/storage.ts#L18)

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

`ApplicationStorage`

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

### appIconCache

> **appIconCache**: `Record`\<`string`, `string`\> = `{}`

Defined in: [src/ts/apps/storage.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/storage.ts#L16)

***

### buffer

> **buffer**: [`ReadableStore`](../../../writable/type-aliases/ReadableStore.md)\<[`AppStorage`](../../../../types/app/type-aliases/AppStorage.md)\>

Defined in: [src/ts/apps/storage.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/storage.ts#L15)

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

> **activate**(...`args`): `Promise`\<`void`\>

Defined in: [src/ts/services/base.ts:26](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/base.ts#L26)

#### Parameters

##### args

...`any`[]

#### Returns

`Promise`\<`void`\>

#### Inherited from

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

### get()

> **get**(): `Promise`\<`any`[]\>

Defined in: [src/ts/apps/storage.ts:98](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/storage.ts#L98)

#### Returns

`Promise`\<`any`[]\>

***

### getAppById()

> **getAppById**(`id`, `fromBuffer`): `Promise`\<`undefined` \| [`App`](../../../../types/app/interfaces/App.md)\>

Defined in: [src/ts/apps/storage.ts:119](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/storage.ts#L119)

#### Parameters

##### id

`string`

##### fromBuffer

`boolean` = `false`

#### Returns

`Promise`\<`undefined` \| [`App`](../../../../types/app/interfaces/App.md)\>

***

### injected()

> **injected**(): `object`[]

Defined in: [src/ts/apps/storage.ts:69](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/storage.ts#L69)

#### Returns

`object`[]

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/process/instance.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L60)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`killSelf`](../../../services/base/classes/BaseService.md#killself)

***

### loadApp()

> **loadApp**(`app`): `false` \| [`App`](../../../../types/app/interfaces/App.md)

Defined in: [src/ts/apps/storage.ts:57](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/storage.ts#L57)

#### Parameters

##### app

[`App`](../../../../types/app/interfaces/App.md)

#### Returns

`false` \| [`App`](../../../../types/app/interfaces/App.md)

***

### loadOrigin()

> **loadOrigin**(`id`, `store`): `boolean`

Defined in: [src/ts/apps/storage.ts:32](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/storage.ts#L32)

#### Parameters

##### id

`string`

##### store

[`AppStoreCb`](../../../../types/app/type-aliases/AppStoreCb.md)

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

[`LogLevel`](../../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`Log`](../../../services/base/classes/BaseService.md#log)

***

### refresh()

> **refresh**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/storage.ts:75](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/storage.ts#L75)

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

[`BaseService`](../../../services/base/classes/BaseService.md).[`requestFileLock`](../../../services/base/classes/BaseService.md#requestfilelock)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/storage.ts:28](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/storage.ts#L28)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`BaseService`](../../../services/base/classes/BaseService.md).[`start`](../../../services/base/classes/BaseService.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:40](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L40)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`stop`](../../../services/base/classes/BaseService.md#stop)

***

### unloadOrigin()

> **unloadOrigin**(`id`): `boolean`

Defined in: [src/ts/apps/storage.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/storage.ts#L44)

#### Parameters

##### id

`string`

#### Returns

`boolean`

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
