[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/daemon/contexts/themes](../README.md) / ThemesUserContext

# Class: ThemesUserContext

Defined in: [src/ts/daemon/contexts/themes.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/themes.ts#L13)

## Extends

- [`UserContext`](../../../context/classes/UserContext.md)

## Implements

- [`IThemesUserContext`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md)

## Constructors

### Constructor

> **new ThemesUserContext**(`id`, `daemon`): `ThemesUserContext`

Defined in: [src/ts/daemon/contexts/themes.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/themes.ts#L14)

#### Parameters

##### id

`string`

##### daemon

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`ThemesUserContext`

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

[`IThemesUserContext`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md).[`__deactivate`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md#__deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__deactivate`](../../../context/classes/UserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IThemesUserContext`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md).[`__init`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md#__init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__init`](../../../context/classes/UserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IThemesUserContext`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md).[`_deactivate`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md#_deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_deactivate`](../../../context/classes/UserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L27)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IThemesUserContext`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md).[`_init`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md#_init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_init`](../../../context/classes/UserContext.md#_init)

***

### applySavedTheme()

> **applySavedTheme**(`id`): `void`

Defined in: [src/ts/daemon/contexts/themes.ts:89](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/themes.ts#L89)

#### Parameters

##### id

`string`

#### Returns

`void`

#### Implementation of

[`IThemesUserContext`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md).[`applySavedTheme`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md#applysavedtheme)

***

### applyThemeData()

> **applyThemeData**(`data`, `id?`): `boolean` \| `undefined`

Defined in: [src/ts/daemon/contexts/themes.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/themes.ts#L55)

#### Parameters

##### data

[`UserTheme`](../../../../../types/user/theme/interfaces/UserTheme.md)

##### id?

`string`

#### Returns

`boolean` \| `undefined`

#### Implementation of

[`IThemesUserContext`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md).[`applyThemeData`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md#applythemedata)

***

### checkCurrentThemeIdValidity()

> **checkCurrentThemeIdValidity**(`data`): [`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

Defined in: [src/ts/daemon/contexts/themes.ts:113](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/themes.ts#L113)

#### Parameters

##### data

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

#### Returns

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

#### Implementation of

[`IThemesUserContext`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md).[`checkCurrentThemeIdValidity`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md#checkcurrentthemeidvalidity)

***

### deleteUserTheme()

> **deleteUserTheme**(`id`): `void`

Defined in: [src/ts/daemon/contexts/themes.ts:134](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/themes.ts#L134)

#### Parameters

##### id

`string`

#### Returns

`void`

#### Implementation of

[`IThemesUserContext`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md).[`deleteUserTheme`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md#deleteusertheme)

***

### exportTheme()

> **exportTheme**(`theme`, `runtimePid`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/themes.ts:148](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/themes.ts#L148)

#### Parameters

##### theme

[`UserTheme`](../../../../../types/user/theme/interfaces/UserTheme.md)

##### runtimePid

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IThemesUserContext`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md).[`exportTheme`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md#exporttheme)

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

### saveCurrentTheme()

> **saveCurrentTheme**(`name`): `void`

Defined in: [src/ts/daemon/contexts/themes.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/themes.ts#L39)

#### Parameters

##### name

`string`

#### Returns

`void`

#### Implementation of

[`IThemesUserContext`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md).[`saveCurrentTheme`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md#savecurrenttheme)

***

### themeFromUserPreferences()

> **themeFromUserPreferences**(`data`, `name`, `author`, `version`): [`UserTheme`](../../../../../types/user/theme/interfaces/UserTheme.md)

Defined in: [src/ts/daemon/contexts/themes.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/themes.ts#L18)

#### Parameters

##### data

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

##### name

`string`

##### author

`string`

##### version

`string`

#### Returns

[`UserTheme`](../../../../../types/user/theme/interfaces/UserTheme.md)

#### Implementation of

[`IThemesUserContext`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md).[`themeFromUserPreferences`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md#themefromuserpreferences)

***

### verifyTheme()

> **verifyTheme**(`data`): `string` \| `undefined`

Defined in: [src/ts/daemon/contexts/themes.ts:101](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/themes.ts#L101)

#### Parameters

##### data

[`UserTheme`](../../../../../types/user/theme/interfaces/UserTheme.md)

#### Returns

`string` \| `undefined`

#### Implementation of

[`IThemesUserContext`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md).[`verifyTheme`](../../../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md#verifytheme)
