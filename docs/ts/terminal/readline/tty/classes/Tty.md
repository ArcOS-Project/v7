[**ArcOS v7**](../../../../../README.md)

***

[ArcOS v7](../../../../../modules.md) / [ts/terminal/readline/tty](../README.md) / Tty

# Class: Tty

Defined in: [src/ts/terminal/readline/tty.ts:26](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/tty.ts#L26)

## Constructors

### Constructor

> **new Tty**(`col`, `row`, `tabWidth`, `out`): `Tty`

Defined in: [src/ts/terminal/readline/tty.ts:32](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/tty.ts#L32)

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

Defined in: [src/ts/terminal/readline/tty.ts:28](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/tty.ts#L28)

***

### row

> **row**: `number`

Defined in: [src/ts/terminal/readline/tty.ts:29](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/tty.ts#L29)

***

### tabWidth

> **tabWidth**: `number`

Defined in: [src/ts/terminal/readline/tty.ts:27](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/tty.ts#L27)

## Methods

### calculatePosition()

> **calculatePosition**(`text`, `orig`): [`Position`](../../state/classes/Position.md)

Defined in: [src/ts/terminal/readline/tty.ts:57](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/tty.ts#L57)

#### Parameters

##### text

`string`

##### orig

[`Position`](../../state/classes/Position.md)

#### Returns

[`Position`](../../state/classes/Position.md)

***

### clearOldRows()

> **clearOldRows**(`layout`): `void`

Defined in: [src/ts/terminal/readline/tty.ts:133](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/tty.ts#L133)

#### Parameters

##### layout

[`Layout`](../../state/classes/Layout.md)

#### Returns

`void`

***

### clearScreen()

> **clearScreen**(): `void`

Defined in: [src/ts/terminal/readline/tty.ts:51](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/tty.ts#L51)

#### Returns

`void`

***

### computeLayout()

> **computeLayout**(`promptSize`, `line`): [`Layout`](../../state/classes/Layout.md)

Defined in: [src/ts/terminal/readline/tty.ts:90](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/tty.ts#L90)

#### Parameters

##### promptSize

[`Position`](../../state/classes/Position.md)

##### line

[`LineBuffer`](../../line/classes/LineBuffer.md)

#### Returns

[`Layout`](../../state/classes/Layout.md)

***

### moveCursor()

> **moveCursor**(`oldCursor`, `newCursor`): `void`

Defined in: [src/ts/terminal/readline/tty.ts:146](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/tty.ts#L146)

#### Parameters

##### oldCursor

[`Position`](../../state/classes/Position.md)

##### newCursor

[`Position`](../../state/classes/Position.md)

#### Returns

`void`

***

### print()

> **print**(`text`): `void`

Defined in: [src/ts/terminal/readline/tty.ts:43](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/tty.ts#L43)

#### Parameters

##### text

`string`

#### Returns

`void`

***

### println()

> **println**(`text`): `void`

Defined in: [src/ts/terminal/readline/tty.ts:47](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/tty.ts#L47)

#### Parameters

##### text

`string`

#### Returns

`void`

***

### refreshLine()

> **refreshLine**(`prompt`, `line`, `oldLayout`, `newLayout`, `highlighter`, `conceiled`): `void`

Defined in: [src/ts/terminal/readline/tty.ts:103](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/tty.ts#L103)

#### Parameters

##### prompt

`string`

##### line

[`LineBuffer`](../../line/classes/LineBuffer.md)

##### oldLayout

[`Layout`](../../state/classes/Layout.md)

##### newLayout

[`Layout`](../../state/classes/Layout.md)

##### highlighter

[`Highlighter`](../../highlight/interfaces/Highlighter.md)

##### conceiled

`boolean` = `false`

#### Returns

`void`

***

### write()

> **write**(`text`): `void`

Defined in: [src/ts/terminal/readline/tty.ts:39](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/tty.ts#L39)

#### Parameters

##### text

`string`

#### Returns

`void`
