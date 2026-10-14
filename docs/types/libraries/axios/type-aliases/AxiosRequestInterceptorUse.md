[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/libraries/axios](../README.md) / AxiosRequestInterceptorUse

# Type Alias: AxiosRequestInterceptorUse\<T\>

> **AxiosRequestInterceptorUse**\<`T`\> = (`onFulfilled?`, `onRejected?`, `options?`) => `number`

Defined in: [src/types/libraries/axios.ts:513](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/axios.ts#L513)

## Type Parameters

### T

`T`

## Parameters

### onFulfilled?

((`value`) => `T` \| `Promise`\<`T`\>) \| `null`

### onRejected?

((`error`) => `any`) \| `null`

### options?

[`AxiosInterceptorOptions`](../interfaces/AxiosInterceptorOptions.md)

## Returns

`number`
