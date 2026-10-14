[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/runtimes/IMessagingAppRuntime](../README.md) / IMessagingAppRuntime

# Interface: IMessagingAppRuntime

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L11)

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

### buffer

> **buffer**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ExpandedMessage`](../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L15)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\>

Defined in: [src/interfaces/IAppProcess.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L18)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`componentMount`](../../../IAppProcess/interfaces/IAppProcess.md#componentmount)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../types/apps/app/type-aliases/AppContextMenu.md)

Defined in: [src/interfaces/IAppProcess.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L26)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`contextMenu`](../../../IAppProcess/interfaces/IAppProcess.md#contextmenu)

***

### correlated

> **correlated**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ExpandedMessage`](../../../../types/server/messaging/interfaces/ExpandedMessage.md)[][]\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L16)

***

### crashReason

> **crashReason**: `string`

Defined in: [src/interfaces/IAppProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L14)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`crashReason`](../../../IAppProcess/interfaces/IAppProcess.md#crashreason)

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

### errored

> **errored**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L19)

***

### loading

> **loading**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L17)

***

### message

> **message**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ExpandedMessage`](../../../../types/server/messaging/interfaces/ExpandedMessage.md) \| `undefined`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L21)

***

### messageFromFile

> **messageFromFile**: `boolean`

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L26)

***

### messageNotFound

> **messageNotFound**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L20)

***

### messageWindow

> **messageWindow**: `boolean`

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L25)

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

### page

> **page**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`MessagingPage`](../../../../apps/user/messages/types/interfaces/MessagingPage.md) \| `undefined`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L13)

***

### pageId

> **pageId**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string` \| `undefined`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L14)

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

### refreshing

> **refreshing**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L18)

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

### searchQuery

> **searchQuery**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L23)

***

### searchResults

> **searchResults**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`[]\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L24)

***

### service

> **service**: [`IMessagingInterface`](../../../services/IMessagingInterface/interfaces/IMessagingInterface.md)

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L12)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [src/interfaces/IProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L12)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`sourceUrl`](../../../IAppProcess/interfaces/IAppProcess.md#sourceurl)

***

### STATE

> **STATE**: [`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/interfaces/IProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L13)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`STATE`](../../../IAppProcess/interfaces/IAppProcess.md#state)

***

### THREAD\_DEPTH\_MAX

> `readonly` **THREAD\_DEPTH\_MAX**: `number`

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L27)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L22)

#### Inherited from

[`IWriterRuntime`](../../IWriterRuntime/interfaces/IWriterRuntime.md).[`toastMessage`](../../IWriterRuntime/interfaces/IWriterRuntime.md#toastmessage)

***

### userInfoCache

> **userInfoCache**: `Record`\<`string`, [`PublicUserInfo`](../../../../types/user/interfaces/PublicUserInfo.md)\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L22)

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

### addToArchive()

> **addToArchive**(`id`): `void`

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L43)

#### Parameters

##### id

`string`

#### Returns

`void`

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

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`IMessagingAppRuntime` \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L39)

#### Returns

`Promise`\<`IMessagingAppRuntime` \| `undefined`\>

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

### compose()

> **compose**(): `void`

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L36)

#### Returns

`void`

***

### correlateMessages()

> **correlateMessages**(`messages`): [`ExpandedMessage`](../../../../types/server/messaging/interfaces/ExpandedMessage.md)[][]

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L48)

#### Parameters

##### messages

[`ExpandedMessage`](../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]

#### Returns

[`ExpandedMessage`](../../../../types/server/messaging/interfaces/ExpandedMessage.md)[][]

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`CrashDetection`](../../../IAppProcess/interfaces/IAppProcess.md#crashdetection)

***

### deleteMessage()

> **deleteMessage**(`id`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L35)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### downloadAttachments()

> **downloadAttachments**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L54)

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

### forward()

> **forward**(`message`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L38)

#### Parameters

##### message

[`ExpandedMessage`](../../../../types/server/messaging/interfaces/ExpandedMessage.md)

#### Returns

`Promise`\<`void`\>

***

### getArchived()

> **getArchived**(): `Promise`\<[`ExpandedMessage`](../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L31)

#### Returns

`Promise`\<[`ExpandedMessage`](../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

***

### getArchiveState()

> **getArchiveState**(): `string`[]

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L40)

#### Returns

`string`[]

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

### getInbox()

> **getInbox**(): `Promise`\<[`ExpandedMessage`](../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L29)

#### Returns

`Promise`\<[`ExpandedMessage`](../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

***

### getSent()

> **getSent**(): `Promise`\<[`ExpandedMessage`](../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L30)

#### Returns

`Promise`\<[`ExpandedMessage`](../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

***

### getSingleton()

> **getSingleton**(): `IMessagingAppRuntime`[]

Defined in: [src/interfaces/IAppProcess.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L38)

#### Returns

`IMessagingAppRuntime`[]

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

### isArchived()

> **isArchived**(`id`): `boolean`

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L42)

#### Parameters

##### id

`string`

#### Returns

`boolean`

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`killSelf`](../../../IAppProcess/interfaces/IAppProcess.md#killself)

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L31)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`onClose`](../../../IAppProcess/interfaces/IAppProcess.md#onclose)

***

### openAttachment()

> **openAttachment**(`attachment`, `messageId`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L53)

#### Parameters

##### attachment

[`MessageAttachment`](../../../../types/server/messaging/interfaces/MessageAttachment.md)

##### messageId

`string`

#### Returns

`Promise`\<`void`\>

***

### popoutMessage()

> **popoutMessage**(`messageId`): `void`

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L51)

#### Parameters

##### messageId

`string`

#### Returns

`void`

***

### readAttachment()

> **readAttachment**(`attachment`, `messageId`, `prog`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L52)

#### Parameters

##### attachment

[`MessageAttachment`](../../../../types/server/messaging/interfaces/MessageAttachment.md)

##### messageId

`string`

##### prog

[`FileProgressMutator`](../../../../apps/components/fsprogress/types/interfaces/FileProgressMutator.md)

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

***

### readMessage()

> **readMessage**(`messageId`, `force?`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L32)

#### Parameters

##### messageId

`string`

##### force?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### readMessageFromFile()

> **readMessageFromFile**(`path`): `Promise`\<`boolean` \| `void`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L34)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean` \| `void`\>

***

### refresh()

> **refresh**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L47)

#### Returns

`Promise`\<`void`\>

***

### refreshFailed()

> **refreshFailed**(): `void`

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L49)

#### Returns

`void`

***

### removeFromArchive()

> **removeFromArchive**(`id`): `void`

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L44)

#### Parameters

##### id

`string`

#### Returns

`void`

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

### replyTo()

> **replyTo**(`message`): `void`

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L37)

#### Parameters

##### message

[`ExpandedMessage`](../../../../types/server/messaging/interfaces/ExpandedMessage.md)

#### Returns

`void`

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

### saveMessage()

> **saveMessage**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L39)

#### Returns

`Promise`\<`void`\>

***

### Search()

> **Search**(`query`): `void`

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L50)

#### Parameters

##### query

`string`

#### Returns

`void`

***

### setArchiveState()

> **setArchiveState**(`state`): `void`

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L41)

#### Parameters

##### state

`string`[]

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

### stopKeyboardShortcutListener()

> **stopKeyboardShortcutListener**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L44)

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`stopKeyboardShortcutListener`](../../../IAppProcess/interfaces/IAppProcess.md#stopkeyboardshortcutlistener)

***

### switchPage()

> **switchPage**(`id`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L46)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### toggleArchived()

> **toggleArchived**(`message`): `void`

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L45)

#### Parameters

##### message

[`ExpandedMessage`](../../../../types/server/messaging/interfaces/ExpandedMessage.md)

#### Returns

`void`

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

### userInfo()

> **userInfo**(`userId`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`PublicUserInfo`](../../../../types/user/interfaces/PublicUserInfo.md)\>\>

Defined in: [src/interfaces/runtimes/IMessagingAppRuntime.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/IMessagingAppRuntime.ts#L33)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`PublicUserInfo`](../../../../types/user/interfaces/PublicUserInfo.md)\>\>
