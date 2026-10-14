[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/servicehost/services/ProtoService](../README.md) / ProtocolServiceProcess

# Class: ProtocolServiceProcess

Defined in: [src/ts/servicehost/services/ProtoService/index.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ProtoService/index.ts#L11)

## Extends

- [`BaseService`](../../../base/classes/BaseService.md)

## Implements

- [`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md)

## Constructors

### Constructor

> **new ProtocolServiceProcess**(`pid`, `parentPid`, `name`, `host`, `initBroadcast?`): `ProtocolServiceProcess`

Defined in: [src/ts/servicehost/services/ProtoService/index.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ProtoService/index.ts#L20)

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

`ProtocolServiceProcess`

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`constructor`](../../../base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`_criticalProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#_criticalprocess)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_criticalProcess`](../../../base/classes/BaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`activated`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#activated)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`activated`](../../../base/classes/BaseService.md#activated)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`dispatch`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#dispatch)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`dispatch`](../../../base/classes/BaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`host`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#host)

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

### lockObserver

> **lockObserver**: `boolean` = `false`

Defined in: [src/ts/servicehost/services/ProtoService/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ProtoService/index.ts#L12)

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`lockObserver`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#lockobserver)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`name`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#name)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`name`](../../../base/classes/BaseService.md#name)

***

### observer?

> `optional` **observer?**: `MutationObserver`

Defined in: [src/ts/servicehost/services/ProtoService/index.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ProtoService/index.ts#L13)

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`observer`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#observer)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`parentPid`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#parentpid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`parentPid`](../../../base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`pid`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#pid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`pid`](../../../base/classes/BaseService.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`sourceUrl`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#sourceurl)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`sourceUrl`](../../../base/classes/BaseService.md#sourceurl)

***

### store

> **store**: `Record`\<`string`, [`ProtocolHandler`](../../../../../types/services/proto/interfaces/ProtocolHandler.md)\>

Defined in: [src/ts/servicehost/services/ProtoService/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ProtoService/index.ts#L14)

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`store`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#store)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`_disposed`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#_disposed)

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

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`MEMORY`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#memory)

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

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`STATE`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#state)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`STATE`](../../../base/classes/BaseService.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`__start`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#__start)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__start`](../../../base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`__stop`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#__stop)

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

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`deactivate`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#deactivate)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`deactivate`](../../../base/classes/BaseService.md#deactivate)

***

### executeUrl()

> **executeUrl**(`url`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/servicehost/services/ProtoService/index.ts:114](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ProtoService/index.ts#L114)

#### Parameters

##### url

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`executeUrl`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#executeurl)

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

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`GetConnector`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#getconnector)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`GetConnector`](../../../base/classes/BaseService.md#getconnector)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`killSelf`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#killself)

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

### parseAnchor()

> **parseAnchor**(`anchor`): `void`

Defined in: [src/ts/servicehost/services/ProtoService/index.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ProtoService/index.ts#L54)

#### Parameters

##### anchor

`HTMLAnchorElement`

#### Returns

`void`

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`parseAnchor`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#parseanchor)

***

### parseProtoParam()

> **parseProtoParam**(): `void`

Defined in: [src/ts/servicehost/services/ProtoService/index.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ProtoService/index.ts#L35)

#### Returns

`void`

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`parseProtoParam`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#parseprotoparam)

***

### parseUrl()

> **parseUrl**(`str`): [`ArcProtocol`](../../../../../types/services/proto/interfaces/ArcProtocol.md) \| `undefined`

Defined in: [src/ts/servicehost/services/ProtoService/index.ts:92](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ProtoService/index.ts#L92)

#### Parameters

##### str

`string`

#### Returns

[`ArcProtocol`](../../../../../types/services/proto/interfaces/ArcProtocol.md) \| `undefined`

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`parseUrl`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#parseurl)

***

### processMutations()

> **processMutations**(`mutations`): `void`

Defined in: [src/ts/servicehost/services/ProtoService/index.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ProtoService/index.ts#L46)

#### Parameters

##### mutations

`MutationRecord`[]

#### Returns

`void`

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`processMutations`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#processmutations)

***

### registerHandler()

> **registerHandler**(`command`, `handler`): `boolean`

Defined in: [src/ts/servicehost/services/ProtoService/index.ts:125](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ProtoService/index.ts#L125)

#### Parameters

##### command

`string`

##### handler

[`ProtocolHandler`](../../../../../types/services/proto/interfaces/ProtocolHandler.md)

#### Returns

`boolean`

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`registerHandler`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#registerhandler)

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

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`requestFileLock`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#requestfilelock)

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

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`setSource`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#setsource)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`setSource`](../../../base/classes/BaseService.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/ProtoService/index.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ProtoService/index.ts#L26)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`start`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#start)

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

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`unlockFile`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#unlockfile)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`unlockFile`](../../../base/classes/BaseService.md#unlockfile)

***

### unregisterHandler()

> **unregisterHandler**(`command`): `boolean`

Defined in: [src/ts/servicehost/services/ProtoService/index.ts:133](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ProtoService/index.ts#L133)

#### Parameters

##### command

`string`

#### Returns

`boolean`

#### Implementation of

[`IProtocolServiceProcess`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md).[`unregisterHandler`](../../../../../interfaces/services/IProtocolServiceProcess/interfaces/IProtocolServiceProcess.md#unregisterhandler)
