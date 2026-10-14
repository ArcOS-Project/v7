[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/IElevationUserContext](../README.md) / IElevationUserContext

# Interface: IElevationUserContext

Defined in: [src/interfaces/contexts/IElevationUserContext.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IElevationUserContext.ts#L5)

## Extends

- [`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md)

## Properties

### \_elevating

> **\_elevating**: `boolean`

Defined in: [src/interfaces/contexts/IElevationUserContext.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IElevationUserContext.ts#L6)

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

### elevate()

> **elevate**(`id`): `Promise`\<`unknown`\>

Defined in: [src/interfaces/contexts/IElevationUserContext.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IElevationUserContext.ts#L7)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`unknown`\>

***

### loadElevation()

> **loadElevation**(`id`, `data`): `void`

Defined in: [src/interfaces/contexts/IElevationUserContext.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IElevationUserContext.ts#L9)

#### Parameters

##### id

`string`

##### data

[`ElevationData`](../../../../types/system/elevation/interfaces/ElevationData.md)

#### Returns

`void`

***

### manuallyElevate()

> **manuallyElevate**(`data`): `Promise`\<`unknown`\>

Defined in: [src/interfaces/contexts/IElevationUserContext.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IElevationUserContext.ts#L8)

#### Parameters

##### data

[`ElevationData`](../../../../types/system/elevation/interfaces/ElevationData.md)

#### Returns

`Promise`\<`unknown`\>
