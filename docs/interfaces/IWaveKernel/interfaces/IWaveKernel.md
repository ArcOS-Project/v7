[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/IWaveKernel](../README.md) / IWaveKernel

# Interface: IWaveKernel

Defined in: [src/interfaces/IWaveKernel.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L5)

## Properties

### ARCOS\_BUILD

> **ARCOS\_BUILD**: `string`

Defined in: [src/interfaces/IWaveKernel.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L15)

***

### ARCOS\_LICENSE

> **ARCOS\_LICENSE**: `string`

Defined in: [src/interfaces/IWaveKernel.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L16)

***

### ARCOS\_MODE

> **ARCOS\_MODE**: `string`

Defined in: [src/interfaces/IWaveKernel.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L14)

***

### init

> **init**: [`IProcess`](../../IProcess/interfaces/IProcess.md) \| `undefined`

Defined in: [src/interfaces/IWaveKernel.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L10)

***

### initPid

> **initPid**: `number`

Defined in: [src/interfaces/IWaveKernel.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L12)

***

### Logs

> **Logs**: [`LogItem`](../../../types/shared/logging/interfaces/LogItem.md)[]

Defined in: [src/interfaces/IWaveKernel.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L7)

***

### modules

> **modules**: `string`[]

Defined in: [src/interfaces/IWaveKernel.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L6)

***

### PANICKED

> **PANICKED**: `boolean`

Defined in: [src/interfaces/IWaveKernel.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L8)

***

### params

> **params**: `URLSearchParams`

Defined in: [src/interfaces/IWaveKernel.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L13)

***

### PREMATURE

> **PREMATURE**: `boolean`

Defined in: [src/interfaces/IWaveKernel.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L17)

***

### startMs

> **startMs**: `number`

Defined in: [src/interfaces/IWaveKernel.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L9)

***

### state

> **state**: [`IStateHandler`](../../IStateHandler/interfaces/IStateHandler.md) \| `undefined`

Defined in: [src/interfaces/IWaveKernel.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L11)

## Methods

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IWaveKernel.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L18)

#### Returns

`Promise`\<`void`\>

***

### getModule()

> **getModule**\<`T`\>(`id`, `dontCrash?`): `T`

Defined in: [src/interfaces/IWaveKernel.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L19)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### id

`string`

##### dontCrash?

`boolean`

#### Returns

`T`

***

### Log()

> **Log**(`source`, `message`, `level?`): `void`

Defined in: [src/interfaces/IWaveKernel.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L20)

#### Parameters

##### source

`string`

##### message

`string`

##### level?

[`LogLevel`](../../../types/shared/logging/enumerations/LogLevel.md)

#### Returns

`void`

***

### panic()

> **panic**(`reason`, `brief?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IWaveKernel.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IWaveKernel.ts#L21)

#### Parameters

##### reason

`string`

##### brief?

`string`

#### Returns

`Promise`\<`void`\>
