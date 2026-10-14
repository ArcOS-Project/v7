[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/user/messages/runtime](../README.md) / MessagingAppRuntime

# Class: MessagingAppRuntime

Defined in: [src/apps/user/messages/runtime.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L26)

## Extends

- [`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md)

## Implements

- [`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md)

## Constructors

### Constructor

> **new MessagingAppRuntime**(`pid`, `parentPid`, `app`, `pageOrMessagePath?`, `messageId?`): `MessagingAppRuntime`

Defined in: [src/apps/user/messages/runtime.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L48)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

##### pageOrMessagePath?

`string` = `"unread"`

##### messageId?

`string`

#### Returns

`MessagingAppRuntime`

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`constructor`](../../../../../ts/apps/process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`_criticalProcess`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#_criticalprocess)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`_criticalProcess`](../../../../../ts/apps/process/classes/AppProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L46)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`acceleratorStore`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#acceleratorstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`acceleratorStore`](../../../../../ts/apps/process/classes/AppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`altMenu`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#altmenu)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`altMenu`](../../../../../ts/apps/process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`app`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#app)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`app`](../../../../../ts/apps/process/classes/AppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`blinking`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#blinking)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blinking`](../../../../../ts/apps/process/classes/AppProcess.md#blinking)

***

### buffer

> **buffer**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

Defined in: [src/apps/user/messages/runtime.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L30)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`buffer`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#buffer)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`componentMount`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#componentmount)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`componentMount`](../../../../../ts/apps/process/classes/AppProcess.md#componentmount)

***

### contextMenu

> **contextMenu**: [`AppContextMenu`](../../../../../types/apps/app/type-aliases/AppContextMenu.md)

Defined in: [src/apps/user/messages/runtime.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L44)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`contextMenu`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#contextmenu)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`contextMenu`](../../../../../ts/apps/process/classes/AppProcess.md#contextmenu)

***

### correlated

> **correlated**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[][]\>

Defined in: [src/apps/user/messages/runtime.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L31)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`correlated`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#correlated)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`crashReason`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#crashreason)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`crashReason`](../../../../../ts/apps/process/classes/AppProcess.md#crashreason)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`dispatch`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#dispatch)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`dispatch`](../../../../../ts/apps/process/classes/AppProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`draggable`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#draggable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`draggable`](../../../../../ts/apps/process/classes/AppProcess.md#draggable)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../../types/system/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L44)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevations`](../../../../../ts/apps/process/classes/AppProcess.md#elevations)

***

### errored

> **errored**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/messages/runtime.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L34)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`errored`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#errored)

***

### loading

> **loading**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/messages/runtime.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L32)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`loading`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#loading)

***

### message

> **message**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md) \| `undefined`\>

Defined in: [src/apps/user/messages/runtime.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L36)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`message`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#message)

***

### messageFromFile

> **messageFromFile**: `boolean` = `false`

Defined in: [src/apps/user/messages/runtime.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L41)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`messageFromFile`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#messagefromfile)

***

### messageNotFound

> **messageNotFound**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/messages/runtime.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L35)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`messageNotFound`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#messagenotfound)

***

### messageWindow

> **messageWindow**: `boolean` = `false`

Defined in: [src/apps/user/messages/runtime.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L40)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`messageWindow`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#messagewindow)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`name`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#name)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`overridePopulatable`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#overridepopulatable)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`overridePopulatable`](../../../../../ts/apps/process/classes/AppProcess.md#overridepopulatable)

***

### page

> **page**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`MessagingPage`](../../types/interfaces/MessagingPage.md) \| `undefined`\>

Defined in: [src/apps/user/messages/runtime.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L28)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`page`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#page)

***

### pageId

> **pageId**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string` \| `undefined`\>

Defined in: [src/apps/user/messages/runtime.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L29)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`pageId`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#pageid)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`parentPid`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#parentpid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`parentPid`](../../../../../ts/apps/process/classes/AppProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`pid`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#pid)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`pid`](../../../../../ts/apps/process/classes/AppProcess.md#pid)

***

### refreshing

> **refreshing**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/apps/user/messages/runtime.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L33)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`refreshing`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#refreshing)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`renderArgs`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#renderargs)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`renderArgs`](../../../../../ts/apps/process/classes/AppProcess.md#renderargs)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L42)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`safeMode`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#safemode)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`safeMode`](../../../../../ts/apps/process/classes/AppProcess.md#safemode)

***

### searchQuery

> **searchQuery**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/apps/user/messages/runtime.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L38)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`searchQuery`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#searchquery)

***

### searchResults

> **searchResults**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`[]\>

Defined in: [src/apps/user/messages/runtime.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L39)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`searchResults`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#searchresults)

***

### service

> **service**: [`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md)

Defined in: [src/apps/user/messages/runtime.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L27)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`service`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#service)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`sourceUrl`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#sourceurl)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`sourceUrl`](../../../../../ts/apps/process/classes/AppProcess.md#sourceurl)

***

### THREAD\_DEPTH\_MAX

> `readonly` **THREAD\_DEPTH\_MAX**: `5` = `5`

Defined in: [src/apps/user/messages/runtime.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L42)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`THREAD_DEPTH_MAX`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#thread_depth_max)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`toastMessage`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#toastmessage)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`toastMessage`](../../../../../ts/apps/process/classes/AppProcess.md#toastmessage)

***

### userInfoCache

> **userInfoCache**: `Record`\<`string`, [`PublicUserInfo`](../../../../../types/user/interfaces/PublicUserInfo.md)\> = `{}`

Defined in: [src/apps/user/messages/runtime.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L37)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`userInfoCache`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#userinfocache)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`username`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#username)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`username`](../../../../../ts/apps/process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`userPreferences`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#userpreferences)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`userPreferences`](../../../../../ts/apps/process/classes/AppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`windowFullscreen`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#windowfullscreen)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowFullscreen`](../../../../../ts/apps/process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`windowIcon`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#windowicon)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`windowIcon`](../../../../../ts/apps/process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`windowTitle`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#windowtitle)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`_disposed`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#_disposed)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`MEMORY`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#memory)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`STATE`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#state)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`__render__`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#__render__)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__render__`](../../../../../ts/apps/process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`__start`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#__start)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__start`](../../../../../ts/apps/process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`__stop`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#__stop)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`__stop`](../../../../../ts/apps/process/classes/AppProcess.md#__stop)

***

### addToArchive()

> **addToArchive**(`id`): `void`

Defined in: [src/apps/user/messages/runtime.ts:315](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L315)

#### Parameters

##### id

`string`

#### Returns

`void`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`addToArchive`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#addtoarchive)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`appStore`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#appstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`appStore`](../../../../../ts/apps/process/classes/AppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`blink`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#blink)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`blink`](../../../../../ts/apps/process/classes/AppProcess.md#blink)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`MessagingAppRuntime` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`MessagingAppRuntime` \| `undefined`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`closeIfSecondInstance`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#closeifsecondinstance)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`closeWindow`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#closewindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`closeWindow`](../../../../../ts/apps/process/classes/AppProcess.md#closewindow)

***

### compose()

> **compose**(): `void`

Defined in: [src/apps/user/messages/runtime.ts:195](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L195)

#### Returns

`void`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`compose`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#compose)

***

### correlateMessages()

> **correlateMessages**(`messages`): [`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[][]

Defined in: [src/apps/user/messages/runtime.ts:387](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L387)

#### Parameters

##### messages

[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]

#### Returns

[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[][]

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`correlateMessages`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#correlatemessages)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`CrashDetection`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#crashdetection)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`CrashDetection`](../../../../../ts/apps/process/classes/AppProcess.md#crashdetection)

***

### deleteMessage()

> **deleteMessage**(`id`): `Promise`\<`void`\>

Defined in: [src/apps/user/messages/runtime.ts:169](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L169)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`deleteMessage`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#deletemessage)

***

### downloadAttachments()

> **downloadAttachments**(): `Promise`\<`void`\>

Defined in: [src/apps/user/messages/runtime.ts:525](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L525)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`downloadAttachments`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#downloadattachments)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`elevate`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#elevate)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`elevate`](../../../../../ts/apps/process/classes/AppProcess.md#elevate)

***

### forward()

> **forward**(`message`): `Promise`\<`void`\>

Defined in: [src/apps/user/messages/runtime.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L217)

#### Parameters

##### message

[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`forward`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#forward)

***

### getArchived()

> **getArchived**(): `Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

Defined in: [src/apps/user/messages/runtime.ts:106](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L106)

#### Returns

`Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`getArchived`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#getarchived)

***

### getArchiveState()

> **getArchiveState**(): `string`[]

Defined in: [src/apps/user/messages/runtime.ts:297](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L297)

#### Returns

`string`[]

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`getArchiveState`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#getarchivestate)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`getBody`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#getbody)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`getIcon`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#geticon)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`getIconCached`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#geticoncached)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`getIconStore`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#geticonstore)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getIconStore`](../../../../../ts/apps/process/classes/AppProcess.md#geticonstore)

***

### getInbox()

> **getInbox**(): `Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

Defined in: [src/apps/user/messages/runtime.ts:84](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L84)

#### Returns

`Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`getInbox`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#getinbox)

***

### getSent()

> **getSent**(): `Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

Defined in: [src/apps/user/messages/runtime.ts:95](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L95)

#### Returns

`Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`getSent`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#getsent)

***

### getSingleton()

> **getSingleton**(): `MessagingAppRuntime`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`MessagingAppRuntime`[]

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`getSingleton`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#getsingleton)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getSingleton`](../../../../../ts/apps/process/classes/AppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`getWindow`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#getwindow)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`getWindow`](../../../../../ts/apps/process/classes/AppProcess.md#getwindow)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`hasOverlays`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#hasoverlays)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`hasOverlays`](../../../../../ts/apps/process/classes/AppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`HideToast`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#hidetoast)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`HideToast`](../../../../../ts/apps/process/classes/AppProcess.md#hidetoast)

***

### isArchived()

> **isArchived**(`id`): `boolean`

Defined in: [src/apps/user/messages/runtime.ts:311](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L311)

#### Parameters

##### id

`string`

#### Returns

`boolean`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`isArchived`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#isarchived)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`killSelf`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#killself)

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

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/ts/apps/process.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L103)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`onClose`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#onclose)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`onClose`](../../../../../ts/apps/process/classes/AppProcess.md#onclose)

***

### openAttachment()

> **openAttachment**(`attachment`, `messageId`): `Promise`\<`void`\>

Defined in: [src/apps/user/messages/runtime.ts:479](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L479)

#### Parameters

##### attachment

[`MessageAttachment`](../../../../../types/server/messaging/interfaces/MessageAttachment.md)

##### messageId

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`openAttachment`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#openattachment)

***

### popoutMessage()

> **popoutMessage**(`messageId`): `void`

Defined in: [src/apps/user/messages/runtime.ts:444](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L444)

#### Parameters

##### messageId

`string`

#### Returns

`void`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`popoutMessage`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#popoutmessage)

***

### readAttachment()

> **readAttachment**(`attachment`, `messageId`, `prog`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/apps/user/messages/runtime.ts:457](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L457)

#### Parameters

##### attachment

[`MessageAttachment`](../../../../../types/server/messaging/interfaces/MessageAttachment.md)

##### messageId

`string`

##### prog

[`FileProgressMutator`](../../../../components/fsprogress/types/interfaces/FileProgressMutator.md)

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`readAttachment`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#readattachment)

***

### readMessage()

> **readMessage**(`messageId`, `force?`): `Promise`\<`void`\>

Defined in: [src/apps/user/messages/runtime.ts:118](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L118)

#### Parameters

##### messageId

`string`

##### force?

`boolean` = `false`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`readMessage`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#readmessage)

***

### readMessageFromFile()

> **readMessageFromFile**(`path`): `Promise`\<`boolean` \| `void`\>

Defined in: [src/apps/user/messages/runtime.ts:149](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L149)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`boolean` \| `void`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`readMessageFromFile`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#readmessagefromfile)

***

### refresh()

> **refresh**(): `Promise`\<`void`\>

Defined in: [src/apps/user/messages/runtime.ts:368](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L368)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`refresh`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#refresh)

***

### refreshFailed()

> **refreshFailed**(): `void`

Defined in: [src/apps/user/messages/runtime.ts:401](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L401)

#### Returns

`void`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`refreshFailed`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#refreshfailed)

***

### removeFromArchive()

> **removeFromArchive**(`id`): `void`

Defined in: [src/apps/user/messages/runtime.ts:326](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L326)

#### Parameters

##### id

`string`

#### Returns

`void`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`removeFromArchive`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#removefromarchive)

***

### render()

> **render**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [src/apps/user/messages/runtime.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L75)

#### Parameters

##### \_\_namedParameters

###### page

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`render`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#render)

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`render`](../../../../../ts/apps/process/classes/AppProcess.md#render)

***

### replyTo()

> **replyTo**(`message`): `void`

Defined in: [src/apps/user/messages/runtime.ts:201](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L201)

#### Parameters

##### message

[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)

#### Returns

`void`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`replyTo`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#replyto)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`requestFileLock`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#requestfilelock)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`requestFileLock`](../../../../../ts/apps/process/classes/AppProcess.md#requestfilelock)

***

### saveMessage()

> **saveMessage**(): `Promise`\<`void`\>

Defined in: [src/apps/user/messages/runtime.ts:253](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L253)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`saveMessage`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#savemessage)

***

### Search()

> **Search**(`query`): `void`

Defined in: [src/apps/user/messages/runtime.ts:419](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L419)

#### Parameters

##### query

`string`

#### Returns

`void`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`Search`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#search)

***

### setArchiveState()

> **setArchiveState**(`state`): `void`

Defined in: [src/apps/user/messages/runtime.ts:303](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L303)

#### Parameters

##### state

`string`[]

#### Returns

`void`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`setArchiveState`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#setarchivestate)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`setSource`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#setsource)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`ShowToast`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#showtoast)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`spawnApp`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#spawnapp)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`spawnOverlay`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#spawnoverlay)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`spawnOverlayApp`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#spawnoverlayapp)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`spawnOverlayApp`](../../../../../ts/apps/process/classes/AppProcess.md#spawnoverlayapp)

***

### start()

> **start**(): `Promise`\<`false` \| `undefined`\>

Defined in: [src/apps/user/messages/runtime.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L71)

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Overrides

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`start`](../../../../../ts/apps/process/classes/AppProcess.md#start)

***

### startKeyboardShortcutListener()

> **startKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:270](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L270)

#### Returns

`void`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`startKeyboardShortcutListener`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#startkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`startKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#startkeyboardshortcutlistener)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stop`](../../../../../ts/apps/process/classes/AppProcess.md#stop)

***

### stopKeyboardShortcutListener()

> **stopKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:276](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L276)

#### Returns

`void`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`stopKeyboardShortcutListener`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#stopkeyboardshortcutlistener)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`stopKeyboardShortcutListener`](../../../../../ts/apps/process/classes/AppProcess.md#stopkeyboardshortcutlistener)

***

### switchPage()

> **switchPage**(`id`): `Promise`\<`void`\>

Defined in: [src/apps/user/messages/runtime.ts:354](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L354)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`switchPage`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#switchpage)

***

### toggleArchived()

> **toggleArchived**(`message`): `void`

Defined in: [src/apps/user/messages/runtime.ts:337](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L337)

#### Parameters

##### message

[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)

#### Returns

`void`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`toggleArchived`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#togglearchived)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`unfocusActiveElement`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#unfocusactiveelement)

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

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`unlockFile`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#unlockfile)

#### Inherited from

[`AppProcess`](../../../../../ts/apps/process/classes/AppProcess.md).[`unlockFile`](../../../../../ts/apps/process/classes/AppProcess.md#unlockfile)

***

### userInfo()

> **userInfo**(`userId`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`PublicUserInfo`](../../../../../types/user/interfaces/PublicUserInfo.md)\>\>

Defined in: [src/apps/user/messages/runtime.ts:136](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/runtime.ts#L136)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`PublicUserInfo`](../../../../../types/user/interfaces/PublicUserInfo.md)\>\>

#### Implementation of

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md).[`userInfo`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md#userinfo)
