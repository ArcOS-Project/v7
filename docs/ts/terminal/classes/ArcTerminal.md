[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [ts/terminal](../README.md) / ArcTerminal

# Class: ArcTerminal

Defined in: [src/ts/terminal/index.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L31)

## Extends

- [`Process`](../../kernel/mods/stack/process/instance/classes/Process.md)

## Implements

- [`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md)

## Constructors

### Constructor

> **new ArcTerminal**(`pid`, `parentPid`, `term`, `path?`, `config?`, `mode?`): `ArcTerminal`

Defined in: [src/ts/terminal/index.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L51)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### term

`Terminal`

##### path?

`string`

##### config?

[`ArcTermConfiguration`](../../../types/terminal/interfaces/ArcTermConfiguration.md)

##### mode?

[`ITerminalMode`](../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md)

#### Returns

`ArcTerminal`

#### Overrides

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`constructor`](../../kernel/mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`_criticalProcess`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#_criticalprocess)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../kernel/mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### ansiEscapes

> **ansiEscapes**: `__module`

Defined in: [src/ts/terminal/index.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L40)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`ansiEscapes`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#ansiescapes)

***

### config

> **config**: [`ArcTermConfiguration`](../../../types/terminal/interfaces/ArcTermConfiguration.md) = `DefaultArcTermConfiguration`

Defined in: [src/ts/terminal/index.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L43)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`config`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#config)

***

### CONFIG\_PATH

> `readonly` **CONFIG\_PATH**: `string`

Defined in: [src/ts/terminal/index.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L32)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`CONFIG_PATH`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#config_path)

***

### configProvidedExternal

> **configProvidedExternal**: `boolean` = `false`

Defined in: [src/ts/terminal/index.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L44)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`configProvidedExternal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#configprovidedexternal)

***

### contents

> **contents**: [`DirectoryReadReturn`](../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`

Defined in: [src/ts/terminal/index.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L38)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`contents`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#contents)

***

### daemon

> **daemon**: [`IUserDaemon`](../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md) \| `undefined`

Defined in: [src/ts/terminal/index.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L39)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`daemon`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#daemon)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`dispatch`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#dispatch)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`dispatch`](../../kernel/mods/stack/process/instance/classes/Process.md#dispatch)

***

### drive

> **drive**: [`IFilesystemDrive`](../../../interfaces/IFilesystemDrive/interfaces/IFilesystemDrive.md) \| `undefined`

Defined in: [src/ts/terminal/index.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L34)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`drive`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#drive)

***

### IS\_ARCTERM\_MODE

> **IS\_ARCTERM\_MODE**: `boolean` = `false`

Defined in: [src/ts/terminal/index.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L46)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`IS_ARCTERM_MODE`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#is_arcterm_mode)

***

### lastCommandErrored

> **lastCommandErrored**: `boolean` = `false`

Defined in: [src/ts/terminal/index.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L41)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`lastCommandErrored`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#lastcommanderrored)

***

### lastLine?

> `optional` **lastLine?**: `string`

Defined in: [src/ts/terminal/index.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L42)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`lastLine`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#lastline)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`name`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#name)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`name`](../../kernel/mods/stack/process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`parentPid`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#parentpid)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`parentPid`](../../kernel/mods/stack/process/instance/classes/Process.md#parentpid)

***

### path

> **path**: `string`

Defined in: [src/ts/terminal/index.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L33)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`path`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#path)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`pid`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#pid)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`pid`](../../kernel/mods/stack/process/instance/classes/Process.md#pid)

***

### rl

> **rl**: [`Readline`](../readline/readline/classes/Readline.md) \| `undefined`

Defined in: [src/ts/terminal/index.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L36)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`rl`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#rl)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`sourceUrl`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#sourceurl)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`sourceUrl`](../../kernel/mods/stack/process/instance/classes/Process.md#sourceurl)

***

### term

> **term**: `Terminal`

Defined in: [src/ts/terminal/index.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L35)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`term`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#term)

***

### terminalMode?

> `optional` **terminalMode?**: [`ITerminalMode`](../../../interfaces/IArcTerminal/interfaces/ITerminalMode.md)

Defined in: [src/ts/terminal/index.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L47)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`terminalMode`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#terminalmode)

***

### var

> **var**: [`ArcTermVariables`](../var/classes/ArcTermVariables.md) \| `undefined`

Defined in: [src/ts/terminal/index.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L37)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`var`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#var)

***

### window

> **window**: [`ITerminalWindowRuntime`](../../../interfaces/IArcTerminal/interfaces/ITerminalWindowRuntime.md) \| `undefined`

Defined in: [src/ts/terminal/index.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L45)

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`window`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#window)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`_disposed`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#_disposed)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`_disposed`](../../kernel/mods/stack/process/instance/classes/Process.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`MEMORY`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#memory)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`MEMORY`](../../kernel/mods/stack/process/instance/classes/Process.md#memory)

***

### STATE

#### Get Signature

> **get** **STATE**(): [`ProcessState`](../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L17)

##### Returns

[`ProcessState`](../../../types/system/process/type-aliases/ProcessState.md)

#### Set Signature

> **set** **STATE**(`value`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L21)

##### Parameters

###### value

[`ProcessState`](../../../types/system/process/type-aliases/ProcessState.md)

##### Returns

`void`

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`STATE`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#state)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`STATE`](../../kernel/mods/stack/process/instance/classes/Process.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`__start`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#__start)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`__start`](../../kernel/mods/stack/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`__stop`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#__stop)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`__stop`](../../kernel/mods/stack/process/instance/classes/Process.md#__stop)

***

### changeDirectory()

> **changeDirectory**(`path`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/terminal/index.ts:270](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L270)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`changeDirectory`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#changedirectory)

***

### copyItem()

> **copyItem**(`source`, `destination`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/terminal/index.ts:227](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L227)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`copyItem`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#copyitem)

***

### createDirectory()

> **createDirectory**(`path`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/terminal/index.ts:206](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L206)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`createDirectory`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#createdirectory)

***

### deleteItem()

> **deleteItem**(`path`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/terminal/index.ts:248](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L248)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`deleteItem`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#deleteitem)

***

### elevate()

> **elevate**(`data`): `Promise`\<`boolean`\>

Defined in: [src/ts/terminal/index.ts:335](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L335)

#### Parameters

##### data

[`ElevationData`](../../../types/system/elevation/interfaces/ElevationData.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`elevate`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#elevate)

***

### Error()

> **Error**(`message`, `prefix?`): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:255](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L255)

#### Parameters

##### message

`string`

##### prefix?

`string` = `"Error"`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`Error`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#error)

***

### handleCommandError()

> **handleCommandError**(`e`, `command`): `void`

Defined in: [src/ts/terminal/index.ts:527](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L527)

#### Parameters

##### e

`Error`

##### command

[`Constructs`](../../../interfaces/common/interfaces/Constructs.md)\<[`ITerminalProcess`](../../../interfaces/IArcTerminal/interfaces/ITerminalProcess.md)\>

#### Returns

`void`

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`handleCommandError`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#handlecommanderror)

***

### Info()

> **Info**(`message`, `prefix?`): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:265](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L265)

#### Parameters

##### message

`string`

##### prefix?

`string` = `"Info"`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`Info`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#info)

***

### join()

> **join**(`path?`): `string`

Defined in: [src/ts/terminal/index.ts:191](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L191)

#### Parameters

##### path?

`string`

#### Returns

`string`

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`join`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#join)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`killSelf`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#killself)

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

[`LogLevel`](../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`Log`](../../kernel/mods/stack/process/instance/classes/Process.md#log)

***

### ~~migrateConfigurationPath()~~

> **migrateConfigurationPath**(): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:523](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L523)

#### Returns

`Promise`\<`void`\>

#### Deprecated

This migration has expired

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`migrateConfigurationPath`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#migrateconfigurationpath)

***

### moveItem()

> **moveItem**(`source`, `destination`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/terminal/index.ts:234](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L234)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`moveItem`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#moveitem)

***

### parseFlags()

> **parseFlags**(`args`): \[[`Arguments`](../../../types/terminal/type-aliases/Arguments.md), `string`\]

Defined in: [src/ts/terminal/index.ts:301](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L301)

#### Parameters

##### args

`string`

#### Returns

\[[`Arguments`](../../../types/terminal/type-aliases/Arguments.md), `string`\]

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`parseFlags`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#parseflags)

***

### processLine()

> **processLine**(`text`): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:113](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L113)

#### Parameters

##### text

`string` \| `undefined`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`processLine`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#processline)

***

### readConfig()

> **readConfig**(): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:398](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L398)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`readConfig`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#readconfig)

***

### readDir()

> **readDir**(`path?`): `Promise`\<[`DirectoryReadReturn`](../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/terminal/index.ts:199](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L199)

#### Parameters

##### path?

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`readDir`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#readdir)

***

### readFile()

> **readFile**(`path`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/terminal/index.ts:241](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L241)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`readFile`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#readfile)

***

### readline()

> **readline**(): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:105](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L105)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`readline`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#readline)

***

### reload()

> **reload**(): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:476](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L476)

WARNING: this method ONLY works if there's no active readline prompt in progress. Running this method whilst
receiving input from the user will cause two readlines to happen on the same instance. DO NOT DO THAT.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`reload`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#reload)

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

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`requestFileLock`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#requestfilelock)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`requestFileLock`](../../kernel/mods/stack/process/instance/classes/Process.md#requestfilelock)

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

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`setSource`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#setsource)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`setSource`](../../kernel/mods/stack/process/instance/classes/Process.md#setsource)

***

### start()

> **start**(): `Promise`\<`false` \| `void`\>

Defined in: [src/ts/terminal/index.ts:77](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L77)

#### Returns

`Promise`\<`false` \| `void`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`start`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#start)

#### Overrides

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`start`](../../kernel/mods/stack/process/instance/classes/Process.md#start)

***

### stop()

> **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/terminal/index.ts:327](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L327)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`stop`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#stop)

#### Overrides

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`stop`](../../kernel/mods/stack/process/instance/classes/Process.md#stop)

***

### tree()

> **tree**(`path`): `Promise`\<[`RecursiveDirectoryReadReturn`](../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/ts/terminal/index.ts:220](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L220)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`RecursiveDirectoryReadReturn`](../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`tree`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#tree)

***

### tryGetTermWindow()

> **tryGetTermWindow**(): `void`

Defined in: [src/ts/terminal/index.ts:484](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L484)

#### Returns

`void`

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`tryGetTermWindow`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#trygettermwindow)

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

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`unlockFile`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#unlockfile)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../kernel/mods/stack/process/instance/classes/Process.md#unlockfile)

***

### Warning()

> **Warning**(`message`, `prefix?`): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:260](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L260)

#### Parameters

##### message

`string`

##### prefix?

`string` = `"Warning"`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`Warning`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#warning)

***

### writeConfig()

> **writeConfig**(): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:460](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L460)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`writeConfig`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#writeconfig)

***

### writeFile()

> **writeFile**(`path`, `data`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/terminal/index.ts:213](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/index.ts#L213)

#### Parameters

##### path

`string`

##### data

`Blob`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md).[`writeFile`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md#writefile)
