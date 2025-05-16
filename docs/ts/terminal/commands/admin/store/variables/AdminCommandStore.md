[**ArcOS v7**](../../../../../../README.md)

***

[ArcOS v7](../../../../../../modules.md) / [ts/terminal/commands/admin/store](../README.md) / AdminCommandStore

# Variable: AdminCommandStore

> `const` **AdminCommandStore**: `object`

Defined in: [src/ts/terminal/commands/admin/store.ts:63](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/terminal/commands/admin/store.ts#L63)

## Type declaration

### ?

> **?**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminHelp`

### accessors

> **accessors**: `object`

#### accessors.delete

> **delete**: `object`

#### accessors.delete.all

> **all**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminAccessorsDeleteAll`

#### accessors.delete.user

> **user**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminAccessorsDeleteUser`

#### accessors.list

> **list**: `object`

#### accessors.list.all

> **all**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminAccessorsListAll`

#### accessors.list.user

> **user**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminAccessorsListUser`

### activities

> **activities**: `object`

#### activities.delete

> **delete**: `object`

#### activities.delete.all

> **all**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminActivitiesDeleteAll`

#### activities.delete.user

> **user**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminActivitiesDeleteUser`

#### activities.list

> **list**: `object`

#### activities.list.all

> **all**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminActivitiesListAll`

#### activities.list.user

> **user**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminActivitiesListUser`

### admin

> **admin**: `object`

#### admin.grant

> **grant**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminGrant`

#### admin.revoke

> **revoke**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminRevoke`

#### admin.scopes

> **scopes**: `object`

#### admin.scopes.add

> **add**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminScopesAdd`

#### admin.scopes.available

> **available**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminScopesAvailable`

#### admin.scopes.get

> **get**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminScopesGet`

#### admin.scopes.remove

> **remove**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminScopesRemove`

### bughunt

> **bughunt**: `object`

#### bughunt.list

> **list**: `object`

#### bughunt.list.all

> **all**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminBugHuntListAll`

#### bughunt.report

> **report**: `object`

#### bughunt.report.close

> **close**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminBugHuntReportClose`

#### bughunt.report.delete

> **delete**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminBugHuntReportDelete`

#### bughunt.report.get

> **get**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminBugHuntReportGet`

#### bughunt.report.open

> **open**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminBugHuntReportOpen`

#### bughunt.stats

> **stats**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminBugHuntStats`

### indexing

> **indexing**: `object`

#### indexing.delete

> **delete**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminIndexingDelete`

#### indexing.force

> **force**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminIndexingForce`

#### indexing.list

> **list**: `object`

#### indexing.list.all

> **all**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminIndexingListAll`

#### indexing.list.user

> **user**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminIndexingListUser`

### mount

> **mount**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminMount`

### server

> **server**: `object`

#### server.auditlog

> **auditlog**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminServerAuditlog`

#### server.logs

> **logs**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminServerLogs`

#### server.ping

> **ping**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminServerPing`

#### server.stats

> **stats**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminServerStats`

### share

> **share**: `object`

#### share.accessors

> **accessors**: `object`

#### share.accessors.delete

> **delete**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminShareAccessorsDelete`

#### share.accessors.list

> **list**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminShareAccessorsList`

#### share.adduser

> **adduser**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminShareAdduser`

#### share.changepswd

> **changepswd**: `object`

#### share.changepswd.generated

> **generated**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminShareChangepswdGenerated`

#### share.changepswd.manual

> **manual**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminShareChangepswdManual`

#### share.chown

> **chown**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminShareChown`

#### share.delete

> **delete**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminShareDelete`

#### share.kick

> **kick**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminShareKick`

#### share.list

> **list**: `object`

#### share.list.all

> **all**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminShareListAll`

#### share.list.user

> **user**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminShareListUser`

#### share.rename

> **rename**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminShareRename`

### tokens

> **tokens**: `object`

#### tokens.list

> **list**: `object`

#### tokens.list.all

> **all**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminTokensListAll`

#### tokens.purge

> **purge**: `object`

#### tokens.purge.all

> **all**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminTokensPurgeAll`

#### tokens.purge.one

> **one**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminTokensPurgeOne`

#### tokens.purge.user

> **user**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminTokensPurgeUser`

### totp

> **totp**: `object`

#### totp.deactivate

> **deactivate**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminTotpDeactivate`

#### totp.delete

> **delete**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminTotpDelete`

#### totp.get

> **get**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminTotpGet`

#### totp.list

> **list**: `object`

#### totp.list.all

> **all**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminTotpListAll`

### user

> **user**: `object`

#### user.approve

> **approve**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminUserApprove`

#### user.changeemail

> **changeemail**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminUserChangeemail`

#### user.changepswd

> **changepswd**: `object`

#### user.changepswd.generated

> **generated**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminUserChangepswdGenerated`

#### user.changepswd.manual

> **manual**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminUserChangepswdManual`

#### user.delete

> **delete**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminUserDelete`

#### user.disapprove

> **disapprove**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminUserDisapprove`

#### user.list

> **list**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminUserList`

#### user.preferences

> **preferences**: `object`

#### user.preferences.delete

> **delete**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminUserPreferencesDelete`

#### user.preferences.get

> **get**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminUserPreferencesGet`

#### user.preferences.set

> **set**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminUserPreferencesSet`

#### user.quota

> **quota**: `object`

#### user.quota.get

> **get**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminUserQuotaGet`

#### user.quota.set

> **set**: [`AdminCommandType`](../../type-aliases/AdminCommandType.md) = `AdminUserQuotaSet`
