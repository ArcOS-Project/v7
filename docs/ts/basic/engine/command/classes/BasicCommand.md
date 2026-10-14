[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/basic/engine/command](../README.md) / BasicCommand

# Class: BasicCommand

Defined in: [src/ts/basic/engine/command.ts:3](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/command.ts#L3)

## Extended by

- [`EndsubCommand`](../../../commands/endsub/classes/EndsubCommand.md)
- [`ErrorCommand`](../../../commands/error/classes/ErrorCommand.md)
- [`GostartCommand`](../../../commands/gostart/classes/GostartCommand.md)
- [`GosubCommand`](../../../commands/gosub/classes/GosubCommand.md)
- [`IfCommand`](../../../commands/if/classes/IfCommand.md)
- [`KillCommand`](../../../commands/kill/classes/KillCommand.md)
- [`PrintCommand`](../../../commands/print/classes/PrintCommand.md)
- [`SoundbusCommand`](../../../commands/soundbus/classes/SoundbusCommand.md)
- [`StopCommand`](../../../commands/stop/classes/StopCommand.md)
- [`SubCommand`](../../../commands/sub/classes/SubCommand.md)
- [`VarCommand`](../../../commands/var/classes/VarCommand.md)
- [`WhileCommand`](../../../commands/while/classes/WhileCommand.md)

## Constructors

### Constructor

> **new BasicCommand**(`interpreter`): `BasicCommand`

Defined in: [src/ts/basic/engine/command.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/command.ts#L7)

#### Parameters

##### interpreter

[`ArcBasicEngine`](../../classes/ArcBasicEngine.md)

#### Returns

`BasicCommand`

## Properties

### interpreter

> `protected` **interpreter**: [`ArcBasicEngine`](../../classes/ArcBasicEngine.md)

Defined in: [src/ts/basic/engine/command.ts:4](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/command.ts#L4)

***

### keyword

> `static` **keyword**: `string`

Defined in: [src/ts/basic/engine/command.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/command.ts#L5)

## Methods

### execute()

> **execute**(`line`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/basic/engine/command.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/command.ts#L11)

#### Parameters

##### line

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>
