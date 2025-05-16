[**ArcOS v7**](../../../../../README.md)

***

[ArcOS v7](../../../../../modules.md) / [ts/terminal/readline/readline](../README.md) / Readline

# Class: Readline

Defined in: [src/ts/terminal/readline/readline.ts:36](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L36)

## Extends

- [`Process`](../../../../process/instance/classes/Process.md)

## Implements

- `ITerminalAddon`

## Constructors

### Constructor

> **new Readline**(`handler`, `pid`, `parentPid`, `terminal?`): `Readline`

Defined in: [src/ts/terminal/readline/readline.ts:57](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L57)

#### Parameters

##### handler

[`ProcessHandler`](../../../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

##### terminal?

[`ArcTerminal`](../../../classes/ArcTerminal.md)

#### Returns

`Readline`

#### Overrides

[`Process`](../../../../process/instance/classes/Process.md).[`constructor`](../../../../process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L22)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`_criticalProcess`](../../../../process/instance/classes/Process.md#_criticalprocess)

***

### \_disposed

> **\_disposed**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L21)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`_disposed`](../../../../process/instance/classes/Process.md#_disposed)

***

### dispatch

> **dispatch**: [`ProcessDispatch`](../../../../process/dispatch/classes/ProcessDispatch.md)

Defined in: [src/ts/process/instance.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L15)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`dispatch`](../../../../process/instance/classes/Process.md#dispatch)

***

### env

> **env**: [`Environment`](../../../../kernel/env/classes/Environment.md)

Defined in: [src/ts/process/instance.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L12)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`env`](../../../../process/instance/classes/Process.md#env)

***

### fs

> **fs**: [`Filesystem`](../../../../fs/classes/Filesystem.md)

Defined in: [src/ts/process/instance.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L23)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`fs`](../../../../process/instance/classes/Process.md#fs)

***

### handler

> **handler**: [`ProcessHandler`](../../../../process/handler/classes/ProcessHandler.md)

Defined in: [src/ts/process/instance.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L14)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`handler`](../../../../process/instance/classes/Process.md#handler)

***

### kernel

> **kernel**: [`WaveKernel`](../../../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/process/instance.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L17)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`kernel`](../../../../process/instance/classes/Process.md#kernel)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/process/instance.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L20)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`name`](../../../../process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/process/instance.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L19)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`parentPid`](../../../../process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/process/instance.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L18)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`pid`](../../../../process/instance/classes/Process.md#pid)

***

### soundBus

> **soundBus**: [`SoundBus`](../../../../soundbus/classes/SoundBus.md)

Defined in: [src/ts/process/instance.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L13)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`soundBus`](../../../../process/instance/classes/Process.md#soundbus)

***

### systemDispatch

> **systemDispatch**: [`SystemDispatch`](../../../../dispatch/classes/SystemDispatch.md)

Defined in: [src/ts/process/instance.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L16)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`systemDispatch`](../../../../process/instance/classes/Process.md#systemdispatch)

***

### terminal

> **terminal**: `undefined` \| [`ArcTerminal`](../../../classes/ArcTerminal.md)

Defined in: [src/ts/terminal/readline/readline.ts:51](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L51)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L48)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`__start`](../../../../process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:54](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L54)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`__stop`](../../../../process/instance/classes/Process.md#__stop)

***

### activate()

> **activate**(`term`): `void`

Defined in: [src/ts/terminal/readline/readline.ts:73](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L73)

Activate this addon - this function is called by xterm's
loadAddon().

#### Parameters

##### term

`Terminal`

The terminal this readline is attached to.

#### Returns

`void`

#### Implementation of

`ITerminalAddon.activate`

***

### appendHistory()

> **appendHistory**(`text`): `void`

Defined in: [src/ts/terminal/readline/readline.ts:92](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L92)

Manually append a line to the top of the readline's history.

#### Parameters

##### text

`string`

The text to append to history.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [src/ts/terminal/readline/readline.ts:83](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L83)

Dispose

#### Returns

`void`

#### Implementation of

`ITerminalAddon.dispose`

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/process/instance.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L60)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`killSelf`](../../../../process/instance/classes/Process.md#killself)

***

### Log()

> `protected` **Log**(`message`, `level`): `void`

Defined in: [src/ts/process/instance.ts:67](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L67)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`Log`](../../../../process/instance/classes/Process.md#log)

***

### output()

> **output**(): [`Output`](../../tty/interfaces/Output.md)

Defined in: [src/ts/terminal/readline/readline.ts:200](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L200)

Obtain an output interface to this terminal.

#### Returns

[`Output`](../../tty/interfaces/Output.md)

Output

***

### print()

> **print**(`text`): `void`

Defined in: [src/ts/terminal/readline/readline.ts:181](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L181)

Write text to the terminal.

#### Parameters

##### text

`string`

The text to write to the terminal

#### Returns

`void`

***

### println()

> **println**(`text`): `void`

Defined in: [src/ts/terminal/readline/readline.ts:191](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L191)

Write text to the terminal and append with "\r\n".

#### Parameters

##### text

`string`

The text to write to the terminal./

#### Returns

`void`

***

### read()

> **read**(`prompt`, `conceiled`): `Promise`\<`string`\>

Defined in: [src/ts/terminal/readline/readline.ts:225](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L225)

Display the given prompt and wait for one line of input from the
terminal. The returned promise will be executed when a line has been
read from the terminal.

#### Parameters

##### prompt

`string`

The prompt to use.

##### conceiled

`boolean` = `false`

#### Returns

`Promise`\<`string`\>

A promise to be called when the input has been read.

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/process/instance.ts:73](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L73)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `false`\>

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`requestFileLock`](../../../../process/instance/classes/Process.md#requestfilelock)

***

### setCheckHandler()

> **setCheckHandler**(`fn`): `void`

Defined in: [src/ts/terminal/readline/readline.ts:114](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L114)

Set the check callback. This callback is used by readline to determine if input
requires additiona lines when the user presses 'enter'.

#### Parameters

##### fn

`CheckHandler`

A function (string) -> boolean that should return true if the input
            is complete, and false if a line (\n) should be added to the input.

#### Returns

`void`

***

### setCtrlCHandler()

> **setCtrlCHandler**(`fn`): `void`

Defined in: [src/ts/terminal/readline/readline.ts:125](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L125)

Set the ctrl-c handler. This function will be called if ctrl-c is encountered
between readline reads. This may be used in circumstances where input from the
user may result in a long running task that can be cancelled.

#### Parameters

##### fn

`CtrlCHandler`

The ctrl-c handler.

#### Returns

`void`

***

### setHighlighter()

> **setHighlighter**(`highlighter`): `void`

Defined in: [src/ts/terminal/readline/readline.ts:103](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L103)

Set the highlighter handler for this readline. This is used to
create custom highlighting functionality (e.g. for syntax highlighting
or bracket matching).

#### Parameters

##### highlighter

[`Highlighter`](../../highlight/interfaces/Highlighter.md)

A handler to handle all highlight callbacks.

#### Returns

`void`

***

### setPauseHandler()

> **setPauseHandler**(`fn`): `void`

Defined in: [src/ts/terminal/readline/readline.ts:134](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L134)

Set the callback to be called when the user presses ctrl-s/ctrl-q.

#### Parameters

##### fn

`PauseHandler`

The pause handler

#### Returns

`void`

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/terminal/readline/readline.ts:62](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L62)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Process`](../../../../process/instance/classes/Process.md).[`start`](../../../../process/instance/classes/Process.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:40](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L40)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`stop`](../../../../process/instance/classes/Process.md#stop)

***

### tty()

> **tty**(): [`Tty`](../../tty/classes/Tty.md)

Defined in: [src/ts/terminal/readline/readline.ts:209](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L209)

Obtain a tty interface to this terminal.

#### Returns

[`Tty`](../../tty/classes/Tty.md)

A tty

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/process/instance.ts:85](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L85)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `false`\>

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`unlockFile`](../../../../process/instance/classes/Process.md#unlockfile)

***

### write()

> **write**(`text`): `void`

Defined in: [src/ts/terminal/readline/readline.ts:154](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L154)

Write text to the terminal.

#### Parameters

##### text

`string`

The text to write to the terminal.

#### Returns

`void`

***

### writeReady()

> **writeReady**(): `boolean`

Defined in: [src/ts/terminal/readline/readline.ts:145](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/readline.ts#L145)

writeReady() may be used to implement basic output flow control. This function
will return false if the writes to the terminal initiated by Readline have
reached a highwater mark.

#### Returns

`boolean`

true if this terminal is accepting more input.
