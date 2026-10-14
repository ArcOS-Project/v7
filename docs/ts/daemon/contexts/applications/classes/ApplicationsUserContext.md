[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/daemon/contexts/applications](../README.md) / ApplicationsUserContext

# Class: ApplicationsUserContext

Defined in: [src/ts/daemon/contexts/applications.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/applications.ts#L13)

## Extends

- [`UserContext`](../../../context/classes/UserContext.md)

## Implements

- [`IApplicationsUserContext`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md)

## Constructors

### Constructor

> **new ApplicationsUserContext**(`id`, `daemon`): `ApplicationsUserContext`

Defined in: [src/ts/daemon/contexts/applications.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/applications.ts#L14)

#### Parameters

##### id

`string`

##### daemon

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`ApplicationsUserContext`

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

[`UserContext`](../../../context/classes/UserContext.md).[`initialized`](../../../context/classes/UserContext.md#initialized)

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

[`UserContext`](../../../context/classes/UserContext.md).[`userInfo`](../../../context/classes/UserContext.md#userinfo)

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

[`UserContext`](../../../context/classes/UserContext.md).[`username`](../../../context/classes/UserContext.md#username)

## Methods

### \_\_deactivate()

> **\_\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L31)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IApplicationsUserContext`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md).[`__deactivate`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md#__deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__deactivate`](../../../context/classes/UserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IApplicationsUserContext`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md).[`__init`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md#__init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__init`](../../../context/classes/UserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IApplicationsUserContext`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md).[`_deactivate`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md#_deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_deactivate`](../../../context/classes/UserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L27)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IApplicationsUserContext`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md).[`_init`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md#_init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_init`](../../../context/classes/UserContext.md#_init)

***

### checkDisabled()

> **checkDisabled**(`appId`, `noSafeMode?`): `boolean`

Defined in: [src/ts/daemon/contexts/applications.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/applications.ts#L18)

#### Parameters

##### appId

`string`

##### noSafeMode?

`boolean`

#### Returns

`boolean`

#### Implementation of

[`IApplicationsUserContext`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md).[`checkDisabled`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md#checkdisabled)

***

### disableApp()

> **disableApp**(`appId`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/daemon/contexts/applications.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/applications.ts#L47)

#### Parameters

##### appId

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IApplicationsUserContext`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md).[`disableApp`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md#disableapp)

***

### disableThirdParty()

> **disableThirdParty**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/applications.ts:133](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/applications.ts#L133)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IApplicationsUserContext`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md).[`disableThirdParty`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md#disablethirdparty)

***

### enableApp()

> **enableApp**(`appId`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/daemon/contexts/applications.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/applications.ts#L85)

#### Parameters

##### appId

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IApplicationsUserContext`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md).[`enableApp`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md#enableapp)

***

### enableThirdParty()

> **enableThirdParty**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/applications.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/applications.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IApplicationsUserContext`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md).[`enableThirdParty`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md#enablethirdparty)

***

### isPopulatableByAppIdSync()

> **isPopulatableByAppIdSync**(`appId`): `boolean`

Defined in: [src/ts/daemon/contexts/applications.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/applications.ts#L38)

#### Parameters

##### appId

`string`

#### Returns

`boolean`

#### Implementation of

[`IApplicationsUserContext`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md).[`isPopulatableByAppIdSync`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md#ispopulatablebyappidsync)

***

### isVital()

> **isVital**(`app`): `boolean` \| `undefined`

Defined in: [src/ts/daemon/contexts/applications.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/applications.ts#L34)

#### Parameters

##### app

[`App`](../../../../../types/apps/app/interfaces/App.md)

#### Returns

`boolean` \| `undefined`

#### Implementation of

[`IApplicationsUserContext`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md).[`isVital`](../../../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md#isvital)

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
