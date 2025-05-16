[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/msl/instance](../README.md) / LanguageInstance

# Class: LanguageInstance

Defined in: [src/ts/msl/instance.ts:34](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L34)

## Extends

- [`Process`](../../../process/instance/classes/Process.md)

## Constructors

### Constructor

> **new LanguageInstance**(`handler`, `pid`, `parentPid`, `source`, `options`, `libraries`): `LanguageInstance`

Defined in: [src/ts/msl/instance.ts:58](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L58)

#### Parameters

##### handler

[`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

##### source

`string`

##### options

[`LanguageOptions`](../../../../types/msl/interfaces/LanguageOptions.md) = `DefaultLanguageOptions`

##### libraries

[`Libraries`](../../../../types/msl/type-aliases/Libraries.md) = `BaseLibraries`

#### Returns

`LanguageInstance`

#### Overrides

[`Process`](../../../process/instance/classes/Process.md).[`constructor`](../../../process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L22)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`_criticalProcess`](../../../process/instance/classes/Process.md#_criticalprocess)

***

### \_disposed

> **\_disposed**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L21)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`_disposed`](../../../process/instance/classes/Process.md#_disposed)

***

### app

> **app**: `undefined` \| [`AppProcessData`](../../../../types/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/msl/instance.ts:54](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L54)

***

### appProcess

> **appProcess**: `undefined` \| [`AppProcess`](../../../apps/process/classes/AppProcess.md)

Defined in: [src/ts/msl/instance.ts:55](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L55)

***

### dispatch

> **dispatch**: [`ProcessDispatch`](../../../process/dispatch/classes/ProcessDispatch.md)

Defined in: [src/ts/process/instance.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L15)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`dispatch`](../../../process/instance/classes/Process.md#dispatch)

***

### env

> **env**: [`Environment`](../../../kernel/env/classes/Environment.md)

Defined in: [src/ts/process/instance.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L12)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`env`](../../../process/instance/classes/Process.md#env)

***

### executionCount

> **executionCount**: `number` = `-1`

Defined in: [src/ts/msl/instance.ts:49](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L49)

***

### fs

> **fs**: [`Filesystem`](../../../fs/classes/Filesystem.md)

Defined in: [src/ts/msl/instance.ts:52](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L52)

#### Overrides

[`Process`](../../../process/instance/classes/Process.md).[`fs`](../../../process/instance/classes/Process.md#fs)

***

### handler

> **handler**: [`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)

Defined in: [src/ts/process/instance.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L14)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`handler`](../../../process/instance/classes/Process.md#handler)

***

### kernel

> **kernel**: [`WaveKernel`](../../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/process/instance.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L17)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`kernel`](../../../process/instance/classes/Process.md#kernel)

***

### libraries

> **libraries**: [`Libraries`](../../../../types/msl/type-aliases/Libraries.md) = `BaseLibraries`

Defined in: [src/ts/msl/instance.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L48)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/process/instance.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L20)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`name`](../../../process/instance/classes/Process.md#name)

***

### oldPointer

> **oldPointer**: `number` = `-1`

Defined in: [src/ts/msl/instance.ts:38](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L38)

***

### onError()

> **onError**: (`error`) => `void`

Defined in: [src/ts/msl/instance.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L44)

#### Parameters

##### error

[`LanguageExecutionError`](../../error/classes/LanguageExecutionError.md)

#### Returns

`void`

***

### onExit()

> **onExit**: (`l`) => `void`

Defined in: [src/ts/msl/instance.ts:45](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L45)

#### Parameters

##### l

`LanguageInstance`

#### Returns

`void`

***

### onTick()

> **onTick**: (`l`) => `void`

Defined in: [src/ts/msl/instance.ts:43](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L43)

#### Parameters

##### l

`LanguageInstance`

#### Returns

`void`

***

### options

> **options**: [`LanguageOptions`](../../../../types/msl/interfaces/LanguageOptions.md)

Defined in: [src/ts/msl/instance.ts:51](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L51)

***

### output

> **output**: `string`[] = `[]`

Defined in: [src/ts/msl/instance.ts:35](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L35)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/process/instance.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L19)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`parentPid`](../../../process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/process/instance.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L18)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`pid`](../../../process/instance/classes/Process.md#pid)

***

### pointer

> **pointer**: `number` = `-1`

Defined in: [src/ts/msl/instance.ts:37](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L37)

***

### soundBus

> **soundBus**: [`SoundBus`](../../../soundbus/classes/SoundBus.md)

Defined in: [src/ts/process/instance.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L13)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`soundBus`](../../../process/instance/classes/Process.md#soundbus)

***

### source

> **source**: [`InterpreterCommand`](../../../../types/msl/interfaces/InterpreterCommand.md)[] = `[]`

Defined in: [src/ts/msl/instance.ts:39](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L39)

***

### stdin()

> **stdin**: () => `Promise`\<`string`\>

Defined in: [src/ts/msl/instance.ts:41](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L41)

#### Returns

`Promise`\<`string`\>

***

### stdout()

> **stdout**: (`m`) => `void`

Defined in: [src/ts/msl/instance.ts:42](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L42)

#### Parameters

##### m

`string`

#### Returns

`void`

***

### systemDispatch

> **systemDispatch**: [`SystemDispatch`](../../../dispatch/classes/SystemDispatch.md)

Defined in: [src/ts/process/instance.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L16)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`systemDispatch`](../../../process/instance/classes/Process.md#systemdispatch)

***

### tokens

> **tokens**: `any`[] = `[]`

Defined in: [src/ts/msl/instance.ts:40](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L40)

***

### userDaemon

> **userDaemon**: `undefined` \| [`UserDaemon`](../../../server/user/daemon/classes/UserDaemon.md)

Defined in: [src/ts/msl/instance.ts:56](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L56)

***

### variables

> **variables**: `Map`\<`string`, `any`\>

Defined in: [src/ts/msl/instance.ts:36](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L36)

***

### workingDir

> **workingDir**: `string`

Defined in: [src/ts/msl/instance.ts:50](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L50)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L48)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`__start`](../../../process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:54](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L54)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`__stop`](../../../process/instance/classes/Process.md#__stop)

***

### calculate()

> **calculate**(`left`, `operator`, `right`): `undefined` \| `string` \| `number` \| `boolean`

Defined in: [src/ts/msl/instance.ts:384](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L384)

#### Parameters

##### left

`string`

##### operator

`string`

##### right

`string`

#### Returns

`undefined` \| `string` \| `number` \| `boolean`

***

### copyItem()

> **copyItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/ts/msl/instance.ts:474](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L474)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

***

### createDirectory()

> **createDirectory**(`relativePath`): `Promise`\<`boolean`\>

Defined in: [src/ts/msl/instance.ts:450](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L450)

#### Parameters

##### relativePath

`string`

#### Returns

`Promise`\<`boolean`\>

***

### defaultVariables()

> **defaultVariables**(): `Promise`\<`Map`\<`string`, `any`\>\>

Defined in: [src/ts/msl/instance.ts:357](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L357)

#### Returns

`Promise`\<`Map`\<`string`, `any`\>\>

***

### deleteItem()

> **deleteItem**(`relativePath`): `Promise`\<`boolean`\>

Defined in: [src/ts/msl/instance.ts:488](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L488)

#### Parameters

##### relativePath

`string`

#### Returns

`Promise`\<`boolean`\>

***

### error()

> **error**(`reason`, `keyword?`): [`LanguageExecutionError`](../../error/classes/LanguageExecutionError.md)

Defined in: [src/ts/msl/instance.ts:142](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L142)

#### Parameters

##### reason

`string`

##### keyword?

`string`

#### Returns

[`LanguageExecutionError`](../../error/classes/LanguageExecutionError.md)

***

### expectTokenLength()

> **expectTokenLength**(`length`, `where`): `boolean`

Defined in: [src/ts/msl/instance.ts:370](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L370)

#### Parameters

##### length

`number`

##### where

`string`

#### Returns

`boolean`

***

### interpret()

> **interpret**(): `Promise`\<`void`\>

Defined in: [src/ts/msl/instance.ts:192](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L192)

#### Returns

`Promise`\<`void`\>

***

### jump()

> **jump**(`codepoint`): `void`

Defined in: [src/ts/msl/instance.ts:433](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L433)

#### Parameters

##### codepoint

`string`

#### Returns

`void`

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/process/instance.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L60)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`killSelf`](../../../process/instance/classes/Process.md#killself)

***

### Log()

> `protected` **Log**(`message`, `level`): `void`

Defined in: [src/ts/process/instance.ts:67](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L67)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`Log`](../../../process/instance/classes/Process.md#log)

***

### moveItem()

> **moveItem**(`source`, `destination`): `Promise`\<`boolean`\>

Defined in: [src/ts/msl/instance.ts:481](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L481)

#### Parameters

##### source

`string`

##### destination

`string`

#### Returns

`Promise`\<`boolean`\>

***

### normalizeTokens()

> **normalizeTokens**(`tokens`): `undefined` \| `any`[]

Defined in: [src/ts/msl/instance.ts:275](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L275)

#### Parameters

##### tokens

`any`[]

#### Returns

`undefined` \| `any`[]

***

### readDir()

> **readDir**(`relativePath`): `Promise`\<`undefined` \| [`DirectoryReadReturn`](../../../../types/fs/interfaces/DirectoryReadReturn.md)\>

Defined in: [src/ts/msl/instance.ts:444](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L444)

#### Parameters

##### relativePath

`string`

#### Returns

`Promise`\<`undefined` \| [`DirectoryReadReturn`](../../../../types/fs/interfaces/DirectoryReadReturn.md)\>

***

### readFile()

> **readFile**(`relativePath`): `Promise`\<`undefined` \| `ArrayBuffer`\>

Defined in: [src/ts/msl/instance.ts:456](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L456)

#### Parameters

##### relativePath

`string`

#### Returns

`Promise`\<`undefined` \| `ArrayBuffer`\>

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

[`Process`](../../../process/instance/classes/Process.md).[`requestFileLock`](../../../process/instance/classes/Process.md#requestfilelock)

***

### reset()

> **reset**(): `Promise`\<`void`\>

Defined in: [src/ts/msl/instance.ts:350](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L350)

#### Returns

`Promise`\<`void`\>

***

### run()

> **run**(): `Promise`\<`string`[]\>

Defined in: [src/ts/msl/instance.ts:150](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L150)

#### Returns

`Promise`\<`string`[]\>

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L44)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`start`](../../../process/instance/classes/Process.md#start)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/ts/msl/instance.ts:87](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L87)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Process`](../../../process/instance/classes/Process.md).[`stop`](../../../process/instance/classes/Process.md#stop)

***

### tokenise()

> **tokenise**(`code`): `string`[]

Defined in: [src/ts/msl/instance.ts:306](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L306)

#### Parameters

##### code

`string`

#### Returns

`string`[]

***

### tree()

> **tree**(`relativePath`): `Promise`\<`undefined` \| [`RecursiveDirectoryReadReturn`](../../../../types/fs/interfaces/RecursiveDirectoryReadReturn.md)\>

Defined in: [src/ts/msl/instance.ts:468](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L468)

#### Parameters

##### relativePath

`string`

#### Returns

`Promise`\<`undefined` \| [`RecursiveDirectoryReadReturn`](../../../../types/fs/interfaces/RecursiveDirectoryReadReturn.md)\>

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

[`Process`](../../../process/instance/classes/Process.md).[`unlockFile`](../../../process/instance/classes/Process.md#unlockfile)

***

### watchException()

> **watchException**(): `Promise`\<`void`\>

Defined in: [src/ts/msl/instance.ts:128](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L128)

#### Returns

`Promise`\<`void`\>

***

### writeFile()

> **writeFile**(`relativePath`, `data`): `Promise`\<`boolean`\>

Defined in: [src/ts/msl/instance.ts:462](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/instance.ts#L462)

#### Parameters

##### relativePath

`string`

##### data

`Blob`

#### Returns

`Promise`\<`boolean`\>
