[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/kernel/module](../README.md) / KernelModule

# Class: KernelModule

Defined in: [src/ts/kernel/module/index.ts:5](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L5)

## Extended by

- [`BugHunt`](../../../bughunt/classes/BugHunt.md)
- [`SystemDispatch`](../../../dispatch/classes/SystemDispatch.md)
- [`Filesystem`](../../../fs/classes/Filesystem.md)
- [`Environment`](../../env/classes/Environment.md)
- [`ArcLang`](../../../lang/classes/ArcLang.md)
- [`ArcMSL`](../../../msl/classes/ArcMSL.md)
- [`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)
- [`ServerManager`](../../../server/classes/ServerManager.md)
- [`SoundBus`](../../../soundbus/classes/SoundBus.md)

## Constructors

### Constructor

> **new KernelModule**(`kernel`, `id`): `KernelModule`

Defined in: [src/ts/kernel/module/index.ts:10](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L10)

#### Parameters

##### kernel

[`WaveKernel`](../../classes/WaveKernel.md)

##### id

`string`

#### Returns

`KernelModule`

## Properties

### id

> **id**: `string`

Defined in: [src/ts/kernel/module/index.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L8)

***

### IS\_KMOD

> `protected` `readonly` **IS\_KMOD**: `true` = `true`

Defined in: [src/ts/kernel/module/index.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L6)

***

### kernel

> `protected` **kernel**: [`WaveKernel`](../../classes/WaveKernel.md)

Defined in: [src/ts/kernel/module/index.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L7)

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L24)

#### Returns

`Promise`\<`void`\>

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L20)

#### Returns

`Promise`\<`void`\>

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
