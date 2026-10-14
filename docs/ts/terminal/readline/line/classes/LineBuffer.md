[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/terminal/readline/line](../README.md) / LineBuffer

# Class: LineBuffer

Defined in: [src/ts/terminal/readline/line.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L17)

## Constructors

### Constructor

> **new LineBuffer**(): `LineBuffer`

#### Returns

`LineBuffer`

## Properties

### buf

> **buf**: `string` = `""`

Defined in: [src/ts/terminal/readline/line.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L18)

***

### pos

> **pos**: `number` = `0`

Defined in: [src/ts/terminal/readline/line.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L19)

## Methods

### backspace()

> **backspace**(`n`): `boolean`

Defined in: [src/ts/terminal/readline/line.ts:238](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L238)

#### Parameters

##### n

`number`

#### Returns

`boolean`

***

### buffer()

> **buffer**(): `string`

Defined in: [src/ts/terminal/readline/line.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L21)

#### Returns

`string`

***

### char\_length()

> **char\_length**(): `number`

Defined in: [src/ts/terminal/readline/line.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L35)

#### Returns

`number`

***

### delete()

> **delete**(`n`): `boolean`

Defined in: [src/ts/terminal/readline/line.ts:248](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L248)

#### Parameters

##### n

`number`

#### Returns

`boolean`

***

### deleteEndOfLine()

> **deleteEndOfLine**(): `boolean`

Defined in: [src/ts/terminal/readline/line.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L258)

#### Returns

`boolean`

***

### endOfLine()

> **endOfLine**(): `number`

Defined in: [src/ts/terminal/readline/line.ts:104](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L104)

#### Returns

`number`

***

### insert()

> **insert**(`text`): `boolean`

Defined in: [src/ts/terminal/readline/line.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L45)

#### Parameters

##### text

`string`

#### Returns

`boolean`

***

### length()

> **length**(): `number`

Defined in: [src/ts/terminal/readline/line.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L30)

#### Returns

`number`

***

### moveBack()

> **moveBack**(`n`): `boolean`

Defined in: [src/ts/terminal/readline/line.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L57)

#### Parameters

##### n

`number`

#### Returns

`boolean`

***

### moveEnd()

> **moveEnd**(): `boolean`

Defined in: [src/ts/terminal/readline/line.ts:86](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L86)

#### Returns

`boolean`

***

### moveForward()

> **moveForward**(`n`): `boolean`

Defined in: [src/ts/terminal/readline/line.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L67)

#### Parameters

##### n

`number`

#### Returns

`boolean`

***

### moveHome()

> **moveHome**(): `boolean`

Defined in: [src/ts/terminal/readline/line.ts:77](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L77)

#### Returns

`boolean`

***

### moveLineDown()

> **moveLineDown**(`n`): `boolean`

Defined in: [src/ts/terminal/readline/line.ts:151](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L151)

#### Parameters

##### n

`number`

#### Returns

`boolean`

***

### moveLineUp()

> **moveLineUp**(`n`): `boolean`

Defined in: [src/ts/terminal/readline/line.ts:113](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L113)

#### Parameters

##### n

`number`

#### Returns

`boolean`

***

### nextPos()

> **nextPos**(`n`): `number` \| `undefined`

Defined in: [src/ts/terminal/readline/line.ts:224](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L224)

#### Parameters

##### n

`number`

#### Returns

`number` \| `undefined`

***

### pos\_buffer()

> **pos\_buffer**(): `string`

Defined in: [src/ts/terminal/readline/line.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L25)

#### Returns

`string`

***

### prevPos()

> **prevPos**(`n`): `number` \| `undefined`

Defined in: [src/ts/terminal/readline/line.ts:208](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L208)

#### Parameters

##### n

`number`

#### Returns

`number` \| `undefined`

***

### set\_pos()

> **set\_pos**(`pos`): `void`

Defined in: [src/ts/terminal/readline/line.ts:202](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L202)

#### Parameters

##### pos

`number`

#### Returns

`void`

***

### startOfLine()

> **startOfLine**(): `number`

Defined in: [src/ts/terminal/readline/line.ts:95](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L95)

#### Returns

`number`

***

### update()

> **update**(`text`, `pos`): `void`

Defined in: [src/ts/terminal/readline/line.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/line.ts#L40)

#### Parameters

##### text

`string`

##### pos

`number`

#### Returns

`void`
