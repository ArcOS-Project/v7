[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [types/app](../README.md) / App

# Interface: App

Defined in: [src/types/app.ts:10](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L10)

## Extended by

- [`InstalledApp`](InstalledApp.md)

## Properties

### acceleratorDescriptions?

> `optional` **acceleratorDescriptions**: `Record`\<`string`, `string`\>

Defined in: [src/types/app.ts:34](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L34)

***

### assets

> **assets**: [`AppAssets`](AppAssets.md)

Defined in: [src/types/app.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L18)

***

### autoRun?

> `optional` **autoRun**: `boolean`

Defined in: [src/types/app.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L19)

***

### controls

> **controls**: [`WindowControls`](WindowControls.md)

Defined in: [src/types/app.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L17)

***

### core?

> `optional` **core**: `boolean`

Defined in: [src/types/app.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L20)

***

### elevated?

> `optional` **elevated**: `boolean`

Defined in: [src/types/app.ts:33](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L33)

***

### entrypoint?

> `optional` **entrypoint**: `string`

Defined in: [src/types/app.ts:27](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L27)

***

### fileSignatures?

> `optional` **fileSignatures**: `Record`\<`string`, `string`\>

Defined in: [src/types/app.ts:35](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L35)

***

### glass?

> `optional` **glass**: `boolean`

Defined in: [src/types/app.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L23)

***

### hidden?

> `optional` **hidden**: `boolean`

Defined in: [src/types/app.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L21)

***

### id

> **id**: `string`

Defined in: [src/types/app.ts:25](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L25)

***

### maxSize

> **maxSize**: [`Size`](../type-aliases/Size.md)

Defined in: [src/types/app.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L14)

***

### metadata

> **metadata**: [`AppMetadata`](AppMetadata.md)

Defined in: [src/types/app.ts:11](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L11)

***

### minSize

> **minSize**: [`Size`](../type-aliases/Size.md)

Defined in: [src/types/app.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L13)

***

### noSafeMode?

> `optional` **noSafeMode**: `boolean`

Defined in: [src/types/app.ts:38](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L38)

***

### opens?

> `optional` **opens**: `object`

Defined in: [src/types/app.ts:29](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L29)

#### extensions?

> `optional` **extensions**: `string`[]

#### mimeTypes?

> `optional` **mimeTypes**: `string`[]

***

### originId?

> `optional` **originId**: `string`

Defined in: [src/types/app.ts:26](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L26)

***

### overlay?

> `optional` **overlay**: `boolean`

Defined in: [src/types/app.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L22)

***

### position

> **position**: [`MaybeCenteredPosition`](../type-aliases/MaybeCenteredPosition.md)

Defined in: [src/types/app.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L15)

***

### process?

> `optional` **process**: [`ThirdPartyAppProcess`](../../../ts/apps/thirdparty/classes/ThirdPartyAppProcess.md)

Defined in: [src/types/app.ts:36](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L36)

***

### size

> **size**: [`Size`](../type-aliases/Size.md)

Defined in: [src/types/app.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L12)

***

### state

> **state**: [`AppState`](AppState.md)

Defined in: [src/types/app.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L16)

***

### thirdParty?

> `optional` **thirdParty**: `false`

Defined in: [src/types/app.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L24)

***

### tpaRevision?

> `optional` **tpaRevision**: `number`

Defined in: [src/types/app.ts:37](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L37)

***

### workingDirectory?

> `optional` **workingDirectory**: `string`

Defined in: [src/types/app.ts:28](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L28)
