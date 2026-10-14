[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/IPreferencesUserContext](../README.md) / IPreferencesUserContext

# Interface: IPreferencesUserContext

Defined in: [src/interfaces/contexts/IPreferencesUserContext.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPreferencesUserContext.ts#L6)

## Extends

- [`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md)

## Properties

### preferences

> **preferences**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/interfaces/contexts/IPreferencesUserContext.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPreferencesUserContext.ts#L9)

***

### preferencesUnsubscribe

> **preferencesUnsubscribe**: [`Unsubscriber`](../../../../types/shared/writable/type-aliases/Unsubscriber.md) \| `undefined`

Defined in: [src/interfaces/contexts/IPreferencesUserContext.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPreferencesUserContext.ts#L8)

***

### syncLock

> **syncLock**: `boolean`

Defined in: [src/interfaces/contexts/IPreferencesUserContext.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPreferencesUserContext.ts#L7)

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

Defined in: [src/interfaces/contexts/IPreferencesUserContext.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPreferencesUserContext.ts#L10)

#### Returns

`Promise`\<`void`\>

#### Overrides

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

### changeProfilePicture()

> **changeProfilePicture**(`newValue`): `void`

Defined in: [src/interfaces/contexts/IPreferencesUserContext.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPreferencesUserContext.ts#L15)

#### Parameters

##### newValue

`string` \| `number`

#### Returns

`void`

***

### changeShell()

> **changeShell**(`id`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/contexts/IPreferencesUserContext.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPreferencesUserContext.ts#L17)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

***

### commitPreferences()

> **commitPreferences**(`preferences`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/interfaces/contexts/IPreferencesUserContext.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPreferencesUserContext.ts#L11)

#### Parameters

##### preferences

[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<`boolean` \| `undefined`\>

***

### getGlobalSetting()

> **getGlobalSetting**(`key`): `any`

Defined in: [src/interfaces/contexts/IPreferencesUserContext.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPreferencesUserContext.ts#L13)

#### Parameters

##### key

`string`

#### Returns

`any`

***

### sanitizeUserPreferences()

> **sanitizeUserPreferences**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IPreferencesUserContext.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPreferencesUserContext.ts#L12)

#### Returns

`Promise`\<`void`\>

***

### setGlobalSetting()

> **setGlobalSetting**(`key`, `value`): `void`

Defined in: [src/interfaces/contexts/IPreferencesUserContext.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPreferencesUserContext.ts#L14)

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`void`

***

### startPreferencesSync()

> **startPreferencesSync**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IPreferencesUserContext.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPreferencesUserContext.ts#L18)

#### Returns

`Promise`\<`void`\>

***

### uploadProfilePicture()

> **uploadProfilePicture**(): `Promise`\<`string` \| `undefined`\>

Defined in: [src/interfaces/contexts/IPreferencesUserContext.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPreferencesUserContext.ts#L16)

#### Returns

`Promise`\<`string` \| `undefined`\>
