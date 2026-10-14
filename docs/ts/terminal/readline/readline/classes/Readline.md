[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/terminal/readline/readline](../README.md) / Readline

# Class: Readline

Defined in: [src/ts/terminal/readline/readline.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L36)

## Extends

- [`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md)

## Implements

- `ITerminalAddon`

## Constructors

### Constructor

> **new Readline**(`pid`, `parentPid`, `terminal?`): `Readline`

Defined in: [src/ts/terminal/readline/readline.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L57)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### terminal?

[`IArcTerminal`](../../../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md)

#### Returns

`Readline`

#### Overrides

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`constructor`](../../../../kernel/mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../../../kernel/mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`dispatch`](../../../../kernel/mods/stack/process/instance/classes/Process.md#dispatch)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`name`](../../../../kernel/mods/stack/process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`parentPid`](../../../../kernel/mods/stack/process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`pid`](../../../../kernel/mods/stack/process/instance/classes/Process.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`sourceUrl`](../../../../kernel/mods/stack/process/instance/classes/Process.md#sourceurl)

***

### state

> **state**: [`State`](../../state/classes/State.md) \| `undefined`

Defined in: [src/ts/terminal/readline/readline.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L46)

***

### terminal

> **terminal**: [`IArcTerminal`](../../../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md) \| `undefined`

Defined in: [src/ts/terminal/readline/readline.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L51)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`_disposed`](../../../../kernel/mods/stack/process/instance/classes/Process.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

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

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`STATE`](../../../../kernel/mods/stack/process/instance/classes/Process.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`__start`](../../../../kernel/mods/stack/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`__stop`](../../../../kernel/mods/stack/process/instance/classes/Process.md#__stop)

***

### activate()

> **activate**(`term`): `void`

Defined in: [src/ts/terminal/readline/readline.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L76)

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

Defined in: [src/ts/terminal/readline/readline.ts:95](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L95)

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

Defined in: [src/ts/terminal/readline/readline.ts:86](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L86)

Dispose

#### Returns

`void`

#### Implementation of

`ITerminalAddon.dispose`

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

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`Log`](../../../../kernel/mods/stack/process/instance/classes/Process.md#log)

***

### output()

> **output**(): [`Output`](../../tty/interfaces/Output.md)

Defined in: [src/ts/terminal/readline/readline.ts:203](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L203)

Obtain an output interface to this terminal.

#### Returns

[`Output`](../../tty/interfaces/Output.md)

Output

***

### print()

> **print**(`text`): `void`

Defined in: [src/ts/terminal/readline/readline.ts:184](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L184)

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

Defined in: [src/ts/terminal/readline/readline.ts:194](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L194)

Write text to the terminal and append with "\r\n".

#### Parameters

##### text

`string`

The text to write to the terminal./

#### Returns

`void`

***

### read()

> **read**(`prompt`, `conceiled?`): `Promise`\<`string`\>

Defined in: [src/ts/terminal/readline/readline.ts:228](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L228)

Display the given prompt and wait for one line of input from the
terminal. The returned promise will be executed when a line has been
read from the terminal.

#### Parameters

##### prompt

`string`

The prompt to use.

##### conceiled?

`boolean` = `false`

#### Returns

`Promise`\<`string`\>

A promise to be called when the input has been read.

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

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`requestFileLock`](../../../../kernel/mods/stack/process/instance/classes/Process.md#requestfilelock)

***

### setCheckHandler()

> **setCheckHandler**(`fn`): `void`

Defined in: [src/ts/terminal/readline/readline.ts:117](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L117)

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

Defined in: [src/ts/terminal/readline/readline.ts:128](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L128)

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

Defined in: [src/ts/terminal/readline/readline.ts:106](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L106)

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

Defined in: [src/ts/terminal/readline/readline.ts:137](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L137)

Set the callback to be called when the user presses ctrl-s/ctrl-q.

#### Parameters

##### fn

`PauseHandler`

The pause handler

#### Returns

`void`

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

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`setSource`](../../../../kernel/mods/stack/process/instance/classes/Process.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/terminal/readline/readline.ts:65](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L65)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`start`](../../../../kernel/mods/stack/process/instance/classes/Process.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`stop`](../../../../kernel/mods/stack/process/instance/classes/Process.md#stop)

***

### tty()

> **tty**(): [`Tty`](../../tty/classes/Tty.md)

Defined in: [src/ts/terminal/readline/readline.ts:212](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L212)

Obtain a tty interface to this terminal.

#### Returns

[`Tty`](../../tty/classes/Tty.md)

A tty

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

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../../../kernel/mods/stack/process/instance/classes/Process.md#unlockfile)

***

### write()

> **write**(`text`): `void`

Defined in: [src/ts/terminal/readline/readline.ts:157](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L157)

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

Defined in: [src/ts/terminal/readline/readline.ts:148](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/readline.ts#L148)

writeReady() may be used to implement basic output flow control. This function
will return false if the writes to the terminal initiated by Readline have
reached a highwater mark.

#### Returns

`boolean`

true if this terminal is accepting more input.
