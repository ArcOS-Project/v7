[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/servicehost/services/BugHuntUsp](../README.md) / BugHuntUserSpaceProcess

# Class: BugHuntUserSpaceProcess

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L9)

## Extends

- [`BaseService`](../../../base/classes/BaseService.md)

## Implements

- [`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md)

## Constructors

### Constructor

> **new BugHuntUserSpaceProcess**(`pid`, `parentPid`, `name`, `host`, `initBroadcast?`): `BugHuntUserSpaceProcess`

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L19)

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

`BugHuntUserSpaceProcess`

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`constructor`](../../../base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`_criticalProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#_criticalprocess)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_criticalProcess`](../../../base/classes/BaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`activated`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#activated)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`activated`](../../../base/classes/BaseService.md#activated)

***

### cachedPrivateResponseCount

> **cachedPrivateResponseCount**: `number` = `0`

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L13)

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`cachedPrivateResponseCount`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#cachedprivateresponsecount)

***

### cachedPublicResponseCount

> **cachedPublicResponseCount**: `number` = `0`

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L14)

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`cachedPublicResponseCount`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#cachedpublicresponsecount)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`dispatch`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#dispatch)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`dispatch`](../../../base/classes/BaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`host`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#host)

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

### INVALIDATION\_THRESHOLD

> **INVALIDATION\_THRESHOLD**: `number` = `10`

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L10)

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`INVALIDATION_THRESHOLD`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#invalidation_threshold)

***

### module

> **module**: [`IBugHunt`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md)

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L15)

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`module`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#module)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`name`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#name)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`name`](../../../base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`parentPid`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#parentpid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`parentPid`](../../../base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`pid`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#pid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`pid`](../../../base/classes/BaseService.md#pid)

***

### privateCache

> **privateCache**: [`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md)[] = `[]`

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L11)

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`privateCache`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#privatecache)

***

### publicCache

> **publicCache**: [`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md)[] = `[]`

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L12)

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`publicCache`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#publiccache)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`sourceUrl`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#sourceurl)

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

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`_disposed`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#_disposed)

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

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`MEMORY`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#memory)

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

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`STATE`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#state)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`STATE`](../../../base/classes/BaseService.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`__start`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#__start)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__start`](../../../base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`__stop`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#__stop)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__stop`](../../../base/classes/BaseService.md#__stop)

***

### afterActivate()

> **afterActivate**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L27)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`afterActivate`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#afteractivate)

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

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`deactivate`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#deactivate)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`deactivate`](../../../base/classes/BaseService.md#deactivate)

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

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`GetConnector`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#getconnector)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`GetConnector`](../../../base/classes/BaseService.md#getconnector)

***

### getPrivateReports()

> **getPrivateReports**(`forceInvalidate?`): `Promise`\<[`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L43)

#### Parameters

##### forceInvalidate?

`boolean` = `false`

#### Returns

`Promise`\<[`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`getPrivateReports`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#getprivatereports)

***

### getPublicReports()

> **getPublicReports**(`forceInvalidate?`): `Promise`\<[`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L62)

#### Parameters

##### forceInvalidate?

`boolean` = `false`

#### Returns

`Promise`\<[`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`getPublicReports`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#getpublicreports)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`killSelf`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#killself)

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

### refreshAllCaches()

> **refreshAllCaches**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:93](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L93)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`refreshAllCaches`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#refreshallcaches)

***

### refreshPrivateCache()

> **refreshPrivateCache**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:81](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L81)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`refreshPrivateCache`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#refreshprivatecache)

***

### refreshPublicCache()

> **refreshPublicCache**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:87](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L87)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`refreshPublicCache`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#refreshpubliccache)

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

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`requestFileLock`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#requestfilelock)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`requestFileLock`](../../../base/classes/BaseService.md#requestfilelock)

***

### sendBugReport()

> **sendBugReport**(`options`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L37)

#### Parameters

##### options

[`ReportOptions`](../../../../../types/server/bughunt/interfaces/ReportOptions.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`sendBugReport`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#sendbugreport)

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

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`setSource`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#setsource)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`setSource`](../../../base/classes/BaseService.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/BugHuntUsp/index.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/BugHuntUsp/index.ts#L31)

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

[`IBugHuntUserSpaceProcess`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md).[`unlockFile`](../../../../../interfaces/services/IBugHuntUserSpaceProcess/interfaces/IBugHuntUserSpaceProcess.md#unlockfile)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`unlockFile`](../../../base/classes/BaseService.md#unlockfile)
