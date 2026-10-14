[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/servicehost/services/DistribSvc/installer/libraryinstaller](../README.md) / LibraryInstallerProcess

# Class: LibraryInstallerProcess

Defined in: [src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts#L13)

## Extends

- [`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md)

## Implements

- [`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md)

## Constructors

### Constructor

> **new LibraryInstallerProcess**(`pid`, `parentPid`, `zip`, `metadata`, `item`): `LibraryInstallerProcess`

Defined in: [src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts#L18)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### zip

`JSZip`

##### metadata

[`ArcPackage`](../../../../../../../types/tpa/package/interfaces/ArcPackage.md)

##### item

[`StoreItem`](../../../../../../../types/tpa/package/interfaces/StoreItem.md)

#### Returns

`LibraryInstallerProcess`

#### Overrides

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`constructor`](../../base/classes/InstallerProcessBase.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`_criticalProcess`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#_criticalprocess)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`_criticalProcess`](../../base/classes/InstallerProcessBase.md#_criticalprocess)

***

### completed

> **completed**: [`ReadableStore`](../../../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L23)

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`completed`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#completed)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`completed`](../../base/classes/InstallerProcessBase.md#completed)

***

### COUNT

> **COUNT**: [`ReadableStore`](../../../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`number`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L24)

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`COUNT`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#count)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`COUNT`](../../base/classes/InstallerProcessBase.md#count)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`dispatch`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#dispatch)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`dispatch`](../../base/classes/InstallerProcessBase.md#dispatch)

***

### failReason

> **failReason**: [`ReadableStore`](../../../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L20)

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`failReason`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#failreason)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`failReason`](../../base/classes/InstallerProcessBase.md#failreason)

***

### focused

> **focused**: [`ReadableStore`](../../../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L25)

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`focused`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#focused)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`focused`](../../base/classes/InstallerProcessBase.md#focused)

***

### installing

> **installing**: [`ReadableStore`](../../../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L21)

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`installing`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#installing)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`installing`](../../base/classes/InstallerProcessBase.md#installing)

***

### isUpdate

> `protected` **isUpdate**: `boolean` = `false`

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L18)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`isUpdate`](../../base/classes/InstallerProcessBase.md#isupdate)

***

### item?

> `protected` `optional` **item?**: [`StoreItem`](../../../../../../../types/tpa/package/interfaces/StoreItem.md)

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L14)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`item`](../../base/classes/InstallerProcessBase.md#item)

***

### library?

> `optional` **library?**: [`TpaLibrary`](../../../../../../../types/tpa/libraries/interfaces/TpaLibrary.md)

Defined in: [src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts#L14)

***

### metadata?

> `protected` `optional` **metadata?**: [`ArcPackage`](../../../../../../../types/tpa/package/interfaces/ArcPackage.md)

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L13)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`metadata`](../../base/classes/InstallerProcessBase.md#metadata)

***

### MISC\_STEPCOUNT

> `protected` **MISC\_STEPCOUNT**: `number` = `2`

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L17)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`MISC_STEPCOUNT`](../../base/classes/InstallerProcessBase.md#misc_stepcount)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`name`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#name)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`name`](../../base/classes/InstallerProcessBase.md#name)

***

### parent

> **parent**: [`IDistributionServiceProcess`](../../../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md)

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L19)

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`parent`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#parent)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`parent`](../../base/classes/InstallerProcessBase.md#parent)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`parentPid`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#parentpid)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`parentPid`](../../base/classes/InstallerProcessBase.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`pid`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#pid)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`pid`](../../base/classes/InstallerProcessBase.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`sourceUrl`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#sourceurl)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`sourceUrl`](../../base/classes/InstallerProcessBase.md#sourceurl)

***

### status

> **status**: [`ReadableStore`](../../../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`InstallStatus`](../../../../../../../types/tpa/package/type-aliases/InstallStatus.md)\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L26)

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`status`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#status)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`status`](../../base/classes/InstallerProcessBase.md#status)

***

### TOTAL\_COUNT

> **TOTAL\_COUNT**: [`ReadableStore`](../../../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`number`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L22)

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`TOTAL_COUNT`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#total_count)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`TOTAL_COUNT`](../../base/classes/InstallerProcessBase.md#total_count)

***

### verboseLog

> `protected` **verboseLog**: `string`[] = `[]`

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L12)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`verboseLog`](../../base/classes/InstallerProcessBase.md#verboselog)

***

### workingDirectory

> `protected` **workingDirectory**: `string` = `""`

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L15)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`workingDirectory`](../../base/classes/InstallerProcessBase.md#workingdirectory)

***

### zip?

> `protected` `optional` **zip?**: `JSZip`

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L16)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`zip`](../../base/classes/InstallerProcessBase.md#zip)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`_disposed`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#_disposed)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`_disposed`](../../base/classes/InstallerProcessBase.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`MEMORY`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#memory)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`MEMORY`](../../base/classes/InstallerProcessBase.md#memory)

***

### STATE

#### Get Signature

> **get** **STATE**(): [`ProcessState`](../../../../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L17)

##### Returns

[`ProcessState`](../../../../../../../types/system/process/type-aliases/ProcessState.md)

#### Set Signature

> **set** **STATE**(`value`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L21)

##### Parameters

###### value

[`ProcessState`](../../../../../../../types/system/process/type-aliases/ProcessState.md)

##### Returns

`void`

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`STATE`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#state)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`STATE`](../../base/classes/InstallerProcessBase.md#state)

## Methods

### \_\_go()

> **\_\_go**(): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:140](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L140)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`__go`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#__go)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`__go`](../../base/classes/InstallerProcessBase.md#__go)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`__start`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#__start)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`__start`](../../base/classes/InstallerProcessBase.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`__stop`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#__stop)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`__stop`](../../base/classes/InstallerProcessBase.md#__stop)

***

### afterFailedInstallation()

> `protected` **afterFailedInstallation**(): `Promise`\<`any`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L76)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`afterFailedInstallation`](../../base/classes/InstallerProcessBase.md#afterfailedinstallation)

***

### afterSuccessfulInstallation()

> `protected` **afterSuccessfulInstallation**(): `Promise`\<`any`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts#L35)

#### Returns

`Promise`\<`any`\>

#### Overrides

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`afterSuccessfulInstallation`](../../base/classes/InstallerProcessBase.md#aftersuccessfulinstallation)

***

### createInstallLocation()

> **createInstallLocation**(): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:216](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L216)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`createInstallLocation`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#createinstalllocation)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`createInstallLocation`](../../base/classes/InstallerProcessBase.md#createinstalllocation)

***

### fail()

> **fail**(`reason`): `void`

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:129](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L129)

#### Parameters

##### reason

`string`

#### Returns

`void`

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`fail`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#fail)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`fail`](../../base/classes/InstallerProcessBase.md#fail)

***

### getFiles()

> **getFiles**(): `Promise`\<\{ `files`: \{\[`k`: `string`\]: `JSZipObject`; \}; `sortedPaths`: `string`[]; \}\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:231](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L231)

#### Returns

`Promise`\<\{ `files`: \{\[`k`: `string`\]: `JSZipObject`; \}; `sortedPaths`: `string`[]; \}\>

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`getFiles`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#getfiles)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`getFiles`](../../base/classes/InstallerProcessBase.md#getfiles)

***

### go()

> **go**(): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts#L43)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`go`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#go)

#### Overrides

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`go`](../../base/classes/InstallerProcessBase.md#go)

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts#L26)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`initialize`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#initialize)

#### Overrides

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`initialize`](../../base/classes/InstallerProcessBase.md#initialize)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`killSelf`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#killself)

#### Inherited from

`InstallerProcessBase.killSelf`

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L85)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`Log`](../../base/classes/InstallerProcessBase.md#log)

***

### logStatus()

> **logStatus**(`content`, `type?`, `status?`): `void`

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L91)

#### Parameters

##### content

`string`

##### type?

[`InstallStatusType`](../../../../../../../types/tpa/package/type-aliases/InstallStatusType.md) = `"other"`

##### status?

[`InstallStatusMode`](../../../../../../../types/tpa/package/type-aliases/InstallStatusMode.md) = `"working"`

#### Returns

`void`

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`logStatus`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#logstatus)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`logStatus`](../../base/classes/InstallerProcessBase.md#logstatus)

***

### mkdir()

> **mkdir**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:175](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L175)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`mkdir`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#mkdir)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`mkdir`](../../base/classes/InstallerProcessBase.md#mkdir)

***

### onStop()

> **onStop**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L85)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`onStop`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#onstop)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`onStop`](../../base/classes/InstallerProcessBase.md#onstop)

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

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`requestFileLock`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#requestfilelock)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`requestFileLock`](../../base/classes/InstallerProcessBase.md#requestfilelock)

***

### setCurrentContent()

> **setCurrentContent**(`content`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:118](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L118)

#### Parameters

##### content

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`setCurrentContent`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#setcurrentcontent)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`setCurrentContent`](../../base/classes/InstallerProcessBase.md#setcurrentcontent)

***

### setCurrentStatus()

> **setCurrentStatus**(`status`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:107](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L107)

#### Parameters

##### status

[`InstallStatusMode`](../../../../../../../types/tpa/package/type-aliases/InstallStatusMode.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`setCurrentStatus`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#setcurrentstatus)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`setCurrentStatus`](../../base/classes/InstallerProcessBase.md#setcurrentstatus)

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

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`setSource`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#setsource)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`setSource`](../../base/classes/InstallerProcessBase.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L49)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`start`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#start)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`start`](../../base/classes/InstallerProcessBase.md#start)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:81](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L81)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`stop`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#stop)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`stop`](../../base/classes/InstallerProcessBase.md#stop)

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

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`unlockFile`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#unlockfile)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`unlockFile`](../../base/classes/InstallerProcessBase.md#unlockfile)

***

### writeFile()

> **writeFile**(`path`, `content`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:191](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L191)

#### Parameters

##### path

`string`

##### content

`ArrayBuffer`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IInstallerProcessBase`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md).[`writeFile`](../../../../../../../interfaces/IInstallerProcessBase/interfaces/IInstallerProcessBase.md#writefile)

#### Inherited from

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`writeFile`](../../base/classes/InstallerProcessBase.md#writefile)

***

### writeMetadataFile()

> **writeMetadataFile**(): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts:65](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts#L65)

#### Returns

`Promise`\<`boolean`\>

***

### uninstallPackage()

> `static` **uninstallPackage**(`metadata`, `deleteFiles?`, `onStage?`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts:89](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts#L89)

#### Parameters

##### metadata

[`ArcPackage`](../../../../../../../types/tpa/package/interfaces/ArcPackage.md)

##### deleteFiles?

`boolean` = `true`

##### onStage?

(`stage`) => `void`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`uninstallPackage`](../../base/classes/InstallerProcessBase.md#uninstallpackage)

***

### validatePackage()

> `static` **validatePackage**(`metadata`, `zip`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/libraryinstaller.ts#L79)

#### Parameters

##### metadata

[`ArcPackage`](../../../../../../../types/tpa/package/interfaces/ArcPackage.md)

##### zip

`JSZip`

#### Returns

`Promise`\<`boolean`\>

#### Overrides

[`InstallerProcessBase`](../../base/classes/InstallerProcessBase.md).[`validatePackage`](../../base/classes/InstallerProcessBase.md#validatepackage)
