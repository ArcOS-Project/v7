[**"ArcOS**](../../README.md)

***

["ArcOS](../../modules.md) / [window](../README.md) / Window

# Interface: Window

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41172

The **`Window`** interface represents a window containing a DOM document; the document property points to the DOM document loaded in that window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window)

## Extends

- `EventTarget`
- `AnimationFrameProvider`
- `GlobalEventHandlers`
- `WindowEventHandlers`
- `WindowLocalStorage`
- `WindowOrWorkerGlobalScope`
- `WindowSessionStorage`

## Indexable

> \[`index`: `number`\]: `Window`

## Properties

### \_\_DW\_INIT\_\_

> **\_\_DW\_INIT\_\_**: `boolean`

Defined in: [src/window.d.ts:3](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/window.d.ts#L3)

***

### \_\_DW\_STATUS\_\_

> **\_\_DW\_STATUS\_\_**: `string`

Defined in: [src/window.d.ts:4](https://github.com/ArcOS-Project/v7/blob/73007f8711ee0b9e800878362ac48ee2c6df0ef3/src/window.d.ts#L4)

***

### caches

> `readonly` **caches**: `CacheStorage`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41712

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/caches)

#### Inherited from

`WindowOrWorkerGlobalScope.caches`

***

### ~~clientInformation~~

> `readonly` **clientInformation**: `Navigator`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41178

#### Deprecated

This is a legacy alias of `navigator`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/navigator)

***

### closed

> `readonly` **closed**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41184

The **`Window.closed`** read-only property indicates whether the referenced window is closed or not.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/closed)

***

### cookieStore

> `readonly` **cookieStore**: `CookieStore`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41190

The **`cookieStore`** read-only property of the Window interface returns a reference to the CookieStore object for the current document context. This is an entry point for the Cookie Store API.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/cookieStore)

***

### crossOriginIsolated

> `readonly` **crossOriginIsolated**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41714

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crossOriginIsolated)

#### Inherited from

`WindowOrWorkerGlobalScope.crossOriginIsolated`

***

### crypto

> `readonly` **crypto**: `Crypto`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41716

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/crypto)

#### Inherited from

`WindowOrWorkerGlobalScope.crypto`

***

### customElements

> `readonly` **customElements**: `CustomElementRegistry`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41196

The **`customElements`** read-only property of the Window interface returns a reference to the CustomElementRegistry object, which can be used to register new custom elements and get information about previously registered custom elements.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/customElements)

***

### devicePixelRatio

> `readonly` **devicePixelRatio**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41202

The **`devicePixelRatio`** of Window interface returns the ratio of the resolution in physical pixels to the resolution in CSS pixels for the current display device.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/devicePixelRatio)

***

### document

> `readonly` **document**: `Document`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41208

**`window.document`** returns a reference to the document contained in the window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/document)

***

### ~~event~~

> `readonly` **event**: `Event` \| `undefined`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41215

The read-only Window property **`event`** returns the Event which is currently being handled by the site's code. Outside the context of an event handler, the value is always undefined.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/event)

***

### ~~external~~

> `readonly` **external**: `External`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41222

The **`external`** property of the Window API returns an instance of the External interface, which was intended to contain functions related to adding external search providers to the browser. However, this is now deprecated, and the contained methods are now dummy functions that do nothing as per spec.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/external)

***

### frameElement

> `readonly` **frameElement**: `Element` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41228

The **`Window.frameElement`** property returns the element (such as <iframe> or <object>) in which the window is embedded.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/frameElement)

***

### frames

> `readonly` **frames**: `Window`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41234

Returns the window itself, which is an array-like object, listing the direct sub-**`frames`** of the current window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/frames)

***

### history

> `readonly` **history**: `History`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41240

The **`Window.history`** read-only property returns a reference to the History object, which provides an interface for manipulating the browser session history (pages visited in the tab or frame that the current page is loaded in).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/history)

***

### indexedDB

> `readonly` **indexedDB**: `IDBFactory`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41718

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/indexedDB)

#### Inherited from

`WindowOrWorkerGlobalScope.indexedDB`

***

### innerHeight

> `readonly` **innerHeight**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41246

The read-only **`innerHeight`** property of the Window interface returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/innerHeight)

***

### innerWidth

> `readonly` **innerWidth**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41252

The read-only Window property **`innerWidth`** returns the interior width of the window in pixels (that is, the width of the window's layout viewport). That includes the width of the vertical scroll bar, if one is present.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/innerWidth)

***

### isSecureContext

> `readonly` **isSecureContext**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41720

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/isSecureContext)

#### Inherited from

`WindowOrWorkerGlobalScope.isSecureContext`

***

### length

> `readonly` **length**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41258

Returns the number of frames (either <frame> or <iframe> elements) in the window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/length)

***

### localStorage

> `readonly` **localStorage**: `Storage`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41703

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/localStorage)

#### Inherited from

`WindowLocalStorage.localStorage`

***

### locationbar

> `readonly` **locationbar**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41271

Returns the **`locationbar`** object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/locationbar)

***

### menubar

> `readonly` **menubar**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41277

Returns the **`menubar`** object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/menubar)

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41283

The **`Window.name`** property gets/sets the name of the window's browsing context.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/name)

***

### navigation

> `readonly` **navigation**: `Navigation`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41289

The **`navigation`** read-only property of the Window interface returns the current window's associated Navigation object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/navigation)

***

### navigator

> `readonly` **navigator**: `Navigator`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41295

The **`Window.navigator`** read-only property returns a reference to the Navigator object, which has methods and properties about the application running the script.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/navigator)

***

### onabort

> **onabort**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16764

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/abort_event)

#### Inherited from

`GlobalEventHandlers.onabort`

***

### onafterprint

> **onafterprint**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41652

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/afterprint_event)

#### Inherited from

`WindowEventHandlers.onafterprint`

***

### onanimationcancel

> **onanimationcancel**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16766

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)

#### Inherited from

`GlobalEventHandlers.onanimationcancel`

***

### onanimationend

> **onanimationend**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16768

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

#### Inherited from

`GlobalEventHandlers.onanimationend`

***

### onanimationiteration

> **onanimationiteration**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16770

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

#### Inherited from

`GlobalEventHandlers.onanimationiteration`

***

### onanimationstart

> **onanimationstart**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16772

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

#### Inherited from

`GlobalEventHandlers.onanimationstart`

***

### onauxclick

> **onauxclick**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16774

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/auxclick_event)

#### Inherited from

`GlobalEventHandlers.onauxclick`

***

### onbeforeinput

> **onbeforeinput**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16776

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforeinput_event)

#### Inherited from

`GlobalEventHandlers.onbeforeinput`

***

### onbeforematch

> **onbeforematch**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16778

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/beforematch_event)

#### Inherited from

`GlobalEventHandlers.onbeforematch`

***

### onbeforeprint

> **onbeforeprint**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41654

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeprint_event)

#### Inherited from

`WindowEventHandlers.onbeforeprint`

***

### onbeforetoggle

> **onbeforetoggle**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16780

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/beforetoggle_event)

#### Inherited from

`GlobalEventHandlers.onbeforetoggle`

***

### onbeforeunload

> **onbeforeunload**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41656

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/beforeunload_event)

#### Inherited from

`WindowEventHandlers.onbeforeunload`

***

### onblur

> **onblur**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16782

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/blur_event)

#### Inherited from

`GlobalEventHandlers.onblur`

***

### oncancel

> **oncancel**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16784

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/cancel_event)

#### Inherited from

`GlobalEventHandlers.oncancel`

***

### oncanplay

> **oncanplay**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16786

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplay_event)

#### Inherited from

`GlobalEventHandlers.oncanplay`

***

### oncanplaythrough

> **oncanplaythrough**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16788

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canplaythrough_event)

#### Inherited from

`GlobalEventHandlers.oncanplaythrough`

***

### onchange

> **onchange**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16790

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/change_event)

#### Inherited from

`GlobalEventHandlers.onchange`

***

### onclick

> **onclick**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16792

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/click_event)

#### Inherited from

`GlobalEventHandlers.onclick`

***

### onclose

> **onclose**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16794

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLDialogElement/close_event)

#### Inherited from

`GlobalEventHandlers.onclose`

***

### oncommand

> **oncommand**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16796

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/command_event)

#### Inherited from

`GlobalEventHandlers.oncommand`

***

### oncontextlost

> **oncontextlost**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16798

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextlost_event)

#### Inherited from

`GlobalEventHandlers.oncontextlost`

***

### oncontextmenu

> **oncontextmenu**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16800

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/contextmenu_event)

#### Inherited from

`GlobalEventHandlers.oncontextmenu`

***

### oncontextrestored

> **oncontextrestored**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16802

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextrestored_event)

#### Inherited from

`GlobalEventHandlers.oncontextrestored`

***

### oncopy

> **oncopy**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16804

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/copy_event)

#### Inherited from

`GlobalEventHandlers.oncopy`

***

### oncuechange

> **oncuechange**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16806

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLTrackElement/cuechange_event)

#### Inherited from

`GlobalEventHandlers.oncuechange`

***

### oncut

> **oncut**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16808

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/cut_event)

#### Inherited from

`GlobalEventHandlers.oncut`

***

### ondblclick

> **ondblclick**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16810

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/dblclick_event)

#### Inherited from

`GlobalEventHandlers.ondblclick`

***

### ondevicemotion

> **ondevicemotion**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41301

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/devicemotion_event)

***

### ondeviceorientation

> **ondeviceorientation**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41307

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/deviceorientation_event)

***

### ondeviceorientationabsolute

> **ondeviceorientationabsolute**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41313

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/deviceorientationabsolute_event)

***

### ondrag

> **ondrag**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16812

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drag_event)

#### Inherited from

`GlobalEventHandlers.ondrag`

***

### ondragend

> **ondragend**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16814

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragend_event)

#### Inherited from

`GlobalEventHandlers.ondragend`

***

### ondragenter

> **ondragenter**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16816

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragenter_event)

#### Inherited from

`GlobalEventHandlers.ondragenter`

***

### ondragleave

> **ondragleave**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16818

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragleave_event)

#### Inherited from

`GlobalEventHandlers.ondragleave`

***

### ondragover

> **ondragover**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16820

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragover_event)

#### Inherited from

`GlobalEventHandlers.ondragover`

***

### ondragstart

> **ondragstart**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16822

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/dragstart_event)

#### Inherited from

`GlobalEventHandlers.ondragstart`

***

### ondrop

> **ondrop**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16824

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/drop_event)

#### Inherited from

`GlobalEventHandlers.ondrop`

***

### ondurationchange

> **ondurationchange**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16826

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/durationchange_event)

#### Inherited from

`GlobalEventHandlers.ondurationchange`

***

### onemptied

> **onemptied**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16828

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/emptied_event)

#### Inherited from

`GlobalEventHandlers.onemptied`

***

### onended

> **onended**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16830

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ended_event)

#### Inherited from

`GlobalEventHandlers.onended`

***

### onerror

> **onerror**: `OnErrorEventHandler`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16832

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/error_event)

#### Inherited from

`GlobalEventHandlers.onerror`

***

### onfocus

> **onfocus**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16834

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/focus_event)

#### Inherited from

`GlobalEventHandlers.onfocus`

***

### onformdata

> **onformdata**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16836

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)

#### Inherited from

`GlobalEventHandlers.onformdata`

***

### ongamepadconnected

> **ongamepadconnected**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41658

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepadconnected_event)

#### Inherited from

`WindowEventHandlers.ongamepadconnected`

***

### ongamepaddisconnected

> **ongamepaddisconnected**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41660

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/gamepaddisconnected_event)

#### Inherited from

`WindowEventHandlers.ongamepaddisconnected`

***

### ongotpointercapture

> **ongotpointercapture**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16838

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)

#### Inherited from

`GlobalEventHandlers.ongotpointercapture`

***

### onhashchange

> **onhashchange**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41662

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/hashchange_event)

#### Inherited from

`WindowEventHandlers.onhashchange`

***

### oninput

> **oninput**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16840

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/input_event)

#### Inherited from

`GlobalEventHandlers.oninput`

***

### oninvalid

> **oninvalid**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16842

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/invalid_event)

#### Inherited from

`GlobalEventHandlers.oninvalid`

***

### onkeydown

> **onkeydown**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16844

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)

#### Inherited from

`GlobalEventHandlers.onkeydown`

***

### ~~onkeypress~~

> **onkeypress**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16850

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keypress_event)

#### Inherited from

`GlobalEventHandlers.onkeypress`

***

### onkeyup

> **onkeyup**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16852

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/keyup_event)

#### Inherited from

`GlobalEventHandlers.onkeyup`

***

### onlanguagechange

> **onlanguagechange**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41664

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/languagechange_event)

#### Inherited from

`WindowEventHandlers.onlanguagechange`

***

### onload

> **onload**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16854

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/load_event)

#### Inherited from

`GlobalEventHandlers.onload`

***

### onloadeddata

> **onloadeddata**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16856

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadeddata_event)

#### Inherited from

`GlobalEventHandlers.onloadeddata`

***

### onloadedmetadata

> **onloadedmetadata**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16858

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadedmetadata_event)

#### Inherited from

`GlobalEventHandlers.onloadedmetadata`

***

### onloadstart

> **onloadstart**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16860

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/loadstart_event)

#### Inherited from

`GlobalEventHandlers.onloadstart`

***

### onlostpointercapture

> **onlostpointercapture**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16862

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event)

#### Inherited from

`GlobalEventHandlers.onlostpointercapture`

***

### onmessage

> **onmessage**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41666

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/message_event)

#### Inherited from

`WindowEventHandlers.onmessage`

***

### onmessageerror

> **onmessageerror**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41668

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/messageerror_event)

#### Inherited from

`WindowEventHandlers.onmessageerror`

***

### onmousedown

> **onmousedown**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16864

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousedown_event)

#### Inherited from

`GlobalEventHandlers.onmousedown`

***

### onmouseenter

> **onmouseenter**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16866

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseenter_event)

#### Inherited from

`GlobalEventHandlers.onmouseenter`

***

### onmouseleave

> **onmouseleave**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16868

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)

#### Inherited from

`GlobalEventHandlers.onmouseleave`

***

### onmousemove

> **onmousemove**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16870

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mousemove_event)

#### Inherited from

`GlobalEventHandlers.onmousemove`

***

### onmouseout

> **onmouseout**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16872

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseout_event)

#### Inherited from

`GlobalEventHandlers.onmouseout`

***

### onmouseover

> **onmouseover**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16874

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseover_event)

#### Inherited from

`GlobalEventHandlers.onmouseover`

***

### onmouseup

> **onmouseup**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16876

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/mouseup_event)

#### Inherited from

`GlobalEventHandlers.onmouseup`

***

### onoffline

> **onoffline**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41670

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/offline_event)

#### Inherited from

`WindowEventHandlers.onoffline`

***

### ononline

> **ononline**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41672

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/online_event)

#### Inherited from

`WindowEventHandlers.ononline`

***

### ~~onorientationchange~~

> **onorientationchange**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41319

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/orientationchange_event)

***

### onpagehide

> **onpagehide**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41674

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pagehide_event)

#### Inherited from

`WindowEventHandlers.onpagehide`

***

### onpagereveal

> **onpagereveal**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41676

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pagereveal_event)

#### Inherited from

`WindowEventHandlers.onpagereveal`

***

### onpageshow

> **onpageshow**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41678

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pageshow_event)

#### Inherited from

`WindowEventHandlers.onpageshow`

***

### onpageswap

> **onpageswap**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41680

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/pageswap_event)

#### Inherited from

`WindowEventHandlers.onpageswap`

***

### onpaste

> **onpaste**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16878

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/paste_event)

#### Inherited from

`GlobalEventHandlers.onpaste`

***

### onpause

> **onpause**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16880

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/pause_event)

#### Inherited from

`GlobalEventHandlers.onpause`

***

### onplay

> **onplay**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16882

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)

#### Inherited from

`GlobalEventHandlers.onplay`

***

### onplaying

> **onplaying**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16884

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/playing_event)

#### Inherited from

`GlobalEventHandlers.onplaying`

***

### onpointercancel

> **onpointercancel**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16886

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)

#### Inherited from

`GlobalEventHandlers.onpointercancel`

***

### onpointerdown

> **onpointerdown**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16888

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerdown_event)

#### Inherited from

`GlobalEventHandlers.onpointerdown`

***

### onpointerenter

> **onpointerenter**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16890

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerenter_event)

#### Inherited from

`GlobalEventHandlers.onpointerenter`

***

### onpointerleave

> **onpointerleave**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16892

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerleave_event)

#### Inherited from

`GlobalEventHandlers.onpointerleave`

***

### onpointermove

> **onpointermove**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16894

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointermove_event)

#### Inherited from

`GlobalEventHandlers.onpointermove`

***

### onpointerout

> **onpointerout**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16896

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerout_event)

#### Inherited from

`GlobalEventHandlers.onpointerout`

***

### onpointerover

> **onpointerover**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16898

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerover_event)

#### Inherited from

`GlobalEventHandlers.onpointerover`

***

### onpointerrawupdate

> **onpointerrawupdate**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16904

Available only in secure contexts.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerrawupdate_event)

#### Inherited from

`GlobalEventHandlers.onpointerrawupdate`

***

### onpointerup

> **onpointerup**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16906

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/pointerup_event)

#### Inherited from

`GlobalEventHandlers.onpointerup`

***

### onpopstate

> **onpopstate**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41682

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/popstate_event)

#### Inherited from

`WindowEventHandlers.onpopstate`

***

### onprogress

> **onprogress**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16908

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)

#### Inherited from

`GlobalEventHandlers.onprogress`

***

### onratechange

> **onratechange**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16910

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/ratechange_event)

#### Inherited from

`GlobalEventHandlers.onratechange`

***

### onrejectionhandled

> **onrejectionhandled**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41684

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/rejectionhandled_event)

#### Inherited from

`WindowEventHandlers.onrejectionhandled`

***

### onreset

> **onreset**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16912

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reset_event)

#### Inherited from

`GlobalEventHandlers.onreset`

***

### onresize

> **onresize**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16914

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)

#### Inherited from

`GlobalEventHandlers.onresize`

***

### onscroll

> **onscroll**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16916

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scroll_event)

#### Inherited from

`GlobalEventHandlers.onscroll`

***

### onscrollend

> **onscrollend**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16918

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/scrollend_event)

#### Inherited from

`GlobalEventHandlers.onscrollend`

***

### onsecuritypolicyviolation

> **onsecuritypolicyviolation**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16920

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/securitypolicyviolation_event)

#### Inherited from

`GlobalEventHandlers.onsecuritypolicyviolation`

***

### onseeked

> **onseeked**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16922

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeked_event)

#### Inherited from

`GlobalEventHandlers.onseeked`

***

### onseeking

> **onseeking**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16924

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/seeking_event)

#### Inherited from

`GlobalEventHandlers.onseeking`

***

### onselect

> **onselect**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16926

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/select_event)

#### Inherited from

`GlobalEventHandlers.onselect`

***

### onselectionchange

> **onselectionchange**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16928

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event)

#### Inherited from

`GlobalEventHandlers.onselectionchange`

***

### onselectstart

> **onselectstart**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16930

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Node/selectstart_event)

#### Inherited from

`GlobalEventHandlers.onselectstart`

***

### onslotchange

> **onslotchange**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16932

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)

#### Inherited from

`GlobalEventHandlers.onslotchange`

***

### onstalled

> **onstalled**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16934

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)

#### Inherited from

`GlobalEventHandlers.onstalled`

***

### onstorage

> **onstorage**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41686

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/storage_event)

#### Inherited from

`WindowEventHandlers.onstorage`

***

### onsubmit

> **onsubmit**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16936

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/submit_event)

#### Inherited from

`GlobalEventHandlers.onsubmit`

***

### onsuspend

> **onsuspend**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16938

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/suspend_event)

#### Inherited from

`GlobalEventHandlers.onsuspend`

***

### ontimeupdate

> **ontimeupdate**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16940

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/timeupdate_event)

#### Inherited from

`GlobalEventHandlers.ontimeupdate`

***

### ontoggle

> **ontoggle**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16942

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLElement/toggle_event)

#### Inherited from

`GlobalEventHandlers.ontoggle`

***

### ontouchcancel?

> `optional` **ontouchcancel?**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16944

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchcancel_event)

#### Inherited from

`GlobalEventHandlers.ontouchcancel`

***

### ontouchend?

> `optional` **ontouchend?**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16946

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchend_event)

#### Inherited from

`GlobalEventHandlers.ontouchend`

***

### ontouchmove?

> `optional` **ontouchmove?**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16948

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchmove_event)

#### Inherited from

`GlobalEventHandlers.ontouchmove`

***

### ontouchstart?

> `optional` **ontouchstart?**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16950

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)

#### Inherited from

`GlobalEventHandlers.ontouchstart`

***

### ontransitioncancel

> **ontransitioncancel**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16952

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitioncancel_event)

#### Inherited from

`GlobalEventHandlers.ontransitioncancel`

***

### ontransitionend

> **ontransitionend**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16954

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

#### Inherited from

`GlobalEventHandlers.ontransitionend`

***

### ontransitionrun

> **ontransitionrun**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16956

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)

#### Inherited from

`GlobalEventHandlers.ontransitionrun`

***

### ontransitionstart

> **ontransitionstart**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16958

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionstart_event)

#### Inherited from

`GlobalEventHandlers.ontransitionstart`

***

### onunhandledrejection

> **onunhandledrejection**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41688

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unhandledrejection_event)

#### Inherited from

`WindowEventHandlers.onunhandledrejection`

***

### ~~onunload~~

> **onunload**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41694

#### Deprecated

The unload event is not reliable, consider visibilitychange or pagehide events.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/unload_event)

#### Inherited from

`WindowEventHandlers.onunload`

***

### onvolumechange

> **onvolumechange**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16960

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/volumechange_event)

#### Inherited from

`GlobalEventHandlers.onvolumechange`

***

### onwaiting

> **onwaiting**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16962

[MDN Reference](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/waiting_event)

#### Inherited from

`GlobalEventHandlers.onwaiting`

***

### ~~onwebkitanimationend~~

> **onwebkitanimationend**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16968

#### Deprecated

This is a legacy alias of `onanimationend`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)

#### Inherited from

`GlobalEventHandlers.onwebkitanimationend`

***

### ~~onwebkitanimationiteration~~

> **onwebkitanimationiteration**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16974

#### Deprecated

This is a legacy alias of `onanimationiteration`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)

#### Inherited from

`GlobalEventHandlers.onwebkitanimationiteration`

***

### ~~onwebkitanimationstart~~

> **onwebkitanimationstart**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16980

#### Deprecated

This is a legacy alias of `onanimationstart`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)

#### Inherited from

`GlobalEventHandlers.onwebkitanimationstart`

***

### ~~onwebkittransitionend~~

> **onwebkittransitionend**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16986

#### Deprecated

This is a legacy alias of `ontransitionend`.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)

#### Inherited from

`GlobalEventHandlers.onwebkittransitionend`

***

### onwheel

> **onwheel**: ((`this`, `ev`) => `any`) \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:16988

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Element/wheel_event)

#### Inherited from

`GlobalEventHandlers.onwheel`

***

### opener

> **opener**: `any`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41325

The Window interface's **`opener`** property returns a reference to the window that opened the window, either with open(), or by navigating a link with a target attribute.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/opener)

***

### ~~orientation~~

> `readonly` **orientation**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41332

Returns the **`orientation`** in degrees (in 90-degree increments) of the viewport relative to the device's natural orientation.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/orientation)

***

### origin

> `readonly` **origin**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41722

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/origin)

#### Inherited from

`WindowOrWorkerGlobalScope.origin`

***

### originAgentCluster

> `readonly` **originAgentCluster**: `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41338

The **`originAgentCluster`** read-only property of the Window interface returns true if this window belongs to an origin-keyed agent cluster: this means that the operating system has provided dedicated resources (for example an operating system process) to this window's origin that are not shared with windows from other origins.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/originAgentCluster)

***

### outerHeight

> `readonly` **outerHeight**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41344

The **`Window.outerHeight`** read-only property returns the height in pixels of the whole browser window, including any sidebar, window chrome, and window-resizing borders/handles.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/outerHeight)

***

### outerWidth

> `readonly` **outerWidth**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41350

**`Window.outerWidth`** read-only property returns the width of the outside of the browser window. It represents the width of the whole browser window including sidebar (if expanded), window chrome and window resizing borders/handles.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/outerWidth)

***

### pageXOffset

> `readonly` **pageXOffset**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41352

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollX)

***

### pageYOffset

> `readonly` **pageYOffset**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41354

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollY)

***

### parent

> `readonly` **parent**: `Window`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41360

The **`Window.parent`** property is a reference to the parent of the current window or subframe.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/parent)

***

### performance

> `readonly` **performance**: `Performance`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41724

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/performance)

#### Inherited from

`WindowOrWorkerGlobalScope.performance`

***

### personalbar

> `readonly` **personalbar**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41366

Returns the **`personalbar`** object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/personalbar)

***

### scheduler

> `readonly` **scheduler**: `Scheduler`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41726

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scheduler)

#### Inherited from

`WindowOrWorkerGlobalScope.scheduler`

***

### screen

> `readonly` **screen**: `Screen`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41372

The Window property **`screen`** returns a reference to the screen object associated with the window. The screen object, implementing the Screen interface, is a special object for inspecting properties of the screen on which the current window is being rendered.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screen)

***

### screenLeft

> `readonly` **screenLeft**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41378

The **`Window.screenLeft`** read-only property returns the horizontal distance, in CSS pixels, from the left border of the user's browser viewport to the left side of the screen.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenLeft)

***

### screenTop

> `readonly` **screenTop**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41384

The **`Window.screenTop`** read-only property returns the vertical distance, in CSS pixels, from the top border of the user's browser viewport to the top side of the screen.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenTop)

***

### screenX

> `readonly` **screenX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41390

The **`Window.screenX`** read-only property returns the horizontal distance, in CSS pixels, of the left border of the user's browser viewport to the left side of the screen.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenX)

***

### screenY

> `readonly` **screenY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41396

The **`Window.screenY`** read-only property returns the vertical distance, in CSS pixels, of the top border of the user's browser viewport to the top edge of the screen.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/screenY)

***

### scrollbars

> `readonly` **scrollbars**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41414

Returns the **`scrollbars`** object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollbars)

***

### scrollX

> `readonly` **scrollX**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41402

The read-only **`scrollX`** property of the Window interface returns the number of pixels by which the document is currently scrolled horizontally. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number. You can get the number of pixels the document is scrolled vertically from the scrollY property.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollX)

***

### scrollY

> `readonly` **scrollY**: `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41408

The read-only **`scrollY`** property of the Window interface returns the number of pixels by which the document is currently scrolled vertically. This value is subpixel precise in modern browsers, meaning that it isn't necessarily a whole number. You can get the number of pixels the document is scrolled horizontally from the scrollX property.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollY)

***

### self

> `readonly` **self**: `Window` & *typeof* `globalThis`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41420

The **`Window.self`** read-only property returns the window itself, as a WindowProxy. It can be used with dot notation on a window object (that is, window.self) or standalone (self). The advantage of the standalone notation is that a similar notation exists for non-window contexts, such as in Web Workers. By using self, you can refer to the global scope in a way that will work not only in a window context (self will resolve to window.self) but also in a worker context (self will then resolve to WorkerGlobalScope.self).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/self)

***

### sessionStorage

> `readonly` **sessionStorage**: `Storage`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41754

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage)

#### Inherited from

`WindowSessionStorage.sessionStorage`

***

### speechSynthesis

> `readonly` **speechSynthesis**: `SpeechSynthesis`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41426

The **`speechSynthesis`** read-only property of the Window object returns a SpeechSynthesis object, which is the entry point into using Web Speech API speech synthesis functionality.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/speechSynthesis)

***

### ~~status~~

> **status**: `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41433

The **`status`** property of the Window interface was originally intended to set the text in the status bar at the bottom of the browser window. However, the HTML standard now requires setting window.status to have no effect on the text displayed in the status bar.

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/status)

***

### statusbar

> `readonly` **statusbar**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41439

Returns the **`statusbar`** object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/statusbar)

***

### toolbar

> `readonly` **toolbar**: `BarProp`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41445

Returns the **`toolbar`** object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/toolbar)

***

### top

> `readonly` **top**: `Window` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41451

Returns a reference to the **`top`**most window in the window hierarchy.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/top)

***

### visualViewport

> `readonly` **visualViewport**: `VisualViewport` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41457

The **`visualViewport`** read-only property of the Window interface returns a VisualViewport object representing the visual viewport for a given window, or null if current document is not fully active.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/visualViewport)

***

### window

> `readonly` **window**: `Window` & *typeof* `globalThis`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41463

The **`window`** property of a Window object points to the window object itself.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/window)

## Accessors

### location

#### Get Signature

> **get** **location**(): `Location`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41264

The read-only **`location`** property of the Window interface returns a Location object with information about the current location of the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/location)

##### Returns

`Location`

#### Set Signature

> **set** **location**(`href`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41265

##### Parameters

###### href

`string`

##### Returns

`void`

## Methods

### addEventListener()

#### Call Signature

> **addEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41615

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Type Parameters

###### K

`K` *extends* keyof `WindowEventMap`

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` \| `AddEventListenerOptions`

##### Returns

`void`

##### Overrides

`EventTarget.addEventListener`

#### Call Signature

> **addEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41616

The **`addEventListener()`** method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)

##### Parameters

###### type

`string`

###### listener

`EventListenerOrEventListenerObject`

###### options?

`boolean` \| `AddEventListenerOptions`

##### Returns

`void`

##### Overrides

`EventTarget.addEventListener`

***

### alert()

> **alert**(`message?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41469

**`window.alert()`** instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/alert)

#### Parameters

##### message?

`any`

#### Returns

`void`

***

### atob()

> **atob**(`data`): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41728

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/atob)

#### Parameters

##### data

`string`

#### Returns

`string`

#### Inherited from

`WindowOrWorkerGlobalScope.atob`

***

### ~~blur()~~

> **blur**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41476

The **`Window.blur()`** method does nothing.

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/blur)

***

### btoa()

> **btoa**(`data`): `string`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41730

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/btoa)

#### Parameters

##### data

`string`

#### Returns

`string`

#### Inherited from

`WindowOrWorkerGlobalScope.btoa`

***

### cancelAnimationFrame()

> **cancelAnimationFrame**(`handle`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3774

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)

#### Parameters

##### handle

`number`

#### Returns

`void`

#### Inherited from

`AnimationFrameProvider.cancelAnimationFrame`

***

### cancelIdleCallback()

> **cancelIdleCallback**(`handle`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41482

The **`window.cancelIdleCallback()`** method cancels a callback previously scheduled with window.requestIdleCallback().

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/cancelIdleCallback)

#### Parameters

##### handle

`number`

#### Returns

`void`

***

### ~~captureEvents()~~

> **captureEvents**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41489

The **`Window.captureEvents()`** method does nothing. Its original behavior has been removed from the specification, but the method itself has been retained so as not to break code that calls it.

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/captureEvents)

***

### clearInterval()

> **clearInterval**(`id`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41732

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearInterval)

#### Parameters

##### id

`number` \| `undefined`

#### Returns

`void`

#### Inherited from

`WindowOrWorkerGlobalScope.clearInterval`

***

### clearTimeout()

> **clearTimeout**(`id`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41734

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/clearTimeout)

#### Parameters

##### id

`number` \| `undefined`

#### Returns

`void`

#### Inherited from

`WindowOrWorkerGlobalScope.clearTimeout`

***

### close()

> **close**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41495

The **`Window.close()`** method closes the current window, or the window on which it was called.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/close)

#### Returns

`void`

***

### confirm()

> **confirm**(`message?`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41501

**`window.confirm()`** instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels the dialog.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/confirm)

#### Parameters

##### message?

`string`

#### Returns

`boolean`

***

### createImageBitmap()

#### Call Signature

> **createImageBitmap**(`image`, `options?`): `Promise`\<`ImageBitmap`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41736

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/createImageBitmap)

##### Parameters

###### image

`ImageBitmapSource`

###### options?

`ImageBitmapOptions`

##### Returns

`Promise`\<`ImageBitmap`\>

##### Inherited from

`WindowOrWorkerGlobalScope.createImageBitmap`

#### Call Signature

> **createImageBitmap**(`image`, `sx`, `sy`, `sw`, `sh`, `options?`): `Promise`\<`ImageBitmap`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41737

##### Parameters

###### image

`ImageBitmapSource`

###### sx

`number`

###### sy

`number`

###### sw

`number`

###### sh

`number`

###### options?

`ImageBitmapOptions`

##### Returns

`Promise`\<`ImageBitmap`\>

##### Inherited from

`WindowOrWorkerGlobalScope.createImageBitmap`

***

### dispatchEvent()

> **dispatchEvent**(`event`): `boolean`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:14386

The **`dispatchEvent()`** method of the EventTarget sends an Event to the object, (synchronously) invoking the affected event listeners in the appropriate order. The normal event processing rules (including the capturing and optional bubbling phase) also apply to events dispatched manually with dispatchEvent().

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/dispatchEvent)

#### Parameters

##### event

`Event`

#### Returns

`boolean`

#### Inherited from

`EventTarget.dispatchEvent`

***

### fetch()

> **fetch**(`input`, `init?`): `Promise`\<`Response`\>

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41739

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

#### Parameters

##### input

`URL` \| `RequestInfo`

##### init?

`RequestInit`

#### Returns

`Promise`\<`Response`\>

#### Inherited from

`WindowOrWorkerGlobalScope.fetch`

***

### focus()

> **focus**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41507

Makes a request to bring the window to the front. It may fail due to user settings and the window isn't guaranteed to be frontmost before this method returns.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/focus)

#### Returns

`void`

***

### getComputedStyle()

> **getComputedStyle**(`elt`, `pseudoElt?`): `CSSStyleDeclaration`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41513

The **`Window.getComputedStyle()`** method returns a live read-only CSSStyleProperties object containing the resolved values of all CSS properties of an element, after applying active stylesheets and resolving any computation those values may contain.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/getComputedStyle)

#### Parameters

##### elt

`Element`

##### pseudoElt?

`string` \| `null`

#### Returns

`CSSStyleDeclaration`

***

### getSelection()

> **getSelection**(): `Selection` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41519

The **`getSelection()`** method of the Window interface returns the Selection object associated with the window's document, representing the range of text selected by the user or the current position of the caret.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/getSelection)

#### Returns

`Selection` \| `null`

***

### matchMedia()

> **matchMedia**(`query`): `MediaQueryList`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41525

The Window interface's **`matchMedia()`** method returns a new MediaQueryList object that can then be used to determine if the document matches the media query string, as well as to monitor the document to detect when it matches (or stops matching) that media query.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/matchMedia)

#### Parameters

##### query

`string`

#### Returns

`MediaQueryList`

***

### moveBy()

> **moveBy**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41531

The **`moveBy()`** method of the Window interface moves the current window by a specified amount.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/moveBy)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### moveTo()

> **moveTo**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41537

The **`moveTo()`** method of the Window interface moves the current window to the specified coordinates.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/moveTo)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### open()

> **open**(`url?`, `target?`, `features?`): `Window` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41543

The **`open()`** method of the Window interface loads a specified resource into a new or existing browsing context (that is, a tab, a window, or an iframe) under a specified name.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/open)

#### Parameters

##### url?

`string` \| `URL`

##### target?

`string`

##### features?

`string`

#### Returns

`Window` \| `null`

***

### postMessage()

#### Call Signature

> **postMessage**(`message`, `targetOrigin`, `transfer?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41549

The **`window.postMessage()`** method safely enables cross-origin communication between Window objects; e.g., between a page and a pop-up that it spawned, or between a page and an iframe embedded within it.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/postMessage)

##### Parameters

###### message

`any`

###### targetOrigin

`string`

###### transfer?

`Transferable`[]

##### Returns

`void`

#### Call Signature

> **postMessage**(`message`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41550

##### Parameters

###### message

`any`

###### options?

`WindowPostMessageOptions`

##### Returns

`void`

***

### print()

> **print**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41556

Opens the **`print`** dialog to print the current document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/print)

#### Returns

`void`

***

### prompt()

> **prompt**(`message?`, `_default?`): `string` \| `null`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41562

**`window.prompt()`** instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/prompt)

#### Parameters

##### message?

`string`

##### \_default?

`string`

#### Returns

`string` \| `null`

***

### queueMicrotask()

> **queueMicrotask**(`callback`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41741

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/queueMicrotask)

#### Parameters

##### callback

`VoidFunction`

#### Returns

`void`

#### Inherited from

`WindowOrWorkerGlobalScope.queueMicrotask`

***

### ~~releaseEvents()~~

> **releaseEvents**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41569

Releases the window from trapping events of a specific type.

#### Returns

`void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/releaseEvents)

***

### removeEventListener()

#### Call Signature

> **removeEventListener**\<`K`\>(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41617

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target. The event listener to be removed is identified using a combination of the event type, the event listener function itself, and various optional options that may affect the matching process; see Matching event listeners for removal.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Type Parameters

###### K

`K` *extends* keyof `WindowEventMap`

##### Parameters

###### type

`K`

###### listener

(`this`, `ev`) => `any`

###### options?

`boolean` \| `EventListenerOptions`

##### Returns

`void`

##### Overrides

`EventTarget.removeEventListener`

#### Call Signature

> **removeEventListener**(`type`, `listener`, `options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41618

The **`removeEventListener()`** method of the EventTarget interface removes an event listener previously registered with EventTarget.addEventListener() from the target. The event listener to be removed is identified using a combination of the event type, the event listener function itself, and various optional options that may affect the matching process; see Matching event listeners for removal.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)

##### Parameters

###### type

`string`

###### listener

`EventListenerOrEventListenerObject`

###### options?

`boolean` \| `EventListenerOptions`

##### Returns

`void`

##### Overrides

`EventTarget.removeEventListener`

***

### reportError()

> **reportError**(`e`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41743

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/reportError)

#### Parameters

##### e

`any`

#### Returns

`void`

#### Inherited from

`WindowOrWorkerGlobalScope.reportError`

***

### requestAnimationFrame()

> **requestAnimationFrame**(`callback`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:3776

[MDN Reference](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)

#### Parameters

##### callback

`FrameRequestCallback`

#### Returns

`number`

#### Inherited from

`AnimationFrameProvider.requestAnimationFrame`

***

### requestIdleCallback()

> **requestIdleCallback**(`callback`, `options?`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41575

The **`window.requestIdleCallback()`** method queues a function to be called during a browser's idle periods. This enables developers to perform background and low priority work on the main thread, without impacting latency-critical events such as animation and input response. Functions are generally called in first-in-first-out order; however, callbacks which have a timeout specified may be called out-of-order if necessary in order to run them before the timeout elapses.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/requestIdleCallback)

#### Parameters

##### callback

`IdleRequestCallback`

##### options?

`IdleRequestOptions`

#### Returns

`number`

***

### resizeBy()

> **resizeBy**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41581

The **`Window.resizeBy()`** method resizes the current window by a specified amount.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/resizeBy)

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

***

### resizeTo()

> **resizeTo**(`width`, `height`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41587

The **`Window.resizeTo()`** method dynamically resizes the window.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/resizeTo)

#### Parameters

##### width

`number`

##### height

`number`

#### Returns

`void`

***

### scroll()

#### Call Signature

> **scroll**(`options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41593

The **`Window.scroll()`** method scrolls the window to a particular place in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scroll)

##### Parameters

###### options?

`ScrollToOptions`

##### Returns

`void`

#### Call Signature

> **scroll**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41594

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`void`

***

### scrollBy()

#### Call Signature

> **scrollBy**(`options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41600

The **`Window.scrollBy()`** method scrolls the document in the window by the given amount.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollBy)

##### Parameters

###### options?

`ScrollToOptions`

##### Returns

`void`

#### Call Signature

> **scrollBy**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41601

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`void`

***

### scrollTo()

#### Call Signature

> **scrollTo**(`options?`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41607

**`Window.scrollTo()`** scrolls to a particular set of coordinates in the document.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/scrollTo)

##### Parameters

###### options?

`ScrollToOptions`

##### Returns

`void`

#### Call Signature

> **scrollTo**(`x`, `y`): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41608

##### Parameters

###### x

`number`

###### y

`number`

##### Returns

`void`

***

### setInterval()

> **setInterval**(`handler`, `timeout?`, ...`arguments`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41745

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setInterval)

#### Parameters

##### handler

`TimerHandler`

##### timeout?

`number`

##### arguments

...`any`[]

#### Returns

`number`

#### Inherited from

`WindowOrWorkerGlobalScope.setInterval`

***

### setTimeout()

> **setTimeout**(`handler`, `timeout?`, ...`arguments`): `number`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41747

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/setTimeout)

#### Parameters

##### handler

`TimerHandler`

##### timeout?

`number`

##### arguments

...`any`[]

#### Returns

`number`

#### Inherited from

`WindowOrWorkerGlobalScope.setTimeout`

***

### stop()

> **stop**(): `void`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41614

The **`window.stop()`** stops further resource loading in the current browsing context, equivalent to the stop button in the browser.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/stop)

#### Returns

`void`

***

### structuredClone()

> **structuredClone**\<`T`\>(`value`, `options?`): `T`

Defined in: node\_modules/typescript/lib/lib.dom.d.ts:41749

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/structuredClone)

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### value

`T`

##### options?

`StructuredSerializeOptions`

#### Returns

`T`

#### Inherited from

`WindowOrWorkerGlobalScope.structuredClone`
