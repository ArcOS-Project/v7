[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/helpers/processes](../README.md) / ProcessesHelper

# Class: ProcessesHelper

Defined in: [src/ts/helpers/processes.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/processes.ts#L7)

## Extends

- [`BaseHelper`](../../classes/BaseHelper.md)

## Constructors

### Constructor

> **new ProcessesHelper**(): `ProcessesHelper`

#### Returns

`ProcessesHelper`

#### Inherited from

[`BaseHelper`](../../classes/BaseHelper.md).[`constructor`](../../classes/BaseHelper.md#constructor)

## Properties

### FriendlyName

> `static` **FriendlyName**: `string` = `"Unknown helper"`

Defined in: [src/ts/helpers/index.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/index.ts#L6)

#### Inherited from

[`BaseHelper`](../../classes/BaseHelper.md).[`FriendlyName`](../../classes/BaseHelper.md#friendlyname)

## Accessors

### userPreferences

#### Get Signature

> **get** `protected` `static` **userPreferences**(): [`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/helpers/index.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/index.ts#L8)

##### Returns

[`ReadableStore`](../../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)\>

#### Inherited from

[`BaseHelper`](../../classes/BaseHelper.md).[`userPreferences`](../../classes/BaseHelper.md#userpreferences)

## Methods

### IsAnyAppProcess()

> `static` **IsAnyAppProcess**(`proc`): proc is AppProcess \| ThirdPartyAppProcess \| ThirdPartyProcess

Defined in: [src/ts/helpers/processes.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/processes.ts#L8)

#### Parameters

##### proc

[`IProcess`](../../../../interfaces/IProcess/interfaces/IProcess.md)

#### Returns

proc is AppProcess \| ThirdPartyAppProcess \| ThirdPartyProcess

***

### IsAnyGraphicalAppProcess()

> `static` **IsAnyGraphicalAppProcess**(`proc`): proc is AppProcess \| ThirdPartyAppProcess

Defined in: [src/ts/helpers/processes.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/processes.ts#L12)

#### Parameters

##### proc

[`IProcess`](../../../../interfaces/IProcess/interfaces/IProcess.md)

#### Returns

proc is AppProcess \| ThirdPartyAppProcess

***

### IsAnyThirdPartyProcess()

> `static` **IsAnyThirdPartyProcess**(`proc`): proc is ThirdPartyAppProcess \| ThirdPartyProcess

Defined in: [src/ts/helpers/processes.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/processes.ts#L16)

#### Parameters

##### proc

[`IProcess`](../../../../interfaces/IProcess/interfaces/IProcess.md)

#### Returns

proc is ThirdPartyAppProcess \| ThirdPartyProcess

***

### Log()

> `protected` `static` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/helpers/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/index.ts#L12)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../types/shared/logging/enumerations/LogLevel.md)

#### Returns

`void`

#### Inherited from

[`BaseHelper`](../../classes/BaseHelper.md).[`Log`](../../classes/BaseHelper.md#log)
