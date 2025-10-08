import { AppProcess } from "$ts/apps/process";
import { MessageBox } from "$ts/dialog";
import { ArcOSVersion } from "$ts/env";
import { IconService } from "$ts/icon";
import { arrayToBlob } from "$ts/util/convert";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import JSZip from "jszip";

export class IconEditorRuntime extends AppProcess {
  iconGroups = Store<Record<string, string[]>>({});
  icons = Store<Record<string, string>>({});
  filtered = Store<Record<string, string>>({});
  iconService?: IconService;
  selectedIcon = Store<string>("");
  selectedGroup = Store<string>("");
  hasChanges = Store<boolean>(false);

  //#region LIFECYCLE

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

  async onClose(): Promise<boolean> {
    if (!this.hasChanges()) return true;

    const saveChanges = await this.userDaemon?.Confirm(
      "Save changes?",
      "Do you want to save the changes you made to your icon set?",
      "Discard",
      "Save changes",
      "SaveIcon",
      this.pid
    );

    if (saveChanges) {
      this.iconService?.Configuration.set({ ...this.icons() });
      this.hasChanges.set(false);
    }

    return true;
  }

  //#endregion

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

  async importIconSet() {
    const zip = new JSZip();

    const [result] = await this.userDaemon!.LoadSaveDialog({
      icon: "AppsIcon",
      title: "Import icon set",
      extensions: [".zip"],
    });

    if (!result) return;
    const data = await this.fs.readFile(result);
    if (!data) throw new Error("No such file");

    await zip.loadAsync(data);
    const iconsf = zip.folder("payload");

    const payload: Record<string, Blob> = {};
    iconsf?.forEach(async (path, file) => {
      payload[path] = await file.async("blob");
    });

    const _icons = zip.file("_icons.json");
    if (!_icons) throw new Error("No _icons.json file was found.");

    const _iconsdata = JSON.parse(await _icons.async("string"));
    if (_iconsdata.metadata.arcos_version !== ArcOSVersion) {
      let proceed = false;

      await MessageBox(
        {
          title: "hold on",
          message: "the version of arcos that this pack is for is different than your current arcos version",
          buttons: [
            {
              suggested: true,
              caption: "Continue",
              action: () => (proceed = true),
            },
            {
              caption: "Stop",
              action() {},
            },
          ],
        },
        this.pid,
        true
      );

      if (!proceed) return;
    }

    for (const file in payload) {
      const data = payload[file];
      await this.fs.writeFile(`U:/System/Icons/${file}`, data);
    }

    this.icons.update((v) => {
      for (const icon in _iconsdata.icons) v[icon] = _iconsdata.icons[icon];
      return v;
    });
  }

  async exportIconSet() {
    const zip = new JSZip();
    const icons = { ...this.icons() };

    zip.folder("payload");
    for (const icon in icons) {
      const val = icons[icon];
      if (val.startsWith("@fs::")) {
        const filepath = val.split("::").slice(1).join("::");
        const filename = filepath.split("/")[filepath.split("/").length - 1];
        const iconData = await this.fs.readFile(filepath);

        if (!iconData) {
          delete icons[icon];
          continue;
        }

        zip.file(`payload/${filename}`, iconData);
        icons[icon] = `@fs::U:/System/Icons/${filename}`;
      }
    }

    const _icons = {
      metadata: { arcos_version: ArcOSVersion },
      icons,
    };

    zip.file("_icons.json", JSON.stringify(_icons, null, 2));
    const data = await zip.generateAsync({ type: "arraybuffer" });

    if (!data) throw new Error("Failed to generate icon set");

    const [result] = await this.userDaemon!.LoadSaveDialog({
      icon: "AppsIcon",
      title: "Export icon set",
      extensions: [".zip"],
      isSave: true,
    });

    if (!result) return;
    await this.fs.writeFile(result, arrayToBlob(data));
  }

  async save() {
    this.iconService?.Configuration.set({ ...this.icons() });
    this.hasChanges.set(false);
    this.closeWindow();
    this.userDaemon?.restart();
  }

  async editIcon() {
    this.spawnOverlayApp("IconEditDialog", this.pid, this.icons, this.selectedIcon());
  }
}
