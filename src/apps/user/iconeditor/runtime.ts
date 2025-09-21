import { AppProcess } from "$ts/apps/process";
import { IconService } from "$ts/icon";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import { ElevationLevel } from "$types/elevation";

export class IconEditorRuntime extends AppProcess {
  iconGroups = Store<Record<string, string[]>>({});
  icons = Store<Record<string, string>>({});
  filtered = Store<Record<string, string>>({});
  iconService?: IconService;
  selectedIcon = Store<string>("");
  selectedGroup = Store<string>("");
  hasChanges = Store<boolean>(false);

  constructor(pid: number, parentPid: number, app: AppProcessData) {
    super(pid, parentPid, app);
  }

  async start() {
    this.iconService = this.userDaemon?.serviceHost?.getService<IconService>("IconService");
    this.setGroups();
    this.icons.set({ ...(this.iconService?.Configuration() || {}) });
    this.icons.subscribe(() => {
      this.hasChanges.set(true);
      this.updateFiltered();
    });
    this.hasChanges.set(false);
    this.selectedGroup.subscribe((v) => {
      this.selectedIcon.set("");
      this.updateFiltered(v);
    });
  }

  revert() {
    this.icons.set({ ...(this.iconService?.Configuration() || {}) });
    this.setGroups();
    this.selectedIcon.set("");
    this.selectedGroup.set("");
    this.hasChanges.set(false);
  }

  setGroups() {
    const groups = this.iconService?.getGroupedIcons();

    if (!groups) return;

    const result: Record<string, string[]> = Object.fromEntries(Object.entries(groups).map(([k, v]) => [k, Object.keys(v)]));

    this.iconGroups.set(result);
  }

  updateFiltered(v = this.selectedGroup()) {
    const icons = this.icons();
    this.filtered.set(!v ? icons : Object.fromEntries(Object.entries(icons).filter(([k]) => this.iconGroups()[v]?.includes(k))));
  }

  async save() {
    const elevated = await this.userDaemon?.manuallyElevate({
      what: "ArcOS needs your permission to update your icon set and restart",
      image: "AppsIcon",
      title: "Save configuration",
      description: "IconService",
      level: ElevationLevel.medium,
    });

    if (!elevated) return;

    this.iconService?.Configuration.set({ ...this.icons() });
    this.closeWindow();
    this.userDaemon?.restart();
  }

  async editIcon() {
    this.spawnOverlayApp("IconEditDialog", this.pid, this.icons, this.selectedIcon());
  }
}
