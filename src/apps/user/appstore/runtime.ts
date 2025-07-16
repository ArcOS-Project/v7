import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { DistributionServiceProcess } from "$ts/distrib";
import { InstallerProcess } from "$ts/distrib/installer";
import { StoreItemIcon } from "$ts/distrib/util";
import { AppStoreIcon } from "$ts/images/apps";
import { ErrorIcon, InfoIcon } from "$ts/images/dialog";
import { UploadIcon } from "$ts/images/general";
import type { ProcessHandler } from "$ts/process/handler";
import { UserPaths } from "$ts/server/user/store";
import { Plural } from "$ts/util";
import { UUID } from "$ts/uuid";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { ElevationLevel } from "$types/elevation";
import type { FilesystemProgressCallback } from "$types/fs";
import type { StoreItem } from "$types/package";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import TakenDown from "./AppStore/TakenDown.svelte";
import { appStorePages } from "./store";
import axios from "axios";
import { arrayToBlob } from "$ts/fs/convert";

export class AppStoreRuntime extends AppProcess {
  searchQuery = Store<string>("");
  loadingPage = Store<boolean>(false);
  pageProps = Store<Record<string, any>>({});
  searching = Store<boolean>(false);
  currentPage = Store<string>("");
  operations: Record<string, InstallerProcess> = {};
  distrib: DistributionServiceProcess;

  constructor(
    handler: ProcessHandler,
    pid: number,
    parentPid: number,
    app: AppProcessData,
    page?: number,
    props?: Record<string, any>
  ) {
    super(handler, pid, parentPid, app);

    this.distrib = this.userDaemon!.serviceHost!.getService<DistributionServiceProcess>("DistribSvc")!;

    this.searchQuery.subscribe((v) => {
      if (!v) {
        this.searching.set(false);
        if (this.currentPage() === "search") this.switchPage("home");
      }
    });

    this.renderArgs = { page, props };
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

    this.systemDispatch.subscribe("mugui-done", () => {
      this.switchPage(this.currentPage(), this.pageProps(), true);
    });
  }

  async render({ page, props }: { page?: string; props?: Record<string, any> }) {
    if (await this.closeIfSecondInstance()) return false;

    this.switchPage(page || "home", props || {});
  }

  async switchPage(id: string, props?: Record<string, any>, force = false) {
    if (this.searching() && id !== "search") {
      this.searchQuery.set("");
    }
    props ||= {};
    this.Log(`Loading page '${id}'`);

    if (!appStorePages.has(id) || (this.currentPage() === id && !force)) return;

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

    if (pkg.verifiedVer !== pkg.pkg.version && !this.userDaemon?.userInfo?.admin) {
      MessageBox(
        {
          title: "Can't install package",
          message: `The ArcOS administrators haven't yet verified version <b>${pkg.pkg.version}</b> of this package! This package has to be verified before you can install it.`,
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          sound: "arcos.dialog.error",
          image: StoreItemIcon(pkg),
        },
        this.pid,
        true
      );

      return 0;
    }

    const elevated = await this.userDaemon!.manuallyElevate({
      what: "ArcOS needs your permission to install a package",
      title: pkg.pkg.name,
      description: `By ${pkg.user?.displayName || pkg.user?.username || pkg.pkg.author}`,
      image: StoreItemIcon(pkg),
      level: ElevationLevel.medium,
    });

    if (!elevated) return false;

    const result = await this.distrib.storeItemInstaller(pkg._id, onDownloadProgress);
    if (!result) return false;

    const permitted = this.registerOperation(pkg._id, result);
    if (!permitted) return false;
    await this.distrib!.removeFromInstalled(pkg._id);

    result.onStop = async () => {
      this.discardOperation(pkg._id);
    };

    return result;
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

    if (pkg.verifiedVer !== pkg.pkg.version && !this.userDaemon?.userInfo?.admin) {
      MessageBox(
        {
          title: "Can't update package",
          message: `The ArcOS administrators haven't yet verified version <b>${pkg.pkg.version}</b> of this package! This package has to be verified before you can update it.`,
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          sound: "arcos.dialog.error",
          image: StoreItemIcon(pkg),
        },
        this.pid,
        true
      );

      return 0;
    }

    const elevated = await this.userDaemon!.manuallyElevate({
      what: "ArcOS needs your permission to update a package",
      title: pkg.pkg.name,
      description: `By ${pkg.user?.displayName || pkg.user?.username || pkg.pkg.author}`,
      image: StoreItemIcon(pkg),
      level: ElevationLevel.medium,
    });
    if (!elevated) return false;

    const result = await this.distrib.updatePackage(pkg._id, true, onDownloadProgress);
    if (!result) return false;

    const permitted = this.registerOperation(pkg._id, result);
    if (!permitted) return false;
    await this.distrib!.removeFromInstalled(pkg._id);

    result.onStop = async () => {
      this.discardOperation(pkg._id);
    };

    return result;
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

    this.switchPage("manageStoreItem", { id: pkg._id }, true);
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

    const prog = await this.userDaemon!.FileProgress(
      {
        waiting: true,
        caption: "Publishing your package",
        subtitle: path,
        icon: UploadIcon,
      },
      this.pid
    );

    const result = await this.distrib.publishPackageFromPath(path, (progress) => {
      prog.show();
      prog.setMax(progress.max + 1);
      prog.setDone(progress.value);
      prog.setWork(true);
      prog.setWait(false);
      if (progress.what) prog.updSub(progress.what);
    });

    prog.stop();

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

    await this.switchPage(this.currentPage(), {}, true);

    return true;
  }

  async updateStoreItem(pkg: StoreItem) {
    const [path] = await this.userDaemon!.LoadSaveDialog({
      title: `Select update for '${pkg.pkg.name}'`,
      icon: StoreItemIcon(pkg),
      extensions: [".arc"],
      startDir: UserPaths.Documents,
    });

    if (!path) return;

    const prog = await this.userDaemon!.FileProgress(
      {
        waiting: true,
        caption: "Updating your store item",
        subtitle: path,
        icon: StoreItemIcon(pkg),
      },
      this.pid
    );

    const result = await this.distrib.updateStoreItemFromPath(pkg._id, path, (progress) => {
      prog.show();
      prog.setMax(progress.max + 1);
      prog.setDone(progress.value);
      prog.setWork(true);
      prog.setWait(false);
      if (progress.what) prog.updSub(progress.what);
    });

    if (!result) {
      MessageBox(
        {
          title: "Failed to update store item",
          message:
            "The server didn't accept your update package. Maybe its format is incorrect, the app ID differs, or the version isn't increased. Please check the package and try again.",
          buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
          image: ErrorIcon,
          sound: "arcos.dialog.error",
        },
        this.pid,
        true
      );

      return;
    }

    await this.switchPage("manageStoreItem", { id: pkg._id }, true);

    prog.stop();
  }

  readmeFallback(pkg: StoreItem): string {
    const times = Plural("time", pkg.installCount);
    dayjs.extend(advancedFormat);

    const updated = dayjs(pkg.lastUpdated).format("MMMM Do YYYY [at] HH:mm");
    const installed = `${pkg.installCount} ${times}`;
    const result = `# ${pkg.pkg.name}
${pkg.pkg.description}

This package is on version ${pkg.pkg.version}, and has been downloaded ${installed} since it was first published. ${
      pkg.pkg.name
    } has last been updated on ${updated}.

## Author
${pkg.user?.displayName || pkg.user?.username || pkg.pkg.author}

## Disclaimer
The author hasn't provided a readme file themselves, so this one has been automatically generated. If you're the author of this package, you can create \`src/README.md\` to act as the readme for your package. I encourage you to create this file, so that people know what this app is and what they can do with it.`;

    return result;
  }

  learnMoreBlocking() {
    MessageBox(
      {
        title: "What is a blocked package?",
        content: TakenDown as any,
        image: InfoIcon,
        sound: "arcos.dialog.info",
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
      },
      this.pid,
      true
    );
  }

  registerOperation(id: string, proc: InstallerProcess) {
    if (this.operations[id]) return false;

    this.operations[id] = proc;

    return true;
  }

  discardOperation(id: string) {
    if (!this.operations[id]) return false;

    delete this.operations[id];

    return true;
  }

  getRunningOperation(pkg: StoreItem) {
    return this.operations[pkg._id];
  }

  async viewImage(url: string, name?: string) {
    const uuid = name || UUID();
    const path = `T:/Apps/${this.app.id}/${uuid}`;
    const array = await axios.get(url, { responseType: "arraybuffer" });

    await this.fs.writeFile(path, arrayToBlob(array.data));

    this.spawnApp("ImageViewer", +this.env.get("shell_pid"), path);
  }
}
