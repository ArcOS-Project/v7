[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/terminal/select](../README.md) / SelectionList

# Class: SelectionList

Defined in: [src/ts/terminal/select.ts:4](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/select.ts#L4)

## Constructors

### Constructor

> **new SelectionList**(`terminal`, `items`, `prompt`): `SelectionList`

Defined in: [src/ts/terminal/select.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/select.ts#L18)

#### Parameters

##### terminal

`Terminal`

##### items

`string`[]

##### prompt

`string` = `"Select an item:"`

#### Returns

`SelectionList`

## Properties

### selectedIndex

> **selectedIndex**: `number`

Defined in: [src/ts/terminal/select.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/select.ts#L7)

## Methods

### show()

> **show**(): `Promise`\<`undefined` \| `string`\>

Defined in: [src/ts/terminal/select.ts:39](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/select.ts#L39)

#### Returns

`Promise`\<`undefined` \| `string`\>
