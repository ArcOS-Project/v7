[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/modules/IBugHunt](../README.md) / IBugHunt

# Interface: IBugHunt

Defined in: [src/interfaces/modules/IBugHunt.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IBugHunt.ts#L6)

## Extends

- [`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md)

## Properties

### id

> **id**: `string`

Defined in: [src/interfaces/modules/IKernelModule.ts:3](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L3)

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`id`](../../IKernelModule/interfaces/IKernelModule.md#id)

## Methods

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/modules/IKernelModule.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L5)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`__init`](../../IKernelModule/interfaces/IKernelModule.md#__init)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/modules/IBugHunt.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IBugHunt.ts#L7)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`_init`](../../IKernelModule/interfaces/IKernelModule.md#_init)

***

### createReport()

> **createReport**(`options?`, `app?`, `storeItemId?`): [`OutgoingBugReport`](../../../../types/server/bughunt/interfaces/OutgoingBugReport.md)

Defined in: [src/interfaces/modules/IBugHunt.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IBugHunt.ts#L8)

#### Parameters

##### options?

[`ReportOptions`](../../../../types/server/bughunt/interfaces/ReportOptions.md)

##### app?

[`App`](../../../../types/apps/app/interfaces/App.md)

##### storeItemId?

`string`

#### Returns

[`OutgoingBugReport`](../../../../types/server/bughunt/interfaces/OutgoingBugReport.md)

***

### getPublicBugReports()

> **getPublicBugReports**(`token`): `Promise`\<[`BugReport`](../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

Defined in: [src/interfaces/modules/IBugHunt.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IBugHunt.ts#L12)

#### Parameters

##### token

`string`

#### Returns

`Promise`\<[`BugReport`](../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

***

### getToken()

> **getToken**(): `string`

Defined in: [src/interfaces/modules/IBugHunt.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IBugHunt.ts#L10)

#### Returns

`string`

***

### getUserBugReports()

> **getUserBugReports**(`token`): `Promise`\<[`BugReport`](../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

Defined in: [src/interfaces/modules/IBugHunt.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IBugHunt.ts#L11)

#### Parameters

##### token

`string`

#### Returns

`Promise`\<[`BugReport`](../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

***

### isKmod()

> **isKmod**(): `void`

Defined in: [src/interfaces/modules/IKernelModule.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IKernelModule.ts#L6)

#### Returns

`void`

#### Inherited from

[`IKernelModule`](../../IKernelModule/interfaces/IKernelModule.md).[`isKmod`](../../IKernelModule/interfaces/IKernelModule.md#iskmod)

***

### sendReport()

> **sendReport**(`outgoing`, `token?`, `options?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/modules/IBugHunt.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/modules/IBugHunt.ts#L9)

#### Parameters

##### outgoing

[`OutgoingBugReport`](../../../../types/server/bughunt/interfaces/OutgoingBugReport.md)

##### token?

`string`

##### options?

[`ReportOptions`](../../../../types/server/bughunt/interfaces/ReportOptions.md)

#### Returns

`Promise`\<`boolean`\>
