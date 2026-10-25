import { UserPaths } from "$ts/user/store";
import { join } from "$ts/util/fs";
import type { SettingsBlock, ModularSettingsPage } from "$types/system/mui/settings";
import type { MuiSupplierOptions } from "$types/system/mui/supplier";
import { SettingsAccountPage } from "./Pages/account";
import { SettingsThemesPage } from "./Pages/themes";

export const SettingsMuiSupplierOptions: MuiSupplierOptions<SettingsBlock, ModularSettingsPage> = {
  shaFilePath: join(UserPaths.MuiHashes, "Settings.json"),
  jsonFolderPath: join(UserPaths.MuiPages, "Settings"),
  trackedOsBuildPath: join(UserPaths.MuiBuildTracking, "Settings.txt"),
  softCopies: {
    account: SettingsAccountPage,
    themes: SettingsThemesPage
  },

};
