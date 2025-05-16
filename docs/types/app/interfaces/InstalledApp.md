[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [types/app](../README.md) / InstalledApp

# Interface: InstalledApp

Defined in: [src/types/app.ts:49](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L49)

## Extends

- [`App`](App.md)

## Properties

### acceleratorDescriptions?

> `optional` **acceleratorDescriptions**: `Record`\<`string`, `string`\>

Defined in: [src/types/app.ts:34](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L34)

#### Inherited from

[`App`](App.md).[`acceleratorDescriptions`](App.md#acceleratordescriptions)

***

### assets

> **assets**: [`AppAssets`](AppAssets.md)

Defined in: [src/types/app.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L18)

#### Inherited from

[`App`](App.md).[`assets`](App.md#assets)

***

### autoRun?

> `optional` **autoRun**: `boolean`

Defined in: [src/types/app.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L19)

#### Inherited from

[`App`](App.md).[`autoRun`](App.md#autorun)

***

### controls

> **controls**: [`WindowControls`](WindowControls.md)

Defined in: [src/types/app.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L17)

#### Inherited from

[`App`](App.md).[`controls`](App.md#controls)

***

### core?

> `optional` **core**: `boolean`

Defined in: [src/types/app.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L20)

#### Inherited from

[`App`](App.md).[`core`](App.md#core)

***

### elevated?

> `optional` **elevated**: `boolean`

Defined in: [src/types/app.ts:33](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L33)

#### Inherited from

[`App`](App.md).[`elevated`](App.md#elevated)

***

### entrypoint?

> `optional` **entrypoint**: `string`

Defined in: [src/types/app.ts:27](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L27)

#### Inherited from

[`App`](App.md).[`entrypoint`](App.md#entrypoint)

***

### fileSignatures?

> `optional` **fileSignatures**: `Record`\<`string`, `string`\>

Defined in: [src/types/app.ts:35](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L35)

#### Inherited from

[`App`](App.md).[`fileSignatures`](App.md#filesignatures)

***

### glass?

> `optional` **glass**: `boolean`

Defined in: [src/types/app.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L23)

#### Inherited from

[`App`](App.md).[`glass`](App.md#glass)

***

### hidden?

> `optional` **hidden**: `boolean`

Defined in: [src/types/app.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L21)

#### Inherited from

[`App`](App.md).[`hidden`](App.md#hidden)

***

### id

> **id**: `string`

Defined in: [src/types/app.ts:25](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L25)

#### Inherited from

[`App`](App.md).[`id`](App.md#id)

***

### maxSize

> **maxSize**: [`Size`](../type-aliases/Size.md)

Defined in: [src/types/app.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L14)

#### Inherited from

[`App`](App.md).[`maxSize`](App.md#maxsize)

***

### metadata

> **metadata**: [`AppMetadata`](AppMetadata.md)

Defined in: [src/types/app.ts:50](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L50)

#### Overrides

[`App`](App.md).[`metadata`](App.md#metadata)

***

### minSize

> **minSize**: [`Size`](../type-aliases/Size.md)

Defined in: [src/types/app.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L13)

#### Inherited from

[`App`](App.md).[`minSize`](App.md#minsize)

***

### noSafeMode?

> `optional` **noSafeMode**: `boolean`

Defined in: [src/types/app.ts:38](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L38)

#### Inherited from

[`App`](App.md).[`noSafeMode`](App.md#nosafemode)

***

### opens?

> `optional` **opens**: `object`

Defined in: [src/types/app.ts:29](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L29)

#### extensions?

> `optional` **extensions**: `string`[]

#### mimeTypes?

> `optional` **mimeTypes**: `string`[]

#### Inherited from

[`App`](App.md).[`opens`](App.md#opens)

***

### originId?

> `optional` **originId**: `string`

Defined in: [src/types/app.ts:26](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L26)

#### Inherited from

[`App`](App.md).[`originId`](App.md#originid)

***

### overlay?

> `optional` **overlay**: `boolean`

Defined in: [src/types/app.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L22)

#### Inherited from

[`App`](App.md).[`overlay`](App.md#overlay)

***

### position

> **position**: [`MaybeCenteredPosition`](../type-aliases/MaybeCenteredPosition.md)

Defined in: [src/types/app.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L15)

#### Inherited from

[`App`](App.md).[`position`](App.md#position)

***

### process?

> `optional` **process**: [`ThirdPartyAppProcess`](../../../ts/apps/thirdparty/classes/ThirdPartyAppProcess.md)

Defined in: [src/types/app.ts:36](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L36)

#### Inherited from

[`App`](App.md).[`process`](App.md#process)

***

### size

> **size**: [`Size`](../type-aliases/Size.md)

Defined in: [src/types/app.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L12)

#### Inherited from

[`App`](App.md).[`size`](App.md#size)

***

### state

> **state**: [`AppState`](AppState.md)

Defined in: [src/types/app.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L16)

#### Inherited from

[`App`](App.md).[`state`](App.md#state)

***

### thirdParty?

> `optional` **thirdParty**: `false`

Defined in: [src/types/app.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L24)

#### Inherited from

[`App`](App.md).[`thirdParty`](App.md#thirdparty)

***

### tpaPath

> **tpaPath**: `string`

Defined in: [src/types/app.ts:51](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L51)

***

### tpaRevision?

> `optional` **tpaRevision**: `number`

Defined in: [src/types/app.ts:37](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L37)

#### Inherited from

[`App`](App.md).[`tpaRevision`](App.md#tparevision)

***

### workingDirectory?

> `optional` **workingDirectory**: `string`

Defined in: [src/types/app.ts:28](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/app.ts#L28)

#### Inherited from

[`App`](App.md).[`workingDirectory`](App.md#workingdirectory)
