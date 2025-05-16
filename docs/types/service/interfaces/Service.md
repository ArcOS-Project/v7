[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [types/service](../README.md) / Service

# Interface: Service

Defined in: [src/types/service.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/service.ts#L6)

## Properties

### changedAt?

> `optional` **changedAt**: `number`

Defined in: [src/types/service.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/service.ts#L15)

***

### description

> **description**: `string`

Defined in: [src/types/service.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/service.ts#L8)

***

### id?

> `optional` **id**: `string`

Defined in: [src/types/service.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/service.ts#L12)

***

### initialState?

> `optional` **initialState**: [`InitialServiceState`](../type-aliases/InitialServiceState.md)

Defined in: [src/types/service.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/service.ts#L13)

***

### loadedAt?

> `optional` **loadedAt**: `number`

Defined in: [src/types/service.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/service.ts#L14)

***

### name

> **name**: `string`

Defined in: [src/types/service.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/service.ts#L7)

***

### pid?

> `optional` **pid**: `number`

Defined in: [src/types/service.ts:11](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/service.ts#L11)

***

### process

> **process**: *typeof* [`BaseService`](../../../ts/services/base/classes/BaseService.md)

Defined in: [src/types/service.ts:9](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/service.ts#L9)

***

### startCondition()?

> `optional` **startCondition**: (`daemon`) => [`MaybePromise`](../../common/type-aliases/MaybePromise.md)\<`boolean`\>

Defined in: [src/types/service.ts:10](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/service.ts#L10)

#### Parameters

##### daemon

[`UserDaemon`](../../../ts/server/user/daemon/classes/UserDaemon.md)

#### Returns

[`MaybePromise`](../../common/type-aliases/MaybePromise.md)\<`boolean`\>
