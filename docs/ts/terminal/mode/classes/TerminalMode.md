[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/terminal/mode](../README.md) / TerminalMode

# Class: TerminalMode

Defined in: [src/ts/terminal/mode/index.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/mode/index.ts#L23)

## Extends

- [`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md)

## Implements

- [`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md)

## Constructors

### Constructor

> **new TerminalMode**(`pid`, `parentPid`, `target`): `TerminalMode`

Defined in: [src/ts/terminal/mode/index.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/mode/index.ts#L32)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### target

`HTMLDivElement`

#### Returns

`TerminalMode`

#### Overrides

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`constructor`](../../../kernel/mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`_criticalProcess`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#_criticalprocess)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../../kernel/mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### arcTerm?

> `optional` **arcTerm?**: [`IArcTerminal`](../../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md)

Defined in: [src/ts/terminal/mode/index.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/mode/index.ts#L28)

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`arcTerm`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#arcterm)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`dispatch`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#dispatch)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`dispatch`](../../../kernel/mods/stack/process/instance/classes/Process.md#dispatch)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`name`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#name)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`name`](../../../kernel/mods/stack/process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`parentPid`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#parentpid)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`parentPid`](../../../kernel/mods/stack/process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`pid`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#pid)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`pid`](../../../kernel/mods/stack/process/instance/classes/Process.md#pid)

***

### rl?

> `optional` **rl?**: [`Readline`](../../readline/readline/classes/Readline.md)

Defined in: [src/ts/terminal/mode/index.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/mode/index.ts#L27)

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`rl`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#rl)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`sourceUrl`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#sourceurl)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`sourceUrl`](../../../kernel/mods/stack/process/instance/classes/Process.md#sourceurl)

***

### target

> **target**: `HTMLDivElement`

Defined in: [src/ts/terminal/mode/index.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/mode/index.ts#L25)

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`target`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#target)

***

### term?

> `optional` **term?**: `Terminal`

Defined in: [src/ts/terminal/mode/index.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/mode/index.ts#L26)

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`term`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#term)

***

### userDaemon?

> `optional` **userDaemon?**: [`IUserDaemon`](../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

Defined in: [src/ts/terminal/mode/index.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/mode/index.ts#L24)

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`userDaemon`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#userdaemon)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`_disposed`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#_disposed)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`_disposed`](../../../kernel/mods/stack/process/instance/classes/Process.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`MEMORY`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#memory)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`MEMORY`](../../../kernel/mods/stack/process/instance/classes/Process.md#memory)

***

### STATE

#### Get Signature

> **get** **STATE**(): [`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L17)

##### Returns

[`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

#### Set Signature

> **set** **STATE**(`value`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L21)

##### Parameters

###### value

[`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

##### Returns

`void`

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`STATE`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#state)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`STATE`](../../../kernel/mods/stack/process/instance/classes/Process.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`__start`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#__start)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`__start`](../../../kernel/mods/stack/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`__stop`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#__stop)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`__stop`](../../../kernel/mods/stack/process/instance/classes/Process.md#__stop)

***

### askForTotp()

> **askForTotp**(`token`): `Promise`\<`boolean`\>

Defined in: [src/ts/terminal/mode/index.ts:239](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/mode/index.ts#L239)

#### Parameters

##### token

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`askForTotp`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#askfortotp)

***

### initializeTerminal()

> **initializeTerminal**(): `Promise`\<`void`\>

Defined in: [src/ts/terminal/mode/index.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/mode/index.ts#L50)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`initializeTerminal`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#initializeterminal)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`killSelf`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#killself)

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

[`LogLevel`](../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`Log`](../../../kernel/mods/stack/process/instance/classes/Process.md#log)

***

### loginPrompt()

> **loginPrompt**(`clear?`): `Promise`\<`boolean`\>

Defined in: [src/ts/terminal/mode/index.ts:198](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/mode/index.ts#L198)

#### Parameters

##### clear?

`boolean` = `true`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`loginPrompt`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#loginprompt)

***

### proceed()

> **proceed**(`username`, `password`): `Promise`\<`boolean`\>

Defined in: [src/ts/terminal/mode/index.ts:96](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/mode/index.ts#L96)

#### Parameters

##### username

`string`

##### password

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`proceed`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#proceed)

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

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`requestFileLock`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#requestfilelock)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`requestFileLock`](../../../kernel/mods/stack/process/instance/classes/Process.md#requestfilelock)

***

### resetCookies()

> **resetCookies**(): `void`

Defined in: [src/ts/terminal/mode/index.ts:167](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/mode/index.ts#L167)

#### Returns

`void`

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`resetCookies`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#resetcookies)

***

### serverPrompt()

> **serverPrompt**(): `Promise`\<`boolean`\>

Defined in: [src/ts/terminal/mode/index.ts:174](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/mode/index.ts#L174)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`serverPrompt`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#serverprompt)

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

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`setSource`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#setsource)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`setSource`](../../../kernel/mods/stack/process/instance/classes/Process.md#setsource)

***

### start()

> **start**(): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/terminal/mode/index.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/mode/index.ts#L41)

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Overrides

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`start`](../../../kernel/mods/stack/process/instance/classes/Process.md#start)

***

### startDaemon()

> **startDaemon**(`token`, `username`): `Promise`\<`boolean`\>

Defined in: [src/ts/terminal/mode/index.ts:105](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/mode/index.ts#L105)

#### Parameters

##### token

`string`

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`startDaemon`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#startdaemon)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`stop`](../../../kernel/mods/stack/process/instance/classes/Process.md#stop)

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

[`ITerminalMode`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md).[`unlockFile`](../../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md#unlockfile)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../../kernel/mods/stack/process/instance/classes/Process.md#unlockfile)
