[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/daemon/contexts/helpers](../README.md) / HelpersUserContext

# Class: HelpersUserContext

Defined in: [src/ts/daemon/contexts/helpers.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/helpers.ts#L23)

## Extends

- [`UserContext`](../../../context/classes/UserContext.md)

## Implements

- [`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md)

## Constructors

### Constructor

> **new HelpersUserContext**(`id`, `daemon`): `HelpersUserContext`

Defined in: [src/ts/daemon/contexts/helpers.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/helpers.ts#L24)

#### Parameters

##### id

`string`

##### daemon

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`HelpersUserContext`

#### Overrides

[`UserContext`](../../../context/classes/UserContext.md).[`constructor`](../../../context/classes/UserContext.md#constructor)

## Accessors

### \_disposed

#### Get Signature

> **get** `protected` **\_disposed**(): `boolean`

Defined in: [src/ts/daemon/context.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L59)

##### Returns

`boolean`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_disposed`](../../../context/classes/UserContext.md#_disposed)

***

### appStorage

#### Get Signature

> **get** `protected` **appStorage**(): () => [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L51)

##### Returns

() => [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`appStorage`](../../../context/classes/UserContext.md#appstorage)

***

### initialized

#### Get Signature

> **get** `protected` **initialized**(): `boolean`

Defined in: [src/ts/daemon/context.ts:83](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L83)

##### Returns

`boolean`

#### Set Signature

> **set** `protected` **initialized**(`value`): `void`

Defined in: [src/ts/daemon/context.ts:87](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L87)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`initialized`](../../../context/classes/UserContext.md#initialized)

***

### pid

#### Get Signature

> **get** `protected` **pid**(): `number`

Defined in: [src/ts/daemon/context.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L63)

##### Returns

`number`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`pid`](../../../context/classes/UserContext.md#pid)

***

### safeMode

#### Get Signature

> **get** `protected` **safeMode**(): `boolean`

Defined in: [src/ts/daemon/context.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L55)

##### Returns

`boolean`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`safeMode`](../../../context/classes/UserContext.md#safemode)

***

### serviceHost

#### Get Signature

> **get** `protected` **serviceHost**(): [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L47)

##### Returns

[`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md) \| `undefined`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`serviceHost`](../../../context/classes/UserContext.md#servicehost)

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L12)

##### Returns

[`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`shell`](../../../context/classes/UserContext.md#shell)

***

### userInfo

#### Get Signature

> **get** `protected` **userInfo**(): [`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

Defined in: [src/ts/daemon/context.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L67)

##### Returns

[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

#### Set Signature

> **set** `protected` **userInfo**(`value`): `void`

Defined in: [src/ts/daemon/context.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L71)

##### Parameters

###### value

[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

##### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`userInfo`](../../../context/classes/UserContext.md#userinfo)

***

### username

#### Get Signature

> **get** `protected` **username**(): `string`

Defined in: [src/ts/daemon/context.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L75)

##### Returns

`string`

#### Set Signature

> **set** `protected` **username**(`username`): `void`

Defined in: [src/ts/daemon/context.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L79)

##### Parameters

###### username

`string`

##### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`username`](../../../context/classes/UserContext.md#username)

## Methods

### \_\_deactivate()

> **\_\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L31)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md).[`__deactivate`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md#__deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__deactivate`](../../../context/classes/UserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md).[`__init`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md#__init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__init`](../../../context/classes/UserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md).[`_deactivate`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md#_deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_deactivate`](../../../context/classes/UserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L27)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md).[`_init`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md#_init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_init`](../../../context/classes/UserContext.md#_init)

***

### Confirm()

> **Confirm**(`title`, `message`, `no`, `yes`, `image?`, `pid?`): `Promise`\<`unknown`\>

Defined in: [src/ts/daemon/contexts/helpers.ts:77](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/helpers.ts#L77)

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

`string` = `"QuestionIcon"`

##### pid?

`number`

#### Returns

`Promise`\<`unknown`\>

#### Implementation of

[`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md).[`Confirm`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md#confirm)

***

### GlobalLoadIndicator()

> **GlobalLoadIndicator**(`caption?`, `pid?`, `progress?`): `Promise`\<\{ `caption`: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>; `incrementProgress?`: `undefined`; `progress?`: `undefined`; `stop`: () => `Promise`\<`void`\>; \} \| \{ `caption`: `any`; `incrementProgress`: (`amount`) => `void`; `progress`: `any`; `stop`: () => `Promise`\<`void`\>; \}\>

Defined in: [src/ts/daemon/contexts/helpers.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/helpers.ts#L28)

#### Parameters

##### caption?

`string`

##### pid?

`number`

##### progress?

`Partial`\<[`GlobalLoadIndicatorProgress`](../../../../../apps/components/globalloadindicator/types/interfaces/GlobalLoadIndicatorProgress.md)\>

#### Returns

`Promise`\<\{ `caption`: [`ReadableStore`](../../../../../types/shared/writable/type-aliases/ReadableStore.md)\<`string`\>; `incrementProgress?`: `undefined`; `progress?`: `undefined`; `stop`: () => `Promise`\<`void`\>; \} \| \{ `caption`: `any`; `incrementProgress`: (`amount`) => `void`; `progress`: `any`; `stop`: () => `Promise`\<`void`\>; \}\>

#### Implementation of

[`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md).[`GlobalLoadIndicator`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md#globalloadindicator)

***

### IconEditor()

> **IconEditor**(`initialValue`, `defaultIcon?`, `name?`): `Promise`\<`string`\>

Defined in: [src/ts/daemon/contexts/helpers.ts:141](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/helpers.ts#L141)

#### Parameters

##### initialValue

`string`

##### defaultIcon?

`string`

##### name?

`string`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md).[`IconEditor`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md#iconeditor)

***

### IconPicker()

> **IconPicker**(`data`): `Promise`\<`string` \| `undefined`\>

Defined in: [src/ts/daemon/contexts/helpers.ts:114](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/helpers.ts#L114)

#### Parameters

##### data

`Omit`\<[`IconPickerData`](../../../../../apps/components/iconpicker/types/interfaces/IconPickerData.md), `"returnId"`\>

#### Returns

`Promise`\<`string` \| `undefined`\>

#### Implementation of

[`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md).[`IconPicker`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md#iconpicker)

***

### iHaveFeedback()

> **iHaveFeedback**(`process`): `void`

Defined in: [src/ts/daemon/contexts/helpers.ts:194](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/helpers.ts#L194)

#### Parameters

##### process

[`IAppProcess`](../../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

#### Returns

`void`

#### Implementation of

[`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md).[`iHaveFeedback`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md#ihavefeedback)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/daemon/context.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L41)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`Log`](../../../context/classes/UserContext.md#log)

***

### openWebpage()

> **openWebpage**(`href`): `void`

Defined in: [src/ts/daemon/contexts/helpers.ts:244](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/helpers.ts#L244)

#### Parameters

##### href

`string`

#### Returns

`void`

#### Implementation of

[`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md).[`openWebpage`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md#openwebpage)

***

### ParentIs()

> **ParentIs**(`proc`, `appId`): `boolean` \| `undefined`

Defined in: [src/ts/daemon/contexts/helpers.ts:164](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/helpers.ts#L164)

#### Parameters

##### proc

[`IAppProcess`](../../../../../interfaces/IAppProcess/interfaces/IAppProcess.md)

##### appId

`string`

#### Returns

`boolean` \| `undefined`

#### Implementation of

[`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md).[`ParentIs`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md#parentis)

***

### safeModeNotice()

> **safeModeNotice**(): `void`

Defined in: [src/ts/daemon/contexts/helpers.ts:177](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/helpers.ts#L177)

#### Returns

`void`

#### Implementation of

[`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md).[`safeModeNotice`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md#safemodenotice)

***

### submitBetaFeedback()

> **submitBetaFeedback**(`title`, `message`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/daemon/contexts/helpers.ts:223](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/helpers.ts#L223)

#### Parameters

##### title

`string`

##### message

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md).[`submitBetaFeedback`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md#submitbetafeedback)

***

### TerminalWindow()

> **TerminalWindow**(`pid?`): `Promise`\<[`ExpandedTerminal`](../../../../../types/terminal/type-aliases/ExpandedTerminal.md) \| `undefined`\>

Defined in: [src/ts/daemon/contexts/helpers.ts:96](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/helpers.ts#L96)

#### Parameters

##### pid?

`number` = `...`

#### Returns

`Promise`\<[`ExpandedTerminal`](../../../../../types/terminal/type-aliases/ExpandedTerminal.md) \| `undefined`\>

#### Implementation of

[`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md).[`TerminalWindow`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md#terminalwindow)

***

### waitForLeaveInvocationAllow()

> **waitForLeaveInvocationAllow**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/helpers.ts:169](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/helpers.ts#L169)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IHelpersUserContext`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md).[`waitForLeaveInvocationAllow`](../../../../../interfaces/contexts/IHelpersUserContext/interfaces/IHelpersUserContext.md#waitforleaveinvocationallow)
