[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/libraries/axios](../README.md) / CreateAxiosDefaults

# Interface: CreateAxiosDefaults\<D\>

Defined in: [src/types/libraries/axios.ts:424](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L424)

## Extends

- `Omit`\<[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>, `"headers"`\>

## Type Parameters

### D

`D` = `any`

## Properties

### adapter?

> `optional` **adapter?**: [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md) \| [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md)[]

Defined in: [src/types/libraries/axios.ts:353](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L353)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`adapter`](InternalAxiosRequestConfig.md#adapter)

***

### auth?

> `optional` **auth?**: [`AxiosBasicCredentials`](AxiosBasicCredentials.md)

Defined in: [src/types/libraries/axios.ts:354](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L354)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`auth`](InternalAxiosRequestConfig.md#auth)

***

### baseURL?

> `optional` **baseURL?**: `string`

Defined in: [src/types/libraries/axios.ts:343](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L343)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`baseURL`](InternalAxiosRequestConfig.md#baseurl)

***

### beforeRedirect?

> `optional` **beforeRedirect?**: (`options`, `responseDetails`) => `void`

Defined in: [src/types/libraries/axios.ts:366](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L366)

#### Parameters

##### options

`Record`\<`string`, `any`\>

##### responseDetails

###### headers

`Record`\<`string`, `string`\>

###### statusCode

[`HttpStatusCode`](../enumerations/HttpStatusCode.md)

#### Returns

`void`

#### Inherited from

`Omit.beforeRedirect`

***

### cancelToken?

> `optional` **cancelToken?**: [`CancelToken`](CancelToken.md)

Defined in: [src/types/libraries/axios.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L375)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`cancelToken`](InternalAxiosRequestConfig.md#canceltoken)

***

### data?

> `optional` **data?**: `D`

Defined in: [src/types/libraries/axios.ts:349](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L349)

#### Inherited from

`Omit.data`

***

### decompress?

> `optional` **decompress?**: `boolean`

Defined in: [src/types/libraries/axios.ts:376](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L376)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`decompress`](InternalAxiosRequestConfig.md#decompress)

***

### env?

> `optional` **env?**: `object`

Defined in: [src/types/libraries/axios.ts:380](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L380)

#### FormData?

> `optional` **FormData?**: (...`args`) => `object`

##### Parameters

###### args

...`any`[]

##### Returns

`object`

#### Inherited from

`Omit.env`

***

### family?

> `optional` **family?**: [`AddressFamily`](../type-aliases/AddressFamily.md)

Defined in: [src/types/libraries/axios.ts:384](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L384)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`family`](InternalAxiosRequestConfig.md#family)

***

### fetchOptions?

> `optional` **fetchOptions?**: `Record`\<`string`, `any`\>

Defined in: [src/types/libraries/axios.ts:396](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L396)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`fetchOptions`](InternalAxiosRequestConfig.md#fetchoptions)

***

### formSerializer?

> `optional` **formSerializer?**: [`FormSerializerOptions`](FormSerializerOptions.md)

Defined in: [src/types/libraries/axios.ts:383](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L383)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`formSerializer`](InternalAxiosRequestConfig.md#formserializer)

***

### headers?

> `optional` **headers?**: [`AxiosHeaders`](../classes/AxiosHeaders.md) \| `Partial`\<[`RawAxiosHeaders`](RawAxiosHeaders.md) & `object` & `object`\> \| `Partial`\<[`HeadersDefaults`](HeadersDefaults.md)\>

Defined in: [src/types/libraries/axios.ts:425](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L425)

***

### httpAgent?

> `optional` **httpAgent?**: `any`

Defined in: [src/types/libraries/axios.ts:372](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L372)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`httpAgent`](InternalAxiosRequestConfig.md#httpagent)

***

### httpsAgent?

> `optional` **httpsAgent?**: `any`

Defined in: [src/types/libraries/axios.ts:373](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L373)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`httpsAgent`](InternalAxiosRequestConfig.md#httpsagent)

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser?**: `boolean`

Defined in: [src/types/libraries/axios.ts:379](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L379)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`insecureHTTPParser`](InternalAxiosRequestConfig.md#insecurehttpparser)

***

### lookup?

> `optional` **lookup?**: ((`hostname`, `options`, `cb`) => `void`) \| ((`hostname`, `options`) => `Promise`\<[`LookupAddress`](../type-aliases/LookupAddress.md) \| \[`address`: [`LookupAddressEntry`](LookupAddressEntry.md) \| [`LookupAddressEntry`](LookupAddressEntry.md)[], `family?`: [`AddressFamily`](../type-aliases/AddressFamily.md)\]\>)

Defined in: [src/types/libraries/axios.ts:385](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L385)

#### Inherited from

`Omit.lookup`

***

### maxBodyLength?

> `optional` **maxBodyLength?**: `number`

Defined in: [src/types/libraries/axios.ts:363](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L363)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`maxBodyLength`](InternalAxiosRequestConfig.md#maxbodylength)

***

### maxContentLength?

> `optional` **maxContentLength?**: `number`

Defined in: [src/types/libraries/axios.ts:361](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L361)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`maxContentLength`](InternalAxiosRequestConfig.md#maxcontentlength)

***

### maxRate?

> `optional` **maxRate?**: `number` \| \[`number`, `number`\]

Defined in: [src/types/libraries/axios.ts:365](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L365)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`maxRate`](InternalAxiosRequestConfig.md#maxrate)

***

### maxRedirects?

> `optional` **maxRedirects?**: `number`

Defined in: [src/types/libraries/axios.ts:364](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L364)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`maxRedirects`](InternalAxiosRequestConfig.md#maxredirects)

***

### method?

> `optional` **method?**: `string`

Defined in: [src/types/libraries/axios.ts:342](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L342)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`method`](InternalAxiosRequestConfig.md#method)

***

### onDownloadProgress?

> `optional` **onDownloadProgress?**: (`progressEvent`) => `void`

Defined in: [src/types/libraries/axios.ts:360](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L360)

#### Parameters

##### progressEvent

[`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onDownloadProgress`

***

### onUploadProgress?

> `optional` **onUploadProgress?**: (`progressEvent`) => `void`

Defined in: [src/types/libraries/axios.ts:359](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L359)

#### Parameters

##### progressEvent

[`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onUploadProgress`

***

### params?

> `optional` **params?**: `any`

Defined in: [src/types/libraries/axios.ts:347](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L347)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`params`](InternalAxiosRequestConfig.md#params)

***

### paramsSerializer?

> `optional` **paramsSerializer?**: [`CustomParamsSerializer`](CustomParamsSerializer.md) \| [`ParamsSerializerOptions`](ParamsSerializerOptions.md)

Defined in: [src/types/libraries/axios.ts:348](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L348)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`paramsSerializer`](InternalAxiosRequestConfig.md#paramsserializer)

***

### proxy?

> `optional` **proxy?**: `false` \| [`AxiosProxyConfig`](AxiosProxyConfig.md)

Defined in: [src/types/libraries/axios.ts:374](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L374)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`proxy`](InternalAxiosRequestConfig.md#proxy)

***

### responseEncoding?

> `optional` **responseEncoding?**: `string`

Defined in: [src/types/libraries/axios.ts:356](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L356)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`responseEncoding`](InternalAxiosRequestConfig.md#responseencoding)

***

### responseType?

> `optional` **responseType?**: [`ResponseType`](../type-aliases/ResponseType.md)

Defined in: [src/types/libraries/axios.ts:355](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L355)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`responseType`](InternalAxiosRequestConfig.md#responsetype)

***

### signal?

> `optional` **signal?**: [`GenericAbortSignal`](GenericAbortSignal.md)

Defined in: [src/types/libraries/axios.ts:378](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L378)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`signal`](InternalAxiosRequestConfig.md#signal)

***

### socketPath?

> `optional` **socketPath?**: `string` \| `null`

Defined in: [src/types/libraries/axios.ts:370](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L370)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`socketPath`](InternalAxiosRequestConfig.md#socketpath)

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: [src/types/libraries/axios.ts:350](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L350)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`timeout`](InternalAxiosRequestConfig.md#timeout)

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage?**: `string`

Defined in: [src/types/libraries/axios.ts:351](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L351)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`timeoutErrorMessage`](InternalAxiosRequestConfig.md#timeouterrormessage)

***

### transformRequest?

> `optional` **transformRequest?**: [`AxiosRequestTransformer`](AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](AxiosRequestTransformer.md)[]

Defined in: [src/types/libraries/axios.ts:344](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L344)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`transformRequest`](InternalAxiosRequestConfig.md#transformrequest)

***

### transformResponse?

> `optional` **transformResponse?**: [`AxiosResponseTransformer`](AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](AxiosResponseTransformer.md)[]

Defined in: [src/types/libraries/axios.ts:345](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L345)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`transformResponse`](InternalAxiosRequestConfig.md#transformresponse)

***

### transitional?

> `optional` **transitional?**: [`TransitionalOptions`](TransitionalOptions.md)

Defined in: [src/types/libraries/axios.ts:377](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L377)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`transitional`](InternalAxiosRequestConfig.md#transitional)

***

### transport?

> `optional` **transport?**: `any`

Defined in: [src/types/libraries/axios.ts:371](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L371)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`transport`](InternalAxiosRequestConfig.md#transport)

***

### url?

> `optional` **url?**: `string`

Defined in: [src/types/libraries/axios.ts:341](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L341)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`url`](InternalAxiosRequestConfig.md#url)

***

### validateStatus?

> `optional` **validateStatus?**: ((`status`) => `boolean`) \| `null`

Defined in: [src/types/libraries/axios.ts:362](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L362)

#### Inherited from

`Omit.validateStatus`

***

### withCredentials?

> `optional` **withCredentials?**: `boolean`

Defined in: [src/types/libraries/axios.ts:352](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L352)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`withCredentials`](InternalAxiosRequestConfig.md#withcredentials)

***

### withXSRFToken?

> `optional` **withXSRFToken?**: `boolean` \| ((`config`) => `boolean` \| `undefined`)

Defined in: [src/types/libraries/axios.ts:395](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L395)

#### Inherited from

`Omit.withXSRFToken`

***

### xsrfCookieName?

> `optional` **xsrfCookieName?**: `string`

Defined in: [src/types/libraries/axios.ts:357](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L357)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`xsrfCookieName`](InternalAxiosRequestConfig.md#xsrfcookiename)

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName?**: `string`

Defined in: [src/types/libraries/axios.ts:358](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L358)

#### Inherited from

[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md).[`xsrfHeaderName`](InternalAxiosRequestConfig.md#xsrfheadername)
