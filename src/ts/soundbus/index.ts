import type { WaveKernel } from "$ts/kernel";
import { Environment } from "$ts/kernel/env";
import { KernelModule } from "$ts/kernel/module";
import type { SoundBusStore, SoundStore } from "$types/soundbus";
import { ArcSounds } from "./store";

export class SoundBus extends KernelModule {
  private store: SoundStore = {};
  private _bus: SoundBusStore = {};
  private env: Environment;

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);

    this.store = ArcSounds;
    this.env = kernel.getModule<Environment>("env");
  }

  public playSound(id: string, volume = 1) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");
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
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

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
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    return Object.entries(this.store);
  }

  public loadExternal(source: string, play: boolean = false) {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    const uuid = `${Math.floor(Math.random() * 1e9)}`;

    this.store[uuid] = source;

    if (play) this.playSound(uuid);
  }
}
