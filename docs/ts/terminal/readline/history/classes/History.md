[**ArcOS v7**](../../../../../README.md)

***

[ArcOS v7](../../../../../modules.md) / [ts/terminal/readline/history](../README.md) / History

# Class: History

Defined in: [src/ts/terminal/readline/history.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/history.ts#L19)

strtok/xterm-readline 1.1.2

a library for building command-line interfaces with XtermJS

Ported to ArcOS by Izaak Kuipers on March 23rd 2025.

ORIGINAL REPOSITORY: https://github.com/strtok/xterm-readline
COMMIT: cdb0940c98a4bad9388f9a44f8917fb00df2423c

All rights belong to their respective authors.

© IzKuipers 2025

## Extends

- [`Process`](../../../../process/instance/classes/Process.md)

## Constructors

### Constructor

> **new History**(`handler`, `pid`, `parentPid`, `maxEntries`, `terminal?`): `History`

Defined in: [src/ts/terminal/readline/history.ts:25](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/history.ts#L25)

#### Parameters

##### handler

[`ProcessHandler`](../../../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

##### maxEntries

`number`

##### terminal?

[`ArcTerminal`](../../../classes/ArcTerminal.md)

#### Returns

`History`

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

### cursor

> **cursor**: `number` = `-1`

Defined in: [src/ts/terminal/readline/history.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/history.ts#L22)

***

### dispatch

> **dispatch**: [`ProcessDispatch`](../../../../process/dispatch/classes/ProcessDispatch.md)

Defined in: [src/ts/process/instance.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L15)

#### Inherited from

[`Process`](../../../../process/instance/classes/Process.md).[`dispatch`](../../../../process/instance/classes/Process.md#dispatch)

***

### entries

> **entries**: `string`[] = `[]`

Defined in: [src/ts/terminal/readline/history.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/history.ts#L20)

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

### maxEntries

> **maxEntries**: `number`

Defined in: [src/ts/terminal/readline/history.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/history.ts#L21)

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

### append()

> **append**(`text`): `undefined`

Defined in: [src/ts/terminal/readline/history.ts:64](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/history.ts#L64)

#### Parameters

##### text

`string`

#### Returns

`undefined`

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

### next()

> **next**(): `undefined` \| `string`

Defined in: [src/ts/terminal/readline/history.ts:84](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/history.ts#L84)

#### Returns

`undefined` \| `string`

***

### prev()

> **prev**(): `undefined` \| `string`

Defined in: [src/ts/terminal/readline/history.ts:96](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/history.ts#L96)

#### Returns

`undefined` \| `string`

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

### resetCursor()

> **resetCursor**(): `void`

Defined in: [src/ts/terminal/readline/history.ts:80](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/history.ts#L80)

#### Returns

`void`

***

### restore()

> **restore**(): `undefined`

Defined in: [src/ts/terminal/readline/history.ts:52](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/history.ts#L52)

#### Returns

`undefined`

***

### save()

> **save**(): `void`

Defined in: [src/ts/terminal/readline/history.ts:41](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/history.ts#L41)

#### Returns

`void`

***

### start()

> **start**(): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/terminal/readline/history.ts:33](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/history.ts#L33)

#### Returns

`Promise`\<`undefined` \| `false`\>

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
