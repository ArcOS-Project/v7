[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/IAccountUserContext](../README.md) / IAccountUserContext

# Interface: IAccountUserContext

Defined in: [src/interfaces/contexts/IAccountUserContext.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAccountUserContext.ts#L6)

## Extends

- [`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md)

## Methods

### \_\_deactivate()

> **\_\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:90](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L90)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`__deactivate`](../../../IUserDaemon/interfaces/IUserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:88](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L88)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`__init`](../../../IUserDaemon/interfaces/IUserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L91)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`_deactivate`](../../../IUserDaemon/interfaces/IUserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:89](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L89)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`_init`](../../../IUserDaemon/interfaces/IUserContext.md#_init)

***

### changePassword()

> **changePassword**(`newPassword`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/contexts/IAccountUserContext.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAccountUserContext.ts#L10)

#### Parameters

##### newPassword

`string`

#### Returns

`Promise`\<`boolean`\>

***

### changeUsername()

> **changeUsername**(`newUsername`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/contexts/IAccountUserContext.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAccountUserContext.ts#L9)

#### Parameters

##### newUsername

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteAccount()

> **deleteAccount**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IAccountUserContext.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAccountUserContext.ts#L12)

#### Returns

`Promise`\<`void`\>

***

### discontinueToken()

> **discontinueToken**(`token?`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/interfaces/contexts/IAccountUserContext.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAccountUserContext.ts#L7)

#### Parameters

##### token?

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

***

### getPublicUserInfoOf()

> **getPublicUserInfoOf**(`userId`): `Promise`\<[`PublicUserInfo`](../../../../types/user/interfaces/PublicUserInfo.md) \| `undefined`\>

Defined in: [src/interfaces/contexts/IAccountUserContext.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAccountUserContext.ts#L11)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`PublicUserInfo`](../../../../types/user/interfaces/PublicUserInfo.md) \| `undefined`\>

***

### getUserInfo()

> **getUserInfo**(): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`UserInfo`](../../../../types/user/interfaces/UserInfo.md)\>\>

Defined in: [src/interfaces/contexts/IAccountUserContext.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAccountUserContext.ts#L8)

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`UserInfo`](../../../../types/user/interfaces/UserInfo.md)\>\>
