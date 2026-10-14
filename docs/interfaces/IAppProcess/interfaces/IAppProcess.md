[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/IAppProcess](../README.md) / IAppProcess

# Interface: IAppProcess

Defined in: [src/interfaces/IAppProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L13)

## Extends

- [`IProcess`](../../IProcess/interfaces/IProcess.md)

## Extended by

- [`ITerminalWindowRuntime`](../../IArcTerminal/interfaces/ITerminalWindowRuntime.md)
- [`IThirdPartyAppProcess`](../../IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md)
- [`IAcceleratorOverviewRuntime`](../../runtimes/IAcceleratorOverviewRuntime/interfaces/IAcceleratorOverviewRuntime.md)
- [`IAddServerRuntime`](../../runtimes/IAddServerRuntime/interfaces/IAddServerRuntime.md)
- [`IAdminPortalRuntime`](../../runtimes/IAdminPortalRuntime/interfaces/IAdminPortalRuntime.md)
- [`IAdvSysSetRuntime`](../../runtimes/IAdvSysSetRuntime/interfaces/IAdvSysSetRuntime.md)
- [`IAppInfoRuntime`](../../runtimes/IAppInfoRuntime/interfaces/IAppInfoRuntime.md)
- [`IAppInstallerRuntime`](../../runtimes/IAppInstallerRuntime/interfaces/IAppInstallerRuntime.md)
- [`IAppPreInstallRuntime`](../../runtimes/IAppPreinstallRuntime/interfaces/IAppPreInstallRuntime.md)
- [`IAppStoreRuntime`](../../runtimes/IAppStoreRuntime/interfaces/IAppStoreRuntime.md)
- [`IArcTermColorsRuntime`](../../runtimes/IArcTermColorsRuntime/interfaces/IArcTermColorsRuntime.md)
- [`IBootScreenRuntime`](../../runtimes/IBootScreenRuntime/interfaces/IBootScreenRuntime.md)
- [`IBugHuntCreatorRuntime`](../../runtimes/IBugHuntCreatorRuntime/interfaces/IBugHuntCreatorRuntime.md)
- [`IBugHuntRuntime`](../../runtimes/IBugHuntRuntime/interfaces/IBugHuntRuntime.md)
- [`IBugHuntUserDataRuntime`](../../runtimes/IBugHuntUserDataRuntime/interfaces/IBugHuntUserDataRuntime.md)
- [`ICalculatorRuntime`](../../runtimes/ICalculatorRuntime/interfaces/ICalculatorRuntime.md)
- [`ICodRuntime`](../../runtimes/ICodRuntime/interfaces/ICodRuntime.md)
- [`IContextMenuRuntime`](../../runtimes/IContextMenuRuntime/interfaces/IContextMenuRuntime.md)
- [`IDonutAppRuntime`](../../runtimes/IDonutAppRuntime/interfaces/IDonutAppRuntime.md)
- [`IDriveInfoRuntime`](../../runtimes/IDriveInfoRuntime/interfaces/IDriveInfoRuntime.md)
- [`IExecuteQueryRuntime`](../../runtimes/IExecuteQueryRuntime/interfaces/IExecuteQueryRuntime.md)
- [`ILoadQueryOverlayRuntime`](../../runtimes/IExecuteQueryRuntime/interfaces/ILoadQueryOverlayRuntime.md)
- [`ISaveQueryOverlayRuntime`](../../runtimes/IExecuteQueryRuntime/interfaces/ISaveQueryOverlayRuntime.md)
- [`IExitRuntime`](../../runtimes/IExitRuntime/interfaces/IExitRuntime.md)
- [`IFileManagerRuntime`](../../runtimes/IFileManagerRuntime/interfaces/IFileManagerRuntime.md)
- [`IFirstRunRuntime`](../../runtimes/IFirstRunRuntime/interfaces/IFirstRunRuntime.md)
- [`IFsProgressFailRuntime`](../../runtimes/IFsProgressFailRuntime/interfaces/IFsProgressFailRuntime.md)
- [`IFsProgressRuntime`](../../runtimes/IFsProgressRuntime/interfaces/IFsProgressRuntime.md)
- [`IGlobalLoadIndicatorRuntime`](../../runtimes/IGlobalLoadIndicatorRuntime/interfaces/IGlobalLoadIndicatorRuntime.md)
- [`IIconEditDialogRuntime`](../../runtimes/IIconEditDialogRuntime/interfaces/IIconEditDialogRuntime.md)
- [`IIconEditorRuntime`](../../runtimes/IIconEditorRuntime/interfaces/IIconEditorRuntime.md)
- [`IIconPickerRuntime`](../../runtimes/IIconPickerRuntime/interfaces/IIconPickerRuntime.md)
- [`IImageViewerRuntime`](../../runtimes/IImageViewerRuntime/interfaces/IImageViewerRuntime.md)
- [`IInitialSetupRuntime`](../../runtimes/IIntialSetupRuntime/interfaces/IInitialSetupRuntime.md)
- [`IItemInfoRuntime`](../../runtimes/IItemInfoRuntime/interfaces/IItemInfoRuntime.md)
- [`ILightsOffRuntime`](../../runtimes/ILightsOffRuntime/interfaces/ILightsOffRuntime.md)
- [`ILoggingRuntime`](../../runtimes/ILoggingRuntime/interfaces/ILoggingRuntime.md)
- [`ILoginAppRuntime`](../../runtimes/ILoginAppRuntime/interfaces/ILoginAppRuntime.md)
- [`IMailbrokerManagerRuntime`](../../runtimes/IMailbrokerRuntime/interfaces/IMailbrokerManagerRuntime.md)
- [`IMailbrokerSendOverlayRuntime`](../../runtimes/IMailbrokerRuntime/interfaces/IMailbrokerSendOverlayRuntime.md)
- [`IMailbrokerViewKeyOverlayRuntime`](../../runtimes/IMailbrokerRuntime/interfaces/IMailbrokerViewKeyOverlayRuntime.md)
- [`IMailbrokerNewKeyOverlayRuntime`](../../runtimes/IMailbrokerRuntime/interfaces/IMailbrokerNewKeyOverlayRuntime.md)
- [`IMasterOptionsRuntime`](../../runtimes/IMasterOptionsRuntime/interfaces/IMasterOptionsRuntime.md)
- [`IMediaPlayerRuntime`](../../runtimes/IMediaPlayerRuntime/interfaces/IMediaPlayerRuntime.md)
- [`IMessageBoxRuntime`](../../runtimes/IMessageBoxRuntime/interfaces/IMessageBoxRuntime.md)
- [`IMessageComposerRuntime`](../../runtimes/IMessageComposerRuntime/interfaces/IMessageComposerRuntime.md)
- [`IMessagingAppRuntime`](../../runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md)
- [`IMultiUpdateGuiRuntime`](../../runtimes/IMultiUpdateGuiRuntime/interfaces/IMultiUpdateGuiRuntime.md)
- [`INewFileRuntime`](../../runtimes/INewFileRuntime/interfaces/INewFileRuntime.md)
- [`INewFolderRuntime`](../../runtimes/INewFolderRuntime/interfaces/INewFolderRuntime.md)
- [`INewLoginAppRuntime`](../../runtimes/INewLoginAppRuntime/interfaces/INewLoginAppRuntime.md)
- [`IOopsNotifierRuntime`](../../runtimes/IOopsNotifierRuntime/interfaces/IOopsNotifierRuntime.md)
- [`IOopsStackTracerRuntime`](../../runtimes/IOopsStackTracerRuntime/interfaces/IOopsStackTracerRuntime.md)
- [`IOpenWithRuntime`](../../runtimes/IOpenWithRuntime/interfaces/IOpenWithRuntime.md)
- [`IPdfViewerRuntime`](../../runtimes/IPdfViewerRuntime/interfaces/IPdfViewerRuntime.md)
- [`IProcessInfoRuntime`](../../runtimes/IProcessInfoRuntime/interfaces/IProcessInfoRuntime.md)
- [`IProcessManagerRuntime`](../../runtimes/IProcessManagerRuntime/interfaces/IProcessManagerRuntime.md)
- [`IPswdResetWizardRuntime`](../../runtimes/IPswdResetWizardRuntime/interfaces/IPswdResetWizardRuntime.md)
- [`IQlorbRuntime`](../../runtimes/IQlorbRuntime/interfaces/IQlorbRuntime.md)
- [`IRenameItemRuntime`](../../runtimes/IRenameItemRuntime/interfaces/IRenameItemRuntime.md)
- [`ISecureContextRuntime`](../../runtimes/ISecureContextRuntime/interfaces/ISecureContextRuntime.md)
- [`IServiceInfoRuntime`](../../runtimes/IServiceInfoRuntime/interfaces/IServiceInfoRuntime.md)
- [`ISettingsOverlayRuntime`](../../runtimes/ISettingsOverlayRuntime/interfaces/ISettingsOverlayRuntime.md)
- [`ISettingsRuntime`](../../runtimes/ISettingsRuntime/interfaces/ISettingsRuntime.md)
- [`IShareConnGuiRuntime`](../../runtimes/IShareConnGuiRuntime/interfaces/IShareConnGuiRuntime.md)
- [`IShareCreateGuiRuntime`](../../runtimes/IShareCreateGuiRuntime/interfaces/IShareCreateGuiRuntime.md)
- [`IShareListGuiRuntime`](../../runtimes/IShareListGuiRuntime/interfaces/IShareListGuiRuntime.md)
- [`IShareMgmtGuiRuntime`](../../runtimes/IShareMgmtGuiRuntime/interfaces/IShareMgmtGuiRuntime.md)
- [`IShareMgmtOverlayRuntime`](../../runtimes/IShareMgmtGuiRuntime/interfaces/IShareMgmtOverlayRuntime.md)
- [`IShellRuntime`](../../runtimes/IShellRuntime/interfaces/IShellRuntime.md)
- [`IShortcutPropertiesRuntime`](../../runtimes/IShortcutPropertiesRuntime/interfaces/IShortcutPropertiesRuntime.md)
- [`ISqeletonRuntime`](../../runtimes/ISqeletonRuntime/interfaces/ISqeletonRuntime.md)
- [`ISwitchServerRuntime`](../../runtimes/ISwitchServerRuntime/interfaces/ISwitchServerRuntime.md)
- [`ITotpAuthGuiRuntime`](../../runtimes/ITotpAuthGuiRuntime/interfaces/ITotpAuthGuiRuntime.md)
- [`ITotpSetupGuiRuntime`](../../runtimes/ITotpSetupGuiRuntime/interfaces/ITotpSetupGuiRuntime.md)
- [`IWallpaperRuntime`](../../runtimes/IWallpaperRuntime/interfaces/IWallpaperRuntime.md)
- [`IWriterReplaceRuntime`](../../runtimes/IWriterReplaceRuntime/interfaces/IWriterReplaceRuntime.md)
- [`IWriterRuntime`](../../runtimes/IWriterRuntime/interfaces/IWriterRuntime.md)
- [`BugHuntProc`](../../../types/server/bughunt/interfaces/BugHuntProc.md)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean`

Defined in: [src/interfaces/IProcess.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L11)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`_criticalProcess`](../../IProcess/interfaces/IProcess.md#_criticalprocess)

***

### acceleratorStore

> **acceleratorStore**: [`AppKeyCombinations`](../../../types/apps/accelerator/type-aliases/AppKeyCombinations.md)

Defined in: [src/interfaces/IAppProcess.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L25)

***

### altMenu

> **altMenu**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ContextMenuItem`](../../../types/apps/app/interfaces/ContextMenuItem.md)[]\>

Defined in: [src/interfaces/IAppProcess.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L27)

***

### app

> **app**: [`AppProcessData`](../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/interfaces/IAppProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L17)

***

### blinking

> **blinking**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L30)

***

### componentMount

> **componentMount**: `Record`\<`string`, `any`\>

Defined in: [src/interfaces/IAppProcess.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L18)

***

### contextMenu

> `readonly` **contextMenu**: [`AppContextMenu`](../../../types/apps/app/type-aliases/AppContextMenu.md)

Defined in: [src/interfaces/IAppProcess.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L26)

***

### crashReason

> **crashReason**: `string`

Defined in: [src/interfaces/IAppProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L14)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/interfaces/IProcess.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L6)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`dispatch`](../../IProcess/interfaces/IProcess.md#dispatch)

***

### draggable

> **draggable**: `Draggable` \| `undefined`

Defined in: [src/interfaces/IAppProcess.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L29)

***

### name

> **name**: `string`

Defined in: [src/interfaces/IProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L9)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`name`](../../IProcess/interfaces/IProcess.md#name)

***

### overridePopulatable

> **overridePopulatable**: `boolean`

Defined in: [src/interfaces/IAppProcess.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L21)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/interfaces/IProcess.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L8)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`parentPid`](../../IProcess/interfaces/IProcess.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/interfaces/IProcess.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L7)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`pid`](../../IProcess/interfaces/IProcess.md#pid)

***

### renderArgs

> **renderArgs**: [`RenderArgs`](../../../types/system/process/type-aliases/RenderArgs.md)

Defined in: [src/interfaces/IAppProcess.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L24)

***

### safeMode

> **safeMode**: `boolean`

Defined in: [src/interfaces/IAppProcess.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L23)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [src/interfaces/IProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L12)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`sourceUrl`](../../IProcess/interfaces/IProcess.md#sourceurl)

***

### STATE

> **STATE**: [`ProcessState`](../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/interfaces/IProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L13)

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`STATE`](../../IProcess/interfaces/IProcess.md#state)

***

### toastMessage

> **toastMessage**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`ToastMessage`](../../../types/apps/app/interfaces/ToastMessage.md) \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L22)

***

### username

> **username**: `string`

Defined in: [src/interfaces/IAppProcess.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L20)

***

### userPreferences

> **userPreferences**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/interfaces/IAppProcess.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L19)

***

### windowFullscreen

> **windowFullscreen**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L28)

***

### windowIcon

> **windowIcon**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L16)

***

### windowTitle

> **windowTitle**: [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L15)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/interfaces/IProcess.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L10)

##### Returns

`boolean`

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`_disposed`](../../IProcess/interfaces/IProcess.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/interfaces/IProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L14)

##### Returns

`number`

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`MEMORY`](../../IProcess/interfaces/IProcess.md#memory)

## Methods

### \_\_render\_\_()

> **\_\_render\_\_**(`body`): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L36)

#### Parameters

##### body

`HTMLDivElement`

#### Returns

`Promise`\<`void`\>

***

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L15)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`__start`](../../IProcess/interfaces/IProcess.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IAppProcess.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Overrides

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`__stop`](../../IProcess/interfaces/IProcess.md#__stop)

***

### appStore()

> **appStore**(): [`IApplicationStorage`](../../services/IApplicationStorage/interfaces/IApplicationStorage.md)

Defined in: [src/interfaces/IAppProcess.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L59)

#### Returns

[`IApplicationStorage`](../../services/IApplicationStorage/interfaces/IApplicationStorage.md)

***

### blink()

> **blink**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L63)

#### Returns

`void`

***

### closeIfSecondInstance()

> **closeIfSecondInstance**(): `Promise`\<`IAppProcess` \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L39)

#### Returns

`Promise`\<`IAppProcess` \| `undefined`\>

***

### closeWindow()

> **closeWindow**(`kill?`): `Promise`\<`boolean` \| `void`\>

Defined in: [src/interfaces/IAppProcess.ts:34](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L34)

#### Parameters

##### kill?

`boolean`

#### Returns

`Promise`\<`boolean` \| `void`\>

***

### CrashDetection()

> **CrashDetection**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L37)

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

***

### getBody()

> **getBody**(): `HTMLDivElement`

Defined in: [src/interfaces/IAppProcess.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L41)

#### Returns

`HTMLDivElement`

***

### getIcon()

> **getIcon**(`id`): `Promise`\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L60)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`string`\>

***

### getIconCached()

> **getIconCached**(`id`): `string`

Defined in: [src/interfaces/IAppProcess.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L61)

#### Parameters

##### id

`string`

#### Returns

`string`

***

### getIconStore()

> **getIconStore**(`id`): [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

Defined in: [src/interfaces/IAppProcess.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L62)

#### Parameters

##### id

`string`

#### Returns

[`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>

***

### getSingleton()

> **getSingleton**(): `IAppProcess`[]

Defined in: [src/interfaces/IAppProcess.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L38)

#### Returns

`IAppProcess`[]

***

### getWindow()

> **getWindow**(): `HTMLDivElement`

Defined in: [src/interfaces/IAppProcess.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L40)

#### Returns

`HTMLDivElement`

***

### hasOverlays()

> **hasOverlays**(): `boolean`

Defined in: [src/interfaces/IAppProcess.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L42)

#### Returns

`boolean`

***

### HideToast()

> **HideToast**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:33](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L33)

#### Returns

`Promise`\<`void`\>

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`killSelf`](../../IProcess/interfaces/IProcess.md#killself)

***

### onClose()

> **onClose**(): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IAppProcess.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L31)

#### Returns

`Promise`\<`boolean`\>

***

### render()

> **render**(`args`): `any`

Defined in: [src/interfaces/IAppProcess.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L35)

#### Parameters

##### args

[`RenderArgs`](../../../types/system/process/type-aliases/RenderArgs.md)

#### Returns

`any`

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

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`requestFileLock`](../../IProcess/interfaces/IProcess.md#requestfilelock)

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

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`setSource`](../../IProcess/interfaces/IProcess.md#setsource)

***

### ShowToast()

> **ShowToast**(`toast`, `durationMs?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IAppProcess.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L32)

#### Parameters

##### toast

[`ToastMessage`](../../../types/apps/app/interfaces/ToastMessage.md)

##### durationMs?

`number`

#### Returns

`Promise`\<`void`\>

***

### spawnApp()

> **spawnApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L48)

#### Type Parameters

##### T

`T` *extends* `IAppProcess` = `IAppProcess`

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

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

***

### spawnOverlayApp()

> **spawnOverlayApp**\<`T`\>(`id`, `parentPid?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/interfaces/IAppProcess.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L53)

#### Type Parameters

##### T

`T` *extends* `IAppProcess` = `IAppProcess`

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

***

### startKeyboardShortcutListener()

> **startKeyboardShortcutListener**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L43)

#### Returns

`void`

***

### stopKeyboardShortcutListener()

> **stopKeyboardShortcutListener**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L44)

#### Returns

`void`

***

### unfocusActiveElement()

> **unfocusActiveElement**(): `void`

Defined in: [src/interfaces/IAppProcess.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IAppProcess.ts#L46)

#### Returns

`void`

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

[`IProcess`](../../IProcess/interfaces/IProcess.md).[`unlockFile`](../../IProcess/interfaces/IProcess.md#unlockfile)
