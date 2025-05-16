[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [ts/terminal](../README.md) / ArcTerminal

# Class: ArcTerminal

Defined in: [src/ts/terminal/index.ts:31](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L31)

## Extends

- [`Process`](../../process/instance/classes/Process.md)

## Constructors

### Constructor

> **new ArcTerminal**(`handler`, `pid`, `parentPid`, `term`, `path?`): `ArcTerminal`

Defined in: [src/ts/terminal/index.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L44)

#### Parameters

##### handler

[`ProcessHandler`](../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

##### term

`Terminal`

##### path?

`string`

#### Returns

`ArcTerminal`

#### Overrides

[`Process`](../../process/instance/classes/Process.md).[`constructor`](../../process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L22)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`_criticalProcess`](../../process/instance/classes/Process.md#_criticalprocess)

***

### \_disposed

> **\_disposed**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L21)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`_disposed`](../../process/instance/classes/Process.md#_disposed)

***

### ansiEscapes

> **ansiEscapes**: `__module`

Defined in: [src/ts/terminal/index.ts:39](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L39)

***

### config

> **config**: [`ArcTermConfiguration`](../../../types/terminal/interfaces/ArcTermConfiguration.md) = `DefaultArcTermConfiguration`

Defined in: [src/ts/terminal/index.ts:41](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L41)

***

### contents

> **contents**: `undefined` \| [`DirectoryReadReturn`](../../../types/fs/interfaces/DirectoryReadReturn.md)

Defined in: [src/ts/terminal/index.ts:37](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L37)

***

### daemon

> **daemon**: `undefined` \| [`UserDaemon`](../../server/user/daemon/classes/UserDaemon.md)

Defined in: [src/ts/terminal/index.ts:38](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L38)

***

### dispatch

> **dispatch**: [`ProcessDispatch`](../../process/dispatch/classes/ProcessDispatch.md)

Defined in: [src/ts/process/instance.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L15)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`dispatch`](../../process/instance/classes/Process.md#dispatch)

***

### drive

> **drive**: `undefined` \| [`FilesystemDrive`](../../fs/drive/classes/FilesystemDrive.md)

Defined in: [src/ts/terminal/index.ts:33](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L33)

***

### env

> **env**: [`Environment`](../../kernel/env/classes/Environment.md)

Defined in: [src/ts/process/instance.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L12)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`env`](../../process/instance/classes/Process.md#env)

***

### fs

> **fs**: [`Filesystem`](../../fs/classes/Filesystem.md)

Defined in: [src/ts/process/instance.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L23)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`fs`](../../process/instance/classes/Process.md#fs)

***

### handler

> **handler**: [`ProcessHandler`](../../process/handler/classes/ProcessHandler.md)

Defined in: [src/ts/process/instance.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L14)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`handler`](../../process/instance/classes/Process.md#handler)

***

### kernel

> **kernel**: [`WaveKernel`](../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/process/instance.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L17)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`kernel`](../../process/instance/classes/Process.md#kernel)

***

### lastCommandErrored

> **lastCommandErrored**: `boolean` = `false`

Defined in: [src/ts/terminal/index.ts:40](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L40)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/process/instance.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L20)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`name`](../../process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/process/instance.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L19)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`parentPid`](../../process/instance/classes/Process.md#parentpid)

***

### path

> **path**: `string`

Defined in: [src/ts/terminal/index.ts:32](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L32)

***

### pid

> **pid**: `number`

Defined in: [src/ts/process/instance.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L18)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`pid`](../../process/instance/classes/Process.md#pid)

***

### rl

> **rl**: `undefined` \| [`Readline`](../readline/readline/classes/Readline.md)

Defined in: [src/ts/terminal/index.ts:35](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L35)

***

### soundBus

> **soundBus**: [`SoundBus`](../../soundbus/classes/SoundBus.md)

Defined in: [src/ts/process/instance.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L13)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`soundBus`](../../process/instance/classes/Process.md#soundbus)

***

### systemDispatch

> **systemDispatch**: [`SystemDispatch`](../../dispatch/classes/SystemDispatch.md)

Defined in: [src/ts/process/instance.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L16)

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`systemDispatch`](../../process/instance/classes/Process.md#systemdispatch)

***

### term

> **term**: `Terminal`

Defined in: [src/ts/terminal/index.ts:34](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L34)

***

### var

> **var**: `undefined` \| [`ArcTermVariables`](../var/classes/ArcTermVariables.md)

Defined in: [src/ts/terminal/index.ts:36](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L36)

***

### window

> **window**: `undefined` \| [`TerminalWindowRuntime`](../../../apps/components/terminalwindow/runtime/classes/TerminalWindowRuntime.md)

Defined in: [src/ts/terminal/index.ts:42](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L42)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L48)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`__start`](../../process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:54](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L54)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`__stop`](../../process/instance/classes/Process.md#__stop)

***

### changeDirectory()

> **changeDirectory**(`path`): `Promise`\<`undefined` \| `boolean`\>

Defined in: [src/ts/terminal/index.ts:187](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L187)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `boolean`\>

***

### copyItem()

> **copyItem**(`source`, `destination`): `Promise`\<`undefined` \| `boolean`\>

Defined in: [src/ts/terminal/index.ts:145](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L145)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`undefined` \| `boolean`\>

***

### createDirectory()

> **createDirectory**(`path`): `Promise`\<`undefined` \| `boolean`\>

Defined in: [src/ts/terminal/index.ts:127](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L127)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `boolean`\>

***

### deleteItem()

> **deleteItem**(`path`): `Promise`\<`undefined` \| `boolean`\>

Defined in: [src/ts/terminal/index.ts:163](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L163)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `boolean`\>

***

### elevate()

> **elevate**(`data`): `Promise`\<`boolean`\>

Defined in: [src/ts/terminal/index.ts:251](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L251)

#### Parameters

##### data

[`ElevationData`](../../../types/elevation/interfaces/ElevationData.md)

#### Returns

`Promise`\<`boolean`\>

***

### Error()

> **Error**(`message`, `prefix`): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:169](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L169)

#### Parameters

##### message

`string`

##### prefix

`string` = `"Error"`

#### Returns

`Promise`\<`void`\>

***

### Info()

> **Info**(`message`, `prefix`): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:181](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L181)

#### Parameters

##### message

`string`

##### prefix

`string` = `"Info"`

#### Returns

`Promise`\<`void`\>

***

### join()

> **join**(`path?`): `string`

Defined in: [src/ts/terminal/index.ts:112](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L112)

#### Parameters

##### path?

`string`

#### Returns

`string`

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/process/instance.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L60)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`killSelf`](../../process/instance/classes/Process.md#killself)

***

### Log()

> `protected` **Log**(`message`, `level`): `void`

Defined in: [src/ts/process/instance.ts:67](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L67)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`Process`](../../process/instance/classes/Process.md).[`Log`](../../process/instance/classes/Process.md#log)

***

### moveItem()

> **moveItem**(`source`, `destination`): `Promise`\<`undefined` \| `boolean`\>

Defined in: [src/ts/terminal/index.ts:151](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L151)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`undefined` \| `boolean`\>

***

### parseFlags()

> **parseFlags**(`args`): \[[`Arguments`](../../../types/terminal/type-aliases/Arguments.md), `string`\]

Defined in: [src/ts/terminal/index.ts:216](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L216)

#### Parameters

##### args

`string`

#### Returns

\[[`Arguments`](../../../types/terminal/type-aliases/Arguments.md), `string`\]

***

### processLine()

> **processLine**(`text`): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:77](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L77)

#### Parameters

##### text

`undefined` | `string`

#### Returns

`Promise`\<`void`\>

***

### readConfig()

> **readConfig**(): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:312](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L312)

#### Returns

`Promise`\<`void`\>

***

### readDir()

> **readDir**(`path?`): `Promise`\<`undefined` \| [`DirectoryReadReturn`](../../../types/fs/interfaces/DirectoryReadReturn.md)\>

Defined in: [src/ts/terminal/index.ts:121](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L121)

#### Parameters

##### path?

`string`

#### Returns

`Promise`\<`undefined` \| [`DirectoryReadReturn`](../../../types/fs/interfaces/DirectoryReadReturn.md)\>

***

### readFile()

> **readFile**(`path`): `Promise`\<`undefined` \| `ArrayBuffer`\>

Defined in: [src/ts/terminal/index.ts:157](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L157)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `ArrayBuffer`\>

***

### readline()

> **readline**(): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:67](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L67)

#### Returns

`Promise`\<`void`\>

***

### reload()

> **reload**(): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:333](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L333)

#### Returns

`Promise`\<`void`\>

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

[`Process`](../../process/instance/classes/Process.md).[`requestFileLock`](../../process/instance/classes/Process.md#requestfilelock)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:55](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L55)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Process`](../../process/instance/classes/Process.md).[`start`](../../process/instance/classes/Process.md#start)

***

### stop()

> **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/terminal/index.ts:243](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L243)

#### Returns

`Promise`\<`any`\>

#### Overrides

[`Process`](../../process/instance/classes/Process.md).[`stop`](../../process/instance/classes/Process.md#stop)

***

### tree()

> **tree**(`path`): `Promise`\<`undefined` \| [`RecursiveDirectoryReadReturn`](../../../types/fs/interfaces/RecursiveDirectoryReadReturn.md)\>

Defined in: [src/ts/terminal/index.ts:139](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L139)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| [`RecursiveDirectoryReadReturn`](../../../types/fs/interfaces/RecursiveDirectoryReadReturn.md)\>

***

### tryGetTermWindow()

> **tryGetTermWindow**(): `void`

Defined in: [src/ts/terminal/index.ts:339](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L339)

#### Returns

`void`

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

[`Process`](../../process/instance/classes/Process.md).[`unlockFile`](../../process/instance/classes/Process.md#unlockfile)

***

### Warning()

> **Warning**(`message`, `prefix`): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:175](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L175)

#### Parameters

##### message

`string`

##### prefix

`string` = `"Warning"`

#### Returns

`Promise`\<`void`\>

***

### writeConfig()

> **writeConfig**(): `Promise`\<`void`\>

Defined in: [src/ts/terminal/index.ts:327](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L327)

#### Returns

`Promise`\<`void`\>

***

### writeFile()

> **writeFile**(`path`, `data`): `Promise`\<`undefined` \| `boolean`\>

Defined in: [src/ts/terminal/index.ts:133](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/index.ts#L133)

#### Parameters

##### path

`string`

##### data

`Blob`

#### Returns

`Promise`\<`undefined` \| `boolean`\>
