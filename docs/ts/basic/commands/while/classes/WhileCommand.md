[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/basic/commands/while](../README.md) / WhileCommand

# Class: WhileCommand

Defined in: [src/ts/basic/commands/while.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/commands/while.ts#L5)

## Extends

- [`BasicCommand`](../../../engine/command/classes/BasicCommand.md)

## Constructors

### Constructor

> **new WhileCommand**(`interpreter`): `WhileCommand`

Defined in: [src/ts/basic/engine/command.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/command.ts#L7)

#### Parameters

##### interpreter

[`ArcBasicEngine`](../../../engine/classes/ArcBasicEngine.md)

#### Returns

`WhileCommand`

#### Inherited from

[`BasicCommand`](../../../engine/command/classes/BasicCommand.md).[`constructor`](../../../engine/command/classes/BasicCommand.md#constructor)

## Properties

### interpreter

> `protected` **interpreter**: [`ArcBasicEngine`](../../../engine/classes/ArcBasicEngine.md)

Defined in: [src/ts/basic/engine/command.ts:4](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/command.ts#L4)

#### Inherited from

[`BasicCommand`](../../../engine/command/classes/BasicCommand.md).[`interpreter`](../../../engine/command/classes/BasicCommand.md#interpreter)

***

### keyword

> `static` **keyword**: `string` = `"while"`

Defined in: [src/ts/basic/commands/while.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/commands/while.ts#L6)

#### Overrides

[`BasicCommand`](../../../engine/command/classes/BasicCommand.md).[`keyword`](../../../engine/command/classes/BasicCommand.md#keyword)

## Methods

### execute()

> **execute**(`line`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/basic/commands/while.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/commands/while.ts#L8)

#### Parameters

##### line

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Overrides

[`BasicCommand`](../../../engine/command/classes/BasicCommand.md).[`execute`](../../../engine/command/classes/BasicCommand.md#execute)
