[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/msl/error](../README.md) / LanguageExecutionError

# Class: LanguageExecutionError

Defined in: [src/ts/msl/error.ts:4](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/error.ts#L4)

## Extends

- `Error`

## Constructors

### Constructor

> **new LanguageExecutionError**(`message`, `lang`, `keyword`): `LanguageExecutionError`

Defined in: [src/ts/msl/error.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/error.ts#L12)

#### Parameters

##### message

`string`

##### lang

[`LanguageInstance`](../../instance/classes/LanguageInstance.md)

##### keyword

`string` = `""`

#### Returns

`LanguageExecutionError`

#### Overrides

`Error.constructor`

## Properties

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:24

#### Inherited from

`Error.cause`

***

### executionCount

> **executionCount**: `number` = `0`

Defined in: [src/ts/msl/error.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/error.ts#L6)

***

### instruction

> **instruction**: [`InterpreterCommand`](../../../../types/msl/interfaces/InterpreterCommand.md)

Defined in: [src/ts/msl/error.ts:10](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/error.ts#L10)

***

### keyword

> **keyword**: `string` = `""`

Defined in: [src/ts/msl/error.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/error.ts#L7)

***

### message

> **message**: `string`

Defined in: [src/ts/msl/error.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/error.ts#L8)

#### Overrides

`Error.message`

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### pointer

> **pointer**: `number` = `-1`

Defined in: [src/ts/msl/error.ts:5](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/error.ts#L5)

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### tokens

> **tokens**: `string`[]

Defined in: [src/ts/msl/error.ts:9](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/error.ts#L9)

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:145

#### Inherited from

`Error.stackTraceLimit`

## Methods

### getObject()

> **getObject**(): `object`

Defined in: [src/ts/msl/error.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/msl/error.ts#L23)

#### Returns

`object`

##### executionCount

> **executionCount**: `number`

##### instruction

> **instruction**: [`InterpreterCommand`](../../../../types/msl/interfaces/InterpreterCommand.md)

##### keyword

> **keyword**: `string`

##### message

> **message**: `string`

##### pointer

> **pointer**: `number`

##### tokens

> **tokens**: `string`[]

***

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`
