[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/IVersionUserContext](../README.md) / IVersionUserContext

# Interface: IVersionUserContext

Defined in: [src/interfaces/contexts/IVersionUserContext.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IVersionUserContext.ts#L5)

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

### checkForNewVersion()

> **checkForNewVersion**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IVersionUserContext.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IVersionUserContext.ts#L8)

#### Returns

`Promise`\<`void`\>

***

### enableSourceDrive()

> **enableSourceDrive**(`openAlso?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/contexts/IVersionUserContext.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IVersionUserContext.ts#L10)

#### Parameters

##### openAlso?

`boolean`

#### Returns

`Promise`\<`boolean`\>

***

### isRegisteredVersionOutdated()

> **isRegisteredVersionOutdated**(): `Promise`\<`boolean`\>

Defined in: [src/interfaces/contexts/IVersionUserContext.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IVersionUserContext.ts#L6)

#### Returns

`Promise`\<`boolean`\>

***

### mountSourceDrive()

> **mountSourceDrive**(): `Promise`\<`false` \| [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)\>

Defined in: [src/interfaces/contexts/IVersionUserContext.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IVersionUserContext.ts#L9)

#### Returns

`Promise`\<`false` \| [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md)\>

***

### updateRegisteredVersion()

> **updateRegisteredVersion**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IVersionUserContext.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IVersionUserContext.ts#L7)

#### Returns

`Promise`\<`void`\>
