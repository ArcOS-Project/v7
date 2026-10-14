[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/libraries/axios](../README.md) / AxiosRequestConfig

# Interface: AxiosRequestConfig\<D\>

Defined in: [src/types/libraries/axios.ts:340](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L340)

## Extended by

- [`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md)

## Type Parameters

### D

`D` = `any`

## Properties

### adapter?

> `optional` **adapter?**: [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md) \| [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md)[]

Defined in: [src/types/libraries/axios.ts:353](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L353)

***

### auth?

> `optional` **auth?**: [`AxiosBasicCredentials`](AxiosBasicCredentials.md)

Defined in: [src/types/libraries/axios.ts:354](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L354)

***

### baseURL?

> `optional` **baseURL?**: `string`

Defined in: [src/types/libraries/axios.ts:343](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L343)

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

***

### cancelToken?

> `optional` **cancelToken?**: [`CancelToken`](CancelToken.md)

Defined in: [src/types/libraries/axios.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L375)

***

### data?

> `optional` **data?**: `D`

Defined in: [src/types/libraries/axios.ts:349](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L349)

***

### decompress?

> `optional` **decompress?**: `boolean`

Defined in: [src/types/libraries/axios.ts:376](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L376)

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

***

### family?

> `optional` **family?**: [`AddressFamily`](../type-aliases/AddressFamily.md)

Defined in: [src/types/libraries/axios.ts:384](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L384)

***

### fetchOptions?

> `optional` **fetchOptions?**: `Record`\<`string`, `any`\>

Defined in: [src/types/libraries/axios.ts:396](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L396)

***

### formSerializer?

> `optional` **formSerializer?**: [`FormSerializerOptions`](FormSerializerOptions.md)

Defined in: [src/types/libraries/axios.ts:383](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L383)

***

### headers?

> `optional` **headers?**: [`AxiosHeaders`](../classes/AxiosHeaders.md) \| `Partial`\<[`RawAxiosHeaders`](RawAxiosHeaders.md) & `object` & `object`\> & `Partial`\<`object` & `object`\>

Defined in: [src/types/libraries/axios.ts:346](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L346)

***

### httpAgent?

> `optional` **httpAgent?**: `any`

Defined in: [src/types/libraries/axios.ts:372](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L372)

***

### httpsAgent?

> `optional` **httpsAgent?**: `any`

Defined in: [src/types/libraries/axios.ts:373](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L373)

***

### insecureHTTPParser?

> `optional` **insecureHTTPParser?**: `boolean`

Defined in: [src/types/libraries/axios.ts:379](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L379)

***

### lookup?

> `optional` **lookup?**: ((`hostname`, `options`, `cb`) => `void`) \| ((`hostname`, `options`) => `Promise`\<[`LookupAddress`](../type-aliases/LookupAddress.md) \| \[`address`: [`LookupAddressEntry`](LookupAddressEntry.md) \| [`LookupAddressEntry`](LookupAddressEntry.md)[], `family?`: [`AddressFamily`](../type-aliases/AddressFamily.md)\]\>)

Defined in: [src/types/libraries/axios.ts:385](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L385)

***

### maxBodyLength?

> `optional` **maxBodyLength?**: `number`

Defined in: [src/types/libraries/axios.ts:363](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L363)

***

### maxContentLength?

> `optional` **maxContentLength?**: `number`

Defined in: [src/types/libraries/axios.ts:361](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L361)

***

### maxRate?

> `optional` **maxRate?**: `number` \| \[`number`, `number`\]

Defined in: [src/types/libraries/axios.ts:365](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L365)

***

### maxRedirects?

> `optional` **maxRedirects?**: `number`

Defined in: [src/types/libraries/axios.ts:364](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L364)

***

### method?

> `optional` **method?**: `string`

Defined in: [src/types/libraries/axios.ts:342](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L342)

***

### onDownloadProgress?

> `optional` **onDownloadProgress?**: (`progressEvent`) => `void`

Defined in: [src/types/libraries/axios.ts:360](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L360)

#### Parameters

##### progressEvent

[`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

***

### onUploadProgress?

> `optional` **onUploadProgress?**: (`progressEvent`) => `void`

Defined in: [src/types/libraries/axios.ts:359](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L359)

#### Parameters

##### progressEvent

[`AxiosProgressEvent`](AxiosProgressEvent.md)

#### Returns

`void`

***

### params?

> `optional` **params?**: `any`

Defined in: [src/types/libraries/axios.ts:347](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L347)

***

### paramsSerializer?

> `optional` **paramsSerializer?**: [`CustomParamsSerializer`](CustomParamsSerializer.md) \| [`ParamsSerializerOptions`](ParamsSerializerOptions.md)

Defined in: [src/types/libraries/axios.ts:348](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L348)

***

### proxy?

> `optional` **proxy?**: `false` \| [`AxiosProxyConfig`](AxiosProxyConfig.md)

Defined in: [src/types/libraries/axios.ts:374](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L374)

***

### responseEncoding?

> `optional` **responseEncoding?**: `string`

Defined in: [src/types/libraries/axios.ts:356](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L356)

***

### responseType?

> `optional` **responseType?**: [`ResponseType`](../type-aliases/ResponseType.md)

Defined in: [src/types/libraries/axios.ts:355](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L355)

***

### signal?

> `optional` **signal?**: [`GenericAbortSignal`](GenericAbortSignal.md)

Defined in: [src/types/libraries/axios.ts:378](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L378)

***

### socketPath?

> `optional` **socketPath?**: `string` \| `null`

Defined in: [src/types/libraries/axios.ts:370](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L370)

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: [src/types/libraries/axios.ts:350](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L350)

***

### timeoutErrorMessage?

> `optional` **timeoutErrorMessage?**: `string`

Defined in: [src/types/libraries/axios.ts:351](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L351)

***

### transformRequest?

> `optional` **transformRequest?**: [`AxiosRequestTransformer`](AxiosRequestTransformer.md) \| [`AxiosRequestTransformer`](AxiosRequestTransformer.md)[]

Defined in: [src/types/libraries/axios.ts:344](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L344)

***

### transformResponse?

> `optional` **transformResponse?**: [`AxiosResponseTransformer`](AxiosResponseTransformer.md) \| [`AxiosResponseTransformer`](AxiosResponseTransformer.md)[]

Defined in: [src/types/libraries/axios.ts:345](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L345)

***

### transitional?

> `optional` **transitional?**: [`TransitionalOptions`](TransitionalOptions.md)

Defined in: [src/types/libraries/axios.ts:377](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L377)

***

### transport?

> `optional` **transport?**: `any`

Defined in: [src/types/libraries/axios.ts:371](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L371)

***

### url?

> `optional` **url?**: `string`

Defined in: [src/types/libraries/axios.ts:341](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L341)

***

### validateStatus?

> `optional` **validateStatus?**: ((`status`) => `boolean`) \| `null`

Defined in: [src/types/libraries/axios.ts:362](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L362)

***

### withCredentials?

> `optional` **withCredentials?**: `boolean`

Defined in: [src/types/libraries/axios.ts:352](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L352)

***

### withXSRFToken?

> `optional` **withXSRFToken?**: `boolean` \| ((`config`) => `boolean` \| `undefined`)

Defined in: [src/types/libraries/axios.ts:395](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L395)

***

### xsrfCookieName?

> `optional` **xsrfCookieName?**: `string`

Defined in: [src/types/libraries/axios.ts:357](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L357)

***

### xsrfHeaderName?

> `optional` **xsrfHeaderName?**: `string`

Defined in: [src/types/libraries/axios.ts:358](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L358)
