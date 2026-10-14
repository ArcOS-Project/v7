[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/runtimes/IMediaPlayerRuntime](../README.md) / IMediaPlayerRuntime

# Interface: IMediaPlayerRuntime

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L9)

## Extends

- [`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean`

Defined in: [src/interfaces/IProcess.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L11)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`_criticalProcess`](../../../IAppProcess/interfaces/IAppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md)

Defined in: [src/interfaces/IAppProcess.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L25)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`acceleratorStore`](../../../IAppProcess/interfaces/IAppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/interfaces/IAppProcess.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L27)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`altMenu`](../../../IAppProcess/interfaces/IAppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/interfaces/IAppProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L17)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`app`](../../../IAppProcess/interfaces/IAppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L30)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`blinking`](../../../IAppProcess/interfaces/IAppProcess.md#blinking)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\>

Defined in: [src/interfaces/IAppProcess.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L18)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`componentMount`](../../../IAppProcess/interfaces/IAppProcess.md#componentmount)

***

### Configuration

> **Configuration**: [`IConfigurator`](../../../IConfigurator/interfaces/IConfigurator.md)

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L26)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../types/apps/app/type-aliases/AppContextMenu.md)

Defined in: [src/interfaces/IAppProcess.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L26)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`contextMenu`](../../../IAppProcess/interfaces/IAppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string`

Defined in: [src/interfaces/IAppProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L14)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`crashReason`](../../../IAppProcess/interfaces/IAppProcess.md#crashreason)

***

### CurrentCoverUrl

> **CurrentCoverUrl**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string` \| `undefined`\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L23)

***

### CurrentMediaMetadata

> **CurrentMediaMetadata**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`AudioFileMetadata`](../../../../apps/user/mediaplayer/types/interfaces/AudioFileMetadata.md) \| `undefined`\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L22)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/interfaces/IProcess.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L6)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`dispatch`](../../../IAppProcess/interfaces/IAppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/interfaces/IAppProcess.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L29)

#### Inherited from

[`IWriterRuntime`](../../IWriterRuntime/interfaces/IWriterRuntime.md).[`draggable`](../../IWriterRuntime/interfaces/IWriterRuntime.md#draggable)

***

### isVideo

> **isVideo**: [`BooleanStore`](../../../../types/shared/writable/type-aliases/BooleanStore.md)

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L17)

***

### Loaded

> **Loaded**: [`BooleanStore`](../../../../types/shared/writable/type-aliases/BooleanStore.md)

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L18)

***

### LoadingMetadata

> **LoadingMetadata**: [`BooleanStore`](../../../../types/shared/writable/type-aliases/BooleanStore.md)

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L24)

***

### loopMode

> **loopMode**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`LoopMode`](../../../../apps/user/mediaplayer/types/enumerations/LoopMode.md)\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L15)

***

### mediaSpecificAccentColor

> **mediaSpecificAccentColor**: [`StringStore`](../../../../types/shared/writable/type-aliases/StringStore.md)

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L25)

***

### MetadataConfiguration

> **MetadataConfiguration**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`MetadataConfiguration`](../../../../apps/user/mediaplayer/types/type-aliases/MetadataConfiguration.md)\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L21)

***

### name

> **name**: `string`

Defined in: [src/interfaces/IProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L9)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`name`](../../../IAppProcess/interfaces/IAppProcess.md#name)

***

### overridePopulatable

> **overridePopulatable**: `boolean`

Defined in: [src/interfaces/IAppProcess.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L21)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`overridePopulatable`](../../../IAppProcess/interfaces/IAppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/interfaces/IProcess.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L8)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`parentPid`](../../../IAppProcess/interfaces/IAppProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/interfaces/IProcess.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L7)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`pid`](../../../IAppProcess/interfaces/IAppProcess.md#pid)

***

### pinControls

> **pinControls**: [`BooleanStore`](../../../../types/shared/writable/type-aliases/BooleanStore.md)

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L20)

***

### player?

> `optional` **player?**: `HTMLVideoElement`

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L13)

***

### playlistPath

> **playlistPath**: [`StringStore`](../../../../types/shared/writable/type-aliases/StringStore.md)

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L19)

***

### queue

> **queue**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`[]\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L10)

***

### queueIndex

> **queueIndex**: [`NumberStore`](../../../../types/shared/writable/type-aliases/NumberStore.md)

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L11)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../types/system/process/type-aliases/RenderArgs.md)

Defined in: [src/interfaces/IAppProcess.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L24)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`renderArgs`](../../../IAppProcess/interfaces/IAppProcess.md#renderargs)

***

### safeMode

> **safeMode**: `boolean`

Defined in: [src/interfaces/IAppProcess.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L23)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`safeMode`](../../../IAppProcess/interfaces/IAppProcess.md#safemode)

***

### seeking

> **seeking**: [`BooleanStore`](../../../../types/shared/writable/type-aliases/BooleanStore.md)

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L14)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [src/interfaces/IProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L12)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`sourceUrl`](../../../IAppProcess/interfaces/IAppProcess.md#sourceurl)

***

### State

> **State**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`PlayerState`](../../../../apps/user/mediaplayer/types/interfaces/PlayerState.md)\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L16)

***

### STATE

> **STATE**: [`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/interfaces/IProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L13)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`STATE`](../../../IAppProcess/interfaces/IAppProcess.md#state)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L22)

#### Inherited from

[`IWriterRuntime`](../../IWriterRuntime/interfaces/IWriterRuntime.md).[`toastMessage`](../../IWriterRuntime/interfaces/IWriterRuntime.md#toastmessage)

***

### url

> **url**: [`StringStore`](../../../../types/shared/writable/type-aliases/StringStore.md)

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L12)

***

### username

> **username**: `string`

Defined in: [src/interfaces/IAppProcess.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L20)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`username`](../../../IAppProcess/interfaces/IAppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/interfaces/IAppProcess.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L19)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`userPreferences`](../../../IAppProcess/interfaces/IAppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L28)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`windowFullscreen`](../../../IAppProcess/interfaces/IAppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L16)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`windowIcon`](../../../IAppProcess/interfaces/IAppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L15)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`windowTitle`](../../../IAppProcess/interfaces/IAppProcess.md#windowtitle)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/interfaces/IProcess.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L10)

##### Returns

`boolean`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`_disposed`](../../../IAppProcess/interfaces/IAppProcess.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/interfaces/IProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L14)

##### Returns

`number`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`MEMORY`](../../../IAppProcess/interfaces/IAppProcess.md#memory)

## Methods

### \_\_render\_\_()

> **\_\_render\_\_**(`body`): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L36)

#### Parameters

##### body

`HTMLDivElement`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`__render__`](../../../IAppProcess/interfaces/IAppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L15)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`__start`](../../../IAppProcess/interfaces/IAppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IAppProcess.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`__stop`](../../../IAppProcess/interfaces/IAppProcess.md#__stop)

***

### addToQueue()

> **addToQueue**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L49)

#### Returns

`Promise`\<`void`\>

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/interfaces/IAppProcess.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L59)

#### Returns

[`IApplicationStorage`](../../../services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`appStore`](../../../IAppProcess/interfaces/IAppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L63)

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`blink`](../../../IAppProcess/interfaces/IAppProcess.md#blink)

***

### clearQueue()

> **clearQueue**(): `void`

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L47)

#### Returns

`void`

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`IMediaPlayerRuntime` \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L39)

#### Returns

`Promise`\<`IMediaPlayerRuntime` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`closeIfSecondInstance`](../../../IAppProcess/interfaces/IAppProcess.md#closeifsecondinstance)

***

### closeWindow()

> **closeWindow**(`kill?`): `Promise`\<`boolean` \| `void`\>

Defined in: [src/interfaces/IAppProcess.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L34)

#### Parameters

##### kill?

`boolean`

#### Returns

`Promise`\<`boolean` \| `void`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`closeWindow`](../../../IAppProcess/interfaces/IAppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`CrashDetection`](../../../IAppProcess/interfaces/IAppProcess.md#crashdetection)

***

### createPlaylistShortcut()

> **createPlaylistShortcut**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L52)

#### Returns

`Promise`\<`void`\>

***

### elevate()

> **elevate**(`id`): `Promise`\<`unknown`\>

Defined in: [src/interfaces/IAppProcess.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L58)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`elevate`](../../../IAppProcess/interfaces/IAppProcess.md#elevate)

***

### failedToPlay()

> **failedToPlay**(`e?`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L54)

#### Parameters

##### e?

`any`

#### Returns

`Promise`\<`void`\>

***

### folderAsPlaylist()

> **folderAsPlaylist**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L53)

#### Returns

`Promise`\<`void`\>

***

### formatTime()

> **formatTime**(`seconds`): `string`

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L59)

#### Parameters

##### seconds

`number`

#### Returns

`string`

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/interfaces/IAppProcess.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L41)

#### Returns

`HTMLDivElement`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`getBody`](../../../IAppProcess/interfaces/IAppProcess.md#getbody)

***

### getIcon()

> **getIcon**(`id`): `Promise`\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L60)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`getIcon`](../../../IAppProcess/interfaces/IAppProcess.md#geticon)

***

### getIconCached()

> **getIconCached**(`id`): `string`

Defined in: [src/interfaces/IAppProcess.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L61)

#### Parameters

##### id

`string`

#### Returns

`string`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`getIconCached`](../../../IAppProcess/interfaces/IAppProcess.md#geticoncached)

***

### getIconStore()

> **getIconStore**(`id`): [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L62)

#### Parameters

##### id

`string`

#### Returns

[`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`getIconStore`](../../../IAppProcess/interfaces/IAppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `IMediaPlayerRuntime`[]

Defined in: [src/interfaces/IAppProcess.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L38)

#### Returns

`IMediaPlayerRuntime`[]

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`getSingleton`](../../../IAppProcess/interfaces/IAppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/interfaces/IAppProcess.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L40)

#### Returns

`HTMLDivElement`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`getWindow`](../../../IAppProcess/interfaces/IAppProcess.md#getwindow)

***

### handleSongChange()

> **handleSongChange**(`v`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L48)

#### Parameters

##### v

`number`

#### Returns

`Promise`\<`void`\>

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/interfaces/IAppProcess.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L42)

#### Returns

`boolean`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`hasOverlays`](../../../IAppProcess/interfaces/IAppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L33)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`HideToast`](../../../IAppProcess/interfaces/IAppProcess.md#hidetoast)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`killSelf`](../../../IAppProcess/interfaces/IAppProcess.md#killself)

***

### nextSong()

> **nextSong**(): `void`

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L45)

#### Returns

`void`

***

### normalizeMetadata()

> **normalizeMetadata**(`meta`): `Promise`\<[`AudioFileMetadata`](../../../../apps/user/mediaplayer/types/interfaces/AudioFileMetadata.md)\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L55)

#### Parameters

##### meta

`IAudioMetadata`

#### Returns

`Promise`\<[`AudioFileMetadata`](../../../../apps/user/mediaplayer/types/interfaces/AudioFileMetadata.md)\>

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L31)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`onClose`](../../../IAppProcess/interfaces/IAppProcess.md#onclose)

***

### openFile()

> **openFile**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L43)

#### Returns

`Promise`\<`void`\>

***

### openFileLocation()

> **openFileLocation**(): `void`

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L60)

#### Returns

`void`

***

### parseEntireQueue()

> **parseEntireQueue**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L58)

#### Returns

`Promise`\<`void`\>

***

### parseMetadata()

> **parseMetadata**(`path`, `apply?`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`AudioFileMetadata`](../../../../apps/user/mediaplayer/types/interfaces/AudioFileMetadata.md)\>\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L56)

#### Parameters

##### path

`string`

##### apply?

`boolean`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`AudioFileMetadata`](../../../../apps/user/mediaplayer/types/interfaces/AudioFileMetadata.md)\>\>

***

### Pause()

> **Pause**(): `void`

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L31)

#### Returns

`void`

***

### Play()

> **Play**(): `void`

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L30)

#### Returns

`void`

***

### previousSong()

> **previousSong**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L46)

#### Returns

`Promise`\<`void`\>

***

### readFile()

> **readFile**(`paths`, `addToQueue?`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L44)

#### Parameters

##### paths

`string`[]

##### addToQueue?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### readPlaylist()

> **readPlaylist**(`path`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L51)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

***

### render()

> **render**(`args`): `any`

Defined in: [src/interfaces/IAppProcess.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L35)

#### Parameters

##### args

[`RenderArgs`](../../../../types/system/process/type-aliases/RenderArgs.md)

#### Returns

`any`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`render`](../../../IAppProcess/interfaces/IAppProcess.md#render)

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/IProcess.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L18)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`requestFileLock`](../../../IAppProcess/interfaces/IAppProcess.md#requestfilelock)

***

### Reset()

> **Reset**(): `void`

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L29)

#### Returns

`void`

***

### savePlaylist()

> **savePlaylist**(`queue?`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L50)

#### Parameters

##### queue?

`string`[]

#### Returns

`Promise`\<`void`\>

***

### Seek()

> **Seek**(`mod`): `void`

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L32)

#### Parameters

##### mod

`number`

#### Returns

`void`

***

### SeekTo()

> **SeekTo**(`secondTime`): `void`

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L33)

#### Parameters

##### secondTime

`number`

#### Returns

`void`

***

### SetLoopAll()

> **SetLoopAll**(): `void`

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L36)

#### Returns

`void`

***

### SetLoopNone()

> **SetLoopNone**(): `void`

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L35)

#### Returns

`void`

***

### SetLoopOne()

> **SetLoopOne**(): `void`

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L37)

#### Returns

`void`

***

### setMediaSessionMetadata()

> **setMediaSessionMetadata**(`metadata?`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L57)

#### Parameters

##### metadata?

[`AudioFileMetadata`](../../../../apps/user/mediaplayer/types/interfaces/AudioFileMetadata.md)

#### Returns

`Promise`\<`void`\>

***

### setPlayer()

> **setPlayer**(`player`): `void`

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L28)

#### Parameters

##### player

`HTMLVideoElement`

#### Returns

`void`

***

### setSource()

> **setSource**(`source`): `void`

Defined in: [src/interfaces/IProcess.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L20)

#### Parameters

##### source

`string`

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`setSource`](../../../IAppProcess/interfaces/IAppProcess.md#setsource)

***

### ShowToast()

> **ShowToast**(`toast`, `durationMs?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L32)

#### Parameters

##### toast

[`ToastMessage`](../../../../types/apps/app/interfaces/ToastMessage.md)

##### durationMs?

`number`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`ShowToast`](../../../IAppProcess/interfaces/IAppProcess.md#showtoast)

***

### spawnApp()

> **spawnApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L48)

#### Type Parameters

##### T

`T` *extends* [`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md) = [`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md)

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`spawnApp`](../../../IAppProcess/interfaces/IAppProcess.md#spawnapp)

***

### spawnOverlay()

> **spawnOverlay**(`id`, ...`args`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L47)

#### Parameters

##### id

`string`

##### args

...`any`[]

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`spawnOverlay`](../../../IAppProcess/interfaces/IAppProcess.md#spawnoverlay)

***

### spawnOverlayApp()

> **spawnOverlayApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L53)

#### Type Parameters

##### T

`T` *extends* [`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md) = [`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md)

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`spawnOverlayApp`](../../../IAppProcess/interfaces/IAppProcess.md#spawnoverlayapp)

***

### startKeyboardShortcutListener()

> **startKeyboardShortcutListener**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L43)

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`startKeyboardShortcutListener`](../../../IAppProcess/interfaces/IAppProcess.md#startkeyboardshortcutlistener)

***

### Stop()

> **Stop**(): `void`

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L34)

#### Returns

`void`

***

### stopKeyboardShortcutListener()

> **stopKeyboardShortcutListener**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L44)

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`stopKeyboardShortcutListener`](../../../IAppProcess/interfaces/IAppProcess.md#stopkeyboardshortcutlistener)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L46)

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`unfocusActiveElement`](../../../IAppProcess/interfaces/IAppProcess.md#unfocusactiveelement)

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/IProcess.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L19)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`unlockFile`](../../../IAppProcess/interfaces/IAppProcess.md#unlockfile)

***

### updateState()

> **updateState**(): `void` \| \{ `current`: `number`; `duration`: `number`; `paused`: `boolean`; \}

Defined in: [src/interfaces/runtimes/IMediaPlayerRuntime.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMediaPlayerRuntime.ts#L38)

#### Returns

`void` \| \{ `current`: `number`; `duration`: `number`; `paused`: `boolean`; \}
