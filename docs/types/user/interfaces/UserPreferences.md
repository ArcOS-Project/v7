[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [types/user](../README.md) / UserPreferences

# Interface: UserPreferences

Defined in: [src/types/user.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L23)

## Properties

### account

> **account**: [`AccountSettings`](AccountSettings.md)

Defined in: [src/types/user.ts:27](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L27)

***

### appPreferences

> **appPreferences**: [`ApplicationPreferences`](ApplicationPreferences.md)

Defined in: [src/types/user.ts:26](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L26)

***

### currentThemeId?

> `optional` **currentThemeId**: `string`

Defined in: [src/types/user.ts:33](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L33)

***

### desktop

> **desktop**: [`DesktopPreferences`](DesktopPreferences.md)

Defined in: [src/types/user.ts:29](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L29)

***

### disabledApps

> **disabledApps**: `string`[]

Defined in: [src/types/user.ts:36](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L36)

***

### globalSettings

> **globalSettings**: `Record`\<`string`, `any`\>

Defined in: [src/types/user.ts:38](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L38)

***

### isDefault?

> `optional` **isDefault**: `boolean`

Defined in: [src/types/user.ts:28](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L28)

***

### pinnedApps

> **pinnedApps**: `string`[]

Defined in: [src/types/user.ts:35](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L35)

***

### searchOptions

> **searchOptions**: [`ArcFindOptions`](ArcFindOptions.md)

Defined in: [src/types/user.ts:34](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L34)

***

### security

> **security**: [`SecurityPreferences`](SecurityPreferences.md)

Defined in: [src/types/user.ts:25](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L25)

***

### shell

> **shell**: [`ShellPreferences`](ShellPreferences.md)

Defined in: [src/types/user.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L24)

***

### startup?

> `optional` **startup**: `Record`\<`string`, `"app"` \| `"folder"` \| `"file"` \| `"share"`\>

Defined in: [src/types/user.ts:39](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L39)

***

### userApps

> **userApps**: `Record`\<`string`, [`App`](../../app/interfaces/App.md)\>

Defined in: [src/types/user.ts:32](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L32)

***

### userThemes

> **userThemes**: [`ThemeStore`](../../theme/type-aliases/ThemeStore.md)

Defined in: [src/types/user.ts:30](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L30)

***

### userWallpapers

> **userWallpapers**: `Record`\<`string`, [`Wallpaper`](../../wallpaper/interfaces/Wallpaper.md)\>

Defined in: [src/types/user.ts:31](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L31)

***

### workspaces

> **workspaces**: [`WorkspacesOptions`](WorkspacesOptions.md)

Defined in: [src/types/user.ts:37](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/user.ts#L37)
