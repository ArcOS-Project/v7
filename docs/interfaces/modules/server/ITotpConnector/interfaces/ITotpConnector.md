[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [interfaces/modules/server/ITotpConnector](../README.md) / ITotpConnector

# Interface: ITotpConnector

Defined in: [src/interfaces/modules/server/ITotpConnector.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/ITotpConnector.ts#L7)

## Extends

- [`IServerConnector`](../../../IServerManager/classes/IServerConnector.md)

## Properties

### name

> **name**: `string`

Defined in: [src/interfaces/modules/IServerManager.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L29)

#### Inherited from

[`IServerConnector`](../../../IServerManager/classes/IServerConnector.md).[`name`](../../../IServerManager/classes/IServerConnector.md#name)

## Accessors

### server

#### Get Signature

> **get** **server**(): `AxiosInstance`

Defined in: [src/interfaces/modules/IServerManager.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L30)

##### Returns

`AxiosInstance`

#### Inherited from

[`IServerConnector`](../../../IServerManager/classes/IServerConnector.md).[`server`](../../../IServerManager/classes/IServerConnector.md#server)

## Methods

### Activate()

> **Activate**(`code`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/ITotpConnector.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/ITotpConnector.ts#L8)

#### Parameters

##### code

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### Auth()

> **Auth**(`code`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/ITotpConnector.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/ITotpConnector.ts#L9)

#### Parameters

##### code

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### Delete()

> **Delete**(): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`DeleteResult`](../../../../../types/external/mongo/interfaces/DeleteResult.md)\>\>

Defined in: [src/interfaces/modules/server/ITotpConnector.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/ITotpConnector.ts#L10)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`DeleteResult`](../../../../../types/external/mongo/interfaces/DeleteResult.md)\>\>

***

### Setup()

> **Setup**(): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`TotpSetupResponse`](../../../../../types/user/interfaces/TotpSetupResponse.md)\>\>

Defined in: [src/interfaces/modules/server/ITotpConnector.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/ITotpConnector.ts#L11)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`TotpSetupResponse`](../../../../../types/user/interfaces/TotpSetupResponse.md)\>\>

***

### Unlock()

> **Unlock**(`code`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`UpdateResult`](../../../../../types/external/mongo/interfaces/UpdateResult.md)\>\>

Defined in: [src/interfaces/modules/server/ITotpConnector.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/ITotpConnector.ts#L12)

#### Parameters

##### code

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`UpdateResult`](../../../../../types/external/mongo/interfaces/UpdateResult.md)\>\>
