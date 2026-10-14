[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/IArcTerminal](../README.md) / IArcTermVariables

# Interface: IArcTermVariables

Defined in: [src/interfaces/IArcTerminal.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L76)

## Properties

### term

> **term**: [`IArcTerminal`](IArcTerminal.md)

Defined in: [src/interfaces/IArcTerminal.ts:77](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L77)

## Methods

### delete()

> **delete**(`key`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IArcTerminal.ts:81](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L81)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`boolean`\>

***

### get()

> **get**(`key`): `string` \| `undefined`

Defined in: [src/interfaces/IArcTerminal.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L79)

#### Parameters

##### key

`string`

#### Returns

`string` \| `undefined`

***

### getAll()

> **getAll**(): [`StaticVariableStore`](../../../types/terminal/type-aliases/StaticVariableStore.md)

Defined in: [src/interfaces/IArcTerminal.ts:78](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L78)

#### Returns

[`StaticVariableStore`](../../../types/terminal/type-aliases/StaticVariableStore.md)

***

### replace()

> **replace**(`str`): `string`

Defined in: [src/interfaces/IArcTerminal.ts:82](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L82)

#### Parameters

##### str

`string`

#### Returns

`string`

***

### set()

> **set**(`key`, `value`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IArcTerminal.ts:80](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IArcTerminal.ts#L80)

#### Parameters

##### key

`string`

##### value

`string`

#### Returns

`Promise`\<`boolean`\>
