[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/IHelpersUserContext](../README.md) / IHelpersUserContext

# Interface: IHelpersUserContext

Defined in: [src/interfaces/contexts/IHelpersUserContext.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IHelpersUserContext.ts#L10)

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

### Confirm()

> **Confirm**(`title`, `message`, `no`, `yes`, `image?`, `pid?`): `Promise`\<`unknown`\>

Defined in: [src/interfaces/contexts/IHelpersUserContext.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IHelpersUserContext.ts#L21)

#### Parameters

##### title

`string`

##### message

`string`

##### no

`string`

##### yes

`string`

##### image?

`string`

##### pid?

`number`

#### Returns

`Promise`\<`unknown`\>

***

### GlobalLoadIndicator()

> **GlobalLoadIndicator**(`caption?`, `pid?`, `progress?`): `Promise`\<\{ `caption`: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>; `incrementProgress?`: (`amount?`) => `void`; `progress?`: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`GlobalLoadIndicatorProgress`](../../../../apps/components/globalloadindicator/types/interfaces/GlobalLoadIndicatorProgress.md) \| `undefined`\>; `stop`: () => `Promise`\<`void`\>; \}\>

Defined in: [src/interfaces/contexts/IHelpersUserContext.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IHelpersUserContext.ts#L11)

#### Parameters

##### caption?

`string`

##### pid?

`number`

##### progress?

`Partial`\<[`GlobalLoadIndicatorProgress`](../../../../apps/components/globalloadindicator/types/interfaces/GlobalLoadIndicatorProgress.md)\>

#### Returns

`Promise`\<\{ `caption`: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>; `incrementProgress?`: (`amount?`) => `void`; `progress?`: [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`GlobalLoadIndicatorProgress`](../../../../apps/components/globalloadindicator/types/interfaces/GlobalLoadIndicatorProgress.md) \| `undefined`\>; `stop`: () => `Promise`\<`void`\>; \}\>

***

### IconEditor()

> **IconEditor**(`initialValue`, `defaultIcon?`, `name?`): `Promise`\<`string`\>

Defined in: [src/interfaces/contexts/IHelpersUserContext.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IHelpersUserContext.ts#L24)

#### Parameters

##### initialValue

`string`

##### defaultIcon?

`string`

##### name?

`string`

#### Returns

`Promise`\<`string`\>

***

### IconPicker()

> **IconPicker**(`data`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/interfaces/contexts/IHelpersUserContext.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IHelpersUserContext.ts#L23)

#### Parameters

##### data

`Omit`\<[`IconPickerData`](../../../../apps/components/iconpicker/types/interfaces/IconPickerData.md), `"returnId"`\>

#### Returns

`Promise`\<`string` \| `undefined`\>

***

### iHaveFeedback()

> **iHaveFeedback**(`process`): `void`

Defined in: [src/interfaces/contexts/IHelpersUserContext.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IHelpersUserContext.ts#L28)

#### Parameters

##### process

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md)

#### Returns

`void`

***

### openWebpage()

> **openWebpage**(`href`): `void`

Defined in: [src/interfaces/contexts/IHelpersUserContext.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IHelpersUserContext.ts#L29)

#### Parameters

##### href

`string`

#### Returns

`void`

***

### ParentIs()

> **ParentIs**(`proc`, `appId`): `boolean` \| `undefined`

Defined in: [src/interfaces/contexts/IHelpersUserContext.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IHelpersUserContext.ts#L25)

#### Parameters

##### proc

[`IAppProcess`](../../../IAppProcess/interfaces/IAppProcess.md)

##### appId

`string`

#### Returns

`boolean` \| `undefined`

***

### safeModeNotice()

> **safeModeNotice**(): `void`

Defined in: [src/interfaces/contexts/IHelpersUserContext.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IHelpersUserContext.ts#L27)

#### Returns

`void`

***

### submitBetaFeedback()

> **submitBetaFeedback**(`title`, `message`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/contexts/IHelpersUserContext.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IHelpersUserContext.ts#L30)

#### Parameters

##### title

`string`

##### message

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### TerminalWindow()

> **TerminalWindow**(`pid?`): `Promise`\<[`ExpandedTerminal`](../../../../types/terminal/type-aliases/ExpandedTerminal.md) \| `undefined`\>

Defined in: [src/interfaces/contexts/IHelpersUserContext.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IHelpersUserContext.ts#L22)

#### Parameters

##### pid?

`number`

#### Returns

`Promise`\<[`ExpandedTerminal`](../../../../types/terminal/type-aliases/ExpandedTerminal.md) \| `undefined`\>

***

### waitForLeaveInvocationAllow()

> **waitForLeaveInvocationAllow**(): `Promise`\<`void`\>

Defined in: [src/interfaces/contexts/IHelpersUserContext.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/IHelpersUserContext.ts#L26)

#### Returns

`Promise`\<`void`\>
