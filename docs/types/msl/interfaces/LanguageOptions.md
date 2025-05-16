[**ArcOS v7**](../../../README.md)

***

[ArcOS v7](../../../modules.md) / [types/msl](../README.md) / LanguageOptions

# Interface: LanguageOptions

Defined in: [src/types/msl.ts:10](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/msl.ts#L10)

## Properties

### allowUnsafe?

> `optional` **allowUnsafe**: `boolean`

Defined in: [src/types/msl.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/msl.ts#L16)

***

### arguments?

> `optional` **arguments**: `any`[]

Defined in: [src/types/msl.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/msl.ts#L20)

***

### continuous?

> `optional` **continuous**: `boolean`

Defined in: [src/types/msl.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/msl.ts#L17)

***

### onError()?

> `optional` **onError**: (`error`) => `void`

Defined in: [src/types/msl.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/msl.ts#L14)

#### Parameters

##### error

[`LanguageExecutionError`](../../../ts/msl/error/classes/LanguageExecutionError.md)

#### Returns

`void`

***

### onExit()?

> `optional` **onExit**: (`l`) => `void`

Defined in: [src/types/msl.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/msl.ts#L15)

#### Parameters

##### l

[`LanguageInstance`](../../../ts/msl/instance/classes/LanguageInstance.md)

#### Returns

`void`

***

### onTick()?

> `optional` **onTick**: (`l`) => `void`

Defined in: [src/types/msl.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/msl.ts#L13)

#### Parameters

##### l

[`LanguageInstance`](../../../ts/msl/instance/classes/LanguageInstance.md)

#### Returns

`void`

***

### stdin()?

> `optional` **stdin**: () => `Promise`\<`string`\>

Defined in: [src/types/msl.ts:11](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/msl.ts#L11)

#### Returns

`Promise`\<`string`\>

***

### stdout()?

> `optional` **stdout**: (`m`) => `void`

Defined in: [src/types/msl.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/msl.ts#L12)

#### Parameters

##### m

`string`

#### Returns

`void`

***

### tickDelay?

> `optional` **tickDelay**: `number`

Defined in: [src/types/msl.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/msl.ts#L18)

***

### workingDir?

> `optional` **workingDir**: `string`

Defined in: [src/types/msl.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/types/msl.ts#L19)
