[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/apps/app](../README.md) / App

# Interface: App

Defined in: [src/types/apps/app.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L11)

## Extended by

- [`InstalledApp`](InstalledApp.md)

## Properties

### \_internalLoadTime?

> `optional` **\_internalLoadTime?**: `number`

Defined in: [src/types/apps/app.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L45)

***

### \_internalMinVer?

> `optional` **\_internalMinVer?**: `string`

Defined in: [src/types/apps/app.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L43)

***

### \_internalOriginalPath?

> `optional` **\_internalOriginalPath?**: `string`

Defined in: [src/types/apps/app.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L42)

***

### \_internalResolvedPath?

> `optional` **\_internalResolvedPath?**: `string`

Defined in: [src/types/apps/app.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L41)

***

### \_internalSysVer?

> `optional` **\_internalSysVer?**: `string`

Defined in: [src/types/apps/app.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L44)

***

### acceleratorDescriptions?

> `optional` **acceleratorDescriptions?**: `Record`\<`string`, `string`\>

Defined in: [src/types/apps/app.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L35)

***

### assets

> **assets**: [`AppAssets`](AppAssets.md)

Defined in: [src/types/apps/app.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L19)

***

### autoRun?

> `optional` **autoRun?**: `boolean`

Defined in: [src/types/apps/app.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L20)

***

### controls

> **controls**: [`WindowControls`](WindowControls.md)

Defined in: [src/types/apps/app.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L18)

***

### core?

> `optional` **core?**: `boolean`

Defined in: [src/types/apps/app.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L21)

***

### elevated?

> `optional` **elevated?**: `boolean`

Defined in: [src/types/apps/app.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L34)

***

### entrypoint?

> `optional` **entrypoint?**: `string`

Defined in: [src/types/apps/app.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L28)

***

### fileSignatures?

> `optional` **fileSignatures?**: `Record`\<`string`, `string`\>

Defined in: [src/types/apps/app.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L36)

***

### glass?

> `optional` **glass?**: `boolean`

Defined in: [src/types/apps/app.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L24)

***

### hidden?

> `optional` **hidden?**: `boolean`

Defined in: [src/types/apps/app.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L22)

***

### id

> **id**: `string`

Defined in: [src/types/apps/app.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L26)

***

### loadCondition?

> `optional` **loadCondition?**: (`daemon`) => [`MaybePromise`](../../../shared/common/type-aliases/MaybePromise.md)\<`boolean`\>

Defined in: [src/types/apps/app.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L46)

#### Parameters

##### daemon

[`IUserDaemon`](../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

[`MaybePromise`](../../../shared/common/type-aliases/MaybePromise.md)\<`boolean`\>

***

### maxSize

> **maxSize**: [`Size`](../type-aliases/Size.md)

Defined in: [src/types/apps/app.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L15)

***

### metadata

> **metadata**: [`AppMetadata`](AppMetadata.md)

Defined in: [src/types/apps/app.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L12)

***

### minSize

> **minSize**: [`Size`](../type-aliases/Size.md)

Defined in: [src/types/apps/app.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L14)

***

### noSafeMode?

> `optional` **noSafeMode?**: `boolean`

Defined in: [src/types/apps/app.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L39)

***

### opens?

> `optional` **opens?**: `object`

Defined in: [src/types/apps/app.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L30)

#### extensions?

> `optional` **extensions?**: `string`[]

#### mimeTypes?

> `optional` **mimeTypes?**: `string`[]

***

### originId?

> `optional` **originId?**: `string`

Defined in: [src/types/apps/app.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L27)

***

### overlay?

> `optional` **overlay?**: `boolean`

Defined in: [src/types/apps/app.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L23)

***

### position

> **position**: [`MaybeCenteredPosition`](../type-aliases/MaybeCenteredPosition.md)

Defined in: [src/types/apps/app.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L16)

***

### process?

> `optional` **process?**: [`IThirdPartyAppProcess`](../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md)

Defined in: [src/types/apps/app.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L37)

***

### size

> **size**: [`Size`](../type-aliases/Size.md)

Defined in: [src/types/apps/app.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L13)

***

### state

> **state**: [`AppState`](AppState.md)

Defined in: [src/types/apps/app.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L17)

***

### thirdParty?

> `optional` **thirdParty?**: `false`

Defined in: [src/types/apps/app.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L25)

***

### tpaRevision?

> `optional` **tpaRevision?**: `number`

Defined in: [src/types/apps/app.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L38)

***

### vital?

> `optional` **vital?**: `boolean`

Defined in: [src/types/apps/app.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L40)

***

### workingDirectory?

> `optional` **workingDirectory?**: `string`

Defined in: [src/types/apps/app.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/apps/app.ts#L29)
