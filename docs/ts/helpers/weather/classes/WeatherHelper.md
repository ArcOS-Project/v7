[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/helpers/weather](../README.md) / WeatherHelper

# Class: WeatherHelper

Defined in: [src/ts/helpers/weather.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/weather.ts#L5)

## Extends

- [`BaseHelper`](../../classes/BaseHelper.md)

## Constructors

### Constructor

> **new WeatherHelper**(): `WeatherHelper`

#### Returns

`WeatherHelper`

#### Inherited from

[`BaseHelper`](../../classes/BaseHelper.md).[`constructor`](../../classes/BaseHelper.md#constructor)

## Properties

### FriendlyName

> `static` **FriendlyName**: `string` = `"Weather info helper"`

Defined in: [src/ts/helpers/weather.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/weather.ts#L6)

#### Overrides

[`BaseHelper`](../../classes/BaseHelper.md).[`FriendlyName`](../../classes/BaseHelper.md#friendlyname)

***

### weatherClasses

> `static` **weatherClasses**: `Record`\<`number`, `string`\>

Defined in: [src/ts/helpers/weather.ts:263](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/weather.ts#L263)

***

### weatherMetadata

> `static` **weatherMetadata**: `Record`\<`number`, [`WeatherMeta`](../../../../types/external/weather/interfaces/WeatherMeta.md)\>

Defined in: [src/ts/helpers/weather.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/weather.ts#L44)

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

### getWeather()

> `static` **getWeather**(): `Promise`\<[`WeatherInformation`](../../../../types/external/weather/type-aliases/WeatherInformation.md)\>

Defined in: [src/ts/helpers/weather.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/weather.ts#L8)

#### Returns

`Promise`\<[`WeatherInformation`](../../../../types/external/weather/type-aliases/WeatherInformation.md)\>

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
