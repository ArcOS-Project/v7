[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/modules/ISoundbus](../README.md) / ISoundbus

# Interface: ISoundbus

Defined in: [src/interfaces/modules/ISoundbus.ts:4](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/ISoundbus.ts#L4)

## Extends

- [`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md)

## Properties

### id

> **id**: `string`

Defined in: [src/interfaces/modules/IKernelModule.ts:3](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L3)

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`id`](../../IKernelModule/interfaces/IKernelModule.md#id)

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

### getStore()

> **getStore**(): \[`string`, `string`\][]

Defined in: [src/interfaces/modules/ISoundbus.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/ISoundbus.ts#L7)

#### Returns

\[`string`, `string`\][]

***

### isKmod()

> **isKmod**(): `void`

Defined in: [src/interfaces/modules/IKernelModule.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L6)

#### Returns

`void`

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`isKmod`](../../IKernelModule/interfaces/IKernelModule.md#iskmod)

***

### loadExternal()

> **loadExternal**(`source`, `play?`): `void`

Defined in: [src/interfaces/modules/ISoundbus.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/ISoundbus.ts#L8)

#### Parameters

##### source

`string`

##### play?

`boolean`

#### Returns

`void`

***

### playSound()

> **playSound**(`id`, `volume?`): `boolean` \| `undefined`

Defined in: [src/interfaces/modules/ISoundbus.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/ISoundbus.ts#L5)

#### Parameters

##### id

`string`

##### volume?

`number`

#### Returns

`boolean` \| `undefined`

***

### stopSound()

> **stopSound**(`id`): `boolean`

Defined in: [src/interfaces/modules/ISoundbus.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/ISoundbus.ts#L6)

#### Parameters

##### id

`string`

#### Returns

`boolean`
