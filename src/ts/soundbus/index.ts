import type { WaveKernel } from "$ts/kernel";
import { Environment } from "$ts/kernel/env";
import { KernelModule } from "$ts/kernel/module";
import type { SoundBusStore, SoundStore } from "$types/soundbus";
import { ArcSounds } from "./store";

export class SoundBus extends KernelModule {
  private store: SoundStore = {};
  private _bus: SoundBusStore = {};
  private env: Environment;

  //#region LIFECYCLE

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);

    this.store = ArcSounds;
    this.env = kernel.getModule<Environment>("env");
  }

  //#endregion

  public playSound(id: string, volume = 1) {
    this.isKmod();
    if (this.env.get("safemode")) return;
    if (!this.store[id]) return false;

    this.Log(`Playing sound ${id} from store`);

    const element = document.createElement("audio");

    element.src = this.store[id];
    element.volume = volume;
    element.autoplay = true;

    if (!this._bus[id]) this._bus[id] = [];

    this._bus[id].push(element);

    element.onended = () =>
      setTimeout(() => {
        delete this._bus[id];
      }, 1000);

    return true;
  }

  public stopSound(id: string) {
    this.isKmod();

    this.Log(`Stopping ${id}`);

    if (!this._bus[id]) return false;

    const bus = this._bus[id];

    for (const player of bus) {
      player.src = null as any;
      player.currentTime = -1;
      player.pause();
    }

    return true;
  }

  public getStore(): [string, string][] {
    this.isKmod();

    return Object.entries(this.store);
  }

  public loadExternal(source: string, play: boolean = false) {
    this.isKmod();

    const uuid = `${Math.floor(Math.random() * 1e9)}`;

    this.store[uuid] = source;

    if (play) this.playSound(uuid);
  }
}
