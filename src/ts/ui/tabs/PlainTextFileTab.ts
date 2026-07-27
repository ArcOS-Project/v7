import type { LoadSaveDialogData } from "$apps/user/filemanager/types";
import type { IAppProcess } from "$interfaces/IAppProcess";
import type { ICommandResult } from "$interfaces/ICommandResult";
import type { ITabHandler } from "$interfaces/ITabHandler";
import type { IAppPreInstallRuntime } from "$interfaces/runtimes/IAppPreinstallRuntime";
import { Daemon, Fs } from "$ts/env";
import { CommandResult } from "$ts/result";
import { UserPaths } from "$ts/user/store";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { getItemNameFromPath } from "$ts/util/fs";
import { Store } from "$ts/writable";
import { BaseTab } from "./base";

export class PlainTextFileTab<Proc extends IAppProcess = IAppProcess> extends BaseTab<Proc> {
  protected override allowSaveWhenNotModified: boolean = true;
  public fileContent = Store<string>();
  public notFound = Store<boolean>(true);
  public filePath = Store<string | undefined>();
  public loadSaveData: Omit<LoadSaveDialogData, "returnId"> = {
    title: "Choose where you want to save this file",
    icon: "SaveIcon",
    isSave: true,
    startDir: UserPaths.Documents,
  };

  constructor(parent: ITabHandler<Proc>, identifier: string, filePath?: string) {
    super(parent, identifier);

    if (filePath) this.filePath.set(filePath);
  }

  public override async onLoad(): Promise<ICommandResult> {
    await this.readFromDisk();

    let initialLoad = false;

    this.fileContent.subscribe(() => {
      if (!initialLoad) return (initialLoad = true);
      this.modified.set(true);
    });

    return CommandResult.Ok();
  }

  public override async onSave(): Promise<ICommandResult> {
    if (!this.filePath()) return await this.saveAs();

    await Fs.writeFile(this.filePath()!, textToBlob(this.fileContent()));

    return CommandResult.Ok();
  }

  public async saveAs(): Promise<ICommandResult> {
    const [path] = await Daemon.files!.LoadSaveDialog({
      ...this.loadSaveData,
      isSave: true,
    });

    if (!path) return CommandResult.Error("Operation was aborted by the user");

    this.filePath.set(path);

    return await this.onSave();
  }

  private async readFromDisk() {
    const filePath = this.filePath();
    if (!filePath) return;

    this.loading.set(true);
    this.title.set(getItemNameFromPath(filePath));

    const content = arrayBufferToText(await Fs.readFile(filePath));

    this.loading.set(false);

    if (!content) {
      this.notFound.set(true);
      return;
    }

    this.fileContent.set(content);
    this.modified.set(false);
  }
}
