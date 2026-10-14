[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/daemon/contexts/workspaces](../README.md) / WorkspaceUserContext

# Class: WorkspaceUserContext

Defined in: [src/ts/daemon/contexts/workspaces.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L17)

## Extends

- [`UserContext`](../../../context/classes/UserContext.md)

## Implements

- [`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md)

## Constructors

### Constructor

> **new WorkspaceUserContext**(`id`, `daemon`): `WorkspaceUserContext`

Defined in: [src/ts/daemon/contexts/workspaces.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L23)

#### Parameters

##### id

`string`

##### daemon

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`WorkspaceUserContext`

#### Overrides

[`UserContext`](../../../context/classes/UserContext.md).[`constructor`](../../../context/classes/UserContext.md#constructor)

## Properties

### virtualDesktop

> **virtualDesktop**: `HTMLDivElement` \| `undefined`

Defined in: [src/ts/daemon/contexts/workspaces.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L21)

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`virtualDesktop`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#virtualdesktop)

## Accessors

### \_disposed

#### Get Signature

> **get** `protected` **\_disposed**(): `boolean`

Defined in: [src/ts/daemon/context.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L59)

##### Returns

`boolean`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_disposed`](../../../context/classes/UserContext.md#_disposed)

***

### appStorage

#### Get Signature

> **get** `protected` **appStorage**(): () => [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L51)

##### Returns

() => [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`appStorage`](../../../context/classes/UserContext.md#appstorage)

***

### initialized

#### Get Signature

> **get** `protected` **initialized**(): `boolean`

Defined in: [src/ts/daemon/context.ts:83](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L83)

##### Returns

`boolean`

#### Set Signature

> **set** `protected` **initialized**(`value`): `void`

Defined in: [src/ts/daemon/context.ts:87](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L87)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`initialized`](../../../context/classes/UserContext.md#initialized)

***

### pid

#### Get Signature

> **get** `protected` **pid**(): `number`

Defined in: [src/ts/daemon/context.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L63)

##### Returns

`number`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`pid`](../../../context/classes/UserContext.md#pid)

***

### safeMode

#### Get Signature

> **get** `protected` **safeMode**(): `boolean`

Defined in: [src/ts/daemon/context.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L55)

##### Returns

`boolean`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`safeMode`](../../../context/classes/UserContext.md#safemode)

***

### serviceHost

#### Get Signature

> **get** `protected` **serviceHost**(): [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L47)

##### Returns

[`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md) \| `undefined`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`serviceHost`](../../../context/classes/UserContext.md#servicehost)

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L12)

##### Returns

[`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`shell`](../../../context/classes/UserContext.md#shell)

***

### userInfo

#### Get Signature

> **get** `protected` **userInfo**(): [`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

Defined in: [src/ts/daemon/context.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L67)

##### Returns

[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

#### Set Signature

> **set** `protected` **userInfo**(`value`): `void`

Defined in: [src/ts/daemon/context.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L71)

##### Parameters

###### value

[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

##### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`userInfo`](../../../context/classes/UserContext.md#userinfo)

***

### username

#### Get Signature

> **get** `protected` **username**(): `string`

Defined in: [src/ts/daemon/context.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L75)

##### Returns

`string`

#### Set Signature

> **set** `protected` **username**(`username`): `void`

Defined in: [src/ts/daemon/context.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L79)

##### Parameters

###### username

`string`

##### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`username`](../../../context/classes/UserContext.md#username)

## Methods

### \_\_deactivate()

> **\_\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L31)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`__deactivate`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#__deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__deactivate`](../../../context/classes/UserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`__init`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#__init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__init`](../../../context/classes/UserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`_deactivate`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#_deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_deactivate`](../../../context/classes/UserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L27)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`_init`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#_init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_init`](../../../context/classes/UserContext.md#_init)

***

### createWorkspace()

> **createWorkspace**(`name?`): `void`

Defined in: [src/ts/daemon/contexts/workspaces.ts:149](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L149)

#### Parameters

##### name?

`string`

#### Returns

`void`

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`createWorkspace`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#createworkspace)

***

### deleteVirtualDesktop()

> **deleteVirtualDesktop**(`uuid`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/workspaces.ts:74](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L74)

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`deleteVirtualDesktop`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#deletevirtualdesktop)

***

### deleteVirtualDesktopAck()

> **deleteVirtualDesktopAck**(`workspace`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/workspaces.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L103)

#### Parameters

##### workspace

[`Workspace`](../../../../../types/user/interfaces/Workspace.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`deleteVirtualDesktopAck`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#deletevirtualdesktopack)

***

### getCurrentDesktop()

> **getCurrentDesktop**(): `HTMLDivElement` \| `undefined`

Defined in: [src/ts/daemon/contexts/workspaces.ts:130](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L130)

#### Returns

`HTMLDivElement` \| `undefined`

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`getCurrentDesktop`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#getcurrentdesktop)

***

### getDesktopIndexByUuid()

> **getDesktopIndexByUuid**(`uuid`): `number`

Defined in: [src/ts/daemon/contexts/workspaces.ts:162](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L162)

#### Parameters

##### uuid

`string`

#### Returns

`number`

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`getDesktopIndexByUuid`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#getdesktopindexbyuuid)

***

### killWindowsOfDesktop()

> **killWindowsOfDesktop**(`uuid`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/ts/daemon/contexts/workspaces.ts:191](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L191)

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`killWindowsOfDesktop`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#killwindowsofdesktop)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/daemon/context.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L41)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`Log`](../../../context/classes/UserContext.md#log)

***

### moveWindow()

> **moveWindow**(`pid`, `destination`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/workspaces.ts:245](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L245)

#### Parameters

##### pid

`number`

##### destination

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`moveWindow`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#movewindow)

***

### nextDesktop()

> **nextDesktop**(): `boolean`

Defined in: [src/ts/daemon/contexts/workspaces.ts:209](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L209)

#### Returns

`boolean`

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`nextDesktop`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#nextdesktop)

***

### previousDesktop()

> **previousDesktop**(): `void`

Defined in: [src/ts/daemon/contexts/workspaces.ts:229](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L229)

#### Returns

`void`

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`previousDesktop`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#previousdesktop)

***

### renderVirtualDesktop()

> **renderVirtualDesktop**(`uuid`): `void`

Defined in: [src/ts/daemon/contexts/workspaces.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L60)

#### Parameters

##### uuid

`string`

#### Returns

`void`

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`renderVirtualDesktop`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#rendervirtualdesktop)

***

### startVirtualDesktops()

> **startVirtualDesktops**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/workspaces.ts:271](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L271)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`startVirtualDesktops`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#startvirtualdesktops)

***

### switchToDesktopByUuid()

> **switchToDesktopByUuid**(`uuid`): `void`

Defined in: [src/ts/daemon/contexts/workspaces.ts:176](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L176)

#### Parameters

##### uuid

`string`

#### Returns

`void`

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`switchToDesktopByUuid`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#switchtodesktopbyuuid)

***

### syncVirtualDesktops()

> **syncVirtualDesktops**(`v`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/workspaces.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/workspaces.ts#L27)

#### Parameters

##### v

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IWorkspaceUserContext`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md).[`syncVirtualDesktops`](../../../../../interfaces/contexts/IWorkspaceUserContext/interfaces/IWorkspaceUserContext.md#syncvirtualdesktops)
