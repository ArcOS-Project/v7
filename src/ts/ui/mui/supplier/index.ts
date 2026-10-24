import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IConfigurator } from "$interfaces/IConfigurator";
import type { IProcess } from "$interfaces/IProcess";
import { ConfigurationBuilder } from "$ts/config";
import { Fs } from "$ts/env";
import { ArcBuild } from "$ts/metadata/build";
import { CommandResult } from "$ts/result";
import { sha256 } from "$ts/util";
import { arrayBufferToText, textToBlob } from "$ts/util/convert";
import { join } from "$ts/util/fs";
import { tryJsonStringify } from "$ts/util/json";
import { Store } from "$ts/writable";
import type { ModularPage } from "$types/system/mui";
import type { MuiSupplierOptions } from "$types/system/mui/supplier";

export class MuiSupplier<TProcess extends IProcess = IProcess> {
  // R<filename, sha256>
  ShaConfiguration = Store<Record<string, string>>({});
  ShaConfigurator?: IConfigurator<Record<string, string>>;
  private options: MuiSupplierOptions;
  private process: TProcess;

  constructor(process: TProcess, options: MuiSupplierOptions) {
    this.options = options;
    this.process = process;
  }

  async Initialize(): Promise<ICommandResult> {
    try {
      await Fs.createDirectory(this.options.jsonFolderPath);
      const defaults = await this.CalculateHashes();

      this.ShaConfigurator = new ConfigurationBuilder<Record<string, string>>()
        .ForProcess(this.process)
        .ReadsFrom(this.ShaConfiguration)
        .WritesTo(this.options.shaFilePath)
        .WithDefaults(defaults)
        .WithCooldown(100)
        .Build();

      return await this.CheckUpdatedArcBuild();
    } catch (e) {
      return CommandResult.Error(`${e}`);
    }
  }

  async CheckUpdatedArcBuild(): Promise<ICommandResult> {
    const fileContent = await Fs.readFile(this.options.trackedOsBuildPath);
    if (!fileContent) {
      return await this.UpdateOnChangedHash();
    }

    const trackedHash = arrayBufferToText(fileContent);
    if (trackedHash === ArcBuild()) return CommandResult.Ok();

    return await this.UpdateOnChangedHash();
  }

  async UpdateOnChangedHash(): Promise<ICommandResult> {
    const updateResult = await this.UpdateHardCopies();
    if (!updateResult.success) return updateResult;

    try {
      await Fs.writeFile(this.options.trackedOsBuildPath, textToBlob(ArcBuild()));
      return CommandResult.Ok();
    } catch (e) {
      return CommandResult.Error(`${e}`);
    }
  }

  async UpdateHardCopies(): Promise<ICommandResult> {
    try {
      const actualHashes = await this.CalculateHashes();
      const trackedHashes = this.ShaConfiguration();

      for (const identifier in this.options.softCopies) {
        const filename = `${identifier}.json`;
        let writeToFs = false;

        if (!actualHashes[filename] || !trackedHashes[filename]) writeToFs = true;
        if (actualHashes[filename] !== trackedHashes[filename]) {
          // User modified the file since last update
          writeToFs = false;
          // TODO: do something with the hard copy, then place the new one
        }

        if (writeToFs) {
          const fileContent = MuiSupplier.StringifyMuiPage(this.options.softCopies[identifier]);
          const hash = await sha256(fileContent);

          await Fs.writeFile(join(this.options.jsonFolderPath, filename), textToBlob(fileContent));

          this.ShaConfiguration.update((v) => {
            v[filename] = hash;
            return v;
          });
        }
      }

      return CommandResult.Ok();
    } catch (e) {
      return CommandResult.Error(`${e}`);
    }
  }

  async CalculateHashes() {
    const bulk = await Fs.bulk(this.options.jsonFolderPath, ".json");
    const result: Record<string, string> = {};

    const promises = Object.keys(bulk).map(
      (filename) =>
        new Promise<void>(async (resolve) => {
          result[filename] = await sha256(MuiSupplier.StringifyMuiPage(bulk[filename]));
          resolve();
        })
    );

    await Promise.all(promises);
    return result;
  }

  public static StringifyMuiPage(page: ModularPage<any>) {
    return tryJsonStringify(page, 4);
  }
}
