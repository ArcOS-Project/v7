[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/IThirdPartyProcess](../README.md) / IThirdPartyProcess

# Interface: IThirdPartyProcess

Defined in: [src/interfaces/IThirdPartyProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L9)

## Extends

- [`IProcess`](../../IProcess/interfaces/IProcess.md)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean`

Defined in: [src/interfaces/IProcess.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L11)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`_criticalProcess`](../../IProcess/interfaces/IProcess.md#_criticalprocess)

***

### app

> **app**: [`AppProcessData`](../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/interfaces/IThirdPartyProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L14)

***

### args

> **args**: `any`[]

Defined in: [src/interfaces/IThirdPartyProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L15)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\>

Defined in: [src/interfaces/IThirdPartyProcess.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L20)

***

### crashReason

> **crashReason**: `string`

Defined in: [src/interfaces/IThirdPartyProcess.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L18)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/interfaces/IProcess.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L6)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`dispatch`](../../IProcess/interfaces/IProcess.md#dispatch)

***

### handler

> **handler**: [`IProcessHandler`](../../modules/IProcessHandler/interfaces/IProcessHandler.md)

Defined in: [src/interfaces/IThirdPartyProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L13)

***

### mutationLock

> **mutationLock**: `boolean`

Defined in: [src/interfaces/IThirdPartyProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L12)

***

### name

> **name**: `string`

Defined in: [src/interfaces/IProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L9)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`name`](../../IProcess/interfaces/IProcess.md#name)

***

### operationId

> **operationId**: `string`

Defined in: [src/interfaces/IThirdPartyProcess.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L11)

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

### username

> **username**: `string`

Defined in: [src/interfaces/IThirdPartyProcess.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L21)

***

### userPreferences

> **userPreferences**: [`UserPreferencesStore`](../../../types/user/type-aliases/UserPreferencesStore.md)

Defined in: [src/interfaces/IThirdPartyProcess.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L16)

***

### windowIcon

> **windowIcon**: [`StringStore`](../../../types/shared/writable/type-aliases/StringStore.md)

Defined in: [src/interfaces/IThirdPartyProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L17)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/IThirdPartyProcess.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L19)

***

### workingDirectory

> **workingDirectory**: `string`

Defined in: [src/interfaces/IThirdPartyProcess.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L10)

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

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`IThirdPartyProcess` \| `undefined`\>

Defined in: [src/interfaces/IThirdPartyProcess.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L24)

#### Returns

`Promise`\<`IThirdPartyProcess` \| `undefined`\>

***

### getSingleton()

> **getSingleton**(): `IThirdPartyProcess`[]

Defined in: [src/interfaces/IThirdPartyProcess.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L25)

#### Returns

`IThirdPartyProcess`[]

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`killSelf`](../../IProcess/interfaces/IProcess.md#killself)

***

### loadCSS()

> **loadCSS**(`path`): `Promise`\<`void`\>

Defined in: [src/interfaces/IThirdPartyProcess.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L26)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

***

### onStarted()

> **onStarted**(): `any`

Defined in: [src/interfaces/IThirdPartyProcess.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IThirdPartyProcess.ts#L23)

#### Returns

`any`

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
