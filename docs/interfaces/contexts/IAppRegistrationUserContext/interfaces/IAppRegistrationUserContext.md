[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/IAppRegistrationUserContext](../README.md) / IAppRegistrationUserContext

# Interface: IAppRegistrationUserContext

Defined in: [src/interfaces/contexts/IAppRegistrationUserContext.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRegistrationUserContext.ts#L5)

## Extends

- [`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md)

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

### addToStartMenu()

> **addToStartMenu**(`appId`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IAppRegistrationUserContext.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRegistrationUserContext.ts#L16)

#### Parameters

##### appId

`string`

#### Returns

`Promise`\<`void`\>

***

### determineStartMenuShortcutPath()

> **determineStartMenuShortcutPath**(`app`): `string` \| `undefined`

Defined in: [src/interfaces/contexts/IAppRegistrationUserContext.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRegistrationUserContext.ts#L15)

#### Parameters

##### app

[`App`](../../../../types/apps/app/interfaces/App.md)

#### Returns

`string` \| `undefined`

***

### getUserApps()

> **getUserApps**(): `Promise`\<[`AppStorage`](../../../../types/apps/app/type-aliases/AppStorage.md)\>

Defined in: [src/interfaces/contexts/IAppRegistrationUserContext.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRegistrationUserContext.ts#L6)

#### Returns

`Promise`\<[`AppStorage`](../../../../types/apps/app/type-aliases/AppStorage.md)\>

***

### modeUserAppsToFs()

> **modeUserAppsToFs**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IAppRegistrationUserContext.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRegistrationUserContext.ts#L19)

#### Returns

`Promise`\<`void`\>

***

### pinApp()

> **pinApp**(`appId`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IAppRegistrationUserContext.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRegistrationUserContext.ts#L13)

#### Parameters

##### appId

`string`

#### Returns

`Promise`\<`void`\>

***

### registerApp()

> **registerApp**(`data`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IAppRegistrationUserContext.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRegistrationUserContext.ts#L7)

#### Parameters

##### data

[`InstalledApp`](../../../../types/apps/app/interfaces/InstalledApp.md)

#### Returns

`Promise`\<`void`\>

***

### registerAppFromPath()

> **registerAppFromPath**(`path`): `Promise`\<`"failed to read file"` \| `"failed to convert to JSON"` \| `"missing properties"` \| `undefined`\>

Defined in: [src/interfaces/contexts/IAppRegistrationUserContext.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRegistrationUserContext.ts#L9)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`"failed to read file"` \| `"failed to convert to JSON"` \| `"missing properties"` \| `undefined`\>

***

### removeFromStartMenu()

> **removeFromStartMenu**(`appId`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IAppRegistrationUserContext.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRegistrationUserContext.ts#L17)

#### Parameters

##### appId

`string`

#### Returns

`Promise`\<`void`\>

***

### uninstallAppWithAck()

> **uninstallAppWithAck**(`app`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/contexts/IAppRegistrationUserContext.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRegistrationUserContext.ts#L12)

#### Parameters

##### app

[`App`](../../../../types/apps/app/interfaces/App.md)

#### Returns

`Promise`\<`boolean`\>

***

### uninstallPackageWithStatus()

> **uninstallPackageWithStatus**(`id`, `deleteFiles?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/contexts/IAppRegistrationUserContext.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRegistrationUserContext.ts#L8)

#### Parameters

##### id

`string`

##### deleteFiles?

`boolean`

#### Returns

`Promise`\<`boolean`\>

***

### unpinApp()

> **unpinApp**(`appId`): `void`

Defined in: [src/interfaces/contexts/IAppRegistrationUserContext.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRegistrationUserContext.ts#L14)

#### Parameters

##### appId

`string`

#### Returns

`void`

***

### updateStartMenuFolder()

> **updateStartMenuFolder**(`quiet?`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IAppRegistrationUserContext.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRegistrationUserContext.ts#L18)

#### Parameters

##### quiet?

`boolean`

#### Returns

`Promise`\<`void`\>
