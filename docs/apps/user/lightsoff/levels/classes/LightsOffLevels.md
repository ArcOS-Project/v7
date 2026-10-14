[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/user/lightsoff/levels](../README.md) / LightsOffLevels

# Class: LightsOffLevels

Defined in: [src/apps/user/lightsoff/levels.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/lightsoff/levels.ts#L5)

## Implements

- [`ILightsOffLevels`](../../../../../interfaces/runtimes/ILightsOffRuntime/interfaces/ILightsOffLevels.md)

## Constructors

### Constructor

> **new LightsOffLevels**(`runtime`): `LightsOffLevels`

Defined in: [src/apps/user/lightsoff/levels.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/lightsoff/levels.ts#L8)

#### Parameters

##### runtime

[`ILightsOffRuntime`](../../../../../interfaces/runtimes/ILightsOffRuntime/interfaces/ILightsOffRuntime.md)

#### Returns

`LightsOffLevels`

## Properties

### runtime

> **runtime**: [`ILightsOffRuntime`](../../../../../interfaces/runtimes/ILightsOffRuntime/interfaces/ILightsOffRuntime.md)

Defined in: [src/apps/user/lightsoff/levels.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/lightsoff/levels.ts#L6)

#### Implementation of

[`ILightsOffLevels`](../../../../../interfaces/runtimes/ILightsOffRuntime/interfaces/ILightsOffLevels.md).[`runtime`](../../../../../interfaces/runtimes/ILightsOffRuntime/interfaces/ILightsOffLevels.md#runtime)

## Methods

### checkNextLevel()

> **checkNextLevel**(): `Promise`\<`boolean`\>

Defined in: [src/apps/user/lightsoff/levels.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/lightsoff/levels.ts#L79)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ILightsOffLevels`](../../../../../interfaces/runtimes/ILightsOffRuntime/interfaces/ILightsOffLevels.md).[`checkNextLevel`](../../../../../interfaces/runtimes/ILightsOffRuntime/interfaces/ILightsOffLevels.md#checknextlevel)

***

### loadLevel()

> **loadLevel**(`level`): `boolean` \| `undefined`

Defined in: [src/apps/user/lightsoff/levels.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/lightsoff/levels.ts#L71)

#### Parameters

##### level

`number`

#### Returns

`boolean` \| `undefined`

#### Implementation of

[`ILightsOffLevels`](../../../../../interfaces/runtimes/ILightsOffRuntime/interfaces/ILightsOffLevels.md).[`loadLevel`](../../../../../interfaces/runtimes/ILightsOffRuntime/interfaces/ILightsOffLevels.md#loadlevel)
