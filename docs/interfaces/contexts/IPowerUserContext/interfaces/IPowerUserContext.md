[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/IPowerUserContext](../README.md) / IPowerUserContext

# Interface: IPowerUserContext

Defined in: [src/interfaces/contexts/IPowerUserContext.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPowerUserContext.ts#L6)

## Extends

- [`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md)

## Properties

### battery

> **battery**: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`BatteryType`](../../../../types/system/navigator/interfaces/BatteryType.md) \| `undefined`\>

Defined in: [src/interfaces/contexts/IPowerUserContext.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPowerUserContext.ts#L7)

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

### batteryInfo()

> **batteryInfo**(): `Promise`\<[`BatteryType`](../../../../types/system/navigator/interfaces/BatteryType.md) \| `undefined`\>

Defined in: [src/interfaces/contexts/IPowerUserContext.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPowerUserContext.ts#L14)

#### Returns

`Promise`\<[`BatteryType`](../../../../types/system/navigator/interfaces/BatteryType.md) \| `undefined`\>

***

### closeOpenedApps()

> **closeOpenedApps**(`type`, `props?`, `force?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/contexts/IPowerUserContext.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPowerUserContext.ts#L13)

#### Parameters

##### type

`string`

##### props?

`Record`\<`string`, `any`\>

##### force?

`boolean`

#### Returns

`Promise`\<`boolean`\>

***

### logoff()

> **logoff**(`force?`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IPowerUserContext.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPowerUserContext.ts#L8)

#### Parameters

##### force?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### logoffSafeMode()

> **logoffSafeMode**(`force?`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IPowerUserContext.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPowerUserContext.ts#L11)

#### Parameters

##### force?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### restart()

> **restart**(`force?`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IPowerUserContext.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPowerUserContext.ts#L10)

#### Parameters

##### force?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### shutdown()

> **shutdown**(`force?`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IPowerUserContext.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPowerUserContext.ts#L9)

#### Parameters

##### force?

`boolean`

#### Returns

`Promise`\<`void`\>

***

### toLogin()

> **toLogin**(`type`, `props?`, `force?`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IPowerUserContext.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IPowerUserContext.ts#L12)

#### Parameters

##### type

`string`

##### props?

`Record`\<`string`, `any`\>

##### force?

`boolean`

#### Returns

`Promise`\<`void`\>
