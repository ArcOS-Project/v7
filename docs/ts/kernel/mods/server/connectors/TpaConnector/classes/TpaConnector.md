[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/server/connectors/TpaConnector](../README.md) / TpaConnector

# Class: TpaConnector

Defined in: [src/ts/kernel/mods/server/connectors/TpaConnector.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/TpaConnector.ts#L9)

## Extends

- [`ServerConnector`](../../classes/ServerConnector.md)

## Implements

- [`ITpaConnector`](../../../../../../../interfaces/modules/server/ITpaConnector/interfaces/ITpaConnector.md)

## Constructors

### Constructor

> **new TpaConnector**(`token?`): `TpaConnector`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L14)

#### Parameters

##### token?

`string`

#### Returns

`TpaConnector`

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`constructor`](../../classes/ServerConnector.md#constructor)

## Properties

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L12)

#### Implementation of

[`ITpaConnector`](../../../../../../../interfaces/modules/server/ITpaConnector/interfaces/ITpaConnector.md).[`name`](../../../../../../../interfaces/modules/server/ITpaConnector/interfaces/ITpaConnector.md#name)

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`name`](../../classes/ServerConnector.md#name)

***

### prefix

> **prefix**: `string` = `"/tpa"`

Defined in: [src/ts/kernel/mods/server/connectors/TpaConnector.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/TpaConnector.ts#L10)

#### Overrides

[`ServerConnector`](../../classes/ServerConnector.md).[`prefix`](../../classes/ServerConnector.md#prefix)

***

### token?

> `protected` `optional` **token?**: `string`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L11)

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`token`](../../classes/ServerConnector.md#token)

## Accessors

### server

#### Get Signature

> **get** **server**(): `AxiosInstance`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L18)

##### Returns

`AxiosInstance`

#### Implementation of

[`ITpaConnector`](../../../../../../../interfaces/modules/server/ITpaConnector/interfaces/ITpaConnector.md).[`server`](../../../../../../../interfaces/modules/server/ITpaConnector/interfaces/ITpaConnector.md#server)

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`server`](../../classes/ServerConnector.md#server)

## Methods

### CreateUrl()

> **CreateUrl**(`contents`, `userId`, `appId`, `filename`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/TpaConnector.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/TpaConnector.ts#L12)

#### Parameters

##### contents

`string`

##### userId

`string`

##### appId

`string`

##### filename

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

#### Implementation of

[`ITpaConnector`](../../../../../../../interfaces/modules/server/ITpaConnector/interfaces/ITpaConnector.md).[`CreateUrl`](../../../../../../../interfaces/modules/server/ITpaConnector/interfaces/ITpaConnector.md#createurl)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L44)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`Log`](../../classes/ServerConnector.md#log)

***

### ScriptUrl()

> **ScriptUrl**(`userId`, `appId`, `filename`): `string`

Defined in: [src/ts/kernel/mods/server/connectors/TpaConnector.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/TpaConnector.ts#L25)

#### Parameters

##### userId

`string`

##### appId

`string`

##### filename

`string`

#### Returns

`string`

#### Implementation of

[`ITpaConnector`](../../../../../../../interfaces/modules/server/ITpaConnector/interfaces/ITpaConnector.md).[`ScriptUrl`](../../../../../../../interfaces/modules/server/ITpaConnector/interfaces/ITpaConnector.md#scripturl)
