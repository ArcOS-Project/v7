[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/server/connectors/TotpConnector](../README.md) / TotpConnector

# Class: TotpConnector

Defined in: [src/ts/kernel/mods/server/connectors/TotpConnector.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/TotpConnector.ts#L9)

## Extends

- [`ServerConnector`](../../classes/ServerConnector.md)

## Implements

- [`ITotpConnector`](../../../../../../../interfaces/modules/server/ITotpConnector/interfaces/ITotpConnector.md)

## Constructors

### Constructor

> **new TotpConnector**(`token?`): `TotpConnector`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L14)

#### Parameters

##### token?

`string`

#### Returns

`TotpConnector`

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`constructor`](../../classes/ServerConnector.md#constructor)

## Properties

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L12)

#### Implementation of

[`ITotpConnector`](../../../../../../../interfaces/modules/server/ITotpConnector/interfaces/ITotpConnector.md).[`name`](../../../../../../../interfaces/modules/server/ITotpConnector/interfaces/ITotpConnector.md#name)

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`name`](../../classes/ServerConnector.md#name)

***

### prefix

> **prefix**: `string` = `"/totp"`

Defined in: [src/ts/kernel/mods/server/connectors/TotpConnector.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/TotpConnector.ts#L10)

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

[`ITotpConnector`](../../../../../../../interfaces/modules/server/ITotpConnector/interfaces/ITotpConnector.md).[`server`](../../../../../../../interfaces/modules/server/ITotpConnector/interfaces/ITotpConnector.md#server)

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`server`](../../classes/ServerConnector.md#server)

## Methods

### Activate()

> **Activate**(`code`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/TotpConnector.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/TotpConnector.ts#L12)

#### Parameters

##### code

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`ITotpConnector`](../../../../../../../interfaces/modules/server/ITotpConnector/interfaces/ITotpConnector.md).[`Activate`](../../../../../../../interfaces/modules/server/ITotpConnector/interfaces/ITotpConnector.md#activate)

***

### Auth()

> **Auth**(`code`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/TotpConnector.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/TotpConnector.ts#L20)

#### Parameters

##### code

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`ITotpConnector`](../../../../../../../interfaces/modules/server/ITotpConnector/interfaces/ITotpConnector.md).[`Auth`](../../../../../../../interfaces/modules/server/ITotpConnector/interfaces/ITotpConnector.md#auth)

***

### Delete()

> **Delete**(): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`DeleteResult`](../../../../../../../types/external/mongo/interfaces/DeleteResult.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/TotpConnector.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/TotpConnector.ts#L27)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`DeleteResult`](../../../../../../../types/external/mongo/interfaces/DeleteResult.md)\>\>

#### Implementation of

[`ITotpConnector`](../../../../../../../interfaces/modules/server/ITotpConnector/interfaces/ITotpConnector.md).[`Delete`](../../../../../../../interfaces/modules/server/ITotpConnector/interfaces/ITotpConnector.md#delete)

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

### Setup()

> **Setup**(): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`TotpSetupResponse`](../../../../../../../types/user/interfaces/TotpSetupResponse.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/TotpConnector.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/TotpConnector.ts#L35)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`TotpSetupResponse`](../../../../../../../types/user/interfaces/TotpSetupResponse.md)\>\>

#### Implementation of

[`ITotpConnector`](../../../../../../../interfaces/modules/server/ITotpConnector/interfaces/ITotpConnector.md).[`Setup`](../../../../../../../interfaces/modules/server/ITotpConnector/interfaces/ITotpConnector.md#setup)

***

### Unlock()

> **Unlock**(`code`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`UpdateResult`](../../../../../../../types/external/mongo/interfaces/UpdateResult.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/TotpConnector.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/TotpConnector.ts#L43)

#### Parameters

##### code

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`UpdateResult`](../../../../../../../types/external/mongo/interfaces/UpdateResult.md)\>\>

#### Implementation of

[`ITotpConnector`](../../../../../../../interfaces/modules/server/ITotpConnector/interfaces/ITotpConnector.md).[`Unlock`](../../../../../../../interfaces/modules/server/ITotpConnector/interfaces/ITotpConnector.md#unlock)
