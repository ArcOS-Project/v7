import { ComponentIcon } from "$ts/images/general";
import type { PartialStoreItem, StoreItem } from "$types/package";

export function StoreItemIcon(item: PartialStoreItem) {
  return item.pkg.store?.image
    ? `${import.meta.env.DW_SERVER_URL}/store/assets/${item._id}/icon?authcode=${import.meta.env.DW_SERVER_AUTHCODE}`
    : ComponentIcon;
}

export function StoreItemScreenshot(item: PartialStoreItem, index = 0) {
  return item.pkg.store?.screenshots?.[index]
    ? `${import.meta.env.DW_SERVER_URL}/store/assets/${item._id}/screenshot/${index}?authcode=${
        import.meta.env.DW_SERVER_AUTHCODE
      }`
    : "";
}

export function StoreItemBanner(item: PartialStoreItem) {
  return item.pkg.store?.banner
    ? `${import.meta.env.DW_SERVER_URL}/store/assets/${item._id}/banner?authcode=${import.meta.env.DW_SERVER_AUTHCODE}`
    : "";
}
