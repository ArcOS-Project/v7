[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/IMigrationNode](../README.md) / IMigrationNode

# Interface: IMigrationNode

Defined in: [src/interfaces/IMigrationNode.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IMigrationNode.ts#L7)

## Properties

### svc

> **svc**: [`IMigrationService`](../../services/IMigrationService/interfaces/IMigrationService.md)

Defined in: [src/interfaces/IMigrationNode.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IMigrationNode.ts#L8)

## Methods

### \_runMigration()

> **\_runMigration**(`cb?`): `Promise`\<[`MigrationResult`](../../../types/services/migrations/interfaces/MigrationResult.md)\>

Defined in: [src/interfaces/IMigrationNode.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IMigrationNode.ts#L9)

#### Parameters

##### cb?

[`MigrationStatusCallback`](../../../types/services/migrations/type-aliases/MigrationStatusCallback.md)

#### Returns

`Promise`\<[`MigrationResult`](../../../types/services/migrations/interfaces/MigrationResult.md)\>

***

### Log()

> **Log**(`message`, `level?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IMigrationNode.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IMigrationNode.ts#L10)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../types/shared/logging/enumerations/LogLevel.md)

#### Returns

`Promise`\<`void`\>
