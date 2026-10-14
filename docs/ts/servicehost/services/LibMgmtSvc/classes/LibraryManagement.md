[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/servicehost/services/LibMgmtSvc](../README.md) / LibraryManagement

# Class: LibraryManagement

Defined in: [src/ts/servicehost/services/LibMgmtSvc/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/LibMgmtSvc/index.ts#L12)

## Extends

- [`BaseService`](../../../base/classes/BaseService.md)

## Implements

- [`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md)

## Constructors

### Constructor

> **new LibraryManagement**(`pid`, `parentPid`, `name`, `host`, `initBroadcast?`): `LibraryManagement`

Defined in: [src/ts/servicehost/services/LibMgmtSvc/index.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/LibMgmtSvc/index.ts#L17)

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

`LibraryManagement`

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`constructor`](../../../base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`_criticalProcess`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#_criticalprocess)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_criticalProcess`](../../../base/classes/BaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`activated`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#activated)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`activated`](../../../base/classes/BaseService.md#activated)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`dispatch`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#dispatch)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`dispatch`](../../../base/classes/BaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`host`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#host)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`host`](../../../base/classes/BaseService.md#host)

***

### Index

> **Index**: `Map`\<`string`, [`TpaLibrary`](../../../../../types/tpa/libraries/interfaces/TpaLibrary.md)\>

Defined in: [src/ts/servicehost/services/LibMgmtSvc/index.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/LibMgmtSvc/index.ts#L13)

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`Index`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#index)

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

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`name`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#name)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`name`](../../../base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`parentPid`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#parentpid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`parentPid`](../../../base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`pid`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#pid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`pid`](../../../base/classes/BaseService.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`sourceUrl`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#sourceurl)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`sourceUrl`](../../../base/classes/BaseService.md#sourceurl)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`_disposed`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#_disposed)

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

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`MEMORY`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#memory)

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

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`STATE`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#state)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`STATE`](../../../base/classes/BaseService.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`__start`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#__start)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__start`](../../../base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`__stop`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#__stop)

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

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`deactivate`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#deactivate)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`deactivate`](../../../base/classes/BaseService.md#deactivate)

***

### deleteLibrary()

> **deleteLibrary**(`id`, `onStage?`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/LibMgmtSvc/index.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/LibMgmtSvc/index.ts#L58)

#### Parameters

##### id

`string`

##### onStage?

(`stage`) => `void`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`deleteLibrary`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#deletelibrary)

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

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`GetConnector`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#getconnector)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`GetConnector`](../../../base/classes/BaseService.md#getconnector)

***

### getLibrary()

> **getLibrary**\<`T`\>(`id`): `Promise`\<`T`\>

Defined in: [src/ts/servicehost/services/LibMgmtSvc/index.ts:78](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/LibMgmtSvc/index.ts#L78)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`T`\>

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`getLibrary`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#getlibrary)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`killSelf`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#killself)

#### Inherited from

`BaseService.killSelf`

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

### populateIndex()

> **populateIndex**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/LibMgmtSvc/index.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/LibMgmtSvc/index.ts#L31)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`populateIndex`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#populateindex)

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

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`requestFileLock`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#requestfilelock)

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

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`setSource`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#setsource)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`setSource`](../../../base/classes/BaseService.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/LibMgmtSvc/index.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/LibMgmtSvc/index.ts#L23)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`start`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#start)

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

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L103)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`ILibraryManagement`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md).[`unlockFile`](../../../../../interfaces/services/ILibraryManagement/interfaces/ILibraryManagement.md#unlockfile)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`unlockFile`](../../../base/classes/BaseService.md#unlockfile)
