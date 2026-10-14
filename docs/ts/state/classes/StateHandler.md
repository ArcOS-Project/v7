[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [ts/state](../README.md) / StateHandler

# Class: StateHandler

Defined in: [src/ts/state/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/state/index.ts#L12)

## Extends

- [`Process`](../../kernel/mods/stack/process/instance/classes/Process.md)

## Implements

- [`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md)

## Constructors

### Constructor

> **new StateHandler**(`pid`, `parentPid`, `instanceName`, `store?`): `StateHandler`

Defined in: [src/ts/state/index.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/state/index.ts#L21)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### instanceName

`string`

##### store?

`Record`\<`string`, [`State`](../../../types/system/state/interfaces/State.md)\> = `States`

#### Returns

`StateHandler`

#### Overrides

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`constructor`](../../kernel/mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `true`

Defined in: [src/ts/state/index.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/state/index.ts#L17)

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`_criticalProcess`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#_criticalprocess)

#### Overrides

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../kernel/mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### currentState

> **currentState**: `string` = `""`

Defined in: [src/ts/state/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/state/index.ts#L14)

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`currentState`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#currentstate)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`dispatch`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#dispatch)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`dispatch`](../../kernel/mods/stack/process/instance/classes/Process.md#dispatch)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`name`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#name)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`name`](../../kernel/mods/stack/process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`parentPid`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#parentpid)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`parentPid`](../../kernel/mods/stack/process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`pid`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#pid)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`pid`](../../kernel/mods/stack/process/instance/classes/Process.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`sourceUrl`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#sourceurl)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`sourceUrl`](../../kernel/mods/stack/process/instance/classes/Process.md#sourceurl)

***

### stateAppProcess

> **stateAppProcess**: [`IAppProcess`](../../../interfaces/IAppProcess/interfaces/IAppProcess.md) \| `undefined`

Defined in: [src/ts/state/index.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/state/index.ts#L16)

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`stateAppProcess`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#stateappprocess)

***

### stateProps

> **stateProps**: `Record`\<`string`, `Record`\<`any`, `any`\>\> = `{}`

Defined in: [src/ts/state/index.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/state/index.ts#L15)

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`stateProps`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#stateprops)

***

### store

> **store**: `Record`\<`string`, [`State`](../../../types/system/state/interfaces/State.md)\> = `{}`

Defined in: [src/ts/state/index.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/state/index.ts#L13)

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`store`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#store)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`_disposed`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#_disposed)

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

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`MEMORY`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#memory)

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

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`STATE`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#state)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`STATE`](../../kernel/mods/stack/process/instance/classes/Process.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`__start`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#__start)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`__start`](../../kernel/mods/stack/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`__stop`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#__stop)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`__stop`](../../kernel/mods/stack/process/instance/classes/Process.md#__stop)

***

### getStateLoaders()

> **getStateLoaders**(): `object`

Defined in: [src/ts/state/index.ts:165](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/state/index.ts#L165)

#### Returns

`object`

##### cssLoader

> **cssLoader**: `HTMLLinkElement`

##### htmlLoader

> **htmlLoader**: `HTMLDivElement`

##### main

> **main**: `HTMLDivElement`

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`getStateLoaders`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#getstateloaders)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`killSelf`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#killself)

#### Inherited from

`Process.killSelf`

***

### loadState()

> **loadState**(`id`, `props?`, `instant?`): `Promise`\<`void`\>

Defined in: [src/ts/state/index.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/state/index.ts#L43)

#### Parameters

##### id

`string`

##### props?

`Record`\<`string`, `any`\> = `{}`

##### instant?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`loadState`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#loadstate)

***

### loadStateAsApp()

> **loadStateAsApp**(`data`, `props`): `Promise`\<`void`\>

Defined in: [src/ts/state/index.ts:134](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/state/index.ts#L134)

#### Parameters

##### data

[`State`](../../../types/system/state/interfaces/State.md)

##### props

`Record`\<`string`, `any`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`loadStateAsApp`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#loadstateasapp)

***

### loadStateNormally()

> **loadStateNormally**(`id`, `data`, `htmlLoader`, `cssLoader`): `Promise`\<`void`\>

Defined in: [src/ts/state/index.ts:114](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/state/index.ts#L114)

#### Parameters

##### id

`string`

##### data

[`State`](../../../types/system/state/interfaces/State.md)

##### htmlLoader

`HTMLDivElement`

##### cssLoader

`HTMLLinkElement`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`loadStateNormally`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#loadstatenormally)

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

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L91)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`requestFileLock`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#requestfilelock)

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

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`setSource`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#setsource)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`setSource`](../../kernel/mods/stack/process/instance/classes/Process.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/state/index.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/state/index.ts#L31)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`start`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#start)

#### Overrides

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`start`](../../kernel/mods/stack/process/instance/classes/Process.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/state/index.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/state/index.ts#L37)

#### Returns

`Promise`\<`any`\>

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

[`IStateHandler`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md).[`unlockFile`](../../../interfaces/IStateHandler/interfaces/IStateHandler.md#unlockfile)

#### Inherited from

[`Process`](../../kernel/mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../kernel/mods/stack/process/instance/classes/Process.md#unlockfile)
