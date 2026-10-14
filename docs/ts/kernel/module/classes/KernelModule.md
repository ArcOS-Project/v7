[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/kernel/module](../README.md) / KernelModule

# Class: KernelModule

Defined in: [src/ts/kernel/module/index.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L7)

## Extended by

- [`BugHunt`](../../mods/bughunt/classes/BugHunt.md)
- [`SystemDispatch`](../../mods/dispatch/classes/SystemDispatch.md)
- [`Environment`](../../mods/env/classes/Environment.md)
- [`Filesystem`](../../mods/fs/classes/Filesystem.md)
- [`ServerManager`](../../mods/server/classes/ServerManager.md)
- [`SoundBus`](../../mods/soundbus/classes/SoundBus.md)
- [`ProcessHandler`](../../mods/stack/classes/ProcessHandler.md)

## Implements

- [`IKernelModule`](../../../../interfaces/modules/IKernelModule/interfaces/IKernelModule.md)

## Constructors

### Constructor

> **new KernelModule**(`kernel`, `id`): `KernelModule`

Defined in: [src/ts/kernel/module/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L12)

#### Parameters

##### kernel

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md)

##### id

`string`

#### Returns

`KernelModule`

## Properties

### id

> **id**: `string`

Defined in: [src/ts/kernel/module/index.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L9)

#### Implementation of

[`IKernelModule`](../../../../interfaces/modules/IKernelModule/interfaces/IKernelModule.md).[`id`](../../../../interfaces/modules/IKernelModule/interfaces/IKernelModule.md#id)

***

### IS\_KMOD

> `protected` `readonly` **IS\_KMOD**: `true` = `true`

Defined in: [src/ts/kernel/module/index.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L8)

***

### state?

> `protected` `optional` **state?**: [`IStateHandler`](../../../../interfaces/IStateHandler/interfaces/IStateHandler.md)

Defined in: [src/ts/kernel/module/index.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L10)

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IKernelModule`](../../../../interfaces/modules/IKernelModule/interfaces/IKernelModule.md).[`__init`](../../../../interfaces/modules/IKernelModule/interfaces/IKernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L20)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IKernelModule`](../../../../interfaces/modules/IKernelModule/interfaces/IKernelModule.md).[`_init`](../../../../interfaces/modules/IKernelModule/interfaces/IKernelModule.md#_init)

***

### isKmod()

> **isKmod**(): `void`

Defined in: [src/ts/kernel/module/index.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L36)

#### Returns

`void`

#### Implementation of

[`IKernelModule`](../../../../interfaces/modules/IKernelModule/interfaces/IKernelModule.md).[`isKmod`](../../../../interfaces/modules/IKernelModule/interfaces/IKernelModule.md#iskmod)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/module/index.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L30)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`
