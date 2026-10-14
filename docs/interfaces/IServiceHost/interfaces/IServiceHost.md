[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/IServiceHost](../README.md) / IServiceHost

# Interface: IServiceHost

Defined in: [src/interfaces/IServiceHost.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L13)

## Extends

- [`IProcess`](../../IProcess/interfaces/IProcess.md)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean`

Defined in: [src/interfaces/IProcess.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L11)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`_criticalProcess`](../../IProcess/interfaces/IProcess.md#_criticalprocess)

***

### \_holdRestart

> **\_holdRestart**: `boolean`

Defined in: [src/interfaces/IServiceHost.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L15)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/interfaces/IProcess.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L6)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`dispatch`](../../IProcess/interfaces/IProcess.md#dispatch)

***

### name

> **name**: `string`

Defined in: [src/interfaces/IProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L9)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`name`](../../IProcess/interfaces/IProcess.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/interfaces/IProcess.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L8)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`parentPid`](../../IProcess/interfaces/IProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/interfaces/IProcess.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L7)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`pid`](../../IProcess/interfaces/IProcess.md#pid)

***

### Services

> **Services**: [`ReadableServiceStore`](../../../types/services/service/type-aliases/ReadableServiceStore.md)

Defined in: [src/interfaces/IServiceHost.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L14)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [src/interfaces/IProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L12)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`sourceUrl`](../../IProcess/interfaces/IProcess.md#sourceurl)

***

### STATE

> **STATE**: [`ProcessState`](../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/interfaces/IProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L13)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`STATE`](../../IProcess/interfaces/IProcess.md#state)

***

### STORE

> `readonly` **STORE**: `Map`\<[`ServiceIdentifier`](../type-aliases/ServiceIdentifier.md), [`Service`](../../../types/services/service/interfaces/Service.md)\>

Defined in: [src/interfaces/IServiceHost.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L19)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/interfaces/IProcess.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L10)

##### Returns

`boolean`

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`_disposed`](../../IProcess/interfaces/IProcess.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/interfaces/IProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L14)

##### Returns

`number`

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`MEMORY`](../../IProcess/interfaces/IProcess.md#memory)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L15)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`__start`](../../IProcess/interfaces/IProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L16)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`__stop`](../../IProcess/interfaces/IProcess.md#__stop)

***

### Gate()

> **Gate**\<`T`\>(`id`, `onActive`, `onInactive?`): `void`

Defined in: [src/interfaces/IServiceHost.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L29)

#### Type Parameters

##### T

`T` *extends* [`IBaseService`](IBaseService.md)

#### Parameters

##### id

[`ServiceIdentifier`](../type-aliases/ServiceIdentifier.md)

##### onActive

(`service`) => `void`

##### onInactive?

() => `void`

#### Returns

`void`

***

### getService()

> **getService**\<`T`\>(`id`): `T` \| `undefined`

Defined in: [src/interfaces/IServiceHost.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L26)

#### Type Parameters

##### T

`T` *extends* [`IBaseService`](IBaseService.md) = [`IBaseService`](IBaseService.md)

#### Parameters

##### id

[`ServiceIdentifier`](../type-aliases/ServiceIdentifier.md)

#### Returns

`T` \| `undefined`

***

### getServiceInfo()

> **getServiceInfo**(`id`): [`Service`](../../../types/services/service/interfaces/Service.md) \| `undefined`

Defined in: [src/interfaces/IServiceHost.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L21)

#### Parameters

##### id

[`ServiceIdentifier`](../type-aliases/ServiceIdentifier.md)

#### Returns

[`Service`](../../../types/services/service/interfaces/Service.md) \| `undefined`

***

### hasService()

> **hasService**(`id`): `boolean`

Defined in: [src/interfaces/IServiceHost.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L27)

#### Parameters

##### id

[`ServiceIdentifier`](../type-aliases/ServiceIdentifier.md)

#### Returns

`boolean`

***

### init()

> **init**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IServiceHost.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L17)

#### Parameters

##### broadcast?

(`m`) => `void`

#### Returns

`Promise`\<`void`\>

***

### initialRun()

> **initialRun**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IServiceHost.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L16)

#### Parameters

##### broadcast?

(`m`) => `void`

#### Returns

`Promise`\<`void`\>

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`killSelf`](../../IProcess/interfaces/IProcess.md#killself)

***

### loadStore()

> **loadStore**(`store`): `boolean`

Defined in: [src/interfaces/IServiceHost.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L20)

#### Parameters

##### store

[`ServiceStore`](../../../types/services/service/type-aliases/ServiceStore.md)

#### Returns

`boolean`

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

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`requestFileLock`](../../IProcess/interfaces/IProcess.md#requestfilelock)

***

### restartService()

> **restartService**(`id`): `Promise`\<[`ServiceChangeResult`](../../../types/services/service/type-aliases/ServiceChangeResult.md)\>

Defined in: [src/interfaces/IServiceHost.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L24)

#### Parameters

##### id

[`ServiceIdentifier`](../type-aliases/ServiceIdentifier.md)

#### Returns

`Promise`\<[`ServiceChangeResult`](../../../types/services/service/type-aliases/ServiceChangeResult.md)\>

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

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`setSource`](../../IProcess/interfaces/IProcess.md#setsource)

***

### spinDown()

> **spinDown**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IServiceHost.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L28)

#### Parameters

##### broadcast?

(`message`) => `void`

#### Returns

`Promise`\<`void`\>

***

### startService()

> **startService**(`id`): `Promise`\<[`ServiceChangeResult`](../../../types/services/service/type-aliases/ServiceChangeResult.md)\>

Defined in: [src/interfaces/IServiceHost.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L22)

#### Parameters

##### id

[`ServiceIdentifier`](../type-aliases/ServiceIdentifier.md)

#### Returns

`Promise`\<[`ServiceChangeResult`](../../../types/services/service/type-aliases/ServiceChangeResult.md)\>

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IServiceHost.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L18)

#### Returns

`Promise`\<`void`\>

***

### stopService()

> **stopService**(`id`): `Promise`\<[`ServiceChangeResult`](../../../types/services/service/type-aliases/ServiceChangeResult.md)\>

Defined in: [src/interfaces/IServiceHost.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L23)

#### Parameters

##### id

[`ServiceIdentifier`](../type-aliases/ServiceIdentifier.md)

#### Returns

`Promise`\<[`ServiceChangeResult`](../../../types/services/service/type-aliases/ServiceChangeResult.md)\>

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

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`unlockFile`](../../IProcess/interfaces/IProcess.md#unlockfile)

***

### verifyServicesProcesses()

> **verifyServicesProcesses**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IServiceHost.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L25)

#### Returns

`Promise`\<`void`\>
