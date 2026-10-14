[**"ArcOS**](../../../README.md)

***

["ArcOS](../../../modules.md) / [interfaces/IInstallerProcessBase](../README.md) / IInstallerProcessBaseConstructor

# Interface: IInstallerProcessBaseConstructor

Defined in: [src/interfaces/IInstallerProcessBase.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L39)

## Extends

- [`Constructs`](../../common/interfaces/Constructs.md)\<[`IInstallerProcessBase`](IInstallerProcessBase.md)\>

## Constructors

### Constructor

> **new IInstallerProcessBaseConstructor**(...`args`): [`IInstallerProcessBase`](IInstallerProcessBase.md)

Defined in: [src/interfaces/IInstallerProcessBase.ts:39](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L39)

#### Parameters

##### args

...`any`[]

#### Returns

[`IInstallerProcessBase`](IInstallerProcessBase.md)

#### Inherited from

[`Constructs`](../../common/interfaces/Constructs.md).[`constructor`](../../common/interfaces/Constructs.md#constructor)

## Methods

### uninstallPackage()

> **uninstallPackage**(`metadata`, `deleteFiles?`, `onStage?`): `Promise`\<`void`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:41](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L41)

#### Parameters

##### metadata

[`ArcPackage`](../../../types/tpa/package/interfaces/ArcPackage.md)

##### deleteFiles?

`boolean`

##### onStage?

(`stage`) => `void`

#### Returns

`Promise`\<`void`\>

***

### validatePackage()

> **validatePackage**(`metadata`, `zip`): `Promise`\<`boolean`\>

Defined in: [src/interfaces/IInstallerProcessBase.ts:40](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/interfaces/IInstallerProcessBase.ts#L40)

#### Parameters

##### metadata

[`ArcPackage`](../../../types/tpa/package/interfaces/ArcPackage.md)

##### zip

`JSZip`

#### Returns

`Promise`\<`boolean`\>
