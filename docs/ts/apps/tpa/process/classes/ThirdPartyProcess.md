[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/apps/tpa/process](../README.md) / ThirdPartyProcess

# Class: ThirdPartyProcess

Defined in: [src/ts/apps/tpa/process.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L12)

## Extends

- [`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md)

## Implements

- [`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md)

## Constructors

### Constructor

> **new ThirdPartyProcess**(`pid`, `parentPid`, `app`, `operationId`, `workingDirectory`, ...`args`): `ThirdPartyProcess`

Defined in: [src/ts/apps/tpa/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L32)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

##### operationId

`string`

##### workingDirectory

`string`

##### args

...`any`[]

#### Returns

`ThirdPartyProcess`

#### Overrides

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`constructor`](../../../../kernel/mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`_criticalProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#_criticalprocess)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../../../kernel/mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### app

> **app**: [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/tpa/process.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L18)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`app`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#app)

***

### args

> **args**: `any`[]

Defined in: [src/ts/apps/tpa/process.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L19)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`args`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#args)

***

### closeWindow

> **closeWindow**: () => `Promise`\<`void`\>

Defined in: [src/ts/apps/tpa/process.ts:119](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L119)

#### Returns

`Promise`\<`void`\>

***

### componentMount

> **componentMount**: `object` = `{}`

Defined in: [src/ts/apps/tpa/process.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L24)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`componentMount`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#componentmount)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/tpa/process.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L22)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`crashReason`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#crashreason)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`dispatch`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#dispatch)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`dispatch`](../../../../kernel/mods/stack/process/instance/classes/Process.md#dispatch)

***

### elements

> **elements**: `Record`\<`string`, `HTMLLinkElement`\> = `{}`

Defined in: [src/ts/apps/tpa/process.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L26)

***

### handler

> **handler**: [`IProcessHandler`](../../../../../interfaces/modules/IProcessHandler/interfaces/IProcessHandler.md) = `Stack`

Defined in: [src/ts/apps/tpa/process.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L17)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`handler`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#handler)

***

### mutationLock

> **mutationLock**: `boolean` = `false`

Defined in: [src/ts/apps/tpa/process.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L16)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`mutationLock`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#mutationlock)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`name`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#name)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`name`](../../../../kernel/mods/stack/process/instance/classes/Process.md#name)

***

### operationId

> **operationId**: `string`

Defined in: [src/ts/apps/tpa/process.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L15)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`operationId`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#operationid)

***

### overridePopulatable?

> `optional` **overridePopulatable?**: `boolean`

Defined in: [src/ts/apps/tpa/process.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L25)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`parentPid`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#parentpid)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`parentPid`](../../../../kernel/mods/stack/process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`pid`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#pid)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`pid`](../../../../kernel/mods/stack/process/instance/classes/Process.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`sourceUrl`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#sourceurl)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`sourceUrl`](../../../../kernel/mods/stack/process/instance/classes/Process.md#sourceurl)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\> = `Daemon.preferences`

Defined in: [src/ts/apps/tpa/process.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L21)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`userPreferences`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#userpreferences)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/tpa/process.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L20)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`windowIcon`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/tpa/process.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L23)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`windowTitle`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#windowtitle)

***

### workingDirectory

> **workingDirectory**: `string`

Defined in: [src/ts/apps/tpa/process.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L14)

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`workingDirectory`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#workingdirectory)

***

### TPA\_REV

> `readonly` `static` **TPA\_REV**: `2` = `ThirdPartyAppProcess.TPA_REV`

Defined in: [src/ts/apps/tpa/process.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L13)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`_disposed`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#_disposed)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`_disposed`](../../../../kernel/mods/stack/process/instance/classes/Process.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`MEMORY`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#memory)

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

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`STATE`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#state)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`STATE`](../../../../kernel/mods/stack/process/instance/classes/Process.md#state)

***

### username

#### Get Signature

> **get** **username**(): `string`

Defined in: [src/ts/apps/tpa/process.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L27)

##### Returns

`string`

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`username`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#username)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`__start`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#__start)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`__start`](../../../../kernel/mods/stack/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/tpa/process.ts:111](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L111)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`__stop`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#__stop)

#### Overrides

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`__stop`](../../../../kernel/mods/stack/process/instance/classes/Process.md#__stop)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`ThirdPartyProcess` \| `undefined`\>

Defined in: [src/ts/apps/tpa/process.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L53)

#### Returns

`Promise`\<`ThirdPartyProcess` \| `undefined`\>

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`closeIfSecondInstance`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#closeifsecondinstance)

***

### getSingleton()

> **getSingleton**(): `ThirdPartyProcess`[]

Defined in: [src/ts/apps/tpa/process.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L76)

#### Returns

`ThirdPartyProcess`[]

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`getSingleton`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#getsingleton)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`killSelf`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#killself)

#### Inherited from

`Process.killSelf`

***

### loadCSS()

> **loadCSS**(`path`): `Promise`\<`void`\>

Defined in: [src/ts/apps/tpa/process.ts:89](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L89)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`loadCSS`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#loadcss)

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

### onStarted()

> **onStarted**(): `any`

Defined in: [src/ts/apps/tpa/process.ts:72](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/process.ts#L72)

#### Returns

`any`

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`onStarted`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#onstarted)

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

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`requestFileLock`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#requestfilelock)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`requestFileLock`](../../../../kernel/mods/stack/process/instance/classes/Process.md#requestfilelock)

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

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`setSource`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#setsource)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`setSource`](../../../../kernel/mods/stack/process/instance/classes/Process.md#setsource)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L49)

#### Returns

`Promise`\<`any`\>

#### Inherited from

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

#### Implementation of

[`IThirdPartyProcess`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md).[`unlockFile`](../../../../../interfaces/IThirdPartyProcess/interfaces/IThirdPartyProcess.md#unlockfile)

#### Inherited from

[`Process`](../../../../kernel/mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../../../kernel/mods/stack/process/instance/classes/Process.md#unlockfile)
