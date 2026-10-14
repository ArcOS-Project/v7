[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [interfaces/services/IAdminBootstrapper](../README.md) / IAdminBootstrapper

# Interface: IAdminBootstrapper

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L28)

## Extends

- [`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean`

Defined in: [src/interfaces/IProcess.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L11)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`_criticalProcess`](../../../IServiceHost/interfaces/IBaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean`

Defined in: [src/interfaces/IServiceHost.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L8)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`activated`](../../../IServiceHost/interfaces/IBaseService.md#activated)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/interfaces/IProcess.ts:6](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L6)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`dispatch`](../../../IServiceHost/interfaces/IBaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/interfaces/IServiceHost.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L7)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`host`](../../../IServiceHost/interfaces/IBaseService.md#host)

***

### name

> **name**: `string`

Defined in: [src/interfaces/IProcess.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L9)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`name`](../../../IServiceHost/interfaces/IBaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/interfaces/IProcess.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L8)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`parentPid`](../../../IServiceHost/interfaces/IBaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/interfaces/IProcess.ts:7](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L7)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`pid`](../../../IServiceHost/interfaces/IBaseService.md#pid)

***

### sourceUrl

> **sourceUrl**: `string`

Defined in: [src/interfaces/IProcess.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L12)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`sourceUrl`](../../../IServiceHost/interfaces/IBaseService.md#sourceurl)

***

### STATE

> **STATE**: [`ProcessState`](../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/interfaces/IProcess.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L13)

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`STATE`](../../../IServiceHost/interfaces/IBaseService.md#state)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/interfaces/IProcess.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L10)

##### Returns

`boolean`

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`_disposed`](../../../IServiceHost/interfaces/IBaseService.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/interfaces/IProcess.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L14)

##### Returns

`number`

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`MEMORY`](../../../IServiceHost/interfaces/IBaseService.md#memory)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L15)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`__start`](../../../IServiceHost/interfaces/IBaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/interfaces/IProcess.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L16)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`__stop`](../../../IServiceHost/interfaces/IBaseService.md#__stop)

***

### addUserToShare()

> **addUserToShare**(`shareId`, `userId`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L91)

#### Parameters

##### shareId

`string`

##### userId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### approveUser()

> **approveUser**(`username`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:44](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L44)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### blockStoreItem()

> **blockStoreItem**(`id`, `reason?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:110](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L110)

#### Parameters

##### id

`string`

##### reason?

`string`

#### Returns

`Promise`\<`boolean`\>

***

### canAccess()

> **canAccess**(...`scopes`): `boolean`

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:84](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L84)

#### Parameters

##### scopes

...`string`[]

#### Returns

`boolean`

***

### canAccessP()

> **canAccessP**(`provided`, ...`scopes`): `boolean`

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L85)

#### Parameters

##### provided

[`UserInfo`](../../../../types/user/interfaces/UserInfo.md)

##### scopes

...`string`[]

#### Returns

`boolean`

***

### changeEmailOf()

> **changeEmailOf**(`username`, `newEmail`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:61](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L61)

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

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:62](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L62)

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

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:96](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L96)

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

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:94](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L94)

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

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:54](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L54)

#### Parameters

##### reportId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### createMailbrokerKey()

> **createMailbrokerKey**(`serverName`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`MailKey`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailKey.md)\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:141](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L141)

#### Parameters

##### serverName

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`MailKey`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailKey.md)\>\>

***

### createMailbrokerTemplate()

> **createMailbrokerTemplate**(`data`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:153](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L153)

#### Parameters

##### data

[`MailTemplateCreate`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailTemplateCreate.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### createTemporaryLogin()

> **createTemporaryLogin**(`userId`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`AdminTemporaryPassword`](../../../../types/server/admin/interfaces/AdminTemporaryPassword.md)\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:128](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L128)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`AdminTemporaryPassword`](../../../../types/server/admin/interfaces/AdminTemporaryPassword.md)\>\>

***

### deactivate()

> **deactivate**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IServiceHost.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L9)

#### Parameters

##### broadcast?

(`m`) => `void`

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`deactivate`](../../../IServiceHost/interfaces/IBaseService.md#deactivate)

***

### deActivateTotpOf()

> **deActivateTotpOf**(`username`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:74](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L74)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteActivitiesOf()

> **deleteActivitiesOf**(`username`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:71](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L71)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteAllActivities()

> **deleteAllActivities**(): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:70](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L70)

#### Returns

`Promise`\<`boolean`\>

***

### deleteAllFsAccessors()

> **deleteAllFsAccessors**(): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:78](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L78)

#### Returns

`Promise`\<`boolean`\>

***

### deleteBugReport()

> **deleteBugReport**(`reportId`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L53)

#### Parameters

##### reportId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteFsAccessorsOf()

> **deleteFsAccessorsOf**(`username`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:79](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L79)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteIndexingOf()

> **deleteIndexingOf**(`username`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:83](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L83)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteMailbrokerKey()

> **deleteMailbrokerKey**(`id`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:138](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L138)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### deleteMailbrokerSentRecord()

> **deleteMailbrokerSentRecord**(`id`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:148](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L148)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### deleteMailbrokerTemplate()

> **deleteMailbrokerTemplate**(`id`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:151](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L151)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### deleteShare()

> **deleteShare**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:89](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L89)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteShareAccessors()

> **deleteShareAccessors**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:93](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L93)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteStoreItem()

> **deleteStoreItem**(`_id`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:102](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L102)

#### Parameters

##### \_id

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteStoreItemVerification()

> **deleteStoreItemVerification**(`id`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:119](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L119)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteTotpOf()

> **deleteTotpOf**(`username`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L75)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteUser()

> **deleteUser**(`username`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:47](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L47)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deleteUserStoreItems()

> **deleteUserStoreItems**(`userId`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L103)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### deprecateMailbrokerTemplate()

> **deprecateMailbrokerTemplate**(`id`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:149](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L149)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### deprecatePackage()

> **deprecatePackage**(`itemId`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:106](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L106)

#### Parameters

##### itemId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### disableMailbrokerKey()

> **disableMailbrokerKey**(`id`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:139](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L139)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### disapproveUser()

> **disapproveUser**(`username`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:60](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L60)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### enableMailbrokerKey()

> **enableMailbrokerKey**(`id`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:140](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L140)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### forceIndexFor()

> **forceIndexFor**(`username`): `Promise`\<`string`[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:82](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L82)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`string`[]\>

***

### getActivityOf()

> **getActivityOf**(`username`): `Promise`\<[`Activity`](../../../../types/server/admin/interfaces/Activity.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:69](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L69)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`Activity`](../../../../types/server/admin/interfaces/Activity.md)[]\>

***

### getAllActivity()

> **getAllActivity**(): `Promise`\<[`Activity`](../../../../types/server/admin/interfaces/Activity.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:68](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L68)

#### Returns

`Promise`\<[`Activity`](../../../../types/server/admin/interfaces/Activity.md)[]\>

***

### getAllBugReports()

> **getAllBugReports**(): `Promise`\<[`BugReport`](../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:56](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L56)

#### Returns

`Promise`\<[`BugReport`](../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

***

### getAllFsAccessors()

> **getAllFsAccessors**(): `Promise`\<[`FsAccess`](../../../../types/system/fs/interfaces/FsAccess.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L76)

#### Returns

`Promise`\<[`FsAccess`](../../../../types/system/fs/interfaces/FsAccess.md)[]\>

***

### getAllIndexingNodes()

> **getAllIndexingNodes**(): `Promise`\<[`FSItem`](../../../../types/server/admin/interfaces/FSItem.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:80](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L80)

#### Returns

`Promise`\<[`FSItem`](../../../../types/server/admin/interfaces/FSItem.md)[]\>

***

### getAllMailbrokerKeys()

> **getAllMailbrokerKeys**(): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`MailKey`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailKey.md)[]\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:130](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L130)

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`MailKey`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailKey.md)[]\>\>

***

### getAllShares()

> **getAllShares**(): `Promise`\<[`SharedDriveType`](../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:87](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L87)

#### Returns

`Promise`\<[`SharedDriveType`](../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

***

### getAllStoreItems()

> **getAllStoreItems**(): `Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:104](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L104)

#### Returns

`Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

***

### getAllTokens()

> **getAllTokens**(): `Promise`\<[`Token`](../../../../types/server/admin/interfaces/Token.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:49](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L49)

#### Returns

`Promise`\<[`Token`](../../../../types/server/admin/interfaces/Token.md)[]\>

***

### getAllTotp()

> **getAllTotp**(): `Promise`\<[`PartialUserTotp`](../../../../types/server/admin/interfaces/PartialUserTotp.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:72](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L72)

#### Returns

`Promise`\<[`PartialUserTotp`](../../../../types/server/admin/interfaces/PartialUserTotp.md)[]\>

***

### getAllUsers()

> **getAllUsers**(): `Promise`\<[`ExpandedUserInfo`](../../../../types/user/type-aliases/ExpandedUserInfo.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:37](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L37)

#### Returns

`Promise`\<[`ExpandedUserInfo`](../../../../types/user/type-aliases/ExpandedUserInfo.md)[]\>

***

### getAuditLog()

> **getAuditLog**(): `Promise`\<[`AuditLog`](../../../../types/server/admin/interfaces/AuditLog.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L40)

#### Returns

`Promise`\<[`AuditLog`](../../../../types/server/admin/interfaces/AuditLog.md)[]\>

***

### getAvailableScopes()

> **getAvailableScopes**(): `Promise`\<`Record`\<`string`, `string`\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:63](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L63)

#### Returns

`Promise`\<`Record`\<`string`, `string`\>\>

***

### getBetaFeedbackFor()

> **getBetaFeedbackFor**(`version`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`BetaFeedback`](../../../../types/system/beta/interfaces/BetaFeedback.md)[]\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:126](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L126)

#### Parameters

##### version

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`BetaFeedback`](../../../../types/system/beta/interfaces/BetaFeedback.md)[]\>\>

***

### getBetaFeedbackVersions()

> **getBetaFeedbackVersions**(): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`Record`\<`string`, `number`\>\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:125](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L125)

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`Record`\<`string`, `number`\>\>\>

***

### getBugHuntStatistics()

> **getBugHuntStatistics**(): `Promise`\<[`ReportStatistics`](../../../../types/server/bughunt/interfaces/ReportStatistics.md) \| `undefined`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:58](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L58)

#### Returns

`Promise`\<[`ReportStatistics`](../../../../types/server/bughunt/interfaces/ReportStatistics.md) \| `undefined`\>

***

### getBugReport()

> **getBugReport**(`id`): `Promise`\<[`BugReport`](../../../../types/server/bughunt/interfaces/BugReport.md) \| `undefined`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:57](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L57)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`BugReport`](../../../../types/server/bughunt/interfaces/BugReport.md) \| `undefined`\>

***

### GetConnector()

> **GetConnector**\<`T`\>(`name`): `T`

Defined in: [src/interfaces/IServiceHost.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IServiceHost.ts#L10)

#### Type Parameters

##### T

`T` *extends* [`IServerConnector`](../../../modules/IServerManager/classes/IServerConnector.md)

#### Parameters

##### name

`string`

#### Returns

`T`

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`GetConnector`](../../../IServiceHost/interfaces/IBaseService.md#getconnector)

***

### getFsAccessorsOf()

> **getFsAccessorsOf**(`username`): `Promise`\<[`FsAccess`](../../../../types/system/fs/interfaces/FsAccess.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:77](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L77)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`FsAccess`](../../../../types/system/fs/interfaces/FsAccess.md)[]\>

***

### getIndexingNodesOf()

> **getIndexingNodesOf**(`username`): `Promise`\<[`FSItem`](../../../../types/server/admin/interfaces/FSItem.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:81](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L81)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`FSItem`](../../../../types/server/admin/interfaces/FSItem.md)[]\>

***

### GetIpAddresses()

> **GetIpAddresses**(): `Promise`\<[`IpAddress`](../../../../types/server/admin/interfaces/IpAddress.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:123](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L123)

#### Returns

`Promise`\<[`IpAddress`](../../../../types/server/admin/interfaces/IpAddress.md)[]\>

***

### getMailbrokerKey()

> **getMailbrokerKey**(`id`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`MailKey`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailKey.md)\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:129](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L129)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`MailKey`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailKey.md)\>\>

***

### getMailbrokerLogs()

> **getMailbrokerLogs**(): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`MailLog`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailLog.md)[]\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:131](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L131)

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`MailLog`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailLog.md)[]\>\>

***

### getMailbrokerSentRecord()

> **getMailbrokerSentRecord**(`id`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:136](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L136)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)\>\>

***

### getMailbrokerSentRecords()

> **getMailbrokerSentRecords**(): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)[]\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:137](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L137)

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)[]\>\>

***

### getMailbrokerTemplate()

> **getMailbrokerTemplate**(`id`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`MailTemplate`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailTemplate.md)\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:132](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L132)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`MailTemplate`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailTemplate.md)\>\>

***

### getMailbrokerTemplates()

> **getMailbrokerTemplates**(`filter?`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`MailTemplate`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailTemplate.md)[]\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:133](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L133)

#### Parameters

##### filter?

(`template`) => `boolean`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`MailTemplate`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailTemplate.md)[]\>\>

***

### getMigrationIndexFor()

> **getMigrationIndexFor**(`userId`): `Promise`\<`Record`\<`string`, `number`\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:122](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L122)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<`Record`\<`string`, `number`\>\>

***

### getMissingScopes()

> **getMissingScopes**(...`scopes`): `string`[]

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:86](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L86)

#### Parameters

##### scopes

...`string`[]

#### Returns

`string`[]

***

### getPreferencesOf()

> **getPreferencesOf**(`username`): `Promise`\<[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md) \| `undefined`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L45)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`UserPreferences`](../../../../types/user/interfaces/UserPreferences.md) \| `undefined`\>

***

### getQuotaOf()

> **getQuotaOf**(`username`): `Promise`\<[`UserQuota`](../../../../types/system/fs/interfaces/UserQuota.md) \| `undefined`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:66](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L66)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`UserQuota`](../../../../types/system/fs/interfaces/UserQuota.md) \| `undefined`\>

***

### getRegisteredVersionFor()

> **getRegisteredVersionFor**(`userId`): `Promise`\<`string`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:121](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L121)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<`string`\>

***

### getReportSourceFile()

> **getReportSourceFile**(`report`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`BugReportSourceInformation`](../../../../types/server/admin/interfaces/BugReportSourceInformation.md)\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:124](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L124)

#### Parameters

##### report

[`BugReport`](../../../../types/server/bughunt/interfaces/BugReport.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`BugReportSourceInformation`](../../../../types/server/admin/interfaces/BugReportSourceInformation.md)\>\>

***

### getScopesOf()

> **getScopesOf**(`username`): `Promise`\<`string`[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:64](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L64)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`string`[]\>

***

### getServerLogs()

> **getServerLogs**(): `Promise`\<[`ServerLogItem`](../../../../types/server/admin/interfaces/ServerLogItem.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L39)

#### Returns

`Promise`\<[`ServerLogItem`](../../../../types/server/admin/interfaces/ServerLogItem.md)[]\>

***

### getShareAccessors()

> **getShareAccessors**(`shareId`): `Promise`\<[`FSItem`](../../../../types/server/admin/interfaces/FSItem.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:92](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L92)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`FSItem`](../../../../types/server/admin/interfaces/FSItem.md)[]\>

***

### getShareQuotaOf()

> **getShareQuotaOf**(`shareId`): `Promise`\<[`UserQuota`](../../../../types/system/fs/interfaces/UserQuota.md) \| `undefined`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:99](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L99)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`UserQuota`](../../../../types/system/fs/interfaces/UserQuota.md) \| `undefined`\>

***

### getSharesOf()

> **getSharesOf**(`userId`): `Promise`\<[`SharedDriveType`](../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:88](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L88)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`SharedDriveType`](../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

***

### getStatistics()

> **getStatistics**(): `Promise`\<[`ServerStatistics`](../../../../types/server/admin/interfaces/ServerStatistics.md) \| `undefined`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:48](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L48)

#### Returns

`Promise`\<[`ServerStatistics`](../../../../types/server/admin/interfaces/ServerStatistics.md) \| `undefined`\>

***

### getStatisticsOf()

> **getStatisticsOf**(`userId`): `Promise`\<[`UserStatistics`](../../../../types/server/admin/interfaces/UserStatistics.md) \| `undefined`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:97](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L97)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`UserStatistics`](../../../../types/server/admin/interfaces/UserStatistics.md) \| `undefined`\>

***

### getStoreItem()

> **getStoreItem**(`id`): `Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:108](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L108)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

***

### getStoreItemByName()

> **getStoreItemByName**(`name`): `Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:109](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L109)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

***

### getTotpOf()

> **getTotpOf**(`username`): `Promise`\<[`UserTotp`](../../../../types/server/admin/interfaces/UserTotp.md) \| `undefined`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:73](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L73)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`UserTotp`](../../../../types/server/admin/interfaces/UserTotp.md) \| `undefined`\>

***

### getUserByUsername()

> **getUserByUsername**(`username`): `Promise`\<[`UserInfo`](../../../../types/user/interfaces/UserInfo.md) \| `undefined`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:38](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L38)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`UserInfo`](../../../../types/user/interfaces/UserInfo.md) \| `undefined`\>

***

### getUserInfo()

> **getUserInfo**(): `Promise`\<[`UserInfo`](../../../../types/user/interfaces/UserInfo.md) \| `undefined`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L30)

#### Returns

`Promise`\<[`UserInfo`](../../../../types/user/interfaces/UserInfo.md) \| `undefined`\>

***

### getUserStoreItems()

> **getUserStoreItems**(`userId`): `Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:105](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L105)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

***

### grantAdmin()

> **grantAdmin**(`username`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:42](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L42)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### kickUserFromShare()

> **kickUserFromShare**(`shareId`, `userId`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:90](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L90)

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

Defined in: [src/interfaces/IProcess.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L17)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`killSelf`](../../../IServiceHost/interfaces/IBaseService.md#killself)

***

### lockShare()

> **lockShare**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:101](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L101)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### markBetaFeedbackAsRead()

> **markBetaFeedbackAsRead**(`id`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:127](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L127)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### mountAllUsers()

> **mountAllUsers**(): `Promise`\<`void`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L36)

#### Returns

`Promise`\<`void`\>

***

### mountUserDrive()

> **mountUserDrive**(`username`, `driveLetter?`, `onProgress?`): `Promise`\<`false` \| [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md) \| `undefined`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L31)

#### Parameters

##### username

`string`

##### driveLetter?

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`false` \| [`IFilesystemDrive`](../../../IFilesystemDrive/interfaces/IFilesystemDrive.md) \| `undefined`\>

***

### purgeAllTokens()

> **purgeAllTokens**(): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:50](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L50)

#### Returns

`Promise`\<`boolean`\>

***

### purgeOneToken()

> **purgeOneToken**(`id`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:51](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L51)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

***

### purgeUserTokens()

> **purgeUserTokens**(`userId`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:52](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L52)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### queryAuditLog()

> **queryAuditLog**(`query`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`QueryResult`](../../../../types/server/query/interfaces/QueryResult.md)\<[`AuditLog`](../../../../types/server/admin/interfaces/AuditLog.md)\>\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L41)

#### Parameters

##### query

[`AuditLogQueryOptions`](../../../../types/server/admin/interfaces/AuditLogQueryOptions.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`QueryResult`](../../../../types/server/query/interfaces/QueryResult.md)\<[`AuditLog`](../../../../types/server/admin/interfaces/AuditLog.md)\>\>\>

***

### readStoreItemFiles()

> **readStoreItemFiles**(`id`, `onProgress?`, `onStatus?`): `Promise`\<`string` \| `false`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:114](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L114)

#### Parameters

##### id

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

##### onStatus?

(`s`) => `void`

#### Returns

`Promise`\<`string` \| `false`\>

***

### renameShare()

> **renameShare**(`shareId`, `newName`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:95](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L95)

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

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L55)

#### Parameters

##### reportId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/IProcess.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L18)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`requestFileLock`](../../../IServiceHost/interfaces/IBaseService.md#requestfilelock)

***

### revokeAdmin()

> **revokeAdmin**(`username`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:43](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L43)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

***

### sendMailTemplateById()

> **sendMailTemplateById**(`id`, `userId`, `props`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:142](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L142)

#### Parameters

##### id

`string`

##### userId

`string`

##### props

`Record`\<`string`, `string`\>

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)\>\>

***

### sendMailTemplateByName()

> **sendMailTemplateByName**(`name`, `userId`, `props`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:143](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L143)

#### Parameters

##### name

`string`

##### userId

`string`

##### props

`Record`\<`string`, `string`\>

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)\>\>

***

### setPreferencesOf()

> **setPreferencesOf**(`username`, `preferences`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:46](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L46)

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

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L67)

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

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:65](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L65)

#### Parameters

##### username

`string`

##### scopes

`string`[]

#### Returns

`Promise`\<`boolean`\>

***

### setShareQuotaOf()

> **setShareQuotaOf**(`shareId`, `quota`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:98](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L98)

#### Parameters

##### shareId

`string`

##### quota

`number`

#### Returns

`Promise`\<`boolean`\>

***

### setSource()

> **setSource**(`source`): `void`

Defined in: [src/interfaces/IProcess.ts:20](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L20)

#### Parameters

##### source

`string`

#### Returns

`void`

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`setSource`](../../../IServiceHost/interfaces/IBaseService.md#setsource)

***

### setSystemFor()

> **setSystemFor**(`username`, `value`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:59](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L59)

#### Parameters

##### username

`string`

##### value

`boolean`

#### Returns

`Promise`\<`boolean`\>

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L29)

#### Returns

`Promise`\<`void`\>

***

### storeItemMakeNotOfficial()

> **storeItemMakeNotOfficial**(`id`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:113](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L113)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

***

### storeItemMakeOfficial()

> **storeItemMakeOfficial**(`id`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:112](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L112)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

***

### unblockStoreItem()

> **unblockStoreItem**(`id`, `reason?`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:111](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L111)

#### Parameters

##### id

`string`

##### reason?

`string`

#### Returns

`Promise`\<`boolean`\>

***

### undeprecateMailbrokerTemplate()

> **undeprecateMailbrokerTemplate**(`id`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:150](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L150)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### undeprecatePackage()

> **undeprecatePackage**(`itemId`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:107](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L107)

#### Parameters

##### itemId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/interfaces/IProcess.ts:19](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IProcess.ts#L19)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Inherited from

[`IBaseService`](../../../IServiceHost/interfaces/IBaseService.md).[`unlockFile`](../../../IServiceHost/interfaces/IBaseService.md#unlockfile)

***

### unlockShare()

> **unlockShare**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:100](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L100)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### updateMailbrokerTemplate()

> **updateMailbrokerTemplate**(`id`, `update`): `Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:152](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L152)

#### Parameters

##### id

`string`

##### update

[`MailTemplateUpdate`](../../../../types/server/mailbroker/namespaces/Mailbroker/type-aliases/MailTemplateUpdate.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

***

### verifyStoreItem()

> **verifyStoreItem**(`id`, `note`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/services/IAdminBootstrapper.ts:120](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/services/IAdminBootstrapper.ts#L120)

#### Parameters

##### id

`string`

##### note

`string`

#### Returns

`Promise`\<`boolean`\>
