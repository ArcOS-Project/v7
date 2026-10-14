[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/contexts/ISpawnUserContext](../README.md) / ISpawnUserContext

# Interface: ISpawnUserContext

Defined in: [src/interfaces/contexts/ISpawnUserContext.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/ISpawnUserContext.ts#L7)

## Extends

- [`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md)

## Methods

### \_\_deactivate()

> **\_\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:90](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L90)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`__deactivate`](../../../IUserDaemon/interfaces/IUserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:88](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L88)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`__init`](../../../IUserDaemon/interfaces/IUserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L91)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`_deactivate`](../../../IUserDaemon/interfaces/IUserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/interfaces/IUserDaemon.ts:89](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IUserDaemon.ts#L89)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IUserContext`](../../../IUserDaemon/interfaces/IUserContext.md).[`_init`](../../../IUserDaemon/interfaces/IUserContext.md#_init)

***

### clearEntrypointCache()

> **clearEntrypointCache**(): `void`

Defined in: [src/interfaces/contexts/ISpawnUserContext.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/ISpawnUserContext.ts#L22)

#### Returns

`void`

***

### spawnApp()

> **spawnApp**\<`T`\>(`id`, `parentPid?`, `options?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/interfaces/contexts/ISpawnUserContext.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/ISpawnUserContext.ts#L14)

#### Type Parameters

##### T

`T` *extends* [`IProcess`](../../../IProcess/interfaces/IProcess.md)

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### options?

[`AppProcessSpawnOptions`](../../../../types/apps/app/interfaces/AppProcessSpawnOptions.md)

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

***

### spawnAppMeta()

> **spawnAppMeta**\<`T`\>(`app`, `parentPid?`, `options?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/interfaces/contexts/ISpawnUserContext.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/ISpawnUserContext.ts#L8)

#### Type Parameters

##### T

`T` *extends* [`IProcess`](../../../IProcess/interfaces/IProcess.md)

#### Parameters

##### app

[`App`](../../../../types/apps/app/interfaces/App.md)

##### parentPid?

`number`

##### options?

[`AppProcessSpawnOptions`](../../../../types/apps/app/interfaces/AppProcessSpawnOptions.md)

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

***

### tpaEntrypoint()

> **tpaEntrypoint**(`app`, ...`args`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`TpaSpawnEntrypointResult`](../../../../types/apps/app/interfaces/TpaSpawnEntrypointResult.md)\<`any`\>\>\>

Defined in: [src/interfaces/contexts/ISpawnUserContext.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/ISpawnUserContext.ts#L20)

#### Parameters

##### app

[`InstalledApp`](../../../../types/apps/app/interfaces/InstalledApp.md)

##### args

...`any`[]

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`TpaSpawnEntrypointResult`](../../../../types/apps/app/interfaces/TpaSpawnEntrypointResult.md)\<`any`\>\>\>

***

### tpaError\_noEnableThirdParty()

> **tpaError\_noEnableThirdParty**(): `void`

Defined in: [src/interfaces/contexts/ISpawnUserContext.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/contexts/ISpawnUserContext.ts#L21)

#### Returns

`void`
