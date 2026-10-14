[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/util/error](../README.md) / ErrorUtils

# Class: ErrorUtils

Defined in: [src/ts/util/error.ts:4](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/util/error.ts#L4)

## Constructors

### Constructor

> **new ErrorUtils**(): `ErrorUtils`

#### Returns

`ErrorUtils`

## Properties

### URL\_REGEX

> `static` **URL\_REGEX**: `RegExp`

Defined in: [src/ts/util/error.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/util/error.ts#L5)

## Methods

### abbreviatedStackTrace()

> `static` **abbreviatedStackTrace**(`e`, `prefix?`): `string`

Defined in: [src/ts/util/error.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/util/error.ts#L26)

#### Parameters

##### e

`Error` \| `PromiseRejectionEvent`

##### prefix?

`string` = `""`

#### Returns

`string`

***

### parseStack()

> `static` **parseStack**(`e`): [`ParsedStackFrame`](../../../../types/libraries/error/type-aliases/ParsedStackFrame.md)[]

Defined in: [src/ts/util/error.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/util/error.ts#L8)

#### Parameters

##### e

`Error` \| `PromiseRejectionEvent`

#### Returns

[`ParsedStackFrame`](../../../../types/libraries/error/type-aliases/ParsedStackFrame.md)[]
