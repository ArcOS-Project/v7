[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/stack/process/instance](../README.md) / Process

# Class: Process

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L10)

## Extended by

- [`ArcTermRuntime`](../../../../../../../apps/user/arcterm/process/classes/ArcTermRuntime.md)
- [`FeedbackProcess`](../../../../../../../apps/user/feedback/runtime/classes/FeedbackProcess.md)
- [`AppProcess`](../../../../../../apps/process/classes/AppProcess.md)
- [`AppRenderer`](../../../../../../apps/renderer/classes/AppRenderer.md)
- [`ThirdPartyProcess`](../../../../../../apps/tpa/process/classes/ThirdPartyProcess.md)
- [`UserDaemon`](../../../../../../daemon/classes/UserDaemon.md)
- [`JsExec`](../../../../../../jsexec/classes/JsExec.md)
- [`InitProcess`](../../../../../init/classes/InitProcess.md)
- [`BaseService`](../../../../../../servicehost/base/classes/BaseService.md)
- [`ServiceHost`](../../../../../../servicehost/classes/ServiceHost.md)
- [`InstallerProcessBase`](../../../../../../servicehost/services/DistribSvc/installer/base/classes/InstallerProcessBase.md)
- [`SqlInterfaceProcess`](../../../../../../sql/classes/SqlInterfaceProcess.md)
- [`StateHandler`](../../../../../../state/classes/StateHandler.md)
- [`ArcTerminal`](../../../../../../terminal/classes/ArcTerminal.md)
- [`TerminalMode`](../../../../../../terminal/mode/classes/TerminalMode.md)
- [`TerminalProcess`](../../../../../../terminal/process/classes/TerminalProcess.md)
- [`History`](../../../../../../terminal/readline/history/classes/History.md)
- [`Readline`](../../../../../../terminal/readline/readline/classes/Readline.md)
- [`State`](../../../../../../terminal/readline/state/classes/State.md)
- [`TrayIconProcess`](../../../../../../ui/tray/process/classes/TrayIconProcess.md)

## Implements

- [`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md)

## Constructors

### Constructor

> **new Process**(`pid`, `parentPid?`, ...`args`): `Process`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L34)

#### Parameters

##### pid

`number`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Process`

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md).[`_criticalProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md#_criticalprocess)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md).[`dispatch`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md#dispatch)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md).[`name`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md).[`parentPid`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md).[`pid`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md).[`sourceUrl`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md#sourceurl)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md).[`_disposed`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md).[`MEMORY`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md#memory)

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

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md).[`STATE`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md).[`__start`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md).[`__stop`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md#__stop)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md).[`killSelf`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md#killself)

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

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md).[`requestFileLock`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md#requestfilelock)

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

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md).[`setSource`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md#setsource)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L49)

#### Returns

`Promise`\<`any`\>

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

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

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md).[`unlockFile`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md#unlockfile)
