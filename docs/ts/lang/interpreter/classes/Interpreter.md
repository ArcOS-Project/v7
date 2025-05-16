[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/lang/interpreter](../README.md) / Interpreter

# Class: Interpreter

Defined in: [src/ts/lang/interpreter.ts:11](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L11)

## Extends

- [`Process`](../../../process/instance/classes/Process.md)

## Constructors

### Constructor

> **new Interpreter**(`handler`, `pid`, `parentPid`, `options?`): `Interpreter`

Defined in: [src/ts/lang/interpreter.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L24)

#### Parameters

##### handler

[`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

##### options?

[`ArcLangOptions`](../../../../types/lang/interfaces/ArcLangOptions.md)

#### Returns

`Interpreter`

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

### allowUnsafe

> **allowUnsafe**: `boolean` = `false`

Defined in: [src/ts/lang/interpreter.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L20)

***

### arguments

> **arguments**: `any`[] = `[]`

Defined in: [src/ts/lang/interpreter.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L21)

***

### ast

> **ast**: `undefined` \| [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/interpreter.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L12)

***

### callStack

> **callStack**: `Record`\<`string`, `any`\>[] = `[]`

Defined in: [src/ts/lang/interpreter.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L15)

***

### currentEnvironment

> **currentEnvironment**: `Record`\<`string`, `any`\>

Defined in: [src/ts/lang/interpreter.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L14)

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

### fs

> **fs**: [`Filesystem`](../../../fs/classes/Filesystem.md)

Defined in: [src/ts/process/instance.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L23)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`fs`](../../../process/instance/classes/Process.md#fs)

***

### globalEnvironment

> **globalEnvironment**: `Record`\<`string`, `any`\>

Defined in: [src/ts/lang/interpreter.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L13)

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

### name

> **name**: `string` = `""`

Defined in: [src/ts/process/instance.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L20)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`name`](../../../process/instance/classes/Process.md#name)

***

### onError

> **onError**: [`LangErrorCallback`](../../../../types/lang/type-aliases/LangErrorCallback.md)

Defined in: [src/ts/lang/interpreter.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L16)

***

### onExit

> **onExit**: [`LangExitCallback`](../../../../types/lang/type-aliases/LangExitCallback.md)

Defined in: [src/ts/lang/interpreter.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L19)

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

### soundBus

> **soundBus**: [`SoundBus`](../../../soundbus/classes/SoundBus.md)

Defined in: [src/ts/process/instance.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L13)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`soundBus`](../../../process/instance/classes/Process.md#soundbus)

***

### stdin

> **stdin**: [`LangStdinCallback`](../../../../types/lang/type-aliases/LangStdinCallback.md)

Defined in: [src/ts/lang/interpreter.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L18)

***

### stdout

> **stdout**: [`LangStdoutCallback`](../../../../types/lang/type-aliases/LangStdoutCallback.md)

Defined in: [src/ts/lang/interpreter.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L17)

***

### systemDispatch

> **systemDispatch**: [`SystemDispatch`](../../../dispatch/classes/SystemDispatch.md)

Defined in: [src/ts/process/instance.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L16)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`systemDispatch`](../../../process/instance/classes/Process.md#systemdispatch)

***

### workingDir

> **workingDir**: `string` = `"U:/"`

Defined in: [src/ts/lang/interpreter.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L22)

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

### error()

> **error**(`message`): `void`

Defined in: [src/ts/lang/interpreter.ts:459](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L459)

#### Parameters

##### message

`string`

#### Returns

`void`

***

### interpret()

> **interpret**(`ast`): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:92](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L92)

#### Parameters

##### ast

`undefined` | [`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`any`\>

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

### run()

> **run**(`code`): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:463](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L463)

#### Parameters

##### code

`string`

#### Returns

`Promise`\<`any`\>

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

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:88](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L88)

#### Returns

`Promise`\<`any`\>

#### Overrides

[`Process`](../../../process/instance/classes/Process.md).[`stop`](../../../process/instance/classes/Process.md#stop)

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

### visit()

> **visit**(`node`): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:98](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L98)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`any`\>

***

### visitArrayAccess()

> **visitArrayAccess**(`node`): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:336](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L336)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`any`\>

***

### visitArrayLiteral()

> **visitArrayLiteral**(`node`): `Promise`\<`Promise`\<`any`\>[]\>

Defined in: [src/ts/lang/interpreter.ts:332](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L332)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`Promise`\<`any`\>[]\>

***

### visitAssignment()

> **visitAssignment**(`node`): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:170](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L170)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`any`\>

***

### visitBinaryOperator()

> **visitBinaryOperator**(`node`): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:418](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L418)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`any`\>

***

### visitBlockStatement()

> **visitBlockStatement**(`node`): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:227](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L227)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`any`\>

***

### visitExpressionStatement()

> **visitExpressionStatement**(`node`): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:166](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L166)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`any`\>

***

### visitForStatement()

> **visitForStatement**(`node`): `Promise`\<`null`\>

Defined in: [src/ts/lang/interpreter.ts:211](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L211)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`null`\>

***

### visitFunctionCall()

> **visitFunctionCall**(`node`): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:258](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L258)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`any`\>

***

### visitFunctionDeclaration()

> **visitFunctionDeclaration**(`node`): `Promise`\<\{ `body`: `null` \| [`ASTNode`](../../ast/classes/ASTNode.md); `parameters`: `undefined` \| `any`[]; \}\>

Defined in: [src/ts/lang/interpreter.ts:247](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L247)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<\{ `body`: `null` \| [`ASTNode`](../../ast/classes/ASTNode.md); `parameters`: `undefined` \| `any`[]; \}\>

***

### visitIdentifier()

> **visitIdentifier**(`node`): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:402](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L402)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`any`\>

***

### visitIfStatement()

> **visitIfStatement**(`node`): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:190](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L190)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`any`\>

***

### visitObjectLiteral()

> **visitObjectLiteral**(`node`): `Promise`\<`Record`\<`string`, [`ASTNode`](../../ast/classes/ASTNode.md)\>\>

Defined in: [src/ts/lang/interpreter.ts:383](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L383)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`Record`\<`string`, [`ASTNode`](../../ast/classes/ASTNode.md)\>\>

***

### visitProgram()

> **visitProgram**(`node`): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:156](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L156)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`any`\>

***

### visitPropertyAccess()

> **visitPropertyAccess**(`node`): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:393](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L393)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`any`\>

***

### visitReturnStatement()

> **visitReturnStatement**(`node`): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:328](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L328)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`any`\>

***

### visitWhileStatement()

> **visitWhileStatement**(`node`): `Promise`\<`any`\>

Defined in: [src/ts/lang/interpreter.ts:202](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/interpreter.ts#L202)

#### Parameters

##### node

[`ASTNode`](../../ast/classes/ASTNode.md)

#### Returns

`Promise`\<`any`\>
