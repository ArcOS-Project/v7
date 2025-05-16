[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [types/state](../README.md) / State

# Interface: State

Defined in: [src/types/state.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/state.ts#L6)

## Properties

### app?

> `optional` **app**: [`App`](../../app/interfaces/App.md)

Defined in: [src/types/state.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/state.ts#L8)

***

### html?

> `optional` **html**: `string`

Defined in: [src/types/state.ts:9](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/state.ts#L9)

***

### identifier

> **identifier**: `string`

Defined in: [src/types/state.ts:11](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/state.ts#L11)

***

### name

> **name**: `string`

Defined in: [src/types/state.ts:10](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/state.ts#L10)

***

### render()?

> `optional` **render**: (`props`, `accessors`) => `Promise`\<`any`\>

Defined in: [src/types/state.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/state.ts#L7)

#### Parameters

##### props

`Record`\<`string`, `any`\>

##### accessors

[`StateRendererAccessors`](StateRendererAccessors.md)

#### Returns

`Promise`\<`any`\>
