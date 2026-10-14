[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/IWallpaperUserContext](../README.md) / IWallpaperUserContext

# Interface: IWallpaperUserContext

Defined in: [src/interfaces/contexts/IWallpaperUserContext.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWallpaperUserContext.ts#L7)

## Extends

- [`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md)

## Properties

### lastWallpaper

> **lastWallpaper**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/contexts/IWallpaperUserContext.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWallpaperUserContext.ts#L9)

***

### Wallpaper

> **Wallpaper**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`Wallpaper`](../../../../types/user/wallpaper/interfaces/Wallpaper.md)\>

Defined in: [src/interfaces/contexts/IWallpaperUserContext.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWallpaperUserContext.ts#L8)

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

### deleteLocalWallpaper()

> **deleteLocalWallpaper**(`id`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/contexts/IWallpaperUserContext.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWallpaperUserContext.ts#L13)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

***

### getLocalWallpaper()

> **getLocalWallpaper**(`id`): `Promise`\<[`Wallpaper`](../../../../types/user/wallpaper/interfaces/Wallpaper.md)\>

Defined in: [src/interfaces/contexts/IWallpaperUserContext.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWallpaperUserContext.ts#L14)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`Wallpaper`](../../../../types/user/wallpaper/interfaces/Wallpaper.md)\>

***

### getWallpaper()

> **getWallpaper**(`id`, `override?`): `Promise`\<[`Wallpaper`](../../../../types/user/wallpaper/interfaces/Wallpaper.md)\>

Defined in: [src/interfaces/contexts/IWallpaperUserContext.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWallpaperUserContext.ts#L12)

#### Parameters

##### id

`string`

##### override?

`string`

#### Returns

`Promise`\<[`Wallpaper`](../../../../types/user/wallpaper/interfaces/Wallpaper.md)\>

***

### updateWallpaper()

> **updateWallpaper**(`v`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IWallpaperUserContext.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWallpaperUserContext.ts#L10)

#### Parameters

##### v

[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<`void`\>

***

### uploadWallpaper()

> **uploadWallpaper**(`pid?`): `Promise`\<[`Wallpaper`](../../../../types/user/wallpaper/interfaces/Wallpaper.md) \| `undefined`\>

Defined in: [src/interfaces/contexts/IWallpaperUserContext.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWallpaperUserContext.ts#L11)

#### Parameters

##### pid?

`number`

#### Returns

`Promise`\<[`Wallpaper`](../../../../types/user/wallpaper/interfaces/Wallpaper.md) \| `undefined`\>
