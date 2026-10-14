[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/servicehost/services/DistribSvc](../README.md) / DistributionServiceProcess

# Class: DistributionServiceProcess

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L23)

## Extends

- [`BaseService`](../../../base/classes/BaseService.md)

## Implements

- [`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md)

## Constructors

### Constructor

> **new DistributionServiceProcess**(`pid`, `parentPid`, `name`, `host`, `initBroadcast?`): `DistributionServiceProcess`

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L36)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### name

`string`

##### host

[`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

##### initBroadcast?

(`msg`) => `void`

#### Returns

`DistributionServiceProcess`

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`constructor`](../../../base/classes/BaseService.md#constructor)

## Properties

### \_BUSY

> **\_BUSY**: `string` = `""`

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L28)

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`_BUSY`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#_busy)

***

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`_criticalProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#_criticalprocess)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_criticalProcess`](../../../base/classes/BaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`activated`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#activated)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`activated`](../../../base/classes/BaseService.md#activated)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`dispatch`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#dispatch)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`dispatch`](../../../base/classes/BaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`host`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#host)

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

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`name`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#name)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`name`](../../../base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`parentPid`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#parentpid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`parentPid`](../../../base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`pid`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#pid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`pid`](../../../base/classes/BaseService.md#pid)

***

### preferences

> **preferences**: [`UserPreferencesStore`](../../../../../types/user/type-aliases/UserPreferencesStore.md)

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L32)

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`preferences`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#preferences)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`sourceUrl`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#sourceurl)

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

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`_disposed`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#_disposed)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_disposed`](../../../base/classes/BaseService.md#_disposed)

***

### BUSY

#### Get Signature

> **get** **BUSY**(): `string`

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:66](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L66)

##### Returns

`string`

#### Set Signature

> **set** **BUSY**(`value`): `void`

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:70](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L70)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`BUSY`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#busy)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`MEMORY`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#memory)

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

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`STATE`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#state)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`STATE`](../../../base/classes/BaseService.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`__start`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#__start)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__start`](../../../base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`__stop`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#__stop)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__stop`](../../../base/classes/BaseService.md#__stop)

***

### addPackageToInstalled()

> **addPackageToInstalled**(`item`, `force?`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:170](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L170)

#### Parameters

##### item

[`ArcPackage`](../../../../../types/tpa/package/interfaces/ArcPackage.md)

##### force?

`boolean` = `false`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`addPackageToInstalled`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#addpackagetoinstalled)

***

### addStoreItemToInstalled()

> **addStoreItemToInstalled**(`item`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:83](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L83)

#### Parameters

##### item

[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`addStoreItemToInstalled`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#addstoreitemtoinstalled)

***

### checkBusy()

> **checkBusy**(`action?`): `string`

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L58)

#### Parameters

##### action?

`string`

#### Returns

`string`

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`checkBusy`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#checkbusy)

***

### checkForAllStoreItemUpdates()

> **checkForAllStoreItemUpdates**(`list?`): `Promise`\<[`UpdateInfo`](../../../../../types/tpa/package/interfaces/UpdateInfo.md)[]\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:399](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L399)

#### Parameters

##### list?

[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]

#### Returns

`Promise`\<[`UpdateInfo`](../../../../../types/tpa/package/interfaces/UpdateInfo.md)[]\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`checkForAllStoreItemUpdates`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#checkforallstoreitemupdates)

***

### checkForStoreItemUpdate()

> **checkForStoreItemUpdate**(`id`, `installedList?`, `allPackages?`): `Promise`\<`false` \| [`UpdateInfo`](../../../../../types/tpa/package/interfaces/UpdateInfo.md)\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:381](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L381)

#### Parameters

##### id

`string`

##### installedList?

[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]

##### allPackages?

[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]

#### Returns

`Promise`\<`false` \| [`UpdateInfo`](../../../../../types/tpa/package/interfaces/UpdateInfo.md)\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`checkForStoreItemUpdate`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#checkforstoreitemupdate)

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

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`deactivate`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#deactivate)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`deactivate`](../../../base/classes/BaseService.md#deactivate)

***

### downloadStoreItem()

> **downloadStoreItem**(`id`, `onProgress?`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:460](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L460)

#### Parameters

##### id

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`downloadStoreItem`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#downloadstoreitem)

***

### getAllStoreItems()

> **getAllStoreItems**(): `Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:367](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L367)

#### Returns

`Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`getAllStoreItems`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#getallstoreitems)

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

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`GetConnector`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#getconnector)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`GetConnector`](../../../base/classes/BaseService.md#getconnector)

***

### getInstalledPackageByAppId()

> **getInstalledPackageByAppId**(`id`): `Promise`\<[`ArcPackage`](../../../../../types/tpa/package/interfaces/ArcPackage.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:242](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L242)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ArcPackage`](../../../../../types/tpa/package/interfaces/ArcPackage.md) \| `undefined`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`getInstalledPackageByAppId`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#getinstalledpackagebyappid)

***

### getInstalledStoreItem()

> **getInstalledStoreItem**(`id`, `installedList?`, `noCache?`): `Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:446](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L446)

#### Parameters

##### id

`string`

##### installedList?

[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]

##### noCache?

`boolean`

#### Returns

`Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`getInstalledStoreItem`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#getinstalledstoreitem)

***

### getInstalledStoreItemByAppId()

> **getInstalledStoreItemByAppId**(`id`): `Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:246](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L246)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`getInstalledStoreItemByAppId`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#getinstalledstoreitembyappid)

***

### getInstalledStoreItemById()

> **getInstalledStoreItemById**(`id`): `Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:163](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L163)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`getInstalledStoreItemById`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#getinstalledstoreitembyid)

***

### getInstallerProcess()

> **getInstallerProcess**(`metadata`): [`IInstallerProcessBaseConstructor`](../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBaseConstructor.md)

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:310](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L310)

#### Parameters

##### metadata

[`ArcPackage`](../../../../../types/tpa/package/interfaces/ArcPackage.md)

#### Returns

[`IInstallerProcessBaseConstructor`](../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBaseConstructor.md)

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`getInstallerProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#getinstallerprocess)

***

### getStoreItem()

> **getStoreItem**(`id`): `Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:452](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L452)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`getStoreItem`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#getstoreitem)

***

### getStoreItemByName()

> **getStoreItemByName**(`name`): `Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:456](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L456)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`getStoreItemByName`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#getstoreitembyname)

***

### getStoreItemsByAuthor()

> **getStoreItemsByAuthor**(`userId`): `Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:371](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L371)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`getStoreItemsByAuthor`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#getstoreitemsbyauthor)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`killSelf`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#killself)

#### Inherited from

`BaseService.killSelf`

***

### loadInstalledPackageList()

> **loadInstalledPackageList**(): `Promise`\<[`ArcPackage`](../../../../../types/tpa/package/interfaces/ArcPackage.md)[]\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:192](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L192)

#### Returns

`Promise`\<[`ArcPackage`](../../../../../types/tpa/package/interfaces/ArcPackage.md)[]\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`loadInstalledPackageList`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#loadinstalledpackagelist)

***

### loadInstalledStoreItemList()

> **loadInstalledStoreItemList**(`noCache?`): `Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:113](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L113)

#### Parameters

##### noCache?

`boolean` = `false`

#### Returns

`Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`loadInstalledStoreItemList`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#loadinstalledstoreitemlist)

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

### packageInstaller()

> **packageInstaller**\<`T`\>(`zip`, `metadata`, `item?`, `isUpdate?`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:320](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L320)

#### Type Parameters

##### T

`T` = [`IInstallerProcessBase`](../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md)

#### Parameters

##### zip

`JSZip`

##### metadata

[`ArcPackage`](../../../../../types/tpa/package/interfaces/ArcPackage.md)

##### item?

[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)

##### isUpdate?

`boolean` = `false`

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`packageInstaller`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#packageinstaller)

***

### packageInstallerFromPath()

> **packageInstallerFromPath**\<`T`\>(`path`, `progress?`, `item?`, `isUpdate?`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:283](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L283)

#### Type Parameters

##### T

`T` = [`IInstallerProcessBase`](../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md)

#### Parameters

##### path

`string`

##### progress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

##### item?

[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)

##### isUpdate?

`boolean` = `false`

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`packageInstallerFromPath`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#packageinstallerfrompath)

***

### publishing\_deleteStoreItem()

> **publishing\_deleteStoreItem**(`id`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:541](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L541)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`publishing_deleteStoreItem`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#publishing_deletestoreitem)

***

### publishing\_deprecateStoreItem()

> **publishing\_deprecateStoreItem**(`id`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:535](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L535)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`publishing_deprecateStoreItem`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#publishing_deprecatestoreitem)

***

### publishing\_getPublishedPackages()

> **publishing\_getPublishedPackages**(): `Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:531](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L531)

#### Returns

`Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`publishing_getPublishedPackages`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#publishing_getpublishedpackages)

***

### publishing\_publishPackage()

> **publishing\_publishPackage**(`data`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:501](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L501)

#### Parameters

##### data

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`publishing_publishPackage`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#publishing_publishpackage)

***

### publishing\_publishPackageFromPath()

> **publishing\_publishPackageFromPath**(`path`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:513](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L513)

#### Parameters

##### path

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`publishing_publishPackageFromPath`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#publishing_publishpackagefrompath)

***

### publishing\_updateStoreItem()

> **publishing\_updateStoreItem**(`itemId`, `newData`, `onProgress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:547](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L547)

#### Parameters

##### itemId

`string`

##### newData

`Blob`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`publishing_updateStoreItem`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#publishing_updatestoreitem)

***

### publishing\_updateStoreItemFromPath()

> **publishing\_updateStoreItemFromPath**(`itemId`, `updatePath`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`UpdateResult`](../../../../../types/external/mongo/interfaces/UpdateResult.md)\>\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:560](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L560)

#### Parameters

##### itemId

`string`

##### updatePath

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`UpdateResult`](../../../../../types/external/mongo/interfaces/UpdateResult.md)\>\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`publishing_updateStoreItemFromPath`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#publishing_updatestoreitemfrompath)

***

### removePackageFromInstalled()

> **removePackageFromInstalled**(`id`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:184](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L184)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`removePackageFromInstalled`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#removepackagefrominstalled)

***

### removeStoreItemFromInstalled()

> **removeStoreItemFromInstalled**(`id`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:97](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L97)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`removeStoreItemFromInstalled`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#removestoreitemfrominstalled)

***

### removeStoreItemFromInstalledByAppId()

> **removeStoreItemFromInstalledByAppId**(`id`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:105](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L105)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`removeStoreItemFromInstalledByAppId`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#removestoreitemfrominstalledbyappid)

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

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`requestFileLock`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#requestfilelock)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`requestFileLock`](../../../base/classes/BaseService.md#requestfilelock)

***

### searchStoreItems()

> **searchStoreItems**(`query`): `Promise`\<[`PartialStoreItem`](../../../../../types/tpa/package/interfaces/PartialStoreItem.md)[]\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:440](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L440)

#### Parameters

##### query

`string`

#### Returns

`Promise`\<[`PartialStoreItem`](../../../../../types/tpa/package/interfaces/PartialStoreItem.md)[]\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`searchStoreItems`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#searchstoreitems)

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

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`setSource`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#setsource)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`setSource`](../../../base/classes/BaseService.md#setsource)

***

### start()

> **start**(): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L44)

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`start`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#start)

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`start`](../../../base/classes/BaseService.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`stop`](../../../base/classes/BaseService.md#stop)

***

### storeItemInstaller()

> **storeItemInstaller**(`id`, `onProgress?`, `isUpdate?`): `Promise`\<`false` \| [`IInstallerProcessBase`](../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:470](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L470)

#### Parameters

##### id

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

##### isUpdate?

`boolean` = `false`

#### Returns

`Promise`\<`false` \| [`IInstallerProcessBase`](../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md) \| `undefined`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`storeItemInstaller`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#storeiteminstaller)

***

### storeItemReadme()

> **storeItemReadme**(`id`): `Promise`\<`string`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:377](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L377)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`storeItemReadme`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#storeitemreadme)

***

### uninstallPackage()

> **uninstallPackage**(`appId`, `deleteFiles?`, `onStage?`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:253](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L253)

#### Parameters

##### appId

`string`

##### deleteFiles?

`boolean` = `false`

##### onStage?

(`stage`) => `void`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`uninstallPackage`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#uninstallpackage)

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

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`unlockFile`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#unlockfile)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`unlockFile`](../../../base/classes/BaseService.md#unlockfile)

***

### updateStoreItem()

> **updateStoreItem**\<`T`\>(`id`, `force?`, `progress?`): `Promise`\<`false` \| `T`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:416](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L416)

#### Type Parameters

##### T

`T` = [`IInstallerProcessBase`](../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md)

#### Parameters

##### id

`string`

##### force?

`boolean` = `false`

##### progress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`false` \| `T`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`updateStoreItem`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#updatestoreitem)

***

### validatePackage()

> **validatePackage**(`path`, `progress?`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:332](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L332)

#### Parameters

##### path

`string`

##### progress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`validatePackage`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#validatepackage)

***

### writeInstalledPackageList()

> **writeInstalledPackageList**(`list`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:216](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L216)

#### Parameters

##### list

[`ArcPackage`](../../../../../types/tpa/package/interfaces/ArcPackage.md)[]

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`writeInstalledPackageList`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#writeinstalledpackagelist)

***

### writeInstalledStoreItemList()

> **writeInstalledStoreItemList**(`list`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/index.ts:137](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/index.ts#L137)

#### Parameters

##### list

[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IDistributionServiceProcess`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md).[`writeInstalledStoreItemList`](../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md#writeinstalledstoreitemlist)
