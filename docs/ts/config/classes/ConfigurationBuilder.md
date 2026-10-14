[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [ts/config](../README.md) / ConfigurationBuilder

# Class: ConfigurationBuilder\<T\>

Defined in: [src/ts/config.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/config.ts#L10)

## Type Parameters

### T

`T` = `object`

## Constructors

### Constructor

> **new ConfigurationBuilder**\<`T`\>(): `ConfigurationBuilder`\<`T`\>

#### Returns

`ConfigurationBuilder`\<`T`\>

## Methods

### Build()

> **Build**(): [`IConfigurator`](../../../interfaces/IConfigurator/interfaces/IConfigurator.md)\<`T`\>

Defined in: [src/ts/config.ts:69](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/config.ts#L69)

#### Returns

[`IConfigurator`](../../../interfaces/IConfigurator/interfaces/IConfigurator.md)\<`T`\>

***

### ForProcess()

> **ForProcess**(`process`): `ConfigurationBuilder`\<`T`\>

Defined in: [src/ts/config.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/config.ts#L53)

#### Parameters

##### process

[`IProcess`](../../../interfaces/IProcess/interfaces/IProcess.md)

#### Returns

`ConfigurationBuilder`\<`T`\>

***

### ReadsFrom()

> **ReadsFrom**(`store`): `ConfigurationBuilder`\<`T`\>

Defined in: [src/ts/config.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/config.ts#L19)

#### Parameters

##### store

[`ReadableStore`](../../../types/shared/writable/type-aliases/ReadableStore.md)\<`T`\>

#### Returns

`ConfigurationBuilder`\<`T`\>

***

### WithCooldown()

> **WithCooldown**(`cooldown`): `ConfigurationBuilder`\<`T`\>

Defined in: [src/ts/config.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/config.ts#L61)

#### Parameters

##### cooldown

`number`

#### Returns

`ConfigurationBuilder`\<`T`\>

***

### WithDefaults()

> **WithDefaults**(`defaults`): `ConfigurationBuilder`\<`T`\>

Defined in: [src/ts/config.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/config.ts#L45)

#### Parameters

##### defaults

`T`

#### Returns

`ConfigurationBuilder`\<`T`\>

***

### WithLocalStorage()

> **WithLocalStorage**(`key`): `ConfigurationBuilder`\<`T`\>

Defined in: [src/ts/config.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/config.ts#L36)

#### Parameters

##### key

`string`

#### Returns

`ConfigurationBuilder`\<`T`\>

***

### WritesTo()

> **WritesTo**(`path`): `ConfigurationBuilder`\<`T`\>

Defined in: [src/ts/config.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/config.ts#L27)

#### Parameters

##### path

`string`

#### Returns

`ConfigurationBuilder`\<`T`\>
