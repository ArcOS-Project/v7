[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/kernel/mods/stack](../README.md) / ProcessHandler

# Class: ProcessHandler

Defined in: [src/ts/kernel/mods/stack/index.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L18)

## Extends

- [`KernelModule`](../../../module/classes/KernelModule.md)

## Implements

- [`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md)

## Constructors

### Constructor

> **new ProcessHandler**(`kernel`, `id`): `ProcessHandler`

Defined in: [src/ts/kernel/mods/stack/index.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L60)

#### Parameters

##### kernel

[`IWaveKernel`](../../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md)

##### id

`string`

#### Returns

`ProcessHandler`

#### Overrides

[`KernelModule`](../../../module/classes/KernelModule.md).[`constructor`](../../../module/classes/KernelModule.md#constructor)

## Properties

### id

> **id**: `string`

Defined in: [src/ts/kernel/module/index.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L9)

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`id`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#id)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`id`](../../../module/classes/KernelModule.md#id)

***

### IS\_KMOD

> `protected` `readonly` **IS\_KMOD**: `true` = `true`

Defined in: [src/ts/kernel/module/index.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L8)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`IS_KMOD`](../../../module/classes/KernelModule.md#is_kmod)

***

### processContexts

> **processContexts**: `Map`\<`number`, [`ProcessContext`](../../../../../types/system/process/interfaces/ProcessContext.md)\>

Defined in: [src/ts/kernel/mods/stack/index.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L24)

***

### renderer

> **renderer**: [`IAppRenderer`](../../../../../interfaces/IAppRenderer/interfaces/IAppRenderer.md) \| `undefined`

Defined in: [src/ts/kernel/mods/stack/index.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L23)

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`renderer`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#renderer)

***

### rendererPid

> **rendererPid**: `number` = `-1`

Defined in: [src/ts/kernel/mods/stack/index.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L22)

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`rendererPid`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#rendererpid)

***

### state?

> `protected` `optional` **state?**: [`IStateHandler`](../../../../../interfaces/IStateHandler/interfaces/IStateHandler.md)

Defined in: [src/ts/kernel/module/index.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L10)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`state`](../../../module/classes/KernelModule.md#state)

***

### store

> **store**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`Map`\<`number`, [`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md)\>\>

Defined in: [src/ts/kernel/mods/stack/index.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L21)

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`store`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#store)

## Accessors

### BUSY

#### Get Signature

> **get** **BUSY**(): `string`

Defined in: [src/ts/kernel/mods/stack/index.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L30)

##### Returns

`string`

#### Set Signature

> **set** **BUSY**(`value`): `void`

Defined in: [src/ts/kernel/mods/stack/index.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L34)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`BUSY`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#busy)

***

### IS\_BUSY

#### Get Signature

> **get** **IS\_BUSY**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/index.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`IS_BUSY`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#is_busy)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/index.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L43)

##### Returns

`number`

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`MEMORY`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#memory)

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`__init`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#__init)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`__init`](../../../module/classes/KernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L20)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`_init`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#_init)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`_init`](../../../module/classes/KernelModule.md#_init)

***

### \_killSubProceses()

> **\_killSubProceses**(`pid`, `force?`): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/index.ts:211](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L211)

#### Parameters

##### pid

`number`

##### force?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`_killSubProceses`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#_killsubproceses)

***

### busyWithNot()

> **busyWithNot**(`thing`): `boolean` \| `""`

Defined in: [src/ts/kernel/mods/stack/index.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L54)

#### Parameters

##### thing

`string`

#### Returns

`boolean` \| `""`

***

### ConnectDispatch()

> **ConnectDispatch**(`pid`): [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md) \| `undefined`

Defined in: [src/ts/kernel/mods/stack/index.ts:273](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L273)

#### Parameters

##### pid

`number`

#### Returns

[`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md) \| `undefined`

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`ConnectDispatch`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#connectdispatch)

***

### getPid()

> **getPid**(): `number`

Defined in: [src/ts/kernel/mods/stack/index.ts:259](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L259)

#### Returns

`number`

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`getPid`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#getpid)

***

### getProcess()

> **getProcess**\<`T`\>(`pid`): `T` \| `undefined`

Defined in: [src/ts/kernel/mods/stack/index.ts:249](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L249)

#### Type Parameters

##### T

`T` = [`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md)

#### Parameters

##### pid

`number`

#### Returns

`T` \| `undefined`

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`getProcess`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#getprocess)

***

### getProcessContext()

> **getProcessContext**(`pid`): [`ProcessContext`](../../../../../types/system/process/interfaces/ProcessContext.md) \| `undefined`

Defined in: [src/ts/kernel/mods/stack/index.ts:146](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L146)

#### Parameters

##### pid

`number`

#### Returns

[`ProcessContext`](../../../../../types/system/process/interfaces/ProcessContext.md) \| `undefined`

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`getProcessContext`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#getprocesscontext)

***

### getSubProcesses()

> **getSubProcesses**(`parentPid`): `Map`\<`number`, [`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md)\>

Defined in: [src/ts/kernel/mods/stack/index.ts:233](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L233)

#### Parameters

##### parentPid

`number`

#### Returns

`Map`\<`number`, [`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md)\>

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`getSubProcesses`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#getsubprocesses)

***

### isKmod()

> **isKmod**(): `void`

Defined in: [src/ts/kernel/module/index.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L36)

#### Returns

`void`

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`isKmod`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#iskmod)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`isKmod`](../../../module/classes/KernelModule.md#iskmod)

***

### isPid()

> **isPid**(`pid`): `boolean`

Defined in: [src/ts/kernel/mods/stack/index.ts:267](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L267)

#### Parameters

##### pid

`number`

#### Returns

`boolean`

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`isPid`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#ispid)

***

### kill()

> **kill**(`pid`, `force?`): `Promise`\<[`ProcessKillResult`](../../../../../types/system/process/type-aliases/ProcessKillResult.md)\>

Defined in: [src/ts/kernel/mods/stack/index.ts:162](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L162)

#### Parameters

##### pid

`number`

##### force?

`boolean` = `false`

#### Returns

`Promise`\<[`ProcessKillResult`](../../../../../types/system/process/type-aliases/ProcessKillResult.md)\>

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`kill`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#kill)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/module/index.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L30)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`Log`](../../../module/classes/KernelModule.md#log)

***

### setProcessContext()

> **setProcessContext**(`pid`, `context`): `void`

Defined in: [src/ts/kernel/mods/stack/index.ts:150](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L150)

#### Parameters

##### pid

`number`

##### context

[`ProcessContext`](../../../../../types/system/process/interfaces/ProcessContext.md)

#### Returns

`void`

***

### spawn()

> **spawn**\<`T`\>(`process`, `renderTarget?`, `userId`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/index.ts:72](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L72)

#### Type Parameters

##### T

`T` *extends* [`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md) = [`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md)

#### Parameters

##### process

[`Constructs`](../../../../../interfaces/common/interfaces/Constructs.md)\<`T`\>

##### renderTarget?

`HTMLDivElement` \| `undefined` = `undefined`

##### userId

`string` \| `undefined`

##### parentPid?

`number` \| `undefined` = `undefined`

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`spawn`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#spawn)

***

### startRenderer()

> **startRenderer**(`initPid`): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/index.ts:64](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L64)

#### Parameters

##### initPid

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`startRenderer`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#startrenderer)

***

### updateProcessContext()

> **updateProcessContext**(`pid`, `cb`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/index.ts:154](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L154)

#### Parameters

##### pid

`number`

##### cb

(`context`) => [`ProcessContext`](../../../../../types/system/process/interfaces/ProcessContext.md)

#### Returns

`Promise`\<`false` \| `undefined`\>

***

### waitForAvailable()

> **waitForAvailable**(`or?`): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/index.ts:283](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/index.ts#L283)

#### Parameters

##### or?

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md).[`waitForAvailable`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md#waitforavailable)
