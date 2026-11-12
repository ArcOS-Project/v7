import type { IWaveKernel } from "$interfaces/IWaveKernel";
import type { ISoundbus } from "$interfaces/modules/ISoundbus";
import { Env, Kernel } from "$ts/env";
import { KernelModule } from "$ts/kernel/module";
import type { SoundBusStore, SoundStore } from "$types/system/soundbus";
import { ArcSounds } from "./store";

export class SoundBus extends KernelModule implements ISoundbus {
  private store: SoundStore = {};
  private _bus: SoundBusStore = {};

  //#region LIFECYCLE

  constructor(kernel: IWaveKernel, id: string) {
    super(kernel, id);

    this.store = ArcSounds;
  }

  //#endregion

  public playSound(id: string, volume = 1) {
    this.isKmod();
    Kernel.LogOperation("kmod", "soundbus", "playSound");
    if (Env.get("safemode")) return;
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
    Kernel.LogOperation("kmod", "soundbus", "stopSound");

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
    Kernel.LogOperation("kmod", "soundbus", "getStore");

    return Object.entries(this.store);
  }

  public loadExternal(source: string, play: boolean = false) {
    this.isKmod();
    Kernel.LogOperation("kmod", "soundbus", "loadExernal");

    const uuid = `${Math.floor(Math.random() * 1e9)}`;

    this.store[uuid] = source;

    if (play) this.playSound(uuid);
  }
}
