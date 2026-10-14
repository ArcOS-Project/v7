[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [interfaces/modules/server/IMessagingConnector](../README.md) / IMessagingConnector

# Interface: IMessagingConnector

Defined in: [src/interfaces/modules/server/IMessagingConnector.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IMessagingConnector.ts#L7)

## Extends

- [`IServerConnector`](../../../IServerManager/classes/IServerConnector.md)

## Properties

### name

> **name**: `string`

Defined in: [src/interfaces/modules/IServerManager.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L29)

#### Inherited from

[`IServerConnector`](../../../IServerManager/classes/IServerConnector.md).[`name`](../../../IServerManager/classes/IServerConnector.md#name)

## Accessors

### server

#### Get Signature

> **get** **server**(): `AxiosInstance`

Defined in: [src/interfaces/modules/IServerManager.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IServerManager.ts#L30)

##### Returns

`AxiosInstance`

#### Inherited from

[`IServerConnector`](../../../IServerManager/classes/IServerConnector.md).[`server`](../../../IServerManager/classes/IServerConnector.md#server)

## Methods

### AttachmentRead()

> **AttachmentRead**(`messageId`, `attachmentId`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`ArrayBuffer`\>\>

Defined in: [src/interfaces/modules/server/IMessagingConnector.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IMessagingConnector.ts#L8)

#### Parameters

##### messageId

`string`

##### attachmentId

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`ArrayBuffer`\>\>

***

### Create()

> **Create**(`subject`, `recipients`, `body`, `attachments`, `repliesTo?`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`Message`](../../../../../types/server/messaging/interfaces/Message.md)[]\>\>

Defined in: [src/interfaces/modules/server/IMessagingConnector.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IMessagingConnector.ts#L16)

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

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`Message`](../../../../../types/server/messaging/interfaces/Message.md)[]\>\>

***

### Delete()

> **Delete**(`messageId`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/modules/server/IMessagingConnector.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IMessagingConnector.ts#L14)

#### Parameters

##### messageId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### Inbox()

> **Inbox**(): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>\>

Defined in: [src/interfaces/modules/server/IMessagingConnector.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IMessagingConnector.ts#L15)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>\>

***

### Read()

> **Read**(`messageId`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)\>\>

Defined in: [src/interfaces/modules/server/IMessagingConnector.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IMessagingConnector.ts#L24)

#### Parameters

##### messageId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)\>\>

***

### Received()

> **Received**(): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>\>

Defined in: [src/interfaces/modules/server/IMessagingConnector.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IMessagingConnector.ts#L25)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>\>

***

### Sent()

> **Sent**(): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>\>

Defined in: [src/interfaces/modules/server/IMessagingConnector.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IMessagingConnector.ts#L26)

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>\>

***

### Thread()

> **Thread**(`messageId?`): `Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessageNode`](../../../../../types/server/messaging/interfaces/ExpandedMessageNode.md)[]\>\>

Defined in: [src/interfaces/modules/server/IMessagingConnector.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/server/IMessagingConnector.ts#L13)

#### Parameters

##### messageId?

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../ICommandResult/interfaces/ICommandResult.md)\<[`ExpandedMessageNode`](../../../../../types/server/messaging/interfaces/ExpandedMessageNode.md)[]\>\>
