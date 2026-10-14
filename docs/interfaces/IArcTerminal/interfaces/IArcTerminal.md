[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/IArcTerminal](../README.md) / IArcTerminal

# Interface: IArcTerminal

Defined in: [src/interfaces/IArcTerminal.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L14)

## Extends

- [`IProcess`](../../IProcess/interfaces/IProcess.md)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean`

Defined in: [src/interfaces/IProcess.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L11)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`_criticalProcess`](../../IProcess/interfaces/IProcess.md#_criticalprocess)

***

### ansiEscapes

> **ansiEscapes**: `__module`

Defined in: [src/interfaces/IArcTerminal.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L26)

***

### config

> **config**: [`ArcTermConfiguration`](../../../types/terminal/interfaces/ArcTermConfiguration.md)

Defined in: [src/interfaces/IArcTerminal.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L28)

***

### CONFIG\_PATH

> `readonly` **CONFIG\_PATH**: `string`

Defined in: [src/interfaces/IArcTerminal.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L15)

***

### configProvidedExternal

> **configProvidedExternal**: `boolean`

Defined in: [src/interfaces/IArcTerminal.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L29)

***

### contents

> **contents**: [`DirectoryReadReturn`](../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`

Defined in: [src/interfaces/IArcTerminal.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L24)

***

### daemon

> **daemon**: [`IUserDaemon`](../../IUserDaemon/interfaces/IUserDaemon.md) \| `undefined`

Defined in: [src/interfaces/IArcTerminal.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L25)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/interfaces/IProcess.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L6)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`dispatch`](../../IProcess/interfaces/IProcess.md#dispatch)

***

### drive

> **drive**: [`IFilesystemDrive`](../../IFilesystemDrive/interfaces/IFilesystemDrive.md) \| `undefined`

Defined in: [src/interfaces/IArcTerminal.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L19)

***

### IS\_ARCTERM\_MODE

> **IS\_ARCTERM\_MODE**: `boolean`

Defined in: [src/interfaces/IArcTerminal.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L16)

***

### lastCommandErrored

> **lastCommandErrored**: `boolean`

Defined in: [src/interfaces/IArcTerminal.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L27)

***

### lastLine?

> `optional` **lastLine?**: `string`

Defined in: [src/interfaces/IArcTerminal.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L17)

***

### name

> **name**: `string`

Defined in: [src/interfaces/IProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L9)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`name`](../../IProcess/interfaces/IProcess.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/interfaces/IProcess.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L8)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`parentPid`](../../IProcess/interfaces/IProcess.md#parentpid)

***

### path

> **path**: `string`

Defined in: [src/interfaces/IArcTerminal.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L18)

***

### pid

> **pid**: `number`

Defined in: [src/interfaces/IProcess.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L7)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`pid`](../../IProcess/interfaces/IProcess.md#pid)

***

### rl

> **rl**: [`Readline`](../../../ts/terminal/readline/readline/classes/Readline.md) \| `undefined`

Defined in: [src/interfaces/IArcTerminal.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L22)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [src/interfaces/IProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L12)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`sourceUrl`](../../IProcess/interfaces/IProcess.md#sourceurl)

***

### STATE

> **STATE**: [`ProcessState`](../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/interfaces/IProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L13)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`STATE`](../../IProcess/interfaces/IProcess.md#state)

***

### term

> **term**: `Terminal`

Defined in: [src/interfaces/IArcTerminal.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L20)

***

### terminalMode?

> `optional` **terminalMode?**: [`ITerminalMode`](ITerminalMode.md)

Defined in: [src/interfaces/IArcTerminal.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L21)

***

### var

> **var**: [`IArcTermVariables`](IArcTermVariables.md) \| `undefined`

Defined in: [src/interfaces/IArcTerminal.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L23)

***

### window

> **window**: [`ITerminalWindowRuntime`](ITerminalWindowRuntime.md) \| `undefined`

Defined in: [src/interfaces/IArcTerminal.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L30)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/interfaces/IProcess.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L10)

##### Returns

`boolean`

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`_disposed`](../../IProcess/interfaces/IProcess.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/interfaces/IProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L14)

##### Returns

`number`

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`MEMORY`](../../IProcess/interfaces/IProcess.md#memory)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L15)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`__start`](../../IProcess/interfaces/IProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L16)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`__stop`](../../IProcess/interfaces/IProcess.md#__stop)

***

### changeDirectory()

> **changeDirectory**(`path`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/interfaces/IArcTerminal.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L46)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

***

### copyItem()

> **copyItem**(`source`, `destination`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/interfaces/IArcTerminal.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L39)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

***

### createDirectory()

> **createDirectory**(`path`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/interfaces/IArcTerminal.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L36)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

***

### deleteItem()

> **deleteItem**(`path`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/interfaces/IArcTerminal.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L42)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

***

### elevate()

> **elevate**(`data`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IArcTerminal.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L49)

#### Parameters

##### data

[`ElevationData`](../../../types/system/elevation/interfaces/ElevationData.md)

#### Returns

`Promise`\<`boolean`\>

***

### Error()

> **Error**(`message`, `prefix?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IArcTerminal.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L43)

#### Parameters

##### message

`string`

##### prefix?

`string`

#### Returns

`Promise`\<`void`\>

***

### handleCommandError()

> **handleCommandError**(`e`, `command`): `void`

Defined in: [src/interfaces/IArcTerminal.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L55)

#### Parameters

##### e

`Error`

##### command

[`Constructs`](../../common/interfaces/Constructs.md)\<[`ITerminalProcess`](ITerminalProcess.md)\>

#### Returns

`void`

***

### Info()

> **Info**(`message`, `prefix?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IArcTerminal.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L45)

#### Parameters

##### message

`string`

##### prefix?

`string`

#### Returns

`Promise`\<`void`\>

***

### join()

> **join**(`path?`): `string`

Defined in: [src/interfaces/IArcTerminal.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L34)

#### Parameters

##### path?

`string`

#### Returns

`string`

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`killSelf`](../../IProcess/interfaces/IProcess.md#killself)

***

### migrateConfigurationPath()

> **migrateConfigurationPath**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IArcTerminal.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L54)

#### Returns

`Promise`\<`void`\>

***

### moveItem()

> **moveItem**(`source`, `destination`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/interfaces/IArcTerminal.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L40)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

***

### parseFlags()

> **parseFlags**(`args`): \[[`Arguments`](../../../types/terminal/type-aliases/Arguments.md), `string`\]

Defined in: [src/interfaces/IArcTerminal.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L47)

#### Parameters

##### args

`string`

#### Returns

\[[`Arguments`](../../../types/terminal/type-aliases/Arguments.md), `string`\]

***

### processLine()

> **processLine**(`text`): `Promise`\<`void`\>

Defined in: [src/interfaces/IArcTerminal.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L33)

#### Parameters

##### text

`string` \| `undefined`

#### Returns

`Promise`\<`void`\>

***

### readConfig()

> **readConfig**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IArcTerminal.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L50)

#### Returns

`Promise`\<`void`\>

***

### readDir()

> **readDir**(`path?`): `Promise`\<[`DirectoryReadReturn`](../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/interfaces/IArcTerminal.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L35)

#### Parameters

##### path?

`string`

#### Returns

`Promise`\<[`DirectoryReadReturn`](../../../types/system/fs/interfaces/DirectoryReadReturn.md) \| `undefined`\>

***

### readFile()

> **readFile**(`path`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/interfaces/IArcTerminal.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L41)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

***

### readline()

> **readline**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IArcTerminal.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L32)

#### Returns

`Promise`\<`void`\>

***

### reload()

> **reload**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IArcTerminal.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L52)

#### Returns

`Promise`\<`void`\>

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/IProcess.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L18)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`requestFileLock`](../../IProcess/interfaces/IProcess.md#requestfilelock)

***

### setSource()

> **setSource**(`source`): `void`

Defined in: [src/interfaces/IProcess.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L20)

#### Parameters

##### source

`string`

#### Returns

`void`

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`setSource`](../../IProcess/interfaces/IProcess.md#setsource)

***

### start()

> **start**(): `Promise`\<`false` \| `void`\>

Defined in: [src/interfaces/IArcTerminal.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L31)

#### Returns

`Promise`\<`false` \| `void`\>

***

### stop()

> **stop**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IArcTerminal.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L48)

#### Returns

`Promise`\<`any`\>

***

### tree()

> **tree**(`path`): `Promise`\<[`RecursiveDirectoryReadReturn`](../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

Defined in: [src/interfaces/IArcTerminal.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L38)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<[`RecursiveDirectoryReadReturn`](../../../types/system/fs/interfaces/RecursiveDirectoryReadReturn.md) \| `undefined`\>

***

### tryGetTermWindow()

> **tryGetTermWindow**(): `void`

Defined in: [src/interfaces/IArcTerminal.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L53)

#### Returns

`void`

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/IProcess.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L19)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`unlockFile`](../../IProcess/interfaces/IProcess.md#unlockfile)

***

### Warning()

> **Warning**(`message`, `prefix?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IArcTerminal.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L44)

#### Parameters

##### message

`string`

##### prefix?

`string`

#### Returns

`Promise`\<`void`\>

***

### writeConfig()

> **writeConfig**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IArcTerminal.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L51)

#### Returns

`Promise`\<`void`\>

***

### writeFile()

> **writeFile**(`path`, `data`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/interfaces/IArcTerminal.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L37)

#### Parameters

##### path

`string`

##### data

`Blob`

#### Returns

`Promise`\<`boolean` \| `undefined`\>
