[**ArcOS v7**](../../../../README.md)

***

[ArcOS v7](../../../../modules.md) / [ts/server/admin](../README.md) / AdminBootstrapper

# Class: AdminBootstrapper

Defined in: [src/ts/server/admin/index.ts:25](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L25)

## Extends

- [`BaseService`](../../../services/base/classes/BaseService.md)

## Constructors

### Constructor

> **new AdminBootstrapper**(`handler`, `pid`, `parentPid`, `name`, `host`): `AdminBootstrapper`

Defined in: [src/ts/server/admin/index.ts:30](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L30)

#### Parameters

##### handler

[`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)

##### pid

`number`

##### parentPid

`number`

##### name

`string`

##### host

[`ServiceHost`](../../../services/classes/ServiceHost.md)

#### Returns

`AdminBootstrapper`

#### Overrides

[`BaseService`](../../../services/base/classes/BaseService.md).[`constructor`](../../../services/base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:22](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L22)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`_criticalProcess`](../../../services/base/classes/BaseService.md#_criticalprocess)

***

### \_disposed

> **\_disposed**: `boolean` = `false`

Defined in: [src/ts/process/instance.ts:21](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L21)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`_disposed`](../../../services/base/classes/BaseService.md#_disposed)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/services/base.ts:7](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/base.ts#L7)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`activated`](../../../services/base/classes/BaseService.md#activated)

***

### dispatch

> **dispatch**: [`ProcessDispatch`](../../../process/dispatch/classes/ProcessDispatch.md)

Defined in: [src/ts/process/instance.ts:15](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L15)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`dispatch`](../../../services/base/classes/BaseService.md#dispatch)

***

### env

> **env**: [`Environment`](../../../kernel/env/classes/Environment.md)

Defined in: [src/ts/process/instance.ts:12](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L12)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`env`](../../../services/base/classes/BaseService.md#env)

***

### fs

> **fs**: [`Filesystem`](../../../fs/classes/Filesystem.md)

Defined in: [src/ts/process/instance.ts:23](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L23)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`fs`](../../../services/base/classes/BaseService.md#fs)

***

### handler

> **handler**: [`ProcessHandler`](../../../process/handler/classes/ProcessHandler.md)

Defined in: [src/ts/process/instance.ts:14](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L14)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`handler`](../../../services/base/classes/BaseService.md#handler)

***

### host

> **host**: [`ServiceHost`](../../../services/classes/ServiceHost.md)

Defined in: [src/ts/services/base.ts:6](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/base.ts#L6)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`host`](../../../services/base/classes/BaseService.md#host)

***

### kernel

> **kernel**: [`WaveKernel`](../../../kernel/classes/WaveKernel.md)

Defined in: [src/ts/process/instance.ts:17](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L17)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`kernel`](../../../services/base/classes/BaseService.md#kernel)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/process/instance.ts:20](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L20)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`name`](../../../services/base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/process/instance.ts:19](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L19)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`parentPid`](../../../services/base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/process/instance.ts:18](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L18)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`pid`](../../../services/base/classes/BaseService.md#pid)

***

### soundBus

> **soundBus**: [`SoundBus`](../../../soundbus/classes/SoundBus.md)

Defined in: [src/ts/process/instance.ts:13](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L13)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`soundBus`](../../../services/base/classes/BaseService.md#soundbus)

***

### systemDispatch

> **systemDispatch**: [`SystemDispatch`](../../../dispatch/classes/SystemDispatch.md)

Defined in: [src/ts/process/instance.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L16)

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`systemDispatch`](../../../services/base/classes/BaseService.md#systemdispatch)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:48](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L48)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`__start`](../../../services/base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:54](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L54)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`__stop`](../../../services/base/classes/BaseService.md#__stop)

***

### \_activate()

> **\_activate**(...`args`): `Promise`\<`void`\>

Defined in: [src/ts/services/base.ts:16](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/services/base.ts#L16)

#### Parameters

##### args

...`any`[]

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`_activate`](../../../services/base/classes/BaseService.md#_activate)

***

### activate()

> **activate**(`token`): `Promise`\<`void`\>

Defined in: [src/ts/server/admin/index.ts:34](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L34)

#### Parameters

##### token

`string`

#### Returns

`Promise`\<`void`\>

#### Overrides

[`BaseService`](../../../services/base/classes/BaseService.md).[`activate`](../../../services/base/classes/BaseService.md#activate)

***

### addUserToShare()

> **addUserToShare**(`shareId`, `userId`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:664](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L664)

#### Parameters

##### shareId

`string`

##### userId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### afterActivate()

> **afterActivate**(): `Promise`\<`void`\>

Defined in: [src/ts/server/admin/index.ts:38](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L38)

#### Returns

`Promise`\<`void`\>

#### Overrides

[`BaseService`](../../../services/base/classes/BaseService.md).[`afterActivate`](../../../services/base/classes/BaseService.md#afteractivate)

***

### approveUser()

> **approveUser**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:322](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L322)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### canAccess()

> **canAccess**(...`scopes`): `boolean`

Defined in: [src/ts/server/admin/index.ts:606](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L606)

#### Parameters

##### scopes

...`string`[]

#### Returns

`boolean`

***

### changeEmailOf()

> **changeEmailOf**(`username`, `newEmail`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:346](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L346)

#### Parameters

##### username

`string`

##### newEmail

`string`

#### Returns

`Promise`\<`boolean`\>

***

### changePasswordOf()

> **changePasswordOf**(`username`, `newPassword`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:358](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L358)

#### Parameters

##### username

`string`

##### newPassword

`string`

#### Returns

`Promise`\<`boolean`\>

***

### changeShareOwner()

> **changeShareOwner**(`shareId`, `newUserId`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:724](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L724)

#### Parameters

##### shareId

`string`

##### newUserId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### changeSharePassword()

> **changeSharePassword**(`shareId`, `newPassword`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:700](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L700)

#### Parameters

##### shareId

`string`

##### newPassword

`string`

#### Returns

`Promise`\<`boolean`\>

***

### closeBugReport()

> **closeBugReport**(`reportId`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:256](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L256)

#### Parameters

##### reportId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deActivateTotpOf()

> **deActivateTotpOf**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:498](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L498)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteActivitiesOf()

> **deleteActivitiesOf**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:466](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L466)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteAllActivities()

> **deleteAllActivities**(): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:454](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L454)

#### Returns

`Promise`\<`boolean`\>

***

### deleteAllFsAccessors()

> **deleteAllFsAccessors**(): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:546](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L546)

#### Returns

`Promise`\<`boolean`\>

***

### deleteBugReport()

> **deleteBugReport**(`reportId`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:244](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L244)

#### Parameters

##### reportId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteFsAccessorsOf()

> **deleteFsAccessorsOf**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:556](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L556)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteIndexingOf()

> **deleteIndexingOf**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:596](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L596)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteShare()

> **deleteShare**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:642](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L642)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteShareAccessors()

> **deleteShareAccessors**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:688](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L688)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteTotpOf()

> **deleteTotpOf**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:514](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L514)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteUser()

> **deleteUser**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:170](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L170)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### disapproveUser()

> **disapproveUser**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:334](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L334)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### forceIndexFor()

> **forceIndexFor**(`username`): `Promise`\<`string`[]\>

Defined in: [src/ts/server/admin/index.ts:586](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L586)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`string`[]\>

***

### getActivityOf()

> **getActivityOf**(`username`): `Promise`\<[`Activity`](../../../../types/admin/interfaces/Activity.md)[]\>

Defined in: [src/ts/server/admin/index.ts:442](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L442)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`Activity`](../../../../types/admin/interfaces/Activity.md)[]\>

***

### getAllActivity()

> **getAllActivity**(): `Promise`\<[`Activity`](../../../../types/admin/interfaces/Activity.md)[]\>

Defined in: [src/ts/server/admin/index.ts:430](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L430)

#### Returns

`Promise`\<[`Activity`](../../../../types/admin/interfaces/Activity.md)[]\>

***

### getAllBugReports()

> **getAllBugReports**(): `Promise`\<[`BugReport`](../../../../types/bughunt/interfaces/BugReport.md)[]\>

Defined in: [src/ts/server/admin/index.ts:288](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L288)

#### Returns

`Promise`\<[`BugReport`](../../../../types/bughunt/interfaces/BugReport.md)[]\>

***

### getAllFsAccessors()

> **getAllFsAccessors**(): `Promise`\<[`FsAccess`](../../../../types/admin/interfaces/FsAccess.md)[]\>

Defined in: [src/ts/server/admin/index.ts:526](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L526)

#### Returns

`Promise`\<[`FsAccess`](../../../../types/admin/interfaces/FsAccess.md)[]\>

***

### getAllIndexingNodes()

> **getAllIndexingNodes**(): `Promise`\<[`FSItem`](../../../../types/admin/interfaces/FSItem.md)[]\>

Defined in: [src/ts/server/admin/index.ts:566](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L566)

#### Returns

`Promise`\<[`FSItem`](../../../../types/admin/interfaces/FSItem.md)[]\>

***

### getAllShares()

> **getAllShares**(): `Promise`\<[`SharedDriveType`](../../../../types/shares/interfaces/SharedDriveType.md)[]\>

Defined in: [src/ts/server/admin/index.ts:622](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L622)

#### Returns

`Promise`\<[`SharedDriveType`](../../../../types/shares/interfaces/SharedDriveType.md)[]\>

***

### getAllTokens()

> **getAllTokens**(): `Promise`\<[`Token`](../../../../types/admin/interfaces/Token.md)[]\>

Defined in: [src/ts/server/admin/index.ts:194](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L194)

#### Returns

`Promise`\<[`Token`](../../../../types/admin/interfaces/Token.md)[]\>

***

### getAllTotp()

> **getAllTotp**(): `Promise`\<[`PartialUserTotp`](../../../../types/admin/interfaces/PartialUserTotp.md)[]\>

Defined in: [src/ts/server/admin/index.ts:478](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L478)

#### Returns

`Promise`\<[`PartialUserTotp`](../../../../types/admin/interfaces/PartialUserTotp.md)[]\>

***

### getAllUsers()

> **getAllUsers**(): `Promise`\<[`ExpandedUserInfo`](../../../../types/user/type-aliases/ExpandedUserInfo.md)[]\>

Defined in: [src/ts/server/admin/index.ts:82](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L82)

#### Returns

`Promise`\<[`ExpandedUserInfo`](../../../../types/user/type-aliases/ExpandedUserInfo.md)[]\>

***

### getAuditLog()

> **getAuditLog**(): `Promise`\<[`AuditLog`](../../../../types/admin/interfaces/AuditLog.md)[]\>

Defined in: [src/ts/server/admin/index.ts:112](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L112)

#### Returns

`Promise`\<[`AuditLog`](../../../../types/admin/interfaces/AuditLog.md)[]\>

***

### getAvailableScopes()

> **getAvailableScopes**(): `Promise`\<`Record`\<`string`, `string`\>\>

Defined in: [src/ts/server/admin/index.ts:370](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L370)

#### Returns

`Promise`\<`Record`\<`string`, `string`\>\>

***

### getBugHuntStatistics()

> **getBugHuntStatistics**(): `Promise`\<`undefined` \| [`ReportStatistics`](../../../../types/bughunt/interfaces/ReportStatistics.md)\>

Defined in: [src/ts/server/admin/index.ts:310](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L310)

#### Returns

`Promise`\<`undefined` \| [`ReportStatistics`](../../../../types/bughunt/interfaces/ReportStatistics.md)\>

***

### getBugReport()

> **getBugReport**(`id`): `Promise`\<`undefined` \| [`BugReport`](../../../../types/bughunt/interfaces/BugReport.md)\>

Defined in: [src/ts/server/admin/index.ts:300](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L300)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`undefined` \| [`BugReport`](../../../../types/bughunt/interfaces/BugReport.md)\>

***

### getFsAccessorsOf()

> **getFsAccessorsOf**(`username`): `Promise`\<[`FsAccess`](../../../../types/admin/interfaces/FsAccess.md)[]\>

Defined in: [src/ts/server/admin/index.ts:536](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L536)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`FsAccess`](../../../../types/admin/interfaces/FsAccess.md)[]\>

***

### getIndexingNodesOf()

> **getIndexingNodesOf**(`username`): `Promise`\<[`FSItem`](../../../../types/admin/interfaces/FSItem.md)[]\>

Defined in: [src/ts/server/admin/index.ts:576](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L576)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`FSItem`](../../../../types/admin/interfaces/FSItem.md)[]\>

***

### getMissingScopes()

> **getMissingScopes**(...`scopes`): `string`[]

Defined in: [src/ts/server/admin/index.ts:616](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L616)

#### Parameters

##### scopes

...`string`[]

#### Returns

`string`[]

***

### getPreferencesOf()

> **getPreferencesOf**(`username`): `Promise`\<`undefined` \| [`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)\>

Defined in: [src/ts/server/admin/index.ts:146](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L146)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`undefined` \| [`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)\>

***

### getQuotaOf()

> **getQuotaOf**(`username`): `Promise`\<`undefined` \| [`UserQuota`](../../../../types/fs/interfaces/UserQuota.md)\>

Defined in: [src/ts/server/admin/index.ts:406](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L406)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`undefined` \| [`UserQuota`](../../../../types/fs/interfaces/UserQuota.md)\>

***

### getScopesOf()

> **getScopesOf**(`username`): `Promise`\<`string`[]\>

Defined in: [src/ts/server/admin/index.ts:382](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L382)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`string`[]\>

***

### getServerLogs()

> **getServerLogs**(): `Promise`\<[`ServerLogItem`](../../../../types/admin/interfaces/ServerLogItem.md)[]\>

Defined in: [src/ts/server/admin/index.ts:102](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L102)

#### Returns

`Promise`\<[`ServerLogItem`](../../../../types/admin/interfaces/ServerLogItem.md)[]\>

***

### getShareAccessors()

> **getShareAccessors**(`shareId`): `Promise`\<[`FSItem`](../../../../types/admin/interfaces/FSItem.md)[]\>

Defined in: [src/ts/server/admin/index.ts:676](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L676)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`FSItem`](../../../../types/admin/interfaces/FSItem.md)[]\>

***

### getSharesOf()

> **getSharesOf**(`userId`): `Promise`\<[`SharedDriveType`](../../../../types/shares/interfaces/SharedDriveType.md)[]\>

Defined in: [src/ts/server/admin/index.ts:632](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L632)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`SharedDriveType`](../../../../types/shares/interfaces/SharedDriveType.md)[]\>

***

### getStatistics()

> **getStatistics**(): `Promise`\<`undefined` \| [`ServerStatistics`](../../../../types/admin/interfaces/ServerStatistics.md)\>

Defined in: [src/ts/server/admin/index.ts:182](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L182)

#### Returns

`Promise`\<`undefined` \| [`ServerStatistics`](../../../../types/admin/interfaces/ServerStatistics.md)\>

***

### getStatisticsOf()

> **getStatisticsOf**(`userId`): `Promise`\<`undefined` \| [`UserStatistics`](../../../../types/admin/interfaces/UserStatistics.md)\>

Defined in: [src/ts/server/admin/index.ts:736](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L736)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<`undefined` \| [`UserStatistics`](../../../../types/admin/interfaces/UserStatistics.md)\>

***

### getTotpOf()

> **getTotpOf**(`username`): `Promise`\<`undefined` \| [`UserTotp`](../../../../types/admin/interfaces/UserTotp.md)\>

Defined in: [src/ts/server/admin/index.ts:488](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L488)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`undefined` \| [`UserTotp`](../../../../types/admin/interfaces/UserTotp.md)\>

***

### getUserByUsername()

> **getUserByUsername**(`username`): `Promise`\<`undefined` \| [`UserInfo`](../../../../types/user/interfaces/UserInfo.md)\>

Defined in: [src/ts/server/admin/index.ts:96](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L96)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`undefined` \| [`UserInfo`](../../../../types/user/interfaces/UserInfo.md)\>

***

### getUserInfo()

> **getUserInfo**(): `Promise`\<`undefined` \| [`UserInfo`](../../../../types/user/interfaces/UserInfo.md)\>

Defined in: [src/ts/server/admin/index.ts:46](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L46)

#### Returns

`Promise`\<`undefined` \| [`UserInfo`](../../../../types/user/interfaces/UserInfo.md)\>

***

### grantAdmin()

> **grantAdmin**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:122](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L122)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### kickUserFromShare()

> **kickUserFromShare**(`shareId`, `userId`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:652](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L652)

#### Parameters

##### shareId

`string`

##### userId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/process/instance.ts:60](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L60)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`killSelf`](../../../services/base/classes/BaseService.md#killself)

***

### Log()

> `protected` **Log**(`message`, `level`): `void`

Defined in: [src/ts/process/instance.ts:67](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L67)

#### Parameters

##### message

`string`

##### level

[`LogLevel`](../../../../types/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`Log`](../../../services/base/classes/BaseService.md#log)

***

### mountAllUsers()

> **mountAllUsers**(): `Promise`\<`void`\>

Defined in: [src/ts/server/admin/index.ts:74](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L74)

#### Returns

`Promise`\<`void`\>

***

### mountUserDrive()

> **mountUserDrive**(`username`, `driveLetter?`, `onProgress?`): `Promise`\<`void`\>

Defined in: [src/ts/server/admin/index.ts:70](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L70)

#### Parameters

##### username

`string`

##### driveLetter?

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`void`\>

***

### purgeAllTokens()

> **purgeAllTokens**(): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:206](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L206)

#### Returns

`Promise`\<`boolean`\>

***

### purgeOneToken()

> **purgeOneToken**(`id`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:220](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L220)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

***

### purgeUserTokens()

> **purgeUserTokens**(`userId`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:232](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L232)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### renameShare()

> **renameShare**(`shareId`, `newName`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:712](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L712)

#### Parameters

##### shareId

`string`

##### newName

`string`

#### Returns

`Promise`\<`boolean`\>

***

### reopenBugReport()

> **reopenBugReport**(`reportId`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:272](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L272)

#### Parameters

##### reportId

`string`

#### Returns

`Promise`\<`boolean`\>

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

[`BaseService`](../../../services/base/classes/BaseService.md).[`requestFileLock`](../../../services/base/classes/BaseService.md#requestfilelock)

***

### revokeAdmin()

> **revokeAdmin**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:134](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L134)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### setPreferencesOf()

> **setPreferencesOf**(`username`, `preferences`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:158](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L158)

#### Parameters

##### username

`string`

##### preferences

[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<`boolean`\>

***

### setQuotaOf()

> **setQuotaOf**(`username`, `newQuota`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:418](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L418)

#### Parameters

##### username

`string`

##### newQuota

`number`

#### Returns

`Promise`\<`boolean`\>

***

### setScopesOf()

> **setScopesOf**(`username`, `scopes`): `Promise`\<`boolean`\>

Defined in: [src/ts/server/admin/index.ts:394](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/admin/index.ts#L394)

#### Parameters

##### username

`string`

##### scopes

`string`[]

#### Returns

`Promise`\<`boolean`\>

***

### start()

> `protected` **start**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:44](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L44)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`start`](../../../services/base/classes/BaseService.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/process/instance.ts:40](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/process/instance.ts#L40)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../services/base/classes/BaseService.md).[`stop`](../../../services/base/classes/BaseService.md#stop)

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

[`BaseService`](../../../services/base/classes/BaseService.md).[`unlockFile`](../../../services/base/classes/BaseService.md#unlockfile)
