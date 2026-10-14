[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/kernel/init](../README.md) / InitProcess

# Class: InitProcess

Defined in: [src/ts/kernel/init.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/init.ts#L14)

## Extends

- [`Process`](../../mods/stack/process/instance/classes/Process.md)

## Constructors

### Constructor

> **new InitProcess**(`pid`, `parentPid?`): `InitProcess`

Defined in: [src/ts/kernel/init.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/init.ts#L17)

#### Parameters

##### pid

`number`

##### parentPid?

`undefined` = `undefined`

#### Returns

`InitProcess`

#### Overrides

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`constructor`](../../mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `true`

Defined in: [src/ts/kernel/init.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/init.ts#L15)

#### Overrides

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Inherited from

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`dispatch`](../../mods/stack/process/instance/classes/Process.md#dispatch)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Inherited from

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`name`](../../mods/stack/process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Inherited from

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`parentPid`](../../mods/stack/process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Inherited from

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`pid`](../../mods/stack/process/instance/classes/Process.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Inherited from

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`sourceUrl`](../../mods/stack/process/instance/classes/Process.md#sourceurl)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Inherited from

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`_disposed`](../../mods/stack/process/instance/classes/Process.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Inherited from

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`MEMORY`](../../mods/stack/process/instance/classes/Process.md#memory)

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

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`STATE`](../../mods/stack/process/instance/classes/Process.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`__start`](../../mods/stack/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`__stop`](../../mods/stack/process/instance/classes/Process.md#__stop)

***

### initializeTempFs()

> **initializeTempFs**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/init.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/init.ts#L57)

#### Returns

`Promise`\<`void`\>

***

### jumpstart()

> **jumpstart**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/init.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/init.ts#L27)

#### Returns

`Promise`\<`void`\>

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

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`Log`](../../mods/stack/process/instance/classes/Process.md#log)

***

### nightly()

> **nightly**(): `void`

Defined in: [src/ts/kernel/init.ts:73](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/init.ts#L73)

#### Returns

`void`

***

### parseBrowserInfo()

> **parseBrowserInfo**(): `void`

Defined in: [src/ts/kernel/init.ts:78](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/init.ts#L78)

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

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`requestFileLock`](../../mods/stack/process/instance/classes/Process.md#requestfilelock)

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

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`setSource`](../../mods/stack/process/instance/classes/Process.md#setsource)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L49)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`start`](../../mods/stack/process/instance/classes/Process.md#start)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/init.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/init.ts#L23)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`stop`](../../mods/stack/process/instance/classes/Process.md#stop)

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

[`Process`](../../mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../mods/stack/process/instance/classes/Process.md#unlockfile)
