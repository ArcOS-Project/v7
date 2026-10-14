[**"ArcOS**](../../../../../../README.md)

***

["ArcOS](../../../../../../modules.md) / [types/libraries/dayjs](../../../README.md) / [dayjs](../README.md) / Dayjs

# Class: Dayjs

Defined in: [src/types/libraries/dayjs.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L36)

## Constructors

### Constructor

> **new Dayjs**(`config?`): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L37)

#### Parameters

##### config?

`string` \| `number` \| `Date` \| `Dayjs` \| `null`

#### Returns

`Dayjs`

## Methods

### add()

> **add**(`value`, `unit?`): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:243](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L243)

Returns a cloned Day.js object with a specified amount of time added.
```
dayjs().add(7, 'day')// => Dayjs
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/manipulate/add

#### Parameters

##### value

`number`

##### unit?

[`ManipulateType`](../type-aliases/ManipulateType.md)

#### Returns

`Dayjs`

***

### clone()

> **clone**(): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L46)

All Day.js objects are immutable. Still, `dayjs#clone` can create a clone of the current object if you need one.
```
dayjs().clone()// => Dayjs
dayjs(dayjs('2019-01-25')) // passing a Dayjs object to a constructor will also clone it
```
Docs: https://day.js.org/docs/en/parse/dayjs-clone

#### Returns

`Dayjs`

***

### date()

#### Call Signature

> **date**(): `number`

Defined in: [src/types/libraries/dayjs.ts:100](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L100)

Get the date of the month.
```
dayjs().date()// => 1-31
```
Docs: https://day.js.org/docs/en/get-set/date

##### Returns

`number`

#### Call Signature

> **date**(`value`): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:110](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L110)

Set the date of the month.

Accepts numbers from 1 to 31. If the range is exceeded, it will bubble up to the next months.
```
dayjs().date(1)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/date

##### Parameters

###### value

`number`

##### Returns

`Dayjs`

***

### day()

#### Call Signature

> **day**(): `0` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6`

Defined in: [src/types/libraries/dayjs.ts:120](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L120)

Get the day of the week.

Returns numbers from 0 (Sunday) to 6 (Saturday).
```
dayjs().day()// 0-6
```
Docs: https://day.js.org/docs/en/get-set/day

##### Returns

`0` \| `1` \| `2` \| `3` \| `4` \| `5` \| `6`

#### Call Signature

> **day**(`value`): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:130](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L130)

Set the day of the week.

Accepts numbers from 0 (Sunday) to 6 (Saturday). If the range is exceeded, it will bubble up to next weeks.
```
dayjs().day(0)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/day

##### Parameters

###### value

`number`

##### Returns

`Dayjs`

***

### daysInMonth()

> **daysInMonth**(): `number`

Defined in: [src/types/libraries/dayjs.ts:335](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L335)

Get the number of days in the current month.
```
dayjs('2019-01-25').daysInMonth() // 31
```
Docs: https://day.js.org/docs/en/display/days-in-month

#### Returns

`number`

***

### diff()

> **diff**(`date?`, `unit?`, `float?`): `number`

Defined in: [src/types/libraries/dayjs.ts:306](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L306)

This indicates the difference between two date-time in the specified unit.

To get the difference in milliseconds, use `dayjs#diff`
```
const date1 = dayjs('2019-01-25')
const date2 = dayjs('2018-06-05')
date1.diff(date2) // 20214000000 default milliseconds
date1.diff() // milliseconds to current time
```

To get the difference in another unit of measurement, pass that measurement as the second argument.
```
const date1 = dayjs('2019-01-25')
date1.diff('2018-06-05', 'month') // 7
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/display/difference

#### Parameters

##### date?

`string` \| `number` \| `Date` \| `Dayjs` \| `null`

##### unit?

`"s"` \| `"D"` \| `"ms"` \| `"y"` \| `"h"` \| `"millisecond"` \| `"second"` \| `"minute"` \| `"hour"` \| `"day"` \| `"month"` \| `"year"` \| `"date"` \| `"milliseconds"` \| `"seconds"` \| `"minutes"` \| `"hours"` \| `"days"` \| `"months"` \| `"years"` \| `"dates"` \| `"d"` \| `"M"` \| `"m"` \| `"week"` \| `"weeks"` \| `"w"` \| `"quarter"` \| `"quarters"` \| `"Q"`

##### float?

`boolean`

#### Returns

`number`

***

### endOf()

> **endOf**(`unit`): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:273](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L273)

Returns a cloned Day.js object and set it to the end of a unit of time.
```
dayjs().endOf('month')// => Dayjs
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/manipulate/end-of

#### Parameters

##### unit

[`OpUnitType`](../type-aliases/OpUnitType.md)

#### Returns

`Dayjs`

***

### format()

> **format**(`template?`): `string`

Defined in: [src/types/libraries/dayjs.ts:285](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L285)

Get the formatted date according to the string of tokens passed in.

To escape characters, wrap them in square brackets (e.g. [MM]).
```
dayjs().format()// => current date in ISO8601, without fraction seconds e.g. '2020-04-02T08:02:17-05:00'
dayjs('2019-01-25').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]')// 'YYYYescape 2019-01-25T00:00:00-02:00Z'
dayjs('2019-01-25').format('DD/MM/YYYY') // '25/01/2019'
```
Docs: https://day.js.org/docs/en/display/format

#### Parameters

##### template?

`string`

#### Returns

`string`

***

### get()

> **get**(`unit`): `number`

Defined in: [src/types/libraries/dayjs.ts:233](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L233)

String getter, returns the corresponding information getting from Day.js object.

In general:
```
dayjs().get(unit) === dayjs()[unit]()
```
Units are case insensitive, and support plural and short forms.
```
dayjs().get('year')
dayjs().get('month') // start 0
dayjs().get('date')
```
Docs: https://day.js.org/docs/en/get-set/get

#### Parameters

##### unit

[`UnitType`](../type-aliases/UnitType.md)

#### Returns

`number`

***

### hour()

#### Call Signature

> **hour**(): `number`

Defined in: [src/types/libraries/dayjs.ts:138](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L138)

Get the hour.
```
dayjs().hour()// => 0-23
```
Docs: https://day.js.org/docs/en/get-set/hour

##### Returns

`number`

#### Call Signature

> **hour**(`value`): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:148](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L148)

Set the hour.

Accepts numbers from 0 to 23. If the range is exceeded, it will bubble up to the next day.
```
dayjs().hour(12)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/hour

##### Parameters

###### value

`number`

##### Returns

`Dayjs`

***

### isAfter()

> **isAfter**(`date?`, `unit?`): `boolean`

Defined in: [src/types/libraries/dayjs.ts:414](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L414)

This indicates whether the Day.js object is after the other supplied date-time.
```
dayjs().isAfter(dayjs('2011-01-01')) // default milliseconds
```
If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.
```
dayjs().isAfter('2011-01-01', 'year')// => boolean
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/query/is-after

#### Parameters

##### date?

`string` \| `number` \| `Date` \| `Dayjs` \| `null`

##### unit?

[`OpUnitType`](../type-aliases/OpUnitType.md)

#### Returns

`boolean`

***

### isBefore()

> **isBefore**(`date?`, `unit?`): `boolean`

Defined in: [src/types/libraries/dayjs.ts:388](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L388)

This indicates whether the Day.js object is before the other supplied date-time.
```
dayjs().isBefore(dayjs('2011-01-01')) // default milliseconds
```
If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.
```
dayjs().isBefore('2011-01-01', 'year')// => boolean
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/query/is-before

#### Parameters

##### date?

`string` \| `number` \| `Date` \| `Dayjs` \| `null`

##### unit?

[`OpUnitType`](../type-aliases/OpUnitType.md)

#### Returns

`boolean`

***

### isSame()

> **isSame**(`date?`, `unit?`): `boolean`

Defined in: [src/types/libraries/dayjs.ts:400](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L400)

This indicates whether the Day.js object is the same as the other supplied date-time.
```
dayjs().isSame(dayjs('2011-01-01')) // default milliseconds
```
If you want to limit the granularity to a unit other than milliseconds, pass it as the second parameter.
```
dayjs().isSame('2011-01-01', 'year')// => boolean
```
Docs: https://day.js.org/docs/en/query/is-same

#### Parameters

##### date?

`string` \| `number` \| `Date` \| `Dayjs` \| `null`

##### unit?

[`OpUnitType`](../type-aliases/OpUnitType.md)

#### Returns

`boolean`

***

### isValid()

> **isValid**(): `boolean`

Defined in: [src/types/libraries/dayjs.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L54)

This returns a `boolean` indicating whether the Day.js object contains a valid date or not.
```
dayjs().isValid()// => boolean
```
Docs: https://day.js.org/docs/en/parse/is-valid

#### Returns

`boolean`

***

### locale()

#### Call Signature

> **locale**(): `string`

Defined in: [src/types/libraries/dayjs.ts:416](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L416)

##### Returns

`string`

#### Call Signature

> **locale**(`preset`, `object?`): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:418](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L418)

##### Parameters

###### preset

`string` \| [`ILocale`](../../../../../dayjs/locale/interfaces/ILocale.md)

###### object?

`Partial`\<[`ILocale`](../../../../../dayjs/locale/interfaces/ILocale.md)\>

##### Returns

`Dayjs`

***

### millisecond()

#### Call Signature

> **millisecond**(): `number`

Defined in: [src/types/libraries/dayjs.ts:191](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L191)

Get the milliseconds.
```
dayjs().millisecond()// => 0-999
```
Docs: https://day.js.org/docs/en/get-set/millisecond

##### Returns

`number`

#### Call Signature

> **millisecond**(`value`): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:201](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L201)

Set the milliseconds.

Accepts numbers from 0 to 999. If the range is exceeded, it will bubble up to the next seconds.
```
dayjs().millisecond(1)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/millisecond

##### Parameters

###### value

`number`

##### Returns

`Dayjs`

***

### minute()

#### Call Signature

> **minute**(): `number`

Defined in: [src/types/libraries/dayjs.ts:156](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L156)

Get the minutes.
```
dayjs().minute()// => 0-59
```
Docs: https://day.js.org/docs/en/get-set/minute

##### Returns

`number`

#### Call Signature

> **minute**(`value`): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:166](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L166)

Set the minutes.

Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the next hour.
```
dayjs().minute(59)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/minute

##### Parameters

###### value

`number`

##### Returns

`Dayjs`

***

### month()

#### Call Signature

> **month**(): `number`

Defined in: [src/types/libraries/dayjs.ts:80](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L80)

Get the month.

Months are zero indexed, so January is month 0.
```
dayjs().month()// => 0-11
```
Docs: https://day.js.org/docs/en/get-set/month

##### Returns

`number`

#### Call Signature

> **month**(`value`): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:92](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L92)

Set the month.

Months are zero indexed, so January is month 0.

Accepts numbers from 0 to 11. If the range is exceeded, it will bubble up to the next year.
```
dayjs().month(0)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/month

##### Parameters

###### value

`number`

##### Returns

`Dayjs`

***

### second()

#### Call Signature

> **second**(): `number`

Defined in: [src/types/libraries/dayjs.ts:174](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L174)

Get the seconds.
```
dayjs().second()// => 0-59
```
Docs: https://day.js.org/docs/en/get-set/second

##### Returns

`number`

#### Call Signature

> **second**(`value`): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:183](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L183)

Set the seconds.

Accepts numbers from 0 to 59. If the range is exceeded, it will bubble up to the next minutes.
```
dayjs().second(1)// Dayjs
```

##### Parameters

###### value

`number`

##### Returns

`Dayjs`

***

### set()

> **set**(`unit`, `value`): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:217](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L217)

Generic setter, accepting unit as first argument, and value as second, returns a new instance with the applied changes.

In general:
```
dayjs().set(unit, value) === dayjs()[unit](value)
```
Units are case insensitive, and support plural and short forms.
```
dayjs().set('date', 1)
dayjs().set('month', 3) // April
dayjs().set('second', 30)
```
Docs: https://day.js.org/docs/en/get-set/set

#### Parameters

##### unit

[`UnitType`](../type-aliases/UnitType.md)

##### value

`number`

#### Returns

`Dayjs`

***

### startOf()

> **startOf**(`unit`): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:263](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L263)

Returns a cloned Day.js object and set it to the start of a unit of time.
```
dayjs().startOf('year')// => Dayjs
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/manipulate/start-of

#### Parameters

##### unit

[`OpUnitType`](../type-aliases/OpUnitType.md)

#### Returns

`Dayjs`

***

### subtract()

> **subtract**(`value`, `unit?`): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:253](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L253)

Returns a cloned Day.js object with a specified amount of time subtracted.
```
dayjs().subtract(7, 'year')// => Dayjs
```
Units are case insensitive, and support plural and short forms.

Docs: https://day.js.org/docs/en/manipulate/subtract

#### Parameters

##### value

`number`

##### unit?

[`ManipulateType`](../type-aliases/ManipulateType.md)

#### Returns

`Dayjs`

***

### toDate()

> **toDate**(): `Date`

Defined in: [src/types/libraries/dayjs.ts:342](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L342)

To get a copy of the native `Date` object parsed from the Day.js object use `dayjs#toDate`.
```
dayjs('2019-01-25').toDate()// => Date
```

#### Returns

`Date`

***

### toISOString()

> **toISOString**(): `string`

Defined in: [src/types/libraries/dayjs.ts:358](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L358)

To format as an ISO 8601 string.
```
dayjs('2019-01-25').toISOString() // '2019-01-25T02:00:00.000Z'
```
Docs: https://day.js.org/docs/en/display/as-iso-string

#### Returns

`string`

***

### toJSON()

> **toJSON**(): `string`

Defined in: [src/types/libraries/dayjs.ts:350](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L350)

To serialize as an ISO 8601 string.
```
dayjs('2019-01-25').toJSON() // '2019-01-25T02:00:00.000Z'
```
Docs: https://day.js.org/docs/en/display/as-json

#### Returns

`string`

***

### toString()

> **toString**(): `string`

Defined in: [src/types/libraries/dayjs.ts:366](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L366)

Returns a string representation of the date.
```
dayjs('2019-01-25').toString() // 'Fri, 25 Jan 2019 02:00:00 GMT'
```
Docs: https://day.js.org/docs/en/display/as-string

#### Returns

`string`

***

### unix()

> **unix**(): `number`

Defined in: [src/types/libraries/dayjs.ts:327](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L327)

This returns the Unix timestamp (the number of **seconds** since the Unix Epoch) of the Day.js object.
```
dayjs('2019-01-25').unix() // 1548381600
```
This value is floored to the nearest second, and does not include a milliseconds component.

Docs: https://day.js.org/docs/en/display/unix-timestamp

#### Returns

`number`

***

### utcOffset()

> **utcOffset**(): `number`

Defined in: [src/types/libraries/dayjs.ts:374](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L374)

Get the UTC offset in minutes.
```
dayjs().utcOffset()
```
Docs: https://day.js.org/docs/en/manipulate/utc-offset

#### Returns

`number`

***

### valueOf()

> **valueOf**(): `number`

Defined in: [src/types/libraries/dayjs.ts:317](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L317)

This returns the number of **milliseconds** since the Unix Epoch of the Day.js object.
```
dayjs('2019-01-25').valueOf() // 1548381600000
+dayjs(1548381600000) // 1548381600000
```
To get a Unix timestamp (the number of seconds since the epoch) from a Day.js object, you should use Unix Timestamp `dayjs#unix()`.

Docs: https://day.js.org/docs/en/display/unix-timestamp-milliseconds

#### Returns

`number`

***

### year()

#### Call Signature

> **year**(): `number`

Defined in: [src/types/libraries/dayjs.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L62)

Get the year.
```
dayjs().year()// => 2020
```
Docs: https://day.js.org/docs/en/get-set/year

##### Returns

`number`

#### Call Signature

> **year**(`value`): `Dayjs`

Defined in: [src/types/libraries/dayjs.ts:70](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/types/libraries/dayjs.ts#L70)

Set the year.
```
dayjs().year(2000)// => Dayjs
```
Docs: https://day.js.org/docs/en/get-set/year

##### Parameters

###### value

`number`

##### Returns

`Dayjs`
