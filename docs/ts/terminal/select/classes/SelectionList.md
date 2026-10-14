[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/terminal/select](../README.md) / SelectionList

# Class: SelectionList

Defined in: [src/ts/terminal/select.ts:4](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/select.ts#L4)

## Constructors

### Constructor

> **new SelectionList**(`terminal`, `items`, `prompt?`): `SelectionList`

Defined in: [src/ts/terminal/select.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/select.ts#L18)

#### Parameters

##### terminal

`Terminal`

##### items

`string`[]

##### prompt?

`string` = `"Select an item:"`

#### Returns

`SelectionList`

## Properties

### selectedIndex

> **selectedIndex**: `number`

Defined in: [src/ts/terminal/select.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/select.ts#L7)

## Methods

### show()

> **show**(): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/terminal/select.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/select.ts#L39)

#### Returns

`Promise`\<`string` \| `undefined`\>
