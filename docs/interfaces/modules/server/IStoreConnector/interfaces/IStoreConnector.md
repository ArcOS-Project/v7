[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [interfaces/modules/server/IStoreConnector](../README.md) / IStoreConnector

# Interface: IStoreConnector

Defined in: [src/interfaces/modules/server/IStoreConnector.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IStoreConnector.ts#L8)

## Extends

- [`IServerConnector`](../../../IServerManager/classes/IServerConnector.md)

## Properties

### name

> **name**: `string`

Defined in: [src/interfaces/modules/IServerManager.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L29)

#### Inherited from

[`IServerConnector`](../../../IServerManager/classes/IServerConnector.md).[`name`](../../../IServerManager/classes/IServerConnector.md#name)

## Accessors

### server

#### Get Signature

> **get** **server**(): `AxiosInstance`

Defined in: [src/interfaces/modules/IServerManager.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L30)

##### Returns

`AxiosInstance`

#### Inherited from

[`IServerConnector`](../../../IServerManager/classes/IServerConnector.md).[`server`](../../../IServerManager/classes/IServerConnector.md#server)

## Methods

### DeleteStoreItem()

> **DeleteStoreItem**(`id`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IStoreConnector.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IStoreConnector.ts#L11)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### DeprecateStoreItem()

> **DeprecateStoreItem**(`id`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IStoreConnector.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IStoreConnector.ts#L12)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### Download()

> **Download**(`id`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`ArrayBuffer`\>\>

Defined in: [src/interfaces/modules/server/IStoreConnector.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IStoreConnector.ts#L16)

#### Parameters

##### id

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`ArrayBuffer`\>\>

***

### GetAllStoreItems()

> **GetAllStoreItems**(): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`PartialStoreItem`](../../../../../types/tpa/package/interfaces/PartialStoreItem.md)[]\>\>

Defined in: [src/interfaces/modules/server/IStoreConnector.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IStoreConnector.ts#L17)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`PartialStoreItem`](../../../../../types/tpa/package/interfaces/PartialStoreItem.md)[]\>\>

***

### GetPackageById()

> **GetPackageById**(`id`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)\>\>

Defined in: [src/interfaces/modules/server/IStoreConnector.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IStoreConnector.ts#L9)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)\>\>

***

### GetPackageByName()

> **GetPackageByName**(`name`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)\>\>

Defined in: [src/interfaces/modules/server/IStoreConnector.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IStoreConnector.ts#L10)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)\>\>

***

### GetPackageReadme()

> **GetPackageReadme**(`id`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

Defined in: [src/interfaces/modules/server/IStoreConnector.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IStoreConnector.ts#L19)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

***

### GetPublishedStoreItems()

> **GetPublishedStoreItems**(): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>\>

Defined in: [src/interfaces/modules/server/IStoreConnector.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IStoreConnector.ts#L13)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>\>

***

### PublishStoreItem()

> **PublishStoreItem**(`data`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IStoreConnector.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IStoreConnector.ts#L14)

#### Parameters

##### data

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### SearchStoreItems()

> **SearchStoreItems**(`query`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`PartialStoreItem`](../../../../../types/tpa/package/interfaces/PartialStoreItem.md)[]\>\>

Defined in: [src/interfaces/modules/server/IStoreConnector.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IStoreConnector.ts#L18)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`PartialStoreItem`](../../../../../types/tpa/package/interfaces/PartialStoreItem.md)[]\>\>

***

### UpdateStoreItem()

> **UpdateStoreItem**(`id`, `data`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`UpdateResult`](../../../../../types/external/mongo/interfaces/UpdateResult.md)\>\>

Defined in: [src/interfaces/modules/server/IStoreConnector.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IStoreConnector.ts#L15)

#### Parameters

##### id

`string`

##### data

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`UpdateResult`](../../../../../types/external/mongo/interfaces/UpdateResult.md)\>\>
