[**ArcOS v7**](../../../../../README.md)

***

[ArcOS v7](../../../../../modules.md) / [ts/terminal/readline/highlight](../README.md) / IdentityHighlighter

# Class: IdentityHighlighter

Defined in: [src/ts/terminal/readline/highlight.ts:30](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/highlight.ts#L30)

strtok/xterm-readline 1.1.2

a library for building command-line interfaces with XtermJS

Ported to ArcOS by Izaak Kuipers on March 23rd 2025.

ORIGINAL REPOSITORY: https://github.com/strtok/xterm-readline
COMMIT: cdb0940c98a4bad9388f9a44f8917fb00df2423c

All rights belong to their respective authors.

© IzKuipers 2025

## Implements

- [`Highlighter`](../interfaces/Highlighter.md)

## Constructors

### Constructor

> **new IdentityHighlighter**(): `IdentityHighlighter`

#### Returns

`IdentityHighlighter`

## Methods

### highlight()

> **highlight**(`line`, `pos`): `string`

Defined in: [src/ts/terminal/readline/highlight.ts:31](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/highlight.ts#L31)

#### Parameters

##### line

`string`

##### pos

`number`

#### Returns

`string`

#### Implementation of

[`Highlighter`](../interfaces/Highlighter.md).[`highlight`](../interfaces/Highlighter.md#highlight)

***

### highlightChar()

> **highlightChar**(`line`, `pos`): `boolean`

Defined in: [src/ts/terminal/readline/highlight.ts:37](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/highlight.ts#L37)

#### Parameters

##### line

`string`

##### pos

`number`

#### Returns

`boolean`

#### Implementation of

[`Highlighter`](../interfaces/Highlighter.md).[`highlightChar`](../interfaces/Highlighter.md#highlightchar)

***

### highlightPrompt()

> **highlightPrompt**(`prompt`): `string`

Defined in: [src/ts/terminal/readline/highlight.ts:34](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/readline/highlight.ts#L34)

#### Parameters

##### prompt

`string`

#### Returns

`string`

#### Implementation of

[`Highlighter`](../interfaces/Highlighter.md).[`highlightPrompt`](../interfaces/Highlighter.md#highlightprompt)
