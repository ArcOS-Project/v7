[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/services/service](../README.md) / Service

# Interface: Service

Defined in: [src/types/services/service.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/services/service.ts#L8)

## Properties

### changedAt?

> `optional` **changedAt?**: `number`

Defined in: [src/types/services/service.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/services/service.ts#L17)

***

### description

> **description**: `string`

Defined in: [src/types/services/service.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/services/service.ts#L10)

***

### id?

> `optional` **id?**: `string`

Defined in: [src/types/services/service.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/services/service.ts#L14)

***

### initialState?

> `optional` **initialState?**: [`InitialServiceState`](../type-aliases/InitialServiceState.md)

Defined in: [src/types/services/service.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/services/service.ts#L15)

***

### loadedAt?

> `optional` **loadedAt?**: `number`

Defined in: [src/types/services/service.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/services/service.ts#L16)

***

### name

> **name**: `string`

Defined in: [src/types/services/service.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/services/service.ts#L9)

***

### pid?

> `optional` **pid?**: `number`

Defined in: [src/types/services/service.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/services/service.ts#L13)

***

### process

> **process**: [`Constructs`](../../../../interfaces/common/interfaces/Constructs.md)\<[`IBaseService`](../../../../interfaces/IServiceHost/interfaces/IBaseService.md)\>

Defined in: [src/types/services/service.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/services/service.ts#L11)

***

### startCondition?

> `optional` **startCondition?**: (`daemon`) => [`MaybePromise`](../../../shared/common/type-aliases/MaybePromise.md)\<`boolean`\>

Defined in: [src/types/services/service.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/services/service.ts#L12)

#### Parameters

##### daemon

[`IUserDaemon`](../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

[`MaybePromise`](../../../shared/common/type-aliases/MaybePromise.md)\<`boolean`\>
