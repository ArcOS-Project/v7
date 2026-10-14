[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/servicehost/services/DevEnvironment](../README.md) / DevelopmentEnvironment

# Class: DevelopmentEnvironment

Defined in: [src/ts/servicehost/services/DevEnvironment/index.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DevEnvironment/index.ts#L17)

## Extends

- [`BaseService`](../../../base/classes/BaseService.md)

## Implements

- [`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md)

## Constructors

### Constructor

> **new DevelopmentEnvironment**(`pid`, `parentPid`, `name`, `host`, `initBroadcast?`): `DevelopmentEnvironment`

Defined in: [src/ts/servicehost/services/DevEnvironment/index.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DevEnvironment/index.ts#L28)

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

`DevelopmentEnvironment`

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`constructor`](../../../base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`_criticalProcess`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#_criticalprocess)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_criticalProcess`](../../../base/classes/BaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`activated`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#activated)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`activated`](../../../base/classes/BaseService.md#activated)

***

### connected

> **connected**: `boolean` = `false`

Defined in: [src/ts/servicehost/services/DevEnvironment/index.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DevEnvironment/index.ts#L18)

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`connected`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#connected)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`dispatch`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#dispatch)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`dispatch`](../../../base/classes/BaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`host`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#host)

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

### meta?

> `optional` **meta?**: [`ProjectMetadata`](../../../../../types/services/devenv/interfaces/ProjectMetadata.md)

Defined in: [src/ts/servicehost/services/DevEnvironment/index.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DevEnvironment/index.ts#L23)

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`meta`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#meta)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`name`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#name)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`name`](../../../base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`parentPid`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#parentpid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`parentPid`](../../../base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`pid`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#pid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`pid`](../../../base/classes/BaseService.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`sourceUrl`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#sourceurl)

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

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`_disposed`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#_disposed)

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

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`MEMORY`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#memory)

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

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`STATE`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#state)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`STATE`](../../../base/classes/BaseService.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`__start`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#__start)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__start`](../../../base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`__stop`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#__stop)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__stop`](../../../base/classes/BaseService.md#__stop)

***

### connect()

> **connect**(`port`): `Promise`\<[`DevEnvActivationResult`](../../../../../types/services/devenv/type-aliases/DevEnvActivationResult.md)\>

Defined in: [src/ts/servicehost/services/DevEnvironment/index.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DevEnvironment/index.ts#L63)

#### Parameters

##### port

`number`

#### Returns

`Promise`\<[`DevEnvActivationResult`](../../../../../types/services/devenv/type-aliases/DevEnvActivationResult.md)\>

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`connect`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#connect)

***

### deactivate()

> **deactivate**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DevEnvironment/index.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DevEnvironment/index.ts#L38)

#### Parameters

##### broadcast?

(`m`) => `void`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`deactivate`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#deactivate)

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`deactivate`](../../../base/classes/BaseService.md#deactivate)

***

### disconnect()

> **disconnect**(): `Promise`\<`undefined`\>

Defined in: [src/ts/servicehost/services/DevEnvironment/index.ts:161](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DevEnvironment/index.ts#L161)

#### Returns

`Promise`\<`undefined`\>

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`disconnect`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#disconnect)

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

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`GetConnector`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#getconnector)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`GetConnector`](../../../base/classes/BaseService.md#getconnector)

***

### getProjectMeta()

> **getProjectMeta**(): `Promise`\<[`ProjectMetadata`](../../../../../types/services/devenv/interfaces/ProjectMetadata.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/DevEnvironment/index.ts:173](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DevEnvironment/index.ts#L173)

#### Returns

`Promise`\<[`ProjectMetadata`](../../../../../types/services/devenv/interfaces/ProjectMetadata.md) \| `undefined`\>

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`getProjectMeta`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#getprojectmeta)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`killSelf`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#killself)

#### Inherited from

`BaseService.killSelf`

***

### killTpa()

> **killTpa**(): `Promise`\<`undefined`\>

Defined in: [src/ts/servicehost/services/DevEnvironment/index.ts:200](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DevEnvironment/index.ts#L200)

#### Returns

`Promise`\<`undefined`\>

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`killTpa`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#killtpa)

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

### mountDevDrive()

> **mountDevDrive**(): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/servicehost/services/DevEnvironment/index.ts:185](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DevEnvironment/index.ts#L185)

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`mountDevDrive`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#mountdevdrive)

***

### refreshCSS()

> **refreshCSS**(`filename`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DevEnvironment/index.ts:210](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DevEnvironment/index.ts#L210)

#### Parameters

##### filename

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`refreshCSS`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#refreshcss)

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

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`requestFileLock`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#requestfilelock)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`requestFileLock`](../../../base/classes/BaseService.md#requestfilelock)

***

### restartTpa()

> **restartTpa**(): `Promise`\<`undefined`\>

Defined in: [src/ts/servicehost/services/DevEnvironment/index.ts:193](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DevEnvironment/index.ts#L193)

#### Returns

`Promise`\<`undefined`\>

#### Implementation of

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`restartTpa`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#restarttpa)

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

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`setSource`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#setsource)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`setSource`](../../../base/classes/BaseService.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DevEnvironment/index.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DevEnvironment/index.ts#L44)

#### Returns

`Promise`\<`void`\>

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

[`IDevelopmentEnvironment`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md).[`unlockFile`](../../../../../interfaces/services/IDevelopmentEnvironment/interfaces/IDevelopmentEnvironment.md#unlockfile)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`unlockFile`](../../../base/classes/BaseService.md#unlockfile)
