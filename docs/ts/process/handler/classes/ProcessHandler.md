[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/process/handler](../README.md) / ProcessHandler

# Class: ProcessHandler

Defined in: [src/ts/process/handler.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L12)

## Extends

- [`KernelModule`](../../../kernel/module/classes/KernelModule.md)

## Constructors

### Constructor

> **new ProcessHandler**(`kernel`, `id`): `ProcessHandler`

Defined in: [src/ts/process/handler.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L21)

#### Parameters

##### kernel

[`WaveKernel`](../../../kernel/classes/WaveKernel.md)

##### id

`string`

#### Returns

`ProcessHandler`

#### Overrides

[`KernelModule`](../../../kernel/module/classes/KernelModule.md).[`constructor`](../../../kernel/module/classes/KernelModule.md#constructor)

## Properties

### BUSY

> **BUSY**: `boolean` = `false`

Defined in: [src/ts/process/handler.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L13)

***

### dispatch

> **dispatch**: [`SystemDispatch`](../../../dispatch/classes/SystemDispatch.md)

Defined in: [src/ts/process/handler.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L19)

***

### env

> **env**: [`Environment`](../../../kernel/env/classes/Environment.md)

Defined in: [src/ts/process/handler.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L18)

***

### id

> **id**: `string`

Defined in: [src/ts/kernel/module/index.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L8)

#### Inherited from

[`KernelModule`](../../../kernel/module/classes/KernelModule.md).[`id`](../../../kernel/module/classes/KernelModule.md#id)

***

### IS\_KMOD

> `protected` `readonly` **IS\_KMOD**: `true` = `true`

Defined in: [src/ts/kernel/module/index.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L6)

#### Inherited from

[`KernelModule`](../../../kernel/module/classes/KernelModule.md).[`IS_KMOD`](../../../kernel/module/classes/KernelModule.md#is_kmod)

***

### kernel

> `protected` **kernel**: [`WaveKernel`](../../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/kernel/module/index.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L7)

#### Inherited from

[`KernelModule`](../../../kernel/module/classes/KernelModule.md).[`kernel`](../../../kernel/module/classes/KernelModule.md#kernel)

***

### renderer

> **renderer**: `undefined` \| [`AppRenderer`](../../../apps/renderer/classes/AppRenderer.md)

Defined in: [src/ts/process/handler.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L17)

***

### rendererPid

> **rendererPid**: `number` = `-1`

Defined in: [src/ts/process/handler.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L16)

***

### store

> **store**: [`ReadableStore`](../../../writable/type-aliases/ReadableStore.md)\<`Map`\<`number`, [`Process`](../../instance/classes/Process.md)\>\>

Defined in: [src/ts/process/handler.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L15)

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`KernelModule`](../../../kernel/module/classes/KernelModule.md).[`__init`](../../../kernel/module/classes/KernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/process/handler.ts:28](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L28)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`KernelModule`](../../../kernel/module/classes/KernelModule.md).[`_init`](../../../kernel/module/classes/KernelModule.md#_init)

***

### \_killSubProceses()

> **\_killSubProceses**(`pid`, `force`): `Promise`\<`void`\>

Defined in: [src/ts/process/handler.ts:153](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L153)

#### Parameters

##### pid

`number`

##### force

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

***

### ConnectDispatch()

> **ConnectDispatch**(`pid`): `undefined` \| [`ProcessDispatch`](../../dispatch/classes/ProcessDispatch.md)

Defined in: [src/ts/process/handler.ts:215](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L215)

#### Parameters

##### pid

`number`

#### Returns

`undefined` \| [`ProcessDispatch`](../../dispatch/classes/ProcessDispatch.md)

***

### getPid()

> **getPid**(): `number`

Defined in: [src/ts/process/handler.ts:201](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L201)

#### Returns

`number`

***

### getProcess()

> **getProcess**\<`T`\>(`pid`, `disposedToo`): `undefined` \| `T`

Defined in: [src/ts/process/handler.ts:191](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L191)

#### Type Parameters

##### T

`T` = [`Process`](../../instance/classes/Process.md)

#### Parameters

##### pid

`number`

##### disposedToo

`boolean` = `false`

#### Returns

`undefined` \| `T`

***

### getSubProcesses()

> **getSubProcesses**(`parentPid`): `Map`\<`number`, [`Process`](../../instance/classes/Process.md)\>

Defined in: [src/ts/process/handler.ts:175](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L175)

#### Parameters

##### parentPid

`number`

#### Returns

`Map`\<`number`, [`Process`](../../instance/classes/Process.md)\>

***

### isPid()

> **isPid**(`pid`): `boolean`

Defined in: [src/ts/process/handler.ts:209](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L209)

#### Parameters

##### pid

`number`

#### Returns

`boolean`

***

### kill()

> **kill**(`pid`, `force`): `Promise`\<[`ProcessKillResult`](../../../../types/process/type-aliases/ProcessKillResult.md)\>

Defined in: [src/ts/process/handler.ts:104](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L104)

#### Parameters

##### pid

`number`

##### force

`boolean` = `false`

#### Returns

`Promise`\<[`ProcessKillResult`](../../../../types/process/type-aliases/ProcessKillResult.md)\>

***

### Log()

> `protected` **Log**(`message`, `level`): `void`

Defined in: [src/ts/kernel/module/index.ts:30](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L30)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`KernelModule`](../../../kernel/module/classes/KernelModule.md).[`Log`](../../../kernel/module/classes/KernelModule.md#log)

***

### spawn()

> **spawn**\<`T`\>(`process`, `renderTarget`, `parentPid`, ...`args`): `Promise`\<`undefined` \| `T`\>

Defined in: [src/ts/process/handler.ts:52](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L52)

#### Type Parameters

##### T

`T` = [`Process`](../../instance/classes/Process.md)

#### Parameters

##### process

*typeof* [`Process`](../../instance/classes/Process.md)

##### renderTarget

`undefined` | `HTMLDivElement`

##### parentPid

`undefined` | `number`

##### args

...`any`[]

#### Returns

`Promise`\<`undefined` \| `T`\>

***

### startRenderer()

> **startRenderer**(`initPid`): `Promise`\<`void`\>

Defined in: [src/ts/process/handler.ts:32](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L32)

#### Parameters

##### initPid

`number`

#### Returns

`Promise`\<`void`\>

***

### waitForAvailable()

> **waitForAvailable**(): `Promise`\<`void`\>

Defined in: [src/ts/process/handler.ts:225](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/handler.ts#L225)

#### Returns

`Promise`\<`void`\>
