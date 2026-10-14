[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/servicehost/services/MessagingService](../README.md) / MessagingInterface

# Class: MessagingInterface

Defined in: [src/ts/servicehost/services/MessagingService/index.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MessagingService/index.ts#L19)

## Extends

- [`BaseService`](../../../base/classes/BaseService.md)

## Implements

- [`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md)

## Constructors

### Constructor

> **new MessagingInterface**(`pid`, `parentPid`, `name`, `host`, `initBroadcast?`): `MessagingInterface`

Defined in: [src/ts/servicehost/services/MessagingService/index.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MessagingService/index.ts#L25)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### name

`string`

##### host

[`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

##### initBroadcast?

(`msg`) => `void`

#### Returns

`MessagingInterface`

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`constructor`](../../../base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`_criticalProcess`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#_criticalprocess)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_criticalProcess`](../../../base/classes/BaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`activated`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#activated)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`activated`](../../../base/classes/BaseService.md#activated)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`dispatch`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#dispatch)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`dispatch`](../../../base/classes/BaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`host`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#host)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`host`](../../../base/classes/BaseService.md#host)

***

### initBroadcast?

> `optional` **initBroadcast?**: (`msg`) => `void`

Defined in: [src/ts/servicehost/base.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L10)

#### Parameters

##### msg

`string`

#### Returns

`void`

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`initBroadcast`](../../../base/classes/BaseService.md#initbroadcast)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`name`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#name)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`name`](../../../base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`parentPid`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#parentpid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`parentPid`](../../../base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`pid`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#pid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`pid`](../../../base/classes/BaseService.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`sourceUrl`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#sourceurl)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`sourceUrl`](../../../base/classes/BaseService.md#sourceurl)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`_disposed`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#_disposed)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_disposed`](../../../base/classes/BaseService.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`MEMORY`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#memory)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`MEMORY`](../../../base/classes/BaseService.md#memory)

***

### serverUrl

#### Get Signature

> **get** **serverUrl**(): `string` \| `undefined`

Defined in: [src/ts/servicehost/services/MessagingService/index.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MessagingService/index.ts#L20)

##### Returns

`string` \| `undefined`

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`serverUrl`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#serverurl)

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/servicehost/base.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L12)

##### Returns

[`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`shell`](../../../base/classes/BaseService.md#shell)

***

### STATE

#### Get Signature

> **get** **STATE**(): [`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L17)

##### Returns

[`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

#### Set Signature

> **set** **STATE**(`value`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L21)

##### Parameters

###### value

[`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

##### Returns

`void`

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`STATE`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#state)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`STATE`](../../../base/classes/BaseService.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`__start`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#__start)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__start`](../../../base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`__stop`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#__stop)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__stop`](../../../base/classes/BaseService.md#__stop)

***

### buildAttachment()

> **buildAttachment**(`filePath`, `onProgress?`): `Promise`\<`File` \| `undefined`\>

Defined in: [src/ts/servicehost/services/MessagingService/index.ts:167](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MessagingService/index.ts#L167)

#### Parameters

##### filePath

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`File` \| `undefined`\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`buildAttachment`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#buildattachment)

***

### checkForMissedMessages()

> **checkForMissedMessages**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/MessagingService/index.ts:251](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MessagingService/index.ts#L251)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`checkForMissedMessages`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#checkformissedmessages)

***

### deactivate()

> **deactivate**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/base.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L30)

#### Parameters

##### broadcast?

(`m`) => `void`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`deactivate`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#deactivate)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`deactivate`](../../../base/classes/BaseService.md#deactivate)

***

### deleteMessage()

> **deleteMessage**(`messageId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/MessagingService/index.ts:130](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MessagingService/index.ts#L130)

#### Parameters

##### messageId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`deleteMessage`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#deletemessage)

***

### downloadAttachments()

> **downloadAttachments**(`message`, `attachments`, `savePath`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/MessagingService/index.ts:183](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MessagingService/index.ts#L183)

#### Parameters

##### message

[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)

##### attachments

[`MessageAttachment`](../../../../../types/server/messaging/interfaces/MessageAttachment.md)[]

##### savePath

`string`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`downloadAttachments`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#downloadattachments)

***

### GetConnector()

> **GetConnector**\<`T`\>(`name`): `T`

Defined in: [src/ts/servicehost/base.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L16)

#### Type Parameters

##### T

`T` *extends* [`IServerConnector`](../../../../../interfaces/modules/IServerManager/classes/IServerConnector.md)

#### Parameters

##### name

`string`

#### Returns

`T`

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`GetConnector`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#getconnector)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`GetConnector`](../../../base/classes/BaseService.md#getconnector)

***

### getInboxListing()

> **getInboxListing**(): `Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

Defined in: [src/ts/servicehost/services/MessagingService/index.ts:92](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MessagingService/index.ts#L92)

#### Returns

`Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`getInboxListing`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#getinboxlisting)

***

### getMessageThread()

> **getMessageThread**(`messageId?`): `Promise`\<[`ExpandedMessageNode`](../../../../../types/server/messaging/interfaces/ExpandedMessageNode.md)[]\>

Defined in: [src/ts/servicehost/services/MessagingService/index.ts:162](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MessagingService/index.ts#L162)

#### Parameters

##### messageId?

`string`

#### Returns

`Promise`\<[`ExpandedMessageNode`](../../../../../types/server/messaging/interfaces/ExpandedMessageNode.md)[]\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`getMessageThread`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#getmessagethread)

***

### getReceivedMessages()

> **getReceivedMessages**(): `Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

Defined in: [src/ts/servicehost/services/MessagingService/index.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MessagingService/index.ts#L75)

#### Returns

`Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`getReceivedMessages`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#getreceivedmessages)

***

### getSentMessages()

> **getSentMessages**(): `Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

Defined in: [src/ts/servicehost/services/MessagingService/index.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MessagingService/index.ts#L57)

#### Returns

`Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md)[]\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`getSentMessages`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#getsentmessages)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`killSelf`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#killself)

#### Inherited from

`BaseService.killSelf`

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L85)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`Log`](../../../base/classes/BaseService.md#log)

***

### readAttachment()

> **readAttachment**(`messageId`, `attachmentId`, `onProgress?`): `Promise`\<`ArrayBuffer` \| `undefined`\>

Defined in: [src/ts/servicehost/services/MessagingService/index.ts:150](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MessagingService/index.ts#L150)

#### Parameters

##### messageId

`string`

##### attachmentId

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`ArrayBuffer` \| `undefined`\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`readAttachment`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#readattachment)

***

### readMessage()

> **readMessage**(`messageId`): `Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/MessagingService/index.ts:135](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MessagingService/index.ts#L135)

#### Parameters

##### messageId

`string`

#### Returns

`Promise`\<[`ExpandedMessage`](../../../../../types/server/messaging/interfaces/ExpandedMessage.md) \| `undefined`\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`readMessage`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#readmessage)

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L91)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`requestFileLock`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#requestfilelock)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`requestFileLock`](../../../base/classes/BaseService.md#requestfilelock)

***

### sendMessage()

> **sendMessage**(`subject`, `recipients`, `body`, `attachments`, `repliesTo?`, `onProgress?`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`Message`](../../../../../types/server/messaging/interfaces/Message.md)[]\>\>

Defined in: [src/ts/servicehost/services/MessagingService/index.ts:110](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MessagingService/index.ts#L110)

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

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`Message`](../../../../../types/server/messaging/interfaces/Message.md)[]\>\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`sendMessage`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#sendmessage)

***

### setSource()

> **setSource**(`source`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:115](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L115)

#### Parameters

##### source

`string`

#### Returns

`void`

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`setSource`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#setsource)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`setSource`](../../../base/classes/BaseService.md#setsource)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/MessagingService/index.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MessagingService/index.ts#L31)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`start`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#start)

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`start`](../../../base/classes/BaseService.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`stop`](../../../base/classes/BaseService.md#stop)

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L103)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IMessagingInterface`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md).[`unlockFile`](../../../../../interfaces/services/IMessagingInterface/interfaces/IMessagingInterface.md#unlockfile)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`unlockFile`](../../../base/classes/BaseService.md#unlockfile)
