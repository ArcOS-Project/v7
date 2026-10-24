import type { BaseLeafBlock, ModularBlock, ModularPage } from ".";

export interface MuiSupplierOptions<
  TBlock extends ModularBlock = BaseLeafBlock,
  TPage extends ModularPage<TBlock> = ModularPage<TBlock>,
> {
  shaFilePath: string;
  jsonFolderPath: string;
  trackedOsBuildPath: string;
  softCopies: Record<string, TPage>;
}
