[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/IThemesUserContext](../README.md) / IThemesUserContext

# Interface: IThemesUserContext

Defined in: [src/interfaces/contexts/IThemesUserContext.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IThemesUserContext.ts#L6)

## Extends

- [`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md)

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

Defined in: [src/interfaces/IUserDaemon.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L91)

#### Returns

`Promise`\<`void`\>

#### Inherited from

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

### applySavedTheme()

> **applySavedTheme**(`id`): `void`

Defined in: [src/interfaces/contexts/IThemesUserContext.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IThemesUserContext.ts#L10)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### applyThemeData()

> **applyThemeData**(`data`, `id?`): `boolean` \| `undefined`

Defined in: [src/interfaces/contexts/IThemesUserContext.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IThemesUserContext.ts#L9)

#### Parameters

##### data

[`UserTheme`](../../../../types/user/theme/interfaces/UserTheme.md)

##### id?

`string`

#### Returns

`boolean` \| `undefined`

***

### checkCurrentThemeIdValidity()

> **checkCurrentThemeIdValidity**(`data`): [`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)

Defined in: [src/interfaces/contexts/IThemesUserContext.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IThemesUserContext.ts#L12)

#### Parameters

##### data

[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)

#### Returns

[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)

***

### deleteUserTheme()

> **deleteUserTheme**(`id`): `void`

Defined in: [src/interfaces/contexts/IThemesUserContext.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IThemesUserContext.ts#L13)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### exportTheme()

> **exportTheme**(`theme`, `runtime`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IThemesUserContext.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IThemesUserContext.ts#L14)

#### Parameters

##### theme

[`UserTheme`](../../../../types/user/theme/interfaces/UserTheme.md)

##### runtime

`number`

#### Returns

`Promise`\<`void`\>

***

### saveCurrentTheme()

> **saveCurrentTheme**(`name`): `void`

Defined in: [src/interfaces/contexts/IThemesUserContext.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IThemesUserContext.ts#L8)

#### Parameters

##### name

`string`

#### Returns

`void`

***

### themeFromUserPreferences()

> **themeFromUserPreferences**(`data`, `name`, `author`, `version`): [`UserTheme`](../../../../types/user/theme/interfaces/UserTheme.md)

Defined in: [src/interfaces/contexts/IThemesUserContext.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IThemesUserContext.ts#L7)

#### Parameters

##### data

[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)

##### name

`string`

##### author

`string`

##### version

`string`

#### Returns

[`UserTheme`](../../../../types/user/theme/interfaces/UserTheme.md)

***

### verifyTheme()

> **verifyTheme**(`data`): `string` \| `undefined`

Defined in: [src/interfaces/contexts/IThemesUserContext.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IThemesUserContext.ts#L11)

#### Parameters

##### data

[`UserTheme`](../../../../types/user/theme/interfaces/UserTheme.md)

#### Returns

`string` \| `undefined`
