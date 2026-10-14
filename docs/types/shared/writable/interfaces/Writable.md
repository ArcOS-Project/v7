[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/shared/writable](../README.md) / Writable

# Interface: Writable\<T\>

Defined in: [src/types/shared/writable.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/shared/writable.ts#L21)

Writable interface for both updating and subscribing.

## Extends

- [`Readable`](Readable.md)\<`T`\>

## Type Parameters

### T

`T`

## Methods

### set()

> **set**(`this`, `value`): `void`

Defined in: [src/types/shared/writable.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/shared/writable.ts#L26)

Set value and inform subscribers.

#### Parameters

##### this

`void`

##### value

`T`

to set

#### Returns

`void`

***

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

#### Inherited from

[`Readable`](Readable.md).[`subscribe`](Readable.md#subscribe)

***

### update()

> **update**(`this`, `updater`): `void`

Defined in: [src/types/shared/writable.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/shared/writable.ts#L32)

Update value using callback and inform subscribers.

#### Parameters

##### this

`void`

##### updater

[`Updater`](../type-aliases/Updater.md)\<`T`\>

callback

#### Returns

`void`
