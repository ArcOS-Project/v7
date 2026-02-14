import { AppProcess } from "$ts/apps/process";
import { Daemon } from "$ts/daemon";
import { Env, Fs } from "$ts/env";
import { DefaultArcTermConfiguration } from "$ts/terminal/store";
import { UserPaths } from "$ts/user/store";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { MessageBox } from "$ts/util/dialog";
import { join } from "$ts/util/fs";
import { tryJsonParse } from "$ts/util/json";
import { Store } from "$ts/writable";
import type { AppProcessData } from "$types/app";
import type { ArcTermConfiguration } from "$types/terminal";
import type { ArcTermColorPreset, ArcTermColors } from "./types";

export class ArcTermColorsRuntime extends AppProcess {
  CONFIG_PATH = join(UserPaths.Configuration, "ArcTerm/arcterm.conf");
  arcTermConfiguration = Store<ArcTermConfiguration>(DefaultArcTermConfiguration);
  mode = Store<"presets" | "custom">("custom");
  changed = Store<boolean>(false);
  savePath?: string;
  //#region LIFECYCLE

  constructor(pid: number, parentPid: number, app: AppProcessData, path?: string) {
    super(pid, parentPid, app);

    this.setSource(__SOURCE__);
    this.savePath = path;

    this.arcTermConfiguration.subscribe((v) => {
      this.changed.set(true);
    });
  }

  async start() {
    const { stop } = await Daemon.helpers?.GlobalLoadIndicator("Loading configuration...")!;

    await this.readConfiguration();
    await this.readPresetFromFile();

    await stop();
  }

  async stop() {}

  async render() {}

  //#endregion LIFECYCLE

  async writeDefaultConfiguration() {
    this.Log(`Writing default configuration`);

    await Fs.writeFile(this.CONFIG_PATH, textToBlob(JSON.stringify(DefaultArcTermConfiguration, null, 2)), undefined, false);

    this.arcTermConfiguration.set(DefaultArcTermConfiguration);
  }

  customFromPreset(preset: ArcTermColorPreset) {
    this.choosePreset(preset);
    this.mode.set("custom");
  }

  choosePreset(preset: ArcTermColorPreset) {
    this.Log(`Choosing preset: ${preset.name ?? "<untitled>"}`);

    // Remove additional metadata from preset
    const newData = {
      ...preset,
      author: undefined,
      name: undefined,
      variant: undefined,
    };

    // Overrides color properties from the ArcTerm configuration with those of the preset we're applying
    this.arcTermConfiguration.update((v) => {
      return { ...v, ...newData };
    });
  }

  async savePresetToFile(state = this.arcTermConfiguration()) {
    this.Log(`Saving preset to file`);

    const [path] = await Daemon.files!.LoadSaveDialog({
      title: "Choose where to save the colors",
      icon: "ArcTermIcon",
      isSave: true,
      startDir: join(UserPaths.Configuration, "ArcTerm"),
      extensions: [".atc"],
      saveName: `My colors`,
    });

    if (!path) return;

    // Remove residuals from ArcTerm config
    const saveData = {
      ...state,
      prompt: undefined,
      noLogo: undefined,
      greeting: undefined,
    };

    await Fs.writeFile(path, textToBlob(JSON.stringify(saveData, null, 2)), undefined, false);
  }

  async openPreset() {
    this.Log(`Opening preset from file`);

    const [path] = await Daemon.files!.LoadSaveDialog({
      title: "Choose a colorset to open",
      icon: "ArcTermIcon",
      startDir: join(UserPaths.Configuration, "ArcTerm"),
      extensions: [".atc"],
    });

    await this.readPresetFromFile(path);
    this.mode.set("custom");
  }

  async readPresetFromFile(path = this.savePath) {
    this.Log(`Reading preset from file`);

    if (!path) return;

    const contents = await Fs.readFile(path);
    if (!contents) {
      return await this.error_savePath();
    }

    const json = tryJsonParse<ArcTermColors>(arrayBufferToText(contents));
    if (!json || typeof json === "string") {
      return await this.error_savePath();
    }

    this.choosePreset(json as ArcTermColorPreset);
    this.mode.set("custom");
    this.changed.set(false);
  }

  async applyConfiguration() {
    this.Log(`Applying configuration`);

    const { stop } = await Daemon.helpers?.GlobalLoadIndicator("Saving configuration...")!;
    await Fs.writeFile(this.CONFIG_PATH, textToBlob(JSON.stringify(this.arcTermConfiguration(), null, 2)), undefined, false);

    await stop();
    await this.closeWindow();
  }

  async readConfiguration() {
    this.Log(`Reading configuration`);

    const path = this.CONFIG_PATH;

    const contents = await Fs.readFile(path);
    if (!contents) {
      return await this.writeDefaultConfiguration();
    }

    const json = tryJsonParse<ArcTermColors>(arrayBufferToText(contents));
    if (!json || typeof json === "string") {
      return await this.writeDefaultConfiguration();
    }

    this.arcTermConfiguration.set({ ...DefaultArcTermConfiguration, ...json });
    this.changed.set(false);
  }

  async error_savePath() {
    this.Log(`error_savePath`);

    return new Promise<boolean>((r) => {
      MessageBox(
        {
          title: "ArcTerm colors",
          message: "The color file specified could not be opened. It may not exist, or the file content could not be parsed.",
          buttons: [
            {
              caption: "Okay",
              action: () => {
                r(false);
              },
              suggested: true,
            },
          ],
          sound: "arcos.dialog.error",
          image: "ErrorIcon",
        },
        +Env.get("shell_pid"),
        true
      );
    });
  }
}
