[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/daemon/contexts/spawn](../README.md) / SpawnUserContext

# Class: SpawnUserContext

Defined in: [src/ts/daemon/contexts/spawn.ts:22](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/spawn.ts#L22)

## Extends

- [`UserContext`](../../../context/classes/UserContext.md)

## Implements

- [`ISpawnUserContext`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md)

## Constructors

### Constructor

> **new SpawnUserContext**(`id`, `daemon`): `SpawnUserContext`

Defined in: [src/ts/daemon/contexts/spawn.ts:25](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/spawn.ts#L25)

#### Parameters

##### id

`string`

##### daemon

[`IUserDaemon`](../../../../../interfaces/IUserDaemon/interfaces/IUserDaemon.md)

#### Returns

`SpawnUserContext`

#### Overrides

[`UserContext`](../../../context/classes/UserContext.md).[`constructor`](../../../context/classes/UserContext.md#constructor)

## Accessors

### \_disposed

#### Get Signature

> **get** `protected` **\_disposed**(): `boolean`

Defined in: [src/ts/daemon/context.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L59)

##### Returns

`boolean`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_disposed`](../../../context/classes/UserContext.md#_disposed)

***

### appStorage

#### Get Signature

> **get** `protected` **appStorage**(): () => [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L51)

##### Returns

() => [`IApplicationStorage`](../../../../../interfaces/services/IApplicationStorage/interfaces/IApplicationStorage.md) \| `undefined`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`appStorage`](../../../context/classes/UserContext.md#appstorage)

***

### initialized

#### Get Signature

> **get** `protected` **initialized**(): `boolean`

Defined in: [src/ts/daemon/context.ts:83](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L83)

##### Returns

`boolean`

#### Set Signature

> **set** `protected` **initialized**(`value`): `void`

Defined in: [src/ts/daemon/context.ts:87](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L87)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`initialized`](../../../context/classes/UserContext.md#initialized)

***

### pid

#### Get Signature

> **get** `protected` **pid**(): `number`

Defined in: [src/ts/daemon/context.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L63)

##### Returns

`number`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`pid`](../../../context/classes/UserContext.md#pid)

***

### safeMode

#### Get Signature

> **get** `protected` **safeMode**(): `boolean`

Defined in: [src/ts/daemon/context.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L55)

##### Returns

`boolean`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`safeMode`](../../../context/classes/UserContext.md#safemode)

***

### serviceHost

#### Get Signature

> **get** `protected` **serviceHost**(): [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L47)

##### Returns

[`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md) \| `undefined`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`serviceHost`](../../../context/classes/UserContext.md#servicehost)

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/daemon/context.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L12)

##### Returns

[`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`shell`](../../../context/classes/UserContext.md#shell)

***

### userInfo

#### Get Signature

> **get** `protected` **userInfo**(): [`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

Defined in: [src/ts/daemon/context.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L67)

##### Returns

[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

#### Set Signature

> **set** `protected` **userInfo**(`value`): `void`

Defined in: [src/ts/daemon/context.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L71)

##### Parameters

###### value

[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

##### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`userInfo`](../../../context/classes/UserContext.md#userinfo)

***

### username

#### Get Signature

> **get** `protected` **username**(): `string`

Defined in: [src/ts/daemon/context.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L75)

##### Returns

`string`

#### Set Signature

> **set** `protected` **username**(`username`): `void`

Defined in: [src/ts/daemon/context.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L79)

##### Parameters

###### username

`string`

##### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`username`](../../../context/classes/UserContext.md#username)

## Methods

### \_\_deactivate()

> **\_\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L31)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISpawnUserContext`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md).[`__deactivate`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md#__deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__deactivate`](../../../context/classes/UserContext.md#__deactivate)

***

### \_\_init()

> **\_\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L21)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISpawnUserContext`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md).[`__init`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md#__init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`__init`](../../../context/classes/UserContext.md#__init)

***

### \_deactivate()

> **\_deactivate**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L37)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISpawnUserContext`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md).[`_deactivate`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md#_deactivate)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_deactivate`](../../../context/classes/UserContext.md#_deactivate)

***

### \_init()

> **\_init**(): `Promise`\<`void`\>

Defined in: [src/ts/daemon/context.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L27)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ISpawnUserContext`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md).[`_init`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md#_init)

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`_init`](../../../context/classes/UserContext.md#_init)

***

### check\_elevation()

> **check\_elevation**(`app`): `Promise`\<`void`\>

Defined in: [src/ts/daemon/contexts/spawn.ts:221](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/spawn.ts#L221)

#### Parameters

##### app

[`App`](../../../../../types/apps/app/interfaces/App.md)

#### Returns

`Promise`\<`void`\>

***

### check\_malformedAppId()

> **check\_malformedAppId**(`app`): `void`

Defined in: [src/ts/daemon/contexts/spawn.ts:207](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/spawn.ts#L207)

#### Parameters

##### app

[`App`](../../../../../types/apps/app/interfaces/App.md)

#### Returns

`void`

***

### clearEntrypointCache()

> **clearEntrypointCache**(): `void`

Defined in: [src/ts/daemon/contexts/spawn.ts:318](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/spawn.ts#L318)

#### Returns

`void`

#### Implementation of

[`ISpawnUserContext`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md).[`clearEntrypointCache`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md#clearentrypointcache)

***

### generateAppProcessData()

> **generateAppProcessData**(`app`, `renderTarget?`): [`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

Defined in: [src/ts/daemon/contexts/spawn.ts:310](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/spawn.ts#L310)

#### Parameters

##### app

[`App`](../../../../../types/apps/app/interfaces/App.md)

##### renderTarget?

`HTMLDivElement`

#### Returns

[`AppProcessData`](../../../../../types/apps/app/type-aliases/AppProcessData.md)

***

### handleSpawnError()

> **handleSpawnError**(`appId`, `e?`): `void`

Defined in: [src/ts/daemon/contexts/spawn.ts:291](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/spawn.ts#L291)

#### Parameters

##### appId

`string`

##### e?

`any`

#### Returns

`void`

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/daemon/context.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/context.ts#L41)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`UserContext`](../../../context/classes/UserContext.md).[`Log`](../../../context/classes/UserContext.md#log)

***

### spawnApp()

> **spawnApp**\<`T`\>(`id`, `parentPid?`, `options?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/ts/daemon/contexts/spawn.ts:116](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/spawn.ts#L116)

#### Type Parameters

##### T

`T` *extends* [`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md)

#### Parameters

##### id

`string`

##### parentPid?

`number`

##### options?

[`AppProcessSpawnOptions`](../../../../../types/apps/app/interfaces/AppProcessSpawnOptions.md)

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Implementation of

[`ISpawnUserContext`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md).[`spawnApp`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md#spawnapp)

***

### spawnAppMeta()

> **spawnAppMeta**\<`T`\>(`app`, `parentPid?`, `options?`, ...`args`): `Promise`\<`T` \| `undefined`\>

Defined in: [src/ts/daemon/contexts/spawn.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/spawn.ts#L31)

#### Type Parameters

##### T

`T` *extends* [`IProcess`](../../../../../interfaces/IProcess/interfaces/IProcess.md)

#### Parameters

##### app

[`App`](../../../../../types/apps/app/interfaces/App.md)

##### parentPid?

`number`

##### options?

[`AppProcessSpawnOptions`](../../../../../types/apps/app/interfaces/AppProcessSpawnOptions.md)

##### args

...`any`[]

#### Returns

`Promise`\<`T` \| `undefined`\>

#### Implementation of

[`ISpawnUserContext`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md).[`spawnAppMeta`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md#spawnappmeta)

***

### tpaEntrypoint()

> **tpaEntrypoint**(`app`, ...`args`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`TpaSpawnEntrypointResult`](../../../../../types/apps/app/interfaces/TpaSpawnEntrypointResult.md)\<`any`\>\>\>

Defined in: [src/ts/daemon/contexts/spawn.ts:136](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/spawn.ts#L136)

#### Parameters

##### app

[`InstalledApp`](../../../../../types/apps/app/interfaces/InstalledApp.md)

##### args

...`any`[]

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`TpaSpawnEntrypointResult`](../../../../../types/apps/app/interfaces/TpaSpawnEntrypointResult.md)\<`any`\>\>\>

#### Implementation of

[`ISpawnUserContext`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md).[`tpaEntrypoint`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md#tpaentrypoint)

***

### tpaError\_malformedMetadata()

> **tpaError\_malformedMetadata**(`app`): `void`

Defined in: [src/ts/daemon/contexts/spawn.ts:238](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/spawn.ts#L238)

#### Parameters

##### app

[`App`](../../../../../types/apps/app/interfaces/App.md)

#### Returns

`void`

***

### tpaError\_noEnableThirdParty()

> **tpaError\_noEnableThirdParty**(): `void`

Defined in: [src/ts/daemon/contexts/spawn.ts:267](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/spawn.ts#L267)

#### Returns

`void`

#### Implementation of

[`ISpawnUserContext`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md).[`tpaError_noEnableThirdParty`](../../../../../interfaces/contexts/ISpawnUserContext/interfaces/ISpawnUserContext.md#tpaerror_noenablethirdparty)

***

### tpaError\_safeMode()

> **tpaError\_safeMode**(): `void`

Defined in: [src/ts/daemon/contexts/spawn.ts:252](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/daemon/contexts/spawn.ts#L252)

#### Returns

`void`
