[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/services/IShareManager](../README.md) / IShareManager

# Interface: IShareManager

Defined in: [src/interfaces/services/IShareManager.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L8)

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

### changeSharePassword()

> **changeSharePassword**(`shareId`, `newPassword`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/services/IShareManager.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L14)

#### Parameters

##### shareId

`string`

##### newPassword

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### createShare()

> **createShare**(`name`, `password`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

Defined in: [src/interfaces/services/IShareManager.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L12)

#### Parameters

##### name

`string`

##### password

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

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

### deleteShare()

> **deleteShare**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IShareManager.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L13)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

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

### getJoinedShares()

> **getJoinedShares**(): `Promise`\<[`SharedDriveType`](../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

Defined in: [src/interfaces/services/IShareManager.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L11)

#### Returns

`Promise`\<[`SharedDriveType`](../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

***

### getOwnedShares()

> **getOwnedShares**(): `Promise`\<[`SharedDriveType`](../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

Defined in: [src/interfaces/services/IShareManager.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L9)

#### Returns

`Promise`\<[`SharedDriveType`](../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

***

### getShareInfoById()

> **getShareInfoById**(`shareId`): `Promise`\<[`SharedDriveType`](../../../../types/server/shares/interfaces/SharedDriveType.md) \| `undefined`\>

Defined in: [src/interfaces/services/IShareManager.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L34)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`SharedDriveType`](../../../../types/server/shares/interfaces/SharedDriveType.md) \| `undefined`\>

***

### getShareInfoByName()

> **getShareInfoByName**(`username`, `shareName`): `Promise`\<[`SharedDriveType`](../../../../types/server/shares/interfaces/SharedDriveType.md) \| `undefined`\>

Defined in: [src/interfaces/services/IShareManager.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L33)

#### Parameters

##### username

`string`

##### shareName

`string`

#### Returns

`Promise`\<[`SharedDriveType`](../../../../types/server/shares/interfaces/SharedDriveType.md) \| `undefined`\>

***

### getShareMembers()

> **getShareMembers**(`shareId`): `Promise`\<`Record`\<`string`, `string`\>\>

Defined in: [src/interfaces/services/IShareManager.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L32)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`Record`\<`string`, `string`\>\>

***

### joinShare()

> **joinShare**(`username`, `shareName`, `password`, `mountAlso?`): `Promise`\<`boolean` \| [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md) \| `undefined`\>

Defined in: [src/interfaces/services/IShareManager.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L16)

#### Parameters

##### username

`string`

##### shareName

`string`

##### password

`string`

##### mountAlso?

`boolean`

#### Returns

`Promise`\<`boolean` \| [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md) \| `undefined`\>

***

### kickUserFromShare()

> **kickUserFromShare**(`shareId`, `userId`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IShareManager.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L24)

#### Parameters

##### shareId

`string`

##### userId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`killSelf`](../../../IServiceHost/interfaces/IBaseService.md#killself)

***

### leaveShare()

> **leaveShare**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IShareManager.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L22)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### mountOwnedShares()

> **mountOwnedShares**(): `Promise`\<`void`\>

Defined in: [src/interfaces/services/IShareManager.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L10)

#### Returns

`Promise`\<`void`\>

***

### mountShare()

> **mountShare**(`username`, `shareName`, `letter?`, `onProgress?`): `Promise`\<`false` \| [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md) \| `undefined`\>

Defined in: [src/interfaces/services/IShareManager.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L25)

#### Parameters

##### username

`string`

##### shareName

`string`

##### letter?

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`false` \| [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md) \| `undefined`\>

***

### mountShareById()

> **mountShareById**(`shareId`, `letter?`, `onProgress?`): `Promise`\<`false` \| [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)\>

Defined in: [src/interfaces/services/IShareManager.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L31)

#### Parameters

##### shareId

`string`

##### letter?

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`false` \| [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)\>

***

### renameShare()

> **renameShare**(`shareId`, `newName`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IShareManager.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L15)

#### Parameters

##### shareId

`string`

##### newName

`string`

#### Returns

`Promise`\<`boolean`\>

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

***

### unmountIfMounted()

> **unmountIfMounted**(`shareId`): `Promise`\<`void`\>

Defined in: [src/interfaces/services/IShareManager.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IShareManager.ts#L23)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`void`\>
