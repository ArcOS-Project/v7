[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/kernel/mods/server](../README.md) / ServerManager

# Class: ServerManager

Defined in: [src/ts/kernel/mods/server/index.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L21)

## Extends

- [`KernelModule`](../../../module/classes/KernelModule.md)

## Implements

- [`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md)

## Constructors

### Constructor

> **new ServerManager**(`kernel`, `id`): `ServerManager`

Defined in: [src/ts/kernel/mods/server/index.ts:88](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L88)

#### Parameters

##### kernel

[`IWaveKernel`](../../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md)

##### id

`string`

#### Returns

`ServerManager`

#### Overrides

[`KernelModule`](../../../module/classes/KernelModule.md).[`constructor`](../../../module/classes/KernelModule.md#constructor)

## Properties

### connected

> **connected**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/server/index.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L30)

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`connected`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#connected)

***

### id

> **id**: `string`

Defined in: [src/ts/kernel/module/index.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L9)

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`id`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#id)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`id`](../../../module/classes/KernelModule.md#id)

***

### IS\_KMOD

> `protected` `readonly` **IS\_KMOD**: `true` = `true`

Defined in: [src/ts/kernel/module/index.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L8)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`IS_KMOD`](../../../module/classes/KernelModule.md#is_kmod)

***

### previewBranch?

> `optional` **previewBranch?**: `string`

Defined in: [src/ts/kernel/mods/server/index.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L32)

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`previewBranch`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#previewbranch)

***

### serverInfo

> **serverInfo**: [`ServerInfo`](../../../../../types/server/interfaces/ServerInfo.md) \| `undefined`

Defined in: [src/ts/kernel/mods/server/index.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L31)

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`serverInfo`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#serverinfo)

***

### servers

> **servers**: [`ServerOption`](../../../../../types/server/interfaces/ServerOption.md)[] = `[]`

Defined in: [src/ts/kernel/mods/server/index.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L33)

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`servers`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#servers)

***

### state?

> `protected` `optional` **state?**: [`IStateHandler`](../../../../../interfaces/IStateHandler/interfaces/IStateHandler.md)

Defined in: [src/ts/kernel/module/index.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L10)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`state`](../../../module/classes/KernelModule.md#state)

## Accessors

### authCode

#### Get Signature

> **get** **authCode**(): `string` \| `undefined`

Defined in: [src/ts/kernel/mods/server/index.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L71)

##### Returns

`string` \| `undefined`

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`authCode`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#authcode)

***

### ConnectorAmount

#### Get Signature

> **get** **ConnectorAmount**(): `number`

Defined in: [src/ts/kernel/mods/server/index.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L58)

##### Returns

`number`

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`ConnectorAmount`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#connectoramount)

***

### ConnectorNames

#### Get Signature

> **get** **ConnectorNames**(): `string`[]

Defined in: [src/ts/kernel/mods/server/index.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L38)

##### Returns

`string`[]

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`ConnectorNames`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#connectornames)

***

### hostname

#### Get Signature

> **get** **hostname**(): `string` \| `undefined`

Defined in: [src/ts/kernel/mods/server/index.ts:66](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L66)

##### Returns

`string` \| `undefined`

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`hostname`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#hostname)

***

### url

#### Get Signature

> **get** **url**(): `string` \| `undefined`

Defined in: [src/ts/kernel/mods/server/index.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L62)

##### Returns

`string` \| `undefined`

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`url`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#url)

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`__init`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#__init)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`__init`](../../../module/classes/KernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/server/index.ts:94](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L94)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`_init`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#_init)

#### Overrides

[`KernelModule`](../../../module/classes/KernelModule.md).[`_init`](../../../module/classes/KernelModule.md#_init)

***

### addServer()

> **addServer**(`config`): `boolean`

Defined in: [src/ts/kernel/mods/server/index.ts:224](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L224)

#### Parameters

##### config

[`ServerOption`](../../../../../types/server/interfaces/ServerOption.md)

#### Returns

`boolean`

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`addServer`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#addserver)

***

### checkEmailAvailability()

> **checkEmailAvailability**(`email`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/server/index.ts:141](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L141)

#### Parameters

##### email

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`checkEmailAvailability`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#checkemailavailability)

***

### checkUsernameAvailability()

> **checkUsernameAvailability**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/server/index.ts:136](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L136)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`checkUsernameAvailability`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#checkusernameavailability)

***

### GetConn()

> **GetConn**\<`T`\>(`id`, `token?`): `T`

Defined in: [src/ts/kernel/mods/server/index.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L42)

#### Type Parameters

##### T

`T` *extends* [`IServerConnector`](../../../../../interfaces/modules/IServerManager/classes/IServerConnector.md)

#### Parameters

##### id

`string`

##### token?

`string` = `""`

#### Returns

`T`

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`GetConn`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#getconn)

***

### isAdded()

> **isAdded**(`url`): `boolean`

Defined in: [src/ts/kernel/mods/server/index.ts:244](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L244)

#### Parameters

##### url

`string`

#### Returns

`boolean`

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`isAdded`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#isadded)

***

### isKmod()

> **isKmod**(): `void`

Defined in: [src/ts/kernel/module/index.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L36)

#### Returns

`void`

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`isKmod`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#iskmod)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`isKmod`](../../../module/classes/KernelModule.md#iskmod)

***

### loadServers()

> **loadServers**(): `void`

Defined in: [src/ts/kernel/mods/server/index.ts:188](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L188)

#### Returns

`void`

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`loadServers`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#loadservers)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/module/index.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L30)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`Log`](../../../module/classes/KernelModule.md#log)

***

### removeServer()

> **removeServer**(`url`): `boolean`

Defined in: [src/ts/kernel/mods/server/index.ts:235](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L235)

#### Parameters

##### url

`string`

#### Returns

`boolean`

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`removeServer`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#removeserver)

***

### resetServers()

> **resetServers**(): `void`

Defined in: [src/ts/kernel/mods/server/index.ts:210](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L210)

#### Returns

`void`

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`resetServers`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#resetservers)

***

### switchServer()

> **switchServer**(`url`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/server/index.ts:155](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L155)

#### Parameters

##### url

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`switchServer`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#switchserver)

***

### writeServers()

> **writeServers**(`servers`): `void`

Defined in: [src/ts/kernel/mods/server/index.ts:200](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L200)

#### Parameters

##### servers

[`ServerOption`](../../../../../types/server/interfaces/ServerOption.md)[]

#### Returns

`void`

#### Implementation of

[`IServerManager`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md).[`writeServers`](../../../../../interfaces/modules/IServerManager/interfaces/IServerManager.md#writeservers)

***

### isConnected()

> `static` **isConnected**(): `boolean`

Defined in: [src/ts/kernel/mods/server/index.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L75)

#### Returns

`boolean`

***

### url()

> `static` **url**(): `string` \| `undefined`

Defined in: [src/ts/kernel/mods/server/index.ts:80](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/index.ts#L80)

#### Returns

`string` \| `undefined`
