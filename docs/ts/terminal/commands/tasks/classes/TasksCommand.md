[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/terminal/commands/tasks](../README.md) / TasksCommand

# Class: TasksCommand

Defined in: [src/ts/terminal/commands/tasks.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/commands/tasks.ts#L9)

## Extends

- [`TerminalProcess`](../../../process/classes/TerminalProcess.md)

## Constructors

### Constructor

> **new TasksCommand**(`pid`, `parentPid`): `TasksCommand`

Defined in: [src/ts/terminal/commands/tasks.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/commands/tasks.ts#L15)

#### Parameters

##### pid

`number`

##### parentPid

`number`

#### Returns

`TasksCommand`

#### Overrides

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`constructor`](../../../process/classes/TerminalProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`_criticalProcess`](../../../process/classes/TerminalProcess.md#_criticalprocess)

***

### argv?

> `protected` `optional` **argv?**: `string`[]

Defined in: [src/ts/terminal/process.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L17)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`argv`](../../../process/classes/TerminalProcess.md#argv)

***

### daemon?

> `protected` `optional` **daemon?**: [`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

Defined in: [src/ts/terminal/process.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L18)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`daemon`](../../../process/classes/TerminalProcess.md#daemon)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`dispatch`](../../../process/classes/TerminalProcess.md#dispatch)

***

### flags?

> `protected` `optional` **flags?**: [`Arguments`](../../../../../types/terminal/type-aliases/Arguments.md)

Defined in: [src/ts/terminal/process.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L16)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`flags`](../../../process/classes/TerminalProcess.md#flags)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`name`](../../../process/classes/TerminalProcess.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`parentPid`](../../../process/classes/TerminalProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`pid`](../../../process/classes/TerminalProcess.md#pid)

***

### rl?

> `protected` `optional` **rl?**: [`Readline`](../../../readline/readline/classes/Readline.md)

Defined in: [src/ts/terminal/process.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L20)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`rl`](../../../process/classes/TerminalProcess.md#rl)

***

### serviceHost?

> `protected` `optional` **serviceHost?**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/terminal/process.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L19)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`serviceHost`](../../../process/classes/TerminalProcess.md#servicehost)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`sourceUrl`](../../../process/classes/TerminalProcess.md#sourceurl)

***

### term?

> `protected` `optional` **term?**: [`IArcTerminal`](../../../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md)

Defined in: [src/ts/terminal/process.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L15)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`term`](../../../process/classes/TerminalProcess.md#term)

***

### allowInterrupt

> `static` **allowInterrupt**: `boolean` = `false`

Defined in: [src/ts/terminal/process.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L14)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`allowInterrupt`](../../../process/classes/TerminalProcess.md#allowinterrupt)

***

### description

> `static` **description**: `string` = `"Display the running processes as a list or tree"`

Defined in: [src/ts/terminal/commands/tasks.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/commands/tasks.ts#L11)

#### Overrides

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`description`](../../../process/classes/TerminalProcess.md#description)

***

### hidden

> `static` **hidden**: `boolean` = `false`

Defined in: [src/ts/terminal/process.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L13)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`hidden`](../../../process/classes/TerminalProcess.md#hidden)

***

### keyword

> `static` **keyword**: `string` = `"tasks"`

Defined in: [src/ts/terminal/commands/tasks.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/commands/tasks.ts#L10)

#### Overrides

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`keyword`](../../../process/classes/TerminalProcess.md#keyword)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`_disposed`](../../../process/classes/TerminalProcess.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`MEMORY`](../../../process/classes/TerminalProcess.md#memory)

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

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`STATE`](../../../process/classes/TerminalProcess.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`__start`](../../../process/classes/TerminalProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`__stop`](../../../process/classes/TerminalProcess.md#__stop)

***

### \_main()

> **\_main**(`term`, `flags`, `argv`): `Promise`\<`any`\>

Defined in: [src/ts/terminal/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L38)

#### Parameters

##### term

[`IArcTerminal`](../../../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md)

##### flags

[`Arguments`](../../../../../types/terminal/type-aliases/Arguments.md)

##### argv

`string`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`_main`](../../../process/classes/TerminalProcess.md#_main)

***

### branch()

> **branch**(`proc`, `indent?`, `isLast?`): `void`

Defined in: [src/ts/terminal/commands/tasks.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/commands/tasks.ts#L52)

#### Parameters

##### proc

[`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md)

##### indent?

`string` = `""`

##### isLast?

`boolean` = `true`

#### Returns

`void`

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Inherited from

`TerminalProcess.killSelf`

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

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`Log`](../../../process/classes/TerminalProcess.md#log)

***

### main()

> `protected` **main**(`term`, `flags`, `argv`): `Promise`\<`number`\>

Defined in: [src/ts/terminal/commands/tasks.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/commands/tasks.ts#L23)

#### Parameters

##### term

[`IArcTerminal`](../../../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md)

##### flags

[`Arguments`](../../../../../types/terminal/type-aliases/Arguments.md)

##### argv

`string`[]

#### Returns

`Promise`\<`number`\>

#### Overrides

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`main`](../../../process/classes/TerminalProcess.md#main)

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

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`requestFileLock`](../../../process/classes/TerminalProcess.md#requestfilelock)

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

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`setSource`](../../../process/classes/TerminalProcess.md#setsource)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L49)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`start`](../../../process/classes/TerminalProcess.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`stop`](../../../process/classes/TerminalProcess.md#stop)

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

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`unlockFile`](../../../process/classes/TerminalProcess.md#unlockfile)
