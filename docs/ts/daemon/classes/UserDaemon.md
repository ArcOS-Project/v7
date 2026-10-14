[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [ts/daemon](../README.md) / UserDaemon

# Class: UserDaemon

Defined in: [src/ts/daemon/index.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L50)

## Extends

- [`Process`](../../kernel/mods/stack/process/instance/classes/Process.md)

## Implements

- [`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

## Constructors

### Constructor

> **new UserDaemon**(`pid`, `parentPid`, `token`, `username`, `userInfo?`): `UserDaemon`

Defined in: [src/ts/daemon/index.ts:120](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L120)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### token

`string`

##### username

`string`

##### userInfo?

[`UserInfo`](../../../types/user/interfaces/UserInfo.md)

#### Returns

`UserDaemon`

#### Overrides

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`constructor`](../../kernel/mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_blockLeaveInvocations

> **\_blockLeaveInvocations**: `boolean` = `true`

Defined in: [src/ts/daemon/index.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L57)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`_blockLeaveInvocations`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#_blockleaveinvocations)

***

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `true`

Defined in: [src/ts/daemon/index.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L59)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`_criticalProcess`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#_criticalprocess)

#### Overrides

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../kernel/mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### \_toLoginInvoked

> **\_toLoginInvoked**: `boolean` = `false`

Defined in: [src/ts/daemon/index.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L58)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`_toLoginInvoked`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#_tologininvoked)

***

### account?

> `optional` **account?**: [`IAccountUserContext`](../../../interfaces/contexts/IAccountUserContext/interfaces/IAccountUserContext.md)

Defined in: [src/ts/daemon/index.ts:93](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L93)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`account`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#account)

***

### activity?

> `optional` **activity?**: [`ILoginActivityUserContext`](../../../interfaces/contexts/ILoginActivityUserContext/interfaces/ILoginActivityUserContext.md)

Defined in: [src/ts/daemon/index.ts:94](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L94)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`activity`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#activity)

***

### appreg?

> `optional` **appreg?**: [`IAppRegistrationUserContext`](../../../interfaces/contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md)

Defined in: [src/ts/daemon/index.ts:96](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L96)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`appreg`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#appreg)

***

### apps?

> `optional` **apps?**: [`IApplicationsUserContext`](../../../interfaces/contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md)

Defined in: [src/ts/daemon/index.ts:95](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L95)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`apps`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#apps)

***

### autoLoadComplete

> **autoLoadComplete**: `boolean` = `false`

Defined in: [src/ts/daemon/index.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L54)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`autoLoadComplete`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#autoloadcomplete)

***

### checks?

> `optional` **checks?**: [`IChecksUserContext`](../../../interfaces/contexts/IChecksUserContext/interfaces/IChecksUserContext.md)

Defined in: [src/ts/daemon/index.ts:98](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L98)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`checks`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#checks)

***

### copyList

> **copyList**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`[]\>

Defined in: [src/ts/daemon/index.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L60)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`copyList`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#copylist)

***

### cutList

> **cutList**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`[]\>

Defined in: [src/ts/daemon/index.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L61)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`cutList`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#cutlist)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`dispatch`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#dispatch)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`dispatch`](../../kernel/mods/stack/process/instance/classes/Process.md#dispatch)

***

### elevation?

> `optional` **elevation?**: [`IElevationUserContext`](../../../interfaces/contexts/IElevationUserContext/interfaces/IElevationUserContext.md)

Defined in: [src/ts/daemon/index.ts:99](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L99)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`elevation`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#elevation)

***

### files?

> `optional` **files?**: [`IFilesystemUserContext`](../../../interfaces/contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md)

Defined in: [src/ts/daemon/index.ts:100](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L100)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`files`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#files)

***

### helpers?

> `optional` **helpers?**: [`IHelpersUserContext`](../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md)

Defined in: [src/ts/daemon/index.ts:101](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L101)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`helpers`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#helpers)

***

### icons?

> `optional` **icons?**: [`IIconsUserContext`](../../../interfaces/contexts/IIconsUserContext/interfaces/IIconsUserContext.md)

Defined in: [src/ts/daemon/index.ts:102](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L102)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`icons`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#icons)

***

### init?

> `optional` **init?**: [`IInitUserContext`](../../../interfaces/contexts/IInitUserContext/interfaces/IInitUserContext.md)

Defined in: [src/ts/daemon/index.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L103)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`init`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#init)

***

### InitComplete

> **InitComplete**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/daemon/index.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L63)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`InitComplete`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#initcomplete)

***

### initialized

> **initialized**: `boolean` = `false`

Defined in: [src/ts/daemon/index.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L56)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`initialized`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#initialized)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`name`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#name)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`name`](../../kernel/mods/stack/process/instance/classes/Process.md#name)

***

### notifications?

> `optional` **notifications?**: [`INotificationsUserContext`](../../../interfaces/contexts/INotificationsUserContext/interfaces/INotificationsUserContext.md)

Defined in: [src/ts/daemon/index.ts:104](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L104)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`notifications`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#notifications)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`parentPid`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#parentpid)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`parentPid`](../../kernel/mods/stack/process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`pid`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#pid)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`pid`](../../kernel/mods/stack/process/instance/classes/Process.md#pid)

***

### power?

> `optional` **power?**: [`IPowerUserContext`](../../../interfaces/contexts/IPowerUserContext/interfaces/IPowerUserContext.md)

Defined in: [src/ts/daemon/index.ts:105](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L105)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`power`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#power)

***

### preferencesCtx?

> `optional` **preferencesCtx?**: [`IPreferencesUserContext`](../../../interfaces/contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md)

Defined in: [src/ts/daemon/index.ts:106](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L106)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`preferencesCtx`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#preferencesctx)

***

### renderer?

> `optional` **renderer?**: [`IAppRendererUserContext`](../../../interfaces/contexts/IAppRendererUserContext/interfaces/IAppRendererUserContext.md)

Defined in: [src/ts/daemon/index.ts:97](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L97)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`renderer`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#renderer)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/daemon/index.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L55)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`safeMode`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#safemode)

***

### serviceHost?

> `optional` **serviceHost?**: [`ServiceHost`](../../servicehost/classes/ServiceHost.md)

Defined in: [src/ts/daemon/index.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L62)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`serviceHost`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#servicehost)

***

### shortcuts?

> `optional` **shortcuts?**: [`IShortcutsUserContext`](../../../interfaces/contexts/IShortcutsUserContext/interfaces/IShortcutsUserContext.md)

Defined in: [src/ts/daemon/index.ts:112](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L112)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`shortcuts`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#shortcuts)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`sourceUrl`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#sourceurl)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`sourceUrl`](../../kernel/mods/stack/process/instance/classes/Process.md#sourceurl)

***

### spawn?

> `optional` **spawn?**: [`ISpawnUserContext`](../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md)

Defined in: [src/ts/daemon/index.ts:107](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L107)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`spawn`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#spawn)

***

### themes?

> `optional` **themes?**: [`IThemesUserContext`](../../../interfaces/contexts/IThemesUserContext/interfaces/IThemesUserContext.md)

Defined in: [src/ts/daemon/index.ts:108](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L108)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`themes`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#themes)

***

### token

> **token**: `string`

Defined in: [src/ts/daemon/index.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L52)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`token`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#token)

***

### userInfo

> **userInfo**: [`UserInfo`](../../../types/user/interfaces/UserInfo.md) = `DefaultUserInfo`

Defined in: [src/ts/daemon/index.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L53)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`userInfo`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#userinfo)

***

### username

> **username**: `string`

Defined in: [src/ts/daemon/index.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L51)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`username`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#username)

***

### version?

> `optional` **version?**: [`IVersionUserContext`](../../../interfaces/contexts/IVersionUserContext/interfaces/IVersionUserContext.md)

Defined in: [src/ts/daemon/index.ts:109](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L109)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`version`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#version)

***

### wallpaper?

> `optional` **wallpaper?**: [`IWallpaperUserContext`](../../../interfaces/contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md)

Defined in: [src/ts/daemon/index.ts:110](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L110)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`wallpaper`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#wallpaper)

***

### workspaces?

> `optional` **workspaces?**: [`IWorkspaceUserContext`](../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md)

Defined in: [src/ts/daemon/index.ts:111](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L111)

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`workspaces`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#workspaces)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`_disposed`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#_disposed)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`_disposed`](../../kernel/mods/stack/process/instance/classes/Process.md#_disposed)

***

### assoc

#### Get Signature

> **get** **assoc**(): [`IFileAssocService`](../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md) \| `undefined`

Defined in: [src/ts/daemon/index.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L79)

##### Returns

[`IFileAssocService`](../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md) \| `undefined`

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`assoc`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#assoc)

***

### betaClient

#### Get Signature

> **get** **betaClient**(): `AxiosInstance`

Defined in: [src/ts/daemon/index.ts:65](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L65)

##### Returns

`AxiosInstance`

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`betaClient`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#betaclient)

***

### canPaste

#### Get Signature

> **get** **canPaste**(): `boolean`

Defined in: [src/ts/daemon/index.ts:87](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L87)

##### Returns

`boolean`

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`canPaste`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#canpaste)

***

### globalDispatch

#### Get Signature

> **get** **globalDispatch**(): [`IGlobalDispatch`](../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md) \| `undefined`

Defined in: [src/ts/daemon/index.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L75)

##### Returns

[`IGlobalDispatch`](../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md) \| `undefined`

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`globalDispatch`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#globaldispatch)

***

### libraries

#### Get Signature

> **get** **libraries**(): [`ILibraryManagement`](../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md) \| `undefined`

Defined in: [src/ts/daemon/index.ts:83](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L83)

##### Returns

[`ILibraryManagement`](../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md) \| `undefined`

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`libraries`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#libraries)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`MEMORY`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#memory)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`MEMORY`](../../kernel/mods/stack/process/instance/classes/Process.md#memory)

***

### preferences

#### Get Signature

> **get** **preferences**(): [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/daemon/index.ts:114](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L114)

##### Returns

[`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../types/user/interfaces/UserPreferences.md)\>

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`preferences`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#preferences)

***

### STATE

#### Get Signature

> **get** **STATE**(): [`ProcessState`](../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L17)

##### Returns

[`ProcessState`](../../../types/system/process/type-aliases/ProcessState.md)

#### Set Signature

> **set** **STATE**(`value`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L21)

##### Parameters

###### value

[`ProcessState`](../../../types/system/process/type-aliases/ProcessState.md)

##### Returns

`void`

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`STATE`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#state)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`STATE`](../../kernel/mods/stack/process/instance/classes/Process.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`__start`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#__start)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`__start`](../../kernel/mods/stack/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`__stop`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#__stop)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`__stop`](../../kernel/mods/stack/process/instance/classes/Process.md#__stop)

***

### appStorage()

> **appStorage**(): [`IApplicationStorage`](../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

Defined in: [src/ts/daemon/index.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L217)

#### Returns

[`IApplicationStorage`](../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`appStorage`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#appstorage)

***

### checkAdminEnablement()

> **checkAdminEnablement**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/index.ts:178](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L178)

#### Returns

`Promise`\<`void`\>

***

### GetConnector()

> **GetConnector**\<`T`\>(`name`): `T`

Defined in: [src/ts/daemon/index.ts:231](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L231)

#### Type Parameters

##### T

`T` *extends* [`IServerConnector`](../../../interfaces/modules/IServerManager/classes/IServerConnector.md)

#### Parameters

##### name

`string`

#### Returns

`T`

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`GetConnector`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#getconnector)

***

### getShell()

> **getShell**(): [`IShellRuntime`](../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/daemon/index.ts:221](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L221)

#### Returns

[`IShellRuntime`](../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`getShell`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#getshell)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`killSelf`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#killself)

#### Inherited from

`Process.killSelf`

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L85)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`Log`](../../kernel/mods/stack/process/instance/classes/Process.md#log)

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L91)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`requestFileLock`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#requestfilelock)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`requestFileLock`](../../kernel/mods/stack/process/instance/classes/Process.md#requestfilelock)

***

### setSource()

> **setSource**(`source`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:115](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L115)

#### Parameters

##### source

`string`

#### Returns

`void`

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`setSource`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#setsource)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`setSource`](../../kernel/mods/stack/process/instance/classes/Process.md#setsource)

***

### start()

> **start**(): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/daemon/index.ts:135](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L135)

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`start`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#start)

#### Overrides

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`start`](../../kernel/mods/stack/process/instance/classes/Process.md#start)

***

### startUserContexts()

> **startUserContexts**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/index.ts:159](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L159)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`startUserContexts`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#startusercontexts)

***

### startUserDaemon()

> **startUserDaemon**(`startOptions`, `broadcast`): `Promise`\<[`ICommandResult`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)\>\>

Defined in: [src/ts/daemon/index.ts:243](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L243)

#### Parameters

##### startOptions

[`UserDaemonStartOptions`](../../../types/daemon/interfaces/UserDaemonStartOptions.md)

##### broadcast

(`m`) => `void`

#### Returns

`Promise`\<[`ICommandResult`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)\>\>

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`startUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#startuserdaemon)

***

### stop()

> **stop**(): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/daemon/index.ts:143](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L143)

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`stop`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#stop)

#### Overrides

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`stop`](../../kernel/mods/stack/process/instance/classes/Process.md#stop)

***

### stopUserContexts()

> **stopUserContexts**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/index.ts:170](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L170)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`stopUserContexts`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#stopusercontexts)

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L103)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`unlockFile`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#unlockfile)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../kernel/mods/stack/process/instance/classes/Process.md#unlockfile)

***

### updateGlobalDispatch()

> **updateGlobalDispatch**(): `void`

Defined in: [src/ts/daemon/index.ts:227](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L227)

#### Returns

`void`

#### Implementation of

[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md).[`updateGlobalDispatch`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md#updateglobaldispatch)

***

### Hello()

> `static` **Hello**(`token`, `username`, `userInfo?`, `parentPid?`): `Promise`\<[`ICommandResult`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)\>\>

Defined in: [src/ts/daemon/index.ts:235](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/index.ts#L235)

#### Parameters

##### token

`string`

##### username

`string`

##### userInfo?

[`UserInfo`](../../../types/user/interfaces/UserInfo.md)

##### parentPid?

`number` = `1`

#### Returns

`Promise`\<[`ICommandResult`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)\>\>
