import type { JoltBaseLeafBlock, JoltBlock, JoltUiPage } from ".";

export interface JuiSupplierOptions<
  TBlock extends JoltBlock = any,
  TPage extends JoltUiPage<TBlock> = any,
> {
  shaFilePath: string;
  jsonFolderPath: string;
  trackedOsBuildPath: string;
  softCopies: Record<string, TPage>;
}
