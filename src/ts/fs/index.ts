import type { WaveKernel } from "$ts/kernel";
import { KernelModule } from "$ts/kernel/module";
import {
  type CopyItemSupplier,
  type CreateDirectorySupplier,
  type DeleteItemSupplier,
  type MoveItemSupplier,
  type ReadDirectorySupplier,
  type ReadFileSupplier,
  type TreeSupplier,
  type DirectoryReadReturn,
  type FilesystemOperation,
  type RecursiveDirectoryReadReturn,
  type WriteFileSupplier,
} from "$types/fs";
import type { FilesystemSupplier } from "./supplier";

export class Filesystem extends KernelModule {
  private suppliers: Record<string, FilesystemSupplier> = {};

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);
  }

  async _init() {}

  async loadSupplier(
    id: string,
    supplier: typeof FilesystemSupplier,
    ...args: any[]
  ) {
    if (this.suppliers[id]) return false;

    const instance = new supplier(this.kernel, ...args);

    this.suppliers[id] = instance;

    await instance._init();

    return true;
  }

  async unloadSupplier(id: string) {
    if (!this.suppliers[id]) return false;

    await this.suppliers[id]._windDown();

    delete this.suppliers[id];

    return true;
  }

  private getSuppliersFor<T = any>(operation: FilesystemOperation) {
    const result: T[] = [];

    for (const supplier of Object.values(this.suppliers)) {
      if (supplier.supplies[operation])
        result.push((supplier as any)[operation].bind(supplier));
    }

    return result;
  }

  private getMaybeSupplierFor<T = any>(operation: FilesystemOperation) {
    let result: T | undefined;

    for (const supplier of Object.values(this.suppliers)) {
      if (supplier.supplies[operation])
        result = (supplier as any)[operation].bind(supplier);
    }

    return result;
  }

  private getSupplierFor<T = any>(operation: FilesystemOperation) {
    const supplier = this.getMaybeSupplierFor<T>(operation);

    if (!supplier)
      throw new Error(`No filesystem supplier for operation "${operation}"`);

    return supplier;
  }

  async readDir(path: string): Promise<DirectoryReadReturn | undefined> {
    const suppliers = this.getSuppliersFor<ReadDirectorySupplier>("readDir");
    const result: DirectoryReadReturn = {
      files: [],
      dirs: [],
    };

    for (const supplier of suppliers) {
      const directory = await supplier(path);

      if (!directory) continue;

      result.dirs = [...result.dirs, ...directory.dirs];
      result.files = [...result.files, ...directory.files];
    }

    return result;
  }

  async createDirectory(path: string): Promise<boolean> {
    return await this.getSupplierFor<CreateDirectorySupplier>(
      "createDirectory"
    )(path);
  }

  async readFile(path: string): Promise<ArrayBuffer | undefined> {
    const suppliers = this.getSuppliersFor<ReadFileSupplier>("readFile");

    for (const supplier of suppliers) {
      const content = await supplier(path);

      if (content) return content;
    }

    return undefined;
  }

  async writeFile(path: string, data: Blob): Promise<boolean> {
    return await this.getSupplierFor<WriteFileSupplier>("writeFile")(
      path,
      data
    );
  }

  async tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined> {
    return await this.getSupplierFor<TreeSupplier>("tree")(path);
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
    return await this.getSupplierFor<CopyItemSupplier>("copyItem")(
      source,
      destination
    );
  }

  async moveItem(source: string, destination: string): Promise<boolean> {
    return await this.getSupplierFor<MoveItemSupplier>("moveItem")(
      source,
      destination
    );
  }

  async deleteItem(path: string): Promise<boolean> {
    return await this.getSupplierFor<DeleteItemSupplier>("deleteItem")(path);
  }
}
