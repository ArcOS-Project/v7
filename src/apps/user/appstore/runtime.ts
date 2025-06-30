import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { DistributionServiceProcess } from "$ts/distrib";
import { StoreItemIcon } from "$ts/distrib/util";
import { AppStoreIcon } from "$ts/images/apps";
import { ErrorIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { UserPaths } from "$ts/server/user/store";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { ElevationLevel } from "$types/elevation";
import type { FilesystemProgressCallback } from "$types/fs";
import type { StoreItem } from "$types/package";
import { appStorePages } from "./store";

export class AppStoreRuntime extends AppProcess {
  searchQuery = Store<string>("");
  loadingPage = Store<boolean>(false);
  pageProps = Store<Record<string, any>>({});
  searching = Store<boolean>(false);
  currentPage = Store<string>("");
  distrib: DistributionServiceProcess;

  constructor(handler: ProcessHandler, pid: number, parentPid: number, app: AppProcessData) {
    super(handler, pid, parentPid, app);

    this.distrib = this.userDaemon!.serviceHost!.getService<DistributionServiceProcess>("DistribSvc")!;

    this.searchQuery.subscribe((v) => {
      if (!v) {
        this.searching.set(false);
        if (this.currentPage() === "search") this.switchPage("home");
      }
    });
  }

  async start() {
    if (!this.distrib) {
      MessageBox(
        {
          title: "App store unavailable",
          message:
            "The Distribution Service isn't running anymore. Please restart ArcOS, and then try again. If this keeps happening, contact an ArcOS Administrator.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          sound: "arcos.dialog.error",
          image: ErrorIcon,
        },
        +this.env.get("shell_pid"),
        true
      );

      return false;
    }
  }

  async render() {
    this.switchPage("home");
  }

  async switchPage(id: string, props?: Record<string, any>) {
    if (this.searching() && id !== "search") {
      this.searchQuery.set("");
    }
    props ||= {};
    this.Log(`Loading page '${id}'`);

    if (!appStorePages.has(id)) return;

    this.loadingPage.set(true);
    this.pageProps.set({});

    const page = appStorePages.get(id);
    const pageProps = page?.props ? { ...props, ...(await page.props(this, props)) } : props;

    this.pageProps.set(pageProps);
    this.currentPage.set(id);
    this.windowTitle.set(`${page?.name} - App Store`);
    this.loadingPage.set(false);
  }

  async Search() {
    this.searching.set(true);
    this.switchPage("search", { query: this.searchQuery() });
  }

  async installPackage(pkg: StoreItem, onDownloadProgress?: FilesystemProgressCallback) {
    if (pkg.deprecated) {
      const go = await this.userDaemon!.Confirm(
        "Are you sure?",
        "The author of this package marked it as <b>deprecated</b>. This means that the package is unmaintained and outdated. Are you sure you want to continue installing it?",
        "Cancel",
        "Install anyway"
      );

      if (!go) return 0;
    }

    const elevated = await this.userDaemon!.manuallyElevate({
      what: "ArcOS needs your permission to install a package",
      title: pkg.pkg.name,
      description: `By ${pkg.user?.displayName || pkg.user?.username || pkg.pkg.author}`,
      image: StoreItemIcon(pkg),
      level: ElevationLevel.medium,
    });

    if (!elevated) return false;

    return await this.distrib.storeItemInstaller(pkg._id, onDownloadProgress);
  }

  async updatePackage(pkg: StoreItem, onDownloadProgress?: FilesystemProgressCallback) {
    if (pkg.deprecated) {
      const go = await this.userDaemon!.Confirm(
        "Are you sure?",
        "The author of this package marked it as <b>deprecated</b>. This means that the package is unmaintained and outdated. Do you want to uninstall it instead of updating?",
        "Uninstall",
        "Update anyway"
      );

      if (!go) {
        await this.userDaemon?.deleteApp(pkg.pkg.appId, true);
        return 0;
      }
    }

    const elevated = await this.userDaemon!.manuallyElevate({
      what: "ArcOS needs your permission to update a package",
      title: pkg.pkg.name,
      description: `By ${pkg.user?.displayName || pkg.user?.username || pkg.pkg.author}`,
      image: StoreItemIcon(pkg),
      level: ElevationLevel.medium,
    });

    if (!elevated) return false;

    await this.distrib!.removeFromInstalled(pkg._id);

    return await this.distrib.updatePackage(pkg._id, true, onDownloadProgress);
  }

  async deprecatePackage(pkg: StoreItem) {
    const elevated = await this.userDaemon!.manuallyElevate({
      what: "ArcOS needs your permission to deprecate one of your packages",
      title: pkg.pkg.name,
      description: pkg.pkg.appId,
      image: StoreItemIcon(pkg),
      level: ElevationLevel.medium,
    });

    if (!elevated) return false;

    await this.distrib!.deprecateStoreItem(pkg._id);

    this.switchPage("manageStoreItem", { id: pkg._id });
  }

  async deletePackage(pkg: StoreItem) {
    const elevated = await this.userDaemon!.manuallyElevate({
      what: "ArcOS needs your permission to delete one of your packages",
      title: pkg.pkg.name,
      description: pkg.pkg.appId,
      image: StoreItemIcon(pkg),
      level: ElevationLevel.high,
    });

    if (!elevated) return false;

    await this.distrib!.deleteStoreItem(pkg._id);

    this.switchPage("madeByYou");
  }

  async publishPackage() {
    const [path] = await this.userDaemon!.LoadSaveDialog({
      title: "Select package to publish",
      icon: AppStoreIcon,
      extensions: [".arc"],
      startDir: UserPaths.Documents,
    });

    if (!path) return;

    const result = await this.distrib.publishPackageFromPath(path);

    if (!result) {
      MessageBox(
        {
          title: "Failed to publish package",
          message:
            "The server didn't accept your package. Maybe its format is incorrect or another package with the same name already exists.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: ErrorIcon,
          sound: "arcos.dialog.error",
        },
        this.pid,
        true
      );

      return false;
    }

    await this.switchPage(this.currentPage(), {});

    return true;
  }
}
