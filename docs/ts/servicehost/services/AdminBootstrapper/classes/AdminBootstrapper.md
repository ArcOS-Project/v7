[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/servicehost/services/AdminBootstrapper](../README.md) / AdminBootstrapper

# Class: AdminBootstrapper

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:55](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L55)

## Extends

- [`BaseService`](../../../base/classes/BaseService.md)

## Implements

- [`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md)

## Constructors

### Constructor

> **new AdminBootstrapper**(`pid`, `parentPid`, `name`, `host`, `initBroadcast?`): `AdminBootstrapper`

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:69](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L69)

#### Parameters

##### pid

`number`

##### parentPid

`number`

##### name

`string`

##### host

[`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

##### initBroadcast?

(`msg`) => `void`

#### Returns

`AdminBootstrapper`

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`constructor`](../../../base/classes/BaseService.md#constructor)

## Properties

### \_criticalProcess

> **\_criticalProcess**: `boolean` = `false`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L30)

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`_criticalProcess`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#_criticalprocess)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_criticalProcess`](../../../base/classes/BaseService.md#_criticalprocess)

***

### activated

> **activated**: `boolean` = `false`

Defined in: [src/ts/servicehost/base.ts:9](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L9)

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`activated`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#activated)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`activated`](../../../base/classes/BaseService.md#activated)

***

### dispatch

> **dispatch**: [`IProcessDispatch`](../../../../../interfaces/IProcess/interfaces/IProcessDispatch.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L11)

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`dispatch`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#dispatch)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`dispatch`](../../../base/classes/BaseService.md#dispatch)

***

### host

> **host**: [`IServiceHost`](../../../../../interfaces/IServiceHost/interfaces/IServiceHost.md)

Defined in: [src/ts/servicehost/base.ts:8](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L8)

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`host`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#host)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`host`](../../../base/classes/BaseService.md#host)

***

### initBroadcast?

> `optional` **initBroadcast?**: (`msg`) => `void`

Defined in: [src/ts/servicehost/base.ts:10](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L10)

#### Parameters

##### msg

`string`

#### Returns

`void`

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`initBroadcast`](../../../base/classes/BaseService.md#initbroadcast)

***

### name

> **name**: `string` = `""`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L14)

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`name`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#name)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`name`](../../../base/classes/BaseService.md#name)

***

### parentPid

> **parentPid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L13)

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`parentPid`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#parentpid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`parentPid`](../../../base/classes/BaseService.md#parentpid)

***

### pid

> **pid**: `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L12)

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`pid`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#pid)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`pid`](../../../base/classes/BaseService.md#pid)

***

### sourceUrl

> **sourceUrl**: `string` = `"undetermined"`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:31](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L31)

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`sourceUrl`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#sourceurl)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`sourceUrl`](../../../base/classes/BaseService.md#sourceurl)

## Accessors

### \_disposed

#### Get Signature

> **get** **\_disposed**(): `boolean`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:26](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L26)

##### Returns

`boolean`

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`_disposed`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#_disposed)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`_disposed`](../../../base/classes/BaseService.md#_disposed)

***

### MEMORY

#### Get Signature

> **get** **MEMORY**(): `number`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L41)

##### Returns

`number`

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`MEMORY`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#memory)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`MEMORY`](../../../base/classes/BaseService.md#memory)

***

### shell

#### Get Signature

> **get** **shell**(): [`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

Defined in: [src/ts/servicehost/base.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L12)

##### Returns

[`IShellRuntime`](../../../../../interfaces/runtimes/IShellRuntime/interfaces/IShellRuntime.md) \| `undefined`

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`shell`](../../../base/classes/BaseService.md#shell)

***

### STATE

#### Get Signature

> **get** **STATE**(): [`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:17](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L17)

##### Returns

[`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

#### Set Signature

> **set** **STATE**(`value`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:21](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L21)

##### Parameters

###### value

[`ProcessState`](../../../../../types/system/process/type-aliases/ProcessState.md)

##### Returns

`void`

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`STATE`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#state)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`STATE`](../../../base/classes/BaseService.md#state)

## Methods

### \_\_start()

> **\_\_start**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:53](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L53)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`__start`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#__start)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__start`](../../../base/classes/BaseService.md#__start)

***

### \_\_stop()

> **\_\_stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:67](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L67)

#### Returns

`Promise`\<`any`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`__stop`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#__stop)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`__stop`](../../../base/classes/BaseService.md#__stop)

***

### addUserToShare()

> **addUserToShare**(`shareId`, `userId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:741](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L741)

#### Parameters

##### shareId

`string`

##### userId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`addUserToShare`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#addusertoshare)

***

### approveUser()

> **approveUser**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:392](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L392)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`approveUser`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#approveuser)

***

### blockStoreItem()

> **blockStoreItem**(`id`, `reason?`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:934](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L934)

#### Parameters

##### id

`string`

##### reason?

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`blockStoreItem`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#blockstoreitem)

***

### canAccess()

> **canAccess**(...`scopes`): `boolean`

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:667](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L667)

#### Parameters

##### scopes

...`string`[]

#### Returns

`boolean`

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`canAccess`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#canaccess)

***

### canAccessP()

> **canAccessP**(`provided`, ...`scopes`): `boolean`

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:678](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L678)

#### Parameters

##### provided

[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md)

##### scopes

...`string`[]

#### Returns

`boolean`

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`canAccessP`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#canaccessp)

***

### changeEmailOf()

> **changeEmailOf**(`username`, `newEmail`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:414](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L414)

#### Parameters

##### username

`string`

##### newEmail

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`changeEmailOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#changeemailof)

***

### changePasswordOf()

> **changePasswordOf**(`username`, `newPassword`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:425](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L425)

#### Parameters

##### username

`string`

##### newPassword

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`changePasswordOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#changepasswordof)

***

### changeShareOwner()

> **changeShareOwner**(`shareId`, `newUserId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:796](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L796)

#### Parameters

##### shareId

`string`

##### newUserId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`changeShareOwner`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#changeshareowner)

***

### changeSharePassword()

> **changeSharePassword**(`shareId`, `newPassword`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:774](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L774)

#### Parameters

##### shareId

`string`

##### newPassword

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`changeSharePassword`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#changesharepassword)

***

### closeBugReport()

> **closeBugReport**(`reportId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:337](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L337)

#### Parameters

##### reportId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`closeBugReport`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#closebugreport)

***

### createMailbrokerKey()

> **createMailbrokerKey**(`serverName`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`MailKey`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailKey.md)\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1365](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1365)

#### Parameters

##### serverName

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`MailKey`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailKey.md)\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`createMailbrokerKey`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#createmailbrokerkey)

***

### createMailbrokerTemplate()

> **createMailbrokerTemplate**(`data`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1467](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1467)

#### Parameters

##### data

[`MailTemplateCreate`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailTemplateCreate.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`createMailbrokerTemplate`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#createmailbrokertemplate)

***

### createTemporaryLogin()

> **createTemporaryLogin**(`userId`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`AdminTemporaryPassword`](../../../../../types/server/admin/interfaces/AdminTemporaryPassword.md)\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1231](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1231)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`AdminTemporaryPassword`](../../../../../types/server/admin/interfaces/AdminTemporaryPassword.md)\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`createTemporaryLogin`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#createtemporarylogin)

***

### deactivate()

> **deactivate**(`broadcast?`): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/base.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L30)

#### Parameters

##### broadcast?

(`m`) => `void`

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deactivate`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deactivate)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`deactivate`](../../../base/classes/BaseService.md#deactivate)

***

### deActivateTotpOf()

> **deActivateTotpOf**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:557](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L557)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deActivateTotpOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deactivatetotpof)

***

### deleteActivitiesOf()

> **deleteActivitiesOf**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:524](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L524)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteActivitiesOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deleteactivitiesof)

***

### deleteAllActivities()

> **deleteAllActivities**(): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:513](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L513)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteAllActivities`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deleteallactivities)

***

### deleteAllFsAccessors()

> **deleteAllFsAccessors**(): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:601](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L601)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteAllFsAccessors`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deleteallfsaccessors)

***

### deleteBugReport()

> **deleteBugReport**(`reportId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:326](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L326)

#### Parameters

##### reportId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteBugReport`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deletebugreport)

***

### deleteFsAccessorsOf()

> **deleteFsAccessorsOf**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:612](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L612)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteFsAccessorsOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deletefsaccessorsof)

***

### deleteIndexingOf()

> **deleteIndexingOf**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:656](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L656)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteIndexingOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deleteindexingof)

***

### deleteMailbrokerKey()

> **deleteMailbrokerKey**(`id`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1332](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1332)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteMailbrokerKey`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deletemailbrokerkey)

***

### deleteMailbrokerSentRecord()

> **deleteMailbrokerSentRecord**(`id`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1412](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1412)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteMailbrokerSentRecord`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deletemailbrokersentrecord)

***

### deleteMailbrokerTemplate()

> **deleteMailbrokerTemplate**(`id`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1445](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1445)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteMailbrokerTemplate`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deletemailbrokertemplate)

***

### deleteShare()

> **deleteShare**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:719](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L719)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteShare`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deleteshare)

***

### deleteShareAccessors()

> **deleteShareAccessors**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:763](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L763)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteShareAccessors`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deleteshareaccessors)

***

### deleteStoreItem()

> **deleteStoreItem**(`_id`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:862](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L862)

#### Parameters

##### \_id

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteStoreItem`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deletestoreitem)

***

### deleteStoreItemVerification()

> **deleteStoreItemVerification**(`id`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1080](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1080)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteStoreItemVerification`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deletestoreitemverification)

***

### deleteTotpOf()

> **deleteTotpOf**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:568](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L568)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteTotpOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deletetotpof)

***

### deleteUser()

> **deleteUser**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:258](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L258)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteUser`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deleteuser)

***

### deleteUserStoreItems()

> **deleteUserStoreItems**(`userId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:872](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L872)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deleteUserStoreItems`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deleteuserstoreitems)

***

### deprecateMailbrokerTemplate()

> **deprecateMailbrokerTemplate**(`id`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1423](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1423)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deprecateMailbrokerTemplate`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deprecatemailbrokertemplate)

***

### deprecatePackage()

> **deprecatePackage**(`itemId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:904](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L904)

#### Parameters

##### itemId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`deprecatePackage`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#deprecatepackage)

***

### disableMailbrokerKey()

> **disableMailbrokerKey**(`id`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1343](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1343)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`disableMailbrokerKey`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#disablemailbrokerkey)

***

### disapproveUser()

> **disapproveUser**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:403](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L403)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`disapproveUser`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#disapproveuser)

***

### enableMailbrokerKey()

> **enableMailbrokerKey**(`id`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1354](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1354)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`enableMailbrokerKey`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#enablemailbrokerkey)

***

### forceIndexFor()

> **forceIndexFor**(`username`): `Promise`\<`string`[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:645](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L645)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`forceIndexFor`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#forceindexfor)

***

### getActivityOf()

> **getActivityOf**(`username`): `Promise`\<[`Activity`](../../../../../types/server/admin/interfaces/Activity.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:502](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L502)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`Activity`](../../../../../types/server/admin/interfaces/Activity.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getActivityOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getactivityof)

***

### getAllActivity()

> **getAllActivity**(): `Promise`\<[`Activity`](../../../../../types/server/admin/interfaces/Activity.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:491](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L491)

#### Returns

`Promise`\<[`Activity`](../../../../../types/server/admin/interfaces/Activity.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getAllActivity`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getallactivity)

***

### getAllBugReports()

> **getAllBugReports**(): `Promise`\<[`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:359](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L359)

#### Returns

`Promise`\<[`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getAllBugReports`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getallbugreports)

***

### getAllFsAccessors()

> **getAllFsAccessors**(): `Promise`\<[`FsAccess`](../../../../../types/server/admin/interfaces/FsAccess.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:579](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L579)

#### Returns

`Promise`\<[`FsAccess`](../../../../../types/server/admin/interfaces/FsAccess.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getAllFsAccessors`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getallfsaccessors)

***

### getAllIndexingNodes()

> **getAllIndexingNodes**(): `Promise`\<[`FSItem`](../../../../../types/server/admin/interfaces/FSItem.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:623](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L623)

#### Returns

`Promise`\<[`FSItem`](../../../../../types/server/admin/interfaces/FSItem.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getAllIndexingNodes`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getallindexingnodes)

***

### getAllMailbrokerKeys()

> **getAllMailbrokerKeys**(): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`MailKey`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailKey.md)[]\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1260](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1260)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`MailKey`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailKey.md)[]\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getAllMailbrokerKeys`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getallmailbrokerkeys)

***

### getAllShares()

> **getAllShares**(): `Promise`\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:696](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L696)

#### Returns

`Promise`\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getAllShares`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getallshares)

***

### getAllStoreItems()

> **getAllStoreItems**(): `Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:882](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L882)

#### Returns

`Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getAllStoreItems`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getallstoreitems)

***

### getAllTokens()

> **getAllTokens**(): `Promise`\<[`Token`](../../../../../types/server/admin/interfaces/Token.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:280](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L280)

#### Returns

`Promise`\<[`Token`](../../../../../types/server/admin/interfaces/Token.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getAllTokens`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getalltokens)

***

### getAllTotp()

> **getAllTotp**(): `Promise`\<[`PartialUserTotp`](../../../../../types/server/admin/interfaces/PartialUserTotp.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:535](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L535)

#### Returns

`Promise`\<[`PartialUserTotp`](../../../../../types/server/admin/interfaces/PartialUserTotp.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getAllTotp`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getalltotp)

***

### getAllUsers()

> **getAllUsers**(): `Promise`\<[`ExpandedUserInfo`](../../../../../types/user/type-aliases/ExpandedUserInfo.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:137](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L137)

#### Returns

`Promise`\<[`ExpandedUserInfo`](../../../../../types/user/type-aliases/ExpandedUserInfo.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getAllUsers`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getallusers)

***

### getAuditLog()

> **getAuditLog**(): `Promise`\<[`AuditLog`](../../../../../types/server/admin/interfaces/AuditLog.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:173](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L173)

#### Returns

`Promise`\<[`AuditLog`](../../../../../types/server/admin/interfaces/AuditLog.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getAuditLog`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getauditlog)

***

### getAvailableScopes()

> **getAvailableScopes**(): `Promise`\<`Record`\<`string`, `string`\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:436](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L436)

#### Returns

`Promise`\<`Record`\<`string`, `string`\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getAvailableScopes`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getavailablescopes)

***

### getBetaFeedbackFor()

> **getBetaFeedbackFor**(`version`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`BetaFeedback`](../../../../../types/system/beta/interfaces/BetaFeedback.md)[]\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1207](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1207)

#### Parameters

##### version

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`BetaFeedback`](../../../../../types/system/beta/interfaces/BetaFeedback.md)[]\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getBetaFeedbackFor`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getbetafeedbackfor)

***

### getBetaFeedbackVersions()

> **getBetaFeedbackVersions**(): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`Record`\<`string`, `number`\>\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1195](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1195)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`Record`\<`string`, `number`\>\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getBetaFeedbackVersions`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getbetafeedbackversions)

***

### getBugHuntStatistics()

> **getBugHuntStatistics**(): `Promise`\<[`ReportStatistics`](../../../../../types/server/bughunt/interfaces/ReportStatistics.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:381](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L381)

#### Returns

`Promise`\<[`ReportStatistics`](../../../../../types/server/bughunt/interfaces/ReportStatistics.md) \| `undefined`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getBugHuntStatistics`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getbughuntstatistics)

***

### getBugReport()

> **getBugReport**(`id`): `Promise`\<[`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:370](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L370)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md) \| `undefined`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getBugReport`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getbugreport)

***

### GetConnector()

> **GetConnector**\<`T`\>(`name`): `T`

Defined in: [src/ts/servicehost/base.ts:16](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/base.ts#L16)

#### Type Parameters

##### T

`T` *extends* [`IServerConnector`](../../../../../interfaces/modules/IServerManager/classes/IServerConnector.md)

#### Parameters

##### name

`string`

#### Returns

`T`

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`GetConnector`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getconnector)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`GetConnector`](../../../base/classes/BaseService.md#getconnector)

***

### getFsAccessorsOf()

> **getFsAccessorsOf**(`username`): `Promise`\<[`FsAccess`](../../../../../types/server/admin/interfaces/FsAccess.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:590](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L590)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`FsAccess`](../../../../../types/server/admin/interfaces/FsAccess.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getFsAccessorsOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getfsaccessorsof)

***

### getIndexingNodesOf()

> **getIndexingNodesOf**(`username`): `Promise`\<[`FSItem`](../../../../../types/server/admin/interfaces/FSItem.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:634](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L634)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`FSItem`](../../../../../types/server/admin/interfaces/FSItem.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getIndexingNodesOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getindexingnodesof)

***

### GetIpAddresses()

> **GetIpAddresses**(): `Promise`\<[`IpAddress`](../../../../../types/server/admin/interfaces/IpAddress.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1133](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1133)

#### Returns

`Promise`\<[`IpAddress`](../../../../../types/server/admin/interfaces/IpAddress.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`GetIpAddresses`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getipaddresses)

***

### getMailbrokerKey()

> **getMailbrokerKey**(`id`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`MailKey`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailKey.md)\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1249](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1249)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`MailKey`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailKey.md)\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getMailbrokerKey`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getmailbrokerkey)

***

### getMailbrokerLogs()

> **getMailbrokerLogs**(): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`MailLog`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailLog.md)[]\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1271](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1271)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`MailLog`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailLog.md)[]\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getMailbrokerLogs`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getmailbrokerlogs)

***

### getMailbrokerSentRecord()

> **getMailbrokerSentRecord**(`id`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1321](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1321)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getMailbrokerSentRecord`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getmailbrokersentrecord)

***

### getMailbrokerSentRecords()

> **getMailbrokerSentRecords**(): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)[]\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1299](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1299)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)[]\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getMailbrokerSentRecords`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getmailbrokersentrecords)

***

### getMailbrokerTemplate()

> **getMailbrokerTemplate**(`id`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`MailTemplate`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailTemplate.md)\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1310](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1310)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`MailTemplate`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailTemplate.md)\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getMailbrokerTemplate`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getmailbrokertemplate)

***

### getMailbrokerTemplates()

> **getMailbrokerTemplates**(`filter?`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`MailTemplate`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailTemplate.md)[]\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1282](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1282)

#### Parameters

##### filter?

(`template`) => `boolean`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`MailTemplate`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/MailTemplate.md)[]\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getMailbrokerTemplates`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getmailbrokertemplates)

***

### getMigrationIndexFor()

> **getMigrationIndexFor**(`username`): `Promise`\<`Record`\<`string`, `number`\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1120](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1120)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`Record`\<`string`, `number`\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getMigrationIndexFor`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getmigrationindexfor)

***

### getMissingScopes()

> **getMissingScopes**(...`scopes`): `string`[]

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:689](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L689)

#### Parameters

##### scopes

...`string`[]

#### Returns

`string`[]

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getMissingScopes`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getmissingscopes)

***

### getPreferencesOf()

> **getPreferencesOf**(`username`): `Promise`\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:236](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L236)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md) \| `undefined`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getPreferencesOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getpreferencesof)

***

### getQuotaOf()

> **getQuotaOf**(`username`): `Promise`\<[`UserQuota`](../../../../../types/system/fs/interfaces/UserQuota.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:469](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L469)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`UserQuota`](../../../../../types/system/fs/interfaces/UserQuota.md) \| `undefined`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getQuotaOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getquotaof)

***

### getRegisteredVersionFor()

> **getRegisteredVersionFor**(`username`): `Promise`\<`string`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1105](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1105)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`string`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getRegisteredVersionFor`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getregisteredversionfor)

***

### getReportSourceFile()

> **getReportSourceFile**(`report`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`BugReportSourceInformation`](../../../../../types/server/admin/interfaces/BugReportSourceInformation.md)\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1144](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1144)

#### Parameters

##### report

[`BugReport`](../../../../../types/server/bughunt/interfaces/BugReport.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`BugReportSourceInformation`](../../../../../types/server/admin/interfaces/BugReportSourceInformation.md)\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getReportSourceFile`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getreportsourcefile)

***

### getScopesOf()

> **getScopesOf**(`username`): `Promise`\<`string`[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:447](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L447)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`string`[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getScopesOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getscopesof)

***

### getServerLogs()

> **getServerLogs**(): `Promise`\<[`ServerLogItem`](../../../../../types/server/admin/interfaces/ServerLogItem.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:161](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L161)

#### Returns

`Promise`\<[`ServerLogItem`](../../../../../types/server/admin/interfaces/ServerLogItem.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getServerLogs`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getserverlogs)

***

### getShareAccessors()

> **getShareAccessors**(`shareId`): `Promise`\<[`FSItem`](../../../../../types/server/admin/interfaces/FSItem.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:752](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L752)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`FSItem`](../../../../../types/server/admin/interfaces/FSItem.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getShareAccessors`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getshareaccessors)

***

### getShareQuotaOf()

> **getShareQuotaOf**(`shareId`): `Promise`\<[`UserQuota`](../../../../../types/system/fs/interfaces/UserQuota.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:829](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L829)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<[`UserQuota`](../../../../../types/system/fs/interfaces/UserQuota.md) \| `undefined`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getShareQuotaOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getsharequotaof)

***

### getSharesOf()

> **getSharesOf**(`userId`): `Promise`\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:707](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L707)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`SharedDriveType`](../../../../../types/server/shares/interfaces/SharedDriveType.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getSharesOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getsharesof)

***

### getStatistics()

> **getStatistics**(): `Promise`\<[`ServerStatistics`](../../../../../types/server/admin/interfaces/ServerStatistics.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:269](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L269)

#### Returns

`Promise`\<[`ServerStatistics`](../../../../../types/server/admin/interfaces/ServerStatistics.md) \| `undefined`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getStatistics`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getstatistics)

***

### getStatisticsOf()

> **getStatisticsOf**(`userId`): `Promise`\<[`UserStatistics`](../../../../../types/server/admin/interfaces/UserStatistics.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:807](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L807)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`UserStatistics`](../../../../../types/server/admin/interfaces/UserStatistics.md) \| `undefined`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getStatisticsOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getstatisticsof)

***

### getStoreItem()

> **getStoreItem**(`id`): `Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:926](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L926)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getStoreItem`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getstoreitem)

***

### getStoreItemByName()

> **getStoreItemByName**(`name`): `Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:930](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L930)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md) \| `undefined`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getStoreItemByName`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getstoreitembyname)

***

### getTotpOf()

> **getTotpOf**(`username`): `Promise`\<[`UserTotp`](../../../../../types/server/admin/interfaces/UserTotp.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:546](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L546)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`UserTotp`](../../../../../types/server/admin/interfaces/UserTotp.md) \| `undefined`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getTotpOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#gettotpof)

***

### getUserByUsername()

> **getUserByUsername**(`username`): `Promise`\<[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:153](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L153)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md) \| `undefined`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getUserByUsername`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getuserbyusername)

***

### getUserInfo()

> **getUserInfo**(): `Promise`\<[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:107](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L107)

#### Returns

`Promise`\<[`UserInfo`](../../../../../types/user/interfaces/UserInfo.md) \| `undefined`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getUserInfo`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getuserinfo)

***

### getUserStoreItems()

> **getUserStoreItems**(`userId`): `Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:893](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L893)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<[`StoreItem`](../../../../../types/tpa/package/interfaces/StoreItem.md)[]\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`getUserStoreItems`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#getuserstoreitems)

***

### grantAdmin()

> **grantAdmin**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:197](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L197)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`grantAdmin`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#grantadmin)

***

### kickUserFromShare()

> **kickUserFromShare**(`shareId`, `userId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:730](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L730)

#### Parameters

##### shareId

`string`

##### userId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`kickUserFromShare`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#kickuserfromshare)

***

### killSelf()

> **killSelf**(): `Promise`\<`void`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:76](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L76)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`killSelf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#killself)

#### Inherited from

`BaseService.killSelf`

***

### lockShare()

> **lockShare**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:851](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L851)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`lockShare`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#lockshare)

***

### Log()

> `protected` **Log**(`message`, `level?`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:85](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L85)

#### Parameters

##### message

`string`

##### level?

[`LogLevel`](../../../../../types/shared/logging/enumerations/LogLevel.md) = `LogLevel.info`

#### Returns

`void`

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`Log`](../../../base/classes/BaseService.md#log)

***

### markBetaFeedbackAsRead()

> **markBetaFeedbackAsRead**(`id`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1219](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1219)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`markBetaFeedbackAsRead`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#markbetafeedbackasread)

***

### mountAllUsers()

> **mountAllUsers**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:127](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L127)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`mountAllUsers`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#mountallusers)

***

### mountUserDrive()

> **mountUserDrive**(`username`, `driveLetter?`, `onProgress?`): `Promise`\<`false` \| [`AdminServerDrive`](../../../../kernel/mods/fs/drives/aefs/classes/AdminServerDrive.md) \| `undefined`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:119](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L119)

#### Parameters

##### username

`string`

##### driveLetter?

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

#### Returns

`Promise`\<`false` \| [`AdminServerDrive`](../../../../kernel/mods/fs/drives/aefs/classes/AdminServerDrive.md) \| `undefined`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`mountUserDrive`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#mountuserdrive)

***

### purgeAllTokens()

> **purgeAllTokens**(): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:291](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L291)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`purgeAllTokens`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#purgealltokens)

***

### purgeOneToken()

> **purgeOneToken**(`id`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:304](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L304)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`purgeOneToken`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#purgeonetoken)

***

### purgeUserTokens()

> **purgeUserTokens**(`userId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:315](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L315)

#### Parameters

##### userId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`purgeUserTokens`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#purgeusertokens)

***

### queryAuditLog()

> **queryAuditLog**(`query`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`QueryResult`](../../../../../types/server/query/interfaces/QueryResult.md)\<[`AuditLog`](../../../../../types/server/admin/interfaces/AuditLog.md)\>\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:185](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L185)

#### Parameters

##### query

[`AuditLogQueryOptions`](../../../../../types/server/admin/interfaces/AuditLogQueryOptions.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`QueryResult`](../../../../../types/server/query/interfaces/QueryResult.md)\<[`AuditLog`](../../../../../types/server/admin/interfaces/AuditLog.md)\>\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`queryAuditLog`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#queryauditlog)

***

### readStoreItemFiles()

> **readStoreItemFiles**(`id`, `onProgress?`, `onStatus?`): `Promise`\<`string` \| `false`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1008](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1008)

#### Parameters

##### id

`string`

##### onProgress?

[`FilesystemProgressCallback`](../../../../../types/system/fs/type-aliases/FilesystemProgressCallback.md)

##### onStatus?

(`s`) => `void`

#### Returns

`Promise`\<`string` \| `false`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`readStoreItemFiles`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#readstoreitemfiles)

***

### renameShare()

> **renameShare**(`shareId`, `newName`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:785](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L785)

#### Parameters

##### shareId

`string`

##### newName

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`renameShare`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#renameshare)

***

### reopenBugReport()

> **reopenBugReport**(`reportId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:348](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L348)

#### Parameters

##### reportId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`reopenBugReport`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#reopenbugreport)

***

### requestFileLock()

> **requestFileLock**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:91](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L91)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`requestFileLock`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#requestfilelock)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`requestFileLock`](../../../base/classes/BaseService.md#requestfilelock)

***

### revokeAdmin()

> **revokeAdmin**(`username`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:208](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L208)

#### Parameters

##### username

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`revokeAdmin`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#revokeadmin)

***

### sendMailTemplateById()

> **sendMailTemplateById**(`id`, `userId`, `props`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1376](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1376)

#### Parameters

##### id

`string`

##### userId

`string`

##### props

`Record`\<`string`, `string`\>

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`sendMailTemplateById`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#sendmailtemplatebyid)

***

### sendMailTemplateByName()

> **sendMailTemplateByName**(`name`, `userId`, `props`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1394](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1394)

#### Parameters

##### name

`string`

##### userId

`string`

##### props

`Record`\<`string`, `string`\>

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<[`SentMail`](../../../../../types/server/mailbroker/namespaces/Mailbroker/interfaces/SentMail.md)\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`sendMailTemplateByName`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#sendmailtemplatebyname)

***

### setPreferencesOf()

> **setPreferencesOf**(`username`, `preferences`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:247](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L247)

#### Parameters

##### username

`string`

##### preferences

[`UserPreferences`](../../../../../types/user/interfaces/UserPreferences.md)

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`setPreferencesOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#setpreferencesof)

***

### setQuotaOf()

> **setQuotaOf**(`username`, `newQuota`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:480](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L480)

#### Parameters

##### username

`string`

##### newQuota

`number`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`setQuotaOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#setquotaof)

***

### setScopesOf()

> **setScopesOf**(`username`, `scopes`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:458](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L458)

#### Parameters

##### username

`string`

##### scopes

`string`[]

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`setScopesOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#setscopesof)

***

### setShareQuotaOf()

> **setShareQuotaOf**(`shareId`, `quota`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:818](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L818)

#### Parameters

##### shareId

`string`

##### quota

`number`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`setShareQuotaOf`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#setsharequotaof)

***

### setSource()

> **setSource**(`source`): `void`

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:115](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L115)

#### Parameters

##### source

`string`

#### Returns

`void`

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`setSource`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#setsource)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`setSource`](../../../base/classes/BaseService.md#setsource)

***

### setSystemFor()

> **setSystemFor**(`userId`, `value`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:219](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L219)

#### Parameters

##### userId

`string`

##### value

`boolean`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`setSystemFor`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#setsystemfor)

***

### start()

> **start**(): `Promise`\<`void`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L75)

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`start`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#start)

#### Overrides

[`BaseService`](../../../base/classes/BaseService.md).[`start`](../../../base/classes/BaseService.md#start)

***

### stop()

> `protected` **stop**(): `Promise`\<`any`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:45](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L45)

#### Returns

`Promise`\<`any`\>

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`stop`](../../../base/classes/BaseService.md#stop)

***

### storeItemMakeNotOfficial()

> **storeItemMakeNotOfficial**(`id`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:997](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L997)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`storeItemMakeNotOfficial`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#storeitemmakenotofficial)

***

### storeItemMakeOfficial()

> **storeItemMakeOfficial**(`id`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:986](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L986)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`storeItemMakeOfficial`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#storeitemmakeofficial)

***

### unblockStoreItem()

> **unblockStoreItem**(`id`, `reason?`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:960](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L960)

#### Parameters

##### id

`string`

##### reason?

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`unblockStoreItem`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#unblockstoreitem)

***

### undeprecateMailbrokerTemplate()

> **undeprecateMailbrokerTemplate**(`id`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1434](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1434)

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`undeprecateMailbrokerTemplate`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#undeprecatemailbrokertemplate)

***

### undeprecatePackage()

> **undeprecatePackage**(`itemId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:915](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L915)

#### Parameters

##### itemId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`undeprecatePackage`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#undeprecatepackage)

***

### unlockFile()

> **unlockFile**(`path`): `Promise`\<`false` \| `undefined`\>

Defined in: [src/ts/kernel/mods/stack/process/instance.ts:103](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/kernel/mods/stack/process/instance.ts#L103)

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`false` \| `undefined`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`unlockFile`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#unlockfile)

#### Inherited from

[`BaseService`](../../../base/classes/BaseService.md).[`unlockFile`](../../../base/classes/BaseService.md#unlockfile)

***

### unlockShare()

> **unlockShare**(`shareId`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:840](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L840)

#### Parameters

##### shareId

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`unlockShare`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#unlockshare)

***

### updateMailbrokerTemplate()

> **updateMailbrokerTemplate**(`id`, `update`): `Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1456](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1456)

#### Parameters

##### id

`string`

##### update

[`MailTemplateUpdate`](../../../../../types/server/mailbroker/namespaces/Mailbroker/type-aliases/MailTemplateUpdate.md)

#### Returns

`Promise`\<[`ICommandResult`](../../../../../interfaces/ICommandResult/interfaces/ICommandResult.md)\<`any`\>\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`updateMailbrokerTemplate`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#updatemailbrokertemplate)

***

### verifyStoreItem()

> **verifyStoreItem**(`id`, `note`): `Promise`\<`boolean`\>

Defined in: [src/ts/servicehost/services/AdminBootstrapper/index.ts:1091](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/servicehost/services/AdminBootstrapper/index.ts#L1091)

#### Parameters

##### id

`string`

##### note

`string`

#### Returns

`Promise`\<`boolean`\>

#### Implementation of

[`IAdminBootstrapper`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md).[`verifyStoreItem`](../../../../../interfaces/services/IAdminBootstrapper/interfaces/IAdminBootstrapper.md#verifystoreitem)
