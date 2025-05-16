[**ArcOS v7**](../../../../../README.md)

***

[ArcOS v7](../../../../../modules.md) / [ts/server/user/supplementary](../README.md) / SupplementaryThirdPartyPropFunctions

# Function: SupplementaryThirdPartyPropFunctions()

> **SupplementaryThirdPartyPropFunctions**(`daemon`, `fs`, `app`, `props`, `wrap`, `args`, `metaPath`): `object`

Defined in: [src/ts/server/user/supplementary.ts:11](https://github.com/IzK-ArcOS/v7/blob/123cfd64e90544979aeac23fcdaebb3ddd698450/src/ts/server/user/supplementary.ts#L11)

## Parameters

### daemon

[`UserDaemon`](../../daemon/classes/UserDaemon.md)

### fs

[`Filesystem`](../../../../fs/classes/Filesystem.md)

### app

[`App`](../../../../../types/app/interfaces/App.md)

### props

`any`

### wrap

(`c`) => `string`

### args

`any`[]

### metaPath

`string`

## Returns

`object`

### load()

> **load**: (`path`) => `Promise`\<`any`\>

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`any`\>

### loadHtml()

> **loadHtml**: (`path`) => `Promise`\<`string`\>

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string`\>

### runApp()

> **runApp**: (`process`, `metadataPath`, `parentPid?`, ...`args`) => `Promise`\<`undefined` \| [`ThirdPartyAppProcess`](../../../../apps/thirdparty/classes/ThirdPartyAppProcess.md)\>

#### Parameters

##### process

*typeof* [`ThirdPartyAppProcess`](../../../../apps/thirdparty/classes/ThirdPartyAppProcess.md)

##### metadataPath

`string`

##### parentPid?

`number`

##### args?

...`any`[]

#### Returns

`Promise`\<`undefined` \| [`ThirdPartyAppProcess`](../../../../apps/thirdparty/classes/ThirdPartyAppProcess.md)\>

### runAppDirect()

> **runAppDirect**: (`process`, `metadataPath`, `parentPid?`, ...`args`) => `Promise`\<`undefined` \| [`ThirdPartyAppProcess`](../../../../apps/thirdparty/classes/ThirdPartyAppProcess.md)\>

#### Parameters

##### process

*typeof* [`ThirdPartyAppProcess`](../../../../apps/thirdparty/classes/ThirdPartyAppProcess.md)

##### metadataPath

`string`

##### parentPid?

`number`

##### args?

...`any`[]

#### Returns

`Promise`\<`undefined` \| [`ThirdPartyAppProcess`](../../../../apps/thirdparty/classes/ThirdPartyAppProcess.md)\>
