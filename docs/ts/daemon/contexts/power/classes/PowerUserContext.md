[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/daemon/contexts/power](../README.md) / PowerUserContext

# Class: PowerUserContext

Defined in: [src/ts/daemon/contexts/power.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/power.ts#L9)

## Extends

- [`UserContext`](../../../context/classes/UserContext.md)

## Implements

- [`IPowerUserContext`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md)

## Constructors

### Constructor

> **new PowerUserContext**(`id`, `daemon`): `PowerUserContext`

Defined in: [src/ts/daemon/contexts/power.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/power.ts#L12)

#### Parameters

##### id

`string`

##### daemon

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`PowerUserContext`

#### Overrides

[`UserContext`](../../../context/classes/UserContext.md).[`constructor`](../../../context/classes/UserContext.md#constructor)

## Properties

### battery

> **battery**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`BatteryType`](../../../../../types/system/navigator/interfaces/BatteryType.md) \| `undefined`\>

Defined in: [src/ts/daemon/contexts/power.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/power.ts#L10)

#### Implementation of

[`IPowerUserContext`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md).[`battery`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md#battery)

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

[`IPowerUserContext`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md).[`__deactivate`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md#__deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__deactivate`](../../../context/classes/UserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IPowerUserContext`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md).[`__init`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md#__init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__init`](../../../context/classes/UserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IPowerUserContext`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md).[`_deactivate`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md#_deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_deactivate`](../../../context/classes/UserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L27)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IPowerUserContext`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md).[`_init`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md#_init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_init`](../../../context/classes/UserContext.md#_init)

***

### batteryInfo()

> **batteryInfo**(): `Promise`\<[`BatteryType`](../../../../../types/system/navigator/interfaces/BatteryType.md) \| `undefined`\>

Defined in: [src/ts/daemon/contexts/power.ts:94](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/power.ts#L94)

#### Returns

`Promise`\<[`BatteryType`](../../../../../types/system/navigator/interfaces/BatteryType.md) \| `undefined`\>

#### Implementation of

[`IPowerUserContext`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md).[`batteryInfo`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md#batteryinfo)

***

### closeOpenedApps()

> **closeOpenedApps**(`type`, `props?`, `force?`): `Promise`\<`boolean`\>

Defined in: [src/ts/daemon/contexts/power.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/power.ts#L67)

#### Parameters

##### type

`string`

##### props?

`Record`\<`string`, `any`\> = `{}`

##### force?

`boolean` = `false`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IPowerUserContext`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md).[`closeOpenedApps`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md#closeopenedapps)

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

***

### logoff()

> **logoff**(`force?`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/power.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/power.ts#L16)

#### Parameters

##### force?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IPowerUserContext`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md).[`logoff`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md#logoff)

***

### logoffSafeMode()

> **logoffSafeMode**(`force?`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/power.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/power.ts#L40)

#### Parameters

##### force?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IPowerUserContext`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md).[`logoffSafeMode`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md#logoffsafemode)

***

### restart()

> **restart**(`force?`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/power.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/power.ts#L32)

#### Parameters

##### force?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IPowerUserContext`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md).[`restart`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md#restart)

***

### shutdown()

> **shutdown**(`force?`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/power.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/power.ts#L24)

#### Parameters

##### force?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IPowerUserContext`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md).[`shutdown`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md#shutdown)

***

### toLogin()

> **toLogin**(`type`, `props?`, `force?`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/power.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/power.ts#L48)

#### Parameters

##### type

`string`

##### props?

`Record`\<`string`, `any`\> = `{}`

##### force?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IPowerUserContext`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md).[`toLogin`](../../../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md#tologin)
