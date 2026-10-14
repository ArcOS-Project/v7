[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/runtimes/ISqeletonRuntime](../README.md) / ISqeletonRuntime

# Interface: ISqeletonRuntime

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L8)

## Extends

- [`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean`

Defined in: [src/interfaces/IProcess.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L11)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`_criticalProcess`](../../../IAppProcess/interfaces/IAppProcess.md#_criticalprocess)

***

### \_intf

> **\_intf**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ISqlInterfaceProcess`](../../../ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md) \| `undefined`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L11)

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

### busy

> **busy**: `boolean`

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L20)

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

### crashReason

> **crashReason**: `string`

Defined in: [src/interfaces/IAppProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L14)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`crashReason`](../../../IAppProcess/interfaces/IAppProcess.md#crashreason)

***

### currentTab

> **currentTab**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L21)

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

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L17)

***

### errors

> **errors**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`SqeletonError`](../../../../apps/user/sqeleton/types/interfaces/SqeletonError.md)[]\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L14)

***

### name

> **name**: `string`

Defined in: [src/interfaces/IProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L9)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`name`](../../../IAppProcess/interfaces/IAppProcess.md#name)

***

### openedFile

> **openedFile**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L9)

***

### openedFileName

> **openedFileName**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L10)

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

### queries

> **queries**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`SqeletonOpenedQuery`](../../../../apps/user/sqeleton/types/interfaces/SqeletonOpenedQuery.md)[]\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L12)

***

### queryHistory

> **queryHistory**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`SqeletonHistoryItem`](../../../../apps/user/sqeleton/types/interfaces/SqeletonHistoryItem.md)[]\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L15)

***

### queryIndex

> **queryIndex**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`number`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L13)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../types/system/process/type-aliases/RenderArgs.md)

Defined in: [src/interfaces/IAppProcess.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L24)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`renderArgs`](../../../IAppProcess/interfaces/IAppProcess.md#renderargs)

***

### result

> **result**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`Record`\<`string`, `any`\>[][] \| `undefined`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L18)

***

### safeMode

> **safeMode**: `boolean`

Defined in: [src/interfaces/IAppProcess.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L23)

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`safeMode`](../../../IAppProcess/interfaces/IAppProcess.md#safemode)

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

### syntaxError

> **syntaxError**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L22)

***

### tables

> **tables**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`SqlTable`](../../../../apps/user/sqeleton/types/interfaces/SqlTable.md)[]\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L19)

***

### tabs

> **tabs**: [`SqeletonTabs`](../../../../apps/user/sqeleton/types/type-aliases/SqeletonTabs.md)

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L25)

***

### tempDb?

> `optional` **tempDb?**: [`ISqlInterfaceProcess`](../../../ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md)

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L24)

***

### tempDbPath

> **tempDbPath**: `string`

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L23)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L22)

#### Inherited from

[`IWriterRuntime`](../../IWriterRuntime/interfaces/IWriterRuntime.md).[`toastMessage`](../../IWriterRuntime/interfaces/IWriterRuntime.md#toastmessage)

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

***

### working

> **working**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L16)

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

### Interface

#### Get Signature

> **get** **Interface**(): [`ISqlInterfaceProcess`](../../../ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md) \| `undefined`

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L26)

##### Returns

[`ISqlInterfaceProcess`](../../../ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md) \| `undefined`

#### Set Signature

> **set** **Interface**(`value`): `void`

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L27)

##### Parameters

###### value

[`ISqlInterfaceProcess`](../../../ISqlInterfaceProcess/interfaces/ISqlInterfaceProcess.md) \| `undefined`

##### Returns

`void`

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

> **closeIfSecondInstance**(): `Promise`\<`ISqeletonRuntime` \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L39)

#### Returns

`Promise`\<`ISqeletonRuntime` \| `undefined`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`closeIfSecondInstance`](../../../IAppProcess/interfaces/IAppProcess.md#closeifsecondinstance)

***

### closeQuery()

> **closeQuery**(`index`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L39)

#### Parameters

##### index

`number`

#### Returns

`Promise`\<`void`\>

***

### closeQueryAck()

> **closeQueryAck**(`index`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L38)

#### Parameters

##### index

`number`

#### Returns

`Promise`\<`void`\>

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

### DbOpenError()

> **DbOpenError**(`e`): `void`

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L52)

#### Parameters

##### e

`string`

#### Returns

`void`

***

### deleteQuery()

> **deleteQuery**(`index?`): `void`

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L45)

#### Parameters

##### index?

`number`

#### Returns

`void`

***

### dropTableAck()

> **dropTableAck**(`table`): `void`

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L49)

#### Parameters

##### table

`string`

#### Returns

`void`

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

### executeSql()

> **executeSql**(`code`, `simple?`, `system?`): `Promise`\<`string` \| `Record`\<`string`, `any`\>[][] \| `undefined`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L35)

#### Parameters

##### code

`string`

##### simple?

`boolean`

##### system?

`boolean`

#### Returns

`Promise`\<`string` \| `Record`\<`string`, `any`\>[][] \| `undefined`\>

***

### ExistingConnectionError()

> **ExistingConnectionError**(): `void`

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L51)

#### Returns

`void`

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

> **getSingleton**(): `ISqeletonRuntime`[]

Defined in: [src/interfaces/IAppProcess.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L38)

#### Returns

`ISqeletonRuntime`[]

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

### hasSyntaxError()

> **hasSyntaxError**(`input`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L47)

#### Parameters

##### input

`string`

#### Returns

`Promise`\<`boolean`\>

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

### newDatabase()

> **newDatabase**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L34)

#### Returns

`Promise`\<`void`\>

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L31)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`onClose`](../../../IAppProcess/interfaces/IAppProcess.md#onclose)

***

### openDatabase()

> **openDatabase**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L33)

#### Returns

`Promise`\<`void`\>

***

### openEditor()

> **openEditor**(`value?`, `filePath?`): `void`

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L37)

#### Parameters

##### value?

`string`

##### filePath?

`string`

#### Returns

`void`

***

### openQuery()

> **openQuery**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L43)

#### Returns

`Promise`\<`void`\>

***

### QueryReadError()

> **QueryReadError**(`path`): `void`

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L55)

#### Parameters

##### path

`string`

#### Returns

`void`

***

### QuerySaveError()

> **QuerySaveError**(`result`): `void`

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L54)

#### Parameters

##### result

[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)

#### Returns

`void`

***

### readDatabase()

> **readDatabase**(`path`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L32)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

***

### readQuery()

> **readQuery**(`path`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L44)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

***

### render()

> **render**(`__namedParameters`): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L31)

#### Parameters

##### \_\_namedParameters

###### path?

`string`

#### Returns

`Promise`\<`void`\>

#### Overrides

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

### saveCurrentQuery()

> **saveCurrentQuery**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L40)

#### Returns

`Promise`\<`void`\>

***

### saveQuery()

> **saveQuery**(`query`, `index`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L41)

#### Parameters

##### query

[`SqeletonOpenedQuery`](../../../../apps/user/sqeleton/types/interfaces/SqeletonOpenedQuery.md)

##### index

`number`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### saveQueryAs()

> **saveQueryAs**(`query`, `index`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L42)

#### Parameters

##### query

[`SqeletonOpenedQuery`](../../../../apps/user/sqeleton/types/interfaces/SqeletonOpenedQuery.md)

##### index

`number`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

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

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L29)

#### Returns

`Promise`\<`void`\>

***

### startKeyboardShortcutListener()

> **startKeyboardShortcutListener**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L43)

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`startKeyboardShortcutListener`](../../../IAppProcess/interfaces/IAppProcess.md#startkeyboardshortcutlistener)

***

### stop()

> **stop**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L30)

#### Returns

`Promise`\<`void`\>

***

### stopKeyboardShortcutListener()

> **stopKeyboardShortcutListener**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L44)

#### Returns

`void`

#### Inherited from

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md).[`stopKeyboardShortcutListener`](../../../IAppProcess/interfaces/IAppProcess.md#stopkeyboardshortcutlistener)

***

### TablesUpdateError()

> **TablesUpdateError**(`e`): `void`

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L53)

#### Parameters

##### e

`string`

#### Returns

`void`

***

### tableToSql()

> **tableToSql**(`table`, `pretty?`, `dropFirst?`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L46)

#### Parameters

##### table

[`SqlTable`](../../../../apps/user/sqeleton/types/interfaces/SqlTable.md)

##### pretty?

`boolean`

##### dropFirst?

`boolean`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`string`\>\>

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

### updateTableList()

> **updateTableList**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L36)

#### Returns

`Promise`\<`void`\>

***

### waitForAvailable()

> **waitForAvailable**(): `Promise`\<`void`\>

Defined in: [src/interfaces/runtimes/ISqeletonRuntime.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/runtimes/ISqeletonRuntime.ts#L48)

#### Returns

`Promise`\<`void`\>
