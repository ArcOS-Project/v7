[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/IInstallerProcessBase](../README.md) / IInstallerProcessBase

# Interface: IInstallerProcessBase

Defined in: [src/interfaces/IInstallerProcessBase.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L9)

## Extends

- [`IProcess`](../../IProcess/interfaces/IProcess.md)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean`

Defined in: [src/interfaces/IProcess.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L11)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`_criticalProcess`](../../IProcess/interfaces/IProcess.md#_criticalprocess)

***

### completed

> **completed**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L14)

***

### COUNT

> **COUNT**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`number`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L15)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/interfaces/IProcess.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L6)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`dispatch`](../../IProcess/interfaces/IProcess.md#dispatch)

***

### failReason

> **failReason**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L11)

***

### focused

> **focused**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L16)

***

### installing

> **installing**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L12)

***

### name

> **name**: `string`

Defined in: [src/interfaces/IProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L9)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`name`](../../IProcess/interfaces/IProcess.md#name)

***

### parent

> **parent**: [`IDistributionServiceProcess`](../../services/IDistributionServiceProcess/interfaces/IDistributionServiceProcess.md)

Defined in: [src/interfaces/IInstallerProcessBase.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L10)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/interfaces/IProcess.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L8)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`parentPid`](../../IProcess/interfaces/IProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/interfaces/IProcess.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L7)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`pid`](../../IProcess/interfaces/IProcess.md#pid)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [src/interfaces/IProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L12)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`sourceUrl`](../../IProcess/interfaces/IProcess.md#sourceurl)

***

### STATE

> **STATE**: [`ProcessState`](../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/interfaces/IProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L13)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`STATE`](../../IProcess/interfaces/IProcess.md#state)

***

### status

> **status**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`InstallStatus`](../../../types/tpa/package/type-aliases/InstallStatus.md)\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L17)

***

### TOTAL\_COUNT

> **TOTAL\_COUNT**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`number`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L13)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/interfaces/IProcess.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L10)

##### Returns

`boolean`

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`_disposed`](../../IProcess/interfaces/IProcess.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/interfaces/IProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L14)

##### Returns

`number`

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`MEMORY`](../../IProcess/interfaces/IProcess.md#memory)

## Methods

### \_\_go()

> **\_\_go**(): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L26)

#### Returns

`Promise`\<`boolean`\>

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L15)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`__start`](../../IProcess/interfaces/IProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L16)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`__stop`](../../IProcess/interfaces/IProcess.md#__stop)

***

### createInstallLocation()

> **createInstallLocation**(): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L30)

#### Returns

`Promise`\<`boolean`\>

***

### fail()

> **fail**(`reason`): `void`

Defined in: [src/interfaces/IInstallerProcessBase.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L25)

#### Parameters

##### reason

`string`

#### Returns

`void`

***

### getFiles()

> **getFiles**(): `Promise`\<\{ `files`: \{\[`k`: `string`\]: `JSZipObject`; \}; `sortedPaths`: `string`[]; \}\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L31)

#### Returns

`Promise`\<\{ `files`: \{\[`k`: `string`\]: `JSZipObject`; \}; `sortedPaths`: `string`[]; \}\>

***

### go()

> **go**(): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L27)

#### Returns

`Promise`\<`boolean`\>

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L19)

#### Returns

`Promise`\<`void`\>

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`killSelf`](../../IProcess/interfaces/IProcess.md#killself)

***

### logStatus()

> **logStatus**(`content`, `type?`, `status?`): `void`

Defined in: [src/interfaces/IInstallerProcessBase.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L22)

#### Parameters

##### content

`string`

##### type?

[`InstallStatusType`](../../../types/tpa/package/type-aliases/InstallStatusType.md)

##### status?

[`InstallStatusMode`](../../../types/tpa/package/type-aliases/InstallStatusMode.md)

#### Returns

`void`

***

### mkdir()

> **mkdir**(`path`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L28)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean`\>

***

### onStop()

> **onStop**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L21)

#### Returns

`Promise`\<`void`\>

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

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`requestFileLock`](../../IProcess/interfaces/IProcess.md#requestfilelock)

***

### setCurrentContent()

> **setCurrentContent**(`content`): `Promise`\<`void`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L24)

#### Parameters

##### content

`string`

#### Returns

`Promise`\<`void`\>

***

### setCurrentStatus()

> **setCurrentStatus**(`status`): `Promise`\<`void`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L23)

#### Parameters

##### status

[`InstallStatusMode`](../../../types/tpa/package/type-aliases/InstallStatusMode.md)

#### Returns

`Promise`\<`void`\>

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

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`setSource`](../../IProcess/interfaces/IProcess.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L18)

#### Returns

`Promise`\<`void`\>

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L20)

#### Returns

`Promise`\<`void`\>

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

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`unlockFile`](../../IProcess/interfaces/IProcess.md#unlockfile)

***

### writeFile()

> **writeFile**(`path`, `content`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L29)

#### Parameters

##### path

`string`

##### content

`ArrayBuffer`

#### Returns

`Promise`\<`boolean`\>
