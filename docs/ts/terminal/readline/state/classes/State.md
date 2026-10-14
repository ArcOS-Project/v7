[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/terminal/readline/state](../README.md) / State

# Class: State

Defined in: [src/ts/terminal/readline/state.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L24)

## Extends

- [`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md)

## Constructors

### Constructor

> **new State**(`pid`, `parentPid`, `prompt`, `tty`, `highlighter`, `history?`, `conceiled?`): `State`

Defined in: [src/ts/terminal/readline/state.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L37)

#### Parameters

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

### buffer()

> **buffer**(): `string`

Defined in: [src/ts/terminal/readline/state.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L62)

#### Returns

`string`

***

### clearScreen()

> **clearScreen**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L79)

#### Returns

`void`

***

### editBackspace()

> **editBackspace**(`n`): `void`

Defined in: [src/ts/terminal/readline/state.ts:109](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L109)

#### Parameters

##### n

`number`

#### Returns

`void`

***

### editDelete()

> **editDelete**(`n`): `void`

Defined in: [src/ts/terminal/readline/state.ts:115](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L115)

#### Parameters

##### n

`number`

#### Returns

`void`

***

### editDeleteEndOfLine()

> **editDeleteEndOfLine**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:121](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L121)

#### Returns

`void`

***

### editInsert()

> **editInsert**(`text`): `void`

Defined in: [src/ts/terminal/readline/state.ts:86](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L86)

#### Parameters

##### text

`string`

#### Returns

`void`

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

### moveCursor()

> **moveCursor**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:203](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L203)

#### Returns

`void`

***

### moveCursorBack()

> **moveCursorBack**(`n`): `void`

Defined in: [src/ts/terminal/readline/state.ts:133](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L133)

#### Parameters

##### n

`number`

#### Returns

`void`

***

### moveCursorDown()

> **moveCursorDown**(`n`): `void`

Defined in: [src/ts/terminal/readline/state.ts:153](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L153)

#### Parameters

##### n

`number`

#### Returns

`void`

***

### moveCursorEnd()

> **moveCursorEnd**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:167](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L167)

#### Returns

`void`

***

### moveCursorForward()

> **moveCursorForward**(`n`): `void`

Defined in: [src/ts/terminal/readline/state.ts:139](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L139)

#### Parameters

##### n

`number`

#### Returns

`void`

***

### moveCursorHome()

> **moveCursorHome**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:161](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L161)

#### Returns

`void`

***

### moveCursorToEnd()

> **moveCursorToEnd**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:173](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L173)

#### Returns

`void`

***

### moveCursorUp()

> **moveCursorUp**(`n`): `void`

Defined in: [src/ts/terminal/readline/state.ts:145](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L145)

#### Parameters

##### n

`number`

#### Returns

`void`

***

### nextHistory()

> **nextHistory**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:191](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L191)

#### Returns

`void`

***

### previousHistory()

> **previousHistory**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:181](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L181)

#### Returns

`void`

***

### refresh()

> **refresh**(): `void`

Defined in: [src/ts/terminal/readline/state.ts:127](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L127)

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

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`setSource`](../../../../kernel/mods/stack/process/instance/classes/Process.md#setsource)

***

### shouldHighlight()

> **shouldHighlight**(): `boolean`

Defined in: [src/ts/terminal/readline/state.ts:66](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L66)

#### Returns

`boolean`

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

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

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

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../../../kernel/mods/stack/process/instance/classes/Process.md#unlockfile)

***

### update()

> **update**(`text`): `void`

Defined in: [src/ts/terminal/readline/state.ts:104](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/state.ts#L104)

#### Parameters

##### text

`string`

#### Returns

`void`
