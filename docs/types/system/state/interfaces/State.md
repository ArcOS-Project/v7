[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/system/state](../README.md) / State

# Interface: State

Defined in: [src/types/system/state.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/state.ts#L6)

## Properties

### appModule?

> `optional` **appModule?**: [`AppModuleLoader`](../type-aliases/AppModuleLoader.md)

Defined in: [src/types/system/state.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/state.ts#L8)

***

### html?

> `optional` **html?**: `string`

Defined in: [src/types/system/state.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/state.ts#L9)

***

### identifier

> **identifier**: `string`

Defined in: [src/types/system/state.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/state.ts#L11)

***

### name

> **name**: `string`

Defined in: [src/types/system/state.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/state.ts#L10)

***

### render?

> `optional` **render?**: (`props`, `accessors`) => `Promise`\<`any`\>

Defined in: [src/types/system/state.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/state.ts#L7)

#### Parameters

##### props

`Record`\<`string`, `any`\>

##### accessors

[`StateRendererAccessors`](StateRendererAccessors.md)

#### Returns

`Promise`\<`any`\>
