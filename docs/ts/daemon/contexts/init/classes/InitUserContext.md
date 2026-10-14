[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/daemon/contexts/init](../README.md) / InitUserContext

# Class: InitUserContext

Defined in: [src/ts/daemon/contexts/init.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/init.ts#L17)

## Extends

- [`UserContext`](../../../context/classes/UserContext.md)

## Implements

- [`IInitUserContext`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md)

## Constructors

### Constructor

> **new InitUserContext**(`id`, `daemon`): `InitUserContext`

Defined in: [src/ts/daemon/contexts/init.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/init.ts#L23)

#### Parameters

##### id

`string`

##### daemon

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`InitUserContext`

#### Overrides

[`UserContext`](../../../context/classes/UserContext.md).[`constructor`](../../../context/classes/UserContext.md#constructor)

## Properties

### anchorInterceptObserver?

> `optional` **anchorInterceptObserver?**: `MutationObserver`

Defined in: [src/ts/daemon/contexts/init.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/init.ts#L21)

#### Implementation of

[`IInitUserContext`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md).[`anchorInterceptObserver`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md#anchorinterceptobserver)

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

[`IInitUserContext`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md).[`__deactivate`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md#__deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__deactivate`](../../../context/classes/UserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IInitUserContext`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md).[`__init`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md#__init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__init`](../../../context/classes/UserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/init.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/init.ts#L31)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IInitUserContext`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md).[`_deactivate`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md#_deactivate)

#### Overrides

[`UserContext`](../../../context/classes/UserContext.md).[`_deactivate`](../../../context/classes/UserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/init.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/init.ts#L27)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IInitUserContext`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md).[`_init`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md#_init)

#### Overrides

[`UserContext`](../../../context/classes/UserContext.md).[`_init`](../../../context/classes/UserContext.md#_init)

***

### firstRun()

> **firstRun**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/init.ts:84](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/init.ts#L84)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IInitUserContext`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md).[`firstRun`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md#firstrun)

***

### handleShellAndAutorun()

> **handleShellAndAutorun**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/init.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/init.ts#L103)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IInitUserContext`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md).[`handleShellAndAutorun`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md#handleshellandautorun)

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

### startAnchorRedirectionIntercept()

> **startAnchorRedirectionIntercept**(): `void`

Defined in: [src/ts/daemon/contexts/init.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/init.ts#L35)

#### Returns

`void`

#### Implementation of

[`IInitUserContext`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md).[`startAnchorRedirectionIntercept`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md#startanchorredirectionintercept)

***

### startDriveNotifierWatcher()

> **startDriveNotifierWatcher**(): `void`

Defined in: [src/ts/daemon/contexts/init.ts:200](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/init.ts#L200)

#### Returns

`void`

#### Implementation of

[`IInitUserContext`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md).[`startDriveNotifierWatcher`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md#startdrivenotifierwatcher)

***

### startFilesystemSupplier()

> **startFilesystemSupplier**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/init.ts:188](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/init.ts#L188)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IInitUserContext`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md).[`startFilesystemSupplier`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md#startfilesystemsupplier)

***

### startServiceHost()

> **startServiceHost**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/init.ts:77](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/init.ts#L77)

#### Parameters

##### broadcast?

(`msg`) => `void`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IInitUserContext`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md).[`startServiceHost`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md#startservicehost)

***

### startSystemStatusRefresh()

> **startSystemStatusRefresh**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/init.ts:65](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/init.ts#L65)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IInitUserContext`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md).[`startSystemStatusRefresh`](../../../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md#startsystemstatusrefresh)
