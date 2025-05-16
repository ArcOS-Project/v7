[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/lang/parser](../README.md) / Parser

# Class: Parser

Defined in: [src/ts/lang/parser.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L7)

## Constructors

### Constructor

> **new Parser**(`lexer`): `Parser`

Defined in: [src/ts/lang/parser.ts:11](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L11)

#### Parameters

##### lexer

[`Lexer`](../../lexer/classes/Lexer.md)

#### Returns

`Parser`

## Properties

### currentToken

> **currentToken**: `undefined` \| [`Token`](../../token/classes/Token.md)

Defined in: [src/ts/lang/parser.ts:9](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L9)

***

### lexer

> **lexer**: [`Lexer`](../../lexer/classes/Lexer.md)

Defined in: [src/ts/lang/parser.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L8)

## Methods

### additive()

> **additive**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:303](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L303)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### arrayLiteral()

> **arrayLiteral**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:492](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L492)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### assignmentStatement()

> **assignmentStatement**(): `undefined` \| [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:181](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L181)

#### Returns

`undefined` \| [`ASTNode`](../../ast/classes/ASTNode.md)

***

### blockStatement()

> **blockStatement**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:167](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L167)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### declaration()

> **declaration**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:38](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L38)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### eat()

> **eat**(`tokenType`): `void`

Defined in: [src/ts/lang/parser.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L16)

#### Parameters

##### tokenType

`string`

#### Returns

`void`

***

### equality()

> **equality**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:258](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L258)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### error()

> **error**(`message`): `void`

Defined in: [src/ts/lang/parser.ts:512](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L512)

#### Parameters

##### message

`string`

#### Returns

`void`

***

### expression()

> **expression**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:226](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L226)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### expressionStatement()

> **expressionStatement**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:218](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L218)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### forStatement()

> **forStatement**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:150](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L150)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### functionDeclaration()

> **functionDeclaration**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:72](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L72)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### ifStatement()

> **ifStatement**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:117](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L117)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### logicalAnd()

> **logicalAnd**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:244](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L244)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### logicalOr()

> **logicalOr**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:230](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L230)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### multiplicative()

> **multiplicative**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:321](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L321)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### objectLiteral()

> **objectLiteral**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:458](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L458)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### parse()

> **parse**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L24)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### primary()

> **primary**(): `any`

Defined in: [src/ts/lang/parser.ts:363](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L363)

#### Returns

`any`

***

### program()

> **program**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:28](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L28)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### relational()

> **relational**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:276](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L276)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### returnStatement()

> **returnStatement**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:107](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L107)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### statement()

> **statement**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:46](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L46)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)

***

### unary()

> **unary**(): `any`

Defined in: [src/ts/lang/parser.ts:345](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L345)

#### Returns

`any`

***

### whileStatement()

> **whileStatement**(): [`ASTNode`](../../ast/classes/ASTNode.md)

Defined in: [src/ts/lang/parser.ts:137](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/lang/parser.ts#L137)

#### Returns

[`ASTNode`](../../ast/classes/ASTNode.md)
