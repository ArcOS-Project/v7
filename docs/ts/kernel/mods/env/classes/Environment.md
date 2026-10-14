[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/kernel/mods/env](../README.md) / Environment

# Class: Environment

Defined in: [src/ts/kernel/mods/env.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/env.ts#L5)

## Extends

- [`KernelModule`](../../../module/classes/KernelModule.md)

## Implements

- [`IEnvironment`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md)

## Constructors

### Constructor

> **new Environment**(`kernel`, `id`): `Environment`

Defined in: [src/ts/kernel/mods/env.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/env.ts#L11)

#### Parameters

##### kernel

[`IWaveKernel`](../../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md)

##### id

`string`

#### Returns

`Environment`

#### Overrides

[`KernelModule`](../../../module/classes/KernelModule.md).[`constructor`](../../../module/classes/KernelModule.md#constructor)

## Properties

### id

> **id**: `string`

Defined in: [src/ts/kernel/module/index.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L9)

#### Implementation of

[`IEnvironment`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md).[`id`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md#id)

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

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEnvironment`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md).[`__init`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md#__init)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`__init`](../../../module/classes/KernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/env.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/env.ts#L15)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IEnvironment`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md).[`_init`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md#_init)

#### Overrides

[`KernelModule`](../../../module/classes/KernelModule.md).[`_init`](../../../module/classes/KernelModule.md#_init)

***

### delete()

> **delete**(`key`): `boolean`

Defined in: [src/ts/kernel/mods/env.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/env.ts#L51)

#### Parameters

##### key

`string`

#### Returns

`boolean`

#### Implementation of

[`IEnvironment`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md).[`delete`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md#delete)

***

### get()

> **get**(`key`): `any`

Defined in: [src/ts/kernel/mods/env.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/env.ts#L63)

#### Parameters

##### key

`string`

#### Returns

`any`

#### Implementation of

[`IEnvironment`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md).[`get`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md#get)

***

### getAll()

> **getAll**(): `Record`\<`string`, `string`\>

Defined in: [src/ts/kernel/mods/env.ts:112](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/env.ts#L112)

#### Returns

`Record`\<`string`, `string`\>

#### Implementation of

[`IEnvironment`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md).[`getAll`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md#getall)

***

### getMultiple()

> **getMultiple**(`keys`): `any`[]

Defined in: [src/ts/kernel/mods/env.ts:69](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/env.ts#L69)

#### Parameters

##### keys

`string`[]

#### Returns

`any`[]

#### Implementation of

[`IEnvironment`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md).[`getMultiple`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md#getmultiple)

***

### isKmod()

> **isKmod**(): `void`

Defined in: [src/ts/kernel/module/index.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L36)

#### Returns

`void`

#### Implementation of

[`IEnvironment`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md).[`isKmod`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md#iskmod)

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

### reset()

> **reset**(): `void`

Defined in: [src/ts/kernel/mods/env.ts:105](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/env.ts#L105)

#### Returns

`void`

#### Implementation of

[`IEnvironment`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md).[`reset`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md#reset)

***

### set()

> **set**(`key`, `value`): `boolean`

Defined in: [src/ts/kernel/mods/env.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/env.ts#L21)

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`boolean`

#### Implementation of

[`IEnvironment`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md).[`set`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md#set)

***

### setMultiple()

> **setMultiple**(`entries`): `void`

Defined in: [src/ts/kernel/mods/env.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/env.ts#L43)

#### Parameters

##### entries

\[`string`, `any`\][]

#### Returns

`void`

#### Implementation of

[`IEnvironment`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md).[`setMultiple`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md#setmultiple)

***

### setReadonly()

> **setReadonly**(`key`): `void`

Defined in: [src/ts/kernel/mods/env.ts:81](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/env.ts#L81)

#### Parameters

##### key

`string`

#### Returns

`void`

#### Implementation of

[`IEnvironment`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md).[`setReadonly`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md#setreadonly)

***

### setWritable()

> **setWritable**(`key`): `void`

Defined in: [src/ts/kernel/mods/env.ts:93](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/env.ts#L93)

#### Parameters

##### key

`string`

#### Returns

`void`

#### Implementation of

[`IEnvironment`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md).[`setWritable`](../../../../../interfaces/modules/IEnvironment/interfaces/IEnvironment.md#setwritable)
