[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/modules/IProcessHandler](../README.md) / IProcessHandler

# Interface: IProcessHandler

Defined in: [src/interfaces/modules/IProcessHandler.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L9)

## Extends

- [`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md)

## Properties

### BUSY

> **BUSY**: `string`

Defined in: [src/interfaces/modules/IProcessHandler.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L10)

***

### id

> **id**: `string`

Defined in: [src/interfaces/modules/IKernelModule.ts:3](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L3)

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`id`](../../IKernelModule/interfaces/IKernelModule.md#id)

***

### IS\_BUSY

> **IS\_BUSY**: `boolean`

Defined in: [src/interfaces/modules/IProcessHandler.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L11)

***

### renderer

> **renderer**: [`IAppRenderer`](../../../IAppRenderer/interfaces/IAppRenderer.md) \| `undefined`

Defined in: [src/interfaces/modules/IProcessHandler.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L15)

***

### rendererPid

> **rendererPid**: `number`

Defined in: [src/interfaces/modules/IProcessHandler.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L14)

***

### store

> **store**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`Map`\<`number`, [`IProcess`](../../../IProcess/interfaces/IProcess.md)\>\>

Defined in: [src/interfaces/modules/IProcessHandler.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L13)

## Accessors

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/interfaces/modules/IProcessHandler.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L12)

##### Returns

`number`

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/modules/IKernelModule.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L5)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`__init`](../../IKernelModule/interfaces/IKernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/modules/IProcessHandler.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L16)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`_init`](../../IKernelModule/interfaces/IKernelModule.md#_init)

***

### \_killSubProceses()

> **\_killSubProceses**(`pid`, `force?`): `Promise`\<`void`\>

Defined in: [src/interfaces/modules/IProcessHandler.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L26)

#### Parameters

##### pid

`number`

##### force?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### ConnectDispatch()

> **ConnectDispatch**(`pid`): [`IProcessDispatch`](../../../IProcess/interfaces/IProcessDispatch.md) \| `undefined`

Defined in: [src/interfaces/modules/IProcessHandler.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L31)

#### Parameters

##### pid

`number`

#### Returns

[`IProcessDispatch`](../../../IProcess/interfaces/IProcessDispatch.md) \| `undefined`

***

### getPid()

> **getPid**(): `number`

Defined in: [src/interfaces/modules/IProcessHandler.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L29)

#### Returns

`number`

***

### getProcess()

> **getProcess**\<`T`\>(`pid`, `disposedToo?`): `T` \| `undefined`

Defined in: [src/interfaces/modules/IProcessHandler.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L28)

#### Type Parameters

##### T

`T` = [`IProcess`](../../../IProcess/interfaces/IProcess.md)

#### Parameters

##### pid

`number`

##### disposedToo?

`boolean`

#### Returns

`T` \| `undefined`

***

### getProcessContext()

> **getProcessContext**(`pid`): [`ProcessContext`](../../../../types/system/process/interfaces/ProcessContext.md) \| `undefined`

Defined in: [src/interfaces/modules/IProcessHandler.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L33)

#### Parameters

##### pid

`number`

#### Returns

[`ProcessContext`](../../../../types/system/process/interfaces/ProcessContext.md) \| `undefined`

***

### getSubProcesses()

> **getSubProcesses**(`parentPid`): `Map`\<`number`, [`IProcess`](../../../IProcess/interfaces/IProcess.md)\>

Defined in: [src/interfaces/modules/IProcessHandler.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L27)

#### Parameters

##### parentPid

`number`

#### Returns

`Map`\<`number`, [`IProcess`](../../../IProcess/interfaces/IProcess.md)\>

***

### isKmod()

> **isKmod**(): `void`

Defined in: [src/interfaces/modules/IKernelModule.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L6)

#### Returns

`void`

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`isKmod`](../../IKernelModule/interfaces/IKernelModule.md#iskmod)

***

### isPid()

> **isPid**(`pid`): `boolean`

Defined in: [src/interfaces/modules/IProcessHandler.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L30)

#### Parameters

##### pid

`number`

#### Returns

`boolean`

***

### kill()

> **kill**(`pid`, `force?`): `Promise`\<[`ProcessKillResult`](../../../../types/system/process/type-aliases/ProcessKillResult.md)\>

Defined in: [src/interfaces/modules/IProcessHandler.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L25)

#### Parameters

##### pid

`number`

##### force?

`boolean`

#### Returns

`Promise`\<[`ProcessKillResult`](../../../../types/system/process/type-aliases/ProcessKillResult.md)\>

***

### spawn()

> **spawn**\<`T`\>(`process`, `renderTarget?`, `userId?`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/interfaces/modules/IProcessHandler.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L18)

#### Type Parameters

##### T

`T` *extends* [`IProcess`](../../../IProcess/interfaces/IProcess.md) = [`IProcess`](../../../IProcess/interfaces/IProcess.md)

#### Parameters

##### process

[`Constructs`](../../../common/interfaces/Constructs.md)\<`T`\>

##### renderTarget?

`HTMLDivElement`

##### userId?

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

***

### startRenderer()

> **startRenderer**(`initPid`): `Promise`\<`void`\>

Defined in: [src/interfaces/modules/IProcessHandler.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L17)

#### Parameters

##### initPid

`number`

#### Returns

`Promise`\<`void`\>

***

### waitForAvailable()

> **waitForAvailable**(`or?`): `Promise`\<`void`\>

Defined in: [src/interfaces/modules/IProcessHandler.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IProcessHandler.ts#L32)

#### Parameters

##### or?

`string`

#### Returns

`Promise`\<`void`\>
