[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [ts/soundbus](../README.md) / SoundBus

# Class: SoundBus

Defined in: [src/ts/soundbus/index.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/soundbus/index.ts#L7)

## Extends

- [`KernelModule`](../../kernel/module/classes/KernelModule.md)

## Constructors

### Constructor

> **new SoundBus**(`kernel`, `id`): `SoundBus`

Defined in: [src/ts/soundbus/index.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/soundbus/index.ts#L12)

#### Parameters

##### kernel

[`WaveKernel`](../../kernel/classes/WaveKernel.md)

##### id

`string`

#### Returns

`SoundBus`

#### Overrides

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`constructor`](../../kernel/module/classes/KernelModule.md#constructor)

## Properties

### id

> **id**: `string`

Defined in: [src/ts/kernel/module/index.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L8)

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`id`](../../kernel/module/classes/KernelModule.md#id)

***

### IS\_KMOD

> `protected` `readonly` **IS\_KMOD**: `true` = `true`

Defined in: [src/ts/kernel/module/index.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L6)

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`IS_KMOD`](../../kernel/module/classes/KernelModule.md#is_kmod)

***

### kernel

> `protected` **kernel**: [`WaveKernel`](../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/kernel/module/index.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L7)

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`kernel`](../../kernel/module/classes/KernelModule.md#kernel)

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`__init`](../../kernel/module/classes/KernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L20)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`_init`](../../kernel/module/classes/KernelModule.md#_init)

***

### getStore()

> **getStore**(): \[`string`, `string`\][]

Defined in: [src/ts/soundbus/index.ts:62](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/soundbus/index.ts#L62)

#### Returns

\[`string`, `string`\][]

***

### loadExternal()

> **loadExternal**(`source`, `play`): `void`

Defined in: [src/ts/soundbus/index.ts:68](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/soundbus/index.ts#L68)

#### Parameters

##### source

`string`

##### play

`boolean` = `false`

#### Returns

`void`

***

### Log()

> `protected` **Log**(`message`, `level`): `void`

Defined in: [src/ts/kernel/module/index.ts:30](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L30)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`Log`](../../kernel/module/classes/KernelModule.md#log)

***

### playSound()

> **playSound**(`id`, `volume`): `undefined` \| `boolean`

Defined in: [src/ts/soundbus/index.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/soundbus/index.ts#L19)

#### Parameters

##### id

`string`

##### volume

`number` = `1`

#### Returns

`undefined` \| `boolean`

***

### stopSound()

> **stopSound**(`id`): `boolean`

Defined in: [src/ts/soundbus/index.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/soundbus/index.ts#L44)

#### Parameters

##### id

`string`

#### Returns

`boolean`
