[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/servicehost/services/GlobalDispatch](../README.md) / GlobalDispatch

# Class: GlobalDispatch

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L16)

## Extends

- [`BaseService`](../../../base/classes/BaseService.md)

## Implements

- [`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md)

## Constructors

### Constructor

> **new GlobalDispatch**(`pid`, `parentPid`, `name`, `host`): `GlobalDispatch`

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L25)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### name

`string`

##### host

[`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

#### Returns

`GlobalDispatch`

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`constructor`](../../../base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`_criticalProcess`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#_criticalprocess)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_criticalProcess`](../../../base/classes/BaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`activated`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#activated)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`activated`](../../../base/classes/BaseService.md#activated)

***

### authorized

> **authorized**: `boolean` = `false`

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L20)

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`authorized`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#authorized)

***

### client

> **client**: `Socket`\<`DefaultEventsMap`, `DefaultEventsMap`\> \| `undefined`

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L18)

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`client`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#client)

***

### ConnectionState

> **ConnectionState**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`GlobalDispatchState`](../../../../../types/system/dispatch/type-aliases/GlobalDispatchState.md)\>

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L21)

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`ConnectionState`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#connectionstate)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`dispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#dispatch)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`dispatch`](../../../base/classes/BaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`host`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#host)

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

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`name`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#name)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`name`](../../../base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`parentPid`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#parentpid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`parentPid`](../../../base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`pid`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#pid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`pid`](../../../base/classes/BaseService.md#pid)

***

### server

> **server**: [`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md)

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L19)

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`server`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#server)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`sourceUrl`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#sourceurl)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`sourceUrl`](../../../base/classes/BaseService.md#sourceurl)

***

### stackUnsubscribe?

> `optional` **stackUnsubscribe?**: [`Unsubscriber`](../../../../../types/shared/writable/type-aliases/Unsubscriber.md)

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L17)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`_disposed`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#_disposed)

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

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`MEMORY`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#memory)

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

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`STATE`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#state)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`STATE`](../../../base/classes/BaseService.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`__start`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#__start)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__start`](../../../base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`__stop`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#__stop)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__stop`](../../../base/classes/BaseService.md#__stop)

***

### connected()

> **connected**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:69](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L69)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`connected`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#connected)

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

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`deactivate`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#deactivate)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`deactivate`](../../../base/classes/BaseService.md#deactivate)

***

### disconnectClient()

> **disconnectClient**(`clientId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:115](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L115)

#### Parameters

##### clientId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`disconnectClient`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#disconnectclient)

***

### emit()

> **emit**(`event`, ...`data`): `void`

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:105](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L105)

#### Parameters

##### event

`string`

##### data

...`any`[]

#### Returns

`void`

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`emit`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#emit)

***

### enableListener()

> **enableListener**(): `void`

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:119](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L119)

#### Returns

`void`

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`enableListener`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#enablelistener)

***

### getClients()

> **getClients**(): `Promise`\<[`GlobalDispatchClient`](../../../../../types/system/dispatch/interfaces/GlobalDispatchClient.md)[]\>

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:110](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L110)

#### Returns

`Promise`\<[`GlobalDispatchClient`](../../../../../types/system/dispatch/interfaces/GlobalDispatchClient.md)[]\>

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`getClients`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#getclients)

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

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`GetConnector`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#getconnector)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`GetConnector`](../../../base/classes/BaseService.md#getconnector)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`killSelf`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#killself)

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

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L91)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`requestFileLock`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#requestfilelock)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`requestFileLock`](../../../base/classes/BaseService.md#requestfilelock)

***

### sendUpdate()

> **sendUpdate**(): `void`

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:92](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L92)

#### Returns

`void`

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`sendUpdate`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#sendupdate)

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

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`setSource`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#setsource)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`setSource`](../../../base/classes/BaseService.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`start`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#start)

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`start`](../../../base/classes/BaseService.md#start)

***

### stop()

> **stop**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L57)

#### Parameters

##### broadcast?

(`m`) => `void`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`stop`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#stop)

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`stop`](../../../base/classes/BaseService.md#stop)

***

### subscribe()

> **subscribe**\<`T`\>(`event`, `callback`): `void`

Defined in: [src/ts/servicehost/services/GlobalDispatch/index.ts:100](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/GlobalDispatch/index.ts#L100)

#### Type Parameters

##### T

`T` *extends* `any`[] = `any`[]

#### Parameters

##### event

`string`

##### callback

(...`data`) => `void`

#### Returns

`void`

#### Implementation of

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`subscribe`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#subscribe)

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

[`IGlobalDispatch`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md).[`unlockFile`](../../../../../interfaces/services/IGlobalDispatch/interfaces/IGlobalDispatch.md#unlockfile)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`unlockFile`](../../../base/classes/BaseService.md#unlockfile)
