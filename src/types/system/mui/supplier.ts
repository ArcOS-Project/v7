import type { BaseLeafBlock, ModularBlock, ModularPage } from ".";

export interface MuiSupplierOptions<
  TBlock extends ModularBlock = any,
  TPage extends ModularPage<TBlock> = any,
> {
  shaFilePath: string;
  jsonFolderPath: string;
  trackedOsBuildPath: string;
  softCopies: Record<string, TPage>;
}
