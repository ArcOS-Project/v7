[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/IWorkspaceUserContext](../README.md) / IWorkspaceUserContext

# Interface: IWorkspaceUserContext

Defined in: [src/interfaces/contexts/IWorkspaceUserContext.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWorkspaceUserContext.ts#L5)

## Extends

- [`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md)

## Properties

### virtualDesktop

> **virtualDesktop**: `HTMLDivElement` \| `undefined`

Defined in: [src/interfaces/contexts/IWorkspaceUserContext.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWorkspaceUserContext.ts#L6)

## Methods

### \_\_deactivate()

> **\_\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:90](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L90)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`__deactivate`](../../../IUserDaemon/interfaces/IUserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:88](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L88)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`__init`](../../../IUserDaemon/interfaces/IUserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L91)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`_deactivate`](../../../IUserDaemon/interfaces/IUserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:89](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L89)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`_init`](../../../IUserDaemon/interfaces/IUserContext.md#_init)

***

### createWorkspace()

> **createWorkspace**(`name?`): `void`

Defined in: [src/interfaces/contexts/IWorkspaceUserContext.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWorkspaceUserContext.ts#L11)

#### Parameters

##### name?

`string`

#### Returns

`void`

***

### deleteVirtualDesktop()

> **deleteVirtualDesktop**(`uuid`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IWorkspaceUserContext.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWorkspaceUserContext.ts#L9)

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<`void`\>

***

### deleteVirtualDesktopAck()

> **deleteVirtualDesktopAck**(`workspace`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IWorkspaceUserContext.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWorkspaceUserContext.ts#L18)

#### Parameters

##### workspace

[`Workspace`](../../../../types/user/interfaces/Workspace.md)

#### Returns

`Promise`\<`void`\>

***

### getCurrentDesktop()

> **getCurrentDesktop**(): `HTMLDivElement` \| `undefined`

Defined in: [src/interfaces/contexts/IWorkspaceUserContext.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWorkspaceUserContext.ts#L10)

#### Returns

`HTMLDivElement` \| `undefined`

***

### getDesktopIndexByUuid()

> **getDesktopIndexByUuid**(`uuid`): `number`

Defined in: [src/interfaces/contexts/IWorkspaceUserContext.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWorkspaceUserContext.ts#L12)

#### Parameters

##### uuid

`string`

#### Returns

`number`

***

### killWindowsOfDesktop()

> **killWindowsOfDesktop**(`uuid`): `Promise`\<`boolean` \| `undefined`\>

Defined in: [src/interfaces/contexts/IWorkspaceUserContext.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWorkspaceUserContext.ts#L14)

#### Parameters

##### uuid

`string`

#### Returns

`Promise`\<`boolean` \| `undefined`\>

***

### moveWindow()

> **moveWindow**(`pid`, `destination`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IWorkspaceUserContext.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWorkspaceUserContext.ts#L17)

#### Parameters

##### pid

`number`

##### destination

`string`

#### Returns

`Promise`\<`void`\>

***

### nextDesktop()

> **nextDesktop**(): `boolean`

Defined in: [src/interfaces/contexts/IWorkspaceUserContext.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWorkspaceUserContext.ts#L15)

#### Returns

`boolean`

***

### previousDesktop()

> **previousDesktop**(): `void`

Defined in: [src/interfaces/contexts/IWorkspaceUserContext.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWorkspaceUserContext.ts#L16)

#### Returns

`void`

***

### renderVirtualDesktop()

> **renderVirtualDesktop**(`uuid`): `void`

Defined in: [src/interfaces/contexts/IWorkspaceUserContext.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWorkspaceUserContext.ts#L8)

#### Parameters

##### uuid

`string`

#### Returns

`void`

***

### startVirtualDesktops()

> **startVirtualDesktops**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IWorkspaceUserContext.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWorkspaceUserContext.ts#L19)

#### Returns

`Promise`\<`void`\>

***

### switchToDesktopByUuid()

> **switchToDesktopByUuid**(`uuid`): `void`

Defined in: [src/interfaces/contexts/IWorkspaceUserContext.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWorkspaceUserContext.ts#L13)

#### Parameters

##### uuid

`string`

#### Returns

`void`

***

### syncVirtualDesktops()

> **syncVirtualDesktops**(`v`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IWorkspaceUserContext.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IWorkspaceUserContext.ts#L7)

#### Parameters

##### v

[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<`void`\>
