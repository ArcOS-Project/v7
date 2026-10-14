[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/libraries/axios](../README.md) / CanceledError

# Class: CanceledError\<T\>

Defined in: [src/types/libraries/axios.ts:476](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L476)

## Extends

- [`AxiosError`](AxiosError.md)\<`T`\>

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new CanceledError**\<`T`\>(`message?`, `code?`, `config?`, `request?`, `response?`): `CanceledError`\<`T`\>

Defined in: [src/types/libraries/axios.ts:438](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L438)

#### Parameters

##### message?

`string`

##### code?

`string`

##### config?

[`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`any`\>

##### request?

`any`

##### response?

[`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

#### Returns

`CanceledError`\<`T`\>

#### Inherited from

[`AxiosError`](AxiosError.md).[`constructor`](AxiosError.md#constructor)

## Properties

### cause?

> `optional` **cause?**: `Error`

Defined in: [src/types/libraries/axios.ts:453](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L453)

#### Inherited from

[`AxiosError`](AxiosError.md).[`cause`](AxiosError.md#cause)

***

### code?

> `optional` **code?**: `string`

Defined in: [src/types/libraries/axios.ts:447](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L447)

#### Inherited from

[`AxiosError`](AxiosError.md).[`code`](AxiosError.md#code)

***

### config?

> `optional` **config?**: [`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`any`\>

Defined in: [src/types/libraries/axios.ts:446](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L446)

#### Inherited from

[`AxiosError`](AxiosError.md).[`config`](AxiosError.md#config)

***

### isAxiosError

> **isAxiosError**: `boolean`

Defined in: [src/types/libraries/axios.ts:450](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L450)

#### Inherited from

[`AxiosError`](AxiosError.md).[`isAxiosError`](AxiosError.md#isaxioserror)

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1075

#### Inherited from

[`AxiosError`](AxiosError.md).[`message`](AxiosError.md#message)

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1074

#### Inherited from

[`AxiosError`](AxiosError.md).[`name`](AxiosError.md#name)

***

### request?

> `optional` **request?**: `any`

Defined in: [src/types/libraries/axios.ts:448](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L448)

#### Inherited from

[`AxiosError`](AxiosError.md).[`request`](AxiosError.md#request)

***

### response?

> `optional` **response?**: [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

Defined in: [src/types/libraries/axios.ts:449](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L449)

#### Inherited from

[`AxiosError`](AxiosError.md).[`response`](AxiosError.md#response)

***

### stack?

> `optional` **stack?**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`AxiosError`](AxiosError.md).[`stack`](AxiosError.md#stack)

***

### status?

> `optional` **status?**: `number`

Defined in: [src/types/libraries/axios.ts:451](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L451)

#### Inherited from

[`AxiosError`](AxiosError.md).[`status`](AxiosError.md#status)

***

### toJSON

> **toJSON**: () => `object`

Defined in: [src/types/libraries/axios.ts:452](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L452)

#### Returns

`object`

#### Inherited from

[`AxiosError`](AxiosError.md).[`toJSON`](AxiosError.md#tojson)

***

### ECONNABORTED

> `readonly` `static` **ECONNABORTED**: `"ECONNABORTED"` = `"ECONNABORTED"`

Defined in: [src/types/libraries/axios.ts:472](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L472)

#### Inherited from

[`AxiosError`](AxiosError.md).[`ECONNABORTED`](AxiosError.md#econnaborted)

***

### ERR\_BAD\_OPTION

> `readonly` `static` **ERR\_BAD\_OPTION**: `"ERR_BAD_OPTION"` = `"ERR_BAD_OPTION"`

Defined in: [src/types/libraries/axios.ts:464](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L464)

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_BAD_OPTION`](AxiosError.md#err_bad_option)

***

### ERR\_BAD\_OPTION\_VALUE

> `readonly` `static` **ERR\_BAD\_OPTION\_VALUE**: `"ERR_BAD_OPTION_VALUE"` = `"ERR_BAD_OPTION_VALUE"`

Defined in: [src/types/libraries/axios.ts:463](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L463)

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_BAD_OPTION_VALUE`](AxiosError.md#err_bad_option_value)

***

### ERR\_BAD\_REQUEST

> `readonly` `static` **ERR\_BAD\_REQUEST**: `"ERR_BAD_REQUEST"` = `"ERR_BAD_REQUEST"`

Defined in: [src/types/libraries/axios.ts:468](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L468)

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_BAD_REQUEST`](AxiosError.md#err_bad_request)

***

### ERR\_BAD\_RESPONSE

> `readonly` `static` **ERR\_BAD\_RESPONSE**: `"ERR_BAD_RESPONSE"` = `"ERR_BAD_RESPONSE"`

Defined in: [src/types/libraries/axios.ts:467](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L467)

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_BAD_RESPONSE`](AxiosError.md#err_bad_response)

***

### ERR\_CANCELED

> `readonly` `static` **ERR\_CANCELED**: `"ERR_CANCELED"` = `"ERR_CANCELED"`

Defined in: [src/types/libraries/axios.ts:471](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L471)

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_CANCELED`](AxiosError.md#err_canceled)

***

### ERR\_DEPRECATED

> `readonly` `static` **ERR\_DEPRECATED**: `"ERR_DEPRECATED"` = `"ERR_DEPRECATED"`

Defined in: [src/types/libraries/axios.ts:466](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L466)

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_DEPRECATED`](AxiosError.md#err_deprecated)

***

### ERR\_FR\_TOO\_MANY\_REDIRECTS

> `readonly` `static` **ERR\_FR\_TOO\_MANY\_REDIRECTS**: `"ERR_FR_TOO_MANY_REDIRECTS"` = `"ERR_FR_TOO_MANY_REDIRECTS"`

Defined in: [src/types/libraries/axios.ts:462](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L462)

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_FR_TOO_MANY_REDIRECTS`](AxiosError.md#err_fr_too_many_redirects)

***

### ERR\_INVALID\_URL

> `readonly` `static` **ERR\_INVALID\_URL**: `"ERR_INVALID_URL"` = `"ERR_INVALID_URL"`

Defined in: [src/types/libraries/axios.ts:470](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L470)

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_INVALID_URL`](AxiosError.md#err_invalid_url)

***

### ERR\_NETWORK

> `readonly` `static` **ERR\_NETWORK**: `"ERR_NETWORK"` = `"ERR_NETWORK"`

Defined in: [src/types/libraries/axios.ts:465](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L465)

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_NETWORK`](AxiosError.md#err_network)

***

### ERR\_NOT\_SUPPORT

> `readonly` `static` **ERR\_NOT\_SUPPORT**: `"ERR_NOT_SUPPORT"` = `"ERR_NOT_SUPPORT"`

Defined in: [src/types/libraries/axios.ts:469](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L469)

#### Inherited from

[`AxiosError`](AxiosError.md).[`ERR_NOT_SUPPORT`](AxiosError.md#err_not_support)

***

### ETIMEDOUT

> `readonly` `static` **ETIMEDOUT**: `"ETIMEDOUT"` = `"ETIMEDOUT"`

Defined in: [src/types/libraries/axios.ts:473](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L473)

#### Inherited from

[`AxiosError`](AxiosError.md).[`ETIMEDOUT`](AxiosError.md#etimedout)

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

[`AxiosError`](AxiosError.md).[`stackTraceLimit`](AxiosError.md#stacktracelimit)

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

[`AxiosError`](AxiosError.md).[`captureStackTrace`](AxiosError.md#capturestacktrace)

***

### from()

> `static` **from**\<`T`, `D`\>(`error`, `code?`, `config?`, `request?`, `response?`, `customProps?`): [`AxiosError`](AxiosError.md)\<`T`, `D`\>

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

[`AxiosError`](AxiosError.md)\<`T`, `D`\>

#### Inherited from

[`AxiosError`](AxiosError.md).[`from`](AxiosError.md#from)

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

[`AxiosError`](AxiosError.md).[`isError`](AxiosError.md#iserror)

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

[`AxiosError`](AxiosError.md).[`prepareStackTrace`](AxiosError.md#preparestacktrace)
