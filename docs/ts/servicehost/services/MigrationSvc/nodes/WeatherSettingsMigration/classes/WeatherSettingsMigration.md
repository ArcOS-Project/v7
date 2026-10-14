[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/servicehost/services/MigrationSvc/nodes/WeatherSettingsMigration](../README.md) / WeatherSettingsMigration

# Class: WeatherSettingsMigration

Defined in: [src/ts/servicehost/services/MigrationSvc/nodes/WeatherSettingsMigration.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/nodes/WeatherSettingsMigration.ts#L8)

## Extends

- [`MigrationNode`](../../../node/classes/MigrationNode.md)

## Constructors

### Constructor

> **new WeatherSettingsMigration**(`self`, `svc`): `WeatherSettingsMigration`

Defined in: [src/ts/servicehost/services/MigrationSvc/nodes/WeatherSettingsMigration.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/nodes/WeatherSettingsMigration.ts#L13)

#### Parameters

##### self

[`IMigrationNodeConstructor`](../../../../../../../interfaces/IMigrationNode/interfaces/IMigrationNodeConstructor.md)

##### svc

[`IMigrationService`](../../../../../../../interfaces/services/IMigrationService/interfaces/IMigrationService.md)

#### Returns

`WeatherSettingsMigration`

#### Overrides

[`MigrationNode`](../../../node/classes/MigrationNode.md).[`constructor`](../../../node/classes/MigrationNode.md#constructor)

## Properties

### self

> `protected` **self**: [`IMigrationNodeConstructor`](../../../../../../../interfaces/IMigrationNode/interfaces/IMigrationNodeConstructor.md)

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L24)

#### Inherited from

[`MigrationNode`](../../../node/classes/MigrationNode.md).[`self`](../../../node/classes/MigrationNode.md#self)

***

### svc

> **svc**: [`IMigrationService`](../../../../../../../interfaces/services/IMigrationService/interfaces/IMigrationService.md)

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L22)

#### Inherited from

[`MigrationNode`](../../../node/classes/MigrationNode.md).[`svc`](../../../node/classes/MigrationNode.md#svc)

***

### deprecated

> `static` **deprecated**: `boolean` = `false`

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L12)

#### Inherited from

[`MigrationNode`](../../../node/classes/MigrationNode.md).[`deprecated`](../../../node/classes/MigrationNode.md#deprecated)

***

### friendlyName

> `static` **friendlyName**: `string` = `"Weather Settings Migration"`

Defined in: [src/ts/servicehost/services/MigrationSvc/nodes/WeatherSettingsMigration.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/nodes/WeatherSettingsMigration.ts#L10)

#### Overrides

[`MigrationNode`](../../../node/classes/MigrationNode.md).[`friendlyName`](../../../node/classes/MigrationNode.md#friendlyname)

***

### inversional

> `static` **inversional**: `boolean` = `false`

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L11)

#### Inherited from

[`MigrationNode`](../../../node/classes/MigrationNode.md).[`inversional`](../../../node/classes/MigrationNode.md#inversional)

***

### name

> `static` **name**: `string` = `"WeatherSettingsMig"`

Defined in: [src/ts/servicehost/services/MigrationSvc/nodes/WeatherSettingsMigration.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/nodes/WeatherSettingsMigration.ts#L9)

#### Overrides

[`MigrationNode`](../../../node/classes/MigrationNode.md).[`name`](../../../node/classes/MigrationNode.md#name)

***

### version

> `static` **version**: `number` = `1.0`

Defined in: [src/ts/servicehost/services/MigrationSvc/nodes/WeatherSettingsMigration.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/nodes/WeatherSettingsMigration.ts#L11)

#### Overrides

[`MigrationNode`](../../../node/classes/MigrationNode.md).[`version`](../../../node/classes/MigrationNode.md#version)

## Methods

### \_runMigration()

> **\_runMigration**(`cb?`): `Promise`\<[`MigrationResult`](../../../../../../../types/services/migrations/interfaces/MigrationResult.md)\>

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L31)

#### Parameters

##### cb?

[`MigrationStatusCallback`](../../../../../../../types/services/migrations/type-aliases/MigrationStatusCallback.md)

#### Returns

`Promise`\<[`MigrationResult`](../../../../../../../types/services/migrations/interfaces/MigrationResult.md)\>

#### Inherited from

[`MigrationNode`](../../../node/classes/MigrationNode.md).[`_runMigration`](../../../node/classes/MigrationNode.md#_runmigration)

***

### Log()

> **Log**(`message`, `level?`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L47)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../../../types/shared/logging/enumerations/LogLevel.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`MigrationNode`](../../../node/classes/MigrationNode.md).[`Log`](../../../node/classes/MigrationNode.md#log)

***

### runMigration()

> **runMigration**(`cb?`): `Promise`\<[`MigrationResult`](../../../../../../../types/services/migrations/interfaces/MigrationResult.md)\>

Defined in: [src/ts/servicehost/services/MigrationSvc/nodes/WeatherSettingsMigration.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/nodes/WeatherSettingsMigration.ts#L17)

#### Parameters

##### cb?

[`MigrationStatusCallback`](../../../../../../../types/services/migrations/type-aliases/MigrationStatusCallback.md)

#### Returns

`Promise`\<[`MigrationResult`](../../../../../../../types/services/migrations/interfaces/MigrationResult.md)\>

#### Overrides

[`MigrationNode`](../../../node/classes/MigrationNode.md).[`runMigration`](../../../node/classes/MigrationNode.md#runmigration)
