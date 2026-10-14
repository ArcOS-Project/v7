[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/daemon/contexts/wallpaper](../README.md) / WallpaperUserContext

# Class: WallpaperUserContext

Defined in: [src/ts/daemon/contexts/wallpaper.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/wallpaper.ts#L14)

## Extends

- [`UserContext`](../../../context/classes/UserContext.md)

## Implements

- [`IWallpaperUserContext`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md)

## Constructors

### Constructor

> **new WallpaperUserContext**(`id`, `daemon`): `WallpaperUserContext`

Defined in: [src/ts/daemon/contexts/wallpaper.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/wallpaper.ts#L23)

#### Parameters

##### id

`string`

##### daemon

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`WallpaperUserContext`

#### Overrides

[`UserContext`](../../../context/classes/UserContext.md).[`constructor`](../../../context/classes/UserContext.md#constructor)

## Properties

### lastWallpaper

> **lastWallpaper**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/daemon/contexts/wallpaper.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/wallpaper.ts#L16)

#### Implementation of

[`IWallpaperUserContext`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md).[`lastWallpaper`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md#lastwallpaper)

***

### Wallpaper

> **Wallpaper**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`Wallpaper`](../../../../../types/user/wallpaper/interfaces/Wallpaper.md)\>

Defined in: [src/ts/daemon/contexts/wallpaper.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/wallpaper.ts#L15)

#### Implementation of

[`IWallpaperUserContext`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md).[`Wallpaper`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md#wallpaper)

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

[`IWallpaperUserContext`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md).[`__deactivate`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md#__deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__deactivate`](../../../context/classes/UserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWallpaperUserContext`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md).[`__init`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md#__init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__init`](../../../context/classes/UserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWallpaperUserContext`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md).[`_deactivate`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md#_deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_deactivate`](../../../context/classes/UserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L27)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWallpaperUserContext`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md).[`_init`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md#_init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_init`](../../../context/classes/UserContext.md#_init)

***

### deleteLocalWallpaper()

> **deleteLocalWallpaper**(`id`): `Promise`\<`boolean`\>

Defined in: [src/ts/daemon/contexts/wallpaper.ts:109](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/wallpaper.ts#L109)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IWallpaperUserContext`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md).[`deleteLocalWallpaper`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md#deletelocalwallpaper)

***

### getLocalWallpaper()

> **getLocalWallpaper**(`id`): `Promise`\<[`Wallpaper`](../../../../../types/user/wallpaper/interfaces/Wallpaper.md)\>

Defined in: [src/ts/daemon/contexts/wallpaper.ts:134](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/wallpaper.ts#L134)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`Wallpaper`](../../../../../types/user/wallpaper/interfaces/Wallpaper.md)\>

#### Implementation of

[`IWallpaperUserContext`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md).[`getLocalWallpaper`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md#getlocalwallpaper)

***

### getWallpaper()

> **getWallpaper**(`id`, `override?`): `Promise`\<[`Wallpaper`](../../../../../types/user/wallpaper/interfaces/Wallpaper.md)\>

Defined in: [src/ts/daemon/contexts/wallpaper.ts:89](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/wallpaper.ts#L89)

#### Parameters

##### id

`string`

##### override?

`string`

#### Returns

`Promise`\<[`Wallpaper`](../../../../../types/user/wallpaper/interfaces/Wallpaper.md)\>

#### Implementation of

[`IWallpaperUserContext`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md).[`getWallpaper`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md#getwallpaper)

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

### updateWallpaper()

> **updateWallpaper**(`v`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/wallpaper.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/wallpaper.ts#L27)

#### Parameters

##### v

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWallpaperUserContext`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md).[`updateWallpaper`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md#updatewallpaper)

***

### uploadWallpaper()

> **uploadWallpaper**(`pid?`): `Promise`\<[`Wallpaper`](../../../../../types/user/wallpaper/interfaces/Wallpaper.md) \| `undefined`\>

Defined in: [src/ts/daemon/contexts/wallpaper.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/wallpaper.ts#L40)

#### Parameters

##### pid?

`number`

#### Returns

`Promise`\<[`Wallpaper`](../../../../../types/user/wallpaper/interfaces/Wallpaper.md) \| `undefined`\>

#### Implementation of

[`IWallpaperUserContext`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md).[`uploadWallpaper`](../../../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md#uploadwallpaper)
