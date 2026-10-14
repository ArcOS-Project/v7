[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/components/fsprogress/types](../README.md) / FileProgressMutator

# Interface: FileProgressMutator

Defined in: [src/apps/components/fsprogress/types.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/fsprogress/types.ts#L17)

## Properties

### mutateMax

> **mutateMax**: (`mutator`) => `void`

Defined in: [src/apps/components/fsprogress/types.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/fsprogress/types.ts#L19)

#### Parameters

##### mutator

`number`

#### Returns

`void`

***

### mutDone

> **mutDone**: (`mutator`) => `void`

Defined in: [src/apps/components/fsprogress/types.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/fsprogress/types.ts#L20)

#### Parameters

##### mutator

`number`

#### Returns

`void`

***

### mutErr

> **mutErr**: (`mutator`) => `void`

Defined in: [src/apps/components/fsprogress/types.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/fsprogress/types.ts#L21)

#### Parameters

##### mutator

`string`

#### Returns

`void`

***

### process

> **process**: () => [`IFsProgressRuntime`](../../../../../interfaces/runtimes/IFsProgressRuntime/interfaces/IFsProgressRuntime.md) \| `undefined`

Defined in: [src/apps/components/fsprogress/types.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/fsprogress/types.ts#L31)

#### Returns

[`IFsProgressRuntime`](../../../../../interfaces/runtimes/IFsProgressRuntime/interfaces/IFsProgressRuntime.md) \| `undefined`

***

### progress

> **progress**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`FsProgressOperation`](FsProgressOperation.md)\>

Defined in: [src/apps/components/fsprogress/types.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/fsprogress/types.ts#L18)

***

### setCancel

> **setCancel**: (`cancel`) => `void`

Defined in: [src/apps/components/fsprogress/types.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/fsprogress/types.ts#L25)

#### Parameters

##### cancel

(() => `void`) \| `undefined`

#### Returns

`void`

***

### setDone

> **setDone**: (`value`) => `void`

Defined in: [src/apps/components/fsprogress/types.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/fsprogress/types.ts#L23)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### setErrors

> **setErrors**: (`value`) => `void`

Defined in: [src/apps/components/fsprogress/types.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/fsprogress/types.ts#L24)

#### Parameters

##### value

`string`[]

#### Returns

`void`

***

### setMax

> **setMax**: (`value`) => `void`

Defined in: [src/apps/components/fsprogress/types.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/fsprogress/types.ts#L22)

#### Parameters

##### value

`number`

#### Returns

`void`

***

### setType

> **setType**: (`type`) => `void`

Defined in: [src/apps/components/fsprogress/types.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/fsprogress/types.ts#L30)

#### Parameters

##### type

`"quantity"` \| `"size"` \| `"none"`

#### Returns

`void`

***

### show

> **show**: () => `Promise`\<`any`\>

Defined in: [src/apps/components/fsprogress/types.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/fsprogress/types.ts#L29)

#### Returns

`Promise`\<`any`\>

***

### stop

> **stop**: () => `Promise`\<`any`\>

Defined in: [src/apps/components/fsprogress/types.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/fsprogress/types.ts#L28)

#### Returns

`Promise`\<`any`\>

***

### updateCaption

> **updateCaption**: (`caption`) => `void`

Defined in: [src/apps/components/fsprogress/types.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/fsprogress/types.ts#L26)

#### Parameters

##### caption

`string`

#### Returns

`void`

***

### updSub

> **updSub**: (`subtitle`) => `void`

Defined in: [src/apps/components/fsprogress/types.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/components/fsprogress/types.ts#L27)

#### Parameters

##### subtitle

`string`

#### Returns

`void`
