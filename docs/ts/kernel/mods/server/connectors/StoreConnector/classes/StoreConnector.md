[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/server/connectors/StoreConnector](../README.md) / StoreConnector

# Class: StoreConnector

Defined in: [src/ts/kernel/mods/server/connectors/StoreConnector.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/StoreConnector.ts#L10)

## Extends

- [`ServerConnector`](../../classes/ServerConnector.md)

## Implements

- [`IStoreConnector`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md)

## Constructors

### Constructor

> **new StoreConnector**(`token?`): `StoreConnector`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L14)

#### Parameters

##### token?

`string`

#### Returns

`StoreConnector`

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`constructor`](../../classes/ServerConnector.md#constructor)

## Properties

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L12)

#### Implementation of

[`IStoreConnector`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md).[`name`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md#name)

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`name`](../../classes/ServerConnector.md#name)

***

### prefix

> **prefix**: `string` = `"/store"`

Defined in: [src/ts/kernel/mods/server/connectors/StoreConnector.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/StoreConnector.ts#L11)

#### Overrides

[`ServerConnector`](../../classes/ServerConnector.md).[`prefix`](../../classes/ServerConnector.md#prefix)

***

### token?

> `protected` `optional` **token?**: `string`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L11)

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`token`](../../classes/ServerConnector.md#token)

## Accessors

### server

#### Get Signature

> **get** **server**(): `AxiosInstance`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L18)

##### Returns

`AxiosInstance`

#### Implementation of

[`IStoreConnector`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md).[`server`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md#server)

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`server`](../../classes/ServerConnector.md#server)

## Methods

### DeleteStoreItem()

> **DeleteStoreItem**(`id`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/StoreConnector.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/StoreConnector.ts#L29)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IStoreConnector`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md).[`DeleteStoreItem`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md#deletestoreitem)

***

### DeprecateStoreItem()

> **DeprecateStoreItem**(`id`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/StoreConnector.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/StoreConnector.ts#L37)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IStoreConnector`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md).[`DeprecateStoreItem`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md#deprecatestoreitem)

***

### Download()

> **Download**(`id`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`ArrayBuffer`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/StoreConnector.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/StoreConnector.ts#L75)

#### Parameters

##### id

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`ArrayBuffer`\>\>

#### Implementation of

[`IStoreConnector`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md).[`Download`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md#download)

***

### GetAllStoreItems()

> **GetAllStoreItems**(): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`PartialStoreItem`](../../../../../../../types/tpa/package/interfaces/PartialStoreItem.md)[]\>\>

Defined in: [src/ts/kernel/mods/server/connectors/StoreConnector.ts:88](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/StoreConnector.ts#L88)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`PartialStoreItem`](../../../../../../../types/tpa/package/interfaces/PartialStoreItem.md)[]\>\>

#### Implementation of

[`IStoreConnector`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md).[`GetAllStoreItems`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md#getallstoreitems)

***

### GetPackageById()

> **GetPackageById**(`id`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`StoreItem`](../../../../../../../types/tpa/package/interfaces/StoreItem.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/StoreConnector.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/StoreConnector.ts#L13)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`StoreItem`](../../../../../../../types/tpa/package/interfaces/StoreItem.md)\>\>

#### Implementation of

[`IStoreConnector`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md).[`GetPackageById`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md#getpackagebyid)

***

### GetPackageByName()

> **GetPackageByName**(`name`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`StoreItem`](../../../../../../../types/tpa/package/interfaces/StoreItem.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/StoreConnector.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/StoreConnector.ts#L21)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`StoreItem`](../../../../../../../types/tpa/package/interfaces/StoreItem.md)\>\>

#### Implementation of

[`IStoreConnector`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md).[`GetPackageByName`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md#getpackagebyname)

***

### GetPackageReadme()

> **GetPackageReadme**(`id`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/StoreConnector.ts:104](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/StoreConnector.ts#L104)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

#### Implementation of

[`IStoreConnector`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md).[`GetPackageReadme`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md#getpackagereadme)

***

### GetPublishedStoreItems()

> **GetPublishedStoreItems**(): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`StoreItem`](../../../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>\>

Defined in: [src/ts/kernel/mods/server/connectors/StoreConnector.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/StoreConnector.ts#L45)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`StoreItem`](../../../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>\>

#### Implementation of

[`IStoreConnector`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md).[`GetPublishedStoreItems`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md#getpublishedstoreitems)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L44)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`Log`](../../classes/ServerConnector.md#log)

***

### PublishStoreItem()

> **PublishStoreItem**(`data`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/StoreConnector.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/StoreConnector.ts#L53)

#### Parameters

##### data

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IStoreConnector`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md).[`PublishStoreItem`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md#publishstoreitem)

***

### SearchStoreItems()

> **SearchStoreItems**(`query`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`PartialStoreItem`](../../../../../../../types/tpa/package/interfaces/PartialStoreItem.md)[]\>\>

Defined in: [src/ts/kernel/mods/server/connectors/StoreConnector.ts:96](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/StoreConnector.ts#L96)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`PartialStoreItem`](../../../../../../../types/tpa/package/interfaces/PartialStoreItem.md)[]\>\>

#### Implementation of

[`IStoreConnector`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md).[`SearchStoreItems`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md#searchstoreitems)

***

### UpdateStoreItem()

> **UpdateStoreItem**(`id`, `data`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`UpdateResult`](../../../../../../../types/external/mongo/interfaces/UpdateResult.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/StoreConnector.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/StoreConnector.ts#L61)

#### Parameters

##### id

`string`

##### data

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`UpdateResult`](../../../../../../../types/external/mongo/interfaces/UpdateResult.md)\>\>

#### Implementation of

[`IStoreConnector`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md).[`UpdateStoreItem`](../../../../../../../interfaces/modules/server/IStoreConnector/interfaces/IStoreConnector.md#updatestoreitem)
