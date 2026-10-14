[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [interfaces/modules/server/IShareConnector](../README.md) / IShareConnector

# Interface: IShareConnector

Defined in: [src/interfaces/modules/server/IShareConnector.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L13)

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

### AccessorPost()

> **AccessorPost**(`shareId`, `path`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L23)

#### Parameters

##### shareId

`string`

##### path

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

***

### BulkGet()

> **BulkGet**\<`T`\>(`shareId`, `ext`, `path`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`Record`\<`string`, `T`\>\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L24)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### shareId

`string`

##### ext

`string`

##### path

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`Record`\<`string`, `T`\>\>\>

***

### ChangePswdPost()

> **ChangePswdPost**(`shareId`, `newPassword`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L31)

#### Parameters

##### shareId

`string`

##### newPassword

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### CpPost()

> **CpPost**(`shareId`, `source`, `destination`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L19)

#### Parameters

##### shareId

`string`

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### Create()

> **Create**(`name`, `password`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L29)

#### Parameters

##### name

`string`

##### password

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

***

### Delete()

> **Delete**(`shareId`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L30)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### DirGet()

> **DirGet**(`shareId`, `path?`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`DirectoryReadReturn`](../../../../../types/system/fs/interfaces/DirectoryReadReturn.md)\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L14)

#### Parameters

##### shareId

`string`

##### path?

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`DirectoryReadReturn`](../../../../../types/system/fs/interfaces/DirectoryReadReturn.md)\>\>

***

### DirPost()

> **DirPost**(`shareId`, `path`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L15)

#### Parameters

##### shareId

`string`

##### path

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### FileGet()

> **FileGet**(`shareId`, `path`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`ArrayBuffer`\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L16)

#### Parameters

##### shareId

`string`

##### path

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`ArrayBuffer`\>\>

***

### FilePost()

> **FilePost**(`shareId`, `path`, `blob`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L17)

#### Parameters

##### shareId

`string`

##### path

`string`

##### blob

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### InfoById()

> **InfoById**(`shareId`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L38)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

***

### InfoByName()

> **InfoByName**(`username`, `shareName`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L37)

#### Parameters

##### username

`string`

##### shareName

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

***

### JoinedGet()

> **JoinedGet**(): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L28)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>\>

***

### JoinPost()

> **JoinPost**(`username`, `shareName`, `password`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L33)

#### Parameters

##### username

`string`

##### shareName

`string`

##### password

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### KickPost()

> **KickPost**(`shareId`, `userId`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L35)

#### Parameters

##### shareId

`string`

##### userId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### LeavePost()

> **LeavePost**(`shareId`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L34)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### MembersGet()

> **MembersGet**(`shareId`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`Record`\<`string`, `string`\>\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L36)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`Record`\<`string`, `string`\>\>\>

***

### MvPost()

> **MvPost**(`shareId`, `source`, `destination`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L20)

#### Parameters

##### shareId

`string`

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### OwnedGet()

> **OwnedGet**(): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L27)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>\>

***

### QuotaGet()

> **QuotaGet**(`shareId`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`UserQuota`](../../../../../types/system/fs/interfaces/UserQuota.md)\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L22)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`UserQuota`](../../../../../types/system/fs/interfaces/UserQuota.md)\>\>

***

### RenamePost()

> **RenamePost**(`shareId`, `newName`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L32)

#### Parameters

##### shareId

`string`

##### newName

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### RmDelete()

> **RmDelete**(`shareId`, `path`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L21)

#### Parameters

##### shareId

`string`

##### path

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### StatGet()

> **StatGet**(`shareId`, `path`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`ExtendedStat`](../../../../../types/system/fs/interfaces/ExtendedStat.md)\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L25)

#### Parameters

##### shareId

`string`

##### path

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`ExtendedStat`](../../../../../types/system/fs/interfaces/ExtendedStat.md)\>\>

***

### ThumbnailGet()

> **ThumbnailGet**(`shareId`, `path`, `width`, `height?`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L26)

#### Parameters

##### shareId

`string`

##### path

`string`

##### width

`number`

##### height?

`number`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

***

### TreeGet()

> **TreeGet**(`shareId`, `path?`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`RecursiveDirectoryReadReturn`](../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md)\>\>

Defined in: [src/interfaces/modules/server/IShareConnector.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IShareConnector.ts#L18)

#### Parameters

##### shareId

`string`

##### path?

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`RecursiveDirectoryReadReturn`](../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md)\>\>
