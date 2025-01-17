import { GlobalDispatcher } from "$ts/dispatch";
import type { WaveKernel } from "$ts/kernel";
import { KernelModule } from "$ts/kernel/module";
import {
  type CopyItemSupplier,
  type CreateDirectorySupplier,
  type DeleteItemSupplier,
  type DirectoryReadReturn,
  type FilesystemOperation,
  type MoveItemSupplier,
  type ReadDirectorySupplier,
  type ReadFileSupplier,
  type RecursiveDirectoryReadReturn,
  type TreeSupplier,
  type WriteFileSupplier,
} from "$types/fs";
import type { FilesystemSupplier } from "./supplier";
import { getParentDirectory } from "./util";

export class Filesystem extends KernelModule {
  private suppliers: Record<string, FilesystemSupplier> = {};
  private dispatch: GlobalDispatcher;

  constructor(kernel: WaveKernel, id: string) {
    super(kernel, id);

    this.dispatch = this.kernel.getModule<GlobalDispatcher>("dispatch");
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
    const parent = getParentDirectory(path);
    const result = await this.getSupplierFor<CreateDirectorySupplier>(
      "createDirectory"
    )(path);

    this.dispatch.dispatch("fs-flush-folder", parent);

    return result;
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
    const parent = getParentDirectory(path);
    const result = await this.getSupplierFor<WriteFileSupplier>("writeFile")(
      path,
      data
    );

    this.dispatch.dispatch("fs-flush-file", path);
    this.dispatch.dispatch("fs-flush-folder", parent);

    return result;
  }

  async tree(path: string): Promise<RecursiveDirectoryReadReturn | undefined> {
    return await this.getSupplierFor<TreeSupplier>("tree")(path);
  }

  async copyItem(source: string, destination: string): Promise<boolean> {
    const destinationParent = getParentDirectory(destination);
    const result = await this.getSupplierFor<CopyItemSupplier>("copyItem")(
      source,
      destination
    );

    this.dispatch.dispatch("fs-flush-folder", destinationParent);

    return result;
  }

  async moveItem(source: string, destination: string): Promise<boolean> {
    const sourceParent = getParentDirectory(source);
    const destinationParent = getParentDirectory(destination);

    const result = await this.getSupplierFor<MoveItemSupplier>("moveItem")(
      source,
      destination
    );

    this.dispatch.dispatch("fs-flush-folder", destinationParent);
    this.dispatch.dispatch("fs-flush-folder", sourceParent);

    return result;
  }

  async deleteItem(path: string): Promise<boolean> {
    const parent = getParentDirectory(path);
    const result = await this.getSupplierFor<DeleteItemSupplier>("deleteItem")(
      path
    );

    this.dispatch.dispatch("fs-flush-folder", parent);

    return result;
  }
}
