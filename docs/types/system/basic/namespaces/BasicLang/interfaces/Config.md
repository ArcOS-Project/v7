[**"ArcOS**](../../../../../../README.md)

***

["ArcOS](../../../../../../modules.md) / [types/system/basic](../../../README.md) / [BasicLang](../README.md) / Config

# Interface: Config

Defined in: [src/types/system/basic.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/basic.ts#L22)

## Properties

### builtinVariables?

> `optional` **builtinVariables?**: `Record`\<`string`, [`VariableCallback`](../type-aliases/VariableCallback.md)\>

Defined in: [src/types/system/basic.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/basic.ts#L25)

***

### commands?

> `optional` **commands?**: *typeof* [`BasicCommand`](../../../../../../ts/basic/engine/command/classes/BasicCommand.md)[]

Defined in: [src/types/system/basic.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/basic.ts#L26)

***

### debug?

> `optional` **debug?**: `boolean`

Defined in: [src/types/system/basic.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/basic.ts#L32)

***

### functions?

> `optional` **functions?**: `Record`\<`string`, [`Fn`](../type-aliases/Fn.md)\>

Defined in: [src/types/system/basic.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/basic.ts#L24)

***

### readScriptFile?

> `optional` **readScriptFile?**: (`path`) => `Promise`\<`string` \| `undefined`\>

Defined in: [src/types/system/basic.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/basic.ts#L31)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

***

### slowdown?

> `optional` **slowdown?**: `number`

Defined in: [src/types/system/basic.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/basic.ts#L27)

***

### stderr

> **stderr**: [`StdoutCallback`](../type-aliases/StdoutCallback.md)

Defined in: [src/types/system/basic.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/basic.ts#L30)

***

### stdin

> **stdin**: [`StdinCallback`](../type-aliases/StdinCallback.md)

Defined in: [src/types/system/basic.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/basic.ts#L28)

***

### stdout

> **stdout**: [`StdoutCallback`](../type-aliases/StdoutCallback.md)

Defined in: [src/types/system/basic.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/basic.ts#L29)

***

### version

> **version**: `string`

Defined in: [src/types/system/basic.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/system/basic.ts#L23)
