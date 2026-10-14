[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/services/ITrayHostService](../README.md) / ITrayIconProcess

# Interface: ITrayIconProcess

Defined in: [src/interfaces/services/ITrayHostService.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/ITrayHostService.ts#L20)

## Extends

- [`IProcess`](../../../IProcess/interfaces/IProcess.md)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean`

Defined in: [src/interfaces/IProcess.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L11)

#### Inherited from

[`IProcess`](../../../IProcess/interfaces/IProcess.md).[`_criticalProcess`](../../../IProcess/interfaces/IProcess.md#_criticalprocess)

***

### action?

> `optional` **action?**: (`targetedProcess`) => `void`

Defined in: [src/interfaces/services/ITrayHostService.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/ITrayHostService.ts#L25)

#### Parameters

##### targetedProcess

[`IProcess`](../../../IProcess/interfaces/IProcess.md)

#### Returns

`void`

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\>

Defined in: [src/interfaces/services/ITrayHostService.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/ITrayHostService.ts#L26)

***

### context?

> `optional` **context?**: [`ContextMenuItem`](../../../../types/apps/app/interfaces/ContextMenuItem.md)[]

Defined in: [src/interfaces/services/ITrayHostService.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/ITrayHostService.ts#L24)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/interfaces/IProcess.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L6)

#### Inherited from

[`IProcess`](../../../IProcess/interfaces/IProcess.md).[`dispatch`](../../../IProcess/interfaces/IProcess.md#dispatch)

***

### icon

> **icon**: `string`

Defined in: [src/interfaces/services/ITrayHostService.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/ITrayHostService.ts#L27)

***

### identifier

> **identifier**: `string`

Defined in: [src/interfaces/services/ITrayHostService.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/ITrayHostService.ts#L22)

***

### name

> **name**: `string`

Defined in: [src/interfaces/IProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L9)

#### Inherited from

[`IProcess`](../../../IProcess/interfaces/IProcess.md).[`name`](../../../IProcess/interfaces/IProcess.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/interfaces/IProcess.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L8)

#### Inherited from

[`IProcess`](../../../IProcess/interfaces/IProcess.md).[`parentPid`](../../../IProcess/interfaces/IProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/interfaces/IProcess.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L7)

#### Inherited from

[`IProcess`](../../../IProcess/interfaces/IProcess.md).[`pid`](../../../IProcess/interfaces/IProcess.md#pid)

***

### popup?

> `optional` **popup?**: [`TrayPopup`](../../../../types/services/tray/interfaces/TrayPopup.md)

Defined in: [src/interfaces/services/ITrayHostService.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/ITrayHostService.ts#L23)

***

### shell

> **shell**: [`IShellRuntime`](../../../runtimes/IShellRuntime/interfaces/IShellRuntime.md)

Defined in: [src/interfaces/services/ITrayHostService.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/ITrayHostService.ts#L28)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [src/interfaces/IProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L12)

#### Inherited from

[`IProcess`](../../../IProcess/interfaces/IProcess.md).[`sourceUrl`](../../../IProcess/interfaces/IProcess.md#sourceurl)

***

### STATE

> **STATE**: [`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/interfaces/IProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L13)

#### Inherited from

[`IProcess`](../../../IProcess/interfaces/IProcess.md).[`STATE`](../../../IProcess/interfaces/IProcess.md#state)

***

### targetPid

> **targetPid**: `number`

Defined in: [src/interfaces/services/ITrayHostService.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/ITrayHostService.ts#L21)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/interfaces/IProcess.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L10)

##### Returns

`boolean`

#### Inherited from

[`IProcess`](../../../IProcess/interfaces/IProcess.md).[`_disposed`](../../../IProcess/interfaces/IProcess.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/interfaces/IProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L14)

##### Returns

`number`

#### Inherited from

[`IProcess`](../../../IProcess/interfaces/IProcess.md).[`MEMORY`](../../../IProcess/interfaces/IProcess.md#memory)

## Methods

### \_\_render()

> **\_\_render**(): `Promise`\<`void`\>

Defined in: [src/interfaces/services/ITrayHostService.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/ITrayHostService.ts#L29)

#### Returns

`Promise`\<`void`\>

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L15)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IProcess`](../../../IProcess/interfaces/IProcess.md).[`__start`](../../../IProcess/interfaces/IProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L16)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IProcess`](../../../IProcess/interfaces/IProcess.md).[`__stop`](../../../IProcess/interfaces/IProcess.md#__stop)

***

### getPopupBody()

> **getPopupBody**(): `Element` \| `null`

Defined in: [src/interfaces/services/ITrayHostService.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/ITrayHostService.ts#L32)

#### Returns

`Element` \| `null`

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IProcess`](../../../IProcess/interfaces/IProcess.md).[`killSelf`](../../../IProcess/interfaces/IProcess.md#killself)

***

### renderPopup()

> **renderPopup**(`popup`, `target`): `Promise`\<`void`\>

Defined in: [src/interfaces/services/ITrayHostService.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/ITrayHostService.ts#L31)

#### Parameters

##### popup

`HTMLDivElement`

##### target

[`IProcess`](../../../IProcess/interfaces/IProcess.md)

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

[`IProcess`](../../../IProcess/interfaces/IProcess.md).[`requestFileLock`](../../../IProcess/interfaces/IProcess.md#requestfilelock)

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

[`IProcess`](../../../IProcess/interfaces/IProcess.md).[`setSource`](../../../IProcess/interfaces/IProcess.md#setsource)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/interfaces/services/ITrayHostService.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/ITrayHostService.ts#L30)

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

[`IProcess`](../../../IProcess/interfaces/IProcess.md).[`unlockFile`](../../../IProcess/interfaces/IProcess.md#unlockfile)
