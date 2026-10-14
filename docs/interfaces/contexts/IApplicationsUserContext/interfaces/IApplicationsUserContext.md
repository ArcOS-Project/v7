[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/IApplicationsUserContext](../README.md) / IApplicationsUserContext

# Interface: IApplicationsUserContext

Defined in: [src/interfaces/contexts/IApplicationsUserContext.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IApplicationsUserContext.ts#L5)

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

### checkDisabled()

> **checkDisabled**(`appId`, `noSafeMode?`): `boolean`

Defined in: [src/interfaces/contexts/IApplicationsUserContext.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IApplicationsUserContext.ts#L6)

#### Parameters

##### appId

`string`

##### noSafeMode?

`boolean`

#### Returns

`boolean`

***

### disableApp()

> **disableApp**(`appId`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/contexts/IApplicationsUserContext.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IApplicationsUserContext.ts#L9)

#### Parameters

##### appId

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

***

### disableThirdParty()

> **disableThirdParty**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IApplicationsUserContext.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IApplicationsUserContext.ts#L12)

#### Returns

`Promise`\<`void`\>

***

### enableApp()

> **enableApp**(`appId`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/contexts/IApplicationsUserContext.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IApplicationsUserContext.ts#L10)

#### Parameters

##### appId

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

***

### enableThirdParty()

> **enableThirdParty**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IApplicationsUserContext.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IApplicationsUserContext.ts#L11)

#### Returns

`Promise`\<`void`\>

***

### isPopulatableByAppIdSync()

> **isPopulatableByAppIdSync**(`appId`): `boolean`

Defined in: [src/interfaces/contexts/IApplicationsUserContext.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IApplicationsUserContext.ts#L8)

#### Parameters

##### appId

`string`

#### Returns

`boolean`

***

### isVital()

> **isVital**(`app`): `boolean` \| `undefined`

Defined in: [src/interfaces/contexts/IApplicationsUserContext.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IApplicationsUserContext.ts#L7)

#### Parameters

##### app

[`App`](../../../../types/apps/app/interfaces/App.md)

#### Returns

`boolean` \| `undefined`
