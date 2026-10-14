[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/server/connectors/MessagingConnector](../README.md) / MessagingConnector

# Class: MessagingConnector

Defined in: [src/ts/kernel/mods/server/connectors/MessagingConnector.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/MessagingConnector.ts#L9)

## Extends

- [`ServerConnector`](../../classes/ServerConnector.md)

## Implements

- [`IMessagingConnector`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md)

## Constructors

### Constructor

> **new MessagingConnector**(`token?`): `MessagingConnector`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L14)

#### Parameters

##### token?

`string`

#### Returns

`MessagingConnector`

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`constructor`](../../classes/ServerConnector.md#constructor)

## Properties

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L12)

#### Implementation of

[`IMessagingConnector`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md).[`name`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md#name)

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`name`](../../classes/ServerConnector.md#name)

***

### prefix

> **prefix**: `string` = `"/messaging"`

Defined in: [src/ts/kernel/mods/server/connectors/MessagingConnector.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/MessagingConnector.ts#L10)

#### Overrides

[`ServerConnector`](../../classes/ServerConnector.md).[`prefix`](../../classes/ServerConnector.md#prefix)

***

### token?

> `protected` `optional` **token?**: `string`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L11)

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`token`](../../classes/ServerConnector.md#token)

## Accessors

### server

#### Get Signature

> **get** **server**(): `AxiosInstance`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L18)

##### Returns

`AxiosInstance`

#### Implementation of

[`IMessagingConnector`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md).[`server`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md#server)

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`server`](../../classes/ServerConnector.md#server)

## Methods

### AttachmentRead()

> **AttachmentRead**(`messageId`, `attachmentId`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`ArrayBuffer`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/MessagingConnector.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/MessagingConnector.ts#L12)

#### Parameters

##### messageId

`string`

##### attachmentId

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`ArrayBuffer`\>\>

#### Implementation of

[`IMessagingConnector`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md).[`AttachmentRead`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md#attachmentread)

***

### Create()

> **Create**(`subject`, `recipients`, `body`, `attachments`, `repliesTo?`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`Message`](../../../../../../../types/server/messaging/interfaces/Message.md)[]\>\>

Defined in: [src/ts/kernel/mods/server/connectors/MessagingConnector.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/MessagingConnector.ts#L53)

#### Parameters

##### subject

`string`

##### recipients

`string`[]

##### body

`string`

##### attachments

`File`[]

##### repliesTo?

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`Message`](../../../../../../../types/server/messaging/interfaces/Message.md)[]\>\>

#### Implementation of

[`IMessagingConnector`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md).[`Create`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md#create)

***

### Delete()

> **Delete**(`messageId`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/kernel/mods/server/connectors/MessagingConnector.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/MessagingConnector.ts#L37)

#### Parameters

##### messageId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IMessagingConnector`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md).[`Delete`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md#delete)

***

### Inbox()

> **Inbox**(): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>\>

Defined in: [src/ts/kernel/mods/server/connectors/MessagingConnector.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/MessagingConnector.ts#L45)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>\>

#### Implementation of

[`IMessagingConnector`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md).[`Inbox`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md#inbox)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/mods/server/connectors/index.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/index.ts#L44)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`ServerConnector`](../../classes/ServerConnector.md).[`Log`](../../classes/ServerConnector.md#log)

***

### Read()

> **Read**(`messageId`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../../../types/server/messaging/interfaces/ExpandedMessage.md)\>\>

Defined in: [src/ts/kernel/mods/server/connectors/MessagingConnector.ts:77](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/MessagingConnector.ts#L77)

#### Parameters

##### messageId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../../../types/server/messaging/interfaces/ExpandedMessage.md)\>\>

#### Implementation of

[`IMessagingConnector`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md).[`Read`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md#read)

***

### Received()

> **Received**(): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>\>

Defined in: [src/ts/kernel/mods/server/connectors/MessagingConnector.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/MessagingConnector.ts#L85)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>\>

#### Implementation of

[`IMessagingConnector`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md).[`Received`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md#received)

***

### Sent()

> **Sent**(): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>\>

Defined in: [src/ts/kernel/mods/server/connectors/MessagingConnector.ts:93](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/MessagingConnector.ts#L93)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>\>

#### Implementation of

[`IMessagingConnector`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md).[`Sent`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md#sent)

***

### Thread()

> **Thread**(`messageId?`): `Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessageNode`](../../../../../../../types/server/messaging/interfaces/ExpandedMessageNode.md)[]\>\>

Defined in: [src/ts/kernel/mods/server/connectors/MessagingConnector.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/server/connectors/MessagingConnector.ts#L29)

#### Parameters

##### messageId?

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessageNode`](../../../../../../../types/server/messaging/interfaces/ExpandedMessageNode.md)[]\>\>

#### Implementation of

[`IMessagingConnector`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md).[`Thread`](../../../../../../../interfaces/modules/server/IMessagingConnector/interfaces/IMessagingConnector.md#thread)
