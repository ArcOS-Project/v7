[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/shared/writable](../README.md) / Readable

# Interface: Readable\<T\>

Defined in: [src/types/shared/writable.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/shared/writable.ts#L11)

Readable interface for subscribing.

## Extended by

- [`Writable`](Writable.md)

## Type Parameters

### T

`T`

## Methods

### subscribe()

> **subscribe**(`this`, `run`, `invalidate?`): [`Unsubscriber`](../type-aliases/Unsubscriber.md)

Defined in: [src/types/shared/writable.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/shared/writable.ts#L17)

Subscribe on value changes.

#### Parameters

##### this

`void`

##### run

[`Subscriber`](../type-aliases/Subscriber.md)\<`T`\>

subscription callback

##### invalidate?

() => `void`

cleanup callback

#### Returns

[`Unsubscriber`](../type-aliases/Unsubscriber.md)
