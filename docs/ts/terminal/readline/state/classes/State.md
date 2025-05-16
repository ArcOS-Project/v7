[**ArcOS v7**](../../../../../README.md)

***

[ArcOS v7](../../../../../modules.md) / [ts/terminal/readline/state](../README.md) / State

# Class: State

Defined in: [src/ts/terminal/readline/state.ts:54](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L54)

## Extends

- [`Process`](../../../../process/instance/classes/Process.md)

## Constructors

### Constructor

> **new State**(`handler`, `pid`, `parentPid`, `prompt`, `tty`, `highlighter`, `history?`, `conceiled?`): `State`

Defined in: [src/ts/terminal/readline/state.ts:65](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L65)

#### Parameters

##### handler

[`ProcessHandler`](../../../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

##### prompt

`string`

##### tty

[`Tty`](../../tty/classes/Tty.md)

##### highlighter

[`Highlighter`](../../highlight/interfaces/Highlighter.md)

##### history?

[`History`](../../history/classes/History.md)

##### conceiled?

`boolean` = `false`

#### Returns

`State`

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

### buffer()

> **buffer**(): `string`

Defined in: [src/ts/terminal/readline/state.ts:87](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L87)

#### Returns

`string`

***

### clearScreen()

> **clearScreen**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:104](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L104)

#### Returns

`void`

***

### editBackspace()

> **editBackspace**(`n`): `void`

Defined in: [src/ts/terminal/readline/state.ts:135](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L135)

#### Parameters

##### n

`number`

#### Returns

`void`

***

### editDelete()

> **editDelete**(`n`): `void`

Defined in: [src/ts/terminal/readline/state.ts:141](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L141)

#### Parameters

##### n

`number`

#### Returns

`void`

***

### editDeleteEndOfLine()

> **editDeleteEndOfLine**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:149](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L149)

#### Returns

`void`

***

### editInsert()

> **editInsert**(`text`): `void`

Defined in: [src/ts/terminal/readline/state.ts:113](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L113)

#### Parameters

##### text

`string`

#### Returns

`void`

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

### moveCursor()

> **moveCursor**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:244](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L244)

#### Returns

`void`

***

### moveCursorBack()

> **moveCursorBack**(`n`): `void`

Defined in: [src/ts/terminal/readline/state.ts:163](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L163)

#### Parameters

##### n

`number`

#### Returns

`void`

***

### moveCursorDown()

> **moveCursorDown**(`n`): `void`

Defined in: [src/ts/terminal/readline/state.ts:186](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L186)

#### Parameters

##### n

`number`

#### Returns

`void`

***

### moveCursorEnd()

> **moveCursorEnd**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:202](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L202)

#### Returns

`void`

***

### moveCursorForward()

> **moveCursorForward**(`n`): `void`

Defined in: [src/ts/terminal/readline/state.ts:170](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L170)

#### Parameters

##### n

`number`

#### Returns

`void`

***

### moveCursorHome()

> **moveCursorHome**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:195](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L195)

#### Returns

`void`

***

### moveCursorToEnd()

> **moveCursorToEnd**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:209](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L209)

#### Returns

`void`

***

### moveCursorUp()

> **moveCursorUp**(`n`): `void`

Defined in: [src/ts/terminal/readline/state.ts:177](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L177)

#### Parameters

##### n

`number`

#### Returns

`void`

***

### nextHistory()

> **nextHistory**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:230](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L230)

#### Returns

`void`

***

### previousHistory()

> **previousHistory**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:218](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L218)

#### Returns

`void`

***

### refresh()

> **refresh**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:157](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L157)

#### Returns

`void`

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

### shouldHighlight()

> **shouldHighlight**(): `boolean`

Defined in: [src/ts/terminal/readline/state.ts:91](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L91)

#### Returns

`boolean`

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L44)

#### Returns

`Promise`\<`any`\>

#### Inherited from

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

### update()

> **update**(`text`): `void`

Defined in: [src/ts/terminal/readline/state.ts:130](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/state.ts#L130)

#### Parameters

##### text

`string`

#### Returns

`void`
