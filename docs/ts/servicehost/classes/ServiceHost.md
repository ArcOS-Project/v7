[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [ts/servicehost](../README.md) / ServiceHost

# Class: ServiceHost

Defined in: [src/ts/servicehost/index.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L28)

## Extends

- [`Process`](../../kernel/mods/stack/process/instance/classes/Process.md)

## Implements

- [`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

## Constructors

### Constructor

> **new ServiceHost**(`pid`, `parentPid`): `ServiceHost`

Defined in: [src/ts/servicehost/index.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L35)

#### Parameters

##### pid

`number`

##### parentPid

`number`

#### Returns

`ServiceHost`

#### Overrides

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`constructor`](../../kernel/mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`_criticalProcess`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#_criticalprocess)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../kernel/mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### \_holdRestart

> **\_holdRestart**: `boolean` = `false`

Defined in: [src/ts/servicehost/index.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L30)

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`_holdRestart`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#_holdrestart)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`dispatch`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#dispatch)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`dispatch`](../../kernel/mods/stack/process/instance/classes/Process.md#dispatch)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`name`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#name)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`name`](../../kernel/mods/stack/process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`parentPid`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#parentpid)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`parentPid`](../../kernel/mods/stack/process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`pid`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#pid)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`pid`](../../kernel/mods/stack/process/instance/classes/Process.md#pid)

***

### Services

> **Services**: [`ReadableServiceStore`](../../../types/services/service/type-aliases/ReadableServiceStore.md)

Defined in: [src/ts/servicehost/index.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L29)

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`Services`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#services)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`sourceUrl`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#sourceurl)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`sourceUrl`](../../kernel/mods/stack/process/instance/classes/Process.md#sourceurl)

***

### STORE

> `readonly` **STORE**: `Map`\<[`ServiceIdentifier`](../../../interfaces/IServiceHost/type-aliases/ServiceIdentifier.md), [`Service`](../../../types/services/service/interfaces/Service.md)\>

Defined in: [src/ts/servicehost/index.ts:111](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L111)

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`STORE`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#store)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`_disposed`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#_disposed)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`_disposed`](../../kernel/mods/stack/process/instance/classes/Process.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`MEMORY`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#memory)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`MEMORY`](../../kernel/mods/stack/process/instance/classes/Process.md#memory)

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

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`STATE`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#state)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`STATE`](../../kernel/mods/stack/process/instance/classes/Process.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`__start`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#__start)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`__start`](../../kernel/mods/stack/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`__stop`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#__stop)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`__stop`](../../kernel/mods/stack/process/instance/classes/Process.md#__stop)

***

### Gate()

> **Gate**\<`T`\>(`id`, `onActive`, `onInactive?`): `void`

Defined in: [src/ts/servicehost/index.ts:267](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L267)

#### Type Parameters

##### T

`T` *extends* [`IBaseService`](../../../interfaces/IServiceHost/interfaces/IBaseService.md)

#### Parameters

##### id

[`ServiceIdentifier`](../../../interfaces/IServiceHost/type-aliases/ServiceIdentifier.md)

##### onActive

(`service`) => `void`

##### onInactive?

() => `void`

#### Returns

`void`

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`Gate`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#gate)

***

### getService()

> **getService**\<`T`\>(`id`): `T` \| `undefined`

Defined in: [src/ts/servicehost/index.ts:246](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L246)

#### Type Parameters

##### T

`T` *extends* [`IBaseService`](../../../interfaces/IServiceHost/interfaces/IBaseService.md) = [`IBaseService`](../../../interfaces/IServiceHost/interfaces/IBaseService.md)

#### Parameters

##### id

[`ServiceIdentifier`](../../../interfaces/IServiceHost/type-aliases/ServiceIdentifier.md)

#### Returns

`T` \| `undefined`

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`getService`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#getservice)

***

### getServiceInfo()

> **getServiceInfo**(`id`): [`Service`](../../../types/services/service/interfaces/Service.md) \| `undefined`

Defined in: [src/ts/servicehost/index.ts:154](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L154)

#### Parameters

##### id

[`ServiceIdentifier`](../../../interfaces/IServiceHost/type-aliases/ServiceIdentifier.md)

#### Returns

[`Service`](../../../types/services/service/interfaces/Service.md) \| `undefined`

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`getServiceInfo`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#getserviceinfo)

***

### hasService()

> **hasService**(`id`): `boolean`

Defined in: [src/ts/servicehost/index.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L258)

#### Parameters

##### id

[`ServiceIdentifier`](../../../interfaces/IServiceHost/type-aliases/ServiceIdentifier.md)

#### Returns

`boolean`

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`hasService`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#hasservice)

***

### init()

> **init**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/index.ts:92](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L92)

#### Parameters

##### broadcast?

(`msg`) => `void`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`init`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#init)

***

### initialRun()

> **initialRun**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/index.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L43)

#### Parameters

##### broadcast?

(`msg`) => `void`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`initialRun`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#initialrun)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`killSelf`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#killself)

#### Inherited from

`Process.killSelf`

***

### loadStore()

> **loadStore**(`store`): `boolean`

Defined in: [src/ts/servicehost/index.ts:132](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L132)

#### Parameters

##### store

[`ServiceStore`](../../../types/services/service/type-aliases/ServiceStore.md)

#### Returns

`boolean`

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`loadStore`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#loadstore)

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

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`requestFileLock`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#requestfilelock)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`requestFileLock`](../../kernel/mods/stack/process/instance/classes/Process.md#requestfilelock)

***

### restartService()

> **restartService**(`id`): `Promise`\<[`ServiceChangeResult`](../../../types/services/service/type-aliases/ServiceChangeResult.md)\>

Defined in: [src/ts/servicehost/index.ts:213](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L213)

#### Parameters

##### id

[`ServiceIdentifier`](../../../interfaces/IServiceHost/type-aliases/ServiceIdentifier.md)

#### Returns

`Promise`\<[`ServiceChangeResult`](../../../types/services/service/type-aliases/ServiceChangeResult.md)\>

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`restartService`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#restartservice)

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

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`setSource`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#setsource)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`setSource`](../../kernel/mods/stack/process/instance/classes/Process.md#setsource)

***

### spinDown()

> **spinDown**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/index.ts:82](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L82)

#### Parameters

##### broadcast?

(`msg`) => `void`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`spinDown`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#spindown)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L49)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`start`](../../kernel/mods/stack/process/instance/classes/Process.md#start)

***

### startService()

> **startService**(`id`, `broadcast?`): `Promise`\<[`ServiceChangeResult`](../../../types/services/service/type-aliases/ServiceChangeResult.md)\>

Defined in: [src/ts/servicehost/index.ts:161](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L161)

#### Parameters

##### id

[`ServiceIdentifier`](../../../interfaces/IServiceHost/type-aliases/ServiceIdentifier.md)

##### broadcast?

(`msg`) => `void`

#### Returns

`Promise`\<[`ServiceChangeResult`](../../../types/services/service/type-aliases/ServiceChangeResult.md)\>

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`startService`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#startservice)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/index.ts:100](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L100)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`stop`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#stop)

#### Overrides

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`stop`](../../kernel/mods/stack/process/instance/classes/Process.md#stop)

***

### stopService()

> **stopService**(`id`, `broadcast?`): `Promise`\<[`ServiceChangeResult`](../../../types/services/service/type-aliases/ServiceChangeResult.md)\>

Defined in: [src/ts/servicehost/index.ts:186](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L186)

#### Parameters

##### id

[`ServiceIdentifier`](../../../interfaces/IServiceHost/type-aliases/ServiceIdentifier.md)

##### broadcast?

(`m`) => `void`

#### Returns

`Promise`\<[`ServiceChangeResult`](../../../types/services/service/type-aliases/ServiceChangeResult.md)\>

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`stopService`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#stopservice)

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

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`unlockFile`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#unlockfile)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../kernel/mods/stack/process/instance/classes/Process.md#unlockfile)

***

### verifyServicesProcesses()

> **verifyServicesProcesses**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/index.ts:224](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/index.ts#L224)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IServiceHost`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md).[`verifyServicesProcesses`](../../../interfaces/IServiceHost/interfaces/IServiceHost.md#verifyservicesprocesses)
