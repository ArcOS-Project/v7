[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/process/dispatch](../README.md) / ProcessDispatch

# Class: ProcessDispatch

Defined in: [src/ts/process/dispatch.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/dispatch.ts#L6)

## Constructors

### Constructor

> **new ProcessDispatch**(`process`): `ProcessDispatch`

Defined in: [src/ts/process/dispatch.ts:11](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/dispatch.ts#L11)

#### Parameters

##### process

[`Process`](../../instance/classes/Process.md)

#### Returns

`ProcessDispatch`

## Methods

### dispatch()

> **dispatch**(`event`, ...`args`): `Promise`\<`boolean`\>

Defined in: [src/ts/process/dispatch.ts:25](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/dispatch.ts#L25)

#### Parameters

##### event

`string`

##### args

...`any`[]

#### Returns

`Promise`\<`boolean`\>

***

### subscribe()

> **subscribe**(`event`, `callback`): `void`

Defined in: [src/ts/process/dispatch.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/dispatch.ts#L17)

#### Parameters

##### event

`string`

##### callback

[`DispatchCallback`](../../../../types/dispatch/type-aliases/DispatchCallback.md)

#### Returns

`void`
