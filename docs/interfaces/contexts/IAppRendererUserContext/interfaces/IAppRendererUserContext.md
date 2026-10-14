[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/IAppRendererUserContext](../README.md) / IAppRendererUserContext

# Interface: IAppRendererUserContext

Defined in: [src/interfaces/contexts/IAppRendererUserContext.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRendererUserContext.ts#L5)

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

Defined in: [src/interfaces/contexts/IAppRendererUserContext.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRendererUserContext.ts#L6)

#### Returns

`Promise`\<`void`\>

#### Overrides

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

### getAppRendererStyle()

> **getAppRendererStyle**(`accent`): `string`

Defined in: [src/interfaces/contexts/IAppRendererUserContext.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRendererUserContext.ts#L7)

#### Parameters

##### accent

`string`

#### Returns

`string`

***

### setAppRendererClasses()

> **setAppRendererClasses**(`v`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IAppRendererUserContext.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRendererUserContext.ts#L8)

#### Parameters

##### v

[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<`void`\>

***

### setUserStyleLoader()

> **setUserStyleLoader**(`style`): `void`

Defined in: [src/interfaces/contexts/IAppRendererUserContext.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IAppRendererUserContext.ts#L9)

#### Parameters

##### style

[`CustomStylePreferences`](../../../../types/user/interfaces/CustomStylePreferences.md)

#### Returns

`void`
