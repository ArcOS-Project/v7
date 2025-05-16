[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/apps/thirdparty](../README.md) / ThirdPartyAppProcess

# Class: ThirdPartyAppProcess

Defined in: [src/ts/apps/thirdparty.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/thirdparty.ts#L7)

## Extends

- [`AppProcess`](../../process/classes/AppProcess.md)

## Constructors

### Constructor

> **new ThirdPartyAppProcess**(`handler`, `pid`, `parentPid`, `app`, `workingDirectory`, ...`args`): `ThirdPartyAppProcess`

Defined in: [src/ts/apps/thirdparty.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/thirdparty.ts#L13)

#### Parameters

##### handler

[`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../types/app/type-aliases/AppProcessData.md)

##### workingDirectory

`string`

##### args

...`any`[]

#### Returns

`ThirdPartyAppProcess`

#### Overrides

[`AppProcess`](../../process/classes/AppProcess.md).[`constructor`](../../process/classes/AppProcess.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L22)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`_criticalProcess`](../../process/classes/AppProcess.md#_criticalprocess)

***

### \_disposed

> **\_disposed**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L21)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`_disposed`](../../process/classes/AppProcess.md#_disposed)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../types/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:42](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L42)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`acceleratorStore`](../../process/classes/AppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../types/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L44)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`altMenu`](../../process/classes/AppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../types/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:30](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L30)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`app`](../../process/classes/AppProcess.md#app)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:31](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L31)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`componentMount`](../../process/classes/AppProcess.md#componentmount)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../types/app/type-aliases/AppContextMenu.md) = `{}`

Defined in: [src/ts/apps/process.ts:43](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L43)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`contextMenu`](../../process/classes/AppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:27](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L27)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`crashReason`](../../process/classes/AppProcess.md#crashreason)

***

### dispatch

> **dispatch**: [`ProcessDispatch`](../../../process/dispatch/classes/ProcessDispatch.md)

Defined in: [src/ts/process/instance.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L15)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`dispatch`](../../process/classes/AppProcess.md#dispatch)

***

### draggable

> **draggable**: `undefined` \| `Draggable`

Defined in: [src/ts/apps/process.ts:46](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L46)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`draggable`](../../process/classes/AppProcess.md#draggable)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../types/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:40](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L40)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`elevations`](../../process/classes/AppProcess.md#elevations)

***

### env

> **env**: [`Environment`](../../../kernel/env/classes/Environment.md)

Defined in: [src/ts/process/instance.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L12)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`env`](../../process/classes/AppProcess.md#env)

***

### fs

> **fs**: [`Filesystem`](../../../fs/classes/Filesystem.md)

Defined in: [src/ts/process/instance.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L23)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`fs`](../../process/classes/AppProcess.md#fs)

***

### handler

> **handler**: [`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)

Defined in: [src/ts/process/instance.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L14)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`handler`](../../process/classes/AppProcess.md#handler)

***

### kernel

> **kernel**: [`WaveKernel`](../../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/process/instance.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L17)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`kernel`](../../process/classes/AppProcess.md#kernel)

***

### mutationLock

> **mutationLock**: `boolean` = `false`

Defined in: [src/ts/apps/thirdparty.ts:10](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/thirdparty.ts#L10)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/process/instance.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L20)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`name`](../../process/classes/AppProcess.md#name)

***

### overlayStore

> `protected` **overlayStore**: `Record`\<`string`, [`App`](../../../../types/app/interfaces/App.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:39](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L39)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`overlayStore`](../../process/classes/AppProcess.md#overlaystore)

***

### overridePopulatable

> **overridePopulatable**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:37](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L37)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`overridePopulatable`](../../process/classes/AppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/process/instance.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L19)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`parentPid`](../../process/classes/AppProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/process/instance.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L18)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`pid`](../../process/classes/AppProcess.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../types/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:41](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L41)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`renderArgs`](../../process/classes/AppProcess.md#renderargs)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:38](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L38)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`safeMode`](../../process/classes/AppProcess.md#safemode)

***

### shell

> **shell**: `undefined` \| [`ShellRuntime`](../../../../apps/components/shell/runtime/classes/ShellRuntime.md)

Defined in: [src/ts/apps/process.ts:36](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L36)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`shell`](../../process/classes/AppProcess.md#shell)

***

### soundBus

> **soundBus**: [`SoundBus`](../../../soundbus/classes/SoundBus.md)

Defined in: [src/ts/process/instance.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L13)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`soundBus`](../../process/classes/AppProcess.md#soundbus)

***

### systemDispatch

> **systemDispatch**: [`SystemDispatch`](../../../dispatch/classes/SystemDispatch.md)

Defined in: [src/ts/apps/process.ts:34](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L34)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`systemDispatch`](../../process/classes/AppProcess.md#systemdispatch)

***

### urlCache

> **urlCache**: `Record`\<`string`, `string`\> = `{}`

Defined in: [src/ts/apps/thirdparty.ts:11](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/thirdparty.ts#L11)

***

### userDaemon

> **userDaemon**: `undefined` \| [`UserDaemon`](../../../server/user/daemon/classes/UserDaemon.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L35)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`userDaemon`](../../process/classes/AppProcess.md#userdaemon)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:33](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L33)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`username`](../../process/classes/AppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:32](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L32)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`userPreferences`](../../process/classes/AppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:45](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L45)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`windowFullscreen`](../../process/classes/AppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:29](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L29)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`windowIcon`](../../process/classes/AppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:28](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L28)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`windowTitle`](../../process/classes/AppProcess.md#windowtitle)

***

### workingDirectory

> **workingDirectory**: `string`

Defined in: [src/ts/apps/thirdparty.ts:9](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/thirdparty.ts#L9)

***

### TPA\_REV

> `readonly` `static` **TPA\_REV**: `1` = `1`

Defined in: [src/ts/apps/thirdparty.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/thirdparty.ts#L8)

## Methods

### \_\_render\_\_()

> **\_\_render\_\_**(`body`): `Promise`\<`void`\>

Defined in: [src/ts/apps/thirdparty.ts:27](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/thirdparty.ts#L27)

#### Parameters

##### body

`HTMLDivElement`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`AppProcess`](../../process/classes/AppProcess.md).[`__render__`](../../process/classes/AppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L48)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`__start`](../../process/classes/AppProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:253](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L253)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`__stop`](../../process/classes/AppProcess.md#__stop)

***

### appStore()

> **appStore**(): [`ApplicationStorage`](../../storage/classes/ApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:366](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L366)

#### Returns

[`ApplicationStorage`](../../storage/classes/ApplicationStorage.md)

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`appStore`](../../process/classes/AppProcess.md#appstore)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`undefined` \| [`AppProcess`](../../process/classes/AppProcess.md)\>

Defined in: [src/ts/apps/process.ts:205](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L205)

#### Returns

`Promise`\<`undefined` \| [`AppProcess`](../../process/classes/AppProcess.md)\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`closeIfSecondInstance`](../../process/classes/AppProcess.md#closeifsecondinstance)

***

### closeWindow()

> **closeWindow**(`kill`): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:99](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L99)

#### Parameters

##### kill

`boolean` = `true`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`closeWindow`](../../process/classes/AppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:137](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L137)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`CrashDetection`](../../process/classes/AppProcess.md#crashdetection)

***

### elevate()

> **elevate**(`id`): `Promise`\<`unknown`\>

Defined in: [src/ts/apps/process.ts:345](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L345)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`elevate`](../../process/classes/AppProcess.md#elevate)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:227](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L227)

#### Returns

`HTMLDivElement`

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`getBody`](../../process/classes/AppProcess.md#getbody)

***

### getSingleton()

> **getSingleton**(): [`AppProcess`](../../process/classes/AppProcess.md)[]

Defined in: [src/ts/apps/process.ts:199](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L199)

#### Returns

[`AppProcess`](../../process/classes/AppProcess.md)[]

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`getSingleton`](../../process/classes/AppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:221](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L221)

#### Returns

`HTMLDivElement`

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`getWindow`](../../process/classes/AppProcess.md#getwindow)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:233](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L233)

#### Returns

`boolean`

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`hasOverlays`](../../process/classes/AppProcess.md#hasoverlays)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/process/instance.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L60)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`killSelf`](../../process/classes/AppProcess.md#killself)

***

### Log()

> `protected` **Log**(`message`, `level`): `void`

Defined in: [src/ts/process/instance.ts:67](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L67)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`Log`](../../process/classes/AppProcess.md#log)

***

### notImplemented()

> **notImplemented**(`what?`): `void`

Defined in: [src/ts/apps/process.ts:350](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L350)

#### Parameters

##### what?

`string`

#### Returns

`void`

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`notImplemented`](../../process/classes/AppProcess.md#notimplemented)

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/ts/apps/process.ts:95](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L95)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`onClose`](../../process/classes/AppProcess.md#onclose)

***

### render()

> **render**(`args`): `any`

Defined in: [src/ts/apps/process.ts:151](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L151)

#### Parameters

##### args

[`RenderArgs`](../../../../types/process/type-aliases/RenderArgs.md)

#### Returns

`any`

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`render`](../../process/classes/AppProcess.md#render)

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/process/instance.ts:73](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L73)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `false`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`requestFileLock`](../../process/classes/AppProcess.md#requestfilelock)

***

### spawnApp()

> **spawnApp**\<`T`\>(`id`, `parentPid?`, ...`args?`): `Promise`\<`undefined` \| `T`\>

Defined in: [src/ts/apps/process.ts:337](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L337)

#### Type Parameters

##### T

`T` = [`AppProcess`](../../process/classes/AppProcess.md)

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args?

...`any`[]

#### Returns

`Promise`\<`undefined` \| `T`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`spawnApp`](../../process/classes/AppProcess.md#spawnapp)

***

### spawnOverlay()

> **spawnOverlay**(`id`, ...`args`): `Promise`\<`boolean`\>

Defined in: [src/ts/apps/process.ts:312](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L312)

#### Parameters

##### id

`string`

##### args

...`any`[]

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`spawnOverlay`](../../process/classes/AppProcess.md#spawnoverlay)

***

### spawnOverlayApp()

> **spawnOverlayApp**\<`T`\>(`id`, `parentPid?`, ...`args?`): `Promise`\<`undefined` \| `T`\>

Defined in: [src/ts/apps/process.ts:341](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L341)

#### Type Parameters

##### T

`T` = [`AppProcess`](../../process/classes/AppProcess.md)

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args?

...`any`[]

#### Returns

`Promise`\<`undefined` \| `T`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`spawnOverlayApp`](../../process/classes/AppProcess.md#spawnoverlayapp)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L44)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`start`](../../process/classes/AppProcess.md#start)

***

### startAcceleratorListener()

> **startAcceleratorListener**(): `void`

Defined in: [src/ts/apps/process.ts:241](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L241)

#### Returns

`void`

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`startAcceleratorListener`](../../process/classes/AppProcess.md#startacceleratorlistener)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:40](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L40)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`stop`](../../process/classes/AppProcess.md#stop)

***

### stopAcceleratorListener()

> **stopAcceleratorListener**(): `void`

Defined in: [src/ts/apps/process.ts:247](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L247)

#### Returns

`void`

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`stopAcceleratorListener`](../../process/classes/AppProcess.md#stopacceleratorlistener)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:304](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L304)

#### Returns

`void`

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`unfocusActiveElement`](../../process/classes/AppProcess.md#unfocusactiveelement)

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/process/instance.ts:85](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L85)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `false`\>

#### Inherited from

[`AppProcess`](../../process/classes/AppProcess.md).[`unlockFile`](../../process/classes/AppProcess.md#unlockfile)
