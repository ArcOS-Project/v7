[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/servicehost/services/FileAssocSvc](../README.md) / FileAssocService

# Class: FileAssocService

Defined in: [src/ts/servicehost/services/FileAssocSvc/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/FileAssocSvc/index.ts#L14)

## Extends

- [`BaseService`](../../../base/classes/BaseService.md)

## Implements

- [`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md)

## Constructors

### Constructor

> **new FileAssocService**(`pid`, `parentPid`, `name`, `host`, `initBroadcast?`): `FileAssocService`

Defined in: [src/ts/servicehost/services/FileAssocSvc/index.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/FileAssocSvc/index.ts#L26)

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

`FileAssocService`

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`constructor`](../../../base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`_criticalProcess`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#_criticalprocess)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_criticalProcess`](../../../base/classes/BaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`activated`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#activated)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`activated`](../../../base/classes/BaseService.md#activated)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`dispatch`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#dispatch)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`dispatch`](../../../base/classes/BaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`host`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#host)

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

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`name`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#name)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`name`](../../../base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`parentPid`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#parentpid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`parentPid`](../../../base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`pid`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#pid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`pid`](../../../base/classes/BaseService.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`sourceUrl`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#sourceurl)

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

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`_disposed`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#_disposed)

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

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`MEMORY`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#memory)

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

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`STATE`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#state)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`STATE`](../../../base/classes/BaseService.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`__start`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#__start)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__start`](../../../base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`__stop`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#__stop)

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

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`deactivate`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#deactivate)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`deactivate`](../../../base/classes/BaseService.md#deactivate)

***

### defaultFileAssociations()

> **defaultFileAssociations**(): [`FileAssociationConfig`](../../../../../types/system/assoc/interfaces/FileAssociationConfig.md)

Defined in: [src/ts/servicehost/services/FileAssocSvc/index.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/FileAssocSvc/index.ts#L48)

#### Returns

[`FileAssociationConfig`](../../../../../types/system/assoc/interfaces/FileAssociationConfig.md)

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`defaultFileAssociations`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#defaultfileassociations)

***

### getConfiguration()

> **getConfiguration**(): [`FileAssociationConfig`](../../../../../types/system/assoc/interfaces/FileAssociationConfig.md)

Defined in: [src/ts/servicehost/services/FileAssocSvc/index.ts:124](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/FileAssocSvc/index.ts#L124)

#### Returns

[`FileAssociationConfig`](../../../../../types/system/assoc/interfaces/FileAssociationConfig.md)

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`getConfiguration`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#getconfiguration)

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

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`GetConnector`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#getconnector)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`GetConnector`](../../../base/classes/BaseService.md#getconnector)

***

### getFileAssociation()

> **getFileAssociation**(`path`): [`ExpandedFileAssociationInfo`](../../../../../types/system/assoc/interfaces/ExpandedFileAssociationInfo.md) \| `undefined`

Defined in: [src/ts/servicehost/services/FileAssocSvc/index.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/FileAssocSvc/index.ts#L75)

#### Parameters

##### path

`string`

#### Returns

[`ExpandedFileAssociationInfo`](../../../../../types/system/assoc/interfaces/ExpandedFileAssociationInfo.md) \| `undefined`

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`getFileAssociation`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#getfileassociation)

***

### getUnresolvedAssociationIcon()

> **getUnresolvedAssociationIcon**(`path`): `string`

Defined in: [src/ts/servicehost/services/FileAssocSvc/index.ts:110](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/FileAssocSvc/index.ts#L110)

#### Parameters

##### path

`string`

#### Returns

`string`

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`getUnresolvedAssociationIcon`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#getunresolvedassociationicon)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`killSelf`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#killself)

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

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`requestFileLock`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#requestfilelock)

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

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`setSource`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#setsource)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`setSource`](../../../base/classes/BaseService.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/FileAssocSvc/index.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/FileAssocSvc/index.ts#L32)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`start`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#start)

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

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`unlockFile`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#unlockfile)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`unlockFile`](../../../base/classes/BaseService.md#unlockfile)

***

### updateConfiguration()

> **updateConfiguration**(`callback`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/FileAssocSvc/index.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/FileAssocSvc/index.ts#L38)

#### Parameters

##### callback

(`config`) => [`FileAssociationConfig`](../../../../../types/system/assoc/interfaces/FileAssociationConfig.md) \| `Promise`\<[`FileAssociationConfig`](../../../../../types/system/assoc/interfaces/FileAssociationConfig.md)\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IFileAssocService`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md).[`updateConfiguration`](../../../../../interfaces/services/IFileAssocService/interfaces/IFileAssocService.md#updateconfiguration)
