[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/apps/process](../README.md) / AppProcess

# Class: AppProcess

Defined in: [src/ts/apps/process.ts:26](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L26)

## Extends

- [`Process`](../../../process/instance/classes/Process.md)

## Extended by

- [`AdminPortalRuntime`](../../../../apps/admin/adminportal/runtime/classes/AdminPortalRuntime.md)
- [`BugHuntUserDataRuntime`](../../../../apps/admin/adminportal/userdata/runtime/classes/BugHuntUserDataRuntime.md)
- [`AcceleratorOverviewRuntime`](../../../../apps/components/acceleratoroverview/runtime/classes/AcceleratorOverviewRuntime.md)
- [`AppInfoRuntime`](../../../../apps/components/appinfo/runtime/classes/AppInfoRuntime.md)
- [`ContextMenuRuntime`](../../../../apps/components/contextmenu/runtime/classes/ContextMenuRuntime.md)
- [`ExitRuntime`](../../../../apps/components/exit/runtime/classes/ExitRuntime.md)
- [`NewFileRuntime`](../../../../apps/components/fsnewfile/runtime/classes/NewFileRuntime.md)
- [`NewFolderRuntime`](../../../../apps/components/fsnewfolder/runtime/classes/NewFolderRuntime.md)
- [`FsProgressRuntime`](../../../../apps/components/fsprogress/runtime/classes/FsProgressRuntime.md)
- [`RenameItemRuntime`](../../../../apps/components/fsrenameitem/runtime/classes/RenameItemRuntime.md)
- [`GlobalLoadIndicatorRuntime`](../../../../apps/components/globalloadindicator/runtime/classes/GlobalLoadIndicatorRuntime.md)
- [`IconPickerRuntime`](../../../../apps/components/iconpicker/runtime/classes/IconPickerRuntime.md)
- [`ItemInfoRuntime`](../../../../apps/components/iteminfo/runtime/classes/ItemInfoRuntime.md)
- [`MessageBoxRuntime`](../../../../apps/components/messagebox/runtime/classes/MessageBoxRuntime.md)
- [`MessageComposerRuntime`](../../../../apps/components/messagecomposer/runtime/classes/MessageComposerRuntime.md)
- [`OpenWithRuntime`](../../../../apps/components/openwith/runtime/classes/OpenWithRuntime.md)
- [`SecureContextRuntime`](../../../../apps/components/securecontext/runtime/classes/SecureContextRuntime.md)
- [`ShareConnGuiRuntime`](../../../../apps/components/shareconngui/runtime/classes/ShareConnGuiRuntime.md)
- [`ShareCreateGuiRuntime`](../../../../apps/components/sharecreategui/runtime/classes/ShareCreateGuiRuntime.md)
- [`ShareListGuiRuntime`](../../../../apps/components/sharelistgui/runtime/classes/ShareListGuiRuntime.md)
- [`OverlayRuntime`](../../../../apps/components/sharemgmtgui/overlay/classes/OverlayRuntime.md)
- [`ShareMgmtGuiRuntime`](../../../../apps/components/sharemgmtgui/runtime/classes/ShareMgmtGuiRuntime.md)
- [`ShellRuntime`](../../../../apps/components/shell/runtime/classes/ShellRuntime.md)
- [`ShortcutPropertiesRuntime`](../../../../apps/components/shortcutproperties/runtime/classes/ShortcutPropertiesRuntime.md)
- [`SystemShortcutsRuntime`](../../../../apps/components/systemshortcuts/runtime/classes/SystemShortcutsRuntime.md)
- [`TerminalWindowRuntime`](../../../../apps/components/terminalwindow/runtime/classes/TerminalWindowRuntime.md)
- [`TotpAuthGuiRuntime`](../../../../apps/components/totpauthgui/runtime/classes/TotpAuthGuiRuntime.md)
- [`TotpSetupGuiRuntime`](../../../../apps/components/totpsetupgui/runtime/classes/TotpSetupGuiRuntime.md)
- [`WallpaperRuntime`](../../../../apps/components/wallpaper/runtime/classes/WallpaperRuntime.md)
- [`BootScreenRuntime`](../../../../apps/core/bootscreen/runtime/classes/BootScreenRuntime.md)
- [`InitialSetupRuntime`](../../../../apps/core/initialsetup/runtime/classes/InitialSetupRuntime.md)
- [`LoginAppRuntime`](../../../../apps/core/loginapp/runtime/classes/LoginAppRuntime.md)
- [`AdvSysSetRuntime`](../../../../apps/user/advsystemsettings/runtime/classes/AdvSysSetRuntime.md)
- [`BugHuntRuntime`](../../../../apps/user/bughunt/runtime/classes/BugHuntRuntime.md)
- [`BugHuntUserDataRuntime`](../../../../apps/user/bughunt/userdata/runtime/classes/BugHuntUserDataRuntime.md)
- [`BugHuntCreatorRuntime`](../../../../apps/user/bughuntcreator/runtime/classes/BugHuntCreatorRuntime.md)
- [`CalculatorRuntime`](../../../../apps/user/calculator/runtime/classes/CalculatorRuntime.md)
- [`CameraRuntime`](../../../../apps/user/camera/runtime/classes/CameraRuntime.md)
- [`FileManagerRuntime`](../../../../apps/user/filemanager/runtime/classes/FileManagerRuntime.md)
- [`EditRowRuntime`](../../../../apps/user/hexedit/editrow/runtime/classes/EditRowRuntime.md)
- [`HexEditRuntime`](../../../../apps/user/hexedit/runtime/classes/HexEditRuntime.md)
- [`ImageViewerRuntime`](../../../../apps/user/imageviewer/runtime/classes/ImageViewerRuntime.md)
- [`LightsOffRuntime`](../../../../apps/user/lightsoff/runtime/classes/LightsOffRuntime.md)
- [`LoggingRuntime`](../../../../apps/user/logging/runtime/classes/LoggingRuntime.md)
- [`MediaPlayerRuntime`](../../../../apps/user/mediaplayer/runtime/classes/MediaPlayerRuntime.md)
- [`MessagingAppRuntime`](../../../../apps/user/messages/runtime/classes/MessagingAppRuntime.md)
- [`PdfViewerRuntime`](../../../../apps/user/pdfviewer/runtime/classes/PdfViewerRuntime.md)
- [`ProcessManagerRuntime`](../../../../apps/user/processes/runtime/classes/ProcessManagerRuntime.md)
- [`QlorbRuntime`](../../../../apps/user/qlorb/runtime/classes/QlorbRuntime.md)
- [`OverlayRuntime`](../../../../apps/user/settings/overlay/classes/OverlayRuntime.md)
- [`SettingsRuntime`](../../../../apps/user/settings/runtime/classes/SettingsRuntime.md)
- [`TestAppRuntime`](../../../../apps/user/test/runtime/classes/TestAppRuntime.md)
- [`ReplaceRuntime`](../../../../apps/user/writer/replace/runtime/classes/ReplaceRuntime.md)
- [`WriterRuntime`](../../../../apps/user/writer/runtime/classes/WriterRuntime.md)
- [`ScriptedAppProcess`](../../scripted/classes/ScriptedAppProcess.md)
- [`ThirdPartyAppProcess`](../../thirdparty/classes/ThirdPartyAppProcess.md)

## Constructors

### Constructor

> **new AppProcess**(`handler`, `pid`, `parentPid`, `app`, ...`args`): `AppProcess`

Defined in: [src/ts/apps/process.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L48)

#### Parameters

##### handler

[`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../types/app/type-aliases/AppProcessData.md)

##### args

...`any`[]

#### Returns

`AppProcess`

#### Overrides

[`Process`](../../../process/instance/classes/Process.md).[`constructor`](../../../process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L22)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`_criticalProcess`](../../../process/instance/classes/Process.md#_criticalprocess)

***

### \_disposed

> **\_disposed**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L21)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`_disposed`](../../../process/instance/classes/Process.md#_disposed)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../types/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:42](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L42)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../types/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L44)

***

### app

> **app**: [`AppProcessData`](../../../../types/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:30](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L30)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:31](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L31)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../types/app/type-aliases/AppContextMenu.md) = `{}`

Defined in: [src/ts/apps/process.ts:43](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L43)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:27](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L27)

***

### dispatch

> **dispatch**: [`ProcessDispatch`](../../../process/dispatch/classes/ProcessDispatch.md)

Defined in: [src/ts/process/instance.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L15)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`dispatch`](../../../process/instance/classes/Process.md#dispatch)

***

### draggable

> **draggable**: `undefined` \| `Draggable`

Defined in: [src/ts/apps/process.ts:46](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L46)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../types/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:40](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L40)

***

### env

> **env**: [`Environment`](../../../kernel/env/classes/Environment.md)

Defined in: [src/ts/process/instance.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L12)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`env`](../../../process/instance/classes/Process.md#env)

***

### fs

> **fs**: [`Filesystem`](../../../fs/classes/Filesystem.md)

Defined in: [src/ts/process/instance.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L23)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`fs`](../../../process/instance/classes/Process.md#fs)

***

### handler

> **handler**: [`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)

Defined in: [src/ts/process/instance.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L14)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`handler`](../../../process/instance/classes/Process.md#handler)

***

### kernel

> **kernel**: [`WaveKernel`](../../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/process/instance.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L17)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`kernel`](../../../process/instance/classes/Process.md#kernel)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/process/instance.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L20)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`name`](../../../process/instance/classes/Process.md#name)

***

### overlayStore

> `protected` **overlayStore**: `Record`\<`string`, [`App`](../../../../types/app/interfaces/App.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:39](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L39)

***

### overridePopulatable

> **overridePopulatable**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:37](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L37)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/process/instance.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L19)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`parentPid`](../../../process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/process/instance.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L18)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`pid`](../../../process/instance/classes/Process.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../types/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:41](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L41)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:38](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L38)

***

### shell

> **shell**: `undefined` \| [`ShellRuntime`](../../../../apps/components/shell/runtime/classes/ShellRuntime.md)

Defined in: [src/ts/apps/process.ts:36](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L36)

***

### soundBus

> **soundBus**: [`SoundBus`](../../../soundbus/classes/SoundBus.md)

Defined in: [src/ts/process/instance.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L13)

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`soundBus`](../../../process/instance/classes/Process.md#soundbus)

***

### systemDispatch

> **systemDispatch**: [`SystemDispatch`](../../../dispatch/classes/SystemDispatch.md)

Defined in: [src/ts/apps/process.ts:34](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L34)

#### Overrides

[`Process`](../../../process/instance/classes/Process.md).[`systemDispatch`](../../../process/instance/classes/Process.md#systemdispatch)

***

### userDaemon

> **userDaemon**: `undefined` \| [`UserDaemon`](../../../server/user/daemon/classes/UserDaemon.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L35)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:33](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L33)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:32](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L32)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:45](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L45)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:29](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L29)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:28](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L28)

## Methods

### \_\_render\_\_()

> **\_\_render\_\_**(`body`): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:155](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L155)

#### Parameters

##### body

`HTMLDivElement`

#### Returns

`Promise`\<`void`\>

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L48)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`__start`](../../../process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:253](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L253)

#### Returns

`Promise`\<`any`\>

#### Overrides

[`Process`](../../../process/instance/classes/Process.md).[`__stop`](../../../process/instance/classes/Process.md#__stop)

***

### appStore()

> **appStore**(): [`ApplicationStorage`](../../storage/classes/ApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:366](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L366)

#### Returns

[`ApplicationStorage`](../../storage/classes/ApplicationStorage.md)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`undefined` \| `AppProcess`\>

Defined in: [src/ts/apps/process.ts:205](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L205)

#### Returns

`Promise`\<`undefined` \| `AppProcess`\>

***

### closeWindow()

> **closeWindow**(`kill`): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:99](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L99)

#### Parameters

##### kill

`boolean` = `true`

#### Returns

`Promise`\<`void`\>

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:137](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L137)

#### Returns

`Promise`\<`void`\>

***

### elevate()

> **elevate**(`id`): `Promise`\<`unknown`\>

Defined in: [src/ts/apps/process.ts:345](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L345)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`unknown`\>

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:227](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L227)

#### Returns

`HTMLDivElement`

***

### getSingleton()

> **getSingleton**(): `AppProcess`[]

Defined in: [src/ts/apps/process.ts:199](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L199)

#### Returns

`AppProcess`[]

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:221](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L221)

#### Returns

`HTMLDivElement`

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:233](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L233)

#### Returns

`boolean`

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/process/instance.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L60)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`killSelf`](../../../process/instance/classes/Process.md#killself)

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

[`Process`](../../../process/instance/classes/Process.md).[`Log`](../../../process/instance/classes/Process.md#log)

***

### notImplemented()

> **notImplemented**(`what?`): `void`

Defined in: [src/ts/apps/process.ts:350](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L350)

#### Parameters

##### what?

`string`

#### Returns

`void`

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/ts/apps/process.ts:95](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L95)

#### Returns

`Promise`\<`boolean`\>

***

### render()

> **render**(`args`): `any`

Defined in: [src/ts/apps/process.ts:151](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L151)

#### Parameters

##### args

[`RenderArgs`](../../../../types/process/type-aliases/RenderArgs.md)

#### Returns

`any`

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

[`Process`](../../../process/instance/classes/Process.md).[`requestFileLock`](../../../process/instance/classes/Process.md#requestfilelock)

***

### spawnApp()

> **spawnApp**\<`T`\>(`id`, `parentPid?`, ...`args?`): `Promise`\<`undefined` \| `T`\>

Defined in: [src/ts/apps/process.ts:337](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L337)

#### Type Parameters

##### T

`T` = `AppProcess`

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args?

...`any`[]

#### Returns

`Promise`\<`undefined` \| `T`\>

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

***

### spawnOverlayApp()

> **spawnOverlayApp**\<`T`\>(`id`, `parentPid?`, ...`args?`): `Promise`\<`undefined` \| `T`\>

Defined in: [src/ts/apps/process.ts:341](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L341)

#### Type Parameters

##### T

`T` = `AppProcess`

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args?

...`any`[]

#### Returns

`Promise`\<`undefined` \| `T`\>

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L44)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`start`](../../../process/instance/classes/Process.md#start)

***

### startAcceleratorListener()

> **startAcceleratorListener**(): `void`

Defined in: [src/ts/apps/process.ts:241](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L241)

#### Returns

`void`

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:40](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L40)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../process/instance/classes/Process.md).[`stop`](../../../process/instance/classes/Process.md#stop)

***

### stopAcceleratorListener()

> **stopAcceleratorListener**(): `void`

Defined in: [src/ts/apps/process.ts:247](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L247)

#### Returns

`void`

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:304](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/apps/process.ts#L304)

#### Returns

`void`

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

[`Process`](../../../process/instance/classes/Process.md).[`unlockFile`](../../../process/instance/classes/Process.md#unlockfile)
