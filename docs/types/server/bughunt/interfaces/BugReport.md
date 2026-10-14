[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/server/bughunt](../README.md) / BugReport

# Interface: BugReport

Defined in: [src/types/server/bughunt.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L5)

## Properties

### \_id?

> `optional` **\_id?**: `string`

Defined in: [src/types/server/bughunt.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L19)

***

### api?

> `optional` **api?**: `string`

Defined in: [src/types/server/bughunt.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L15)

***

### authorId?

> `optional` **authorId?**: `string`

Defined in: [src/types/server/bughunt.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L6)

***

### body

> **body**: `string`

Defined in: [src/types/server/bughunt.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L8)

***

### build

> **build**: `string`

Defined in: [src/types/server/bughunt.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L22)

***

### closed

> **closed**: `boolean`

Defined in: [src/types/server/bughunt.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L10)

***

### createdAt

> **createdAt**: `string`

Defined in: [src/types/server/bughunt.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L20)

***

### env

> **env**: `Record`\<`string`, `string`\>

Defined in: [src/types/server/bughunt.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L18)

***

### frontend

> **frontend**: `string`

Defined in: [src/types/server/bughunt.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L16)

***

### isAppReport?

> `optional` **isAppReport?**: `boolean`

Defined in: [src/types/server/bughunt.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L24)

***

### location

> **location**: [`Location`](Location.md)

Defined in: [src/types/server/bughunt.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L12)

***

### logs

> **logs**: [`LogItem`](../../../shared/logging/interfaces/LogItem.md)[]

Defined in: [src/types/server/bughunt.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L9)

***

### meta

> **meta**: [`MetaEnvironment`](MetaEnvironment.md)

Defined in: [src/types/server/bughunt.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L17)

***

### mode

> **mode**: `string`

Defined in: [src/types/server/bughunt.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L21)

***

### public

> **public**: `boolean`

Defined in: [src/types/server/bughunt.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L23)

***

### reportAppId?

> `optional` **reportAppId?**: `string`

Defined in: [src/types/server/bughunt.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L25)

***

### reportAppPkgId?

> `optional` **reportAppPkgId?**: `string`

Defined in: [src/types/server/bughunt.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L26)

***

### title

> **title**: `string`

Defined in: [src/types/server/bughunt.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L7)

***

### userAgent?

> `optional` **userAgent?**: `string`

Defined in: [src/types/server/bughunt.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L14)

***

### userData?

> `optional` **userData?**: `Record`\<`string`, `any`\>

Defined in: [src/types/server/bughunt.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L13)

***

### version

> **version**: `` `${number}.${number}.${number}` ``

Defined in: [src/types/server/bughunt.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/bughunt.ts#L11)
