[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/server/messaging](../README.md) / ExpandedMessage

# Interface: ExpandedMessage

Defined in: [src/types/server/messaging.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L25)

## Extends

- [`Message`](Message.md)

## Extended by

- [`ExpandedMessageNode`](ExpandedMessageNode.md)

## Properties

### \_id

> **\_id**: `string`

Defined in: [src/types/server/messaging.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L10)

#### Inherited from

[`Message`](Message.md).[`_id`](Message.md#_id)

***

### attachmentData?

> `optional` **attachmentData?**: [`MessageAttachment`](MessageAttachment.md)[]

Defined in: [src/types/server/messaging.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L26)

***

### attachments?

> `optional` **attachments?**: `string`[]

Defined in: [src/types/server/messaging.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L9)

#### Inherited from

[`Message`](Message.md).[`attachments`](Message.md#attachments)

***

### author?

> `optional` **author?**: [`PublicUserInfo`](../../../user/interfaces/PublicUserInfo.md)

Defined in: [src/types/server/messaging.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L27)

***

### authorId

> **authorId**: `string`

Defined in: [src/types/server/messaging.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L5)

#### Inherited from

[`Message`](Message.md).[`authorId`](Message.md#authorid)

***

### body

> **body**: `string`

Defined in: [src/types/server/messaging.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L7)

#### Inherited from

[`Message`](Message.md).[`body`](Message.md#body)

***

### correlationId

> **correlationId**: `string`

Defined in: [src/types/server/messaging.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L12)

#### Inherited from

[`Message`](Message.md).[`correlationId`](Message.md#correlationid)

***

### createdAt

> **createdAt**: `string`

Defined in: [src/types/server/messaging.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L13)

#### Inherited from

[`Message`](Message.md).[`createdAt`](Message.md#createdat)

***

### read

> **read**: `boolean`

Defined in: [src/types/server/messaging.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L15)

#### Inherited from

[`Message`](Message.md).[`read`](Message.md#read)

***

### recipient

> **recipient**: `string`

Defined in: [src/types/server/messaging.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L8)

#### Inherited from

[`Message`](Message.md).[`recipient`](Message.md#recipient)

***

### recipientData?

> `optional` **recipientData?**: [`PublicUserInfo`](../../../user/interfaces/PublicUserInfo.md)

Defined in: [src/types/server/messaging.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L28)

***

### repliesTo?

> `optional` **repliesTo?**: `string`

Defined in: [src/types/server/messaging.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L11)

#### Inherited from

[`Message`](Message.md).[`repliesTo`](Message.md#repliesto)

***

### title

> **title**: `string`

Defined in: [src/types/server/messaging.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L6)

#### Inherited from

[`Message`](Message.md).[`title`](Message.md#title)

***

### updatedAt

> **updatedAt**: `string`

Defined in: [src/types/server/messaging.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L14)

#### Inherited from

[`Message`](Message.md).[`updatedAt`](Message.md#updatedat)
