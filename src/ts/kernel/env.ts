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
    key &&= key.toUpperCase();

    if (this.readOnlyValues.includes(key)) return false;

    this.Log(`${key} -> ${value}`);
    this.store.set(key, value);

    return true;
  }

  setMultiple(entries: [string, any][]): void {
    for (const [key, value] of entries) {
      this.set(key, value);
    }
  }

  delete(key: string): boolean {
    key &&= key.toUpperCase();

    if (this.readOnlyValues.includes(key)) return false;

    this.store.delete(key);

    return true;
  }

  get(key: string): any {
    return this.store.get(key.toUpperCase());
  }

  getMultiple(keys: string[]): any[] {
    let result = [];

    for (const key of keys) {
      result.push(this.get(key) ?? null);
    }

    return result;
  }

  setReadonly(key: string): void {
    key &&= key.toUpperCase();

    const index = this.readOnlyValues.indexOf(key);

    if (index) return;

    this.readOnlyValues.push(key);
  }

  setWritable(key: string): void {
    key &&= key.toUpperCase();

    const index = this.readOnlyValues.indexOf(key);

    if (!index) return;

    this.readOnlyValues.splice(index, 1);
  }

  reset(): void {
    this.Log("Resetting!");
    this.store = new Map([]);
  }
}
