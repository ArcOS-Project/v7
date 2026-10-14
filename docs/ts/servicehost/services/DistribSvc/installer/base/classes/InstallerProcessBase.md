[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/servicehost/services/DistribSvc/installer/base](../README.md) / InstallerProcessBase

# Class: InstallerProcessBase

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L11)

## Extends

- [`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md)

## Extended by

- [`AppInstallerProcess`](../../appinstaller/classes/AppInstallerProcess.md)
- [`LibraryInstallerProcess`](../../libraryinstaller/classes/LibraryInstallerProcess.md)

## Constructors

### Constructor

> **new InstallerProcessBase**(`pid`, `parentPid`, `zip`, `metadata`, `item`, `isUpdate?`): `InstallerProcessBase`

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L30)

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

##### isUpdate?

`boolean` = `false`

#### Returns

`InstallerProcessBase`

#### Overrides

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`constructor`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Inherited from

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### completed

> **completed**: [`ReadableStore`](../../../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L23)

***

### COUNT

> **COUNT**: [`ReadableStore`](../../../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`number`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L24)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Inherited from

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`dispatch`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#dispatch)

***

### failReason

> **failReason**: [`ReadableStore`](../../../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L20)

***

### focused

> **focused**: [`ReadableStore`](../../../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L25)

***

### installing

> **installing**: [`ReadableStore`](../../../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L21)

***

### isUpdate

> `protected` **isUpdate**: `boolean` = `false`

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L18)

***

### item?

> `protected` `optional` **item?**: [`StoreItem`](../../../../../../../types/tpa/package/interfaces/StoreItem.md)

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L14)

***

### metadata?

> `protected` `optional` **metadata?**: [`ArcPackage`](../../../../../../../types/tpa/package/interfaces/ArcPackage.md)

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L13)

***

### MISC\_STEPCOUNT

> `protected` **MISC\_STEPCOUNT**: `number` = `2`

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L17)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Inherited from

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`name`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#name)

***

### parent

> **parent**: [`IDistributionServiceProcess`](../../../../../../../interfaces/services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md)

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L19)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Inherited from

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`parentPid`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Inherited from

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`pid`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Inherited from

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`sourceUrl`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#sourceurl)

***

### status

> **status**: [`ReadableStore`](../../../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`InstallStatus`](../../../../../../../types/tpa/package/type-aliases/InstallStatus.md)\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L26)

***

### TOTAL\_COUNT

> **TOTAL\_COUNT**: [`ReadableStore`](../../../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`number`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L22)

***

### verboseLog

> `protected` **verboseLog**: `string`[] = `[]`

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L12)

***

### workingDirectory

> `protected` **workingDirectory**: `string` = `""`

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L15)

***

### zip?

> `protected` `optional` **zip?**: `JSZip`

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L16)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Inherited from

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`_disposed`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Inherited from

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`MEMORY`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#memory)

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

#### Inherited from

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`STATE`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#state)

## Methods

### \_\_go()

> **\_\_go**(): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:140](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L140)

#### Returns

`Promise`\<`boolean`\>

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`__start`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`__stop`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#__stop)

***

### afterFailedInstallation()

> `protected` **afterFailedInstallation**(): `Promise`\<`any`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L76)

#### Returns

`Promise`\<`any`\>

***

### afterSuccessfulInstallation()

> `protected` **afterSuccessfulInstallation**(): `Promise`\<`any`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L71)

#### Returns

`Promise`\<`any`\>

***

### createInstallLocation()

> **createInstallLocation**(): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:216](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L216)

#### Returns

`Promise`\<`boolean`\>

***

### fail()

> **fail**(`reason`): `void`

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:129](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L129)

#### Parameters

##### reason

`string`

#### Returns

`void`

***

### getFiles()

> **getFiles**(): `Promise`\<\{ `files`: \{\[`k`: `string`\]: `JSZipObject`; \}; `sortedPaths`: `string`[]; \}\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:231](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L231)

#### Returns

`Promise`\<\{ `files`: \{\[`k`: `string`\]: `JSZipObject`; \}; `sortedPaths`: `string`[]; \}\>

***

### go()

> **go**(): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:170](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L170)

#### Returns

`Promise`\<`boolean`\>

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L67)

#### Returns

`Promise`\<`void`\>

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Process.killSelf`

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

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`Log`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#log)

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

***

### mkdir()

> **mkdir**(`path`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:175](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L175)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

***

### onStop()

> **onStop**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L85)

#### Returns

`Promise`\<`void`\>

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L91)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Inherited from

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`requestFileLock`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#requestfilelock)

***

### setCurrentContent()

> **setCurrentContent**(`content`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:118](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L118)

#### Parameters

##### content

`string`

#### Returns

`Promise`\<`void`\>

***

### setCurrentStatus()

> **setCurrentStatus**(`status`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:107](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L107)

#### Parameters

##### status

[`InstallStatusMode`](../../../../../../../types/tpa/package/type-aliases/InstallStatusMode.md)

#### Returns

`Promise`\<`void`\>

***

### setSource()

> **setSource**(`source`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:115](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L115)

#### Parameters

##### source

`string`

#### Returns

`void`

#### Inherited from

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`setSource`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L49)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`start`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#start)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:81](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L81)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`stop`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#stop)

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L103)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Inherited from

[`Process`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../../../../../kernel/mods/stack/process/instance/classes/Process.md#unlockfile)

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

***

### uninstallPackage()

> `static` **uninstallPackage**(`metadata`, `deleteFiles?`, `onStage?`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L250)

#### Parameters

##### metadata

[`ArcPackage`](../../../../../../../types/tpa/package/interfaces/ArcPackage.md)

##### deleteFiles?

`boolean`

##### onStage?

(`stage`) => `void`

#### Returns

`Promise`\<`void`\>

***

### validatePackage()

> `static` **validatePackage**(`metadata`, `zip`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/DistribSvc/installer/base.ts:245](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/DistribSvc/installer/base.ts#L245)

#### Parameters

##### metadata

[`ArcPackage`](../../../../../../../types/tpa/package/interfaces/ArcPackage.md)

##### zip

`JSZip`

#### Returns

`Promise`\<`boolean`\>
