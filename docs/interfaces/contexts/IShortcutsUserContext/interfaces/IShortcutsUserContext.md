[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/IShortcutsUserContext](../README.md) / IShortcutsUserContext

# Interface: IShortcutsUserContext

Defined in: [src/interfaces/contexts/IShortcutsUserContext.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IShortcutsUserContext.ts#L5)

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

### createShortcut()

> **createShortcut**(`data`, `path`, `dispatch?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/contexts/IShortcutsUserContext.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IShortcutsUserContext.ts#L7)

#### Parameters

##### data

[`ArcShortcut`](../../../../types/system/shortcut/interfaces/ArcShortcut.md)

##### path

`string`

##### dispatch?

`boolean`

#### Returns

`Promise`\<`boolean`\>

***

### handleShortcut()

> **handleShortcut**(`path`, `shortcut`): `Promise`\<`any`\>

Defined in: [src/interfaces/contexts/IShortcutsUserContext.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IShortcutsUserContext.ts#L6)

#### Parameters

##### path

`string`

##### shortcut

[`ArcShortcut`](../../../../types/system/shortcut/interfaces/ArcShortcut.md)

#### Returns

`Promise`\<`any`\>

***

### newShortcut()

> **newShortcut**(`location`): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IShortcutsUserContext.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IShortcutsUserContext.ts#L8)

#### Parameters

##### location

`string`

#### Returns

`Promise`\<`void`\>
