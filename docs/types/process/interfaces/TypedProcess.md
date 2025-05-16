[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [types/process](../README.md) / TypedProcess

# Interface: TypedProcess

Defined in: [src/types/process.ts:1](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/process.ts#L1)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean`

Defined in: [src/types/process.ts:9](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/process.ts#L9)

***

### \_disposed

> **\_disposed**: `boolean`

Defined in: [src/types/process.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/process.ts#L8)

***

### killSelf()

> **killSelf**: () => `Promise`\<`boolean`\>

Defined in: [src/types/process.ts:4](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/process.ts#L4)

#### Returns

`Promise`\<`boolean`\>

***

### name

> **name**: `string`

Defined in: [src/types/process.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/process.ts#L7)

***

### parentPid?

> `optional` **parentPid**: `number`

Defined in: [src/types/process.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/process.ts#L6)

***

### pid

> **pid**: `number`

Defined in: [src/types/process.ts:5](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/process.ts#L5)

***

### start()?

> `optional` **start**: () => `any`

Defined in: [src/types/process.ts:2](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/process.ts#L2)

#### Returns

`any`

***

### stop()?

> `optional` **stop**: () => `any`

Defined in: [src/types/process.ts:3](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/process.ts#L3)

#### Returns

`any`
