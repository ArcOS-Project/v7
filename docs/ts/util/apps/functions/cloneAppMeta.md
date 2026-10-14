[**"ArcOS**](../../../../README.md)

***

["ArcOS](../../../../modules.md) / [ts/util/apps](../README.md) / cloneAppMeta

# Function: cloneAppMeta()

> **cloneAppMeta**\<`T`\>(`app`): `T`

Defined in: [src/ts/util/apps.ts:18](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/ts/util/apps.ts#L18)

Reliably clones ArcOS App Metadata to mitigate object inheritance. Written by humans.
Based off of ArcOS v6' getAppById: https://github.com/ArcOS-Project/v6/blob/main/src/ts/apps/utils/get.ts#L6

## Type Parameters

### T

`T` *extends* [`App`](../../../../types/apps/app/interfaces/App.md)

## Parameters

### app

`T`

the app to clone

## Returns

`T`

A clone of the app
