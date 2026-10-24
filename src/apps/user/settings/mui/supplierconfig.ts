import { UserPaths } from "$ts/user/store";
import { join } from "$ts/util/fs";
import type { SettingsBlock, SettingsPage } from "$types/system/mui/settings";
import type { MuiSupplierOptions } from "$types/system/mui/supplier";

export const SettingsMuiSupplierOptions: MuiSupplierOptions<SettingsBlock, SettingsPage> = {
  shaFilePath: join(UserPaths.MuiHashes, "Settings.json"),
  jsonFolderPath: join(UserPaths.MuiPages, "Settings"),
  trackedOsBuildPath: join(UserPaths.MuiBuildTracking, "Settings.txt"),
  softCopies: {
    
  }
};
