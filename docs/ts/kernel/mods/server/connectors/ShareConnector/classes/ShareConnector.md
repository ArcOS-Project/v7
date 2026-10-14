[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/server/connectors/ShareConnector](../README.md) / ShareConnector

# Class: ShareConnector

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L20)

## Extends

- [`ServerConnector`](../../classes/ServerConnector.md)

## Implements

- [`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md)

## Constructors

### Constructor

> **new ShareConnector**(`token?`): `ShareConnector`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L14)

#### Parameters

##### token?

`string`

#### Returns

`ShareConnector`

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`constructor`](../../classes/ServerConnector.md#constructor)

## Properties

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L12)

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`name`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#name)

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`name`](../../classes/ServerConnector.md#name)

***

### prefix

> **prefix**: `string` = `"/share"`

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L21)

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

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`server`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#server)

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`server`](../../classes/ServerConnector.md#server)

## Methods

### AccessorPost()

> **AccessorPost**(`shareId`, `path`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:110](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L110)

#### Parameters

##### shareId

`string`

##### path

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`AccessorPost`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#accessorpost)

***

### BulkGet()

> **BulkGet**\<`T`\>(`shareId`, `ext`, `path`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`Record`\<`string`, `T`\>\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:121](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L121)

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

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`Record`\<`string`, `T`\>\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`BulkGet`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#bulkget)

***

### ChangePswdPost()

> **ChangePswdPost**(`shareId`, `newPassword`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:190](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L190)

#### Parameters

##### shareId

`string`

##### newPassword

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`ChangePswdPost`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#changepswdpost)

***

### CpPost()

> **CpPost**(`shareId`, `source`, `destination`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:72](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L72)

#### Parameters

##### shareId

`string`

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`CpPost`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#cppost)

***

### Create()

> **Create**(`name`, `password`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:174](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L174)

#### Parameters

##### name

`string`

##### password

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`Create`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#create)

***

### Delete()

> **Delete**(`shareId`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:182](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L182)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`Delete`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#delete)

***

### DirGet()

> **DirGet**(`shareId`, `path?`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L23)

#### Parameters

##### shareId

`string`

##### path?

`string` = `""`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`DirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/DirectoryReadReturn.md)\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`DirGet`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#dirget)

***

### DirPost()

> **DirPost**(`shareId`, `path`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L31)

#### Parameters

##### shareId

`string`

##### path

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`DirPost`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#dirpost)

***

### FileGet()

> **FileGet**(`shareId`, `path`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`ArrayBuffer`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L39)

#### Parameters

##### shareId

`string`

##### path

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`ArrayBuffer`\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`FileGet`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#fileget)

***

### FilePost()

> **FilePost**(`shareId`, `path`, `blob`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L52)

#### Parameters

##### shareId

`string`

##### path

`string`

##### blob

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`FilePost`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#filepost)

***

### InfoById()

> **InfoById**(`shareId`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:246](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L246)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`InfoById`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#infobyid)

***

### InfoByName()

> **InfoByName**(`username`, `shareName`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:238](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L238)

#### Parameters

##### username

`string`

##### shareName

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`InfoByName`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#infobyname)

***

### JoinedGet()

> **JoinedGet**(): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:166](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L166)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`JoinedGet`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#joinedget)

***

### JoinPost()

> **JoinPost**(`username`, `shareName`, `password`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:206](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L206)

#### Parameters

##### username

`string`

##### shareName

`string`

##### password

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`JoinPost`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#joinpost)

***

### KickPost()

> **KickPost**(`shareId`, `userId`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:222](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L222)

#### Parameters

##### shareId

`string`

##### userId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`KickPost`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#kickpost)

***

### LeavePost()

> **LeavePost**(`shareId`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:214](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L214)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`LeavePost`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#leavepost)

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

### MembersGet()

> **MembersGet**(`shareId`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`Record`\<`string`, `string`\>\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L230)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`Record`\<`string`, `string`\>\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`MembersGet`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#membersget)

***

### MvPost()

> **MvPost**(`shareId`, `source`, `destination`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:83](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L83)

#### Parameters

##### shareId

`string`

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`MvPost`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#mvpost)

***

### OwnedGet()

> **OwnedGet**(): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:158](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L158)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`OwnedGet`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#ownedget)

***

### QuotaGet()

> **QuotaGet**(`shareId`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:102](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L102)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`UserQuota`](../../../../../../../types/system/fs/interfaces/UserQuota.md)\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`QuotaGet`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#quotaget)

***

### RenamePost()

> **RenamePost**(`shareId`, `newName`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:198](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L198)

#### Parameters

##### shareId

`string`

##### newName

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`RenamePost`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#renamepost)

***

### RmDelete()

> **RmDelete**(`shareId`, `path`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:94](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L94)

#### Parameters

##### shareId

`string`

##### path

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`RmDelete`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#rmdelete)

***

### StatGet()

> **StatGet**(`shareId`, `path`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`ExtendedStat`](../../../../../../../types/system/fs/interfaces/ExtendedStat.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:129](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L129)

#### Parameters

##### shareId

`string`

##### path

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`ExtendedStat`](../../../../../../../types/system/fs/interfaces/ExtendedStat.md)\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`StatGet`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#statget)

***

### ThumbnailGet()

> **ThumbnailGet**(`shareId`, `path`, `width`, `height?`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:143](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L143)

#### Parameters

##### shareId

`string`

##### path

`string`

##### width

`number`

##### height?

`number` = `width`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`ThumbnailGet`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#thumbnailget)

***

### TreeGet()

> **TreeGet**(`shareId`, `path?`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`RecursiveDirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/ShareConnector.ts:64](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/ShareConnector.ts#L64)

#### Parameters

##### shareId

`string`

##### path?

`string` = `""`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`RecursiveDirectoryReadReturn`](../../../../../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md)\>\>

#### Implementation of

[`IShareConnector`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md).[`TreeGet`](../../../../../../../interfaces/modules/server/IShareConnector/interfaces/IShareConnector.md#treeget)
