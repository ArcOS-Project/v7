[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/apps/process](../README.md) / AppProcess

# Class: AppProcess

Defined in: [src/ts/apps/process.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L31)

## Extends

- [`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md)

## Extended by

- [`AdminPortalRuntime`](../../../../apps/admin/adminportal/runtime/classes/AdminPortalRuntime.md)
- [`BugHuntUserDataRuntime`](../../../../apps/admin/adminportal/userdata/runtime/classes/BugHuntUserDataRuntime.md)
- [`LoadQueryOverlayRuntime`](../../../../apps/admin/executequery/LoadQuery/runtime/classes/LoadQueryOverlayRuntime.md)
- [`ExecuteQueryRuntime`](../../../../apps/admin/executequery/runtime/classes/ExecuteQueryRuntime.md)
- [`SaveQueryOverlayRuntime`](../../../../apps/admin/executequery/SaveQuery/runtime/classes/SaveQueryOverlayRuntime.md)
- [`MailbrokerNewKeyOverlayRuntime`](../../../../apps/admin/mailbrokermanagerapp/Overlays/NewKeyOverlay/runtime/classes/MailbrokerNewKeyOverlayRuntime.md)
- [`MailbrokerSendOverlayRuntime`](../../../../apps/admin/mailbrokermanagerapp/Overlays/SendOverlay/runtime/classes/MailbrokerSendOverlayRuntime.md)
- [`MailbrokerViewKeyOverlayRuntime`](../../../../apps/admin/mailbrokermanagerapp/Overlays/ViewKeyOverlay/runtime/classes/MailbrokerViewKeyOverlayRuntime.md)
- [`MailbrokerManagerRuntime`](../../../../apps/admin/mailbrokermanagerapp/runtime/classes/MailbrokerManagerRuntime.md)
- [`AcceleratorOverviewRuntime`](../../../../apps/components/acceleratoroverview/runtime/classes/AcceleratorOverviewRuntime.md)
- [`AddServerRuntime`](../../../../apps/components/addserver/runtime/classes/AddServerRuntime.md)
- [`AppInfoRuntime`](../../../../apps/components/appinfo/runtime/classes/AppInfoRuntime.md)
- [`AppInstallerRuntime`](../../../../apps/components/appinstaller/runtime/classes/AppInstallerRuntime.md)
- [`AppPreInstallRuntime`](../../../../apps/components/apppreinstall/runtime/classes/AppPreInstallRuntime.md)
- [`ArcTermColorsRuntime`](../../../../apps/components/arctermcolors/runtime/classes/ArcTermColorsRuntime.md)
- [`ContextMenuRuntime`](../../../../apps/components/contextmenu/runtime/classes/ContextMenuRuntime.md)
- [`DriveInfoRuntime`](../../../../apps/components/driveinfo/runtime/classes/DriveInfoRuntime.md)
- [`ExitRuntime`](../../../../apps/components/exit/runtime/classes/ExitRuntime.md)
- [`FirstRunRuntime`](../../../../apps/components/firstrun/runtime/classes/FirstRunRuntime.md)
- [`NewFileRuntime`](../../../../apps/components/fsnewfile/runtime/classes/NewFileRuntime.md)
- [`NewFolderRuntime`](../../../../apps/components/fsnewfolder/runtime/classes/NewFolderRuntime.md)
- [`FsProgressRuntime`](../../../../apps/components/fsprogress/runtime/classes/FsProgressRuntime.md)
- [`FsProgressFailRuntime`](../../../../apps/components/fsprogressfail/runtime/classes/FsProgressFailRuntime.md)
- [`RenameItemRuntime`](../../../../apps/components/fsrenameitem/runtime/classes/RenameItemRuntime.md)
- [`GlobalLoadIndicatorRuntime`](../../../../apps/components/globalloadindicator/runtime/classes/GlobalLoadIndicatorRuntime.md)
- [`IconEditDialogRuntime`](../../../../apps/components/iconeditdialog/runtime/classes/IconEditDialogRuntime.md)
- [`IconPickerRuntime`](../../../../apps/components/iconpicker/runtime/classes/IconPickerRuntime.md)
- [`ItemInfoRuntime`](../../../../apps/components/iteminfo/runtime/classes/ItemInfoRuntime.md)
- [`MasterOptionsRuntime`](../../../../apps/components/masteroptions/runtime/classes/MasterOptionsRuntime.md)
- [`MessageBoxRuntime`](../../../../apps/components/messagebox/runtime/classes/MessageBoxRuntime.md)
- [`MessageComposerRuntime`](../../../../apps/components/messagecomposer/runtime/classes/MessageComposerRuntime.md)
- [`MultiUpdateGuiRuntime`](../../../../apps/components/multiupdategui/runtime/classes/MultiUpdateGuiRuntime.md)
- [`OopsNotifierRuntime`](../../../../apps/components/oopsnotifier/runtime/classes/OopsNotifierRuntime.md)
- [`OopsStackTracerRuntime`](../../../../apps/components/oopsstacktracer/runtime/classes/OopsStackTracerRuntime.md)
- [`OpenWithRuntime`](../../../../apps/components/openwith/runtime/classes/OpenWithRuntime.md)
- [`ProcessInfoRuntime`](../../../../apps/components/processinfo/runtime/classes/ProcessInfoRuntime.md)
- [`PswdResetWizardRuntime`](../../../../apps/components/pswdresetwizard/runtime/classes/PswdResetWizardRuntime.md)
- [`SecureContextRuntime`](../../../../apps/components/securecontext/runtime/classes/SecureContextRuntime.md)
- [`SendBetaFeedbackRuntime`](../../../../apps/components/sendbetafeedback/runtime/classes/SendBetaFeedbackRuntime.md)
- [`ServiceInfoRuntime`](../../../../apps/components/serviceinfo/runtime/classes/ServiceInfoRuntime.md)
- [`ShareConnGuiRuntime`](../../../../apps/components/shareconngui/runtime/classes/ShareConnGuiRuntime.md)
- [`ShareCreateGuiRuntime`](../../../../apps/components/sharecreategui/runtime/classes/ShareCreateGuiRuntime.md)
- [`ShareListGuiRuntime`](../../../../apps/components/sharelistgui/runtime/classes/ShareListGuiRuntime.md)
- [`ShareMgmtOverlayRuntime`](../../../../apps/components/sharemgmtgui/overlay/classes/ShareMgmtOverlayRuntime.md)
- [`ShareMgmtGuiRuntime`](../../../../apps/components/sharemgmtgui/runtime/classes/ShareMgmtGuiRuntime.md)
- [`ShellRuntime`](../../../../apps/components/shell/runtime/classes/ShellRuntime.md)
- [`ShortcutPropertiesRuntime`](../../../../apps/components/shortcutproperties/runtime/classes/ShortcutPropertiesRuntime.md)
- [`TerminalWindowRuntime`](../../../../apps/components/terminalwindow/runtime/classes/TerminalWindowRuntime.md)
- [`TotpAuthGuiRuntime`](../../../../apps/components/totpauthgui/runtime/classes/TotpAuthGuiRuntime.md)
- [`TotpSetupGuiRuntime`](../../../../apps/components/totpsetupgui/runtime/classes/TotpSetupGuiRuntime.md)
- [`UpdateNotifierRuntime`](../../../../apps/components/updatenotifier/runtime/classes/UpdateNotifierRuntime.md)
- [`WallpaperRuntime`](../../../../apps/components/wallpaper/runtime/classes/WallpaperRuntime.md)
- [`BootScreenRuntime`](../../../../apps/core/bootscreen/runtime/classes/BootScreenRuntime.md)
- [`InitialSetupRuntime`](../../../../apps/core/initialsetup/runtime/classes/InitialSetupRuntime.md)
- [`LoginAppRuntime`](../../../../apps/core/loginapp/runtime/classes/LoginAppRuntime.md)
- [`NewLoginAppRuntime`](../../../../apps/core/newloginapp/runtime/classes/NewLoginAppRuntime.md)
- [`SwitchServerRuntime`](../../../../apps/core/switchserver/runtime/classes/SwitchServerRuntime.md)
- [`AdvSysSetRuntime`](../../../../apps/user/advsystemsettings/runtime/classes/AdvSysSetRuntime.md)
- [`AppStoreRuntime`](../../../../apps/user/appstore/runtime/classes/AppStoreRuntime.md)
- [`BugHuntRuntime`](../../../../apps/user/bughunt/runtime/classes/BugHuntRuntime.md)
- [`BugHuntUserDataRuntime`](../../../../apps/user/bughunt/userdata/runtime/classes/BugHuntUserDataRuntime.md)
- [`BugHuntCreatorRuntime`](../../../../apps/user/bughuntcreator/runtime/classes/BugHuntCreatorRuntime.md)
- [`CalculatorRuntime`](../../../../apps/user/calculator/runtime/classes/CalculatorRuntime.md)
- [`CodRuntime`](../../../../apps/user/cod/runtime/classes/CodRuntime.md)
- [`DonutAppRuntime`](../../../../apps/user/donut/runtime/classes/DonutAppRuntime.md)
- [`FileManagerRuntime`](../../../../apps/user/filemanager/runtime/classes/FileManagerRuntime.md)
- [`IconEditorRuntime`](../../../../apps/user/iconeditor/runtime/classes/IconEditorRuntime.md)
- [`ImageViewerRuntime`](../../../../apps/user/imageviewer/runtime/classes/ImageViewerRuntime.md)
- [`LightsOffRuntime`](../../../../apps/user/lightsoff/runtime/classes/LightsOffRuntime.md)
- [`LoggingRuntime`](../../../../apps/user/logging/runtime/classes/LoggingRuntime.md)
- [`MediaPlayerRuntime`](../../../../apps/user/mediaplayer/runtime/classes/MediaPlayerRuntime.md)
- [`MessagingAppRuntime`](../../../../apps/user/messages/runtime/classes/MessagingAppRuntime.md)
- [`MinesweeperBestTimesRuntime`](../../../../apps/user/minesweeper/Overlays/besttimes/runtime/classes/MinesweeperBestTimesRuntime.md)
- [`MineSweeperHighScoreRuntime`](../../../../apps/user/minesweeper/Overlays/highscore/runtime/classes/MineSweeperHighScoreRuntime.md)
- [`MinesweeperRuntime`](../../../../apps/user/minesweeper/runtime/classes/MinesweeperRuntime.md)
- [`PdfViewerRuntime`](../../../../apps/user/pdfviewer/runtime/classes/PdfViewerRuntime.md)
- [`ProcessManagerRuntime`](../../../../apps/user/processes/runtime/classes/ProcessManagerRuntime.md)
- [`QlorbRuntime`](../../../../apps/user/qlorb/runtime/classes/QlorbRuntime.md)
- [`SettingsOverlayRuntime`](../../../../apps/user/settings/overlay/classes/SettingsOverlayRuntime.md)
- [`SettingsRuntime`](../../../../apps/user/settings/runtime/classes/SettingsRuntime.md)
- [`SqeletonRuntime`](../../../../apps/user/sqeleton/runtime/classes/SqeletonRuntime.md)
- [`WriterReplaceRuntime`](../../../../apps/user/writer/replace/runtime/classes/WriterReplaceRuntime.md)
- [`WriterRuntime`](../../../../apps/user/writer/runtime/classes/WriterRuntime.md)
- [`ThirdPartyAppProcess`](../../thirdparty/classes/ThirdPartyAppProcess.md)

## Implements

- [`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

## Constructors

### Constructor

> **new AppProcess**(`pid`, `parentPid`, `app`, ...`args`): `AppProcess`

Defined in: [src/ts/apps/process.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L60)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### app

[`AppProcessData`](../../../../types/apps/app/type-aliases/AppProcessData.md)

##### args

...`any`[]

#### Returns

`AppProcess`

#### Overrides

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`constructor`](../../../kernel/mods/stack/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`_criticalProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#_criticalprocess)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`_criticalProcess`](../../../kernel/mods/stack/process/instance/classes/Process.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md) = `[]`

Defined in: [src/ts/apps/process.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L46)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`acceleratorStore`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#acceleratorstore)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/ts/apps/process.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L48)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`altMenu`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#altmenu)

***

### app

> **app**: [`AppProcessData`](../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/apps/process.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L35)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`app`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#app)

***

### blinking

> **blinking**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L50)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`blinking`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#blinking)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\> = `{}`

Defined in: [src/ts/apps/process.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L36)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`componentMount`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#componentmount)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../../types/apps/app/type-aliases/AppContextMenu.md) = `{}`

Defined in: [src/ts/apps/process.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L47)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`contextMenu`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#contextmenu)

***

### crashReason

> **crashReason**: `string` = `""`

Defined in: [src/ts/apps/process.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L32)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`crashReason`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#crashreason)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`dispatch`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#dispatch)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`dispatch`](../../../kernel/mods/stack/process/instance/classes/Process.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/ts/apps/process.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L56)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`draggable`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#draggable)

***

### elevations

> `protected` **elevations**: `Record`\<`string`, [`ElevationData`](../../../../types/system/elevation/interfaces/ElevationData.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L44)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`name`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#name)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`name`](../../../kernel/mods/stack/process/instance/classes/Process.md#name)

***

### overlayStore

> `protected` **overlayStore**: `Record`\<`string`, [`App`](../../../../types/apps/app/interfaces/App.md)\> = `{}`

Defined in: [src/ts/apps/process.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L43)

***

### overridePopulatable

> **overridePopulatable**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L39)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`overridePopulatable`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#overridepopulatable)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`parentPid`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#parentpid)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`parentPid`](../../../kernel/mods/stack/process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`pid`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#pid)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`pid`](../../../kernel/mods/stack/process/instance/classes/Process.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../../types/system/process/type-aliases/RenderArgs.md) = `{}`

Defined in: [src/ts/apps/process.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L45)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`renderArgs`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#renderargs)

***

### safeMode

> **safeMode**: `boolean` = `false`

Defined in: [src/ts/apps/process.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L42)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`safeMode`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#safemode)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`sourceUrl`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#sourceurl)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`sourceUrl`](../../../kernel/mods/stack/process/instance/classes/Process.md#sourceurl)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/ts/apps/process.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L41)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`toastMessage`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#toastmessage)

***

### username

> **username**: `string` = `""`

Defined in: [src/ts/apps/process.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L38)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`username`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#username)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/apps/process.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L37)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`userPreferences`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#userpreferences)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/apps/process.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L49)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`windowFullscreen`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#windowfullscreen)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L34)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`windowIcon`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#windowicon)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L33)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`windowTitle`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#windowtitle)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`_disposed`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#_disposed)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`_disposed`](../../../kernel/mods/stack/process/instance/classes/Process.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`MEMORY`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#memory)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`MEMORY`](../../../kernel/mods/stack/process/instance/classes/Process.md#memory)

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/apps/process.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L52)

##### Returns

[`IShellRuntime`](../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

***

### STATE

#### Get Signature

> **get** **STATE**(): [`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L17)

##### Returns

[`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

#### Set Signature

> **set** **STATE**(`value`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L21)

##### Parameters

###### value

[`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

##### Returns

`void`

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`STATE`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#state)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`STATE`](../../../kernel/mods/stack/process/instance/classes/Process.md#state)

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

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`__render__`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#__render__)

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`__start`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#__start)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`__start`](../../../kernel/mods/stack/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/apps/process.ts:282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L282)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`__stop`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#__stop)

#### Overrides

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`__stop`](../../../kernel/mods/stack/process/instance/classes/Process.md#__stop)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/ts/apps/process.ts:375](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L375)

#### Returns

[`IApplicationStorage`](../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md)

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`appStore`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#appstore)

***

### blink()

> **blink**(): `void`

Defined in: [src/ts/apps/process.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L391)

#### Returns

`void`

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`blink`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#blink)

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`AppProcess` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:230](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L230)

#### Returns

`Promise`\<`AppProcess` \| `undefined`\>

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`closeIfSecondInstance`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#closeifsecondinstance)

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

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`closeWindow`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#closewindow)

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L217)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`CrashDetection`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#crashdetection)

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

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`elevate`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#elevate)

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L258)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`getBody`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#getbody)

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

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`getIcon`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#geticon)

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

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`getIconCached`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#geticoncached)

***

### getIconStore()

> **getIconStore**(`id`): [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/ts/apps/process.ts:387](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L387)

#### Parameters

##### id

`string`

#### Returns

[`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`getIconStore`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#geticonstore)

***

### getSingleton()

> **getSingleton**(): `AppProcess`[]

Defined in: [src/ts/apps/process.ts:226](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L226)

#### Returns

`AppProcess`[]

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`getSingleton`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#getsingleton)

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/ts/apps/process.ts:250](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L250)

#### Returns

`HTMLDivElement`

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`getWindow`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#getwindow)

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/ts/apps/process.ts:266](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L266)

#### Returns

`boolean`

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`hasOverlays`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#hasoverlays)

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L116)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`HideToast`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#hidetoast)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`killSelf`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#killself)

#### Inherited from

`Process.killSelf`

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L85)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`Log`](../../../kernel/mods/stack/process/instance/classes/Process.md#log)

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/ts/apps/process.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L103)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`onClose`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#onclose)

***

### render()

> **render**(`args`): `any`

Defined in: [src/ts/apps/process.ts:163](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L163)

#### Parameters

##### args

[`RenderArgs`](../../../../types/system/process/type-aliases/RenderArgs.md)

#### Returns

`any`

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`render`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#render)

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

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`requestFileLock`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#requestfilelock)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`requestFileLock`](../../../kernel/mods/stack/process/instance/classes/Process.md#requestfilelock)

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

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`setSource`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#setsource)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`setSource`](../../../kernel/mods/stack/process/instance/classes/Process.md#setsource)

***

### ShowToast()

> **ShowToast**(`toast`, `durationMs?`): `Promise`\<`void`\>

Defined in: [src/ts/apps/process.ts:107](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L107)

#### Parameters

##### toast

[`ToastMessage`](../../../../types/apps/app/interfaces/ToastMessage.md)

##### durationMs?

`number` = `3000`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`ShowToast`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#showtoast)

***

### spawnApp()

> **spawnApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:362](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L362)

#### Type Parameters

##### T

`T` *extends* [`IProcess`](../../../../interfaces/IProcess/interfaces/IProcess.md) = [`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

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

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`spawnApp`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#spawnapp)

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

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`spawnOverlay`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#spawnoverlay)

***

### spawnOverlayApp()

> **spawnOverlayApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/ts/apps/process.ts:366](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L366)

#### Type Parameters

##### T

`T` *extends* [`IProcess`](../../../../interfaces/IProcess/interfaces/IProcess.md) = [`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

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

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`spawnOverlayApp`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#spawnoverlayapp)

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L49)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`start`](../../../kernel/mods/stack/process/instance/classes/Process.md#start)

***

### startKeyboardShortcutListener()

> **startKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:270](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L270)

#### Returns

`void`

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`startKeyboardShortcutListener`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#startkeyboardshortcutlistener)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`stop`](../../../kernel/mods/stack/process/instance/classes/Process.md#stop)

***

### stopKeyboardShortcutListener()

> **stopKeyboardShortcutListener**(): `void`

Defined in: [src/ts/apps/process.ts:276](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L276)

#### Returns

`void`

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`stopKeyboardShortcutListener`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#stopkeyboardshortcutlistener)

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/ts/apps/process.ts:329](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/process.ts#L329)

#### Returns

`void`

#### Implementation of

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`unfocusActiveElement`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#unfocusactiveelement)

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

[`IAppProcess`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md).[`unlockFile`](../../../../interfaces/IAppProcess/interfaces/IAppProcess.md#unlockfile)

#### Inherited from

[`Process`](../../../kernel/mods/stack/process/instance/classes/Process.md).[`unlockFile`](../../../kernel/mods/stack/process/instance/classes/Process.md#unlockfile)
