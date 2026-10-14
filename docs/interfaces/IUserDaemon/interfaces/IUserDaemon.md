[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/IUserDaemon](../README.md) / IUserDaemon

# Interface: IUserDaemon

Defined in: [src/interfaces/IUserDaemon.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L36)

## Extends

- [`IProcess`](../../IProcess/interfaces/IProcess.md)

## Properties

### \_blockLeaveInvocations

> **\_blockLeaveInvocations**: `boolean`

Defined in: [src/interfaces/IUserDaemon.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L43)

***

### \_criticalProcess

> **\_criticalProcess**: `boolean`

Defined in: [src/interfaces/IUserDaemon.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L45)

#### Overrides

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`_criticalProcess`](../../IProcess/interfaces/IProcess.md#_criticalprocess)

***

### \_toLoginInvoked

> **\_toLoginInvoked**: `boolean`

Defined in: [src/interfaces/IUserDaemon.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L44)

***

### account?

> `optional` **account?**: [`IAccountUserContext`](../../contexts/IAccountUserContext/interfaces/IAccountUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L54)

***

### activity?

> `optional` **activity?**: [`ILoginActivityUserContext`](../../contexts/ILoginActivityUserContext/interfaces/ILoginActivityUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L55)

***

### appreg?

> `optional` **appreg?**: [`IAppRegistrationUserContext`](../../contexts/IAppRegistrationUserContext/interfaces/IAppRegistrationUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L57)

***

### apps?

> `optional` **apps?**: [`IApplicationsUserContext`](../../contexts/IApplicationsUserContext/interfaces/IApplicationsUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L56)

***

### autoLoadComplete

> **autoLoadComplete**: `boolean`

Defined in: [src/interfaces/IUserDaemon.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L40)

***

### checks?

> `optional` **checks?**: [`IChecksUserContext`](../../contexts/IChecksUserContext/interfaces/IChecksUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L59)

***

### copyList

> **copyList**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`[]\>

Defined in: [src/interfaces/IUserDaemon.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L47)

***

### cutList

> **cutList**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`[]\>

Defined in: [src/interfaces/IUserDaemon.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L48)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/interfaces/IProcess.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L6)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`dispatch`](../../IProcess/interfaces/IProcess.md#dispatch)

***

### elevation?

> `optional` **elevation?**: [`IElevationUserContext`](../../contexts/IElevationUserContext/interfaces/IElevationUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L60)

***

### files?

> `optional` **files?**: [`IFilesystemUserContext`](../../contexts/IFilesystemUserContext/interfaces/IFilesystemUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L61)

***

### helpers?

> `optional` **helpers?**: [`IHelpersUserContext`](../../contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L62)

***

### icons?

> `optional` **icons?**: [`IIconsUserContext`](../../contexts/IIconsUserContext/interfaces/IIconsUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L63)

***

### init?

> `optional` **init?**: [`IInitUserContext`](../../contexts/IInitUserContext/interfaces/IInitUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:64](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L64)

***

### InitComplete

> **InitComplete**: [`BooleanStore`](../../../types/shared/writable/type-aliases/BooleanStore.md)

Defined in: [src/interfaces/IUserDaemon.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L46)

***

### initialized

> **initialized**: `boolean`

Defined in: [src/interfaces/IUserDaemon.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L42)

***

### name

> **name**: `string`

Defined in: [src/interfaces/IProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L9)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`name`](../../IProcess/interfaces/IProcess.md#name)

***

### notifications?

> `optional` **notifications?**: [`INotificationsUserContext`](../../contexts/INotificationsUserContext/interfaces/INotificationsUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:65](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L65)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/interfaces/IProcess.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L8)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`parentPid`](../../IProcess/interfaces/IProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/interfaces/IProcess.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L7)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`pid`](../../IProcess/interfaces/IProcess.md#pid)

***

### power?

> `optional` **power?**: [`IPowerUserContext`](../../contexts/IPowerUserContext/interfaces/IPowerUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:66](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L66)

***

### preferencesCtx?

> `optional` **preferencesCtx?**: [`IPreferencesUserContext`](../../contexts/IPreferencesUserContext/interfaces/IPreferencesUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L67)

***

### renderer?

> `optional` **renderer?**: [`IAppRendererUserContext`](../../contexts/IAppRendererUserContext/interfaces/IAppRendererUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L58)

***

### safeMode

> **safeMode**: `boolean`

Defined in: [src/interfaces/IUserDaemon.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L41)

***

### serviceHost?

> `optional` **serviceHost?**: [`IServiceHost`](../../IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/interfaces/IUserDaemon.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L52)

***

### shortcuts?

> `optional` **shortcuts?**: [`IShortcutsUserContext`](../../contexts/IShortcutsUserContext/interfaces/IShortcutsUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:73](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L73)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [src/interfaces/IProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L12)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`sourceUrl`](../../IProcess/interfaces/IProcess.md#sourceurl)

***

### spawn?

> `optional` **spawn?**: [`ISpawnUserContext`](../../contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:68](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L68)

***

### STATE

> **STATE**: [`ProcessState`](../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/interfaces/IProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L13)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`STATE`](../../IProcess/interfaces/IProcess.md#state)

***

### themes?

> `optional` **themes?**: [`IThemesUserContext`](../../contexts/IThemesUserContext/interfaces/IThemesUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:69](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L69)

***

### token

> **token**: `string`

Defined in: [src/interfaces/IUserDaemon.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L38)

***

### userInfo

> **userInfo**: [`UserInfo`](../../../types/user/interfaces/UserInfo.md)

Defined in: [src/interfaces/IUserDaemon.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L39)

***

### username

> **username**: `string`

Defined in: [src/interfaces/IUserDaemon.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L37)

***

### version?

> `optional` **version?**: [`IVersionUserContext`](../../contexts/IVersionUserContext/interfaces/IVersionUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:70](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L70)

***

### wallpaper?

> `optional` **wallpaper?**: [`IWallpaperUserContext`](../../contexts/IWallpaperUserContext/interfaces/IWallpaperUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L71)

***

### workspaces?

> `optional` **workspaces?**: [`IWorkspaceUserContext`](../../contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md)

Defined in: [src/interfaces/IUserDaemon.ts:72](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L72)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/interfaces/IProcess.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L10)

##### Returns

`boolean`

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`_disposed`](../../IProcess/interfaces/IProcess.md#_disposed)

***

### assoc

#### Get Signature

> **get** **assoc**(): [`IFileAssocService`](../../services/IFileAssocService/interfaces/IFileAssocService.md) \| `undefined`

Defined in: [src/interfaces/IUserDaemon.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L51)

##### Returns

[`IFileAssocService`](../../services/IFileAssocService/interfaces/IFileAssocService.md) \| `undefined`

***

### betaClient

#### Get Signature

> **get** **betaClient**(): `AxiosInstance`

Defined in: [src/interfaces/IUserDaemon.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L49)

##### Returns

`AxiosInstance`

***

### canPaste

#### Get Signature

> **get** **canPaste**(): `boolean`

Defined in: [src/interfaces/IUserDaemon.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L75)

##### Returns

`boolean`

***

### globalDispatch

#### Get Signature

> **get** **globalDispatch**(): [`IGlobalDispatch`](../../services/IGlobalDispatch/interfaces/IGlobalDispatch.md) \| `undefined`

Defined in: [src/interfaces/IUserDaemon.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L50)

##### Returns

[`IGlobalDispatch`](../../services/IGlobalDispatch/interfaces/IGlobalDispatch.md) \| `undefined`

***

### libraries

#### Get Signature

> **get** **libraries**(): [`ILibraryManagement`](../../services/ILibraryManagement/interfaces/ILibraryManagement.md) \| `undefined`

Defined in: [src/interfaces/IUserDaemon.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L53)

##### Returns

[`ILibraryManagement`](../../services/ILibraryManagement/interfaces/ILibraryManagement.md) \| `undefined`

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/interfaces/IProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L14)

##### Returns

`number`

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`MEMORY`](../../IProcess/interfaces/IProcess.md#memory)

***

### preferences

#### Get Signature

> **get** **preferences**(): [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/interfaces/IUserDaemon.ts:74](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L74)

##### Returns

[`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../types/user/interfaces/UserPreferences.md)\>

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L15)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`__start`](../../IProcess/interfaces/IProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L16)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`__stop`](../../IProcess/interfaces/IProcess.md#__stop)

***

### appStorage()

> **appStorage**(): [`IApplicationStorage`](../../services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

Defined in: [src/interfaces/IUserDaemon.ts:80](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L80)

#### Returns

[`IApplicationStorage`](../../services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

***

### GetConnector()

> **GetConnector**\<`T`\>(`name`): `T`

Defined in: [src/interfaces/IUserDaemon.ts:83](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L83)

#### Type Parameters

##### T

`T` *extends* [`IServerConnector`](../../modules/IServerManager/classes/IServerConnector.md)

#### Parameters

##### name

`string`

#### Returns

`T`

***

### getShell()

> **getShell**(): [`IShellRuntime`](../../runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/interfaces/IUserDaemon.ts:81](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L81)

#### Returns

[`IShellRuntime`](../../runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`killSelf`](../../IProcess/interfaces/IProcess.md#killself)

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/IProcess.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L18)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`requestFileLock`](../../IProcess/interfaces/IProcess.md#requestfilelock)

***

### setSource()

> **setSource**(`source`): `void`

Defined in: [src/interfaces/IProcess.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L20)

#### Parameters

##### source

`string`

#### Returns

`void`

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`setSource`](../../IProcess/interfaces/IProcess.md#setsource)

***

### start()

> **start**(): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/IUserDaemon.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L76)

#### Returns

`Promise`\<`false` \| `undefined`\>

***

### startUserContexts()

> **startUserContexts**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:78](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L78)

#### Returns

`Promise`\<`void`\>

***

### startUserDaemon()

> **startUserDaemon**(`startOptions`, `broadcast`): `Promise`\<[`ICommandResult`](../../ICommandResult/interfaces/ICommandResult.md)\<`IUserDaemon`\>\>

Defined in: [src/interfaces/IUserDaemon.ts:84](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L84)

#### Parameters

##### startOptions

[`UserDaemonStartOptions`](../../../types/daemon/interfaces/UserDaemonStartOptions.md)

##### broadcast

(`m`) => `void`

#### Returns

`Promise`\<[`ICommandResult`](../../ICommandResult/interfaces/ICommandResult.md)\<`IUserDaemon`\>\>

***

### stop()

> **stop**(): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/IUserDaemon.ts:77](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L77)

#### Returns

`Promise`\<`false` \| `undefined`\>

***

### stopUserContexts()

> **stopUserContexts**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L79)

#### Returns

`Promise`\<`void`\>

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/IProcess.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L19)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`unlockFile`](../../IProcess/interfaces/IProcess.md#unlockfile)

***

### updateGlobalDispatch()

> **updateGlobalDispatch**(): `void`

Defined in: [src/interfaces/IUserDaemon.ts:82](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L82)

#### Returns

`void`
