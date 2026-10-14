[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/libraries/axios](../README.md) / AxiosHeaders

# Class: AxiosHeaders

Defined in: [src/types/libraries/axios.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L19)

## Indexable

> \[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AxiosHeaders**(`headers?`): `AxiosHeaders`

Defined in: [src/types/libraries/axios.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L20)

#### Parameters

##### headers?

`string` \| `AxiosHeaders` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md)

#### Returns

`AxiosHeaders`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `IterableIterator`\<\[`string`, [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)\]\>

Defined in: [src/types/libraries/axios.ts:78](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L78)

#### Returns

`IterableIterator`\<\[`string`, [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)\]\>

***

### clear()

> **clear**(`matcher?`): `boolean`

Defined in: [src/types/libraries/axios.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L34)

#### Parameters

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### concat()

> **concat**(...`targets`): `AxiosHeaders`

Defined in: [src/types/libraries/axios.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L38)

#### Parameters

##### targets

...(`string` \| `AxiosHeaders` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| `null` \| `undefined`)[]

#### Returns

`AxiosHeaders`

***

### delete()

> **delete**(`header`, `matcher?`): `boolean`

Defined in: [src/types/libraries/axios.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L32)

#### Parameters

##### header

`string` \| `string`[]

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### get()

#### Call Signature

> **get**(`headerName`, `parser`): `RegExpExecArray` \| `null`

Defined in: [src/types/libraries/axios.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L27)

##### Parameters

###### headerName

`string`

###### parser

`RegExp`

##### Returns

`RegExpExecArray` \| `null`

#### Call Signature

> **get**(`headerName`, `matcher?`): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

Defined in: [src/types/libraries/axios.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L28)

##### Parameters

###### headerName

`string`

###### matcher?

`true` \| [`AxiosHeaderParser`](../type-aliases/AxiosHeaderParser.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

***

### getAccept()

#### Call Signature

> **getAccept**(`parser?`): `RegExpExecArray` \| `null`

Defined in: [src/types/libraries/axios.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L59)

##### Parameters

###### parser?

`RegExp`

##### Returns

`RegExpExecArray` \| `null`

#### Call Signature

> **getAccept**(`matcher?`): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

Defined in: [src/types/libraries/axios.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L60)

##### Parameters

###### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

***

### getAuthorization()

#### Call Signature

> **getAuthorization**(`parser?`): `RegExpExecArray` \| `null`

Defined in: [src/types/libraries/axios.ts:74](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L74)

##### Parameters

###### parser?

`RegExp`

##### Returns

`RegExpExecArray` \| `null`

#### Call Signature

> **getAuthorization**(`matcher?`): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

Defined in: [src/types/libraries/axios.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L75)

##### Parameters

###### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

***

### getContentEncoding()

#### Call Signature

> **getContentEncoding**(`parser?`): `RegExpExecArray` \| `null`

Defined in: [src/types/libraries/axios.ts:69](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L69)

##### Parameters

###### parser?

`RegExp`

##### Returns

`RegExpExecArray` \| `null`

#### Call Signature

> **getContentEncoding**(`matcher?`): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

Defined in: [src/types/libraries/axios.ts:70](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L70)

##### Parameters

###### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

***

### getContentLength()

#### Call Signature

> **getContentLength**(`parser?`): `RegExpExecArray` \| `null`

Defined in: [src/types/libraries/axios.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L54)

##### Parameters

###### parser?

`RegExp`

##### Returns

`RegExpExecArray` \| `null`

#### Call Signature

> **getContentLength**(`matcher?`): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

Defined in: [src/types/libraries/axios.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L55)

##### Parameters

###### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

***

### getContentType()

#### Call Signature

> **getContentType**(`parser?`): `RegExpExecArray` \| `null`

Defined in: [src/types/libraries/axios.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L49)

##### Parameters

###### parser?

`RegExp`

##### Returns

`RegExpExecArray` \| `null`

#### Call Signature

> **getContentType**(`matcher?`): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

Defined in: [src/types/libraries/axios.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L50)

##### Parameters

###### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

***

### getUserAgent()

#### Call Signature

> **getUserAgent**(`parser?`): `RegExpExecArray` \| `null`

Defined in: [src/types/libraries/axios.ts:64](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L64)

##### Parameters

###### parser?

`RegExp`

##### Returns

`RegExpExecArray` \| `null`

#### Call Signature

> **getUserAgent**(`matcher?`): [`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

Defined in: [src/types/libraries/axios.ts:65](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L65)

##### Parameters

###### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

***

### has()

> **has**(`header`, `matcher?`): `boolean`

Defined in: [src/types/libraries/axios.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L30)

#### Parameters

##### header

`string`

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### hasAccept()

> **hasAccept**(`matcher?`): `boolean`

Defined in: [src/types/libraries/axios.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L61)

#### Parameters

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### hasAuthorization()

> **hasAuthorization**(`matcher?`): `boolean`

Defined in: [src/types/libraries/axios.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L76)

#### Parameters

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### hasContentEncoding()

> **hasContentEncoding**(`matcher?`): `boolean`

Defined in: [src/types/libraries/axios.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L71)

#### Parameters

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### hasContentLength()

> **hasContentLength**(`matcher?`): `boolean`

Defined in: [src/types/libraries/axios.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L56)

#### Parameters

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### hasContentType()

> **hasContentType**(`matcher?`): `boolean`

Defined in: [src/types/libraries/axios.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L51)

#### Parameters

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### hasUserAgent()

> **hasUserAgent**(`matcher?`): `boolean`

Defined in: [src/types/libraries/axios.ts:66](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L66)

#### Parameters

##### matcher?

[`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`boolean`

***

### normalize()

> **normalize**(`format`): `AxiosHeaders`

Defined in: [src/types/libraries/axios.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L36)

#### Parameters

##### format

`boolean`

#### Returns

`AxiosHeaders`

***

### set()

#### Call Signature

> **set**(`headerName?`, `value?`, `rewrite?`): `AxiosHeaders`

Defined in: [src/types/libraries/axios.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L24)

##### Parameters

###### headerName?

`string`

###### value?

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

###### rewrite?

`boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

##### Returns

`AxiosHeaders`

#### Call Signature

> **set**(`headers?`, `rewrite?`): `AxiosHeaders`

Defined in: [src/types/libraries/axios.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L25)

##### Parameters

###### headers?

`string` \| `AxiosHeaders` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md)

###### rewrite?

`boolean`

##### Returns

`AxiosHeaders`

***

### setAccept()

> **setAccept**(`value`, `rewrite?`): `AxiosHeaders`

Defined in: [src/types/libraries/axios.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L58)

#### Parameters

##### value

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### rewrite?

`boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`AxiosHeaders`

***

### setAuthorization()

> **setAuthorization**(`value`, `rewrite?`): `AxiosHeaders`

Defined in: [src/types/libraries/axios.ts:73](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L73)

#### Parameters

##### value

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### rewrite?

`boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`AxiosHeaders`

***

### setContentEncoding()

> **setContentEncoding**(`value`, `rewrite?`): `AxiosHeaders`

Defined in: [src/types/libraries/axios.ts:68](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L68)

#### Parameters

##### value

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### rewrite?

`boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`AxiosHeaders`

***

### setContentLength()

> **setContentLength**(`value`, `rewrite?`): `AxiosHeaders`

Defined in: [src/types/libraries/axios.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L53)

#### Parameters

##### value

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### rewrite?

`boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`AxiosHeaders`

***

### setContentType()

> **setContentType**(`value`, `rewrite?`): `AxiosHeaders`

Defined in: [src/types/libraries/axios.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L48)

#### Parameters

##### value

[`ContentType`](../type-aliases/ContentType.md)

##### rewrite?

`boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`AxiosHeaders`

***

### setUserAgent()

> **setUserAgent**(`value`, `rewrite?`): `AxiosHeaders`

Defined in: [src/types/libraries/axios.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L63)

#### Parameters

##### value

[`AxiosHeaderValue`](../type-aliases/AxiosHeaderValue.md)

##### rewrite?

`boolean` \| [`AxiosHeaderMatcher`](../type-aliases/AxiosHeaderMatcher.md)

#### Returns

`AxiosHeaders`

***

### toJSON()

> **toJSON**(`asStrings?`): [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md)

Defined in: [src/types/libraries/axios.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L40)

#### Parameters

##### asStrings?

`boolean`

#### Returns

[`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md)

***

### accessor()

> `static` **accessor**(`header`): `AxiosHeaders`

Defined in: [src/types/libraries/axios.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L44)

#### Parameters

##### header

`string` \| `string`[]

#### Returns

`AxiosHeaders`

***

### concat()

> `static` **concat**(...`targets`): `AxiosHeaders`

Defined in: [src/types/libraries/axios.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L46)

#### Parameters

##### targets

...(`string` \| `AxiosHeaders` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md) \| `null` \| `undefined`)[]

#### Returns

`AxiosHeaders`

***

### from()

> `static` **from**(`thing?`): `AxiosHeaders`

Defined in: [src/types/libraries/axios.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L42)

#### Parameters

##### thing?

`string` \| `AxiosHeaders` \| [`RawAxiosHeaders`](../interfaces/RawAxiosHeaders.md)

#### Returns

`AxiosHeaders`
