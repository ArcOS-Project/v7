import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { DistributionServiceProcess } from "$ts/distrib";
import { ErrorIcon } from "$ts/images/dialog";
import { DownloadIcon } from "$ts/images/filesystem";
import { UploadIcon } from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
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
    const pageProps = page?.props ? { ...(await page.props(this, props)), ...props } : props;

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
    const elevated = await this.userDaemon!.manuallyElevate({
      what: "ArcOS needs your permission to install a package",
      title: pkg.pkg.name,
      description: `By ${pkg.user?.displayName || pkg.user?.username || pkg.pkg.author}`,
      image: DownloadIcon,
      level: ElevationLevel.medium,
    });

    if (!elevated) return false;

    return await this.distrib.storeItemInstaller(pkg._id, onDownloadProgress);
  }

  async updatePackage(pkg: StoreItem, onDownloadProgress?: FilesystemProgressCallback) {
    const elevated = await this.userDaemon!.manuallyElevate({
      what: "ArcOS needs your permission to update a package",
      title: pkg.pkg.name,
      description: `By ${pkg.user?.displayName || pkg.user?.username || pkg.pkg.author}`,
      image: UploadIcon,
      level: ElevationLevel.medium,
    });

    if (!elevated) return false;

    await this.distrib!.removeFromInstalled(pkg._id);

    return await this.distrib.updatePackage(pkg._id, true, onDownloadProgress);
  }
}
