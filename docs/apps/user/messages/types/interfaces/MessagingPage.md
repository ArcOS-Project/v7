[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [apps/user/messages/types](../README.md) / MessagingPage

# Interface: MessagingPage

Defined in: [src/apps/user/messages/types.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/types.ts#L5)

## Properties

### icon

> **icon**: `string`

Defined in: [src/apps/user/messages/types.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/types.ts#L7)

***

### name

> **name**: `string`

Defined in: [src/apps/user/messages/types.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/types.ts#L6)

***

### supplier

> **supplier**: (`process`) => [`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[] \| `Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

Defined in: [src/apps/user/messages/types.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/apps/user/messages/types.ts#L8)

#### Parameters

##### process

[`IMessagingAppRuntime`](../../../../../interfaces/runtimes/IMessagingAppRuntime/interfaces/IMessagingAppRuntime.md)

#### Returns

[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[] \| `Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>
