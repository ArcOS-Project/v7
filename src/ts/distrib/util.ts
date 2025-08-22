import { ComponentIcon } from "$ts/images/general";
import { authcode } from "$ts/util";
import type { PartialStoreItem, StoreItem } from "$types/package";

export function StoreItemIcon(item: PartialStoreItem | StoreItem) {
  return item.pkg.store?.image ? `${import.meta.env.DW_SERVER_URL}/store/assets/${item._id}/icon${authcode()}` : ComponentIcon;
}

export function StoreItemScreenshot(item: PartialStoreItem | StoreItem, index = 0) {
  return item.pkg.store?.screenshots?.[index]
    ? `${import.meta.env.DW_SERVER_URL}/store/assets/${item._id}/screenshot/${index}${authcode()}`
    : "";
}

export function StoreItemBanner(item: PartialStoreItem | StoreItem) {
  return item.pkg.store?.banner ? `${import.meta.env.DW_SERVER_URL}/store/assets/${item._id}/banner${authcode()}` : "";
}
