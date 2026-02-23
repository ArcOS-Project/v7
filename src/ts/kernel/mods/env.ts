import type { IWaveKernel } from "$interfaces/kernel";
import type { IEnvironment } from "$interfaces/modules/env";
import { KernelModule } from "../module";

export class Environment extends KernelModule implements IEnvironment {
  private store: Map<string, any> = new Map([]);
  private readOnlyValues: string[] = [];

  //#region LIFECYCLE

  constructor(kernel: IWaveKernel, id: string) {
    super(kernel, id);
  }

  async _init() {
    this.reset();
  }

  //#endregion

  set(key: string, value: any): boolean {
    this.isKmod();

    key &&= key.toUpperCase();

    if (this.readOnlyValues.includes(key)) return false;

    this.Log(`${key} -> ${value}`);

    try {
      const stringified = typeof value === "object" ? JSON.stringify(value, null, 2) : value;

      if (stringified === null || stringified === undefined) return false;

      this.store.set(key, stringified);

      return true;
    } catch {
      return false;
    }
  }

  setMultiple(entries: [string, any][]): void {
    this.isKmod();

    for (const [key, value] of entries) {
      this.set(key, value);
    }
  }

  delete(key: string): boolean {
    this.isKmod();

    key &&= key.toUpperCase();

    if (this.readOnlyValues.includes(key)) return false;

    this.store.delete(key);

    return true;
  }

  get(key: string): any {
    this.isKmod();

    return this.store.get(key.toUpperCase());
  }

  getMultiple(keys: string[]): any[] {
    this.isKmod();

    let result = [];

    for (const key of keys) {
      result.push(this.get(key) ?? null);
    }

    return result;
  }

  setReadonly(key: string): void {
    this.isKmod();

    key &&= key.toUpperCase();

    const index = this.readOnlyValues.indexOf(key);

    if (index) return;

    this.readOnlyValues.push(key);
  }

  setWritable(key: string): void {
    this.isKmod();

    key &&= key.toUpperCase();

    const index = this.readOnlyValues.indexOf(key);

    if (!index) return;

    this.readOnlyValues.splice(index, 1);
  }

  reset(): void {
    this.isKmod();

    this.Log("Resetting!");
    this.store = new Map([]);
  }

  getAll(): Record<string, string> {
    return Object.fromEntries([...this.store]);
  }
}
