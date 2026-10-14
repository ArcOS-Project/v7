[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/servicehost/services/ShareMgmt](../README.md) / ShareManager

# Class: ShareManager

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L12)

## Extends

- [`BaseService`](../../../base/classes/BaseService.md)

## Implements

- [`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md)

## Constructors

### Constructor

> **new ShareManager**(`pid`, `parentPid`, `name`, `host`): `ShareManager`

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L19)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### name

`string`

##### host

[`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

#### Returns

`ShareManager`

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`constructor`](../../../base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`_criticalProcess`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#_criticalprocess)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_criticalProcess`](../../../base/classes/BaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`activated`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#activated)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`activated`](../../../base/classes/BaseService.md#activated)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`dispatch`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#dispatch)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`dispatch`](../../../base/classes/BaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`host`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#host)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`host`](../../../base/classes/BaseService.md#host)

***

### initBroadcast?

> `optional` **initBroadcast?**: (`msg`) => `void`

Defined in: [src/ts/servicehost/base.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L10)

#### Parameters

##### msg

`string`

#### Returns

`void`

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`initBroadcast`](../../../base/classes/BaseService.md#initbroadcast)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`name`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#name)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`name`](../../../base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`parentPid`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#parentpid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`parentPid`](../../../base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`pid`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#pid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`pid`](../../../base/classes/BaseService.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`sourceUrl`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#sourceurl)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`sourceUrl`](../../../base/classes/BaseService.md#sourceurl)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`_disposed`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#_disposed)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_disposed`](../../../base/classes/BaseService.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`MEMORY`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#memory)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`MEMORY`](../../../base/classes/BaseService.md#memory)

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/servicehost/base.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L12)

##### Returns

[`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`shell`](../../../base/classes/BaseService.md#shell)

***

### STATE

#### Get Signature

> **get** **STATE**(): [`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L17)

##### Returns

[`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

#### Set Signature

> **set** **STATE**(`value`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L21)

##### Parameters

###### value

[`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

##### Returns

`void`

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`STATE`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#state)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`STATE`](../../../base/classes/BaseService.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`__start`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#__start)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__start`](../../../base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`__stop`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#__stop)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__stop`](../../../base/classes/BaseService.md#__stop)

***

### changeSharePassword()

> **changeSharePassword**(`shareId`, `newPassword`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L60)

#### Parameters

##### shareId

`string`

##### newPassword

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`changeSharePassword`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#changesharepassword)

***

### createShare()

> **createShare**(`name`, `password`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L52)

#### Parameters

##### name

`string`

##### password

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)\>\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`createShare`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#createshare)

***

### deactivate()

> **deactivate**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/base.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L30)

#### Parameters

##### broadcast?

(`m`) => `void`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`deactivate`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#deactivate)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`deactivate`](../../../base/classes/BaseService.md#deactivate)

***

### deleteShare()

> **deleteShare**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L56)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`deleteShare`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#deleteshare)

***

### GetConnector()

> **GetConnector**\<`T`\>(`name`): `T`

Defined in: [src/ts/servicehost/base.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L16)

#### Type Parameters

##### T

`T` *extends* [`IServerConnector`](../../../../../interfaces/modules/IServerManager/classes/IServerConnector.md)

#### Parameters

##### name

`string`

#### Returns

`T`

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`GetConnector`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#getconnector)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`GetConnector`](../../../base/classes/BaseService.md#getconnector)

***

### getJoinedShares()

> **getJoinedShares**(): `Promise`\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L48)

#### Returns

`Promise`\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`getJoinedShares`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#getjoinedshares)

***

### getOwnedShares()

> **getOwnedShares**(): `Promise`\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L36)

#### Returns

`Promise`\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`getOwnedShares`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#getownedshares)

***

### getShareInfoById()

> **getShareInfoById**(`shareId`): `Promise`\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:124](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L124)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md) \| `undefined`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`getShareInfoById`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#getshareinfobyid)

***

### getShareInfoByName()

> **getShareInfoByName**(`username`, `shareName`): `Promise`\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:120](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L120)

#### Parameters

##### username

`string`

##### shareName

`string`

#### Returns

`Promise`\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md) \| `undefined`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`getShareInfoByName`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#getshareinfobyname)

***

### getShareMembers()

> **getShareMembers**(`shareId`): `Promise`\<`Record`\<`string`, `string`\>\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L116)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`Record`\<`string`, `string`\>\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`getShareMembers`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#getsharemembers)

***

### joinShare()

> **joinShare**(`username`, `shareName`, `password`, `mountAlso?`): `Promise`\<`boolean` \| [`SharedDrive`](../../../../kernel/mods/fs/drives/share/classes/SharedDrive.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:68](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L68)

#### Parameters

##### username

`string`

##### shareName

`string`

##### password

`string`

##### mountAlso?

`boolean` = `false`

#### Returns

`Promise`\<`boolean` \| [`SharedDrive`](../../../../kernel/mods/fs/drives/share/classes/SharedDrive.md) \| `undefined`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`joinShare`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#joinshare)

***

### kickUserFromShare()

> **kickUserFromShare**(`shareId`, `userId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:87](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L87)

#### Parameters

##### shareId

`string`

##### userId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`kickUserFromShare`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#kickuserfromshare)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`killSelf`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#killself)

#### Inherited from

`BaseService.killSelf`

***

### leaveShare()

> **leaveShare**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:77](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L77)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`leaveShare`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#leaveshare)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L85)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`Log`](../../../base/classes/BaseService.md#log)

***

### mountOwnedShares()

> **mountOwnedShares**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L40)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`mountOwnedShares`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#mountownedshares)

***

### mountShare()

> **mountShare**(`username`, `shareName`, `letter?`, `onProgress?`): `Promise`\<`false` \| [`SharedDrive`](../../../../kernel/mods/fs/drives/share/classes/SharedDrive.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L91)

#### Parameters

##### username

`string`

##### shareName

`string`

##### letter?

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`false` \| [`SharedDrive`](../../../../kernel/mods/fs/drives/share/classes/SharedDrive.md) \| `undefined`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`mountShare`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#mountshare)

***

### mountShareById()

> **mountShareById**(`shareId`, `letter?`, `onProgress?`): `Promise`\<`false` \| [`SharedDrive`](../../../../kernel/mods/fs/drives/share/classes/SharedDrive.md)\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:101](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L101)

#### Parameters

##### shareId

`string`

##### letter?

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`false` \| [`SharedDrive`](../../../../kernel/mods/fs/drives/share/classes/SharedDrive.md)\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`mountShareById`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#mountsharebyid)

***

### renameShare()

> **renameShare**(`shareId`, `newName`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:64](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L64)

#### Parameters

##### shareId

`string`

##### newName

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`renameShare`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#renameshare)

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L91)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`requestFileLock`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#requestfilelock)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`requestFileLock`](../../../base/classes/BaseService.md#requestfilelock)

***

### setSource()

> **setSource**(`source`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:115](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L115)

#### Parameters

##### source

`string`

#### Returns

`void`

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`setSource`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#setsource)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`setSource`](../../../base/classes/BaseService.md#setsource)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L25)

#### Returns

`Promise`\<`any`\>

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`start`](../../../base/classes/BaseService.md#start)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L30)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`stop`](../../../base/classes/BaseService.md#stop)

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L103)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`unlockFile`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#unlockfile)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`unlockFile`](../../../base/classes/BaseService.md#unlockfile)

***

### unmountIfMounted()

> **unmountIfMounted**(`shareId`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/ShareMgmt/index.ts:81](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/ShareMgmt/index.ts#L81)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IShareManager`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md).[`unmountIfMounted`](../../../../../interfaces/services/IShareManager/interfaces/IShareManager.md#unmountifmounted)
