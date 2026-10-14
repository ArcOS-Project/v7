[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/libraries/axios](../README.md) / InternalAxiosRequestConfig

# Interface: InternalAxiosRequestConfig\<D\>

Defined in: [src/types/libraries/axios.ts:402](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L402)

## Extends

- [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

## Type Parameters

### D

`D` = `any`

## Properties

### adapter?

> `optional` **adapter?**: [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md) \| [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md)[]

Defined in: [src/types/libraries/axios.ts:353](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L353)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`adapter`](AxiosRequestConfig.md#adapter)

***

### auth?

> `optional` **auth?**: [`AxiosBasicCredentials`](AxiosBasicCredentials.md)

Defined in: [src/types/libraries/axios.ts:354](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L354)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`auth`](AxiosRequestConfig.md#auth)

***

### baseURL?

> `optional` **baseURL?**: `string`

Defined in: [src/types/libraries/axios.ts:343](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L343)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`baseURL`](AxiosRequestConfig.md#baseurl)

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

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`beforeRedirect`](AxiosRequestConfig.md#beforeredirect)

***

### cancelToken?

> `optional` **cancelToken?**: [`CancelToken`](CancelToken.md)

Defined in: [src/types/libraries/axios.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L375)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`cancelToken`](AxiosRequestConfig.md#canceltoken)

***

### data?

> `optional` **data?**: `D`

Defined in: [src/types/libraries/axios.ts:349](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L349)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`data`](AxiosRequestConfig.md#data)

***

### decompress?

> `optional` **decompress?**: `boolean`

Defined in: [src/types/libraries/axios.ts:376](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L376)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`decompress`](AxiosRequestConfig.md#decompress)

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

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`env`](AxiosRequestConfig.md#env)

***

### family?

> `optional` **family?**: [`AddressFamily`](../type-aliases/AddressFamily.md)

Defined in: [src/types/libraries/axios.ts:384](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L384)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`family`](AxiosRequestConfig.md#family)

***

### fetchOptions?

> `optional` **fetchOptions?**: `Record`\<`string`, `any`\>

Defined in: [src/types/libraries/axios.ts:396](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L396)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`fetchOptions`](AxiosRequestConfig.md#fetchoptions)

***

### formSerializer?

> `optional` **formSerializer?**: [`FormSerializerOptions`](FormSerializerOptions.md)

Defined in: [src/types/libraries/axios.ts:383](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L383)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`formSerializer`](AxiosRequestConfig.md#formserializer)

***

### headers

> **headers**: [`AxiosRequestHeaders`](../type-aliases/AxiosRequestHeaders.md)

Defined in: [src/types/libraries/axios.ts:403](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L403)

#### Overrides

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`headers`](AxiosRequestConfig.md#headers)

***

### httpAgent?

> `optional` **httpAgent?**: `any`

Defined in: [src/types/libraries/axios.ts:372](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L372)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`httpAgent`](AxiosRequestConfig.md#httpagent)

***

### httpsAgent?

> `optional` **httpsAgent?**: `any`

Defined in: [src/types/libraries/axios.ts:373](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L373)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`httpsAgent`](AxiosRequestConfig.md#httpsagent)

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser?**: `boolean`

Defined in: [src/types/libraries/axios.ts:379](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L379)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`insecureHTTPParser`](AxiosRequestConfig.md#insecurehttpparser)

***

### lookup?

> `optional` **lookup?**: ((`hostname`, `options`, `cb`) => `void`) \| ((`hostname`, `options`) => `Promise`\<[`LookupAddress`](../type-aliases/LookupAddress.md) \| \[`address`: [`LookupAddressEntry`](LookupAddressEntry.md) \| [`LookupAddressEntry`](LookupAddressEntry.md)[], `family?`: [`AddressFamily`](../type-aliases/AddressFamily.md)\]\>)

Defined in: [src/types/libraries/axios.ts:385](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L385)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`lookup`](AxiosRequestConfig.md#lookup)

***

### maxBodyLength?

> `optional` **maxBodyLength?**: `number`

Defined in: [src/types/libraries/axios.ts:363](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L363)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxBodyLength`](AxiosRequestConfig.md#maxbodylength)

***

### maxContentLength?

> `optional` **maxContentLength?**: `number`

Defined in: [src/types/libraries/axios.ts:361](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L361)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxContentLength`](AxiosRequestConfig.md#maxcontentlength)

***

### maxRate?

> `optional` **maxRate?**: `number` \| \[`number`, `number`\]

Defined in: [src/types/libraries/axios.ts:365](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L365)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxRate`](AxiosRequestConfig.md#maxrate)

***

### maxRedirects?

> `optional` **maxRedirects?**: `number`

Defined in: [src/types/libraries/axios.ts:364](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L364)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`maxRedirects`](AxiosRequestConfig.md#maxredirects)

***

### method?

> `optional` **method?**: `string`

Defined in: [src/types/libraries/axios.ts:342](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L342)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`method`](AxiosRequestConfig.md#method)

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

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`onDownloadProgress`](AxiosRequestConfig.md#ondownloadprogress)

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

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`onUploadProgress`](AxiosRequestConfig.md#onuploadprogress)

***

### params?

> `optional` **params?**: `any`

Defined in: [src/types/libraries/axios.ts:347](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L347)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`params`](AxiosRequestConfig.md#params)

***

### paramsSerializer?

> `optional` **paramsSerializer?**: [`CustomParamsSerializer`](CustomParamsSerializer.md) \| [`ParamsSerializerOptions`](ParamsSerializerOptions.md)

Defined in: [src/types/libraries/axios.ts:348](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L348)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`paramsSerializer`](AxiosRequestConfig.md#paramsserializer)

***

### proxy?

> `optional` **proxy?**: `false` \| [`AxiosProxyConfig`](AxiosProxyConfig.md)

Defined in: [src/types/libraries/axios.ts:374](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L374)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`proxy`](AxiosRequestConfig.md#proxy)

***

### responseEncoding?

> `optional` **responseEncoding?**: `string`

Defined in: [src/types/libraries/axios.ts:356](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L356)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`responseEncoding`](AxiosRequestConfig.md#responseencoding)

***

### responseType?

> `optional` **responseType?**: [`ResponseType`](../type-aliases/ResponseType.md)

Defined in: [src/types/libraries/axios.ts:355](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L355)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`responseType`](AxiosRequestConfig.md#responsetype)

***

### signal?

> `optional` **signal?**: [`GenericAbortSignal`](GenericAbortSignal.md)

Defined in: [src/types/libraries/axios.ts:378](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L378)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`signal`](AxiosRequestConfig.md#signal)

***

### socketPath?

> `optional` **socketPath?**: `string` \| `null`

Defined in: [src/types/libraries/axios.ts:370](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L370)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`socketPath`](AxiosRequestConfig.md#socketpath)

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: [src/types/libraries/axios.ts:350](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L350)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`timeout`](AxiosRequestConfig.md#timeout)

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage?**: `string`

Defined in: [src/types/libraries/axios.ts:351](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L351)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`timeoutErrorMessage`](AxiosRequestConfig.md#timeouterrormessage)

***

### transformRequest?

> `optional` **transformRequest?**: [`AxiosRequestTransformer`](AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](AxiosRequestTransformer.md)[]

Defined in: [src/types/libraries/axios.ts:344](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L344)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transformRequest`](AxiosRequestConfig.md#transformrequest)

***

### transformResponse?

> `optional` **transformResponse?**: [`AxiosResponseTransformer`](AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](AxiosResponseTransformer.md)[]

Defined in: [src/types/libraries/axios.ts:345](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L345)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transformResponse`](AxiosRequestConfig.md#transformresponse)

***

### transitional?

> `optional` **transitional?**: [`TransitionalOptions`](TransitionalOptions.md)

Defined in: [src/types/libraries/axios.ts:377](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L377)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transitional`](AxiosRequestConfig.md#transitional)

***

### transport?

> `optional` **transport?**: `any`

Defined in: [src/types/libraries/axios.ts:371](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L371)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`transport`](AxiosRequestConfig.md#transport)

***

### url?

> `optional` **url?**: `string`

Defined in: [src/types/libraries/axios.ts:341](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L341)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`url`](AxiosRequestConfig.md#url)

***

### validateStatus?

> `optional` **validateStatus?**: ((`status`) => `boolean`) \| `null`

Defined in: [src/types/libraries/axios.ts:362](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L362)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`validateStatus`](AxiosRequestConfig.md#validatestatus)

***

### withCredentials?

> `optional` **withCredentials?**: `boolean`

Defined in: [src/types/libraries/axios.ts:352](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L352)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`withCredentials`](AxiosRequestConfig.md#withcredentials)

***

### withXSRFToken?

> `optional` **withXSRFToken?**: `boolean` \| ((`config`) => `boolean` \| `undefined`)

Defined in: [src/types/libraries/axios.ts:395](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L395)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`withXSRFToken`](AxiosRequestConfig.md#withxsrftoken)

***

### xsrfCookieName?

> `optional` **xsrfCookieName?**: `string`

Defined in: [src/types/libraries/axios.ts:357](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L357)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`xsrfCookieName`](AxiosRequestConfig.md#xsrfcookiename)

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName?**: `string`

Defined in: [src/types/libraries/axios.ts:358](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L358)

#### Inherited from

[`AxiosRequestConfig`](AxiosRequestConfig.md).[`xsrfHeaderName`](AxiosRequestConfig.md#xsrfheadername)
