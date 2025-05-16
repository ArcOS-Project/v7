[**ArcOS v7**](../../../../../README.md)

***

[ArcOS v7](../../../../../modules.md) / [apps/components/shellhost/runtime](../README.md) / ShellHostRuntime

# Class: ShellHostRuntime

Defined in: [src/apps/components/shellhost/runtime.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/apps/components/shellhost/runtime.ts#L12)

## Extends

- [`Process`](../../../../../ts/process/instance/classes/Process.md)

## Constructors

### Constructor

> **new ShellHostRuntime**(`handler`, `pid`, `parentPid`, `_`, `autoloadApps`): `ShellHostRuntime`

Defined in: [src/apps/components/shellhost/runtime.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/apps/components/shellhost/runtime.ts#L19)

#### Parameters

##### handler

[`ProcessHandler`](../../../../../ts/process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

##### \_

[`AppProcessData`](../../../../../types/app/type-aliases/AppProcessData.md)

##### autoloadApps

`string`[]

#### Returns

`ShellHostRuntime`

#### Overrides

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`constructor`](../../../../../ts/process/instance/classes/Process.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L22)

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`_criticalProcess`](../../../../../ts/process/instance/classes/Process.md#_criticalprocess)

***

### \_disposed

> **\_disposed**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L21)

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`_disposed`](../../../../../ts/process/instance/classes/Process.md#_disposed)

***

### dispatch

> **dispatch**: [`ProcessDispatch`](../../../../../ts/process/dispatch/classes/ProcessDispatch.md)

Defined in: [src/ts/process/instance.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L15)

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`dispatch`](../../../../../ts/process/instance/classes/Process.md#dispatch)

***

### env

> **env**: [`Environment`](../../../../../ts/kernel/env/classes/Environment.md)

Defined in: [src/ts/process/instance.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L12)

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`env`](../../../../../ts/process/instance/classes/Process.md#env)

***

### fs

> **fs**: [`Filesystem`](../../../../../ts/fs/classes/Filesystem.md)

Defined in: [src/ts/process/instance.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L23)

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`fs`](../../../../../ts/process/instance/classes/Process.md#fs)

***

### handler

> **handler**: [`ProcessHandler`](../../../../../ts/process/handler/classes/ProcessHandler.md)

Defined in: [src/ts/process/instance.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L14)

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`handler`](../../../../../ts/process/instance/classes/Process.md#handler)

***

### kernel

> **kernel**: [`WaveKernel`](../../../../../ts/kernel/classes/WaveKernel.md)

Defined in: [src/ts/process/instance.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L17)

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`kernel`](../../../../../ts/process/instance/classes/Process.md#kernel)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/process/instance.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L20)

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`name`](../../../../../ts/process/instance/classes/Process.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/process/instance.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L19)

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`parentPid`](../../../../../ts/process/instance/classes/Process.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/process/instance.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L18)

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`pid`](../../../../../ts/process/instance/classes/Process.md#pid)

***

### shellComponents

> `readonly` **shellComponents**: `string`[]

Defined in: [src/apps/components/shellhost/runtime.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/apps/components/shellhost/runtime.ts#L15)

***

### soundBus

> **soundBus**: [`SoundBus`](../../../../../ts/soundbus/classes/SoundBus.md)

Defined in: [src/ts/process/instance.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L13)

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`soundBus`](../../../../../ts/process/instance/classes/Process.md#soundbus)

***

### systemDispatch

> **systemDispatch**: [`SystemDispatch`](../../../../../ts/dispatch/classes/SystemDispatch.md)

Defined in: [src/ts/process/instance.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L16)

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`systemDispatch`](../../../../../ts/process/instance/classes/Process.md#systemdispatch)

***

### userDaemon

> **userDaemon**: `undefined` \| [`UserDaemon`](../../../../../ts/server/user/daemon/classes/UserDaemon.md)

Defined in: [src/apps/components/shellhost/runtime.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/apps/components/shellhost/runtime.ts#L16)

***

### userPreferences

> **userPreferences**: [`UserPreferencesStore`](../../../../../types/user/type-aliases/UserPreferencesStore.md)

Defined in: [src/apps/components/shellhost/runtime.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/apps/components/shellhost/runtime.ts#L17)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L48)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`__start`](../../../../../ts/process/instance/classes/Process.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:54](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L54)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`__stop`](../../../../../ts/process/instance/classes/Process.md#__stop)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/process/instance.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L60)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`killSelf`](../../../../../ts/process/instance/classes/Process.md#killself)

***

### Log()

> `protected` **Log**(`message`, `level`): `void`

Defined in: [src/ts/process/instance.ts:67](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L67)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`Log`](../../../../../ts/process/instance/classes/Process.md#log)

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/process/instance.ts:73](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L73)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `false`\>

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`requestFileLock`](../../../../../ts/process/instance/classes/Process.md#requestfilelock)

***

### start()

> **start**(): `Promise`\<`undefined` \| `false`\>

Defined in: [src/apps/components/shellhost/runtime.ts:27](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/apps/components/shellhost/runtime.ts#L27)

#### Returns

`Promise`\<`undefined` \| `false`\>

#### Overrides

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`start`](../../../../../ts/process/instance/classes/Process.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:40](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L40)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`stop`](../../../../../ts/process/instance/classes/Process.md#stop)

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`undefined` \| `false`\>

Defined in: [src/ts/process/instance.ts:85](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L85)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`undefined` \| `false`\>

#### Inherited from

[`Process`](../../../../../ts/process/instance/classes/Process.md).[`unlockFile`](../../../../../ts/process/instance/classes/Process.md#unlockfile)
