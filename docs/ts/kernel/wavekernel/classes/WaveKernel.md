[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/kernel/wavekernel](../README.md) / WaveKernel

# Class: WaveKernel

Defined in: [src/ts/kernel/wavekernel.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L19)

## Implements

- [`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md)

## Constructors

### Constructor

> **new WaveKernel**(): `WaveKernel`

Defined in: [src/ts/kernel/wavekernel.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L33)

#### Returns

`WaveKernel`

## Properties

### ARCOS\_BUILD

> **ARCOS\_BUILD**: `string` = `""`

Defined in: [src/ts/kernel/wavekernel.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L29)

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`ARCOS_BUILD`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#arcos_build)

***

### ARCOS\_LICENSE

> **ARCOS\_LICENSE**: `string` = `"not here yet"`

Defined in: [src/ts/kernel/wavekernel.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L30)

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`ARCOS_LICENSE`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#arcos_license)

***

### ARCOS\_MODE

> **ARCOS\_MODE**: `string` = `"release"`

Defined in: [src/ts/kernel/wavekernel.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L28)

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`ARCOS_MODE`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#arcos_mode)

***

### init

> **init**: [`InitProcess`](../../init/classes/InitProcess.md) \| `undefined`

Defined in: [src/ts/kernel/wavekernel.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L24)

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`init`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#init)

***

### initPid

> **initPid**: `number` = `-1`

Defined in: [src/ts/kernel/wavekernel.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L26)

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`initPid`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#initpid)

***

### Logs

> **Logs**: [`LogItem`](../../../../types/shared/logging/interfaces/LogItem.md)[] = `[]`

Defined in: [src/ts/kernel/wavekernel.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L22)

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`Logs`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#logs)

***

### modules

> **modules**: `string`[] = `[]`

Defined in: [src/ts/kernel/wavekernel.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L20)

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`modules`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#modules)

***

### PANICKED

> **PANICKED**: `boolean` = `false`

Defined in: [src/ts/kernel/wavekernel.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L21)

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`PANICKED`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#panicked)

***

### params

> **params**: `URLSearchParams`

Defined in: [src/ts/kernel/wavekernel.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L27)

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`params`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#params)

***

### PREMATURE

> **PREMATURE**: `boolean` = `true`

Defined in: [src/ts/kernel/wavekernel.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L31)

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`PREMATURE`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#premature)

***

### startMs

> **startMs**: `number`

Defined in: [src/ts/kernel/wavekernel.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L23)

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`startMs`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#startms)

***

### state

> **state**: [`IStateHandler`](../../../../interfaces/IStateHandler/interfaces/IStateHandler.md) \| `undefined`

Defined in: [src/ts/kernel/wavekernel.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L25)

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`state`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#state)

## Methods

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/wavekernel.ts:68](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L68)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`_init`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#_init)

***

### getModule()

> **getModule**\<`T`\>(`id`, `dontCrash?`): `T`

Defined in: [src/ts/kernel/wavekernel.ts:101](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L101)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### id

`string`

##### dontCrash?

`boolean` = `false`

#### Returns

`T`

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`getModule`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#getmodule)

***

### Log()

> **Log**(`source`, `message`, `level?`): `void`

Defined in: [src/ts/kernel/wavekernel.ts:124](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L124)

#### Parameters

##### source

`string`

##### message

`string`

##### level?

[`LogLevel`](../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`Log`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#log)

***

### panic()

> **panic**(`reason`, `brief?`): `Promise`\<`void`\>

Defined in: [src/ts/kernel/wavekernel.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/wavekernel.ts#L48)

#### Parameters

##### reason

`string`

##### brief?

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWaveKernel`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md).[`panic`](../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md#panic)
