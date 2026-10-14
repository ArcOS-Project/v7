[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/services/proto](../README.md) / ProtocolHandler

# Interface: ProtocolHandler

Defined in: [src/types/services/proto.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/services/proto.ts#L22)

## Properties

### action

> **action**: (`payload`, `daemon`, `proto`) => [`MaybePromise`](../../../shared/common/type-aliases/MaybePromise.md)\<`boolean`\>

Defined in: [src/types/services/proto.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/services/proto.ts#L26)

#### Parameters

##### payload

`Record`\<`string`, `any`\>

##### daemon

[`IUserDaemon`](../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

##### proto

[`ArcProtocol`](ArcProtocol.md)

#### Returns

[`MaybePromise`](../../../shared/common/type-aliases/MaybePromise.md)\<`boolean`\>

***

### className?

> `optional` **className?**: `string`

Defined in: [src/types/services/proto.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/services/proto.ts#L24)

***

### info

> **info**: (`payload`, `daemon`) => \{ `caption`: `string`; `icon`: `string`; `title?`: `string`; \} \| `undefined`

Defined in: [src/types/services/proto.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/services/proto.ts#L25)

#### Parameters

##### payload

`Record`\<`string`, `any`\>

##### daemon

[`IUserDaemon`](../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

\{ `caption`: `string`; `icon`: `string`; `title?`: `string`; \} \| `undefined`

***

### name

> **name**: `string`

Defined in: [src/types/services/proto.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/services/proto.ts#L23)
