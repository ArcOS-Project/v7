[**"ArcOS**](../../../../../../README.md)

***

["ArcOS](../../../../../../modules.md) / [ts/kernel/mods/server/connectors](../README.md) / ServerConnector

# Abstract Class: ServerConnector

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L9)

## Extended by

- [`MessagingConnector`](../MessagingConnector/classes/MessagingConnector.md)
- [`ShareConnector`](../ShareConnector/classes/ShareConnector.md)
- [`StoreConnector`](../StoreConnector/classes/StoreConnector.md)
- [`TotpConnector`](../TotpConnector/classes/TotpConnector.md)
- [`TpaConnector`](../TpaConnector/classes/TpaConnector.md)
- [`UserConnector`](../UserConnector/classes/UserConnector.md)

## Implements

- [`IServerConnector`](../../../../../../interfaces/modules/IServerManager/classes/IServerConnector.md)

## Constructors

### Constructor

> **new ServerConnector**(`token?`): `ServerConnector`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L14)

#### Parameters

##### token?

`string`

#### Returns

`ServerConnector`

## Properties

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L12)

#### Implementation of

[`IServerConnector`](../../../../../../interfaces/modules/IServerManager/classes/IServerConnector.md).[`name`](../../../../../../interfaces/modules/IServerManager/classes/IServerConnector.md#name)

***

### prefix

> `protected` **prefix**: `string` = `""`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L10)

***

### token?

> `protected` `optional` **token?**: `string`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L11)

## Accessors

### server

#### Get Signature

> **get** **server**(): `AxiosInstance`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L18)

##### Returns

`AxiosInstance`

#### Implementation of

[`IServerConnector`](../../../../../../interfaces/modules/IServerManager/classes/IServerConnector.md).[`server`](../../../../../../interfaces/modules/IServerManager/classes/IServerConnector.md#server)

## Methods

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L44)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`
