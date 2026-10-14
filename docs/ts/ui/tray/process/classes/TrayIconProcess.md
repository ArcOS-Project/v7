[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/ui/tray/process](../README.md) / TrayIconProcess

# Class: TrayIconProcess

Defined in: [src/ts/ui/tray/process.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/ui/tray/process.ts#L10)

## Extends

- [`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md)

## Implements

- [`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md)

## Constructors

### Constructor

> **new TrayIconProcess**(`pid`, `parentPid`, `data`): `TrayIconProcess`

Defined in: [src/ts/ui/tray/process.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/ui/tray/process.ts#L22)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### data

[`ShellTrayIcon`](../../../../../types/services/tray/interfaces/ShellTrayIcon.md)

#### Returns

`TrayIconProcess`

#### Overrides

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`constructor`](../../../../kernel/mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`_criticalProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#_criticalprocess)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../../../kernel/mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### action?

> `optional` **action?**: (`targetedProcess`) => `void`

Defined in: [src/ts/ui/tray/process.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/ui/tray/process.ts#L15)

#### Parameters

##### targetedProcess

[`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md)

#### Returns

`void`

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`action`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#action)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/ui/tray/process.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/ui/tray/process.ts#L16)

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`componentMount`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#componentmount)

***

### context?

> `optional` **context?**: [`ContextMenuItem`](../../../../../types/apps/app/interfaces/ContextMenuItem.md)[]

Defined in: [src/ts/ui/tray/process.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/ui/tray/process.ts#L14)

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`context`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#context)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`dispatch`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#dispatch)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`dispatch`](../../../../kernel/mods/stack/process/instance/classes/Process.md#dispatch)

***

### icon

> **icon**: `string`

Defined in: [src/ts/ui/tray/process.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/ui/tray/process.ts#L17)

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`icon`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#icon)

***

### identifier

> **identifier**: `string`

Defined in: [src/ts/ui/tray/process.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/ui/tray/process.ts#L12)

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`identifier`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#identifier)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`name`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#name)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`name`](../../../../kernel/mods/stack/process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`parentPid`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#parentpid)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`parentPid`](../../../../kernel/mods/stack/process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`pid`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#pid)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`pid`](../../../../kernel/mods/stack/process/instance/classes/Process.md#pid)

***

### popup?

> `optional` **popup?**: [`TrayPopup`](../../../../../types/services/tray/interfaces/TrayPopup.md)

Defined in: [src/ts/ui/tray/process.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/ui/tray/process.ts#L13)

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`popup`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#popup)

***

### shell

> **shell**: [`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md)

Defined in: [src/ts/ui/tray/process.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/ui/tray/process.ts#L18)

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`shell`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#shell)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`sourceUrl`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#sourceurl)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`sourceUrl`](../../../../kernel/mods/stack/process/instance/classes/Process.md#sourceurl)

***

### targetPid

> **targetPid**: `number`

Defined in: [src/ts/ui/tray/process.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/ui/tray/process.ts#L11)

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`targetPid`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#targetpid)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`_disposed`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#_disposed)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`_disposed`](../../../../kernel/mods/stack/process/instance/classes/Process.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`MEMORY`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#memory)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`MEMORY`](../../../../kernel/mods/stack/process/instance/classes/Process.md#memory)

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

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`STATE`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#state)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`STATE`](../../../../kernel/mods/stack/process/instance/classes/Process.md#state)

## Methods

### \_\_render()

> **\_\_render**(): `Promise`\<`void`\>

Defined in: [src/ts/ui/tray/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/ui/tray/process.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`__render`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#__render)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`__start`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#__start)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`__start`](../../../../kernel/mods/stack/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`__stop`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#__stop)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`__stop`](../../../../kernel/mods/stack/process/instance/classes/Process.md#__stop)

***

### getPopupBody()

> **getPopupBody**(): `Element` \| `null`

Defined in: [src/ts/ui/tray/process.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/ui/tray/process.ts#L67)

#### Returns

`Element` \| `null`

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`getPopupBody`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#getpopupbody)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`killSelf`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#killself)

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

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`Log`](../../../../kernel/mods/stack/process/instance/classes/Process.md#log)

***

### renderPopup()

> **renderPopup**(`popup`, `target`): `Promise`\<`void`\>

Defined in: [src/ts/ui/tray/process.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/ui/tray/process.ts#L63)

#### Parameters

##### popup

`HTMLDivElement`

##### target

[`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`renderPopup`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#renderpopup)

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

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`requestFileLock`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#requestfilelock)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`requestFileLock`](../../../../kernel/mods/stack/process/instance/classes/Process.md#requestfilelock)

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

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`setSource`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#setsource)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`setSource`](../../../../kernel/mods/stack/process/instance/classes/Process.md#setsource)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L49)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`start`](../../../../kernel/mods/stack/process/instance/classes/Process.md#start)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/ts/ui/tray/process.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/ui/tray/process.ts#L57)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`stop`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#stop)

#### Overrides

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`stop`](../../../../kernel/mods/stack/process/instance/classes/Process.md#stop)

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

[`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md).[`unlockFile`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md#unlockfile)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../../../kernel/mods/stack/process/instance/classes/Process.md#unlockfile)
