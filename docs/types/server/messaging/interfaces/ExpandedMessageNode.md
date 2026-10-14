[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [types/server/messaging](../README.md) / ExpandedMessageNode

# Interface: ExpandedMessageNode

Defined in: [src/types/server/messaging.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L31)

## Extends

- [`ExpandedMessage`](ExpandedMessage.md)

## Properties

### \_id

> **\_id**: `string`

Defined in: [src/types/server/messaging.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L10)

#### Inherited from

[`ExpandedMessage`](ExpandedMessage.md).[`_id`](ExpandedMessage.md#_id)

***

### attachmentData?

> `optional` **attachmentData?**: [`MessageAttachment`](MessageAttachment.md)[]

Defined in: [src/types/server/messaging.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L26)

#### Inherited from

[`ExpandedMessage`](ExpandedMessage.md).[`attachmentData`](ExpandedMessage.md#attachmentdata)

***

### attachments?

> `optional` **attachments?**: `string`[]

Defined in: [src/types/server/messaging.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L9)

#### Inherited from

[`ExpandedMessage`](ExpandedMessage.md).[`attachments`](ExpandedMessage.md#attachments)

***

### author?

> `optional` **author?**: [`PublicUserInfo`](../../../user/interfaces/PublicUserInfo.md)

Defined in: [src/types/server/messaging.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L27)

#### Inherited from

[`ExpandedMessage`](ExpandedMessage.md).[`author`](ExpandedMessage.md#author)

***

### authorId

> **authorId**: `string`

Defined in: [src/types/server/messaging.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L5)

#### Inherited from

[`ExpandedMessage`](ExpandedMessage.md).[`authorId`](ExpandedMessage.md#authorid)

***

### body

> **body**: `string`

Defined in: [src/types/server/messaging.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L7)

#### Inherited from

[`ExpandedMessage`](ExpandedMessage.md).[`body`](ExpandedMessage.md#body)

***

### correlationId

> **correlationId**: `string`

Defined in: [src/types/server/messaging.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L12)

#### Inherited from

[`ExpandedMessage`](ExpandedMessage.md).[`correlationId`](ExpandedMessage.md#correlationid)

***

### createdAt

> **createdAt**: `string`

Defined in: [src/types/server/messaging.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L13)

#### Inherited from

[`ExpandedMessage`](ExpandedMessage.md).[`createdAt`](ExpandedMessage.md#createdat)

***

### read

> **read**: `boolean`

Defined in: [src/types/server/messaging.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L15)

#### Inherited from

[`ExpandedMessage`](ExpandedMessage.md).[`read`](ExpandedMessage.md#read)

***

### recipient

> **recipient**: `string`

Defined in: [src/types/server/messaging.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L8)

#### Inherited from

[`ExpandedMessage`](ExpandedMessage.md).[`recipient`](ExpandedMessage.md#recipient)

***

### recipientData?

> `optional` **recipientData?**: [`PublicUserInfo`](../../../user/interfaces/PublicUserInfo.md)

Defined in: [src/types/server/messaging.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L28)

#### Inherited from

[`ExpandedMessage`](ExpandedMessage.md).[`recipientData`](ExpandedMessage.md#recipientdata)

***

### replies

> **replies**: `ExpandedMessageNode`[]

Defined in: [src/types/server/messaging.ts:32](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L32)

***

### repliesTo?

> `optional` **repliesTo?**: `string`

Defined in: [src/types/server/messaging.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L11)

#### Inherited from

[`ExpandedMessage`](ExpandedMessage.md).[`repliesTo`](ExpandedMessage.md#repliesto)

***

### title

> **title**: `string`

Defined in: [src/types/server/messaging.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L6)

#### Inherited from

[`ExpandedMessage`](ExpandedMessage.md).[`title`](ExpandedMessage.md#title)

***

### updatedAt

> **updatedAt**: `string`

Defined in: [src/types/server/messaging.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/server/messaging.ts#L14)

#### Inherited from

[`ExpandedMessage`](ExpandedMessage.md).[`updatedAt`](ExpandedMessage.md#updatedat)
