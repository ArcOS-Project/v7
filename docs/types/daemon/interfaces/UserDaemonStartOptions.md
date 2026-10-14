[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [types/daemon](../README.md) / UserDaemonStartOptions

# Interface: UserDaemonStartOptions

Defined in: [src/types/daemon/index.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/daemon/index.ts#L23)

## Properties

### onUserInfo

> **onUserInfo**: (`info`) => [`MaybePromise`](../../shared/common/type-aliases/MaybePromise.md)\<[`ICommandResult`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/types/daemon/index.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/daemon/index.ts#L26)

#### Parameters

##### info

[`UserInfo`](../../user/interfaces/UserInfo.md)

#### Returns

[`MaybePromise`](../../shared/common/type-aliases/MaybePromise.md)\<[`ICommandResult`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### stageCallbacks

> **stageCallbacks**: [`UserDaemonInitCallbacks`](../type-aliases/UserDaemonInitCallbacks.md)

Defined in: [src/types/daemon/index.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/daemon/index.ts#L25)

***

### startStages

> **startStages**: ([`UserDaemonInitStage`](../type-aliases/UserDaemonInitStage.md) \| `undefined`)[]

Defined in: [src/types/daemon/index.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/daemon/index.ts#L24)
