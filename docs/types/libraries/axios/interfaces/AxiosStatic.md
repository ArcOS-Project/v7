[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/libraries/axios](../README.md) / AxiosStatic

# Interface: AxiosStatic()

Defined in: [src/types/libraries/axios.ts:595](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L595)

## Extends

- [`AxiosInstance`](AxiosInstance.md)

## Call Signature

> **AxiosStatic**\<`T`, `R`, `D`\>(`config`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:595](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L595)

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

> **AxiosStatic**\<`T`, `R`, `D`\>(`url`, `config?`): `Promise`\<`R`\>

Defined in: [src/types/libraries/axios.ts:595](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L595)

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

### all

> **all**: \<`T`\>(`values`) => `Promise`\<`T`[]\>

Defined in: [src/types/libraries/axios.ts:604](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L604)

#### Type Parameters

##### T

`T`

#### Parameters

##### values

(`T` \| `Promise`\<`T`\>)[]

#### Returns

`Promise`\<`T`[]\>

***

### Axios

> **Axios**: *typeof* [`Axios`](../classes/Axios.md)

Defined in: [src/types/libraries/axios.ts:599](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L599)

***

### AxiosError

> **AxiosError**: *typeof* [`AxiosError`](../classes/AxiosError.md)

Defined in: [src/types/libraries/axios.ts:600](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L600)

***

### AxiosHeaders

> **AxiosHeaders**: *typeof* [`AxiosHeaders`](../classes/AxiosHeaders.md)

Defined in: [src/types/libraries/axios.ts:611](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L611)

***

### Cancel

> **Cancel**: [`CancelStatic`](CancelStatic.md)

Defined in: [src/types/libraries/axios.ts:597](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L597)

***

### CanceledError

> **CanceledError**: *typeof* [`CanceledError`](../classes/CanceledError.md)

Defined in: [src/types/libraries/axios.ts:610](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L610)

***

### CancelToken

> **CancelToken**: [`CancelTokenStatic`](CancelTokenStatic.md)

Defined in: [src/types/libraries/axios.ts:598](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L598)

***

### defaults

> **defaults**: `Omit`\<[`AxiosDefaults`](AxiosDefaults.md)\<`any`\>, `"headers"`\> & `object`

Defined in: [src/types/libraries/axios.ts:555](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L555)

#### Type Declaration

##### headers

> **headers**: [`HeadersDefaults`](HeadersDefaults.md) & `object`

#### Inherited from

[`AxiosInstance`](AxiosInstance.md).[`defaults`](AxiosInstance.md#defaults)

***

### formToJSON

> **formToJSON**: (`form`) => `object`

Defined in: [src/types/libraries/axios.ts:608](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L608)

#### Parameters

##### form

[`GenericFormData`](GenericFormData.md) \| [`GenericHTMLFormElement`](GenericHTMLFormElement.md)

#### Returns

`object`

***

### getAdapter

> **getAdapter**: (`adapters`) => [`AxiosAdapter`](AxiosAdapter.md)

Defined in: [src/types/libraries/axios.ts:609](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L609)

#### Parameters

##### adapters

[`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md) \| [`AxiosAdapterConfig`](../type-aliases/AxiosAdapterConfig.md)[] \| `undefined`

#### Returns

[`AxiosAdapter`](AxiosAdapter.md)

***

### HttpStatusCode

> **HttpStatusCode**: *typeof* [`HttpStatusCode`](../enumerations/HttpStatusCode.md)

Defined in: [src/types/libraries/axios.ts:601](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L601)

***

### interceptors

> **interceptors**: `object`

Defined in: [src/types/libraries/axios.ts:533](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L533)

#### request

> **request**: [`AxiosInterceptorManager`](AxiosInterceptorManager.md)\<[`InternalAxiosRequestConfig`](InternalAxiosRequestConfig.md)\<`any`\>\>

#### response

> **response**: [`AxiosInterceptorManager`](AxiosInterceptorManager.md)\<[`AxiosResponse`](AxiosResponse.md)\<`any`, `any`\>\>

#### Inherited from

[`AxiosInstance`](AxiosInstance.md).[`interceptors`](AxiosInstance.md#interceptors)

***

### isAxiosError

> **isAxiosError**: \<`T`, `D`\>(`payload`) => `payload is AxiosError<T, D>`

Defined in: [src/types/libraries/axios.ts:606](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L606)

#### Type Parameters

##### T

`T` = `any`

##### D

`D` = `any`

#### Parameters

##### payload

`any`

#### Returns

`payload is AxiosError<T, D>`

***

### isCancel

> **isCancel**: (`value`) => `value is Cancel`

Defined in: [src/types/libraries/axios.ts:603](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L603)

#### Parameters

##### value

`any`

#### Returns

`value is Cancel`

***

### mergeConfig

> **mergeConfig**: \<`D`\>(`config1`, `config2`) => [`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

Defined in: [src/types/libraries/axios.ts:612](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L612)

#### Type Parameters

##### D

`D` = `any`

#### Parameters

##### config1

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

##### config2

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

#### Returns

[`AxiosRequestConfig`](AxiosRequestConfig.md)\<`D`\>

***

### spread

> **spread**: \<`T`, `R`\>(`callback`) => (`array`) => `R`

Defined in: [src/types/libraries/axios.ts:605](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L605)

#### Type Parameters

##### T

`T`

##### R

`R`

#### Parameters

##### callback

(...`args`) => `R`

#### Returns

(`array`) => `R`

***

### toFormData

> **toFormData**: (`sourceObj`, `targetFormData?`, `options?`) => [`GenericFormData`](GenericFormData.md)

Defined in: [src/types/libraries/axios.ts:607](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L607)

#### Parameters

##### sourceObj

`object`

##### targetFormData?

[`GenericFormData`](GenericFormData.md)

##### options?

[`FormSerializerOptions`](FormSerializerOptions.md)

#### Returns

[`GenericFormData`](GenericFormData.md)

***

### VERSION

> `readonly` **VERSION**: `string`

Defined in: [src/types/libraries/axios.ts:602](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L602)

## Methods

### create()

> **create**(`config?`): [`AxiosInstance`](AxiosInstance.md)

Defined in: [src/types/libraries/axios.ts:596](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L596)

#### Parameters

##### config?

[`CreateAxiosDefaults`](CreateAxiosDefaults.md)\<`any`\>

#### Returns

[`AxiosInstance`](AxiosInstance.md)

***

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

[`AxiosInstance`](AxiosInstance.md).[`delete`](AxiosInstance.md#delete)

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

[`AxiosInstance`](AxiosInstance.md).[`get`](AxiosInstance.md#get)

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

[`AxiosInstance`](AxiosInstance.md).[`getUri`](AxiosInstance.md#geturi)

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

[`AxiosInstance`](AxiosInstance.md).[`head`](AxiosInstance.md#head)

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

[`AxiosInstance`](AxiosInstance.md).[`options`](AxiosInstance.md#options)

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

[`AxiosInstance`](AxiosInstance.md).[`patch`](AxiosInstance.md#patch)

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

[`AxiosInstance`](AxiosInstance.md).[`patchForm`](AxiosInstance.md#patchform)

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

[`AxiosInstance`](AxiosInstance.md).[`post`](AxiosInstance.md#post)

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

[`AxiosInstance`](AxiosInstance.md).[`postForm`](AxiosInstance.md#postform)

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

[`AxiosInstance`](AxiosInstance.md).[`put`](AxiosInstance.md#put)

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

[`AxiosInstance`](AxiosInstance.md).[`putForm`](AxiosInstance.md#putform)

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

[`AxiosInstance`](AxiosInstance.md).[`request`](AxiosInstance.md#request)
