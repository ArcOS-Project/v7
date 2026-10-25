import type { ReadableStore } from "$types/shared/writable";
import type { JoltBaseLeafBlock, JoltBlock, JoltUiPage } from "$types/system/jui";
import type { ICommandResult } from "./ICommandResult";
import type { IConfigurator } from "./IConfigurator";

export interface IJuiSupplier<
  TBlock extends JoltBlock = JoltBaseLeafBlock,
  TPage extends JoltUiPage<TBlock> = JoltUiPage<TBlock>,
> {
  ShaConfiguration: ReadableStore<Record<string, string>>;
  ShaConfigurator?: IConfigurator<Record<string, string>>;
  Pages: Map<string, TPage>;
  Loading: ReadableStore<boolean>;
  Initialize(): Promise<ICommandResult>;
  CheckUpdatedArcBuild(): Promise<ICommandResult>;
  UpdateOnChangedHash(): Promise<ICommandResult>;
  UpdateHardCopies(): Promise<ICommandResult>;
  CalculateHashes(): Promise<Record<string, string>>;
}
