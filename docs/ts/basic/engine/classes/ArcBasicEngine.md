[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/basic/engine](../README.md) / ArcBasicEngine

# Class: ArcBasicEngine

Defined in: [src/ts/basic/engine/index.ts:12](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L12)

## Constructors

### Constructor

> **new ArcBasicEngine**(`source`, `config`, `filename?`): `ArcBasicEngine`

Defined in: [src/ts/basic/engine/index.ts:36](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L36)

#### Parameters

##### source

`string`

##### config

[`Config`](../../../../types/system/basic/namespaces/BasicLang/interfaces/Config.md)

##### filename?

`string`

#### Returns

`ArcBasicEngine`

## Properties

### HALT

> **HALT**: `boolean` = `false`

Defined in: [src/ts/basic/engine/index.ts:27](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L27)

***

### jumped

> **jumped**: `boolean` = `false`

Defined in: [src/ts/basic/engine/index.ts:15](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L15)

***

### programCounter

> **programCounter**: `number` = `0`

Defined in: [src/ts/basic/engine/index.ts:14](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L14)

***

### slowdown

> **slowdown**: `number` = `0`

Defined in: [src/ts/basic/engine/index.ts:30](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L30)

***

### source

> **source**: `string`[]

Defined in: [src/ts/basic/engine/index.ts:13](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L13)

***

### suborigins

> **suborigins**: `number`[] = `[]`

Defined in: [src/ts/basic/engine/index.ts:29](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L29)

***

### version

> **version**: `string`

Defined in: [src/ts/basic/engine/index.ts:28](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L28)

## Methods

### assignToArray()

> **assignToArray**(`key`, `rawIdx`, `rawValue`): `Promise`\<`undefined`\>

Defined in: [src/ts/basic/engine/index.ts:195](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L195)

#### Parameters

##### key

`string`

##### rawIdx

`string`

##### rawValue

`string`

#### Returns

`Promise`\<`undefined`\>

***

### assignToObject()

> **assignToObject**(`key`, `rawHierarchy`, `rawValue`): `Promise`\<`void`\>

Defined in: [src/ts/basic/engine/index.ts:257](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L257)

#### Parameters

##### key

`string`

##### rawHierarchy

`string`

##### rawValue

`string`

#### Returns

`Promise`\<`void`\>

***

### captureStackFrame()

> **captureStackFrame**(`name`, `type`): `void`

Defined in: [src/ts/basic/engine/index.ts:455](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L455)

#### Parameters

##### name

`string`

##### type

[`BasicStackFrameType`](../../../../types/system/basic/namespaces/BasicLang/type-aliases/BasicStackFrameType.md)

#### Returns

`void`

***

### createArray()

> **createArray**(`key`, `value?`): `Promise`\<`void`\>

Defined in: [src/ts/basic/engine/index.ts:189](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L189)

#### Parameters

##### key

`string`

##### value?

`any`[] = `[]`

#### Returns

`Promise`\<`void`\>

***

### createSubRoutine()

> **createSubRoutine**(`name`, `startIdx?`): `Promise`\<`number` \| `undefined`\>

Defined in: [src/ts/basic/engine/index.ts:284](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L284)

#### Parameters

##### name

`string`

##### startIdx?

`number` = `...`

#### Returns

`Promise`\<`number` \| `undefined`\>

***

### error()

> **error**(`message`, `exit?`, `columnIndexHint?`): `Promise`\<`void`\>

Defined in: [src/ts/basic/engine/index.ts:426](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L426)

#### Parameters

##### message

`string`

##### exit?

`boolean` = `false`

##### columnIndexHint?

`string`

#### Returns

`Promise`\<`void`\>

***

### execute()

> **execute**(): `Promise`\<`void`\>

Defined in: [src/ts/basic/engine/index.ts:83](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L83)

#### Returns

`Promise`\<`void`\>

***

### expression()

> **expression**(`input`): `Promise`\<`boolean`\>

Defined in: [src/ts/basic/engine/index.ts:358](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L358)

#### Parameters

##### input

`string`

#### Returns

`Promise`\<`boolean`\>

***

### findNextEndling()

> **findNextEndling**(`endling`, `startIdx?`): `Promise`\<`number` \| `undefined`\>

Defined in: [src/ts/basic/engine/index.ts:391](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L391)

#### Parameters

##### endling

`string`

##### startIdx?

`number` = `...`

#### Returns

`Promise`\<`number` \| `undefined`\>

***

### getFromArray()

> **getFromArray**(`key`, `rawIdx`): `Promise`\<`any`\>

Defined in: [src/ts/basic/engine/index.ts:223](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L223)

#### Parameters

##### key

`string`

##### rawIdx

`string`

#### Returns

`Promise`\<`any`\>

***

### getFromObject()

> **getFromObject**(`key`, `rawHierarchy`): `Promise`\<`any`\>

Defined in: [src/ts/basic/engine/index.ts:271](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L271)

#### Parameters

##### key

`string`

##### rawHierarchy

`string`

#### Returns

`Promise`\<`any`\>

***

### getFromStdin()

> **getFromStdin**(): `Promise`\<`string`\>

Defined in: [src/ts/basic/engine/index.ts:65](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L65)

#### Returns

`Promise`\<`string`\>

***

### getStrings()

> **getStrings**(`input`, `replaceVars?`): `Promise`\<`string`[]\>

Defined in: [src/ts/basic/engine/index.ts:346](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L346)

#### Parameters

##### input

`string`

##### replaceVars?

`boolean` = `false`

#### Returns

`Promise`\<`string`[]\>

***

### getVariable()

> **getVariable**(`key`): `Promise`\<`string`\>

Defined in: [src/ts/basic/engine/index.ts:125](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L125)

#### Parameters

##### key

`string`

#### Returns

`Promise`\<`string`\>

***

### goSubroutine()

> **goSubroutine**(`name`): `Promise`\<`void`\>

Defined in: [src/ts/basic/engine/index.ts:297](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L297)

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`void`\>

***

### jump()

> **jump**(`idx`): `void`

Defined in: [src/ts/basic/engine/index.ts:409](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L409)

#### Parameters

##### idx

`number`

#### Returns

`void`

***

### jumpEnd()

> **jumpEnd**(): `void`

Defined in: [src/ts/basic/engine/index.ts:416](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L416)

#### Returns

`void`

***

### parseLine()

> **parseLine**(`line`): `Promise`\<`void`\>

Defined in: [src/ts/basic/engine/index.ts:95](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L95)

#### Parameters

##### line

`string`

#### Returns

`Promise`\<`void`\>

***

### replaceVariables()

> **replaceVariables**(`input`, `runFunctions?`): `Promise`\<`string`\>

Defined in: [src/ts/basic/engine/index.ts:158](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L158)

#### Parameters

##### input

`string`

##### runFunctions?

`boolean` = `true`

#### Returns

`Promise`\<`string`\>

***

### returnFromSubroutine()

> **returnFromSubroutine**(): `Promise`\<`void`\>

Defined in: [src/ts/basic/engine/index.ts:308](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L308)

#### Returns

`Promise`\<`void`\>

***

### runFunctions()

> **runFunctions**(`input`): `Promise`\<`string`\>

Defined in: [src/ts/basic/engine/index.ts:320](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L320)

#### Parameters

##### input

`string`

#### Returns

`Promise`\<`string`\>

***

### sendToStderr()

> **sendToStderr**(`message`): `Promise`\<`void`\>

Defined in: [src/ts/basic/engine/index.ts:75](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L75)

#### Parameters

##### message

`string`

#### Returns

`Promise`\<`void`\>

***

### sendToStdout()

> **sendToStdout**(`message`): `Promise`\<`void`\>

Defined in: [src/ts/basic/engine/index.ts:70](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L70)

#### Parameters

##### message

`string`

#### Returns

`Promise`\<`void`\>

***

### setVariable()

> **setVariable**(`key`, `rawValue`): `Promise`\<`void`\>

Defined in: [src/ts/basic/engine/index.ts:136](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L136)

#### Parameters

##### key

`string`

##### rawValue

`string`

#### Returns

`Promise`\<`void`\>

***

### FromSource()

> `static` **FromSource**(`relativePath`, `config`): `Promise`\<`ArcBasicEngine`\>

Defined in: [src/ts/basic/engine/index.ts:467](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/basic/engine/index.ts#L467)

#### Parameters

##### relativePath

`string`

##### config

[`Config`](../../../../types/system/basic/namespaces/BasicLang/interfaces/Config.md)

#### Returns

`Promise`\<`ArcBasicEngine`\>
