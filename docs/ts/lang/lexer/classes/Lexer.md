[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/lang/lexer](../README.md) / Lexer

# Class: Lexer

Defined in: [src/ts/lang/lexer.ts:5](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/lexer.ts#L5)

## Constructors

### Constructor

> **new Lexer**(`input`): `Lexer`

Defined in: [src/ts/lang/lexer.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/lexer.ts#L12)

#### Parameters

##### input

`string`

#### Returns

`Lexer`

## Properties

### column

> **column**: `number`

Defined in: [src/ts/lang/lexer.ts:9](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/lexer.ts#L9)

***

### currentChar

> **currentChar**: `null` \| `string`

Defined in: [src/ts/lang/lexer.ts:10](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/lexer.ts#L10)

***

### input

> **input**: `string`

Defined in: [src/ts/lang/lexer.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/lexer.ts#L6)

***

### line

> **line**: `number`

Defined in: [src/ts/lang/lexer.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/lexer.ts#L8)

***

### position

> **position**: `number`

Defined in: [src/ts/lang/lexer.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/lexer.ts#L7)

## Methods

### advance()

> **advance**(): `void`

Defined in: [src/ts/lang/lexer.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/lexer.ts#L20)

#### Returns

`void`

***

### error()

> **error**(`message`): `void`

Defined in: [src/ts/lang/lexer.ts:264](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/lexer.ts#L264)

#### Parameters

##### message

`string`

#### Returns

`void`

***

### getIdentifier()

> **getIdentifier**(): `string`

Defined in: [src/ts/lang/lexer.ts:95](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/lexer.ts#L95)

#### Returns

`string`

***

### getNextToken()

> **getNextToken**(): `undefined` \| [`Token`](../../token/classes/Token.md)

Defined in: [src/ts/lang/lexer.ts:106](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/lexer.ts#L106)

#### Returns

`undefined` \| [`Token`](../../token/classes/Token.md)

***

### getNumber()

> **getNumber**(): [`Token`](../../token/classes/Token.md)

Defined in: [src/ts/lang/lexer.ts:53](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/lexer.ts#L53)

#### Returns

[`Token`](../../token/classes/Token.md)

***

### getString()

> **getString**(): `undefined` \| [`Token`](../../token/classes/Token.md)

Defined in: [src/ts/lang/lexer.ts:77](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/lexer.ts#L77)

#### Returns

`undefined` \| [`Token`](../../token/classes/Token.md)

***

### skipComment()

> **skipComment**(): `void`

Defined in: [src/ts/lang/lexer.ts:43](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/lexer.ts#L43)

#### Returns

`void`

***

### skipWhitespace()

> **skipWhitespace**(): `void`

Defined in: [src/ts/lang/lexer.ts:37](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/lexer.ts#L37)

#### Returns

`void`
