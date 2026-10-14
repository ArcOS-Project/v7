[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/terminal/process](../README.md) / TerminalProcess

# Class: TerminalProcess

Defined in: [src/ts/terminal/process.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L10)

## Extends

- [`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md)

## Extended by

- [`AdminCommand`](../../commands/admin/classes/AdminCommand.md)
- [`AppListCommand`](../../commands/applist/classes/AppListCommand.md)
- [`ArcFetchCommand`](../../commands/arcfetch/classes/ArcFetchCommand.md)
- [`AtConfCommand`](../../commands/atconf/classes/AtConfCommand.md)
- [`Base64Command`](../../commands/base64/classes/Base64Command.md)
- [`BasicCommand`](../../commands/basic/classes/BasicCommand.md)
- [`CdCommand`](../../commands/cd/classes/CdCommand.md)
- [`ClearCommand`](../../commands/clear/classes/ClearCommand.md)
- [`ConfigCommand`](../../commands/config/classes/ConfigCommand.md)
- [`CrTpaCommand`](../../commands/crtpa/classes/CrTpaCommand.md)
- [`DevenvCommand`](../../commands/devenv/classes/DevenvCommand.md)
- [`DirCommand`](../../commands/dir/classes/DirCommand.md)
- [`DispatchCommand`](../../commands/dispatch/classes/DispatchCommand.md)
- [`DrivesCommand`](../../commands/drives/classes/DrivesCommand.md)
- [`EchoCommand`](../../commands/echo/classes/EchoCommand.md)
- [`ExitCommand`](../../commands/exit/classes/ExitCommand.md)
- [`ExploreCommand`](../../commands/explore/classes/ExploreCommand.md)
- [`FindCommand`](../../commands/find/classes/FindCommand.md)
- [`HelpCommand`](../../commands/help/classes/HelpCommand.md)
- [`HistoryCommand`](../../commands/history/classes/HistoryCommand.md)
- [`InputCommand`](../../commands/input/classes/InputCommand.md)
- [`KillCommand`](../../commands/kill/classes/KillCommand.md)
- [`KlogCommand`](../../commands/klog/classes/KlogCommand.md)
- [`LoadCommand`](../../commands/load/classes/LoadCommand.md)
- [`LogoutCommand`](../../commands/logout/classes/LogoutCommand.md)
- [`MigrationsCommand`](../../commands/migrations/classes/MigrationsCommand.md)
- [`MkdirCommand`](../../commands/mkdir/classes/MkdirCommand.md)
- [`OpenCommand`](../../commands/open/classes/OpenCommand.md)
- [`PkgCommand`](../../commands/pkg/classes/PkgCommand.md)
- [`QuotaCommand`](../../commands/quota/classes/QuotaCommand.md)
- [`ReloadCommand`](../../commands/reload/classes/ReloadCommand.md)
- [`RestartCommand`](../../commands/restart/classes/RestartCommand.md)
- [`RmCommand`](../../commands/rm/classes/RmCommand.md)
- [`ServiceCommand`](../../commands/service/classes/ServiceCommand.md)
- [`ShutdownCommand`](../../commands/shutdown/classes/ShutdownCommand.md)
- [`SoundbusCommand`](../../commands/soundbus/classes/SoundbusCommand.md)
- [`SpawnCommand`](../../commands/spawn/classes/SpawnCommand.md)
- [`TasksCommand`](../../commands/tasks/classes/TasksCommand.md)
- [`TestCommand`](../../commands/test/classes/TestCommand.md)
- [`TostrCommand`](../../commands/tostr/classes/TostrCommand.md)
- [`TreeCommand`](../../commands/tree/classes/TreeCommand.md)
- [`UuidCommand`](../../commands/uuid/classes/UuidCommand.md)
- [`VerCommand`](../../commands/ver/classes/VerCommand.md)

## Constructors

### Constructor

> **new TerminalProcess**(`pid`, `parentPid`): `TerminalProcess`

Defined in: [src/ts/terminal/process.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L25)

#### Parameters

##### pid

`number`

##### parentPid

`number`

#### Returns

`TerminalProcess`

#### Overrides

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`constructor`](../../../kernel/mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../../kernel/mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### argv?

> `protected` `optional` **argv?**: `string`[]

Defined in: [src/ts/terminal/process.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L17)

***

### daemon?

> `protected` `optional` **daemon?**: [`IUserDaemon`](../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

Defined in: [src/ts/terminal/process.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L18)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`dispatch`](../../../kernel/mods/stack/process/instance/classes/Process.md#dispatch)

***

### flags?

> `protected` `optional` **flags?**: [`Arguments`](../../../../types/terminal/type-aliases/Arguments.md)

Defined in: [src/ts/terminal/process.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L16)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`name`](../../../kernel/mods/stack/process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`parentPid`](../../../kernel/mods/stack/process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`pid`](../../../kernel/mods/stack/process/instance/classes/Process.md#pid)

***

### rl?

> `protected` `optional` **rl?**: [`Readline`](../../readline/readline/classes/Readline.md)

Defined in: [src/ts/terminal/process.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L20)

***

### serviceHost?

> `protected` `optional` **serviceHost?**: [`IServiceHost`](../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/terminal/process.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L19)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`sourceUrl`](../../../kernel/mods/stack/process/instance/classes/Process.md#sourceurl)

***

### term?

> `protected` `optional` **term?**: [`IArcTerminal`](../../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md)

Defined in: [src/ts/terminal/process.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L15)

***

### allowInterrupt

> `static` **allowInterrupt**: `boolean` = `false`

Defined in: [src/ts/terminal/process.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L14)

***

### description

> `static` **description**: `string`

Defined in: [src/ts/terminal/process.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L12)

***

### hidden

> `static` **hidden**: `boolean` = `false`

Defined in: [src/ts/terminal/process.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L13)

***

### keyword

> `static` **keyword**: `string`

Defined in: [src/ts/terminal/process.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L11)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`_disposed`](../../../kernel/mods/stack/process/instance/classes/Process.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

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

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`STATE`](../../../kernel/mods/stack/process/instance/classes/Process.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`__start`](../../../kernel/mods/stack/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`__stop`](../../../kernel/mods/stack/process/instance/classes/Process.md#__stop)

***

### \_main()

> **\_main**(`term`, `flags`, `argv`): `Promise`\<`any`\>

Defined in: [src/ts/terminal/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L38)

#### Parameters

##### term

[`IArcTerminal`](../../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md)

##### flags

[`Arguments`](../../../../types/terminal/type-aliases/Arguments.md)

##### argv

`string`[]

#### Returns

`Promise`\<`any`\>

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

[`LogLevel`](../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`Log`](../../../kernel/mods/stack/process/instance/classes/Process.md#log)

***

### main()

> `protected` **main**(`term`, `flags`, `argv`): `Promise`\<`number`\>

Defined in: [src/ts/terminal/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/process.ts#L34)

#### Parameters

##### term

[`IArcTerminal`](../../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md)

##### flags

[`Arguments`](../../../../types/terminal/type-aliases/Arguments.md)

##### argv

`string`[]

#### Returns

`Promise`\<`number`\>

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

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`requestFileLock`](../../../kernel/mods/stack/process/instance/classes/Process.md#requestfilelock)

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

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`setSource`](../../../kernel/mods/stack/process/instance/classes/Process.md#setsource)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L49)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`start`](../../../kernel/mods/stack/process/instance/classes/Process.md#start)

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

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../../kernel/mods/stack/process/instance/classes/Process.md#unlockfile)
