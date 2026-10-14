[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/kernel/mods/dispatch](../README.md) / SystemDispatch

# Class: SystemDispatch

Defined in: [src/ts/kernel/mods/dispatch/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/dispatch/index.ts#L14)

## Extends

- [`KernelModule`](../../../module/classes/KernelModule.md)

## Implements

- [`ISystemDispatch`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md)

## Constructors

### Constructor

> **new SystemDispatch**(`kernel`, `id`): `SystemDispatch`

Defined in: [src/ts/kernel/mods/dispatch/index.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/dispatch/index.ts#L19)

#### Parameters

##### kernel

[`IWaveKernel`](../../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md)

##### id

`string`

#### Returns

`SystemDispatch`

#### Overrides

[`KernelModule`](../../../module/classes/KernelModule.md).[`constructor`](../../../module/classes/KernelModule.md#constructor)

## Properties

### id

> **id**: `string`

Defined in: [src/ts/kernel/module/index.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L9)

#### Implementation of

[`ISystemDispatch`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md).[`id`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md#id)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`id`](../../../module/classes/KernelModule.md#id)

***

### IS\_KMOD

> `protected` `readonly` **IS\_KMOD**: `true` = `true`

Defined in: [src/ts/kernel/module/index.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L8)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`IS_KMOD`](../../../module/classes/KernelModule.md#is_kmod)

***

### state?

> `protected` `optional` **state?**: [`IStateHandler`](../../../../../interfaces/IStateHandler/interfaces/IStateHandler.md)

Defined in: [src/ts/kernel/module/index.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L10)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`state`](../../../module/classes/KernelModule.md#state)

***

### subscribers

> **subscribers**: `Record`\<`string`, `Record`\<`number`, (`data`) => `void`\>\> = `{}`

Defined in: [src/ts/kernel/mods/dispatch/index.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/dispatch/index.ts#L15)

#### Implementation of

[`ISystemDispatch`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md).[`subscribers`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md#subscribers)

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISystemDispatch`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md).[`__init`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md#__init)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`__init`](../../../module/classes/KernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/dispatch/index.ts:72](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/dispatch/index.ts#L72)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISystemDispatch`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md).[`_init`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md#_init)

#### Overrides

[`KernelModule`](../../../module/classes/KernelModule.md).[`_init`](../../../module/classes/KernelModule.md#_init)

***

### discardEvent()

> **discardEvent**(`event`): `void`

Defined in: [src/ts/kernel/mods/dispatch/index.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/dispatch/index.ts#L46)

#### Parameters

##### event

`string`

#### Returns

`void`

#### Implementation of

[`ISystemDispatch`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md).[`discardEvent`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md#discardevent)

***

### dispatch()

> **dispatch**\<`T`\>(`caller`, `data?`, `system?`): [`SystemDispatchResult`](../../../../../types/system/dispatch/type-aliases/SystemDispatchResult.md)

Defined in: [src/ts/kernel/mods/dispatch/index.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/dispatch/index.ts#L52)

#### Type Parameters

##### T

`T` = `any`[]

#### Parameters

##### caller

`string`

##### data?

`T`

##### system?

`boolean` = `true`

#### Returns

[`SystemDispatchResult`](../../../../../types/system/dispatch/type-aliases/SystemDispatchResult.md)

#### Implementation of

[`ISystemDispatch`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md).[`dispatch`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md#dispatch)

***

### isKmod()

> **isKmod**(): `void`

Defined in: [src/ts/kernel/module/index.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L36)

#### Returns

`void`

#### Implementation of

[`ISystemDispatch`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md).[`isKmod`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md#iskmod)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`isKmod`](../../../module/classes/KernelModule.md#iskmod)

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

### subscribe()

> **subscribe**\<`T`\>(`event`, `callback`): `number`

Defined in: [src/ts/kernel/mods/dispatch/index.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/dispatch/index.ts#L25)

#### Type Parameters

##### T

`T` = `any`[]

#### Parameters

##### event

`string`

##### callback

(`data`) => `void`

#### Returns

`number`

#### Implementation of

[`ISystemDispatch`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md).[`subscribe`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md#subscribe)

***

### unsubscribeId()

> **unsubscribeId**(`event`, `id`): `void`

Defined in: [src/ts/kernel/mods/dispatch/index.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/dispatch/index.ts#L40)

#### Parameters

##### event

`string`

##### id

`number`

#### Returns

`void`

#### Implementation of

[`ISystemDispatch`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md).[`unsubscribeId`](../../../../../interfaces/modules/ISystemDispatch/interfaces/ISystemDispatch.md#unsubscribeid)
