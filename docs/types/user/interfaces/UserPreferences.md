[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [types/user](../README.md) / UserPreferences

# Interface: UserPreferences

Defined in: [src/types/user/index.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L25)

## Properties

### \_internalImportBlocklist

> **\_internalImportBlocklist**: `string`[]

Defined in: [src/types/user/index.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L43)

***

### account

> **account**: [`AccountSettings`](AccountSettings.md)

Defined in: [src/types/user/index.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L29)

***

### appPreferences

> **appPreferences**: [`ApplicationPreferences`](ApplicationPreferences.md)

Defined in: [src/types/user/index.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L28)

***

### currentThemeId?

> `optional` **currentThemeId?**: `string`

Defined in: [src/types/user/index.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L36)

***

### desktop

> **desktop**: [`DesktopPreferences`](DesktopPreferences.md)

Defined in: [src/types/user/index.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L32)

***

### disabledApps

> **disabledApps**: `string`[]

Defined in: [src/types/user/index.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L39)

***

### enableVerboseLogin?

> `optional` **enableVerboseLogin?**: `boolean`

Defined in: [src/types/user/index.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L44)

***

### firstRunDone?

> `optional` **firstRunDone?**: `boolean`

Defined in: [src/types/user/index.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L31)

***

### globalSettings

> **globalSettings**: `Record`\<`string`, `any`\>

Defined in: [src/types/user/index.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L41)

***

### isDefault?

> `optional` **isDefault?**: `boolean`

Defined in: [src/types/user/index.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L30)

***

### pinnedApps

> **pinnedApps**: `string`[]

Defined in: [src/types/user/index.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L38)

***

### searchOptions

> **searchOptions**: [`ArcFindOptions`](ArcFindOptions.md)

Defined in: [src/types/user/index.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L37)

***

### security

> **security**: [`SecurityPreferences`](SecurityPreferences.md)

Defined in: [src/types/user/index.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L27)

***

### shell

> **shell**: [`ShellPreferences`](ShellPreferences.md)

Defined in: [src/types/user/index.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L26)

***

### startup?

> `optional` **startup?**: `Record`\<`string`, `"app"` \| `"file"` \| `"folder"` \| `"share"` \| `"disabled"`\>

Defined in: [src/types/user/index.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L42)

***

### userApps

> **userApps**: `Record`\<`string`, [`App`](../../apps/app/interfaces/App.md)\>

Defined in: [src/types/user/index.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L35)

***

### userThemes

> **userThemes**: [`ThemeStore`](../theme/type-aliases/ThemeStore.md)

Defined in: [src/types/user/index.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L33)

***

### userWallpapers

> **userWallpapers**: `Record`\<`string`, [`Wallpaper`](../wallpaper/interfaces/Wallpaper.md)\>

Defined in: [src/types/user/index.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L34)

***

### weatherSettings

> **weatherSettings**: [`WeatherSettings`](WeatherSettings.md)

Defined in: [src/types/user/index.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L45)

***

### workspaces

> **workspaces**: [`WorkspacesOptions`](WorkspacesOptions.md)

Defined in: [src/types/user/index.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/user/index.ts#L40)
