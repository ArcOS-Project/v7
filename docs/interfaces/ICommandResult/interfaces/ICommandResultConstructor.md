[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/ICommandResult](../README.md) / ICommandResultConstructor

# Interface: ICommandResultConstructor

Defined in: [src/interfaces/ICommandResult.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/ICommandResult.ts#L13)

## Extends

- [`Constructs`](../../common/interfaces/Constructs.md)\<[`ICommandResult`](ICommandResult.md)\>

## Constructors

### Constructor

> **new ICommandResultConstructor**\<`T`\>(`result?`, `options?`): [`ICommandResult`](ICommandResult.md)\<`T`\>

Defined in: [src/interfaces/ICommandResult.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/ICommandResult.ts#L17)

#### Parameters

##### result?

`T`

##### options?

[`CommandResultOptions`](../../../types/shared/result/interfaces/CommandResultOptions.md)

#### Returns

[`ICommandResult`](ICommandResult.md)\<`T`\>

#### Inherited from

[`Constructs`](../../common/interfaces/Constructs.md).[`constructor`](../../common/interfaces/Constructs.md#constructor)

### Constructor

> **new ICommandResultConstructor**(...`args`): [`ICommandResult`](ICommandResult.md)

Defined in: [src/interfaces/ICommandResult.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/ICommandResult.ts#L13)

#### Parameters

##### args

...`any`[]

#### Returns

[`ICommandResult`](ICommandResult.md)

#### Inherited from

`Constructs<ICommandResult>.constructor`

## Methods

### Error()

> **Error**\<`T`\>(`errorMessage`): [`ICommandResult`](ICommandResult.md)\<`T`\>

Defined in: [src/interfaces/ICommandResult.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/ICommandResult.ts#L15)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### errorMessage

`string`

#### Returns

[`ICommandResult`](ICommandResult.md)\<`T`\>

***

### Ok()

> **Ok**\<`T`\>(`value`, `successMessage?`): [`ICommandResult`](ICommandResult.md)\<`T`\>

Defined in: [src/interfaces/ICommandResult.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/ICommandResult.ts#L14)

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`T`

##### successMessage?

`string`

#### Returns

[`ICommandResult`](ICommandResult.md)\<`T`\>
