[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/services/IBugHuntUserSpaceProcess](../README.md) / IBugHuntUserSpaceProcess

# Interface: IBugHuntUserSpaceProcess

Defined in: [src/interfaces/services/IBugHuntUserSpaceProcess.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IBugHuntUserSpaceProcess.ts#L6)

## Extends

- [`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean`

Defined in: [src/interfaces/IProcess.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L11)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`_criticalProcess`](../../../IServiceHost/interfaces/IBaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean`

Defined in: [src/interfaces/IServiceHost.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L8)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`activated`](../../../IServiceHost/interfaces/IBaseService.md#activated)

***

### cachedPrivateResponseCount

> **cachedPrivateResponseCount**: `number`

Defined in: [src/interfaces/services/IBugHuntUserSpaceProcess.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IBugHuntUserSpaceProcess.ts#L10)

***

### cachedPublicResponseCount

> **cachedPublicResponseCount**: `number`

Defined in: [src/interfaces/services/IBugHuntUserSpaceProcess.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IBugHuntUserSpaceProcess.ts#L11)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/interfaces/IProcess.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L6)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`dispatch`](../../../IServiceHost/interfaces/IBaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/interfaces/IServiceHost.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L7)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`host`](../../../IServiceHost/interfaces/IBaseService.md#host)

***

### INVALIDATION\_THRESHOLD

> **INVALIDATION\_THRESHOLD**: `number`

Defined in: [src/interfaces/services/IBugHuntUserSpaceProcess.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IBugHuntUserSpaceProcess.ts#L7)

***

### module

> **module**: [`IBugHunt`](../../../modules/IBugHunt/interfaces/IBugHunt.md)

Defined in: [src/interfaces/services/IBugHuntUserSpaceProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IBugHuntUserSpaceProcess.ts#L12)

***

### name

> **name**: `string`

Defined in: [src/interfaces/IProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L9)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`name`](../../../IServiceHost/interfaces/IBaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/interfaces/IProcess.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L8)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`parentPid`](../../../IServiceHost/interfaces/IBaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/interfaces/IProcess.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L7)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`pid`](../../../IServiceHost/interfaces/IBaseService.md#pid)

***

### privateCache

> **privateCache**: [`BugReport`](../../../../types/server/bughunt/interfaces/BugReport.md)[]

Defined in: [src/interfaces/services/IBugHuntUserSpaceProcess.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IBugHuntUserSpaceProcess.ts#L8)

***

### publicCache

> **publicCache**: [`BugReport`](../../../../types/server/bughunt/interfaces/BugReport.md)[]

Defined in: [src/interfaces/services/IBugHuntUserSpaceProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IBugHuntUserSpaceProcess.ts#L9)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [src/interfaces/IProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L12)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`sourceUrl`](../../../IServiceHost/interfaces/IBaseService.md#sourceurl)

***

### STATE

> **STATE**: [`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/interfaces/IProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L13)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`STATE`](../../../IServiceHost/interfaces/IBaseService.md#state)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/interfaces/IProcess.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L10)

##### Returns

`boolean`

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`_disposed`](../../../IServiceHost/interfaces/IBaseService.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/interfaces/IProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L14)

##### Returns

`number`

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`MEMORY`](../../../IServiceHost/interfaces/IBaseService.md#memory)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L15)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`__start`](../../../IServiceHost/interfaces/IBaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L16)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`__stop`](../../../IServiceHost/interfaces/IBaseService.md#__stop)

***

### afterActivate()

> **afterActivate**(): `Promise`\<`void`\>

Defined in: [src/interfaces/services/IBugHuntUserSpaceProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IBugHuntUserSpaceProcess.ts#L13)

#### Returns

`Promise`\<`void`\>

***

### deactivate()

> **deactivate**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IServiceHost.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L9)

#### Parameters

##### broadcast?

(`m`) => `void`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`deactivate`](../../../IServiceHost/interfaces/IBaseService.md#deactivate)

***

### GetConnector()

> **GetConnector**\<`T`\>(`name`): `T`

Defined in: [src/interfaces/IServiceHost.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L10)

#### Type Parameters

##### T

`T` *extends* [`IServerConnector`](../../../modules/IServerManager/classes/IServerConnector.md)

#### Parameters

##### name

`string`

#### Returns

`T`

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`GetConnector`](../../../IServiceHost/interfaces/IBaseService.md#getconnector)

***

### getPrivateReports()

> **getPrivateReports**(`forceInvalidate?`): `Promise`\<[`BugReport`](../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

Defined in: [src/interfaces/services/IBugHuntUserSpaceProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IBugHuntUserSpaceProcess.ts#L15)

#### Parameters

##### forceInvalidate?

`boolean`

#### Returns

`Promise`\<[`BugReport`](../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

***

### getPublicReports()

> **getPublicReports**(`forceInvalidate?`): `Promise`\<[`BugReport`](../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

Defined in: [src/interfaces/services/IBugHuntUserSpaceProcess.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IBugHuntUserSpaceProcess.ts#L16)

#### Parameters

##### forceInvalidate?

`boolean`

#### Returns

`Promise`\<[`BugReport`](../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`killSelf`](../../../IServiceHost/interfaces/IBaseService.md#killself)

***

### refreshAllCaches()

> **refreshAllCaches**(): `Promise`\<`void`\>

Defined in: [src/interfaces/services/IBugHuntUserSpaceProcess.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IBugHuntUserSpaceProcess.ts#L19)

#### Returns

`Promise`\<`void`\>

***

### refreshPrivateCache()

> **refreshPrivateCache**(): `Promise`\<`void`\>

Defined in: [src/interfaces/services/IBugHuntUserSpaceProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IBugHuntUserSpaceProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

***

### refreshPublicCache()

> **refreshPublicCache**(): `Promise`\<`void`\>

Defined in: [src/interfaces/services/IBugHuntUserSpaceProcess.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IBugHuntUserSpaceProcess.ts#L18)

#### Returns

`Promise`\<`void`\>

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

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`requestFileLock`](../../../IServiceHost/interfaces/IBaseService.md#requestfilelock)

***

### sendBugReport()

> **sendBugReport**(`options`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IBugHuntUserSpaceProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IBugHuntUserSpaceProcess.ts#L14)

#### Parameters

##### options

[`ReportOptions`](../../../../types/server/bughunt/interfaces/ReportOptions.md)

#### Returns

`Promise`\<`boolean`\>

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

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`setSource`](../../../IServiceHost/interfaces/IBaseService.md#setsource)

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

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`unlockFile`](../../../IServiceHost/interfaces/IBaseService.md#unlockfile)
