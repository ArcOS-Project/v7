[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [types/terminal](../README.md) / TerminalCommand

# Interface: TerminalCommand

Defined in: [src/types/terminal.ts:3](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/terminal.ts#L3)

## Properties

### description

> **description**: `string`

Defined in: [src/types/terminal.ts:5](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/terminal.ts#L5)

***

### exec()

> **exec**: (`term`, `flags`, `argv`) => `number` \| `Promise`\<`number`\>

Defined in: [src/types/terminal.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/terminal.ts#L7)

#### Parameters

##### term

[`ArcTerminal`](../../../ts/terminal/classes/ArcTerminal.md)

##### flags

[`Arguments`](../type-aliases/Arguments.md)

##### argv

`string`[]

#### Returns

`number` \| `Promise`\<`number`\>

***

### hidden?

> `optional` **hidden**: `boolean`

Defined in: [src/types/terminal.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/terminal.ts#L6)

***

### keyword

> **keyword**: `string`

Defined in: [src/types/terminal.ts:4](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/terminal.ts#L4)
