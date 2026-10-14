[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/libraries/axios](../README.md) / Axios

# Class: Axios

Defined in: [src/types/libraries/axios.ts:530](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L530)

## Extended by

- [`AxiosInstance`](../interfaces/AxiosInstance.md)

## Constructors

### Constructor

> **new Axios**(`config?`): `Axios`

Defined in: [src/types/libraries/axios.ts:531](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L531)

#### Parameters

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`any`\>

#### Returns

`Axios`

## Properties

### defaults

> **defaults**: [`AxiosDefaults`](../interfaces/AxiosDefaults.md)

Defined in: [src/types/libraries/axios.ts:532](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L532)

***

### interceptors

> **interceptors**: `object`

Defined in: [src/types/libraries/axios.ts:533](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L533)

#### request

> **request**: [`AxiosInterceptorManager`](../interfaces/AxiosInterceptorManager.md)\<[`InternalAxiosRequestConfig`](../interfaces/InternalAxiosRequestConfig.md)\<`any`\>\>

#### response

> **response**: [`AxiosInterceptorManager`](../interfaces/AxiosInterceptorManager.md)\<[`AxiosResponse`](../interfaces/AxiosResponse.md)\<`any`, `any`\>\>

## Methods

### delete()

> **delete**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:540](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L540)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

***

### get()

> **get**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:539](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L539)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

***

### getUri()

> **getUri**(`config?`): `string`

Defined in: [src/types/libraries/axios.ts:537](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L537)

#### Parameters

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`any`\>

#### Returns

`string`

***

### head()

> **head**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:541](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L541)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

***

### options()

> **options**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:542](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L542)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

***

### patch()

> **patch**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:545](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L545)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

***

### patchForm()

> **patchForm**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:548](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L548)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

***

### post()

> **post**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:543](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L543)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

***

### postForm()

> **postForm**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:546](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L546)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

***

### put()

> **put**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:544](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L544)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

***

### putForm()

> **putForm**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:547](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L547)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

***

### request()

> **request**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:538](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L538)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](../interfaces/AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### config

[`AxiosRequestConfig`](../interfaces/AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>
