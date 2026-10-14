[**"ArcOS**](../../../../../README.md)

***

["ArcOS](../../../../../modules.md) / [ts/apps/tpa/supplementary](../README.md) / SupplementaryThirdPartyPropFunctions

# Function: SupplementaryThirdPartyPropFunctions()

> **SupplementaryThirdPartyPropFunctions**(`engine`): `object`

Defined in: [src/ts/apps/tpa/supplementary.ts:11](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/apps/tpa/supplementary.ts#L11)

## Parameters

### engine

[`JsExec`](../../../../jsexec/classes/JsExec.md)

## Returns

`object`

### load

> **load**: (`path`) => `Promise`\<`any`\>

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`any`\>

### loadDirect

> **loadDirect**: (`path`) => `Promise`\<`void`\>

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`void`\>

### loadHtml

> **loadHtml**: (`path`) => `Promise`\<`string` \| `undefined`\>

#### Parameters

##### path

`string`

#### Returns

`Promise`\<`string` \| `undefined`\>

### runApp

> **runApp**: (`process`, `metadataPath`, `parentPid?`, ...`args`) => `Promise`\<[`IThirdPartyAppProcess`](../../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md) \| `undefined`\>

#### Parameters

##### process

[`Constructs`](../../../../../interfaces/common/interfaces/Constructs.md)\<[`IThirdPartyAppProcess`](../../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md)\>

##### metadataPath

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<[`IThirdPartyAppProcess`](../../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md) \| `undefined`\>

### runAppDirect

> **runAppDirect**: (`process`, `metadataPath`, `parentPid?`, ...`args`) => `Promise`\<[`IThirdPartyAppProcess`](../../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md) \| `undefined`\>

#### Parameters

##### process

[`Constructs`](../../../../../interfaces/common/interfaces/Constructs.md)\<[`IThirdPartyAppProcess`](../../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md)\>

##### metadataPath

`string`

##### parentPid?

`number`

##### args

...`any`[]

#### Returns

`Promise`\<[`IThirdPartyAppProcess`](../../../../../interfaces/IThirdPartyAppProcess/interfaces/IThirdPartyAppProcess.md) \| `undefined`\>
