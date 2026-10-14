[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/libraries/axios](../README.md) / AxiosError

# Class: AxiosError\<T, D\>

Defined in: [src/types/libraries/axios.ts:437](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L437)

## Extends

- `Error`

## Extended by

- [`CanceledError`](CanceledError.md)

## Type Parameters

### T

`T` = `unknown`

### D

`D` = `any`

## Constructors

### Constructor

> **new AxiosError**\<`T`, `D`\>(`message?`, `code?`, `config?`, `request?`, `response?`): `AxiosError`\<`T`, `D`\>

Defined in: [src/types/libraries/axios.ts:438](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L438)

#### Parameters

##### message?

`string`

##### code?

`string`

##### config?

[`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`D`\>

##### request?

`any`

##### response?

[`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `D`\>

#### Returns

`AxiosError`\<`T`, `D`\>

#### Overrides

`Error.constructor`

## Properties

### cause?

> `optional` **cause?**: `Error`

Defined in: [src/types/libraries/axios.ts:453](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L453)

#### Overrides

`Error.cause`

***

### code?

> `optional` **code?**: `string`

Defined in: [src/types/libraries/axios.ts:447](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L447)

***

### config?

> `optional` **config?**: [`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`D`\>

Defined in: [src/types/libraries/axios.ts:446](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L446)

***

### isAxiosError

> **isAxiosError**: `boolean`

Defined in: [src/types/libraries/axios.ts:450](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L450)

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1075

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1074

#### Inherited from

`Error.name`

***

### request?

> `optional` **request?**: `any`

Defined in: [src/types/libraries/axios.ts:448](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L448)

***

### response?

> `optional` **response?**: [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `D`\>

Defined in: [src/types/libraries/axios.ts:449](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L449)

***

### stack?

> `optional` **stack?**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.stack`

***

### status?

> `optional` **status?**: `number`

Defined in: [src/types/libraries/axios.ts:451](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L451)

***

### toJSON

> **toJSON**: () => `object`

Defined in: [src/types/libraries/axios.ts:452](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L452)

#### Returns

`object`

***

### ECONNABORTED

> `readonly` `static` **ECONNABORTED**: `"ECONNABORTED"` = `"ECONNABORTED"`

Defined in: [src/types/libraries/axios.ts:472](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L472)

***

### ERR\_BAD\_OPTION

> `readonly` `static` **ERR\_BAD\_OPTION**: `"ERR_BAD_OPTION"` = `"ERR_BAD_OPTION"`

Defined in: [src/types/libraries/axios.ts:464](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L464)

***

### ERR\_BAD\_OPTION\_VALUE

> `readonly` `static` **ERR\_BAD\_OPTION\_VALUE**: `"ERR_BAD_OPTION_VALUE"` = `"ERR_BAD_OPTION_VALUE"`

Defined in: [src/types/libraries/axios.ts:463](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L463)

***

### ERR\_BAD\_REQUEST

> `readonly` `static` **ERR\_BAD\_REQUEST**: `"ERR_BAD_REQUEST"` = `"ERR_BAD_REQUEST"`

Defined in: [src/types/libraries/axios.ts:468](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L468)

***

### ERR\_BAD\_RESPONSE

> `readonly` `static` **ERR\_BAD\_RESPONSE**: `"ERR_BAD_RESPONSE"` = `"ERR_BAD_RESPONSE"`

Defined in: [src/types/libraries/axios.ts:467](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L467)

***

### ERR\_CANCELED

> `readonly` `static` **ERR\_CANCELED**: `"ERR_CANCELED"` = `"ERR_CANCELED"`

Defined in: [src/types/libraries/axios.ts:471](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L471)

***

### ERR\_DEPRECATED

> `readonly` `static` **ERR\_DEPRECATED**: `"ERR_DEPRECATED"` = `"ERR_DEPRECATED"`

Defined in: [src/types/libraries/axios.ts:466](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L466)

***

### ERR\_FR\_TOO\_MANY\_REDIRECTS

> `readonly` `static` **ERR\_FR\_TOO\_MANY\_REDIRECTS**: `"ERR_FR_TOO_MANY_REDIRECTS"` = `"ERR_FR_TOO_MANY_REDIRECTS"`

Defined in: [src/types/libraries/axios.ts:462](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L462)

***

### ERR\_INVALID\_URL

> `readonly` `static` **ERR\_INVALID\_URL**: `"ERR_INVALID_URL"` = `"ERR_INVALID_URL"`

Defined in: [src/types/libraries/axios.ts:470](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L470)

***

### ERR\_NETWORK

> `readonly` `static` **ERR\_NETWORK**: `"ERR_NETWORK"` = `"ERR_NETWORK"`

Defined in: [src/types/libraries/axios.ts:465](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L465)

***

### ERR\_NOT\_SUPPORT

> `readonly` `static` **ERR\_NOT\_SUPPORT**: `"ERR_NOT_SUPPORT"` = `"ERR_NOT_SUPPORT"`

Defined in: [src/types/libraries/axios.ts:469](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L469)

***

### ETIMEDOUT

> `readonly` `static` **ETIMEDOUT**: `"ETIMEDOUT"` = `"ETIMEDOUT"`

Defined in: [src/types/libraries/axios.ts:473](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L473)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:68

The `Error.stackTraceLimit` property specifies the number of stack frames
collected by a stack trace (whether generated by `new Error().stack` or
`Error.captureStackTrace(obj)`).

The default value is `10` but may be set to any valid JavaScript number. Changes
will affect any stack trace captured _after_ the value has been changed.

If set to a non-number value, or set to a negative number, stack traces will
not capture any frames.

#### Inherited from

`Error.stackTraceLimit`

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/@types/node/globals.d.ts:52

Creates a `.stack` property on `targetObject`, which when accessed returns
a string representing the location in the code at which
`Error.captureStackTrace()` was called.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`
```

The first line of the trace will be prefixed with
`${myObject.name}: ${myObject.message}`.

The optional `constructorOpt` argument accepts a function. If given, all frames
above `constructorOpt`, including `constructorOpt`, will be omitted from the
generated stack trace.

The `constructorOpt` argument is useful for hiding implementation
details of error generation from the user. For instance:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Create an error without stack trace to avoid calculating the stack trace twice.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capture the stack trace above function b
  Error.captureStackTrace(error, b); // Neither function c, nor b is included in the stack trace
  throw error;
}

a();
```

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

***

### from()

> `static` **from**\<`T`, `D`\>(`error`, `code?`, `config?`, `request?`, `response?`, `customProps?`): `AxiosError`\<`T`, `D`\>

Defined in: [src/types/libraries/axios.ts:454](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L454)

#### Type Parameters

##### T

`T` = `unknown`

##### D

`D` = `any`

#### Parameters

##### error

`unknown`

##### code?

`string`

##### config?

[`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`D`\>

##### request?

`any`

##### response?

[`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `D`\>

##### customProps?

`object`

#### Returns

`AxiosError`\<`T`, `D`\>

***

### isError()

> `static` **isError**(`error`): `error is Error`

Defined in: node\_modules/typescript/lib/lib.esnext.error.d.ts:21

Indicates whether the argument provided is a built-in Error instance or not.

#### Parameters

##### error

`unknown`

#### Returns

`error is Error`

#### Inherited from

`Error.isError`

***

### prepareStackTrace()

> `static` **prepareStackTrace**(`err`, `stackTraces`): `any`

Defined in: node\_modules/@types/node/globals.d.ts:56

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
