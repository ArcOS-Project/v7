[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [ts/sql](../README.md) / SqlInterfaceProcess

# Class: SqlInterfaceProcess

Defined in: [src/ts/sql/index.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/sql/index.ts#L7)

## Extends

- [`Process`](../../kernel/mods/stack/process/instance/classes/Process.md)

## Implements

- [`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md)

## Constructors

### Constructor

> **new SqlInterfaceProcess**(`pid`, `parentPid`, `path`): `SqlInterfaceProcess`

Defined in: [src/ts/sql/index.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/sql/index.ts#L15)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### path

`string`

#### Returns

`SqlInterfaceProcess`

#### Overrides

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`constructor`](../../kernel/mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`_criticalProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#_criticalprocess)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../kernel/mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### db?

> `optional` **db?**: `Database`

Defined in: [src/ts/sql/index.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/sql/index.ts#L10)

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`db`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#db)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`dispatch`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#dispatch)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`dispatch`](../../kernel/mods/stack/process/instance/classes/Process.md#dispatch)

***

### isFresh

> **isFresh**: `boolean` = `false`

Defined in: [src/ts/sql/index.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/sql/index.ts#L11)

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`isFresh`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#isfresh)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`name`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#name)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`name`](../../kernel/mods/stack/process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`parentPid`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#parentpid)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`parentPid`](../../kernel/mods/stack/process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`pid`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#pid)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`pid`](../../kernel/mods/stack/process/instance/classes/Process.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`sourceUrl`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#sourceurl)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`sourceUrl`](../../kernel/mods/stack/process/instance/classes/Process.md#sourceurl)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`_disposed`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#_disposed)

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

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`MEMORY`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#memory)

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

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`STATE`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#state)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`STATE`](../../kernel/mods/stack/process/instance/classes/Process.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`__start`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#__start)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`__start`](../../kernel/mods/stack/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`__stop`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#__stop)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`__stop`](../../kernel/mods/stack/process/instance/classes/Process.md#__stop)

***

### exec()

> **exec**(`sql`, `params?`): `string` \| `Record`\<`string`, `any`\>[][]

Defined in: [src/ts/sql/index.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/sql/index.ts#L79)

#### Parameters

##### sql

`string`

##### params?

`BindParams`

#### Returns

`string` \| `Record`\<`string`, `any`\>[][]

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`exec`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#exec)

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [src/ts/sql/index.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/sql/index.ts#L41)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`initialize`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#initialize)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`killSelf`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#killself)

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

### readFile()

> **readFile**(): `Promise`\<`void`\>

Defined in: [src/ts/sql/index.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/sql/index.ts#L52)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`readFile`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#readfile)

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

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`requestFileLock`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#requestfilelock)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`requestFileLock`](../../kernel/mods/stack/process/instance/classes/Process.md#requestfilelock)

***

### reset()

> **reset**(): `void`

Defined in: [src/ts/sql/index.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/sql/index.ts#L33)

#### Returns

`void`

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`reset`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#reset)

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

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`setSource`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#setsource)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`setSource`](../../kernel/mods/stack/process/instance/classes/Process.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/sql/index.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/sql/index.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`start`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#start)

#### Overrides

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`start`](../../kernel/mods/stack/process/instance/classes/Process.md#start)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/ts/sql/index.ts:74](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/sql/index.ts#L74)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`stop`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#stop)

#### Overrides

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`stop`](../../kernel/mods/stack/process/instance/classes/Process.md#stop)

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

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`unlockFile`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#unlockfile)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../kernel/mods/stack/process/instance/classes/Process.md#unlockfile)

***

### writeFile()

> **writeFile**(): `Promise`\<`void`\>

Defined in: [src/ts/sql/index.ts:64](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/sql/index.ts#L64)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md).[`writeFile`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md#writefile)

***

### Create()

> `static` **Create**(`parentPid`, `path`): `Promise`\<[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md) \| `undefined`\>

Defined in: [src/ts/sql/index.ts:93](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/sql/index.ts#L93)

#### Parameters

##### parentPid

`number`

##### path

`string`

#### Returns

`Promise`\<[`ISqlInterfaceProcess`](../../../interfaces/ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md) \| `undefined`\>
