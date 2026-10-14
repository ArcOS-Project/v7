[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [ts/result](../README.md) / CommandResult

# Class: CommandResult\<T\>

Defined in: [src/ts/result.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/result.ts#L7)

## Type Parameters

### T

`T` = `any`

## Implements

- [`ICommandResult`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`T`\>

## Constructors

### Constructor

> **new CommandResult**\<`T`\>(`result?`, `options?`): `CommandResult`\<`T`\>

Defined in: [src/ts/result.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/result.ts#L14)

#### Parameters

##### result?

`T`

##### options?

[`CommandResultOptions`](../../../types/shared/result/interfaces/CommandResultOptions.md) = `DefaultCommandResultOptions`

#### Returns

`CommandResult`\<`T`\>

## Properties

### error?

> `optional` **error?**: `Error`

Defined in: [src/ts/result.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/result.ts#L9)

#### Implementation of

[`ICommandResult`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md).[`error`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md#error)

***

### errorMessage?

> `optional` **errorMessage?**: `string`

Defined in: [src/ts/result.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/result.ts#L10)

#### Implementation of

[`ICommandResult`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md).[`errorMessage`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md#errormessage)

***

### result

> **result**: `T` \| `undefined`

Defined in: [src/ts/result.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/result.ts#L8)

#### Implementation of

[`ICommandResult`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md).[`result`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md#result)

***

### success

> **success**: `boolean` = `false`

Defined in: [src/ts/result.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/result.ts#L12)

#### Implementation of

[`ICommandResult`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md).[`success`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md#success)

***

### successMessage?

> `optional` **successMessage?**: `string`

Defined in: [src/ts/result.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/result.ts#L11)

#### Implementation of

[`ICommandResult`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md).[`successMessage`](../../../interfaces/ICommandResult/interfaces/ICommandResult.md#successmessage)

## Methods

### AxiosError()

> `static` **AxiosError**\<`T`\>(`e`, `fallback?`): `CommandResult`\<`T`\>

Defined in: [src/ts/result.ts:35](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/result.ts#L35)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### e

`unknown`

##### fallback?

`string` = `"Unknown error"`

#### Returns

`CommandResult`\<`T`\>

***

### Error()

> `static` **Error**\<`T`\>(`errorMessage`): `CommandResult`\<`T`\>

Defined in: [src/ts/result.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/result.ts#L25)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### errorMessage

`string`

#### Returns

`CommandResult`\<`T`\>

***

### FromResponse()

> `static` **FromResponse**\<`T`\>(`value`): `CommandResult`\<`T`\>

Defined in: [src/ts/result.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/result.ts#L31)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### value

`AxiosResponse`\<`T`\>

#### Returns

`CommandResult`\<`T`\>

***

### Ok()

> `static` **Ok**\<`T`\>(`value?`, `successMessage?`): `CommandResult`\<`T`\>

Defined in: [src/ts/result.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/result.ts#L21)

#### Type Parameters

##### T

`T`

#### Parameters

##### value?

`T`

##### successMessage?

`string`

#### Returns

`CommandResult`\<`T`\>
