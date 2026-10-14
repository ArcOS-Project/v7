[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/terminal/var](../README.md) / ArcTermVariables

# Class: ArcTermVariables

Defined in: [src/ts/terminal/var.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/var.ts#L7)

## Implements

- [`IArcTermVariables`](../../../../interfaces/IArcTerminal/interfaces/IArcTermVariables.md)

## Constructors

### Constructor

> **new ArcTermVariables**(`t`): `ArcTermVariables`

Defined in: [src/ts/terminal/var.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/var.ts#L12)

#### Parameters

##### t

[`IArcTerminal`](../../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md)

#### Returns

`ArcTermVariables`

## Properties

### term

> **term**: [`IArcTerminal`](../../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md)

Defined in: [src/ts/terminal/var.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/var.ts#L8)

#### Implementation of

[`IArcTermVariables`](../../../../interfaces/IArcTerminal/interfaces/IArcTermVariables.md).[`term`](../../../../interfaces/IArcTerminal/interfaces/IArcTermVariables.md#term)

## Methods

### delete()

> **delete**(`key`): `Promise`\<`boolean`\>

Defined in: [src/ts/terminal/var.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/var.ts#L63)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IArcTermVariables`](../../../../interfaces/IArcTerminal/interfaces/IArcTermVariables.md).[`delete`](../../../../interfaces/IArcTerminal/interfaces/IArcTermVariables.md#delete)

***

### get()

> **get**(`key`): `string` \| `undefined`

Defined in: [src/ts/terminal/var.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/var.ts#L31)

#### Parameters

##### key

`string`

#### Returns

`string` \| `undefined`

#### Implementation of

[`IArcTermVariables`](../../../../interfaces/IArcTerminal/interfaces/IArcTermVariables.md).[`get`](../../../../interfaces/IArcTerminal/interfaces/IArcTermVariables.md#get)

***

### getAll()

> **getAll**(): [`StaticVariableStore`](../../../../types/terminal/type-aliases/StaticVariableStore.md)

Defined in: [src/ts/terminal/var.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/var.ts#L17)

#### Returns

[`StaticVariableStore`](../../../../types/terminal/type-aliases/StaticVariableStore.md)

#### Implementation of

[`IArcTermVariables`](../../../../interfaces/IArcTerminal/interfaces/IArcTermVariables.md).[`getAll`](../../../../interfaces/IArcTerminal/interfaces/IArcTermVariables.md#getall)

***

### replace()

> **replace**(`str`): `string`

Defined in: [src/ts/terminal/var.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/var.ts#L71)

#### Parameters

##### str

`string`

#### Returns

`string`

#### Implementation of

[`IArcTermVariables`](../../../../interfaces/IArcTerminal/interfaces/IArcTermVariables.md).[`replace`](../../../../interfaces/IArcTerminal/interfaces/IArcTermVariables.md#replace)

***

### set()

> **set**(`key`, `value`): `Promise`\<`boolean`\>

Defined in: [src/ts/terminal/var.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/var.ts#L37)

#### Parameters

##### key

`string`

##### value

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IArcTermVariables`](../../../../interfaces/IArcTerminal/interfaces/IArcTermVariables.md).[`set`](../../../../interfaces/IArcTerminal/interfaces/IArcTermVariables.md#set)
