[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/INotificationsUserContext](../README.md) / INotificationsUserContext

# Interface: INotificationsUserContext

Defined in: [src/interfaces/contexts/INotificationsUserContext.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/INotificationsUserContext.ts#L5)

## Extends

- [`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md)

## Properties

### notifications

> **notifications**: `Map`\<`string`, [`Notification`](../../../../types/system/notification/interfaces/Notification.md)\>

Defined in: [src/interfaces/contexts/INotificationsUserContext.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/INotificationsUserContext.ts#L6)

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

### clearNotifications()

> **clearNotifications**(): `void`

Defined in: [src/interfaces/contexts/INotificationsUserContext.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/INotificationsUserContext.ts#L9)

#### Returns

`void`

***

### deleteNotification()

> **deleteNotification**(`id`): `void`

Defined in: [src/interfaces/contexts/INotificationsUserContext.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/INotificationsUserContext.ts#L8)

#### Parameters

##### id

`string`

#### Returns

`void`

***

### sendNotification()

> **sendNotification**(`data`): `string` \| `undefined`

Defined in: [src/interfaces/contexts/INotificationsUserContext.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/INotificationsUserContext.ts#L7)

#### Parameters

##### data

[`Notification`](../../../../types/system/notification/interfaces/Notification.md)

#### Returns

`string` \| `undefined`
