[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/servicehost/base](../README.md) / BaseService

# Class: BaseService

Defined in: [src/ts/servicehost/base.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L7)

## Extends

- [`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md)

## Extended by

- [`AdminBootstrapper`](../../services/AdminBootstrapper/classes/AdminBootstrapper.md)
- [`ApplicationStorage`](../../services/AppStorage/classes/ApplicationStorage.md)
- [`ArcFindService`](../../services/ArcFindSvc/classes/ArcFindService.md)
- [`BugHuntUserSpaceProcess`](../../services/BugHuntUsp/classes/BugHuntUserSpaceProcess.md)
- [`DevelopmentEnvironment`](../../services/DevEnvironment/classes/DevelopmentEnvironment.md)
- [`DistributionServiceProcess`](../../services/DistribSvc/classes/DistributionServiceProcess.md)
- [`FileAssocService`](../../services/FileAssocSvc/classes/FileAssocService.md)
- [`GlobalDispatch`](../../services/GlobalDispatch/classes/GlobalDispatch.md)
- [`IconService`](../../services/IconService/classes/IconService.md)
- [`LibraryManagement`](../../services/LibMgmtSvc/classes/LibraryManagement.md)
- [`MessagingInterface`](../../services/MessagingService/classes/MessagingInterface.md)
- [`MigrationService`](../../services/MigrationSvc/classes/MigrationService.md)
- [`ProtocolServiceProcess`](../../services/ProtoService/classes/ProtocolServiceProcess.md)
- [`RecentFilesService`](../../services/RecentFilesSvc/classes/RecentFilesService.md)
- [`ShareManager`](../../services/ShareMgmt/classes/ShareManager.md)
- [`SystemShortcutsService`](../../services/SystemShortcutsSvc/classes/SystemShortcutsService.md)
- [`TrashCanService`](../../services/TrashSvc/classes/TrashCanService.md)
- [`TrayHostService`](../../services/TrayHostSvc/classes/TrayHostService.md)

## Implements

- [`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md)

## Constructors

### Constructor

> **new BaseService**(`pid`, `parentPid`, `name`, `host`, `initBroadcast?`): `BaseService`

Defined in: [src/ts/servicehost/base.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L22)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### name

`string`

##### host

[`IServiceHost`](../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

##### initBroadcast?

(`msg`) => `void`

#### Returns

`BaseService`

#### Overrides

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`constructor`](../../../kernel/mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`_criticalProcess`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#_criticalprocess)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../../kernel/mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`activated`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#activated)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`dispatch`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#dispatch)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`dispatch`](../../../kernel/mods/stack/process/instance/classes/Process.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`host`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#host)

***

### initBroadcast?

> `optional` **initBroadcast?**: (`msg`) => `void`

Defined in: [src/ts/servicehost/base.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L10)

#### Parameters

##### msg

`string`

#### Returns

`void`

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`name`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#name)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`name`](../../../kernel/mods/stack/process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`parentPid`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#parentpid)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`parentPid`](../../../kernel/mods/stack/process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`pid`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#pid)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`pid`](../../../kernel/mods/stack/process/instance/classes/Process.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`sourceUrl`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#sourceurl)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`sourceUrl`](../../../kernel/mods/stack/process/instance/classes/Process.md#sourceurl)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`_disposed`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#_disposed)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`_disposed`](../../../kernel/mods/stack/process/instance/classes/Process.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`MEMORY`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#memory)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`MEMORY`](../../../kernel/mods/stack/process/instance/classes/Process.md#memory)

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/servicehost/base.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L12)

##### Returns

[`IShellRuntime`](../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

***

### STATE

#### Get Signature

> **get** **STATE**(): [`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L17)

##### Returns

[`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

#### Set Signature

> **set** **STATE**(`value`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L21)

##### Parameters

###### value

[`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

##### Returns

`void`

#### Implementation of

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`STATE`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#state)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`STATE`](../../../kernel/mods/stack/process/instance/classes/Process.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`__start`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#__start)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`__start`](../../../kernel/mods/stack/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`__stop`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#__stop)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`__stop`](../../../kernel/mods/stack/process/instance/classes/Process.md#__stop)

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

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`deactivate`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#deactivate)

***

### GetConnector()

> **GetConnector**\<`T`\>(`name`): `T`

Defined in: [src/ts/servicehost/base.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L16)

#### Type Parameters

##### T

`T` *extends* [`IServerConnector`](../../../../interfaces/modules/IServerManager/classes/IServerConnector.md)

#### Parameters

##### name

`string`

#### Returns

`T`

#### Implementation of

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`GetConnector`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#getconnector)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`killSelf`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#killself)

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

[`LogLevel`](../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`Log`](../../../kernel/mods/stack/process/instance/classes/Process.md#log)

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

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`requestFileLock`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#requestfilelock)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`requestFileLock`](../../../kernel/mods/stack/process/instance/classes/Process.md#requestfilelock)

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

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`setSource`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#setsource)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`setSource`](../../../kernel/mods/stack/process/instance/classes/Process.md#setsource)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L49)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`start`](../../../kernel/mods/stack/process/instance/classes/Process.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`stop`](../../../kernel/mods/stack/process/instance/classes/Process.md#stop)

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

[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md).[`unlockFile`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md#unlockfile)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../../kernel/mods/stack/process/instance/classes/Process.md#unlockfile)
