[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [ts/bughunt](../README.md) / BugHunt

# Class: BugHunt

Defined in: [src/ts/bughunt/index.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/bughunt/index.ts#L12)

## Extends

- [`KernelModule`](../../kernel/module/classes/KernelModule.md)

## Constructors

### Constructor

> **new BugHunt**(`kernel`, `id`): `BugHunt`

Defined in: [src/ts/bughunt/index.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/bughunt/index.ts#L17)

#### Parameters

##### kernel

[`WaveKernel`](../../kernel/classes/WaveKernel.md)

##### id

`string`

#### Returns

`BugHunt`

#### Overrides

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`constructor`](../../kernel/module/classes/KernelModule.md#constructor)

## Properties

### env

> **env**: [`Environment`](../../kernel/env/classes/Environment.md)

Defined in: [src/ts/bughunt/index.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/bughunt/index.ts#L14)

***

### handler

> **handler**: [`ProcessHandler`](../../process/handler/classes/ProcessHandler.md)

Defined in: [src/ts/bughunt/index.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/bughunt/index.ts#L15)

***

### id

> **id**: `string`

Defined in: [src/ts/kernel/module/index.ts:8](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L8)

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`id`](../../kernel/module/classes/KernelModule.md#id)

***

### IS\_KMOD

> `protected` `readonly` **IS\_KMOD**: `true` = `true`

Defined in: [src/ts/kernel/module/index.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L6)

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`IS_KMOD`](../../kernel/module/classes/KernelModule.md#is_kmod)

***

### kernel

> `protected` **kernel**: [`WaveKernel`](../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/kernel/module/index.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L7)

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`kernel`](../../kernel/module/classes/KernelModule.md#kernel)

***

### server

> **server**: [`ServerManager`](../../server/classes/ServerManager.md)

Defined in: [src/ts/bughunt/index.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/bughunt/index.ts#L13)

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/module/index.ts:24](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L24)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`__init`](../../kernel/module/classes/KernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/bughunt/index.ts:25](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/bughunt/index.ts#L25)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`_init`](../../kernel/module/classes/KernelModule.md#_init)

***

### createReport()

> **createReport**(`options`): [`OutgoingBugReport`](../../../types/bughunt/interfaces/OutgoingBugReport.md)

Defined in: [src/ts/bughunt/index.ts:27](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/bughunt/index.ts#L27)

#### Parameters

##### options

[`ReportOptions`](../../../types/bughunt/interfaces/ReportOptions.md) = `defaultReportOptions`

#### Returns

[`OutgoingBugReport`](../../../types/bughunt/interfaces/OutgoingBugReport.md)

***

### getPublicBugReports()

> **getPublicBugReports**(): `Promise`\<[`BugReport`](../../../types/bughunt/interfaces/BugReport.md)[]\>

Defined in: [src/ts/bughunt/index.ts:77](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/bughunt/index.ts#L77)

#### Returns

`Promise`\<[`BugReport`](../../../types/bughunt/interfaces/BugReport.md)[]\>

***

### getToken()

> **getToken**(): `string`

Defined in: [src/ts/bughunt/index.ts:58](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/bughunt/index.ts#L58)

#### Returns

`string`

***

### getUserBugReports()

> **getUserBugReports**(`token`): `Promise`\<[`BugReport`](../../../types/bughunt/interfaces/BugReport.md)[]\>

Defined in: [src/ts/bughunt/index.ts:67](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/bughunt/index.ts#L67)

#### Parameters

##### token

`string`

#### Returns

`Promise`\<[`BugReport`](../../../types/bughunt/interfaces/BugReport.md)[]\>

***

### Log()

> `protected` **Log**(`message`, `level`): `void`

Defined in: [src/ts/kernel/module/index.ts:30](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/kernel/module/index.ts#L30)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`KernelModule`](../../kernel/module/classes/KernelModule.md).[`Log`](../../kernel/module/classes/KernelModule.md#log)

***

### sendReport()

> **sendReport**(`outgoing`, `token`, `options`): `Promise`\<`boolean`\>

Defined in: [src/ts/bughunt/index.ts:46](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/bughunt/index.ts#L46)

#### Parameters

##### outgoing

[`OutgoingBugReport`](../../../types/bughunt/interfaces/OutgoingBugReport.md)

##### token

`string` = `...`

##### options

[`ReportOptions`](../../../types/bughunt/interfaces/ReportOptions.md) = `defaultReportOptions`

#### Returns

`Promise`\<`boolean`\>
