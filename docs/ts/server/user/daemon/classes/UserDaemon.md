[**ArcOS v7**](../../../../../README.md)

***

[ArcOS v7](../../../../../modules.md) / [ts/server/user/daemon](../README.md) / UserDaemon

# Class: UserDaemon

Defined in: [src/ts/server/user/daemon.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L60)

## Extends

- [`Process`](../../../../process/instance/classes/Process.md)

## Constructors

### Constructor

> **new UserDaemon**(`handler`, `pid`, `parentPid`, `token`, `username`, `userInfo?`): `UserDaemon`

Defined in: [src/ts/server/user/daemon.ts:93](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L93)

#### Parameters

##### handler

[`ProcessHandler`](../../../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

##### token

`string`

##### username

`string`

##### userInfo?

[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

#### Returns

`UserDaemon`

#### Overrides

[`Process`](../../../../process/instance/classes/Process.md).[`constructor`](../../../../process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `true`

Defined in: [src/ts/server/user/daemon.ts:87](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L87)

#### Overrides

[`Process`](../../../../process/instance/classes/Process.md).[`_criticalProcess`](../../../../process/instance/classes/Process.md#_criticalprocess)

***

### \_disposed

> **\_disposed**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L21)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`_disposed`](../../../../process/instance/classes/Process.md#_disposed)

***

### \_elevating

> **\_elevating**: `boolean` = `false`

Defined in: [src/ts/server/user/daemon.ts:71](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L71)

***

### autoLoadComplete

> **autoLoadComplete**: `boolean` = `false`

Defined in: [src/ts/server/user/daemon.ts:91](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L91)

***

### battery

> **battery**: [`ReadableStore`](../../../../writable/type-aliases/ReadableStore.md)\<`undefined` \| [`BatteryType`](../../../../../types/navigator/interfaces/BatteryType.md)\>

Defined in: [src/ts/server/user/daemon.ts:67](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L67)

***

### dispatch

> **dispatch**: [`ProcessDispatch`](../../../../process/dispatch/classes/ProcessDispatch.md)

Defined in: [src/ts/process/instance.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L15)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`dispatch`](../../../../process/instance/classes/Process.md#dispatch)

***

### env

> **env**: [`Environment`](../../../../kernel/env/classes/Environment.md)

Defined in: [src/ts/process/instance.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L12)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`env`](../../../../process/instance/classes/Process.md#env)

***

### fileHandlers

> **fileHandlers**: `Record`\<`string`, [`FileHandler`](../../../../../types/fs/interfaces/FileHandler.md)\>

Defined in: [src/ts/server/user/daemon.ts:86](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L86)

***

### fs

> **fs**: [`Filesystem`](../../../../fs/classes/Filesystem.md)

Defined in: [src/ts/process/instance.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L23)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`fs`](../../../../process/instance/classes/Process.md#fs)

***

### handler

> **handler**: [`ProcessHandler`](../../../../process/handler/classes/ProcessHandler.md)

Defined in: [src/ts/process/instance.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L14)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`handler`](../../../../process/instance/classes/Process.md#handler)

***

### initialized

> **initialized**: `boolean` = `false`

Defined in: [src/ts/server/user/daemon.ts:61](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L61)

***

### kernel

> **kernel**: [`WaveKernel`](../../../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/process/instance.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L17)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`kernel`](../../../../process/instance/classes/Process.md#kernel)

***

### lastWallpaper

> **lastWallpaper**: [`ReadableStore`](../../../../writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/server/user/daemon.ts:70](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L70)

***

### mountedDrives

> **mountedDrives**: `string`[] = `[]`

Defined in: [src/ts/server/user/daemon.ts:88](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L88)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/process/instance.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L20)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`name`](../../../../process/instance/classes/Process.md#name)

***

### notifications

> **notifications**: `Map`\<`string`, [`Notification`](../../../../../types/notification/interfaces/Notification.md)\>

Defined in: [src/ts/server/user/daemon.ts:65](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L65)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/process/instance.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L19)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`parentPid`](../../../../process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/process/instance.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L18)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`pid`](../../../../process/instance/classes/Process.md#pid)

***

### preferences

> **preferences**: [`ReadableStore`](../../../../writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/server/user/daemon.ts:64](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L64)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/server/user/daemon.ts:85](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L85)

***

### server

> **server**: [`ServerManager`](../../../classes/ServerManager.md)

Defined in: [src/ts/server/user/daemon.ts:89](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L89)

***

### serviceHost

> **serviceHost**: `undefined` \| [`ServiceHost`](../../../../services/classes/ServiceHost.md)

Defined in: [src/ts/server/user/daemon.ts:68](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L68)

***

### soundBus

> **soundBus**: [`SoundBus`](../../../../soundbus/classes/SoundBus.md)

Defined in: [src/ts/process/instance.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L13)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`soundBus`](../../../../process/instance/classes/Process.md#soundbus)

***

### syncLock

> **syncLock**: `boolean` = `false`

Defined in: [src/ts/server/user/daemon.ts:90](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L90)

***

### systemDispatch

> **systemDispatch**: [`SystemDispatch`](../../../../dispatch/classes/SystemDispatch.md)

Defined in: [src/ts/process/instance.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L16)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`systemDispatch`](../../../../process/instance/classes/Process.md#systemdispatch)

***

### token

> **token**: `string`

Defined in: [src/ts/server/user/daemon.ts:63](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L63)

***

### userInfo

> **userInfo**: [`UserInfo`](../../../../../types/user/interfaces/UserInfo.md) = `DefaultUserInfo`

Defined in: [src/ts/server/user/daemon.ts:66](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L66)

***

### username

> **username**: `string`

Defined in: [src/ts/server/user/daemon.ts:62](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L62)

***

### Wallpaper

> **Wallpaper**: [`ReadableStore`](../../../../writable/type-aliases/ReadableStore.md)\<[`Wallpaper`](../../../../../types/wallpaper/interfaces/Wallpaper.md)\>

Defined in: [src/ts/server/user/daemon.ts:69](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L69)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L48)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`__start`](../../../../process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:54](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L54)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`__stop`](../../../../process/instance/classes/Process.md#__stop)

***

### \_spawnApp()

> **\_spawnApp**\<`T`\>(`id`, `renderTarget`, `parentPid?`, ...`args?`): `Promise`\<`undefined` \| `T`\>

Defined in: [src/ts/server/user/daemon.ts:783](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L783)

#### Type Parameters

##### T

`T`

#### Parameters

##### id

`string`

##### renderTarget

`undefined` | `HTMLDivElement`

##### parentPid?

`number`

##### args?

...`any`[]

#### Returns

`Promise`\<`undefined` \| `T`\>

***

### \_spawnOverlay()

> **\_spawnOverlay**\<`T`\>(`id`, `renderTarget`, `parentPid?`, ...`args?`): `Promise`\<`undefined` \| `T`\>

Defined in: [src/ts/server/user/daemon.ts:846](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L846)

#### Type Parameters

##### T

`T`

#### Parameters

##### id

`string`

##### renderTarget

`undefined` | `HTMLDivElement`

##### parentPid?

`number`

##### args?

...`any`[]

#### Returns

`Promise`\<`undefined` \| `T`\>

***

### activateAdminBootstrapper()

> **activateAdminBootstrapper**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:2154](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2154)

#### Returns

`Promise`\<`void`\>

***

### activateBugHuntUserSpaceProcess()

> **activateBugHuntUserSpaceProcess**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:2191](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2191)

#### Returns

`Promise`\<`void`\>

***

### activateGlobalDispatch()

> **activateGlobalDispatch**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:2362](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2362)

#### Returns

`Promise`\<`void`\>

***

### activateMessagingService()

> **activateMessagingService**(): `void`

Defined in: [src/ts/server/user/daemon.ts:2167](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2167)

#### Returns

`void`

***

### applySavedTheme()

> **applySavedTheme**(`id`): `void`

Defined in: [src/ts/server/user/daemon.ts:439](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L439)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### applyThemeData()

> **applyThemeData**(`data`, `id?`): `undefined` \| `false`

Defined in: [src/ts/server/user/daemon.ts:407](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L407)

#### Parameters

##### data

[`UserTheme`](../../../../../types/theme/interfaces/UserTheme.md)

##### id?

`string`

#### Returns

`undefined` \| `false`

***

### batteryInfo()

> **batteryInfo**(): `Promise`\<`undefined` \| [`BatteryType`](../../../../../types/navigator/interfaces/BatteryType.md)\>

Defined in: [src/ts/server/user/daemon.ts:738](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L738)

#### Returns

`Promise`\<`undefined` \| [`BatteryType`](../../../../../types/navigator/interfaces/BatteryType.md)\>

***

### changePassword()

> **changePassword**(`newPassword`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/user/daemon.ts:1291](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1291)

#### Parameters

##### newPassword

`string`

#### Returns

`Promise`\<`boolean`\>

***

### changeShell()

> **changeShell**(`id`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/server/user/daemon.ts:2384](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2384)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`undefined` \| `false`\>

***

### changeUsername()

> **changeUsername**(`newUsername`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/user/daemon.ts:1255](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1255)

#### Parameters

##### newUsername

`string`

#### Returns

`Promise`\<`boolean`\>

***

### checkCurrentThemeIdValidity()

> **checkCurrentThemeIdValidity**(`data`): [`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

Defined in: [src/ts/server/user/daemon.ts:463](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L463)

#### Parameters

##### data

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

#### Returns

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

***

### checkDisabled()

> **checkDisabled**(`appId`, `noSafeMode?`): `boolean`

Defined in: [src/ts/server/user/daemon.ts:1079](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1079)

#### Parameters

##### appId

`string`

##### noSafeMode?

`boolean`

#### Returns

`boolean`

***

### checkReducedMotion()

> **checkReducedMotion**(): `void`

Defined in: [src/ts/server/user/daemon.ts:2059](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2059)

#### Returns

`void`

***

### clearNotifications()

> **clearNotifications**(): `void`

Defined in: [src/ts/server/user/daemon.ts:361](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L361)

#### Returns

`void`

***

### commitPreferences()

> **commitPreferences**(`preferences`): `Promise`\<`undefined` \| `boolean`\>

Defined in: [src/ts/server/user/daemon.ts:246](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L246)

#### Parameters

##### preferences

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<`undefined` \| `boolean`\>

***

### Confirm()

> **Confirm**(`title`, `message`, `no`, `yes`, `image`): `Promise`\<`unknown`\>

Defined in: [src/ts/server/user/daemon.ts:2415](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2415)

#### Parameters

##### title

`string`

##### message

`string`

##### no

`string`

##### yes

`string`

##### image

`string` = `QuestionIcon`

#### Returns

`Promise`\<`unknown`\>

***

### copyMultiple()

> **copyMultiple**(`sources`, `destination`, `pid`): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:1810](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1810)

#### Parameters

##### sources

`string`[]

##### destination

`string`

##### pid

`number`

#### Returns

`Promise`\<`void`\>

***

### createShortcut()

> **createShortcut**(`data`, `path`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/user/daemon.ts:2039](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2039)

#### Parameters

##### data

[`ArcShortcut`](../../../../../types/shortcut/interfaces/ArcShortcut.md)

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

***

### createWorkspace()

> **createWorkspace**(`name?`): `void`

Defined in: [src/ts/server/user/daemon.ts:1430](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1430)

#### Parameters

##### name?

`string`

#### Returns

`void`

***

### deleteApp()

> **deleteApp**(`id`, `deleteFiles`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/server/user/daemon.ts:2122](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2122)

#### Parameters

##### id

`string`

##### deleteFiles

`boolean` = `false`

#### Returns

`Promise`\<`undefined` \| `false`\>

***

### deleteLocalWallpaper()

> **deleteLocalWallpaper**(`id`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/user/daemon.ts:590](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L590)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteNotification()

> **deleteNotification**(`id`): `void`

Defined in: [src/ts/server/user/daemon.ts:344](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L344)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### deleteUserTheme()

> **deleteUserTheme**(`id`): `void`

Defined in: [src/ts/server/user/daemon.ts:486](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L486)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### deleteVirtualDesktop()

> **deleteVirtualDesktop**(`uuid`): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:1366](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1366)

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<`void`\>

***

### disableApp()

> **disableApp**(`appId`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/server/user/daemon.ts:1089](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1089)

#### Parameters

##### appId

`string`

#### Returns

`Promise`\<`undefined` \| `false`\>

***

### disableThirdParty()

> **disableThirdParty**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:2451](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2451)

#### Returns

`Promise`\<`void`\>

***

### discontinueToken()

> **discontinueToken**(`token`): `Promise`\<`undefined` \| `boolean`\>

Defined in: [src/ts/server/user/daemon.ts:314](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L314)

#### Parameters

##### token

`string` = `...`

#### Returns

`Promise`\<`undefined` \| `boolean`\>

***

### elevate()

> **elevate**(`id`): `Promise`\<`unknown`\>

Defined in: [src/ts/server/user/daemon.ts:1192](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1192)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`unknown`\>

***

### enableApp()

> **enableApp**(`appId`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/server/user/daemon.ts:1125](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1125)

#### Parameters

##### appId

`string`

#### Returns

`Promise`\<`undefined` \| `false`\>

***

### enableThirdParty()

> **enableThirdParty**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:2434](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2434)

#### Returns

`Promise`\<`void`\>

***

### FileProgress()

> **FileProgress**(`initialData`, `parentPid?`): `Promise`\<[`FileProgressMutator`](../../../../../apps/components/fsprogress/types/interfaces/FileProgressMutator.md)\>

Defined in: [src/ts/server/user/daemon.ts:1595](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1595)

#### Parameters

##### initialData

`Partial`\<[`FsProgressOperation`](../../../../../apps/components/fsprogress/types/interfaces/FsProgressOperation.md)\>

##### parentPid?

`number`

#### Returns

`Promise`\<[`FileProgressMutator`](../../../../../apps/components/fsprogress/types/interfaces/FileProgressMutator.md)\>

***

### findHandlerToOpenFile()

> **findHandlerToOpenFile**(`path`): `Promise`\<[`FileOpenerResult`](../../../../../types/fs/interfaces/FileOpenerResult.md)[]\>

Defined in: [src/ts/server/user/daemon.ts:1853](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1853)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`FileOpenerResult`](../../../../../types/fs/interfaces/FileOpenerResult.md)[]\>

***

### getAllFileHandlers()

> **getAllFileHandlers**(): `Promise`\<[`FileOpenerResult`](../../../../../types/fs/interfaces/FileOpenerResult.md)[]\>

Defined in: [src/ts/server/user/daemon.ts:1894](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1894)

#### Returns

`Promise`\<[`FileOpenerResult`](../../../../../types/fs/interfaces/FileOpenerResult.md)[]\>

***

### getAppIcon()

> **getAppIcon**(`app`, `workingDirectory?`): `string`

Defined in: [src/ts/server/user/daemon.ts:2272](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2272)

#### Parameters

##### app

[`App`](../../../../../types/app/interfaces/App.md)

##### workingDirectory?

`string`

#### Returns

`string`

***

### getAppIconByProcess()

> **getAppIconByProcess**(`process`): `string`

Defined in: [src/ts/server/user/daemon.ts:2294](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2294)

#### Parameters

##### process

[`AppProcess`](../../../../apps/process/classes/AppProcess.md)

#### Returns

`string`

***

### getAppRendererStyle()

> **getAppRendererStyle**(`accent`): `string`

Defined in: [src/ts/server/user/daemon.ts:194](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L194)

#### Parameters

##### accent

`string`

#### Returns

`string`

***

### getCurrentDesktop()

> **getCurrentDesktop**(): `undefined` \| `HTMLDivElement`

Defined in: [src/ts/server/user/daemon.ts:1413](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1413)

#### Returns

`undefined` \| `HTMLDivElement`

***

### getDesktopIndexByUuid()

> **getDesktopIndexByUuid**(`uuid`): `number`

Defined in: [src/ts/server/user/daemon.ts:1443](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1443)

#### Parameters

##### uuid

`string`

#### Returns

`number`

***

### getGlobalSetting()

> **getGlobalSetting**(`key`): `any`

Defined in: [src/ts/server/user/daemon.ts:2047](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2047)

#### Parameters

##### key

`string`

#### Returns

`any`

***

### getLocalWallpaper()

> **getLocalWallpaper**(`id`): `Promise`\<[`Wallpaper`](../../../../../types/wallpaper/interfaces/Wallpaper.md)\>

Defined in: [src/ts/server/user/daemon.ts:609](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L609)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`Wallpaper`](../../../../../types/wallpaper/interfaces/Wallpaper.md)\>

***

### getLoginActivity()

> **getLoginActivity**(): `Promise`\<[`LoginActivity`](../../../../../types/activity/interfaces/LoginActivity.md)[]\>

Defined in: [src/ts/server/user/daemon.ts:1156](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1156)

#### Returns

`Promise`\<[`LoginActivity`](../../../../../types/activity/interfaces/LoginActivity.md)[]\>

***

### getMimeIconByExtension()

> **getMimeIconByExtension**(`extension`): `undefined` \| `string`

Defined in: [src/ts/server/user/daemon.ts:1928](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1928)

#### Parameters

##### extension

`string`

#### Returns

`undefined` \| `string`

***

### getMimeIconByFilename()

> **getMimeIconByFilename**(`filename`): `undefined` \| `string`

Defined in: [src/ts/server/user/daemon.ts:1920](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1920)

#### Parameters

##### filename

`string`

#### Returns

`undefined` \| `string`

***

### getPublicUserInfoOf()

> **getPublicUserInfoOf**(`userId`): `Promise`\<`undefined` \| [`PublicUserInfo`](../../../../../types/user/interfaces/PublicUserInfo.md)\>

Defined in: [src/ts/server/user/daemon.ts:2259](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2259)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<`undefined` \| [`PublicUserInfo`](../../../../../types/user/interfaces/PublicUserInfo.md)\>

***

### getUserApps()

> **getUserApps**(): `Promise`\<[`AppStorage`](../../../../../types/app/type-aliases/AppStorage.md)\>

Defined in: [src/ts/server/user/daemon.ts:762](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L762)

#### Returns

`Promise`\<[`AppStorage`](../../../../../types/app/type-aliases/AppStorage.md)\>

***

### getUserInfo()

> **getUserInfo**(): `Promise`\<`undefined` \| [`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)\>

Defined in: [src/ts/server/user/daemon.ts:114](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L114)

#### Returns

`Promise`\<`undefined` \| [`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)\>

***

### getWallpaper()

> **getWallpaper**(`id`, `override?`): `Promise`\<[`Wallpaper`](../../../../../types/wallpaper/interfaces/Wallpaper.md)\>

Defined in: [src/ts/server/user/daemon.ts:570](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L570)

#### Parameters

##### id

`string`

##### override?

`string`

#### Returns

`Promise`\<[`Wallpaper`](../../../../../types/wallpaper/interfaces/Wallpaper.md)\>

***

### GlobalLoadIndicator()

> **GlobalLoadIndicator**(`caption?`): `Promise`\<\{ `caption`: [`ReadableStore`](../../../../writable/type-aliases/ReadableStore.md)\<`string`\>; `stop`: () => `Promise`\<`void`\>; \}\>

Defined in: [src/ts/server/user/daemon.ts:2197](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2197)

#### Parameters

##### caption?

`string`

#### Returns

`Promise`\<\{ `caption`: [`ReadableStore`](../../../../writable/type-aliases/ReadableStore.md)\<`string`\>; `stop`: () => `Promise`\<`void`\>; \}\>

***

### handleShortcut()

> **handleShortcut**(`path`, `shortcut`): `Promise`\<`any`\>

Defined in: [src/ts/server/user/daemon.ts:2013](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2013)

#### Parameters

##### path

`string`

##### shortcut

[`ArcShortcut`](../../../../../types/shortcut/interfaces/ArcShortcut.md)

#### Returns

`Promise`\<`any`\>

***

### IconPicker()

> **IconPicker**(`data`): `Promise`\<`undefined` \| `string`\>

Defined in: [src/ts/server/user/daemon.ts:2089](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2089)

#### Parameters

##### data

`Omit`\<[`IconPickerData`](../../../../../apps/components/iconpicker/types/interfaces/IconPickerData.md), `"returnId"`\>

#### Returns

`Promise`\<`undefined` \| `string`\>

***

### iHaveFeedback()

> **iHaveFeedback**(`process`): `void`

Defined in: [src/ts/server/user/daemon.ts:2317](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2317)

#### Parameters

##### process

[`AppProcess`](../../../../apps/process/classes/AppProcess.md)

#### Returns

`void`

***

### installApp()

> **installApp**(`data`): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:2111](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2111)

#### Parameters

##### data

[`InstalledApp`](../../../../../types/app/interfaces/InstalledApp.md)

#### Returns

`Promise`\<`void`\>

***

### installAppFromPath()

> **installAppFromPath**(`path`): `Promise`\<`undefined` \| `"failed to read file"` \| `"failed to convert to JSON"` \| `"missing properties"`\>

Defined in: [src/ts/server/user/daemon.ts:2137](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2137)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `"failed to read file"` \| `"failed to convert to JSON"` \| `"missing properties"`\>

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/process/instance.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L60)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`killSelf`](../../../../process/instance/classes/Process.md#killself)

***

### killWindowsOfDesktop()

> **killWindowsOfDesktop**(`uuid`): `Promise`\<`undefined` \| `boolean`\>

Defined in: [src/ts/server/user/daemon.ts:1472](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1472)

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<`undefined` \| `boolean`\>

***

### loadElevation()

> **loadElevation**(`id`, `data`): `void`

Defined in: [src/ts/server/user/daemon.ts:1247](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1247)

#### Parameters

##### id

`string`

##### data

[`ElevationData`](../../../../../types/elevation/interfaces/ElevationData.md)

#### Returns

`void`

***

### loadMimeIcon()

> **loadMimeIcon**(`extension`, `icon`): `void`

Defined in: [src/ts/server/user/daemon.ts:1934](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1934)

#### Parameters

##### extension

`string`

##### icon

`string`

#### Returns

`void`

***

### LoadSaveDialog()

> **LoadSaveDialog**(`data`): `Promise`\<`string`[] \| \[`undefined`\]\>

Defined in: [src/ts/server/user/daemon.ts:1947](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1947)

#### Parameters

##### data

`Omit`\<[`LoadSaveDialogData`](../../../../../apps/user/filemanager/types/interfaces/LoadSaveDialogData.md), `"returnId"`\>

#### Returns

`Promise`\<`string`[] \| \[`undefined`\]\>

***

### Log()

> `protected` **Log**(`message`, `level`): `void`

Defined in: [src/ts/process/instance.ts:67](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L67)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`Log`](../../../../process/instance/classes/Process.md#log)

***

### logActivity()

> **logActivity**(`action`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/user/daemon.ts:1170](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1170)

#### Parameters

##### action

`string`

#### Returns

`Promise`\<`boolean`\>

***

### logoff()

> **logoff**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:648](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L648)

#### Returns

`Promise`\<`void`\>

***

### logoffSafeMode()

> **logoffSafeMode**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:672](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L672)

#### Returns

`Promise`\<`void`\>

***

### manuallyElevate()

> **manuallyElevate**(`data`): `Promise`\<`unknown`\>

Defined in: [src/ts/server/user/daemon.ts:1204](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1204)

#### Parameters

##### data

[`ElevationData`](../../../../../types/elevation/interfaces/ElevationData.md)

#### Returns

`Promise`\<`unknown`\>

***

### mountZip()

> **mountZip**(`path`, `letter?`, `fromSystem?`): `Promise`\<`undefined` \| `false` \| [`FilesystemDrive`](../../../../fs/drive/classes/FilesystemDrive.md)\>

Defined in: [src/ts/server/user/daemon.ts:692](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L692)

#### Parameters

##### path

`string`

##### letter?

`string`

##### fromSystem?

`boolean` = `false`

#### Returns

`Promise`\<`undefined` \| `false` \| [`FilesystemDrive`](../../../../fs/drive/classes/FilesystemDrive.md)\>

***

### moveMultiple()

> **moveMultiple**(`sources`, `destination`, `pid`): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:1766](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1766)

#### Parameters

##### sources

`string`[]

##### destination

`string`

##### pid

`number`

#### Returns

`Promise`\<`void`\>

***

### moveWindow()

> **moveWindow**(`pid`, `destination`): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:1526](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1526)

#### Parameters

##### pid

`number`

##### destination

`string`

#### Returns

`Promise`\<`void`\>

***

### nextDesktop()

> **nextDesktop**(): `boolean`

Defined in: [src/ts/server/user/daemon.ts:1490](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1490)

#### Returns

`boolean`

***

### openFile()

> **openFile**(`path`, `shortcut?`): `Promise`\<`any`\>

Defined in: [src/ts/server/user/daemon.ts:1967](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1967)

#### Parameters

##### path

`string`

##### shortcut?

[`ArcShortcut`](../../../../../types/shortcut/interfaces/ArcShortcut.md)

#### Returns

`Promise`\<`any`\>

***

### openWith()

> **openWith**(`path`): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:2006](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2006)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

***

### previousDesktop()

> **previousDesktop**(): `void`

Defined in: [src/ts/server/user/daemon.ts:1510](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1510)

#### Returns

`void`

***

### renderVirtualDesktop()

> **renderVirtualDesktop**(`uuid`): `void`

Defined in: [src/ts/server/user/daemon.ts:1352](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1352)

#### Parameters

##### uuid

`string`

#### Returns

`void`

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/process/instance.ts:73](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L73)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `false`\>

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`requestFileLock`](../../../../process/instance/classes/Process.md#requestfilelock)

***

### restart()

> **restart**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:664](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L664)

#### Returns

`Promise`\<`void`\>

***

### safeModeNotice()

> **safeModeNotice**(): `void`

Defined in: [src/ts/server/user/daemon.ts:2300](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2300)

#### Returns

`void`

***

### sanitizeUserPreferences()

> **sanitizeUserPreferences**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:280](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L280)

#### Returns

`Promise`\<`void`\>

***

### saveCurrentTheme()

> **saveCurrentTheme**(`name`): `void`

Defined in: [src/ts/server/user/daemon.ts:391](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L391)

#### Parameters

##### name

`string`

#### Returns

`void`

***

### sendNotification()

> **sendNotification**(`data`): `undefined` \| `string`

Defined in: [src/ts/server/user/daemon.ts:328](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L328)

#### Parameters

##### data

[`Notification`](../../../../../types/notification/interfaces/Notification.md)

#### Returns

`undefined` \| `string`

***

### setAppRendererClasses()

> **setAppRendererClasses**(`v`): `void`

Defined in: [src/ts/server/user/daemon.ts:208](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L208)

#### Parameters

##### v

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`void`

***

### setGlobalSetting()

> **setGlobalSetting**(`key`, `value`): `void`

Defined in: [src/ts/server/user/daemon.ts:2051](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2051)

#### Parameters

##### key

`string`

##### value

`any`

#### Returns

`void`

***

### setUserStyleLoader()

> **setUserStyleLoader**(`style`): `void`

Defined in: [src/ts/server/user/daemon.ts:231](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L231)

#### Parameters

##### style

[`CustomStylePreferences`](../../../../../types/user/interfaces/CustomStylePreferences.md)

#### Returns

`void`

***

### shutdown()

> **shutdown**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:656](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L656)

#### Returns

`Promise`\<`void`\>

***

### spawnApp()

> **spawnApp**\<`T`\>(`id`, `parentPid?`, ...`args?`): `Promise`\<`undefined` \| `T`\>

Defined in: [src/ts/server/user/daemon.ts:771](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L771)

#### Type Parameters

##### T

`T`

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args?

...`any`[]

#### Returns

`Promise`\<`undefined` \| `T`\>

***

### spawnAutoload()

> **spawnAutoload**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:1010](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1010)

#### Returns

`Promise`\<`void`\>

***

### spawnOverlay()

> **spawnOverlay**\<`T`\>(`id`, `parentPid?`, ...`args?`): `Promise`\<`undefined` \| `T`\>

Defined in: [src/ts/server/user/daemon.ts:777](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L777)

#### Type Parameters

##### T

`T`

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args?

...`any`[]

#### Returns

`Promise`\<`undefined` \| `T`\>

***

### spawnThirdParty()

> **spawnThirdParty**\<`T`\>(`app`, `metaPath`, ...`args`): `Promise`\<`undefined` \| `T`\>

Defined in: [src/ts/server/user/daemon.ts:904](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L904)

#### Type Parameters

##### T

`T`

#### Parameters

##### app

[`App`](../../../../../types/app/interfaces/App.md)

##### metaPath

`string`

##### args

...`any`[]

#### Returns

`Promise`\<`undefined` \| `T`\>

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L44)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`start`](../../../../process/instance/classes/Process.md#start)

***

### startApplicationStorage()

> **startApplicationStorage**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:105](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L105)

#### Returns

`Promise`\<`void`\>

***

### startDriveNotifierWatcher()

> **startDriveNotifierWatcher**(): `void`

Defined in: [src/ts/server/user/daemon.ts:1552](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1552)

#### Returns

`void`

***

### startFilesystemSupplier()

> **startFilesystemSupplier**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:262](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L262)

#### Returns

`Promise`\<`void`\>

***

### startPreferencesSync()

> **startPreferencesSync**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:156](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L156)

#### Returns

`Promise`\<`void`\>

***

### startServiceHost()

> **startServiceHost**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:2184](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2184)

#### Returns

`Promise`\<`void`\>

***

### startShareManager()

> **startShareManager**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:2175](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2175)

#### Returns

`Promise`\<`void`\>

***

### startSystemStatusRefresh()

> **startSystemStatusRefresh**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:750](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L750)

#### Returns

`Promise`\<`void`\>

***

### startVirtualDesktops()

> **startVirtualDesktops**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:1395](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1395)

#### Returns

`Promise`\<`void`\>

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:272](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L272)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Process`](../../../../process/instance/classes/Process.md).[`stop`](../../../../process/instance/classes/Process.md#stop)

***

### switchToDesktopByUuid()

> **switchToDesktopByUuid**(`uuid`): `void`

Defined in: [src/ts/server/user/daemon.ts:1457](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1457)

#### Parameters

##### uuid

`string`

#### Returns

`void`

***

### syncVirtualDesktops()

> **syncVirtualDesktops**(`v`): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:1319](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1319)

#### Parameters

##### v

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<`void`\>

***

### themeFromUserPreferences()

> **themeFromUserPreferences**(`data`, `name`, `author`, `version`): [`UserTheme`](../../../../../types/theme/interfaces/UserTheme.md)

Defined in: [src/ts/server/user/daemon.ts:370](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L370)

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

[`UserTheme`](../../../../../types/theme/interfaces/UserTheme.md)

***

### toLogin()

> **toLogin**(`type`, `props`): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:680](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L680)

#### Parameters

##### type

`string`

##### props

`Record`\<`string`, `any`\> = `{}`

#### Returns

`Promise`\<`void`\>

***

### uninstallAppWithAck()

> **uninstallAppWithAck**(`app`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/user/daemon.ts:2219](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L2219)

#### Parameters

##### app

[`App`](../../../../../types/app/interfaces/App.md)

#### Returns

`Promise`\<`boolean`\>

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/process/instance.ts:85](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L85)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `false`\>

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`unlockFile`](../../../../process/instance/classes/Process.md#unlockfile)

***

### unmountMountedDrives()

> **unmountMountedDrives**(): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:1587](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L1587)

#### Returns

`Promise`\<`void`\>

***

### updateWallpaper()

> **updateWallpaper**(`v`): `Promise`\<`void`\>

Defined in: [src/ts/server/user/daemon.ts:178](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L178)

#### Parameters

##### v

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<`void`\>

***

### uploadProfilePicture()

> **uploadProfilePicture**(): `Promise`\<`undefined` \| `string`\>

Defined in: [src/ts/server/user/daemon.ts:552](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L552)

#### Returns

`Promise`\<`undefined` \| `string`\>

***

### uploadWallpaper()

> **uploadWallpaper**(`pid?`): `Promise`\<`undefined` \| [`Wallpaper`](../../../../../types/wallpaper/interfaces/Wallpaper.md)\>

Defined in: [src/ts/server/user/daemon.ts:500](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L500)

#### Parameters

##### pid?

`number`

#### Returns

`Promise`\<`undefined` \| [`Wallpaper`](../../../../../types/wallpaper/interfaces/Wallpaper.md)\>

***

### verifyTheme()

> **verifyTheme**(`data`): `undefined` \| `string`

Defined in: [src/ts/server/user/daemon.ts:451](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/daemon.ts#L451)

#### Parameters

##### data

[`UserTheme`](../../../../../types/theme/interfaces/UserTheme.md)

#### Returns

`undefined` \| `string`
