[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/basic/commands/error](../README.md) / ErrorCommand

# Class: ErrorCommand

Defined in: [src/ts/basic/commands/error.ts:3](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/commands/error.ts#L3)

## Extends

- [`BasicCommand`](../../../engine/command/classes/BasicCommand.md)

## Constructors

### Constructor

> **new ErrorCommand**(`interpreter`): `ErrorCommand`

Defined in: [src/ts/basic/engine/command.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/command.ts#L7)

#### Parameters

##### interpreter

[`ArcBasicEngine`](../../../engine/classes/ArcBasicEngine.md)

#### Returns

`ErrorCommand`

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

> `static` **keyword**: `string` = `"error"`

Defined in: [src/ts/basic/commands/error.ts:4](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/commands/error.ts#L4)

#### Overrides

[`BasicCommand`](../../../engine/command/classes/BasicCommand.md).[`keyword`](../../../engine/command/classes/BasicCommand.md#keyword)

## Methods

### execute()

> **execute**(`line`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/basic/commands/error.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/commands/error.ts#L6)

#### Parameters

##### line

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Overrides

[`BasicCommand`](../../../engine/command/classes/BasicCommand.md).[`execute`](../../../engine/command/classes/BasicCommand.md#execute)
