[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/fs/shares](../README.md) / ShareManager

# Class: ShareManager

Defined in: [src/ts/fs/shares/index.ts:11](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L11)

## Extends

- [`BaseService`](../../../services/base/classes/BaseService.md)

## Constructors

### Constructor

> **new ShareManager**(`handler`, `pid`, `parentPid`, `name`, `host`): `ShareManager`

Defined in: [src/ts/fs/shares/index.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L14)

#### Parameters

##### handler

[`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

##### name

`string`

##### host

[`ServiceHost`](../../../services/classes/ServiceHost.md)

#### Returns

`ShareManager`

#### Overrides

[`BaseService`](../../../services/base/classes/BaseService.md).[`constructor`](../../../services/base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L22)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`_criticalProcess`](../../../services/base/classes/BaseService.md#_criticalprocess)

***

### \_disposed

> **\_disposed**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L21)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`_disposed`](../../../services/base/classes/BaseService.md#_disposed)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/services/base.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/base.ts#L7)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`activated`](../../../services/base/classes/BaseService.md#activated)

***

### dispatch

> **dispatch**: [`ProcessDispatch`](../../../process/dispatch/classes/ProcessDispatch.md)

Defined in: [src/ts/process/instance.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L15)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`dispatch`](../../../services/base/classes/BaseService.md#dispatch)

***

### env

> **env**: [`Environment`](../../../kernel/env/classes/Environment.md)

Defined in: [src/ts/process/instance.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L12)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`env`](../../../services/base/classes/BaseService.md#env)

***

### fs

> **fs**: [`Filesystem`](../../classes/Filesystem.md)

Defined in: [src/ts/process/instance.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L23)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`fs`](../../../services/base/classes/BaseService.md#fs)

***

### handler

> **handler**: [`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)

Defined in: [src/ts/process/instance.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L14)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`handler`](../../../services/base/classes/BaseService.md#handler)

***

### host

> **host**: [`ServiceHost`](../../../services/classes/ServiceHost.md)

Defined in: [src/ts/services/base.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/base.ts#L6)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`host`](../../../services/base/classes/BaseService.md#host)

***

### kernel

> **kernel**: [`WaveKernel`](../../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/process/instance.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L17)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`kernel`](../../../services/base/classes/BaseService.md#kernel)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/process/instance.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L20)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`name`](../../../services/base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/process/instance.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L19)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`parentPid`](../../../services/base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/process/instance.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L18)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`pid`](../../../services/base/classes/BaseService.md#pid)

***

### soundBus

> **soundBus**: [`SoundBus`](../../../soundbus/classes/SoundBus.md)

Defined in: [src/ts/process/instance.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L13)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`soundBus`](../../../services/base/classes/BaseService.md#soundbus)

***

### systemDispatch

> **systemDispatch**: [`SystemDispatch`](../../../dispatch/classes/SystemDispatch.md)

Defined in: [src/ts/process/instance.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L16)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`systemDispatch`](../../../services/base/classes/BaseService.md#systemdispatch)

***

### token

> **token**: `undefined` \| `string`

Defined in: [src/ts/fs/shares/index.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L12)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L48)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`__start`](../../../services/base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:54](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L54)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`__stop`](../../../services/base/classes/BaseService.md#__stop)

***

### \_activate()

> **\_activate**(...`args`): `Promise`\<`void`\>

Defined in: [src/ts/services/base.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/base.ts#L16)

#### Parameters

##### args

...`any`[]

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`_activate`](../../../services/base/classes/BaseService.md#_activate)

***

### activate()

> **activate**(`token`): `Promise`\<`void`\>

Defined in: [src/ts/fs/shares/index.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L18)

#### Parameters

##### token

`string`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`BaseService`](../../../services/base/classes/BaseService.md).[`activate`](../../../services/base/classes/BaseService.md#activate)

***

### afterActivate()

> **afterActivate**(): `Promise`\<`void`\>

Defined in: [src/ts/services/base.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/base.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`afterActivate`](../../../services/base/classes/BaseService.md#afteractivate)

***

### changeSharePassword()

> **changeSharePassword**(`shareId`, `newPassword`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/shares/index.ts:72](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L72)

#### Parameters

##### shareId

`string`

##### newPassword

`string`

#### Returns

`Promise`\<`boolean`\>

***

### createShare()

> **createShare**(`name`, `password`): `Promise`\<`undefined` \| [`SharedDriveType`](../../../../types/shares/interfaces/SharedDriveType.md)\>

Defined in: [src/ts/fs/shares/index.ts:50](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L50)

#### Parameters

##### name

`string`

##### password

`string`

#### Returns

`Promise`\<`undefined` \| [`SharedDriveType`](../../../../types/shares/interfaces/SharedDriveType.md)\>

***

### deleteShare()

> **deleteShare**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/shares/index.ts:62](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L62)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### getJoinedShares()

> **getJoinedShares**(): `Promise`\<[`SharedDriveType`](../../../../types/shares/interfaces/SharedDriveType.md)[]\>

Defined in: [src/ts/fs/shares/index.ts:40](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L40)

#### Returns

`Promise`\<[`SharedDriveType`](../../../../types/shares/interfaces/SharedDriveType.md)[]\>

***

### getOwnedShares()

> **getOwnedShares**(): `Promise`\<[`SharedDriveType`](../../../../types/shares/interfaces/SharedDriveType.md)[]\>

Defined in: [src/ts/fs/shares/index.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L22)

#### Returns

`Promise`\<[`SharedDriveType`](../../../../types/shares/interfaces/SharedDriveType.md)[]\>

***

### getShareInfoById()

> **getShareInfoById**(`shareId`): `Promise`\<`undefined` \| [`SharedDriveType`](../../../../types/shares/interfaces/SharedDriveType.md)\>

Defined in: [src/ts/fs/shares/index.ts:179](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L179)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`undefined` \| [`SharedDriveType`](../../../../types/shares/interfaces/SharedDriveType.md)\>

***

### getShareInfoByName()

> **getShareInfoByName**(`username`, `shareName`): `Promise`\<`undefined` \| [`SharedDriveType`](../../../../types/shares/interfaces/SharedDriveType.md)\>

Defined in: [src/ts/fs/shares/index.ts:167](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L167)

#### Parameters

##### username

`string`

##### shareName

`string`

#### Returns

`Promise`\<`undefined` \| [`SharedDriveType`](../../../../types/shares/interfaces/SharedDriveType.md)\>

***

### getShareMembers()

> **getShareMembers**(`shareId`): `Promise`\<`Record`\<`string`, `string`\>\>

Defined in: [src/ts/fs/shares/index.ts:157](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L157)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`Record`\<`string`, `string`\>\>

***

### joinShare()

> **joinShare**(`username`, `shareName`, `password`, `mountAlso`): `Promise`\<`boolean` \| [`FilesystemDrive`](../../drive/classes/FilesystemDrive.md)\>

Defined in: [src/ts/fs/shares/index.ts:96](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L96)

#### Parameters

##### username

`string`

##### shareName

`string`

##### password

`string`

##### mountAlso

`boolean` = `false`

#### Returns

`Promise`\<`boolean` \| [`FilesystemDrive`](../../drive/classes/FilesystemDrive.md)\>

***

### kickUserFromShare()

> **kickUserFromShare**(`shareId`, `userId`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/shares/index.ts:131](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L131)

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

Defined in: [src/ts/process/instance.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L60)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`killSelf`](../../../services/base/classes/BaseService.md#killself)

***

### leaveShare()

> **leaveShare**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/shares/index.ts:113](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L113)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### Log()

> `protected` **Log**(`message`, `level`): `void`

Defined in: [src/ts/process/instance.ts:67](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L67)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`Log`](../../../services/base/classes/BaseService.md#log)

***

### mountOwnedShares()

> **mountOwnedShares**(): `Promise`\<`void`\>

Defined in: [src/ts/fs/shares/index.ts:32](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L32)

#### Returns

`Promise`\<`void`\>

***

### mountShare()

> **mountShare**(`username`, `shareName`, `letter?`, `onProgress?`): `Promise`\<`false` \| [`FilesystemDrive`](../../drive/classes/FilesystemDrive.md)\>

Defined in: [src/ts/fs/shares/index.ts:143](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L143)

#### Parameters

##### username

`string`

##### shareName

`string`

##### letter?

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`false` \| [`FilesystemDrive`](../../drive/classes/FilesystemDrive.md)\>

***

### mountShareById()

> **mountShareById**(`shareId`, `letter?`, `onProgress?`): `Promise`\<`false` \| [`FilesystemDrive`](../../drive/classes/FilesystemDrive.md)\>

Defined in: [src/ts/fs/shares/index.ts:150](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L150)

#### Parameters

##### shareId

`string`

##### letter?

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`false` \| [`FilesystemDrive`](../../drive/classes/FilesystemDrive.md)\>

***

### renameShare()

> **renameShare**(`shareId`, `newName`): `Promise`\<`boolean`\>

Defined in: [src/ts/fs/shares/index.ts:84](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L84)

#### Parameters

##### shareId

`string`

##### newName

`string`

#### Returns

`Promise`\<`boolean`\>

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/process/instance.ts:73](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L73)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `false`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`requestFileLock`](../../../services/base/classes/BaseService.md#requestfilelock)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L44)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`start`](../../../services/base/classes/BaseService.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:40](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L40)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`stop`](../../../services/base/classes/BaseService.md#stop)

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/process/instance.ts:85](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L85)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `false`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`unlockFile`](../../../services/base/classes/BaseService.md#unlockfile)

***

### unmountIfMounted()

> **unmountIfMounted**(`shareId`): `Promise`\<`void`\>

Defined in: [src/ts/fs/shares/index.ts:125](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/fs/shares/index.ts#L125)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`void`\>
