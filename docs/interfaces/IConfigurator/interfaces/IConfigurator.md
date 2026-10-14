[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/IConfigurator](../README.md) / IConfigurator

# Interface: IConfigurator\<T\>

Defined in: [src/interfaces/IConfigurator.ts:2](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IConfigurator.ts#L2)

## Type Parameters

### T

`T` = `object`

## Methods

### initialize()

> **initialize**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IConfigurator.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IConfigurator.ts#L5)

#### Returns

`Promise`\<`void`\>

***

### readConfiguration()

> **readConfiguration**(): `Promise`\<`T`\>

Defined in: [src/interfaces/IConfigurator.ts:3](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IConfigurator.ts#L3)

#### Returns

`Promise`\<`T`\>

***

### writeConfiguration()

> **writeConfiguration**(`configuration?`): `Promise`\<`T`\>

Defined in: [src/interfaces/IConfigurator.ts:4](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IConfigurator.ts#L4)

#### Parameters

##### configuration?

`T`

#### Returns

`Promise`\<`T`\>
