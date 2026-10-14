[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/libraries/axios](../README.md) / AxiosInstance

# Interface: AxiosInstance()

Defined in: [src/types/libraries/axios.ts:551](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L551)

## Extends

- [`Axios`](../classes/Axios.md)

## Extended by

- [`AxiosStatic`](AxiosStatic.md)

## Call Signature

> **AxiosInstance**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:552](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L552)

### Type Parameters

#### T

`T` = `any`

#### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

#### D

`D` = `any`

### Parameters

#### config

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

### Returns

`Promise`\<`R`\>

## Call Signature

> **AxiosInstance**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:553](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L553)

### Type Parameters

#### T

`T` = `any`

#### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

#### D

`D` = `any`

### Parameters

#### url

`string`

#### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

### Returns

`Promise`\<`R`\>

## Properties

### defaults

> **defaults**: `Omit`\<[`AxiosDefaults`](AxiosDefaults.md)\<`any`\>, `"headers"`\> & `object`

Defined in: [src/types/libraries/axios.ts:555](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L555)

#### Type Declaration

##### headers

> **headers**: [`HeadersDefaults`](HeadersDefaults.md) & `object`

#### Overrides

[`Axios`](../classes/Axios.md).[`defaults`](../classes/Axios.md#defaults)

***

### interceptors

> **interceptors**: `object`

Defined in: [src/types/libraries/axios.ts:533](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L533)

#### request

> **request**: [`AxiosInterceptorManager`](AxiosInterceptorManager.md)\<[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md)\<`any`\>\>

#### response

> **response**: [`AxiosInterceptorManager`](AxiosInterceptorManager.md)\<[`AxiosResponse`](AxiosResponse.md)\<`any`, `any`\>\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`interceptors`](../classes/Axios.md#interceptors)

## Methods

### delete()

> **delete**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:540](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L540)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`delete`](../classes/Axios.md#delete)

***

### get()

> **get**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:539](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L539)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`get`](../classes/Axios.md#get)

***

### getUri()

> **getUri**(`config?`): `string`

Defined in: [src/types/libraries/axios.ts:537](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L537)

#### Parameters

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`any`\>

#### Returns

`string`

#### Inherited from

[`Axios`](../classes/Axios.md).[`getUri`](../classes/Axios.md#geturi)

***

### head()

> **head**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:541](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L541)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`head`](../classes/Axios.md#head)

***

### options()

> **options**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:542](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L542)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`options`](../classes/Axios.md#options)

***

### patch()

> **patch**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:545](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L545)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`patch`](../classes/Axios.md#patch)

***

### patchForm()

> **patchForm**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:548](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L548)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`patchForm`](../classes/Axios.md#patchform)

***

### post()

> **post**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:543](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L543)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`post`](../classes/Axios.md#post)

***

### postForm()

> **postForm**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:546](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L546)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`postForm`](../classes/Axios.md#postform)

***

### put()

> **put**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:544](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L544)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`put`](../classes/Axios.md#put)

***

### putForm()

> **putForm**\<`T`, `R`, `D`\>(`url`, `data?`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:547](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L547)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### url

`string`

##### data?

`D`

##### config?

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`putForm`](../classes/Axios.md#putform)

***

### request()

> **request**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:538](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L538)

#### Type Parameters

##### T

`T` = `any`

##### R

`R` = [`AxiosResponse`](AxiosResponse.md)\<`T`, `any`\>

##### D

`D` = `any`

#### Parameters

##### config

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

`Promise`\<`R`\>

#### Inherited from

[`Axios`](../classes/Axios.md).[`request`](../classes/Axios.md#request)
