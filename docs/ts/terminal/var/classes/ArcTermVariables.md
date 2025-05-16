[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/terminal/var](../README.md) / ArcTermVariables

# Class: ArcTermVariables

Defined in: [src/ts/terminal/var.ts:5](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/var.ts#L5)

## Constructors

### Constructor

> **new ArcTermVariables**(`t`): `ArcTermVariables`

Defined in: [src/ts/terminal/var.ts:10](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/var.ts#L10)

#### Parameters

##### t

[`ArcTerminal`](../../classes/ArcTerminal.md)

#### Returns

`ArcTermVariables`

## Properties

### term

> **term**: [`ArcTerminal`](../../classes/ArcTerminal.md)

Defined in: [src/ts/terminal/var.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/var.ts#L6)

## Methods

### delete()

> **delete**(`key`): `Promise`\<`boolean`\>

Defined in: [src/ts/terminal/var.ts:61](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/var.ts#L61)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`boolean`\>

***

### get()

> **get**(`key`): `undefined` \| `string`

Defined in: [src/ts/terminal/var.ts:29](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/var.ts#L29)

#### Parameters

##### key

`string`

#### Returns

`undefined` \| `string`

***

### getAll()

> **getAll**(): [`StaticVariableStore`](../../../../types/terminal/type-aliases/StaticVariableStore.md)

Defined in: [src/ts/terminal/var.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/var.ts#L15)

#### Returns

[`StaticVariableStore`](../../../../types/terminal/type-aliases/StaticVariableStore.md)

***

### replace()

> **replace**(`str`): `string`

Defined in: [src/ts/terminal/var.ts:69](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/var.ts#L69)

#### Parameters

##### str

`string`

#### Returns

`string`

***

### set()

> **set**(`key`, `value`): `Promise`\<`boolean`\>

Defined in: [src/ts/terminal/var.ts:35](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/var.ts#L35)

#### Parameters

##### key

`string`

##### value

`string`

#### Returns

`Promise`\<`boolean`\>
