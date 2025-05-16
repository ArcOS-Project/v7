[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [ts/msl](../README.md) / ArcMSL

# Class: ArcMSL

Defined in: [src/ts/msl/index.ts:9](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/index.ts#L9)

## Extends

- [`KernelModule`](../../kernel/module/classes/KernelModule.md)

## Constructors

### Constructor

> **new ArcMSL**(`kernel`, `id`): `ArcMSL`

Defined in: [src/ts/msl/index.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/index.ts#L13)

#### Parameters

##### kernel

[`WaveKernel`](../../kernel/classes/WaveKernel.md)

##### id

`string`

#### Returns

`ArcMSL`

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

Defined in: [src/ts/msl/index.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/index.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`_init`](../../kernel/module/classes/KernelModule.md#_init)

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

### run()

> **run**(`source`, `parent`, `options`): `Promise`\<`undefined` \| `string`[]\>

Defined in: [src/ts/msl/index.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/index.ts#L23)

#### Parameters

##### source

`string`

##### parent

`number`

##### options

[`LanguageOptions`](../../../types/msl/interfaces/LanguageOptions.md) = `DefaultLanguageOptions`

#### Returns

`Promise`\<`undefined` \| `string`[]\>
