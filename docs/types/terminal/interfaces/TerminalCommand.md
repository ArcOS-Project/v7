[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [types/terminal](../README.md) / TerminalCommand

# Interface: TerminalCommand

Defined in: [src/types/terminal.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/terminal.ts#L6)

## Properties

### description

> **description**: `string`

Defined in: [src/types/terminal.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/terminal.ts#L8)

***

### exec

> **exec**: (`term`, `flags`, `argv`) => `number` \| `Promise`\<`number`\>

Defined in: [src/types/terminal.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/terminal.ts#L10)

#### Parameters

##### term

[`IArcTerminal`](../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md)

##### flags

[`Arguments`](../type-aliases/Arguments.md)

##### argv

`string`[]

#### Returns

`number` \| `Promise`\<`number`\>

***

### hidden?

> `optional` **hidden?**: `boolean`

Defined in: [src/types/terminal.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/terminal.ts#L9)

***

### keyword

> **keyword**: `string`

Defined in: [src/types/terminal.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/terminal.ts#L7)
