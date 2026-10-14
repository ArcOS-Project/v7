[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/IProcess](../README.md) / IProcessDispatch

# Interface: IProcessDispatch

Defined in: [src/interfaces/IProcess.ts:23](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L23)

## Methods

### dispatch()

> **dispatch**(`event`, ...`args`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IProcess.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L25)

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

Defined in: [src/interfaces/IProcess.ts:24](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L24)

#### Parameters

##### event

`string`

##### callback

[`DispatchCallback`](../../../types/system/dispatch/type-aliases/DispatchCallback.md)

#### Returns

`void`
