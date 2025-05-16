[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [ts/server](../README.md) / ServerManager

# Class: ServerManager

Defined in: [src/ts/server/index.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/index.ts#L8)

## Extends

- [`KernelModule`](../../kernel/module/classes/KernelModule.md)

## Constructors

### Constructor

> **new ServerManager**(`kernel`, `id`): `ServerManager`

Defined in: [src/ts/server/index.ts:32](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/index.ts#L32)

#### Parameters

##### kernel

[`WaveKernel`](../../kernel/classes/WaveKernel.md)

##### id

`string`

#### Returns

`ServerManager`

#### Overrides

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`constructor`](../../kernel/module/classes/KernelModule.md#constructor)

## Properties

### connected

> **connected**: `boolean` = `false`

Defined in: [src/ts/server/index.ts:10](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/index.ts#L10)

***

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

***

### serverInfo

> **serverInfo**: `undefined` \| [`ServerInfo`](../../../types/server/interfaces/ServerInfo.md)

Defined in: [src/ts/server/index.ts:11](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/index.ts#L11)

***

### url

> **url**: `string` = `""`

Defined in: [src/ts/server/index.ts:9](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/index.ts#L9)

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

Defined in: [src/ts/server/index.ts:36](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/index.ts#L36)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`_init`](../../kernel/module/classes/KernelModule.md#_init)

***

### checkEmailAvailability()

> **checkEmailAvailability**(`email`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/index.ts:95](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/index.ts#L95)

#### Parameters

##### email

`string`

#### Returns

`Promise`\<`boolean`\>

***

### checkUsernameAvailability()

> **checkUsernameAvailability**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/index.ts:83](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/index.ts#L83)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

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

### isConnected()

> `static` **isConnected**(): `boolean`

Defined in: [src/ts/server/index.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/index.ts#L13)

#### Returns

`boolean`

***

### url()

> `static` **url**(): `undefined` \| `string` \| `false`

Defined in: [src/ts/server/index.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/index.ts#L22)

#### Returns

`undefined` \| `string` \| `false`
