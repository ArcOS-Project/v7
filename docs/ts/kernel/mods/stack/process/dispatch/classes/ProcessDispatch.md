[**"ArcOS**](../../../../../../../README.md)

***

["ArcOS](../../../../../../../modules.md) / [ts/kernel/mods/stack/process/dispatch](../README.md) / ProcessDispatch

# Class: ProcessDispatch

Defined in: [src/ts/kernel/mods/stack/process/dispatch.ts:5](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/dispatch.ts#L5)

## Implements

- [`IProcessDispatch`](../../../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

## Constructors

### Constructor

> **new ProcessDispatch**(`process`): `ProcessDispatch`

Defined in: [src/ts/kernel/mods/stack/process/dispatch.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/dispatch.ts#L9)

#### Parameters

##### process

[`IProcess`](../../../../../../../interfaces/IProcess/interfaces/IProcess.md)

#### Returns

`ProcessDispatch`

## Methods

### dispatch()

> **dispatch**(`event`, ...`args`): `Promise`\<`boolean`\>

Defined in: [src/ts/kernel/mods/stack/process/dispatch.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/dispatch.ts#L22)

#### Parameters

##### event

`string`

##### args

...`any`[]

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IProcessDispatch`](../../../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md).[`dispatch`](../../../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md#dispatch)

***

### subscribe()

> **subscribe**(`event`, `callback`): `void`

Defined in: [src/ts/kernel/mods/stack/process/dispatch.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/dispatch.ts#L14)

#### Parameters

##### event

`string`

##### callback

[`DispatchCallback`](../../../../../../../types/system/dispatch/type-aliases/DispatchCallback.md)

#### Returns

`void`

#### Implementation of

[`IProcessDispatch`](../../../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md).[`subscribe`](../../../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md#subscribe)
