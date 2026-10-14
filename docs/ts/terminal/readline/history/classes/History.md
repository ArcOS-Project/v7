[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/terminal/readline/history](../README.md) / History

# Class: History

Defined in: [src/ts/terminal/readline/history.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/history.ts#L18)

strtok/xterm-readline 1.1.2

a library for building command-line interfaces with XtermJS

Ported to ArcOS by Izaak Kuipers on March 23rd 2025.

ORIGINAL REPOSITORY: https://github.com/strtok/xterm-readline
COMMIT: cdb0940c98a4bad9388f9a44f8917fb00df2423c

All rights belong to their respective authors.

© IzKuipers 2025

## Extends

- [`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md)

## Constructors

### Constructor

> **new History**(`pid`, `parentPid`, `maxEntries`, `terminal?`): `History`

Defined in: [src/ts/terminal/readline/history.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/history.ts#L26)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### maxEntries

`number`

##### terminal?

[`IArcTerminal`](../../../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md)

#### Returns

`History`

#### Overrides

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`constructor`](../../../../kernel/mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../../../kernel/mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### cursor

> **cursor**: `number` = `-1`

Defined in: [src/ts/terminal/readline/history.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/history.ts#L21)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`dispatch`](../../../../kernel/mods/stack/process/instance/classes/Process.md#dispatch)

***

### entries

> **entries**: `string`[] = `[]`

Defined in: [src/ts/terminal/readline/history.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/history.ts#L19)

***

### maxEntries

> **maxEntries**: `number`

Defined in: [src/ts/terminal/readline/history.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/history.ts#L20)

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

### append()

> **append**(`text`): `undefined`

Defined in: [src/ts/terminal/readline/history.ts:69](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/history.ts#L69)

#### Parameters

##### text

`string`

#### Returns

`undefined`

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

### next()

> **next**(): `string` \| `undefined`

Defined in: [src/ts/terminal/readline/history.ts:89](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/history.ts#L89)

#### Returns

`string` \| `undefined`

***

### prev()

> **prev**(): `string` \| `undefined`

Defined in: [src/ts/terminal/readline/history.ts:101](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/history.ts#L101)

#### Returns

`string` \| `undefined`

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

### resetCursor()

> **resetCursor**(): `void`

Defined in: [src/ts/terminal/readline/history.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/history.ts#L85)

#### Returns

`void`

***

### restore()

> **restore**(): `undefined`

Defined in: [src/ts/terminal/readline/history.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/history.ts#L57)

#### Returns

`undefined`

***

### save()

> **save**(): `void`

Defined in: [src/ts/terminal/readline/history.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/history.ts#L46)

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

> **start**(): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/terminal/readline/history.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/history.ts#L38)

#### Returns

`Promise`\<`false` \| `undefined`\>

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
