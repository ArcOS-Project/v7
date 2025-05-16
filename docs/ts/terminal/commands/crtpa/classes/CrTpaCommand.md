[**ArcOS v7**](../../../../../README.md)

***

[ArcOS v7](../../../../../modules.md) / [ts/terminal/commands/crtpa](../README.md) / CrTpaCommand

# Class: CrTpaCommand

Defined in: [src/ts/terminal/commands/crtpa.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/commands/crtpa.ts#L12)

## Extends

- [`TerminalProcess`](../../../process/classes/TerminalProcess.md)

## Constructors

### Constructor

> **new CrTpaCommand**(`handler`, `pid`, `parentPid`): `CrTpaCommand`

Defined in: [src/ts/terminal/commands/crtpa.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/commands/crtpa.ts#L16)

#### Parameters

##### handler

[`ProcessHandler`](../../../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

#### Returns

`CrTpaCommand`

#### Overrides

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`constructor`](../../../process/classes/TerminalProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L22)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`_criticalProcess`](../../../process/classes/TerminalProcess.md#_criticalprocess)

***

### \_disposed

> **\_disposed**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L21)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`_disposed`](../../../process/classes/TerminalProcess.md#_disposed)

***

### dispatch

> **dispatch**: [`ProcessDispatch`](../../../../process/dispatch/classes/ProcessDispatch.md)

Defined in: [src/ts/process/instance.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L15)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`dispatch`](../../../process/classes/TerminalProcess.md#dispatch)

***

### env

> **env**: [`Environment`](../../../../kernel/env/classes/Environment.md)

Defined in: [src/ts/process/instance.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L12)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`env`](../../../process/classes/TerminalProcess.md#env)

***

### fs

> **fs**: [`Filesystem`](../../../../fs/classes/Filesystem.md)

Defined in: [src/ts/process/instance.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L23)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`fs`](../../../process/classes/TerminalProcess.md#fs)

***

### handler

> **handler**: [`ProcessHandler`](../../../../process/handler/classes/ProcessHandler.md)

Defined in: [src/ts/process/instance.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L14)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`handler`](../../../process/classes/TerminalProcess.md#handler)

***

### kernel

> **kernel**: [`WaveKernel`](../../../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/process/instance.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L17)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`kernel`](../../../process/classes/TerminalProcess.md#kernel)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/process/instance.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L20)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`name`](../../../process/classes/TerminalProcess.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/process/instance.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L19)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`parentPid`](../../../process/classes/TerminalProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/process/instance.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L18)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`pid`](../../../process/classes/TerminalProcess.md#pid)

***

### soundBus

> **soundBus**: [`SoundBus`](../../../../soundbus/classes/SoundBus.md)

Defined in: [src/ts/process/instance.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L13)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`soundBus`](../../../process/classes/TerminalProcess.md#soundbus)

***

### systemDispatch

> **systemDispatch**: [`SystemDispatch`](../../../../dispatch/classes/SystemDispatch.md)

Defined in: [src/ts/process/instance.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L16)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`systemDispatch`](../../../process/classes/TerminalProcess.md#systemdispatch)

***

### description

> `static` **description**: `string` = `"Create an ArcOS Third Party Application (TPA) project"`

Defined in: [src/ts/terminal/commands/crtpa.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/commands/crtpa.ts#L14)

#### Overrides

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`description`](../../../process/classes/TerminalProcess.md#description)

***

### hidden

> `static` **hidden**: `boolean` = `false`

Defined in: [src/ts/terminal/process.ts:9](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/process.ts#L9)

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`hidden`](../../../process/classes/TerminalProcess.md#hidden)

***

### keyword

> `static` **keyword**: `string` = `"crtpa"`

Defined in: [src/ts/terminal/commands/crtpa.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/commands/crtpa.ts#L13)

#### Overrides

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`keyword`](../../../process/classes/TerminalProcess.md#keyword)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L48)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`__start`](../../../process/classes/TerminalProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:54](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L54)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`__stop`](../../../process/classes/TerminalProcess.md#__stop)

***

### \_main()

> **\_main**(`term`, `flags`, `argv`): `Promise`\<`any`\>

Defined in: [src/ts/terminal/process.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/process.ts#L20)

#### Parameters

##### term

[`ArcTerminal`](../../../classes/ArcTerminal.md)

##### flags

[`Arguments`](../../../../../types/terminal/type-aliases/Arguments.md)

##### argv

`string`[]

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`_main`](../../../process/classes/TerminalProcess.md#_main)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/process/instance.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L60)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`killSelf`](../../../process/classes/TerminalProcess.md#killself)

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

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`Log`](../../../process/classes/TerminalProcess.md#log)

***

### main()

> `protected` **main**(`term`): `Promise`\<`number`\>

Defined in: [src/ts/terminal/commands/crtpa.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/commands/crtpa.ts#L20)

#### Parameters

##### term

[`ArcTerminal`](../../../classes/ArcTerminal.md)

#### Returns

`Promise`\<`number`\>

#### Overrides

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`main`](../../../process/classes/TerminalProcess.md#main)

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

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`requestFileLock`](../../../process/classes/TerminalProcess.md#requestfilelock)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L44)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`start`](../../../process/classes/TerminalProcess.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:40](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L40)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`stop`](../../../process/classes/TerminalProcess.md#stop)

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

[`TerminalProcess`](../../../process/classes/TerminalProcess.md).[`unlockFile`](../../../process/classes/TerminalProcess.md#unlockfile)
