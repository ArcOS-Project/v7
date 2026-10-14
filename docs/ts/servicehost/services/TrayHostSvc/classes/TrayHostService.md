[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/servicehost/services/TrayHostSvc](../README.md) / TrayHostService

# Class: TrayHostService

Defined in: [src/ts/servicehost/services/TrayHostSvc/index.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrayHostSvc/index.ts#L11)

## Extends

- [`BaseService`](../../../base/classes/BaseService.md)

## Implements

- [`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md)

## Constructors

### Constructor

> **new TrayHostService**(`pid`, `parentPid`, `name`, `host`, `initBroadcast?`): `TrayHostService`

Defined in: [src/ts/servicehost/services/TrayHostSvc/index.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrayHostSvc/index.ts#L15)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### name

`string`

##### host

[`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

##### initBroadcast?

(`message`) => `void`

#### Returns

`TrayHostService`

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`constructor`](../../../base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`_criticalProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#_criticalprocess)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_criticalProcess`](../../../base/classes/BaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`activated`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#activated)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`activated`](../../../base/classes/BaseService.md#activated)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`dispatch`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#dispatch)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`dispatch`](../../../base/classes/BaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`host`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#host)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`host`](../../../base/classes/BaseService.md#host)

***

### initBroadcast?

> `optional` **initBroadcast?**: (`msg`) => `void`

Defined in: [src/ts/servicehost/base.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L10)

#### Parameters

##### msg

`string`

#### Returns

`void`

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`initBroadcast`](../../../base/classes/BaseService.md#initbroadcast)

***

### loading

> **loading**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`boolean`\>

Defined in: [src/ts/servicehost/services/TrayHostSvc/index.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrayHostSvc/index.ts#L13)

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`loading`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#loading)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`name`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#name)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`name`](../../../base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`parentPid`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#parentpid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`parentPid`](../../../base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`pid`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#pid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`pid`](../../../base/classes/BaseService.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`sourceUrl`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#sourceurl)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`sourceUrl`](../../../base/classes/BaseService.md#sourceurl)

***

### trayIcons

> **trayIcons**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`Record`\<`` `${number}#${string}` ``, [`ITrayIconProcess`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayIconProcess.md)\>\>

Defined in: [src/ts/servicehost/services/TrayHostSvc/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrayHostSvc/index.ts#L12)

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`trayIcons`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#trayicons)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`_disposed`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#_disposed)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_disposed`](../../../base/classes/BaseService.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`MEMORY`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#memory)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`MEMORY`](../../../base/classes/BaseService.md#memory)

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/servicehost/base.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L12)

##### Returns

[`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`shell`](../../../base/classes/BaseService.md#shell)

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

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`STATE`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#state)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`STATE`](../../../base/classes/BaseService.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`__start`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#__start)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__start`](../../../base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`__stop`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#__stop)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__stop`](../../../base/classes/BaseService.md#__stop)

***

### changeIcon()

> **changeIcon**(`pid`, `identifier`, `newIcon`): `void`

Defined in: [src/ts/servicehost/services/TrayHostSvc/index.ts:108](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrayHostSvc/index.ts#L108)

#### Parameters

##### pid

`number`

##### identifier

`string`

##### newIcon

`string`

#### Returns

`void`

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`changeIcon`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#changeicon)

***

### createTrayIcon()

> **createTrayIcon**(`pid`, `identifier`, `options`, `process?`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/TrayHostSvc/index.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrayHostSvc/index.ts#L31)

#### Parameters

##### pid

`number`

##### identifier

`string`

##### options

[`TrayIconOptions`](../../../../../types/services/tray/interfaces/TrayIconOptions.md)

##### process?

*typeof* [`TrayIconProcess`](../../../../ui/tray/process/classes/TrayIconProcess.md) = `TrayIconProcess`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`createTrayIcon`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#createtrayicon)

***

### deactivate()

> **deactivate**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/base.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L30)

#### Parameters

##### broadcast?

(`m`) => `void`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`deactivate`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#deactivate)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`deactivate`](../../../base/classes/BaseService.md#deactivate)

***

### disposeAllTrayIcons()

> **disposeAllTrayIcons**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/TrayHostSvc/index.ts:80](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrayHostSvc/index.ts#L80)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`disposeAllTrayIcons`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#disposealltrayicons)

***

### disposeProcessTrayIcons()

> **disposeProcessTrayIcons**(`pid`): `void`

Defined in: [src/ts/servicehost/services/TrayHostSvc/index.ts:93](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrayHostSvc/index.ts#L93)

#### Parameters

##### pid

`number`

#### Returns

`void`

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`disposeProcessTrayIcons`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#disposeprocesstrayicons)

***

### disposeTrayIcon()

> **disposeTrayIcon**(`pid`, `identifier`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/servicehost/services/TrayHostSvc/index.ts:64](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrayHostSvc/index.ts#L64)

#### Parameters

##### pid

`number`

##### identifier

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`disposeTrayIcon`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#disposetrayicon)

***

### GetConnector()

> **GetConnector**\<`T`\>(`name`): `T`

Defined in: [src/ts/servicehost/base.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L16)

#### Type Parameters

##### T

`T` *extends* [`IServerConnector`](../../../../../interfaces/modules/IServerManager/classes/IServerConnector.md)

#### Parameters

##### name

`string`

#### Returns

`T`

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`GetConnector`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#getconnector)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`GetConnector`](../../../base/classes/BaseService.md#getconnector)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`killSelf`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#killself)

#### Inherited from

`BaseService.killSelf`

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

[`BaseService`](../../../base/classes/BaseService.md).[`Log`](../../../base/classes/BaseService.md#log)

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

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`requestFileLock`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#requestfilelock)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`requestFileLock`](../../../base/classes/BaseService.md#requestfilelock)

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

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`setSource`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#setsource)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`setSource`](../../../base/classes/BaseService.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/TrayHostSvc/index.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/TrayHostSvc/index.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`start`](../../../base/classes/BaseService.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`stop`](../../../base/classes/BaseService.md#stop)

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

[`ITrayHostService`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md).[`unlockFile`](../../../../../interfaces/services/ITrayHostService/interfaces/ITrayHostService.md#unlockfile)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`unlockFile`](../../../base/classes/BaseService.md#unlockfile)
