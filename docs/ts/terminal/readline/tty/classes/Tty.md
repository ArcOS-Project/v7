[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/terminal/readline/tty](../README.md) / Tty

# Class: Tty

Defined in: [src/ts/terminal/readline/tty.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/tty.ts#L26)

## Constructors

### Constructor

> **new Tty**(`col`, `row`, `tabWidth`, `out`): `Tty`

Defined in: [src/ts/terminal/readline/tty.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/tty.ts#L32)

#### Parameters

##### col

`number`

##### row

`number`

##### tabWidth

`number`

##### out

[`Output`](../interfaces/Output.md)

#### Returns

`Tty`

## Properties

### col

> **col**: `number`

Defined in: [src/ts/terminal/readline/tty.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/tty.ts#L28)

***

### row

> **row**: `number`

Defined in: [src/ts/terminal/readline/tty.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/tty.ts#L29)

***

### tabWidth

> **tabWidth**: `number`

Defined in: [src/ts/terminal/readline/tty.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/tty.ts#L27)

## Methods

### calculatePosition()

> **calculatePosition**(`text`, `orig`): [`Position`](../../layout/classes/Position.md)

Defined in: [src/ts/terminal/readline/tty.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/tty.ts#L57)

#### Parameters

##### text

`string`

##### orig

[`Position`](../../layout/classes/Position.md)

#### Returns

[`Position`](../../layout/classes/Position.md)

***

### clearOldRows()

> **clearOldRows**(`layout`): `void`

Defined in: [src/ts/terminal/readline/tty.ts:134](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/tty.ts#L134)

#### Parameters

##### layout

[`Layout`](../../layout/classes/Layout.md)

#### Returns

`void`

***

### clearScreen()

> **clearScreen**(): `void`

Defined in: [src/ts/terminal/readline/tty.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/tty.ts#L51)

#### Returns

`void`

***

### computeLayout()

> **computeLayout**(`promptSize`, `line`): [`Layout`](../../layout/classes/Layout.md)

Defined in: [src/ts/terminal/readline/tty.ts:90](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/tty.ts#L90)

#### Parameters

##### promptSize

[`Position`](../../layout/classes/Position.md)

##### line

[`LineBuffer`](../../line/classes/LineBuffer.md)

#### Returns

[`Layout`](../../layout/classes/Layout.md)

***

### moveCursor()

> **moveCursor**(`oldCursor`, `newCursor`): `void`

Defined in: [src/ts/terminal/readline/tty.ts:147](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/tty.ts#L147)

#### Parameters

##### oldCursor

[`Position`](../../layout/classes/Position.md)

##### newCursor

[`Position`](../../layout/classes/Position.md)

#### Returns

`void`

***

### print()

> **print**(`text`): `void`

Defined in: [src/ts/terminal/readline/tty.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/tty.ts#L43)

#### Parameters

##### text

`string`

#### Returns

`void`

***

### println()

> **println**(`text`): `void`

Defined in: [src/ts/terminal/readline/tty.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/tty.ts#L47)

#### Parameters

##### text

`string`

#### Returns

`void`

***

### refreshLine()

> **refreshLine**(`prompt`, `line`, `oldLayout`, `newLayout`, `highlighter`, `conceiled?`): `void`

Defined in: [src/ts/terminal/readline/tty.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/tty.ts#L103)

#### Parameters

##### prompt

`string`

##### line

[`LineBuffer`](../../line/classes/LineBuffer.md)

##### oldLayout

[`Layout`](../../layout/classes/Layout.md)

##### newLayout

[`Layout`](../../layout/classes/Layout.md)

##### highlighter

[`Highlighter`](../../highlight/interfaces/Highlighter.md)

##### conceiled?

`boolean` = `false`

#### Returns

`void`

***

### write()

> **write**(`text`): `void`

Defined in: [src/ts/terminal/readline/tty.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/terminal/readline/tty.ts#L39)

#### Parameters

##### text

`string`

#### Returns

`void`
