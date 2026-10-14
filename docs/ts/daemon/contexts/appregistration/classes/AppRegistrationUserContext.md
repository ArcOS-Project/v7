[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/daemon/contexts/appregistration](../README.md) / AppRegistrationUserContext

# Class: AppRegistrationUserContext

Defined in: [src/ts/daemon/contexts/appregistration.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/appregistration.ts#L15)

## Extends

- [`UserContext`](../../../context/classes/UserContext.md)

## Implements

- [`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md)

## Constructors

### Constructor

> **new AppRegistrationUserContext**(`id`, `daemon`): `AppRegistrationUserContext`

Defined in: [src/ts/daemon/contexts/appregistration.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/appregistration.ts#L16)

#### Parameters

##### id

`string`

##### daemon

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`AppRegistrationUserContext`

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

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`__deactivate`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#__deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__deactivate`](../../../context/classes/UserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`__init`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#__init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__init`](../../../context/classes/UserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`_deactivate`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#_deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_deactivate`](../../../context/classes/UserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L27)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`_init`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#_init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_init`](../../../context/classes/UserContext.md#_init)

***

### addToStartMenu()

> **addToStartMenu**(`appId`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/appregistration.ts:153](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/appregistration.ts#L153)

#### Parameters

##### appId

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`addToStartMenu`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#addtostartmenu)

***

### determineStartMenuShortcutPath()

> **determineStartMenuShortcutPath**(`app`): `string` \| `undefined`

Defined in: [src/ts/daemon/contexts/appregistration.ts:147](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/appregistration.ts#L147)

#### Parameters

##### app

[`App`](../../../../../types/apps/app/interfaces/App.md)

#### Returns

`string` \| `undefined`

#### Implementation of

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`determineStartMenuShortcutPath`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#determinestartmenushortcutpath)

***

### getUserApps()

> **getUserApps**(): `Promise`\<[`AppStorage`](../../../../../types/apps/app/type-aliases/AppStorage.md)\>

Defined in: [src/ts/daemon/contexts/appregistration.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/appregistration.ts#L21)

#### Returns

`Promise`\<[`AppStorage`](../../../../../types/apps/app/type-aliases/AppStorage.md)\>

#### Implementation of

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`getUserApps`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#getuserapps)

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

### modeUserAppsToFs()

> **modeUserAppsToFs**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/appregistration.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/appregistration.ts#L230)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`modeUserAppsToFs`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#modeuserappstofs)

***

### pinApp()

> **pinApp**(`appId`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/appregistration.ts:118](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/appregistration.ts#L118)

#### Parameters

##### appId

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`pinApp`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#pinapp)

***

### registerApp()

> **registerApp**(`data`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/appregistration.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/appregistration.ts#L44)

#### Parameters

##### data

[`InstalledApp`](../../../../../types/apps/app/interfaces/InstalledApp.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`registerApp`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#registerapp)

***

### registerAppFromPath()

> **registerAppFromPath**(`path`): `Promise`\<`"failed to read file"` \| `"failed to convert to JSON"` \| `"missing properties"` \| `undefined`\>

Defined in: [src/ts/daemon/contexts/appregistration.ts:66](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/appregistration.ts#L66)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`"failed to read file"` \| `"failed to convert to JSON"` \| `"missing properties"` \| `undefined`\>

#### Implementation of

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`registerAppFromPath`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#registerappfrompath)

***

### removeFromStartMenu()

> **removeFromStartMenu**(`appId`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/appregistration.ts:177](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/appregistration.ts#L177)

#### Parameters

##### appId

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`removeFromStartMenu`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#removefromstartmenu)

***

### uninstallAppWithAck()

> **uninstallAppWithAck**(`app`): `Promise`\<`boolean`\>

Defined in: [src/ts/daemon/contexts/appregistration.ts:87](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/appregistration.ts#L87)

#### Parameters

##### app

[`App`](../../../../../types/apps/app/interfaces/App.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`uninstallAppWithAck`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#uninstallappwithack)

***

### uninstallPackageWithStatus()

> **uninstallPackageWithStatus**(`id`, `deleteFiles?`): `Promise`\<`boolean`\>

Defined in: [src/ts/daemon/contexts/appregistration.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/appregistration.ts#L53)

#### Parameters

##### id

`string`

##### deleteFiles?

`boolean` = `false`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`uninstallPackageWithStatus`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#uninstallpackagewithstatus)

***

### unpinApp()

> **unpinApp**(`appId`): `void`

Defined in: [src/ts/daemon/contexts/appregistration.ts:135](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/appregistration.ts#L135)

#### Parameters

##### appId

`string`

#### Returns

`void`

#### Implementation of

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`unpinApp`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#unpinapp)

***

### updateStartMenuFolder()

> **updateStartMenuFolder**(`quiet?`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/appregistration.ts:188](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/appregistration.ts#L188)

#### Parameters

##### quiet?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppRegistrationUserContext`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md).[`updateStartMenuFolder`](../../../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md#updatestartmenufolder)
