[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/runtimes/IArcFindRuntime](../README.md) / IArcFindService

# Interface: IArcFindService

Defined in: [src/interfaces/runtimes/IArcFindRuntime.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IArcFindRuntime.ts#L9)

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

### loading

> **loading**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/runtimes/IArcFindRuntime.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IArcFindRuntime.ts#L10)

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

### searching

> **searching**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/runtimes/IArcFindRuntime.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IArcFindRuntime.ts#L13)

***

### searchQuery

> **searchQuery**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/runtimes/IArcFindRuntime.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IArcFindRuntime.ts#L11)

***

### searchResults

> **searchResults**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`FuseResult`\<[`SearchItem`](../../../../types/services/search/interfaces/SearchItem.md)\>[]\>

Defined in: [src/interfaces/runtimes/IArcFindRuntime.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IArcFindRuntime.ts#L12)

***

### SelectionIndex

> **SelectionIndex**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`number`\>

Defined in: [src/interfaces/runtimes/IArcFindRuntime.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IArcFindRuntime.ts#L14)

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

### getAppSearchSupplier()

> **getAppSearchSupplier**(`preferences`): `Promise`\<[`SearchItem`](../../../../types/services/search/interfaces/SearchItem.md)[]\>

Defined in: [src/interfaces/runtimes/IArcFindRuntime.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IArcFindRuntime.ts#L18)

#### Parameters

##### preferences

[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<[`SearchItem`](../../../../types/services/search/interfaces/SearchItem.md)[]\>

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

### getFilesystemSearchSupplier()

> **getFilesystemSearchSupplier**(`preferences`): `Promise`\<[`SearchItem`](../../../../types/services/search/interfaces/SearchItem.md)[]\>

Defined in: [src/interfaces/runtimes/IArcFindRuntime.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IArcFindRuntime.ts#L17)

#### Parameters

##### preferences

[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<[`SearchItem`](../../../../types/services/search/interfaces/SearchItem.md)[]\>

***

### getFlatTree()

> **getFlatTree**(): `Promise`\<[`PathedFileEntry`](../../../../types/system/fs/type-aliases/PathedFileEntry.md)[]\>

Defined in: [src/interfaces/runtimes/IArcFindRuntime.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IArcFindRuntime.ts#L19)

#### Returns

`Promise`\<[`PathedFileEntry`](../../../../types/system/fs/type-aliases/PathedFileEntry.md)[]\>

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`killSelf`](../../../IServiceHost/interfaces/IBaseService.md#killself)

***

### MutateIndex()

> **MutateIndex**(`e`): `void` \| `-1`

Defined in: [src/interfaces/runtimes/IArcFindRuntime.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IArcFindRuntime.ts#L29)

#### Parameters

##### e

`KeyboardEvent`

#### Returns

`void` \| `-1`

***

### refresh()

> **refresh**(): `Promise`\<[`SearchItem`](../../../../types/services/search/interfaces/SearchItem.md)[] \| `undefined`\>

Defined in: [src/interfaces/runtimes/IArcFindRuntime.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IArcFindRuntime.ts#L16)

#### Returns

`Promise`\<[`SearchItem`](../../../../types/services/search/interfaces/SearchItem.md)[] \| `undefined`\>

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

### Search()

> **Search**(`query`): `Promise`\<`object`[]\>

Defined in: [src/interfaces/runtimes/IArcFindRuntime.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IArcFindRuntime.ts#L20)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<`object`[]\>

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

### Submit()

> **Submit**(): `void`

Defined in: [src/interfaces/runtimes/IArcFindRuntime.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IArcFindRuntime.ts#L31)

#### Returns

`void`

***

### Trigger()

> **Trigger**(`result`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IArcFindRuntime.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IArcFindRuntime.ts#L30)

#### Parameters

##### result

[`SearchItem`](../../../../types/services/search/interfaces/SearchItem.md)

#### Returns

`Promise`\<`void`\>

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
