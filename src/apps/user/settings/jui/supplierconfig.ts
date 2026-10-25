import { UserPaths } from "$ts/user/store";
import { join } from "$ts/util/fs";
import type { JoltSettingsBlock, JoltSettingsPage } from "$types/system/jui/settings";
import type { JuiSupplierOptions } from "$types/system/jui/supplier";
import { SettingsAccountPage } from "./Pages/account";
import { SettingsThemesPage } from "./Pages/themes";

export const SettingsJuiSupplierOptions: JuiSupplierOptions<JoltSettingsBlock, JoltSettingsPage> = {
  shaFilePath: join(UserPaths.MuiHashes, "Settings.json"),
  jsonFolderPath: join(UserPaths.MuiPages, "Settings"),
  trackedOsBuildPath: join(UserPaths.MuiBuildTracking, "Settings.txt"),
  softCopies: {
    account: SettingsAccountPage,
    themes: SettingsThemesPage
  },

};
