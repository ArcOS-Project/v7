[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/modules/IServerManager](../README.md) / IServerManager

# Interface: IServerManager

Defined in: [src/interfaces/modules/IServerManager.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L6)

## Extends

- [`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md)

## Properties

### authCode?

> `optional` **authCode?**: `string`

Defined in: [src/interfaces/modules/IServerManager.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L13)

***

### connected

> **connected**: `boolean`

Defined in: [src/interfaces/modules/IServerManager.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L7)

***

### hostname?

> `optional` **hostname?**: `string`

Defined in: [src/interfaces/modules/IServerManager.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L12)

***

### id

> **id**: `string`

Defined in: [src/interfaces/modules/IKernelModule.ts:3](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L3)

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`id`](../../IKernelModule/interfaces/IKernelModule.md#id)

***

### previewBranch?

> `optional` **previewBranch?**: `string`

Defined in: [src/interfaces/modules/IServerManager.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L9)

***

### serverInfo?

> `optional` **serverInfo?**: [`ServerInfo`](../../../../types/server/interfaces/ServerInfo.md)

Defined in: [src/interfaces/modules/IServerManager.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L8)

***

### servers

> **servers**: [`ServerOption`](../../../../types/server/interfaces/ServerOption.md)[]

Defined in: [src/interfaces/modules/IServerManager.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L10)

***

### url?

> `optional` **url?**: `string`

Defined in: [src/interfaces/modules/IServerManager.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L11)

## Accessors

### ConnectorAmount

#### Get Signature

> **get** **ConnectorAmount**(): `number`

Defined in: [src/interfaces/modules/IServerManager.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L14)

##### Returns

`number`

***

### ConnectorNames

#### Get Signature

> **get** **ConnectorNames**(): `string`[]

Defined in: [src/interfaces/modules/IServerManager.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L15)

##### Returns

`string`[]

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/modules/IKernelModule.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L5)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`__init`](../../IKernelModule/interfaces/IKernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/modules/IKernelModule.ts:4](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L4)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`_init`](../../IKernelModule/interfaces/IKernelModule.md#_init)

***

### addServer()

> **addServer**(`config`): `boolean`

Defined in: [src/interfaces/modules/IServerManager.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L22)

#### Parameters

##### config

[`ServerOption`](../../../../types/server/interfaces/ServerOption.md)

#### Returns

`boolean`

***

### checkEmailAvailability()

> **checkEmailAvailability**(`username`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/modules/IServerManager.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L17)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### checkUsernameAvailability()

> **checkUsernameAvailability**(`username`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/modules/IServerManager.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L16)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### GetConn()

> **GetConn**\<`T`\>(`id`, `token`): `T`

Defined in: [src/interfaces/modules/IServerManager.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L25)

#### Type Parameters

##### T

`T` *extends* [`IServerConnector`](../classes/IServerConnector.md)

#### Parameters

##### id

`string`

##### token

`string`

#### Returns

`T`

***

### isAdded()

> **isAdded**(`url`): `boolean`

Defined in: [src/interfaces/modules/IServerManager.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L24)

#### Parameters

##### url

`string`

#### Returns

`boolean`

***

### isKmod()

> **isKmod**(): `void`

Defined in: [src/interfaces/modules/IKernelModule.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L6)

#### Returns

`void`

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`isKmod`](../../IKernelModule/interfaces/IKernelModule.md#iskmod)

***

### loadServers()

> **loadServers**(): `void`

Defined in: [src/interfaces/modules/IServerManager.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L19)

#### Returns

`void`

***

### removeServer()

> **removeServer**(`url`): `boolean`

Defined in: [src/interfaces/modules/IServerManager.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L23)

#### Parameters

##### url

`string`

#### Returns

`boolean`

***

### resetServers()

> **resetServers**(): `void`

Defined in: [src/interfaces/modules/IServerManager.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L21)

#### Returns

`void`

***

### switchServer()

> **switchServer**(`url`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/modules/IServerManager.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L18)

#### Parameters

##### url

`string`

#### Returns

`Promise`\<`boolean`\>

***

### writeServers()

> **writeServers**(`servers`): `void`

Defined in: [src/interfaces/modules/IServerManager.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L20)

#### Parameters

##### servers

[`ServerOption`](../../../../types/server/interfaces/ServerOption.md)[]

#### Returns

`void`
