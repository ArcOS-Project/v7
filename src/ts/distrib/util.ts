import { KernelServerUrl } from "$ts/env";
import { ComponentIcon } from "$ts/images/general";
import { TryGetDaemon } from "$ts/server/user/daemon";
import { authcode } from "$ts/util";
import type { PartialStoreItem, StoreItem } from "$types/package";

export function StoreItemIcon(item: PartialStoreItem | StoreItem) {
  return item.pkg.store?.image
    ? `${KernelServerUrl()}/store/assets/${item._id}/icon${authcode()}`
    : TryGetDaemon()?.appreg!.getIconCached("ComponentIcon") || ComponentIcon;
}

export function StoreItemScreenshot(item: PartialStoreItem | StoreItem, index = 0) {
  return item.pkg.store?.screenshots?.[index]
    ? `${KernelServerUrl()}/store/assets/${item._id}/screenshot/${index}${authcode()}`
    : "";
}

export function StoreItemBanner(item: PartialStoreItem | StoreItem) {
  return item.pkg.store?.banner ? `${KernelServerUrl()}/store/assets/${item._id}/banner${authcode()}` : "";
}
