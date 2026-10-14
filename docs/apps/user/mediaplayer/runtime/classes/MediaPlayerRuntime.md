[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/user/mediaplayer/runtime](../README.md) / MediaPlayerRuntime

# Class: MediaPlayerRuntime

Defined in: [src/apps/user/mediaplayer/runtime.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L26)

## Extends

- [`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md)

## Implements

- [`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md)

## Constructors

### Constructor

> **new MediaPlayerRuntime**(`pid`, `parentPid`, `app`, `file?`): `MediaPlayerRuntime`

Defined in: [src/apps/user/mediaplayer/runtime.ts:73](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L73)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

##### file?

`string`

#### Returns

`MediaPlayerRuntime`

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`constructor`](../../../../../ts/apps/process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`_criticalProcess`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#_criticalprocess)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_criticalProcess`](../../../../../ts/apps/process/classes/AppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L46)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`acceleratorStore`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#acceleratorstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`acceleratorStore`](../../../../../ts/apps/process/classes/AppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`altMenu`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#altmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`altMenu`](../../../../../ts/apps/process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`app`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#app)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`app`](../../../../../ts/apps/process/classes/AppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`blinking`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#blinking)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blinking`](../../../../../ts/apps/process/classes/AppProcess.md#blinking)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`componentMount`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#componentmount)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`componentMount`](../../../../../ts/apps/process/classes/AppProcess.md#componentmount)

***

### Configuration

> **Configuration**: [`IConfigurator`](../../../../../interfaces/IConfigurator/interfaces/IConfigurator.md)\<`object`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L45)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`Configuration`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#configuration)

***

### contextMenu

> **contextMenu**: [`AppContextMenu`](../../../../../types/apps/app/type-aliases/AppContextMenu.md)

Defined in: [src/apps/user/mediaplayer/runtime.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L52)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`contextMenu`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#contextmenu)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`contextMenu`](../../../../../ts/apps/process/classes/AppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`crashReason`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#crashreason)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`crashReason`](../../../../../ts/apps/process/classes/AppProcess.md#crashreason)

***

### CurrentCoverUrl

> **CurrentCoverUrl**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string` \| `undefined`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L42)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`CurrentCoverUrl`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#currentcoverurl)

***

### CurrentMediaMetadata

> **CurrentMediaMetadata**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`AudioFileMetadata`](../../types/interfaces/AudioFileMetadata.md) \| `undefined`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L41)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`CurrentMediaMetadata`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#currentmediametadata)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`dispatch`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#dispatch)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`dispatch`](../../../../../ts/apps/process/classes/AppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`draggable`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#draggable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`draggable`](../../../../../ts/apps/process/classes/AppProcess.md#draggable)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../../types/system/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L44)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevations`](../../../../../ts/apps/process/classes/AppProcess.md#elevations)

***

### isVideo

> **isVideo**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L36)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`isVideo`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#isvideo)

***

### Loaded

> **Loaded**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L37)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`Loaded`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#loaded)

***

### LoadingMetadata

> **LoadingMetadata**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L43)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`LoadingMetadata`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#loadingmetadata)

***

### loopMode

> **loopMode**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`LoopMode`](../../types/enumerations/LoopMode.md)\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L34)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`loopMode`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#loopmode)

***

### mediaSpecificAccentColor

> **mediaSpecificAccentColor**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L44)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`mediaSpecificAccentColor`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#mediaspecificaccentcolor)

***

### MetadataConfiguration

> **MetadataConfiguration**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`MetadataConfiguration`](../../types/type-aliases/MetadataConfiguration.md)\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L40)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`MetadataConfiguration`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#metadataconfiguration)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`name`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#name)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`name`](../../../../../ts/apps/process/classes/AppProcess.md#name)

***

### overlayStore

> `protected` **overlayStore**: `Record`\<`string`, [`App`](../../../../../types/apps/app/interfaces/App.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L43)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overlayStore`](../../../../../ts/apps/process/classes/AppProcess.md#overlaystore)

***

### overridePopulatable

> **overridePopulatable**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L39)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`overridePopulatable`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#overridepopulatable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overridePopulatable`](../../../../../ts/apps/process/classes/AppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`parentPid`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#parentpid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`parentPid`](../../../../../ts/apps/process/classes/AppProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`pid`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#pid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`pid`](../../../../../ts/apps/process/classes/AppProcess.md#pid)

***

### pinControls

> **pinControls**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L39)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`pinControls`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#pincontrols)

***

### player

> **player**: `HTMLVideoElement` \| `undefined`

Defined in: [src/apps/user/mediaplayer/runtime.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L32)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`player`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#player)

***

### playlistPath

> **playlistPath**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L38)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`playlistPath`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#playlistpath)

***

### queue

> **queue**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`[]\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L29)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`queue`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#queue)

***

### queueIndex

> **queueIndex**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`number`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L30)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`queueIndex`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#queueindex)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`renderArgs`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#renderargs)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`renderArgs`](../../../../../ts/apps/process/classes/AppProcess.md#renderargs)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L42)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`safeMode`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#safemode)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`safeMode`](../../../../../ts/apps/process/classes/AppProcess.md#safemode)

***

### seeking

> **seeking**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L33)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`seeking`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#seeking)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`sourceUrl`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#sourceurl)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`sourceUrl`](../../../../../ts/apps/process/classes/AppProcess.md#sourceurl)

***

### State

> **State**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`PlayerState`](../../types/interfaces/PlayerState.md)\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L35)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`State`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#state)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`toastMessage`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#toastmessage)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`toastMessage`](../../../../../ts/apps/process/classes/AppProcess.md#toastmessage)

***

### url

> **url**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L31)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`url`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#url)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`username`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#username)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`username`](../../../../../ts/apps/process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`userPreferences`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#userpreferences)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`userPreferences`](../../../../../ts/apps/process/classes/AppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`windowFullscreen`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#windowfullscreen)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowFullscreen`](../../../../../ts/apps/process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`windowIcon`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#windowicon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowIcon`](../../../../../ts/apps/process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`windowTitle`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#windowtitle)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowTitle`](../../../../../ts/apps/process/classes/AppProcess.md#windowtitle)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`_disposed`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#_disposed)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_disposed`](../../../../../ts/apps/process/classes/AppProcess.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`MEMORY`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#memory)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`MEMORY`](../../../../../ts/apps/process/classes/AppProcess.md#memory)

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/apps/process.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L52)

##### Returns

[`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`shell`](../../../../../ts/apps/process/classes/AppProcess.md#shell)

***

### STATE

#### Get Signature

> **get** **STATE**(): [`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L17)

##### Returns

[`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

#### Set Signature

> **set** **STATE**(`value`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L21)

##### Parameters

###### value

[`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

##### Returns

`void`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`STATE`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#state-1)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`STATE`](../../../../../ts/apps/process/classes/AppProcess.md#state)

## Methods

### \_\_render\_\_()

> **\_\_render\_\_**(`body`): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:167](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L167)

#### Parameters

##### body

`HTMLDivElement`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`__render__`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#__render__)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__render__`](../../../../../ts/apps/process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`__start`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#__start)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__start`](../../../../../ts/apps/process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`__stop`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#__stop)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__stop`](../../../../../ts/apps/process/classes/AppProcess.md#__stop)

***

### addToQueue()

> **addToQueue**(): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:447](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L447)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`addToQueue`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#addtoqueue)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`appStore`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#appstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`appStore`](../../../../../ts/apps/process/classes/AppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`blink`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#blink)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blink`](../../../../../ts/apps/process/classes/AppProcess.md#blink)

***

### clearQueue()

> **clearQueue**(): `void`

Defined in: [src/apps/user/mediaplayer/runtime.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L391)

#### Returns

`void`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`clearQueue`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#clearqueue)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`MediaPlayerRuntime` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`MediaPlayerRuntime` \| `undefined`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`closeIfSecondInstance`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#closeifsecondinstance)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeIfSecondInstance`](../../../../../ts/apps/process/classes/AppProcess.md#closeifsecondinstance)

***

### closeWindow()

> **closeWindow**(`kill?`): `Promise`\<`boolean` \| `void`\>

Defined in: [src/ts/apps/process.ts:122](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L122)

#### Parameters

##### kill?

`boolean` = `true`

#### Returns

`Promise`\<`boolean` \| `void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`closeWindow`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#closewindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeWindow`](../../../../../ts/apps/process/classes/AppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`CrashDetection`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#crashdetection)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`CrashDetection`](../../../../../ts/apps/process/classes/AppProcess.md#crashdetection)

***

### createPlaylistShortcut()

> **createPlaylistShortcut**(): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:541](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L541)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`createPlaylistShortcut`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#createplaylistshortcut)

***

### elevate()

> **elevate**(`id`): `Promise`\<`unknown`\>

Defined in: [src/ts/apps/process.ts:370](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L370)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`unknown`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`elevate`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#elevate)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevate`](../../../../../ts/apps/process/classes/AppProcess.md#elevate)

***

### failedToPlay()

> **failedToPlay**(`e?`): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:599](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L599)

#### Parameters

##### e?

`any`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`failedToPlay`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#failedtoplay)

***

### folderAsPlaylist()

> **folderAsPlaylist**(): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:567](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L567)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`folderAsPlaylist`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#folderasplaylist)

***

### formatTime()

> **formatTime**(`seconds`): `string`

Defined in: [src/apps/user/mediaplayer/runtime.ts:740](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L740)

#### Parameters

##### seconds

`number`

#### Returns

`string`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`formatTime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#formattime)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`getBody`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#getbody)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getBody`](../../../../../ts/apps/process/classes/AppProcess.md#getbody)

***

### getIcon()

> **getIcon**(`id`): `Promise`\<`string`\>

Defined in: [src/ts/apps/process.ts:379](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L379)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`getIcon`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#geticon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIcon`](../../../../../ts/apps/process/classes/AppProcess.md#geticon)

***

### getIconCached()

> **getIconCached**(`id`): `string`

Defined in: [src/ts/apps/process.ts:383](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L383)

#### Parameters

##### id

`string`

#### Returns

`string`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`getIconCached`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#geticoncached)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconCached`](../../../../../ts/apps/process/classes/AppProcess.md#geticoncached)

***

### getIconStore()

> **getIconStore**(`id`): [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:387](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L387)

#### Parameters

##### id

`string`

#### Returns

[`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`getIconStore`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#geticonstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconStore`](../../../../../ts/apps/process/classes/AppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `MediaPlayerRuntime`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`MediaPlayerRuntime`[]

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`getSingleton`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#getsingleton)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getSingleton`](../../../../../ts/apps/process/classes/AppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`getWindow`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#getwindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getWindow`](../../../../../ts/apps/process/classes/AppProcess.md#getwindow)

***

### handleSongChange()

> **handleSongChange**(`v`): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:399](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L399)

#### Parameters

##### v

`number`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`handleSongChange`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#handlesongchange)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`hasOverlays`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#hasoverlays)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`hasOverlays`](../../../../../ts/apps/process/classes/AppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`HideToast`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#hidetoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`HideToast`](../../../../../ts/apps/process/classes/AppProcess.md#hidetoast)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`killSelf`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#killself)

#### Inherited from

`AppProcess.killSelf`

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L85)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`Log`](../../../../../ts/apps/process/classes/AppProcess.md#log)

***

### moveQueueItem()

> **moveQueueItem**(`sourceIndex`, `targetIndex`): `void`

Defined in: [src/apps/user/mediaplayer/runtime.ts:462](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L462)

#### Parameters

##### sourceIndex

`number`

##### targetIndex

`number`

#### Returns

`void`

***

### nextSong()

> **nextSong**(): `void`

Defined in: [src/apps/user/mediaplayer/runtime.ts:339](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L339)

#### Returns

`void`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`nextSong`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#nextsong)

***

### normalizeMetadata()

> **normalizeMetadata**(`meta`): `Promise`\<[`AudioFileMetadata`](../../types/interfaces/AudioFileMetadata.md)\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:621](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L621)

#### Parameters

##### meta

`IAudioMetadata`

#### Returns

`Promise`\<[`AudioFileMetadata`](../../types/interfaces/AudioFileMetadata.md)\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`normalizeMetadata`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#normalizemetadata)

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:84](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L84)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`onClose`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#onclose)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`onClose`](../../../../../ts/apps/process/classes/AppProcess.md#onclose)

***

### openFile()

> **openFile**(): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:304](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L304)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`openFile`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#openfile)

***

### openFileLocation()

> **openFileLocation**(): `void`

Defined in: [src/apps/user/mediaplayer/runtime.ts:747](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L747)

#### Returns

`void`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`openFileLocation`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#openfilelocation)

***

### parseEntireQueue()

> **parseEntireQueue**(): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:718](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L718)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`parseEntireQueue`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#parseentirequeue)

***

### parseMetadata()

> **parseMetadata**(`path`, `apply?`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`AudioFileMetadata`](../../types/interfaces/AudioFileMetadata.md)\>\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:651](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L651)

#### Parameters

##### path

`string`

##### apply?

`boolean` = `true`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`AudioFileMetadata`](../../types/interfaces/AudioFileMetadata.md)\>\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`parseMetadata`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#parsemetadata)

***

### Pause()

> **Pause**(): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:212](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L212)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`Pause`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#pause)

***

### Play()

> **Play**(): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:202](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L202)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`Play`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#play)

***

### previousSong()

> **previousSong**(): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:361](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L361)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`previousSong`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#previoussong)

***

### readFile()

> **readFile**(`paths`, `addToQueue?`): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:321](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L321)

#### Parameters

##### paths

`string`[]

##### addToQueue?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`readFile`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#readfile)

***

### readPlaylist()

> **readPlaylist**(`path`): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:509](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L509)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`readPlaylist`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#readplaylist)

***

### render()

> **render**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:112](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L112)

#### Parameters

##### \_\_namedParameters

[`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`render`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#render)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`render`](../../../../../ts/apps/process/classes/AppProcess.md#render)

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L91)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`requestFileLock`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#requestfilelock)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`requestFileLock`](../../../../../ts/apps/process/classes/AppProcess.md#requestfilelock)

***

### Reset()

> **Reset**(): `void`

Defined in: [src/apps/user/mediaplayer/runtime.ts:193](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L193)

#### Returns

`void`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`Reset`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#reset)

***

### savePlaylist()

> **savePlaylist**(`queue?`): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:482](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L482)

#### Parameters

##### queue?

`string`[] = `...`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`savePlaylist`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#saveplaylist)

***

### Seek()

> **Seek**(`mod`): `void`

Defined in: [src/apps/user/mediaplayer/runtime.ts:222](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L222)

#### Parameters

##### mod

`number`

#### Returns

`void`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`Seek`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#seek)

***

### SeekTo()

> **SeekTo**(`secondTime`): `void`

Defined in: [src/apps/user/mediaplayer/runtime.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L230)

#### Parameters

##### secondTime

`number`

#### Returns

`void`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`SeekTo`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#seekto)

***

### SetLoopAll()

> **SetLoopAll**(): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:260](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L260)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`SetLoopAll`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#setloopall)

***

### SetLoopNone()

> **SetLoopNone**(): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:249](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L249)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`SetLoopNone`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#setloopnone)

***

### SetLoopOne()

> **SetLoopOne**(): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:271](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L271)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`SetLoopOne`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#setloopone)

***

### setMediaSessionMetadata()

> **setMediaSessionMetadata**(`metadata?`): `Promise`\<`void`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:696](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L696)

#### Parameters

##### metadata?

[`AudioFileMetadata`](../../types/interfaces/AudioFileMetadata.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`setMediaSessionMetadata`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#setmediasessionmetadata)

***

### setPlayer()

> **setPlayer**(`player`): `void`

Defined in: [src/apps/user/mediaplayer/runtime.ts:181](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L181)

#### Parameters

##### player

`HTMLVideoElement`

#### Returns

`void`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`setPlayer`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#setplayer)

***

### setSource()

> **setSource**(`source`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:115](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L115)

#### Parameters

##### source

`string`

#### Returns

`void`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`setSource`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#setsource)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`setSource`](../../../../../ts/apps/process/classes/AppProcess.md#setsource)

***

### ShowToast()

> **ShowToast**(`toast`, `durationMs?`): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:107](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L107)

#### Parameters

##### toast

[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md)

##### durationMs?

`number` = `3000`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`ShowToast`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#showtoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`ShowToast`](../../../../../ts/apps/process/classes/AppProcess.md#showtoast)

***

### spawnApp()

> **spawnApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:362](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L362)

#### Type Parameters

##### T

`T` *extends* [`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md) = [`IAppProcess`](../../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`spawnApp`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#spawnapp)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`spawnApp`](../../../../../ts/apps/process/classes/AppProcess.md#spawnapp)

***

### spawnOverlay()

> **spawnOverlay**(`id`, ...`args`): `Promise`\<`boolean`\>

Defined in: [src/ts/apps/process.ts:336](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L336)

#### Parameters

##### id

`string`

##### args

...`any`[]

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`spawnOverlay`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#spawnoverlay)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`spawnOverlay`](../../../../../ts/apps/process/classes/AppProcess.md#spawnoverlay)

***

### spawnOverlayApp()

> **spawnOverlayApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:366](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L366)

#### Type Parameters

##### T

`T` *extends* [`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md) = [`IAppProcess`](../../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`spawnOverlayApp`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#spawnoverlayapp)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`spawnOverlayApp`](../../../../../ts/apps/process/classes/AppProcess.md#spawnoverlayapp)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:90](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L90)

#### Returns

`Promise`\<`any`\>

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`start`](../../../../../ts/apps/process/classes/AppProcess.md#start)

***

### startKeyboardShortcutListener()

> **startKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:270](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L270)

#### Returns

`void`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`startKeyboardShortcutListener`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#startkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`startKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#startkeyboardshortcutlistener)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/apps/user/mediaplayer/runtime.ts:104](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L104)

#### Returns

`Promise`\<`any`\>

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stop`](../../../../../ts/apps/process/classes/AppProcess.md#stop)

***

### Stop()

> **Stop**(): `void`

Defined in: [src/apps/user/mediaplayer/runtime.ts:238](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L238)

#### Returns

`void`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`Stop`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#stop)

***

### stopKeyboardShortcutListener()

> **stopKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:276](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L276)

#### Returns

`void`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`stopKeyboardShortcutListener`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#stopkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stopKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#stopkeyboardshortcutlistener)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`unfocusActiveElement`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#unfocusactiveelement)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unfocusActiveElement`](../../../../../ts/apps/process/classes/AppProcess.md#unfocusactiveelement)

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L103)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`unlockFile`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#unlockfile)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unlockFile`](../../../../../ts/apps/process/classes/AppProcess.md#unlockfile)

***

### updateState()

> **updateState**(): `void` \| \{ `current`: `number`; `duration`: `number`; `paused`: `boolean`; \}

Defined in: [src/apps/user/mediaplayer/runtime.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/mediaplayer/runtime.ts#L282)

#### Returns

`void` \| \{ `current`: `number`; `duration`: `number`; `paused`: `boolean`; \}

#### Implementation of

[`IMediaPlayerRuntime`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md).[`updateState`](../../../../../interfaces/runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md#updatestate)
