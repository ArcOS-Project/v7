[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [ts/helpers](../README.md) / BaseHelper

# Class: BaseHelper

Defined in: [src/ts/helpers/index.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/index.ts#L5)

## Extended by

- [`CalendarHelper`](../calendar/classes/CalendarHelper.md)
- [`ProcessesHelper`](../processes/classes/ProcessesHelper.md)
- [`WeatherHelper`](../weather/classes/WeatherHelper.md)

## Constructors

### Constructor

> **new BaseHelper**(): `BaseHelper`

#### Returns

`BaseHelper`

## Properties

### FriendlyName

> `static` **FriendlyName**: `string` = `"Unknown helper"`

Defined in: [src/ts/helpers/index.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/index.ts#L6)

## Accessors

### userPreferences

#### Get Signature

> **get** `protected` `static` **userPreferences**(): [`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/helpers/index.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/index.ts#L8)

##### Returns

[`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<[`UserPreferences`](../../../types/user/interfaces/UserPreferences.md)\>

## Methods

### Log()

> `protected` `static` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/helpers/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/index.ts#L12)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../types/shared/logging/enumerations/LogLevel.md)

#### Returns

`void`
