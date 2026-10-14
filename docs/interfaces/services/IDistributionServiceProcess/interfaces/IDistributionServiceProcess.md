[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/services/IDistributionServiceProcess](../README.md) / IDistributionServiceProcess

# Interface: IDistributionServiceProcess

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L12)

## Extends

- [`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md)

## Properties

### \_BUSY

> **\_BUSY**: `string`

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L13)

***

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

### preferences

> **preferences**: [`UserPreferencesStore`](../../../../types/user/type-aliases/UserPreferencesStore.md)

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L14)

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

### BUSY

#### Get Signature

> **get** **BUSY**(): `string`

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L17)

##### Returns

`string`

#### Set Signature

> **set** **BUSY**(`value`): `void`

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L18)

##### Parameters

###### value

`string`

##### Returns

`void`

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

### addPackageToInstalled()

> **addPackageToInstalled**(`item`, `force?`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L25)

#### Parameters

##### item

[`ArcPackage`](../../../../types/tpa/package/interfaces/ArcPackage.md)

##### force?

`boolean`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

***

### addStoreItemToInstalled()

> **addStoreItemToInstalled**(`item`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L19)

#### Parameters

##### item

[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)

#### Returns

`Promise`\<`boolean` \| `undefined`\>

***

### checkBusy()

> **checkBusy**(`action?`): `string`

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L16)

#### Parameters

##### action?

`string`

#### Returns

`string`

***

### checkForAllStoreItemUpdates()

> **checkForAllStoreItemUpdates**(`list?`): `Promise`\<[`UpdateInfo`](../../../../types/tpa/package/interfaces/UpdateInfo.md)[]\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L50)

#### Parameters

##### list?

[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]

#### Returns

`Promise`\<[`UpdateInfo`](../../../../types/tpa/package/interfaces/UpdateInfo.md)[]\>

***

### checkForStoreItemUpdate()

> **checkForStoreItemUpdate**(`id`, `installedList?`, `allPackages?`): `Promise`\<`false` \| [`UpdateInfo`](../../../../types/tpa/package/interfaces/UpdateInfo.md)\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L49)

#### Parameters

##### id

`string`

##### installedList?

[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]

##### allPackages?

[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]

#### Returns

`Promise`\<`false` \| [`UpdateInfo`](../../../../types/tpa/package/interfaces/UpdateInfo.md)\>

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

### downloadStoreItem()

> **downloadStoreItem**(`id`, `onProgress?`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L60)

#### Parameters

##### id

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

***

### getAllStoreItems()

> **getAllStoreItems**(): `Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L46)

#### Returns

`Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

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

### getInstalledPackageByAppId()

> **getInstalledPackageByAppId**(`id`): `Promise`\<[`ArcPackage`](../../../../types/tpa/package/interfaces/ArcPackage.md) \| `undefined`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L29)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ArcPackage`](../../../../types/tpa/package/interfaces/ArcPackage.md) \| `undefined`\>

***

### getInstalledStoreItem()

> **getInstalledStoreItem**(`id`, `installedList?`, `noCache?`): `Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L57)

#### Parameters

##### id

`string`

##### installedList?

[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]

##### noCache?

`boolean`

#### Returns

`Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)\>

***

### getInstalledStoreItemByAppId()

> **getInstalledStoreItemByAppId**(`id`): `Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L30)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

***

### getInstalledStoreItemById()

> **getInstalledStoreItemById**(`id`): `Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L24)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

***

### getInstallerProcess()

> **getInstallerProcess**(`metadata`): [`Constructs`](../../../common/interfaces/Constructs.md)\<[`IInstallerProcessBase`](../../../IInstallerProcessBase/interfaces/IInstallerProcessBase.md)\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L38)

#### Parameters

##### metadata

[`ArcPackage`](../../../../types/tpa/package/interfaces/ArcPackage.md)

#### Returns

[`Constructs`](../../../common/interfaces/Constructs.md)\<[`IInstallerProcessBase`](../../../IInstallerProcessBase/interfaces/IInstallerProcessBase.md)\>

***

### getStoreItem()

> **getStoreItem**(`id`): `Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L58)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

***

### getStoreItemByName()

> **getStoreItemByName**(`name`): `Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L59)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

***

### getStoreItemsByAuthor()

> **getStoreItemsByAuthor**(`userId`): `Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L47)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`killSelf`](../../../IServiceHost/interfaces/IBaseService.md#killself)

***

### loadInstalledPackageList()

> **loadInstalledPackageList**(): `Promise`\<[`ArcPackage`](../../../../types/tpa/package/interfaces/ArcPackage.md)[]\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L27)

#### Returns

`Promise`\<[`ArcPackage`](../../../../types/tpa/package/interfaces/ArcPackage.md)[]\>

***

### loadInstalledStoreItemList()

> **loadInstalledStoreItemList**(`noCache?`): `Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L22)

#### Parameters

##### noCache?

`boolean`

#### Returns

`Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

***

### packageInstaller()

> **packageInstaller**\<`T`\>(`zip`, `metadata`, `item?`, `isUpdate?`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L39)

#### Type Parameters

##### T

`T` = [`IInstallerProcessBase`](../../../IInstallerProcessBase/interfaces/IInstallerProcessBase.md)

#### Parameters

##### zip

`JSZip`

##### metadata

[`ArcPackage`](../../../../types/tpa/package/interfaces/ArcPackage.md)

##### item?

[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)

##### isUpdate?

`boolean`

#### Returns

`Promise`\<`T` \| `undefined`\>

***

### packageInstallerFromPath()

> **packageInstallerFromPath**\<`T`\>(`path`, `progress?`, `item?`, `isUpdate?`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L32)

#### Type Parameters

##### T

`T` = [`IInstallerProcessBase`](../../../IInstallerProcessBase/interfaces/IInstallerProcessBase.md)

#### Parameters

##### path

`string`

##### progress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

##### item?

[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)

##### isUpdate?

`boolean`

#### Returns

`Promise`\<`T` \| `undefined`\>

***

### publishing\_deleteStoreItem()

> **publishing\_deleteStoreItem**(`id`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:70](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L70)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

***

### publishing\_deprecateStoreItem()

> **publishing\_deprecateStoreItem**(`id`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:69](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L69)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

***

### publishing\_getPublishedPackages()

> **publishing\_getPublishedPackages**(): `Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:68](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L68)

#### Returns

`Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

***

### publishing\_publishPackage()

> **publishing\_publishPackage**(`data`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:66](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L66)

#### Parameters

##### data

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

***

### publishing\_publishPackageFromPath()

> **publishing\_publishPackageFromPath**(`path`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L67)

#### Parameters

##### path

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

***

### publishing\_updateStoreItem()

> **publishing\_updateStoreItem**(`itemId`, `newData`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L71)

#### Parameters

##### itemId

`string`

##### newData

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

***

### publishing\_updateStoreItemFromPath()

> **publishing\_updateStoreItemFromPath**(`itemId`, `updatePath`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`UpdateResult`](../../../../types/external/mongo/interfaces/UpdateResult.md)\>\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:72](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L72)

#### Parameters

##### itemId

`string`

##### updatePath

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`UpdateResult`](../../../../types/external/mongo/interfaces/UpdateResult.md)\>\>

***

### removePackageFromInstalled()

> **removePackageFromInstalled**(`id`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L26)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

***

### removeStoreItemFromInstalled()

> **removeStoreItemFromInstalled**(`id`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L20)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

***

### removeStoreItemFromInstalledByAppId()

> **removeStoreItemFromInstalledByAppId**(`id`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L21)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

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

### searchStoreItems()

> **searchStoreItems**(`query`): `Promise`\<[`PartialStoreItem`](../../../../types/tpa/package/interfaces/PartialStoreItem.md)[]\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L56)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`PartialStoreItem`](../../../../types/tpa/package/interfaces/PartialStoreItem.md)[]\>

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

### start()

> **start**(): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L15)

#### Returns

`Promise`\<`false` \| `undefined`\>

***

### storeItemInstaller()

> **storeItemInstaller**(`id`, `onProgress?`, `isUpdate?`): `Promise`\<`false` \| [`IInstallerProcessBase`](../../../IInstallerProcessBase/interfaces/IInstallerProcessBase.md) \| `undefined`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L61)

#### Parameters

##### id

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

##### isUpdate?

`boolean`

#### Returns

`Promise`\<`false` \| [`IInstallerProcessBase`](../../../IInstallerProcessBase/interfaces/IInstallerProcessBase.md) \| `undefined`\>

***

### storeItemReadme()

> **storeItemReadme**(`id`): `Promise`\<`string`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L48)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`string`\>

***

### uninstallPackage()

> **uninstallPackage**(`appId`, `deleteFiles?`, `onStage?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L31)

#### Parameters

##### appId

`string`

##### deleteFiles?

`boolean`

##### onStage?

(`stage`) => `void`

#### Returns

`Promise`\<`boolean`\>

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

### updateStoreItem()

> **updateStoreItem**\<`T`\>(`id`, `force?`, `progress?`): `Promise`\<`false` \| `T`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L51)

#### Type Parameters

##### T

`T` = [`IInstallerProcessBase`](../../../IInstallerProcessBase/interfaces/IInstallerProcessBase.md)

#### Parameters

##### id

`string`

##### force?

`boolean`

##### progress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`false` \| `T`\>

***

### validatePackage()

> **validatePackage**(`path`, `progress?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L45)

#### Parameters

##### path

`string`

##### progress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

***

### writeInstalledPackageList()

> **writeInstalledPackageList**(`list`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L28)

#### Parameters

##### list

[`ArcPackage`](../../../../types/tpa/package/interfaces/ArcPackage.md)[]

#### Returns

`Promise`\<`boolean`\>

***

### writeInstalledStoreItemList()

> **writeInstalledStoreItemList**(`list`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IDistributionServiceProcess.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IDistributionServiceProcess.ts#L23)

#### Parameters

##### list

[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]

#### Returns

`Promise`\<`boolean`\>
