[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/servicehost/services/IconService](../README.md) / IconService

# Class: IconService

Defined in: [src/ts/servicehost/services/IconService/index.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L13)

## Extends

- [`BaseService`](../../../base/classes/BaseService.md)

## Implements

- [`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md)

## Constructors

### Constructor

> **new IconService**(`pid`, `parentPid`, `name`, `host`, `initBroadcast?`): `IconService`

Defined in: [src/ts/servicehost/services/IconService/index.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L29)

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

(`msg`) => `void`

#### Returns

`IconService`

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`constructor`](../../../base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`_criticalProcess`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#_criticalprocess)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_criticalProcess`](../../../base/classes/BaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`activated`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#activated)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`activated`](../../../base/classes/BaseService.md#activated)

***

### Configuration

> **Configuration**: [`IConfigurator`](../../../../../interfaces/IConfigurator/interfaces/IConfigurator.md)\<`Record`\<`string`, `string`\>\>

Defined in: [src/ts/servicehost/services/IconService/index.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L19)

***

### DEFAULT\_ICON

> **DEFAULT\_ICON**: `string` = `""`

Defined in: [src/ts/servicehost/services/IconService/index.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L17)

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`DEFAULT_ICON`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#default_icon)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`dispatch`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#dispatch)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`dispatch`](../../../base/classes/BaseService.md#dispatch)

***

### FILE\_CACHE

> **FILE\_CACHE**: `Record`\<`string`, `string`\> = `{}`

Defined in: [src/ts/servicehost/services/IconService/index.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L15)

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`FILE_CACHE`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#file_cache)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`host`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#host)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`host`](../../../base/classes/BaseService.md#host)

***

### ICON\_TYPES

> **ICON\_TYPES**: `string`[]

Defined in: [src/ts/servicehost/services/IconService/index.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L16)

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`ICON_TYPES`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#icon_types)

***

### Icons

> **Icons**: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`Record`\<`string`, `string`\>\>

Defined in: [src/ts/servicehost/services/IconService/index.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L18)

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`Icons`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#icons)

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

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`name`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#name)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`name`](../../../base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`parentPid`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#parentpid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`parentPid`](../../../base/classes/BaseService.md#parentpid)

***

### PATH

> **PATH**: `string`

Defined in: [src/ts/servicehost/services/IconService/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L14)

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`PATH`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#path)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`pid`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#pid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`pid`](../../../base/classes/BaseService.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`sourceUrl`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#sourceurl)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`sourceUrl`](../../../base/classes/BaseService.md#sourceurl)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`_disposed`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#_disposed)

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

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`MEMORY`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#memory)

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

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`STATE`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#state)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`STATE`](../../../base/classes/BaseService.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`__start`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#__start)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__start`](../../../base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`__stop`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#__stop)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__stop`](../../../base/classes/BaseService.md#__stop)

***

### cacheEverything()

> **cacheEverything**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/IconService/index.ts:152](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L152)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`cacheEverything`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#cacheeverything)

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

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`deactivate`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#deactivate)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`deactivate`](../../../base/classes/BaseService.md#deactivate)

***

### defaultConfiguration()

> **defaultConfiguration**(): `Record`\<`string`, `string`\>

Defined in: [src/ts/servicehost/services/IconService/index.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L48)

#### Returns

`Record`\<`string`, `string`\>

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`defaultConfiguration`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#defaultconfiguration)

***

### getAppIcon()

> **getAppIcon**(`app`, `workingDirectory?`): `string`

Defined in: [src/ts/servicehost/services/IconService/index.ts:171](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L171)

#### Parameters

##### app

[`App`](../../../../../types/apps/app/interfaces/App.md)

##### workingDirectory?

`string`

#### Returns

`string`

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`getAppIcon`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#getappicon)

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

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`GetConnector`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#getconnector)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`GetConnector`](../../../base/classes/BaseService.md#getconnector)

***

### getGroupedIcons()

> **getGroupedIcons**(): `Record`\<`string`, `Record`\<`string`, `string`\>\>

Defined in: [src/ts/servicehost/services/IconService/index.ts:195](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L195)

#### Returns

`Record`\<`string`, `Record`\<`string`, `string`\>\>

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`getGroupedIcons`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#getgroupedicons)

***

### getIcon()

> **getIcon**(`id`, `noCache?`): `Promise`\<`string`\>

Defined in: [src/ts/servicehost/services/IconService/index.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L61)

#### Parameters

##### id

`string`

##### noCache?

`boolean` = `false`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`getIcon`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#geticon)

***

### getIconCached()

> **getIconCached**(`id`): `string`

Defined in: [src/ts/servicehost/services/IconService/index.ts:97](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L97)

#### Parameters

##### id

`string`

#### Returns

`string`

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`getIconCached`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#geticoncached)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`killSelf`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#killself)

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

### parseIcon()

> **parseIcon**(`id`): \[`"app"` \| `"fs"` \| `"builtin"`, `string`\]

Defined in: [src/ts/servicehost/services/IconService/index.ts:142](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L142)

#### Parameters

##### id

`string`

#### Returns

\[`"app"` \| `"fs"` \| `"builtin"`, `string`\]

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`parseIcon`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#parseicon)

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

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`requestFileLock`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#requestfilelock)

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

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`setSource`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#setsource)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`setSource`](../../../base/classes/BaseService.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/IconService/index.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/IconService/index.ts#L35)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`start`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#start)

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

[`IIconService`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md).[`unlockFile`](../../../../../interfaces/services/IIconService/interfaces/IIconService.md#unlockfile)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`unlockFile`](../../../base/classes/BaseService.md#unlockfile)
