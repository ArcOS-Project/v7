import { ArcOSVersion } from "$ts/env";
import type { WaveKernel } from ".";
import { KernelModule } from "./module";

export class Environment extends KernelModule {
  private store: Map<string, any> = new Map([]);
  private readOnlyValues: string[] = [];

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);
  }

  async _init() {
    this.reset();

    this.setMultiple([
      ["arcos_version", ArcOSVersion],
      ["arcos_mode", this.kernel.ARCOS_MODE],
      ["arcos_build", this.kernel.ARCOS_BUILD],
    ]);
  }

  set(key: string, value: any): boolean {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    key &&= key.toUpperCase();

    if (this.readOnlyValues.includes(key)) return false;

    this.Log(`${key} -> ${value}`);

    try {
      const stringified = JSON.stringify(value, null, 2);

      if (!stringified) return false;

      this.store.set(key, stringified);

      return true;
    } catch {
      return false;
    }
  }

  setMultiple(entries: [string, any][]): void {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    for (const [key, value] of entries) {
      this.set(key, value);
    }
  }

  delete(key: string): boolean {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    key &&= key.toUpperCase();

    if (this.readOnlyValues.includes(key)) return false;

    this.store.delete(key);

    return true;
  }

  get(key: string): any {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    return this.store.get(key.toUpperCase());
  }

  getMultiple(keys: string[]): any[] {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    let result = [];

    for (const key of keys) {
      result.push(this.get(key) ?? null);
    }

    return result;
  }

  setReadonly(key: string): void {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    key &&= key.toUpperCase();

    const index = this.readOnlyValues.indexOf(key);

    if (index) return;

    this.readOnlyValues.push(key);
  }

  setWritable(key: string): void {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    key &&= key.toUpperCase();

    const index = this.readOnlyValues.indexOf(key);

    if (!index) return;

    this.readOnlyValues.splice(index, 1);
  }

  reset(): void {
    if (!this.IS_KMOD) throw new Error("Not a kernel module");

    this.Log("Resetting!");
    this.store = new Map([]);
  }
}
