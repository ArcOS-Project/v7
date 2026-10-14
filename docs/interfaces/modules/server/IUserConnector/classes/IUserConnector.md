[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [interfaces/modules/server/IUserConnector](../README.md) / IUserConnector

# Class: IUserConnector

Defined in: [src/interfaces/modules/server/IUserConnector.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IUserConnector.ts#L8)

## Extends

- [`IServerConnector`](../../../IServerManager/classes/IServerConnector.md)

## Constructors

### Constructor

> **new IUserConnector**(): `IUserConnector`

#### Returns

`IUserConnector`

#### Inherited from

[`IServerConnector`](../../../IServerManager/classes/IServerConnector.md).[`constructor`](../../../IServerManager/classes/IServerConnector.md#constructor)

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

### AvailabilityEmail()

> **AvailabilityEmail**(`email`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IUserConnector.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IUserConnector.ts#L15)

#### Parameters

##### email

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### AvailabilityUsername()

> **AvailabilityUsername**(`username`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IUserConnector.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IUserConnector.ts#L14)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### ChangePassword()

> **ChangePassword**(`newPassword`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IUserConnector.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IUserConnector.ts#L11)

#### Parameters

##### newPassword

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### ConsumePswdResetRequest()

> **ConsumePswdResetRequest**(`userId`, `resetToken`, `newPassword`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`PswdResetConsumptionResult`](../../../../../types/user/pswdreset/interfaces/PswdResetConsumptionResult.md)\>\>

Defined in: [src/interfaces/modules/server/IUserConnector.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IUserConnector.ts#L23)

#### Parameters

##### userId

`string`

##### resetToken

`string`

##### newPassword

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`PswdResetConsumptionResult`](../../../../../types/user/pswdreset/interfaces/PswdResetConsumptionResult.md)\>\>

***

### CreatePswdResetRequest()

> **CreatePswdResetRequest**(`username`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`PswdResetCreateResult`](../../../../../types/user/pswdreset/interfaces/PswdResetCreateResult.md)\>\>

Defined in: [src/interfaces/modules/server/IUserConnector.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IUserConnector.ts#L21)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`PswdResetCreateResult`](../../../../../types/user/pswdreset/interfaces/PswdResetCreateResult.md)\>\>

***

### DispatchGet()

> **DispatchGet**(): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`GlobalDispatchClient`](../../../../../types/system/dispatch/interfaces/GlobalDispatchClient.md)[]\>\>

Defined in: [src/interfaces/modules/server/IUserConnector.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IUserConnector.ts#L16)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`GlobalDispatchClient`](../../../../../types/system/dispatch/interfaces/GlobalDispatchClient.md)[]\>\>

***

### DispatchKick()

> **DispatchKick**(`clientId`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IUserConnector.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IUserConnector.ts#L17)

#### Parameters

##### clientId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### Info()

> **Info**(`userId`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`PublicUserInfo`](../../../../../types/user/interfaces/PublicUserInfo.md)\>\>

Defined in: [src/interfaces/modules/server/IUserConnector.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IUserConnector.ts#L12)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`PublicUserInfo`](../../../../../types/user/interfaces/PublicUserInfo.md)\>\>

***

### LoginBgUrl()

> **LoginBgUrl**(`userId`): `string`

Defined in: [src/interfaces/modules/server/IUserConnector.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IUserConnector.ts#L19)

#### Parameters

##### userId

`string`

#### Returns

`string`

***

### PictureUrl()

> **PictureUrl**(`userId`): `string`

Defined in: [src/interfaces/modules/server/IUserConnector.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IUserConnector.ts#L18)

#### Parameters

##### userId

`string`

#### Returns

`string`

***

### PreferencesPut()

> **PreferencesPut**(`preferences`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IUserConnector.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IUserConnector.ts#L13)

#### Parameters

##### preferences

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### Rename()

> **Rename**(`newUsername`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IUserConnector.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IUserConnector.ts#L10)

#### Parameters

##### newUsername

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### Self()

> **Self**(): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)\>\>

Defined in: [src/interfaces/modules/server/IUserConnector.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IUserConnector.ts#L9)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)\>\>

***

### VerifyPswdResetRequest()

> **VerifyPswdResetRequest**(`userId`, `code`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`PswdResetVerificationResult`](../../../../../types/user/pswdreset/interfaces/PswdResetVerificationResult.md)\>\>

Defined in: [src/interfaces/modules/server/IUserConnector.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IUserConnector.ts#L22)

#### Parameters

##### userId

`string`

##### code

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`PswdResetVerificationResult`](../../../../../types/user/pswdreset/interfaces/PswdResetVerificationResult.md)\>\>
