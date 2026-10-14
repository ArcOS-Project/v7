[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/kernel/mods/soundbus](../README.md) / SoundBus

# Class: SoundBus

Defined in: [src/ts/kernel/mods/soundbus/index.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/soundbus/index.ts#L8)

## Extends

- [`KernelModule`](../../../module/classes/KernelModule.md)

## Implements

- [`ISoundbus`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md)

## Constructors

### Constructor

> **new SoundBus**(`kernel`, `id`): `SoundBus`

Defined in: [src/ts/kernel/mods/soundbus/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/soundbus/index.ts#L14)

#### Parameters

##### kernel

[`IWaveKernel`](../../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md)

##### id

`string`

#### Returns

`SoundBus`

#### Overrides

[`KernelModule`](../../../module/classes/KernelModule.md).[`constructor`](../../../module/classes/KernelModule.md#constructor)

## Properties

### id

> **id**: `string`

Defined in: [src/ts/kernel/module/index.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L9)

#### Implementation of

[`ISoundbus`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md).[`id`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md#id)

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

[`ISoundbus`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md).[`__init`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md#__init)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`__init`](../../../module/classes/KernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L20)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISoundbus`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md).[`_init`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md#_init)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`_init`](../../../module/classes/KernelModule.md#_init)

***

### getStore()

> **getStore**(): \[`string`, `string`\][]

Defined in: [src/ts/kernel/mods/soundbus/index.ts:65](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/soundbus/index.ts#L65)

#### Returns

\[`string`, `string`\][]

#### Implementation of

[`ISoundbus`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md).[`getStore`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md#getstore)

***

### isKmod()

> **isKmod**(): `void`

Defined in: [src/ts/kernel/module/index.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L36)

#### Returns

`void`

#### Implementation of

[`ISoundbus`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md).[`isKmod`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md#iskmod)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`isKmod`](../../../module/classes/KernelModule.md#iskmod)

***

### loadExternal()

> **loadExternal**(`source`, `play?`): `void`

Defined in: [src/ts/kernel/mods/soundbus/index.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/soundbus/index.ts#L71)

#### Parameters

##### source

`string`

##### play?

`boolean` = `false`

#### Returns

`void`

#### Implementation of

[`ISoundbus`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md).[`loadExternal`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md#loadexternal)

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

### playSound()

> **playSound**(`id`, `volume?`): `boolean` \| `undefined`

Defined in: [src/ts/kernel/mods/soundbus/index.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/soundbus/index.ts#L22)

#### Parameters

##### id

`string`

##### volume?

`number` = `1`

#### Returns

`boolean` \| `undefined`

#### Implementation of

[`ISoundbus`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md).[`playSound`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md#playsound)

***

### stopSound()

> **stopSound**(`id`): `boolean`

Defined in: [src/ts/kernel/mods/soundbus/index.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/soundbus/index.ts#L47)

#### Parameters

##### id

`string`

#### Returns

`boolean`

#### Implementation of

[`ISoundbus`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md).[`stopSound`](../../../../../interfaces/modules/ISoundbus/interfaces/ISoundbus.md#stopsound)
