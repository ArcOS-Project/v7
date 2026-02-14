import { TryGetDaemon } from "$ts/daemon";
import { Server } from "$ts/env";
import { ComponentIcon } from "$ts/images/general";
import { authcode } from "$ts/util";
import type { PartialStoreItem, StoreItem } from "$types/package";

export function StoreItemIcon(item: PartialStoreItem | StoreItem) {
  return item.pkg.store?.image
    ? `${Server.url}/store/assets/${item._id}/icon${authcode()}`
    : TryGetDaemon()?.icons!.getIconCached("ComponentIcon") || ComponentIcon;
}

export function StoreItemIconPrimitive(id: string) {
  return `${Server.url}/store/assets/${id}/icon${authcode()}`;
}

export function StoreItemScreenshot(item: PartialStoreItem | StoreItem, index = 0) {
  return item.pkg.store?.screenshots?.[index] ? `${Server.url}/store/assets/${item._id}/screenshot/${index}${authcode()}` : "";
}

export function StoreItemBanner(item: PartialStoreItem | StoreItem) {
  return item.pkg.store?.banner ? `${Server.url}/store/assets/${item._id}/banner${authcode()}` : "";
}
