[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/kernel/env](../README.md) / Environment

# Class: Environment

Defined in: [src/ts/kernel/env.ts:5](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/env.ts#L5)

## Extends

- [`KernelModule`](../../module/classes/KernelModule.md)

## Constructors

### Constructor

> **new Environment**(`kernel`, `id`): `Environment`

Defined in: [src/ts/kernel/env.ts:9](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/env.ts#L9)

#### Parameters

##### kernel

[`WaveKernel`](../../classes/WaveKernel.md)

##### id

`string`

#### Returns

`Environment`

#### Overrides

[`KernelModule`](../../module/classes/KernelModule.md).[`constructor`](../../module/classes/KernelModule.md#constructor)

## Properties

### id

> **id**: `string`

Defined in: [src/ts/kernel/module/index.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L8)

#### Inherited from

[`KernelModule`](../../module/classes/KernelModule.md).[`id`](../../module/classes/KernelModule.md#id)

***

### IS\_KMOD

> `protected` `readonly` **IS\_KMOD**: `true` = `true`

Defined in: [src/ts/kernel/module/index.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L6)

#### Inherited from

[`KernelModule`](../../module/classes/KernelModule.md).[`IS_KMOD`](../../module/classes/KernelModule.md#is_kmod)

***

### kernel

> `protected` **kernel**: [`WaveKernel`](../../classes/WaveKernel.md)

Defined in: [src/ts/kernel/module/index.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L7)

#### Inherited from

[`KernelModule`](../../module/classes/KernelModule.md).[`kernel`](../../module/classes/KernelModule.md#kernel)

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`KernelModule`](../../module/classes/KernelModule.md).[`__init`](../../module/classes/KernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/env.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/env.ts#L13)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`KernelModule`](../../module/classes/KernelModule.md).[`_init`](../../module/classes/KernelModule.md#_init)

***

### delete()

> **delete**(`key`): `boolean`

Defined in: [src/ts/kernel/env.ts:53](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/env.ts#L53)

#### Parameters

##### key

`string`

#### Returns

`boolean`

***

### get()

> **get**(`key`): `any`

Defined in: [src/ts/kernel/env.ts:65](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/env.ts#L65)

#### Parameters

##### key

`string`

#### Returns

`any`

***

### getMultiple()

> **getMultiple**(`keys`): `any`[]

Defined in: [src/ts/kernel/env.ts:71](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/env.ts#L71)

#### Parameters

##### keys

`string`[]

#### Returns

`any`[]

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

[`KernelModule`](../../module/classes/KernelModule.md).[`Log`](../../module/classes/KernelModule.md#log)

***

### reset()

> **reset**(): `void`

Defined in: [src/ts/kernel/env.ts:107](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/env.ts#L107)

#### Returns

`void`

***

### set()

> **set**(`key`, `value`): `boolean`

Defined in: [src/ts/kernel/env.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/env.ts#L23)

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

Defined in: [src/ts/kernel/env.ts:45](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/env.ts#L45)

#### Parameters

##### entries

\[`string`, `any`\][]

#### Returns

`void`

***

### setReadonly()

> **setReadonly**(`key`): `void`

Defined in: [src/ts/kernel/env.ts:83](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/env.ts#L83)

#### Parameters

##### key

`string`

#### Returns

`void`

***

### setWritable()

> **setWritable**(`key`): `void`

Defined in: [src/ts/kernel/env.ts:95](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/env.ts#L95)

#### Parameters

##### key

`string`

#### Returns

`void`
