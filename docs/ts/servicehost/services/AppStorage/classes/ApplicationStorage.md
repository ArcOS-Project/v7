[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/servicehost/services/AppStorage](../README.md) / ApplicationStorage

# Class: ApplicationStorage

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L23)

## Extends

- [`BaseService`](../../../base/classes/BaseService.md)

## Implements

- [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

## Constructors

### Constructor

> **new ApplicationStorage**(`pid`, `parentPid`, `name`, `host`, `initBroadcast?`): `ApplicationStorage`

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L32)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### name

`string`

##### host

[`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

##### initBroadcast?

(`msg`) => `void`

#### Returns

`ApplicationStorage`

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`constructor`](../../../base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`_criticalProcess`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#_criticalprocess)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_criticalProcess`](../../../base/classes/BaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`activated`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#activated)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`activated`](../../../base/classes/BaseService.md#activated)

***

### appIconCache

> **appIconCache**: `Record`\<`string`, `string`\> = `{}`

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L27)

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`appIconCache`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#appiconcache)

***

### buffer

> **buffer**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`AppStorage`](../../../../../types/apps/app/type-aliases/AppStorage.md)\>

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L26)

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`buffer`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#buffer)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`dispatch`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#dispatch)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`dispatch`](../../../base/classes/BaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`host`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#host)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`host`](../../../base/classes/BaseService.md#host)

***

### initBroadcast?

> `optional` **initBroadcast?**: (`msg`) => `void`

Defined in: [src/ts/servicehost/base.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L10)

#### Parameters

##### msg

`string`

#### Returns

`void`

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`initBroadcast`](../../../base/classes/BaseService.md#initbroadcast)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`name`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#name)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`name`](../../../base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`parentPid`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#parentpid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`parentPid`](../../../base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`pid`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#pid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`pid`](../../../base/classes/BaseService.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`sourceUrl`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#sourceurl)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`sourceUrl`](../../../base/classes/BaseService.md#sourceurl)

***

### tpaModuleCache

> **tpaModuleCache**: `Record`\<`string`, [`Constructs`](../../../../../interfaces/common/interfaces/Constructs.md)\<[`IThirdPartyAppProcess`](../../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md)\>\> = `{}`

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L28)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`_disposed`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#_disposed)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_disposed`](../../../base/classes/BaseService.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`MEMORY`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#memory)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`MEMORY`](../../../base/classes/BaseService.md#memory)

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/servicehost/base.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L12)

##### Returns

[`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`shell`](../../../base/classes/BaseService.md#shell)

***

### STATE

#### Get Signature

> **get** **STATE**(): [`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L17)

##### Returns

[`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

#### Set Signature

> **set** **STATE**(`value`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L21)

##### Parameters

###### value

[`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

##### Returns

`void`

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`STATE`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#state)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`STATE`](../../../base/classes/BaseService.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`__start`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#__start)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__start`](../../../base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`__stop`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#__stop)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__stop`](../../../base/classes/BaseService.md#__stop)

***

### deactivate()

> **deactivate**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/base.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L30)

#### Parameters

##### broadcast?

(`m`) => `void`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`deactivate`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#deactivate)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`deactivate`](../../../base/classes/BaseService.md#deactivate)

***

### error\_appLoadError()

> **error\_appLoadError**(`result`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L58)

#### Parameters

##### result

[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`App`](../../../../../types/apps/app/interfaces/App.md)\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`error_appLoadError`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#error_apploaderror)

***

### get()

> **get**(): `Promise`\<[`AppStorage`](../../../../../types/apps/app/type-aliases/AppStorage.md)\>

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:231](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L231)

#### Returns

`Promise`\<[`AppStorage`](../../../../../types/apps/app/type-aliases/AppStorage.md)\>

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`get`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#get)

***

### ~~getAppById()~~

> **getAppById**(`id`, `fromBuffer?`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`App`](../../../../../types/apps/app/interfaces/App.md)\>\>

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:259](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L259)

#### Parameters

##### id

`string`

##### fromBuffer?

`boolean` = `false`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`App`](../../../../../types/apps/app/interfaces/App.md)\>\>

#### Deprecated

This method is ancient and should not be used. Use `ApplicationStorage.getAppSynchronous` instead.

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`getAppById`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#getappbyid)

***

### getAppSynchronous()

> **getAppSynchronous**(`id`): [`InstalledApp`](../../../../../types/apps/app/interfaces/InstalledApp.md) \| `undefined`

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:252](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L252)

#### Parameters

##### id

`string`

#### Returns

[`InstalledApp`](../../../../../types/apps/app/interfaces/InstalledApp.md) \| `undefined`

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`getAppSynchronous`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#getappsynchronous)

***

### GetConnector()

> **GetConnector**\<`T`\>(`name`): `T`

Defined in: [src/ts/servicehost/base.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L16)

#### Type Parameters

##### T

`T` *extends* [`IServerConnector`](../../../../../interfaces/modules/IServerManager/classes/IServerConnector.md)

#### Parameters

##### name

`string`

#### Returns

`T`

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`GetConnector`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#getconnector)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`GetConnector`](../../../base/classes/BaseService.md#getconnector)

***

### injected()

> **injected**(): `object`[]

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:193](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L193)

#### Returns

`object`[]

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`injected`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#injected)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`killSelf`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#killself)

#### Inherited from

`BaseService.killSelf`

***

### loadApp()

> **loadApp**(`app`): `false` \| [`InstalledApp`](../../../../../types/apps/app/interfaces/InstalledApp.md)

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:99](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L99)

#### Parameters

##### app

[`InstalledApp`](../../../../../types/apps/app/interfaces/InstalledApp.md)

#### Returns

`false` \| [`InstalledApp`](../../../../../types/apps/app/interfaces/InstalledApp.md)

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`loadApp`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#loadapp)

***

### loadAppFromViteModule()

> **loadAppFromViteModule**(`fn`, `path?`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`App`](../../../../../types/apps/app/interfaces/App.md)\>\>

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:134](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L134)

#### Parameters

##### fn

() => `Promise`\<`unknown`\>

##### path?

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`App`](../../../../../types/apps/app/interfaces/App.md)\>\>

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`loadAppFromViteModule`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#loadappfromvitemodule)

***

### loadAppModuleFile()

> **loadAppModuleFile**(`path`, `noVerify?`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`App`](../../../../../types/apps/app/interfaces/App.md)\>\>

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:174](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L174)

#### Parameters

##### path

`string`

##### noVerify?

`boolean`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`App`](../../../../../types/apps/app/interfaces/App.md)\>\>

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`loadAppModuleFile`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#loadappmodulefile)

***

### loadAppsFromViteModules()

> **loadAppsFromViteModules**(`modules`): `Promise`\<[`AppStorage`](../../../../../types/apps/app/type-aliases/AppStorage.md)\>

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:111](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L111)

#### Parameters

##### modules

`Record`\<`string`, () => `Promise`\<`unknown`\>\>

#### Returns

`Promise`\<[`AppStorage`](../../../../../types/apps/app/type-aliases/AppStorage.md)\>

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`loadAppsFromViteModules`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#loadappsfromvitemodules)

***

### loadOrigin()

> **loadOrigin**(`id`, `store`): `boolean`

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:74](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L74)

#### Parameters

##### id

`string`

##### store

[`AppStoreCb`](../../../../../types/apps/app/type-aliases/AppStoreCb.md)

#### Returns

`boolean`

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`loadOrigin`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#loadorigin)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L85)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`Log`](../../../base/classes/BaseService.md#log)

***

### refresh()

> **refresh**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:199](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L199)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`refresh`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#refresh)

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

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`requestFileLock`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#requestfilelock)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`requestFileLock`](../../../base/classes/BaseService.md#requestfilelock)

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

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`setSource`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#setsource)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`setSource`](../../../base/classes/BaseService.md#setsource)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L44)

#### Returns

`Promise`\<`any`\>

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`start`](../../../base/classes/BaseService.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`stop`](../../../base/classes/BaseService.md#stop)

***

### unloadOrigin()

> **unloadOrigin**(`id`): `boolean`

Defined in: [src/ts/servicehost/services/AppStorage/index.ts:86](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AppStorage/index.ts#L86)

#### Parameters

##### id

`string`

#### Returns

`boolean`

#### Implementation of

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`unloadOrigin`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#unloadorigin)

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

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md).[`unlockFile`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md#unlockfile)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`unlockFile`](../../../base/classes/BaseService.md#unlockfile)
