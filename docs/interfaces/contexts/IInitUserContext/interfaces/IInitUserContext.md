[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/IInitUserContext](../README.md) / IInitUserContext

# Interface: IInitUserContext

Defined in: [src/interfaces/contexts/IInitUserContext.ts:4](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IInitUserContext.ts#L4)

## Extends

- [`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md)

## Properties

### anchorInterceptObserver?

> `optional` **anchorInterceptObserver?**: `MutationObserver`

Defined in: [src/interfaces/contexts/IInitUserContext.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IInitUserContext.ts#L5)

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

Defined in: [src/interfaces/contexts/IInitUserContext.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IInitUserContext.ts#L7)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`_deactivate`](../../../IUserDaemon/interfaces/IUserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IInitUserContext.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IInitUserContext.ts#L6)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`_init`](../../../IUserDaemon/interfaces/IUserContext.md#_init)

***

### firstRun()

> **firstRun**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IInitUserContext.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IInitUserContext.ts#L11)

#### Returns

`Promise`\<`void`\>

***

### handleShellAndAutorun()

> **handleShellAndAutorun**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IInitUserContext.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IInitUserContext.ts#L12)

#### Returns

`Promise`\<`void`\>

***

### startAnchorRedirectionIntercept()

> **startAnchorRedirectionIntercept**(): `void`

Defined in: [src/interfaces/contexts/IInitUserContext.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IInitUserContext.ts#L8)

#### Returns

`void`

***

### startDriveNotifierWatcher()

> **startDriveNotifierWatcher**(): `void`

Defined in: [src/interfaces/contexts/IInitUserContext.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IInitUserContext.ts#L14)

#### Returns

`void`

***

### startFilesystemSupplier()

> **startFilesystemSupplier**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IInitUserContext.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IInitUserContext.ts#L13)

#### Returns

`Promise`\<`void`\>

***

### startServiceHost()

> **startServiceHost**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IInitUserContext.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IInitUserContext.ts#L10)

#### Parameters

##### broadcast?

(`msg`) => `void`

#### Returns

`Promise`\<`void`\>

***

### startSystemStatusRefresh()

> **startSystemStatusRefresh**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IInitUserContext.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IInitUserContext.ts#L9)

#### Returns

`Promise`\<`void`\>
