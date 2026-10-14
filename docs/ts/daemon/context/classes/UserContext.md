[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/daemon/context](../README.md) / UserContext

# Class: UserContext

Defined in: [src/ts/daemon/context.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L8)

## Extended by

- [`AccountUserContext`](../../contexts/account/classes/AccountUserContext.md)
- [`LoginActivityUserContext`](../../contexts/activity/classes/LoginActivityUserContext.md)
- [`ApplicationsUserContext`](../../contexts/applications/classes/ApplicationsUserContext.md)
- [`AppRegistrationUserContext`](../../contexts/appregistration/classes/AppRegistrationUserContext.md)
- [`AppRendererUserContext`](../../contexts/apprenderer/classes/AppRendererUserContext.md)
- [`ChecksUserContext`](../../contexts/checks/classes/ChecksUserContext.md)
- [`ElevationUserContext`](../../contexts/elevation/classes/ElevationUserContext.md)
- [`FilesystemUserContext`](../../contexts/filesystem/classes/FilesystemUserContext.md)
- [`HelpersUserContext`](../../contexts/helpers/classes/HelpersUserContext.md)
- [`IconsUserContext`](../../contexts/icons/classes/IconsUserContext.md)
- [`InitUserContext`](../../contexts/init/classes/InitUserContext.md)
- [`NotificationsUserContext`](../../contexts/notifications/classes/NotificationsUserContext.md)
- [`PowerUserContext`](../../contexts/power/classes/PowerUserContext.md)
- [`PreferencesUserContext`](../../contexts/preferences/classes/PreferencesUserContext.md)
- [`ShortcutsUserContext`](../../contexts/shortcuts/classes/ShortcutsUserContext.md)
- [`SpawnUserContext`](../../contexts/spawn/classes/SpawnUserContext.md)
- [`ThemesUserContext`](../../contexts/themes/classes/ThemesUserContext.md)
- [`VersionUserContext`](../../contexts/version/classes/VersionUserContext.md)
- [`WallpaperUserContext`](../../contexts/wallpaper/classes/WallpaperUserContext.md)
- [`WorkspaceUserContext`](../../contexts/workspaces/classes/WorkspaceUserContext.md)

## Implements

- [`IUserContext`](../../../../interfaces/IUserDaemon/interfaces/IUserContext.md)

## Constructors

### Constructor

> **new UserContext**(`id`, `daemon`): `UserContext`

Defined in: [src/ts/daemon/context.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L16)

#### Parameters

##### id

`string`

##### daemon

[`IUserDaemon`](../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`UserContext`

## Accessors

### \_disposed

#### Get Signature

> **get** `protected` **\_disposed**(): `boolean`

Defined in: [src/ts/daemon/context.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L59)

##### Returns

`boolean`

***

### appStorage

#### Get Signature

> **get** `protected` **appStorage**(): () => [`IApplicationStorage`](../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L51)

##### Returns

() => [`IApplicationStorage`](../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

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

***

### pid

#### Get Signature

> **get** `protected` **pid**(): `number`

Defined in: [src/ts/daemon/context.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L63)

##### Returns

`number`

***

### safeMode

#### Get Signature

> **get** `protected` **safeMode**(): `boolean`

Defined in: [src/ts/daemon/context.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L55)

##### Returns

`boolean`

***

### serviceHost

#### Get Signature

> **get** `protected` **serviceHost**(): [`IServiceHost`](../../../../interfaces/IServiceHost/interfaces/IServiceHost.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L47)

##### Returns

[`IServiceHost`](../../../../interfaces/IServiceHost/interfaces/IServiceHost.md) \| `undefined`

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L12)

##### Returns

[`IShellRuntime`](../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

***

### userInfo

#### Get Signature

> **get** `protected` **userInfo**(): [`UserInfo`](../../../../types/user/interfaces/UserInfo.md)

Defined in: [src/ts/daemon/context.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L67)

##### Returns

[`UserInfo`](../../../../types/user/interfaces/UserInfo.md)

#### Set Signature

> **set** `protected` **userInfo**(`value`): `void`

Defined in: [src/ts/daemon/context.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L71)

##### Parameters

###### value

[`UserInfo`](../../../../types/user/interfaces/UserInfo.md)

##### Returns

`void`

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

## Methods

### \_\_deactivate()

> **\_\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L31)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IUserContext`](../../../../interfaces/IUserDaemon/interfaces/IUserContext.md).[`__deactivate`](../../../../interfaces/IUserDaemon/interfaces/IUserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IUserContext`](../../../../interfaces/IUserDaemon/interfaces/IUserContext.md).[`__init`](../../../../interfaces/IUserDaemon/interfaces/IUserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IUserContext`](../../../../interfaces/IUserDaemon/interfaces/IUserContext.md).[`_deactivate`](../../../../interfaces/IUserDaemon/interfaces/IUserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L27)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IUserContext`](../../../../interfaces/IUserDaemon/interfaces/IUserContext.md).[`_init`](../../../../interfaces/IUserDaemon/interfaces/IUserContext.md#_init)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/daemon/context.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L41)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`
