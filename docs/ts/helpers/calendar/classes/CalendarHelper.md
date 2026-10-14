[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/helpers/calendar](../README.md) / CalendarHelper

# Class: CalendarHelper

Defined in: [src/ts/helpers/calendar.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/calendar.ts#L5)

## Extends

- [`BaseHelper`](../../classes/BaseHelper.md)

## Constructors

### Constructor

> **new CalendarHelper**(): `CalendarHelper`

#### Returns

`CalendarHelper`

#### Inherited from

[`BaseHelper`](../../classes/BaseHelper.md).[`constructor`](../../classes/BaseHelper.md#constructor)

## Properties

### FriendlyName

> `static` **FriendlyName**: `string` = `"Calendar helper"`

Defined in: [src/ts/helpers/calendar.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/calendar.ts#L6)

#### Overrides

[`BaseHelper`](../../classes/BaseHelper.md).[`FriendlyName`](../../classes/BaseHelper.md#friendlyname)

***

### longWeekDays

> `static` **longWeekDays**: `string`[]

Defined in: [src/ts/helpers/calendar.ts:70](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/calendar.ts#L70)

***

### shortWeekDays

> `static` **shortWeekDays**: `string`[]

Defined in: [src/ts/helpers/calendar.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/calendar.ts#L71)

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

### getCalendarMonth()

> `static` **getCalendarMonth**(`date?`): [`CalendarMonth`](../../../../types/shared/calendar/interfaces/CalendarMonth.md)

Defined in: [src/ts/helpers/calendar.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/helpers/calendar.ts#L8)

#### Parameters

##### date?

`string` = `...`

#### Returns

[`CalendarMonth`](../../../../types/shared/calendar/interfaces/CalendarMonth.md)

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
