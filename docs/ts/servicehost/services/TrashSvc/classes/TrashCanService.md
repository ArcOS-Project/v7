[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/servicehost/services/TrashSvc](../README.md) / TrashCanService

# Class: TrashCanService

Defined in: [src/ts/servicehost/services/TrashSvc/index.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrashSvc/index.ts#L13)

## Extends

- [`BaseService`](../../../base/classes/BaseService.md)

## Implements

- [`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md)

## Constructors

### Constructor

> **new TrashCanService**(`pid`, `parentPid`, `name`, `host`, `initBroadcast?`): `TrashCanService`

Defined in: [src/ts/servicehost/services/TrashSvc/index.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrashSvc/index.ts#L25)

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

`TrashCanService`

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`constructor`](../../../base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`_criticalProcess`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#_criticalprocess)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_criticalProcess`](../../../base/classes/BaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`activated`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#activated)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`activated`](../../../base/classes/BaseService.md#activated)

***

### Configuration

> **Configuration**: [`IConfigurator`](../../../../../interfaces/IConfigurator/interfaces/IConfigurator.md)\<`Record`\<`string`, [`TrashIndexNode`](../../../../../types/services/trash/interfaces/TrashIndexNode.md)\>\>

Defined in: [src/ts/servicehost/services/TrashSvc/index.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrashSvc/index.ts#L16)

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`Configuration`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#configuration)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`dispatch`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#dispatch)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`dispatch`](../../../base/classes/BaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`host`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#host)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`host`](../../../base/classes/BaseService.md#host)

***

### INDEX\_PATH

> **INDEX\_PATH**: `string`

Defined in: [src/ts/servicehost/services/TrashSvc/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrashSvc/index.ts#L14)

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`INDEX_PATH`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#index_path)

***

### IndexBuffer

> **IndexBuffer**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`Record`\<`string`, [`TrashIndexNode`](../../../../../types/services/trash/interfaces/TrashIndexNode.md)\>\>

Defined in: [src/ts/servicehost/services/TrashSvc/index.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrashSvc/index.ts#L15)

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`IndexBuffer`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#indexbuffer)

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

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`name`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#name)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`name`](../../../base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`parentPid`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#parentpid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`parentPid`](../../../base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`pid`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#pid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`pid`](../../../base/classes/BaseService.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`sourceUrl`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#sourceurl)

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

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`_disposed`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#_disposed)

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

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`MEMORY`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#memory)

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

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`STATE`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#state)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`STATE`](../../../base/classes/BaseService.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`__start`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#__start)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__start`](../../../base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`__stop`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#__stop)

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

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`deactivate`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#deactivate)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`deactivate`](../../../base/classes/BaseService.md#deactivate)

***

### emptyBin()

> **emptyBin**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/TrashSvc/index.ts:118](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrashSvc/index.ts#L118)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`emptyBin`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#emptybin)

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

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`GetConnector`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#getconnector)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`GetConnector`](../../../base/classes/BaseService.md#getconnector)

***

### getIndex()

> **getIndex**(): `Record`\<`string`, [`TrashIndexNode`](../../../../../types/services/trash/interfaces/TrashIndexNode.md)\>

Defined in: [src/ts/servicehost/services/TrashSvc/index.ts:99](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrashSvc/index.ts#L99)

#### Returns

`Record`\<`string`, [`TrashIndexNode`](../../../../../types/services/trash/interfaces/TrashIndexNode.md)\>

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`getIndex`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#getindex)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`killSelf`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#killself)

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

### moveToTrash()

> **moveToTrash**(`path`, `dispatch?`): `Promise`\<[`TrashIndexNode`](../../../../../types/services/trash/interfaces/TrashIndexNode.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/TrashSvc/index.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrashSvc/index.ts#L38)

#### Parameters

##### path

`string`

##### dispatch?

`boolean` = `false`

#### Returns

`Promise`\<[`TrashIndexNode`](../../../../../types/services/trash/interfaces/TrashIndexNode.md) \| `undefined`\>

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`moveToTrash`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#movetotrash)

***

### permanentlyDelete()

> **permanentlyDelete**(`uuid`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/TrashSvc/index.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrashSvc/index.ts#L103)

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`permanentlyDelete`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#permanentlydelete)

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

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`requestFileLock`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#requestfilelock)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`requestFileLock`](../../../base/classes/BaseService.md#requestfilelock)

***

### restoreTrashItem()

> **restoreTrashItem**(`uuid`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/TrashSvc/index.ts:80](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrashSvc/index.ts#L80)

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`restoreTrashItem`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#restoretrashitem)

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

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`setSource`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#setsource)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`setSource`](../../../base/classes/BaseService.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/TrashSvc/index.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrashSvc/index.ts#L31)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`start`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#start)

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

[`ITrashCanService`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md).[`unlockFile`](../../../../../interfaces/services/ITrashCanService/interfaces/ITrashCanService.md#unlockfile)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`unlockFile`](../../../base/classes/BaseService.md#unlockfile)
