[**"ArcOS**](../../../../../../README.md)

***

["ArcOS](../../../../../../modules.md) / [ts/basic/config/functions/terminal](../README.md) / BasicTerminalFunctions

# Function: BasicTerminalFunctions()

> **BasicTerminalFunctions**(`term`): `object`

Defined in: [src/ts/basic/config/functions/terminal.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/config/functions/terminal.ts#L10)

## Parameters

### term

[`IArcTerminal`](../../../../../../interfaces/IArcTerminal/interfaces/IArcTerminal.md)

## Returns

`object`

### env

> **env**: (`val`) => `any`

#### Parameters

##### val

`string`

#### Returns

`any`

### fsread

> **fsread**: (`val`, `interpreter`) => `Promise`\<`string`\>

#### Parameters

##### val

`string`

##### interpreter

[`ArcBasicEngine`](../../../../engine/classes/ArcBasicEngine.md)

#### Returns

`Promise`\<`string`\>

### input

> **input**: (`val`, `interpreter`) => `Promise`\<`string`\>

#### Parameters

##### val

`string`

##### interpreter

[`ArcBasicEngine`](../../../../engine/classes/ArcBasicEngine.md)

#### Returns

`Promise`\<`string`\>

### math

> **math**: (`val`, `interpreter`) => `Promise`\<`string`\>

#### Parameters

##### val

`string`

##### interpreter

[`ArcBasicEngine`](../../../../engine/classes/ArcBasicEngine.md)

#### Returns

`Promise`\<`string`\>

### pref

> **pref**: () => [`UserPreferences`](../../../../../../types/user/interfaces/UserPreferences.md)

#### Returns

[`UserPreferences`](../../../../../../types/user/interfaces/UserPreferences.md)

### typeof

> **typeof**: (`val`) => `"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"`

#### Parameters

##### val

`string`

#### Returns

`"string"` \| `"number"` \| `"bigint"` \| `"boolean"` \| `"symbol"` \| `"undefined"` \| `"object"` \| `"function"`

### uuid

> **uuid**: () => `string`

#### Returns

`string`
