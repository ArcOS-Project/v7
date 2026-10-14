[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/daemon/contexts/preferences](../README.md) / PreferencesUserContext

# Class: PreferencesUserContext

Defined in: [src/ts/daemon/contexts/preferences.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/preferences.ts#L15)

## Extends

- [`UserContext`](../../../context/classes/UserContext.md)

## Implements

- [`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md)

## Constructors

### Constructor

> **new PreferencesUserContext**(`id`, `daemon`): `PreferencesUserContext`

Defined in: [src/ts/daemon/contexts/preferences.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/preferences.ts#L21)

#### Parameters

##### id

`string`

##### daemon

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`PreferencesUserContext`

#### Overrides

[`UserContext`](../../../context/classes/UserContext.md).[`constructor`](../../../context/classes/UserContext.md#constructor)

## Properties

### preferences

> **preferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/daemon/contexts/preferences.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/preferences.ts#L18)

#### Implementation of

[`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md).[`preferences`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md#preferences)

***

### preferencesUnsubscribe

> **preferencesUnsubscribe**: [`Unsubscriber`](../../../../../types/shared/writable/type-aliases/Unsubscriber.md) \| `undefined`

Defined in: [src/ts/daemon/contexts/preferences.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/preferences.ts#L17)

#### Implementation of

[`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md).[`preferencesUnsubscribe`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md#preferencesunsubscribe)

***

### syncLock

> **syncLock**: `boolean` = `false`

Defined in: [src/ts/daemon/contexts/preferences.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/preferences.ts#L16)

#### Implementation of

[`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md).[`syncLock`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md#synclock)

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

[`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md).[`__deactivate`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md#__deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__deactivate`](../../../context/classes/UserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md).[`__init`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md#__init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__init`](../../../context/classes/UserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/preferences.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/preferences.ts#L25)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md).[`_deactivate`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md#_deactivate)

#### Overrides

[`UserContext`](../../../context/classes/UserContext.md).[`_deactivate`](../../../context/classes/UserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L27)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md).[`_init`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md#_init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_init`](../../../context/classes/UserContext.md#_init)

***

### changeProfilePicture()

> **changeProfilePicture**(`newValue`): `void`

Defined in: [src/ts/daemon/contexts/preferences.ts:97](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/preferences.ts#L97)

#### Parameters

##### newValue

`string` \| `number`

#### Returns

`void`

#### Implementation of

[`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md).[`changeProfilePicture`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md#changeprofilepicture)

***

### changeShell()

> **changeShell**(`id`): `Promise`\<`boolean`\>

Defined in: [src/ts/daemon/contexts/preferences.ts:125](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/preferences.ts#L125)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md).[`changeShell`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md#changeshell)

***

### commitPreferences()

> **commitPreferences**(`preferences`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/daemon/contexts/preferences.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/preferences.ts#L29)

#### Parameters

##### preferences

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md).[`commitPreferences`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md#commitpreferences)

***

### getGlobalSetting()

> **getGlobalSetting**(`key`): `any`

Defined in: [src/ts/daemon/contexts/preferences.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/preferences.ts#L85)

#### Parameters

##### key

`string`

#### Returns

`any`

#### Implementation of

[`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md).[`getGlobalSetting`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md#getglobalsetting)

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

### sanitizeUserPreferences()

> **sanitizeUserPreferences**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/preferences.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/preferences.ts#L47)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md).[`sanitizeUserPreferences`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md#sanitizeuserpreferences)

***

### setGlobalSetting()

> **setGlobalSetting**(`key`, `value`): `void`

Defined in: [src/ts/daemon/contexts/preferences.ts:89](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/preferences.ts#L89)

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`void`

#### Implementation of

[`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md).[`setGlobalSetting`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md#setglobalsetting)

***

### startPreferencesSync()

> **startPreferencesSync**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/preferences.ts:158](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/preferences.ts#L158)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md).[`startPreferencesSync`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md#startpreferencessync)

***

### uploadProfilePicture()

> **uploadProfilePicture**(): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/daemon/contexts/preferences.ts:107](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/preferences.ts#L107)

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Implementation of

[`IPreferencesUserContext`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md).[`uploadProfilePicture`](../../../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md#uploadprofilepicture)
