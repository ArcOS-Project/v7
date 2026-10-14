[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/server/connectors/UserConnector](../README.md) / UserConnector

# Class: UserConnector

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L12)

## Extends

- [`ServerConnector`](../../classes/ServerConnector.md)

## Implements

- [`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md)

## Constructors

### Constructor

> **new UserConnector**(`token?`): `UserConnector`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L14)

#### Parameters

##### token?

`string`

#### Returns

`UserConnector`

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`constructor`](../../classes/ServerConnector.md#constructor)

## Properties

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L12)

#### Implementation of

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`name`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#name)

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`name`](../../classes/ServerConnector.md#name)

***

### prefix

> **prefix**: `string` = `"/user"`

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L13)

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

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`server`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#server)

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`server`](../../classes/ServerConnector.md#server)

## Methods

### AvailabilityEmail()

> **AvailabilityEmail**(`email`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L67)

#### Parameters

##### email

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`AvailabilityEmail`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#availabilityemail)

***

### AvailabilityUsername()

> **AvailabilityUsername**(`username`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L55)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`AvailabilityUsername`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#availabilityusername)

***

### ChangePassword()

> **ChangePassword**(`newPassword`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L31)

#### Parameters

##### newPassword

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`ChangePassword`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#changepassword)

***

### ConsumePswdResetRequest()

> **ConsumePswdResetRequest**(`userId`, `resetToken`, `newPassword`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`PswdResetConsumptionResult`](../../../../../../../types/user/pswdreset/interfaces/PswdResetConsumptionResult.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:129](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L129)

#### Parameters

##### userId

`string`

##### resetToken

`string`

##### newPassword

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`PswdResetConsumptionResult`](../../../../../../../types/user/pswdreset/interfaces/PswdResetConsumptionResult.md)\>\>

#### Implementation of

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`ConsumePswdResetRequest`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#consumepswdresetrequest)

***

### CreatePswdResetRequest()

> **CreatePswdResetRequest**(`username`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`PswdResetCreateResult`](../../../../../../../types/user/pswdreset/interfaces/PswdResetCreateResult.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:113](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L113)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`PswdResetCreateResult`](../../../../../../../types/user/pswdreset/interfaces/PswdResetCreateResult.md)\>\>

#### Implementation of

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`CreatePswdResetRequest`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#createpswdresetrequest)

***

### DispatchGet()

> **DispatchGet**(): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`GlobalDispatchClient`](../../../../../../../types/system/dispatch/interfaces/GlobalDispatchClient.md)[]\>\>

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L79)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`GlobalDispatchClient`](../../../../../../../types/system/dispatch/interfaces/GlobalDispatchClient.md)[]\>\>

#### Implementation of

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`DispatchGet`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#dispatchget)

***

### DispatchKick()

> **DispatchKick**(`clientId`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:87](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L87)

#### Parameters

##### clientId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`DispatchKick`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#dispatchkick)

***

### Info()

> **Info**(`userId`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`PublicUserInfo`](../../../../../../../types/user/interfaces/PublicUserInfo.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L39)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`PublicUserInfo`](../../../../../../../types/user/interfaces/PublicUserInfo.md)\>\>

#### Implementation of

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`Info`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#info)

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

### LoginBgUrl()

> **LoginBgUrl**(`userId`): `string`

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:108](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L108)

#### Parameters

##### userId

`string`

#### Returns

`string`

#### Implementation of

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`LoginBgUrl`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#loginbgurl)

***

### PictureUrl()

> **PictureUrl**(`userId`): `string`

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L103)

#### Parameters

##### userId

`string`

#### Returns

`string`

#### Implementation of

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`PictureUrl`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#pictureurl)

***

### PreferencesPut()

> **PreferencesPut**(`userPreferences`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L47)

#### Parameters

##### userPreferences

[`UserPreferences`](../../../../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`PreferencesPut`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#preferencesput)

***

### RegisterUser()

> **RegisterUser**(`username`, `email`, `password`): `Promise`\<[`CommandResult`](../../../../../../result/classes/CommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:95](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L95)

#### Parameters

##### username

`string`

##### email

`string`

##### password

`string`

#### Returns

`Promise`\<[`CommandResult`](../../../../../../result/classes/CommandResult.md)\<`any`\>\>

***

### Rename()

> **Rename**(`newUsername`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L23)

#### Parameters

##### newUsername

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`Rename`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#rename)

***

### Self()

> **Self**(): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`UserInfo`](../../../../../../../types/user/interfaces/UserInfo.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L15)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`UserInfo`](../../../../../../../types/user/interfaces/UserInfo.md)\>\>

#### Implementation of

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`Self`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#self)

***

### VerifyPswdResetRequest()

> **VerifyPswdResetRequest**(`userId`, `code`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`PswdResetVerificationResult`](../../../../../../../types/user/pswdreset/interfaces/PswdResetVerificationResult.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/UserConnector.ts:121](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/UserConnector.ts#L121)

#### Parameters

##### userId

`string`

##### code

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`PswdResetVerificationResult`](../../../../../../../types/user/pswdreset/interfaces/PswdResetVerificationResult.md)\>\>

#### Implementation of

[`IUserConnector`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md).[`VerifyPswdResetRequest`](../../../../../../../interfaces/modules/server/IUserConnector/classes/IUserConnector.md#verifypswdresetrequest)
