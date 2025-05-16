[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [ts/kernel](../README.md) / WaveKernel

# Class: WaveKernel

Defined in: [src/ts/kernel/index.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L15)

## Constructors

### Constructor

> **new WaveKernel**(): `WaveKernel`

Defined in: [src/ts/kernel/index.ts:42](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L42)

#### Returns

`WaveKernel`

## Properties

### ARCOS\_BUILD

> **ARCOS\_BUILD**: `string` = `"unknown"`

Defined in: [src/ts/kernel/index.ts:25](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L25)

***

### ARCOS\_LICENSE

> **ARCOS\_LICENSE**: `string` = `"not here yet"`

Defined in: [src/ts/kernel/index.ts:26](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L26)

***

### ARCOS\_MODE

> **ARCOS\_MODE**: `string` = `"release"`

Defined in: [src/ts/kernel/index.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L24)

***

### BUGREP\_TITLE

> **BUGREP\_TITLE**: `string` = `"Premature kernel failure"`

Defined in: [src/ts/kernel/index.ts:27](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L27)

***

### init

> **init**: `undefined` \| [`InitProcess`](../init/classes/InitProcess.md)

Defined in: [src/ts/kernel/index.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L20)

***

### initPid

> **initPid**: `number` = `-1`

Defined in: [src/ts/kernel/index.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L22)

***

### Logs

> **Logs**: [`ReadableStore`](../../writable/type-aliases/ReadableStore.md)\<[`LogItem`](../../../types/logging/interfaces/LogItem.md)[]\>

Defined in: [src/ts/kernel/index.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L18)

***

### params

> **params**: `URLSearchParams`

Defined in: [src/ts/kernel/index.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L23)

***

### startMs

> **startMs**: `number`

Defined in: [src/ts/kernel/index.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L19)

***

### state

> **state**: `undefined` \| [`StateHandler`](../../state/classes/StateHandler.md)

Defined in: [src/ts/kernel/index.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L21)

## Methods

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/index.ts:77](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L77)

#### Returns

`Promise`\<`void`\>

***

### getModule()

> **getModule**\<`T`\>(`id`, `dontCrash`): `T`

Defined in: [src/ts/kernel/index.ts:102](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L102)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### id

`string`

##### dontCrash

`boolean` = `false`

#### Returns

`T`

***

### Log()

> **Log**(`source`, `message`, `level`): `void`

Defined in: [src/ts/kernel/index.ts:125](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L125)

#### Parameters

##### source

`string`

##### message

`string`

##### level

[`LogLevel`](../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

***

### get()

> `static` **get**(): `WaveKernel`

Defined in: [src/ts/kernel/index.ts:29](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L29)

#### Returns

`WaveKernel`

***

### isPanicked()

> `static` **isPanicked**(): `boolean`

Defined in: [src/ts/kernel/index.ts:38](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L38)

#### Returns

`boolean`

***

### panic()

> `static` **panic**(`reason`): `Promise`\<`void`\>

Defined in: [src/ts/kernel/index.ts:55](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/index.ts#L55)

#### Parameters

##### reason

`string`

#### Returns

`Promise`\<`void`\>
