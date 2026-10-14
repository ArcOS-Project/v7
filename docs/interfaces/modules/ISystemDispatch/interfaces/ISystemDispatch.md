[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/modules/ISystemDispatch](../README.md) / ISystemDispatch

# Interface: ISystemDispatch

Defined in: [src/interfaces/modules/ISystemDispatch.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/ISystemDispatch.ts#L5)

## Extends

- [`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md)

## Properties

### id

> **id**: `string`

Defined in: [src/interfaces/modules/IKernelModule.ts:3](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L3)

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`id`](../../IKernelModule/interfaces/IKernelModule.md#id)

***

### subscribers

> **subscribers**: `Record`\<`string`, `Record`\<`number`, (`data`) => `void`\>\>

Defined in: [src/interfaces/modules/ISystemDispatch.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/ISystemDispatch.ts#L6)

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

Defined in: [src/interfaces/modules/IKernelModule.ts:4](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L4)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`_init`](../../IKernelModule/interfaces/IKernelModule.md#_init)

***

### discardEvent()

> **discardEvent**(`event`): `void`

Defined in: [src/interfaces/modules/ISystemDispatch.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/ISystemDispatch.ts#L10)

#### Parameters

##### event

`string`

#### Returns

`void`

***

### dispatch()

> **dispatch**\<`T`\>(`caller`, `data?`, `system?`): [`SystemDispatchResult`](../../../../types/system/dispatch/type-aliases/SystemDispatchResult.md)

Defined in: [src/interfaces/modules/ISystemDispatch.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/ISystemDispatch.ts#L11)

#### Type Parameters

##### T

`T` = `any`[]

#### Parameters

##### caller

`string`

##### data?

`T`

##### system?

`boolean`

#### Returns

[`SystemDispatchResult`](../../../../types/system/dispatch/type-aliases/SystemDispatchResult.md)

***

### isKmod()

> **isKmod**(): `void`

Defined in: [src/interfaces/modules/IKernelModule.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L6)

#### Returns

`void`

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`isKmod`](../../IKernelModule/interfaces/IKernelModule.md#iskmod)

***

### subscribe()

> **subscribe**\<`T`\>(`event`, `callback`): `number`

Defined in: [src/interfaces/modules/ISystemDispatch.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/ISystemDispatch.ts#L8)

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

***

### unsubscribeId()

> **unsubscribeId**(`event`, `id`): `void`

Defined in: [src/interfaces/modules/ISystemDispatch.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/ISystemDispatch.ts#L9)

#### Parameters

##### event

`string`

##### id

`number`

#### Returns

`void`
