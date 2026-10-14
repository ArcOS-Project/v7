[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/libraries/axios](../README.md) / AxiosResponseInterceptorUse

# Type Alias: AxiosResponseInterceptorUse\<T\>

> **AxiosResponseInterceptorUse**\<`T`\> = (`onFulfilled?`, `onRejected?`) => `number`

Defined in: [src/types/libraries/axios.ts:519](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L519)

## Type Parameters

### T

`T`

## Parameters

### onFulfilled?

((`value`) => `T` \| `Promise`\<`T`\>) \| `null`

### onRejected?

((`error`) => `any`) \| `null`

## Returns

`number`
