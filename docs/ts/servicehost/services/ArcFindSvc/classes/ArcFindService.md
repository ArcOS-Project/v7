[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/servicehost/services/ArcFindSvc](../README.md) / ArcFindService

# Class: ArcFindService

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L17)

## Extends

- [`BaseService`](../../../base/classes/BaseService.md)

## Implements

- [`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md)

## Constructors

### Constructor

> **new ArcFindService**(`pid`, `parentPid`, `name`, `host`, `initBroadcast?`): `ArcFindService`

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L26)

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

(`message`) => `void`

#### Returns

`ArcFindService`

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`constructor`](../../../base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`_criticalProcess`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#_criticalprocess)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_criticalProcess`](../../../base/classes/BaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`activated`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#activated)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`activated`](../../../base/classes/BaseService.md#activated)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`dispatch`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#dispatch)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`dispatch`](../../../base/classes/BaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`host`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#host)

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

### loading

> **loading**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L20)

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`loading`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#loading)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`name`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#name)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`name`](../../../base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`parentPid`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#parentpid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`parentPid`](../../../base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`pid`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#pid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`pid`](../../../base/classes/BaseService.md#pid)

***

### searching

> **searching**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L23)

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`searching`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#searching)

***

### searchQuery

> **searchQuery**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L22)

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`searchQuery`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#searchquery)

***

### searchResults

> **searchResults**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`FuseResult`\<[`SearchItem`](../../../../../types/services/search/interfaces/SearchItem.md)\>[]\>

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L21)

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`searchResults`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#searchresults)

***

### SelectionIndex

> **SelectionIndex**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`number`\>

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L24)

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`SelectionIndex`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#selectionindex)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`sourceUrl`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#sourceurl)

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

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`_disposed`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#_disposed)

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

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`MEMORY`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#memory)

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

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`STATE`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#state)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`STATE`](../../../base/classes/BaseService.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`__start`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#__start)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__start`](../../../base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`__stop`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#__stop)

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

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`deactivate`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#deactivate)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`deactivate`](../../../base/classes/BaseService.md#deactivate)

***

### getAppSearchSupplier()

> **getAppSearchSupplier**(`preferences`): `Promise`\<[`SearchItem`](../../../../../types/services/search/interfaces/SearchItem.md)[]\>

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:150](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L150)

#### Parameters

##### preferences

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<[`SearchItem`](../../../../../types/services/search/interfaces/SearchItem.md)[]\>

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`getAppSearchSupplier`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#getappsearchsupplier)

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

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`GetConnector`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#getconnector)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`GetConnector`](../../../base/classes/BaseService.md#getconnector)

***

### getFilesystemSearchSupplier()

> **getFilesystemSearchSupplier**(`preferences`): `Promise`\<[`SearchItem`](../../../../../types/services/search/interfaces/SearchItem.md)[]\>

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:123](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L123)

#### Parameters

##### preferences

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<[`SearchItem`](../../../../../types/services/search/interfaces/SearchItem.md)[]\>

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`getFilesystemSearchSupplier`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#getfilesystemsearchsupplier)

***

### getFlatTree()

> **getFlatTree**(): `Promise`\<[`PathedFileEntry`](../../../../../types/system/fs/type-aliases/PathedFileEntry.md)[]\>

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:177](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L177)

#### Returns

`Promise`\<[`PathedFileEntry`](../../../../../types/system/fs/type-aliases/PathedFileEntry.md)[]\>

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`getFlatTree`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#getflattree)

***

### getSettingsSearchSupplier()

> **getSettingsSearchSupplier**(): [`SearchItem`](../../../../../types/services/search/interfaces/SearchItem.md)[]

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:204](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L204)

#### Returns

[`SearchItem`](../../../../../types/services/search/interfaces/SearchItem.md)[]

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`killSelf`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#killself)

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

### MutateIndex()

> **MutateIndex**(`e`): `void` \| `-1`

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L258)

#### Parameters

##### e

`KeyboardEvent`

#### Returns

`void` \| `-1`

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`MutateIndex`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#mutateindex)

***

### refresh()

> **refresh**(): `Promise`\<[`SearchItem`](../../../../../types/services/search/interfaces/SearchItem.md)[] \| `undefined`\>

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L71)

#### Returns

`Promise`\<[`SearchItem`](../../../../../types/services/search/interfaces/SearchItem.md)[] \| `undefined`\>

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`refresh`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#refresh)

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

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`requestFileLock`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#requestfilelock)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`requestFileLock`](../../../base/classes/BaseService.md#requestfilelock)

***

### Search()

> **Search**(`query`): `Promise`\<`object`[]\>

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L226)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<`object`[]\>

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`Search`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#search)

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

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`setSource`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#setsource)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`setSource`](../../../base/classes/BaseService.md#setsource)

***

### start()

> **start**(): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L32)

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`start`](../../../base/classes/BaseService.md#start)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:66](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L66)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`stop`](../../../base/classes/BaseService.md#stop)

***

### Submit()

> **Submit**(): `void`

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:247](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L247)

#### Returns

`void`

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`Submit`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#submit)

***

### Trigger()

> **Trigger**(`result`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/ArcFindSvc/index.ts:241](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ArcFindSvc/index.ts#L241)

#### Parameters

##### result

[`SearchItem`](../../../../../types/services/search/interfaces/SearchItem.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`Trigger`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#trigger)

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

[`IArcFindService`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md).[`unlockFile`](../../../../../interfaces/services/IArcFindService/interfaces/IArcFindService.md#unlockfile)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`unlockFile`](../../../base/classes/BaseService.md#unlockfile)
