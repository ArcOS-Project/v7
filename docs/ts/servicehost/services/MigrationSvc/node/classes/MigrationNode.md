[**"ArcOS**](../../../../../../README.md)

***

["ArcOS](../../../../../../modules.md) / [ts/servicehost/services/MigrationSvc/node](../README.md) / MigrationNode

# Class: MigrationNode

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L8)

## Extended by

- [`AppShortcutsMigration`](../../nodes/AppShortcuts/classes/AppShortcutsMigration.md)
- [`FileAssociationsMigration`](../../nodes/FileAssociations/classes/FileAssociationsMigration.md)
- [`IconConfigurationMigration`](../../nodes/IconConfiguration/classes/IconConfigurationMigration.md)
- [`WeatherSettingsMigration`](../../nodes/WeatherSettingsMigration/classes/WeatherSettingsMigration.md)

## Implements

- [`IMigrationNode`](../../../../../../interfaces/IMigrationNode/interfaces/IMigrationNode.md)

## Constructors

### Constructor

> **new MigrationNode**(`self`, `svc`): `MigrationNode`

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L26)

#### Parameters

##### self

[`IMigrationNodeConstructor`](../../../../../../interfaces/IMigrationNode/interfaces/IMigrationNodeConstructor.md)

##### svc

[`IMigrationService`](../../../../../../interfaces/services/IMigrationService/interfaces/IMigrationService.md)

#### Returns

`MigrationNode`

## Properties

### self

> `protected` **self**: [`IMigrationNodeConstructor`](../../../../../../interfaces/IMigrationNode/interfaces/IMigrationNodeConstructor.md)

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L24)

***

### svc

> **svc**: [`IMigrationService`](../../../../../../interfaces/services/IMigrationService/interfaces/IMigrationService.md)

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L22)

#### Implementation of

[`IMigrationNode`](../../../../../../interfaces/IMigrationNode/interfaces/IMigrationNode.md).[`svc`](../../../../../../interfaces/IMigrationNode/interfaces/IMigrationNode.md#svc)

***

### deprecated

> `static` **deprecated**: `boolean` = `false`

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L12)

***

### friendlyName

> `static` **friendlyName**: `string` = `"Unknown Migration"`

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L10)

***

### inversional

> `static` **inversional**: `boolean` = `false`

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L11)

***

### name

> `static` **name**: `string` = `"MigrationNode"`

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L9)

***

### version

> `static` **version**: `number`

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L15)

## Methods

### \_runMigration()

> **\_runMigration**(`cb?`): `Promise`\<[`MigrationResult`](../../../../../../types/services/migrations/interfaces/MigrationResult.md)\>

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L31)

#### Parameters

##### cb?

[`MigrationStatusCallback`](../../../../../../types/services/migrations/type-aliases/MigrationStatusCallback.md)

#### Returns

`Promise`\<[`MigrationResult`](../../../../../../types/services/migrations/interfaces/MigrationResult.md)\>

#### Implementation of

[`IMigrationNode`](../../../../../../interfaces/IMigrationNode/interfaces/IMigrationNode.md).[`_runMigration`](../../../../../../interfaces/IMigrationNode/interfaces/IMigrationNode.md#_runmigration)

***

### Log()

> **Log**(`message`, `level?`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L47)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../../types/shared/logging/enumerations/LogLevel.md)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IMigrationNode`](../../../../../../interfaces/IMigrationNode/interfaces/IMigrationNode.md).[`Log`](../../../../../../interfaces/IMigrationNode/interfaces/IMigrationNode.md#log)

***

### runMigration()

> **runMigration**(`cb?`): `Promise`\<[`MigrationResult`](../../../../../../types/services/migrations/interfaces/MigrationResult.md)\>

Defined in: [src/ts/servicehost/services/MigrationSvc/node.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/MigrationSvc/node.ts#L42)

#### Parameters

##### cb?

[`MigrationStatusCallback`](../../../../../../types/services/migrations/type-aliases/MigrationStatusCallback.md)

#### Returns

`Promise`\<[`MigrationResult`](../../../../../../types/services/migrations/interfaces/MigrationResult.md)\>
