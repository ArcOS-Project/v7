[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/modules/IEnvironment](../README.md) / IEnvironment

# Interface: IEnvironment

Defined in: [src/interfaces/modules/IEnvironment.ts:4](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IEnvironment.ts#L4)

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

Defined in: [src/interfaces/modules/IEnvironment.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IEnvironment.ts#L5)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`_init`](../../IKernelModule/interfaces/IKernelModule.md#_init)

***

### delete()

> **delete**(`key`): `boolean`

Defined in: [src/interfaces/modules/IEnvironment.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IEnvironment.ts#L6)

#### Parameters

##### key

`string`

#### Returns

`boolean`

***

### get()

> **get**(`key`): `any`

Defined in: [src/interfaces/modules/IEnvironment.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IEnvironment.ts#L7)

#### Parameters

##### key

`string`

#### Returns

`any`

***

### getAll()

> **getAll**(): `Record`\<`string`, `string`\>

Defined in: [src/interfaces/modules/IEnvironment.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IEnvironment.ts#L9)

#### Returns

`Record`\<`string`, `string`\>

***

### getMultiple()

> **getMultiple**(`keys`): `any`[]

Defined in: [src/interfaces/modules/IEnvironment.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IEnvironment.ts#L8)

#### Parameters

##### keys

`string`[]

#### Returns

`any`[]

***

### isKmod()

> **isKmod**(): `void`

Defined in: [src/interfaces/modules/IKernelModule.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L6)

#### Returns

`void`

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`isKmod`](../../IKernelModule/interfaces/IKernelModule.md#iskmod)

***

### reset()

> **reset**(): `void`

Defined in: [src/interfaces/modules/IEnvironment.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IEnvironment.ts#L14)

#### Returns

`void`

***

### set()

> **set**(`key`, `value`): `boolean`

Defined in: [src/interfaces/modules/IEnvironment.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IEnvironment.ts#L12)

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`boolean`

***

### setMultiple()

> **setMultiple**(`entries`): `void`

Defined in: [src/interfaces/modules/IEnvironment.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IEnvironment.ts#L13)

#### Parameters

##### entries

\[`string`, `any`\][]

#### Returns

`void`

***

### setReadonly()

> **setReadonly**(`key`): `void`

Defined in: [src/interfaces/modules/IEnvironment.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IEnvironment.ts#L10)

#### Parameters

##### key

`string`

#### Returns

`void`

***

### setWritable()

> **setWritable**(`key`): `void`

Defined in: [src/interfaces/modules/IEnvironment.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IEnvironment.ts#L11)

#### Parameters

##### key

`string`

#### Returns

`void`
