import type { IConfigurator } from "$interfaces/config";
import type { IProcess } from "$interfaces/process";
import { LogLevel } from "$types/logging";
import type { ReadableStore } from "$types/writable";
import { Fs } from "./env";
import { Log } from "./logging";
import { arrayBufferToText, textToBlob } from "./util/convert";
import { tryJsonParse } from "./util/json";

export class ConfigurationBuilder<T = object> {
  #store?: ReadableStore<T>;
  #savePath?: string;
  #defaults?: T;
  #process?: IProcess;
  #cooldown?: number;
  #built = false;

  ReadsFrom(store: ReadableStore<T>) {
    if (this.#store) throw new Error("ConfigurationBuilder store can only be initialized once");
    if (this.#built) throw new Error("ConfigurationBuilder has to be fully configured before building");

    this.#store = store;
    return this;
  }

  WritesTo(path: string) {
    if (this.#savePath) throw new Error("ConfigurationBuilder savePath can only be set once");
    if (this.#built) throw new Error("ConfigurationBuilder has to be fully configured before building");

    this.#savePath = path;
    return this;
  }

  WithDefaults(defaults: T) {
    if (this.#defaults) throw new Error("ConfigurationBuilder defaults can only be set once");
    if (this.#built) throw new Error("ConfigurationBuilder has to be fully configured before building");

    this.#defaults = defaults;
    return this;
  }

  ForProcess(process: IProcess) {
    if (this.#process) throw new Error("ConfigurationBuilder process can only be set once");
    if (this.#built) throw new Error("ConfigurationBuilder has to be fully configured before building");

    this.#process = process;
    return this;
  }

  WithCooldown(cooldown: number) {
    if (this.#cooldown !== undefined) throw new Error("ConfigurationBuilder: cooldown can only be set once");
    if (this.#built) throw new Error("ConfigurationBuilder has to be fully configured before building");

    this.#cooldown = cooldown;
    return this;
  }

  Build(): IConfigurator<T> {
    if (this.#built) throw new Error("ConfigurationBuilder can only be built once");

    const store = this.#store;
    const savePath = this.#savePath;
    const defaults = this.#defaults;
    const process = this.#process;
    const cooldown = this.#cooldown;
    let initialRun = true;

    if (!savePath) throw new Error("savePath is required. Use WritesTo to set");
    if (!store) throw new Error("store is required. Use ReadsFrom to set");

    this.Log(`Building new configurator for ${savePath} (process ${process?.name ?? "<none>"})`);

    const Log = (m: string, level = LogLevel.info) => this.Log(`Configurator: ${m}`, level);

    class Configurator implements IConfigurator<T> {
      timeout?: NodeJS.Timeout;

      async readConfiguration(): Promise<T> {
        if (process?._disposed) return defaults!;

        Log("Reading configuration");

        const content = await Fs.readFile(savePath!);
        if (!content) return await this.writeConfiguration(defaults);

        try {
          const obj = tryJsonParse<T>(arrayBufferToText(content));

          return obj;
        } catch {
          return await this.writeConfiguration(defaults);
        }
      }

      async writeConfiguration(configuration: T | undefined = defaults): Promise<T> {
        if (process?._disposed) return configuration!;
        if (!configuration) throw new Error("Need a configuration to write");

        if (initialRun) {
          initialRun = false;
          return configuration;
        }

        Log("Writing configuration");

        await Fs.writeFile(savePath!, textToBlob(JSON.stringify(configuration, null, 2)));

        return configuration;
      }

      async initialize() {
        if (process?._disposed) return;

        Log("Initializing");

        store!.set((await this.readConfiguration())!);
        store!.subscribe((v) => {
          clearTimeout(this.timeout);

          this.timeout = setTimeout(() => {
            this.writeConfiguration(v);
          }, cooldown);
        });
      }
    }

    const configurator = new Configurator();

    return configurator;
  }

  private Log(message: string, level = LogLevel.info) {
    Log(`ConfigurationBuilder::${this.#process?.pid ?? "NO_PROC"}`, message, level);
  }
}
