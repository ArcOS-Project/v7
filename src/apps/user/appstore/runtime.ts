import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { DistributionServiceProcess } from "$ts/distrib";
import { ErrorIcon } from "$ts/images/dialog";
import type { ProcessHandler } from "$ts/process/handler";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
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
}
