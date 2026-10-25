import type { ReadableStore } from "$types/shared/writable";
import type { BaseLeafBlock, ModularBlock, ModularPage } from "$types/system/mui";
import type { ICommandResult } from "./ICommandResult";
import type { IConfigurator } from "./IConfigurator";

export interface IMuiSupplier<
  TBlock extends ModularBlock = BaseLeafBlock,
  TPage extends ModularPage<TBlock> = ModularPage<TBlock>,
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
