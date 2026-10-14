[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/daemon/contexts/account](../README.md) / AccountUserContext

# Class: AccountUserContext

Defined in: [src/ts/daemon/contexts/account.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/account.ts#L15)

## Extends

- [`UserContext`](../../../context/classes/UserContext.md)

## Implements

- [`IAccountUserContext`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md)

## Constructors

### Constructor

> **new AccountUserContext**(`id`, `daemon`): `AccountUserContext`

Defined in: [src/ts/daemon/contexts/account.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/account.ts#L16)

#### Parameters

##### id

`string`

##### daemon

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`AccountUserContext`

#### Overrides

[`UserContext`](../../../context/classes/UserContext.md).[`constructor`](../../../context/classes/UserContext.md#constructor)

## Accessors

### \_disposed

#### Get Signature

> **get** `protected` **\_disposed**(): `boolean`

Defined in: [src/ts/daemon/context.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L59)

##### Returns

`boolean`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_disposed`](../../../context/classes/UserContext.md#_disposed)

***

### appStorage

#### Get Signature

> **get** `protected` **appStorage**(): () => [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L51)

##### Returns

() => [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`appStorage`](../../../context/classes/UserContext.md#appstorage)

***

### initialized

#### Get Signature

> **get** `protected` **initialized**(): `boolean`

Defined in: [src/ts/daemon/context.ts:83](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L83)

##### Returns

`boolean`

#### Set Signature

> **set** `protected` **initialized**(`value`): `void`

Defined in: [src/ts/daemon/context.ts:87](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L87)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`WorkspaceUserContext`](../../workspaces/classes/WorkspaceUserContext.md).[`initialized`](../../workspaces/classes/WorkspaceUserContext.md#initialized)

***

### pid

#### Get Signature

> **get** `protected` **pid**(): `number`

Defined in: [src/ts/daemon/context.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L63)

##### Returns

`number`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`pid`](../../../context/classes/UserContext.md#pid)

***

### safeMode

#### Get Signature

> **get** `protected` **safeMode**(): `boolean`

Defined in: [src/ts/daemon/context.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L55)

##### Returns

`boolean`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`safeMode`](../../../context/classes/UserContext.md#safemode)

***

### serviceHost

#### Get Signature

> **get** `protected` **serviceHost**(): [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L47)

##### Returns

[`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md) \| `undefined`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`serviceHost`](../../../context/classes/UserContext.md#servicehost)

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L12)

##### Returns

[`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`shell`](../../../context/classes/UserContext.md#shell)

***

### userInfo

#### Get Signature

> **get** `protected` **userInfo**(): [`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

Defined in: [src/ts/daemon/context.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L67)

##### Returns

[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

#### Set Signature

> **set** `protected` **userInfo**(`value`): `void`

Defined in: [src/ts/daemon/context.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L71)

##### Parameters

###### value

[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

##### Returns

`void`

#### Inherited from

[`WorkspaceUserContext`](../../workspaces/classes/WorkspaceUserContext.md).[`userInfo`](../../workspaces/classes/WorkspaceUserContext.md#userinfo)

***

### username

#### Get Signature

> **get** `protected` **username**(): `string`

Defined in: [src/ts/daemon/context.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L75)

##### Returns

`string`

#### Set Signature

> **set** `protected` **username**(`username`): `void`

Defined in: [src/ts/daemon/context.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L79)

##### Parameters

###### username

`string`

##### Returns

`void`

#### Inherited from

[`WorkspaceUserContext`](../../workspaces/classes/WorkspaceUserContext.md).[`username`](../../workspaces/classes/WorkspaceUserContext.md#username)

## Methods

### \_\_deactivate()

> **\_\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L31)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAccountUserContext`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md).[`__deactivate`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md#__deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__deactivate`](../../../context/classes/UserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAccountUserContext`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md).[`__init`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md#__init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__init`](../../../context/classes/UserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAccountUserContext`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md).[`_deactivate`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md#_deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_deactivate`](../../../context/classes/UserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L27)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAccountUserContext`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md).[`_init`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md#_init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_init`](../../../context/classes/UserContext.md#_init)

***

### changePassword()

> **changePassword**(`newPassword`): `Promise`\<`boolean`\>

Defined in: [src/ts/daemon/contexts/account.ts:94](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/account.ts#L94)

#### Parameters

##### newPassword

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAccountUserContext`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md).[`changePassword`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md#changepassword)

***

### changeUsername()

> **changeUsername**(`newUsername`): `Promise`\<`boolean`\>

Defined in: [src/ts/daemon/contexts/account.ts:66](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/account.ts#L66)

#### Parameters

##### newUsername

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAccountUserContext`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md).[`changeUsername`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md#changeusername)

***

### deleteAccount()

> **deleteAccount**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/account.ts:125](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/account.ts#L125)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAccountUserContext`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md).[`deleteAccount`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md#deleteaccount)

***

### discontinueToken()

> **discontinueToken**(`token?`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/daemon/contexts/account.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/account.ts#L20)

#### Parameters

##### token?

`string` = `...`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IAccountUserContext`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md).[`discontinueToken`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md#discontinuetoken)

***

### getPublicUserInfoOf()

> **getPublicUserInfoOf**(`userId`): `Promise`\<[`PublicUserInfo`](../../../../../types/user/interfaces/PublicUserInfo.md) \| `undefined`\>

Defined in: [src/ts/daemon/contexts/account.ts:115](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/account.ts#L115)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`PublicUserInfo`](../../../../../types/user/interfaces/PublicUserInfo.md) \| `undefined`\>

#### Implementation of

[`IAccountUserContext`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md).[`getPublicUserInfoOf`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md#getpublicuserinfoof)

***

### getUserInfo()

> **getUserInfo**(): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)\>\>

Defined in: [src/ts/daemon/contexts/account.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/account.ts#L34)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)\>\>

#### Implementation of

[`IAccountUserContext`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md).[`getUserInfo`](../../../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md#getuserinfo)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/daemon/context.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L41)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`Log`](../../../context/classes/UserContext.md#log)
