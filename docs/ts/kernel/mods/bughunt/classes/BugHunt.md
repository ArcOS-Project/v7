[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/kernel/mods/bughunt](../README.md) / BugHunt

# Class: BugHunt

Defined in: [src/ts/kernel/mods/bughunt/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/bughunt/index.ts#L14)

## Extends

- [`KernelModule`](../../../module/classes/KernelModule.md)

## Implements

- [`IBugHunt`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md)

## Constructors

### Constructor

> **new BugHunt**(`kernel`, `id`): `BugHunt`

Defined in: [src/ts/kernel/mods/bughunt/index.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/bughunt/index.ts#L17)

#### Parameters

##### kernel

[`IWaveKernel`](../../../../../interfaces/IWaveKernel/interfaces/IWaveKernel.md)

##### id

`string`

#### Returns

`BugHunt`

#### Overrides

[`KernelModule`](../../../module/classes/KernelModule.md).[`constructor`](../../../module/classes/KernelModule.md#constructor)

## Properties

### id

> **id**: `string`

Defined in: [src/ts/kernel/module/index.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L9)

#### Implementation of

[`IBugHunt`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md).[`id`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md#id)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`id`](../../../module/classes/KernelModule.md#id)

***

### IS\_KMOD

> `protected` `readonly` **IS\_KMOD**: `true` = `true`

Defined in: [src/ts/kernel/module/index.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L8)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`IS_KMOD`](../../../module/classes/KernelModule.md#is_kmod)

***

### state?

> `protected` `optional` **state?**: [`IStateHandler`](../../../../../interfaces/IStateHandler/interfaces/IStateHandler.md)

Defined in: [src/ts/kernel/module/index.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L10)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`state`](../../../module/classes/KernelModule.md#state)

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBugHunt`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md).[`__init`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md#__init)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`__init`](../../../module/classes/KernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/bughunt/index.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/bughunt/index.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IBugHunt`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md).[`_init`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md#_init)

#### Overrides

[`KernelModule`](../../../module/classes/KernelModule.md).[`_init`](../../../module/classes/KernelModule.md#_init)

***

### createReport()

> **createReport**(`options?`, `app?`, `storeItemId?`): [`OutgoingBugReport`](../../../../../types/server/bughunt/interfaces/OutgoingBugReport.md)

Defined in: [src/ts/kernel/mods/bughunt/index.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/bughunt/index.ts#L25)

#### Parameters

##### options?

[`ReportOptions`](../../../../../types/server/bughunt/interfaces/ReportOptions.md) = `defaultReportOptions`

##### app?

[`App`](../../../../../types/apps/app/interfaces/App.md)

##### storeItemId?

`string`

#### Returns

[`OutgoingBugReport`](../../../../../types/server/bughunt/interfaces/OutgoingBugReport.md)

#### Implementation of

[`IBugHunt`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md).[`createReport`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md#createreport)

***

### getPublicBugReports()

> **getPublicBugReports**(`token`): `Promise`\<[`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

Defined in: [src/ts/kernel/mods/bughunt/index.ts:78](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/bughunt/index.ts#L78)

#### Parameters

##### token

`string`

#### Returns

`Promise`\<[`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

#### Implementation of

[`IBugHunt`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md).[`getPublicBugReports`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md#getpublicbugreports)

***

### getToken()

> **getToken**(): `string`

Defined in: [src/ts/kernel/mods/bughunt/index.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/bughunt/index.ts#L59)

#### Returns

`string`

#### Implementation of

[`IBugHunt`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md).[`getToken`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md#gettoken)

***

### getUserBugReports()

> **getUserBugReports**(`token`): `Promise`\<[`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

Defined in: [src/ts/kernel/mods/bughunt/index.ts:68](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/bughunt/index.ts#L68)

#### Parameters

##### token

`string`

#### Returns

`Promise`\<[`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

#### Implementation of

[`IBugHunt`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md).[`getUserBugReports`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md#getuserbugreports)

***

### isKmod()

> **isKmod**(): `void`

Defined in: [src/ts/kernel/module/index.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L36)

#### Returns

`void`

#### Implementation of

[`IBugHunt`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md).[`isKmod`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md#iskmod)

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`isKmod`](../../../module/classes/KernelModule.md#iskmod)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/module/index.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/module/index.ts#L30)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`KernelModule`](../../../module/classes/KernelModule.md).[`Log`](../../../module/classes/KernelModule.md#log)

***

### sendReport()

> **sendReport**(`outgoing`, `token?`, `options?`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/bughunt/index.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/bughunt/index.ts#L47)

#### Parameters

##### outgoing

[`OutgoingBugReport`](../../../../../types/server/bughunt/interfaces/OutgoingBugReport.md)

##### token?

`string` = `...`

##### options?

[`ReportOptions`](../../../../../types/server/bughunt/interfaces/ReportOptions.md) = `defaultReportOptions`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IBugHunt`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md).[`sendReport`](../../../../../interfaces/modules/IBugHunt/interfaces/IBugHunt.md#sendreport)
