export interface ModularBlock<TType extends string = string> {
  type: TType;
}

export interface EmbeddedComponentBlock<TBlock> extends ModularBlock<"EmbeddedComponent"> {
  id: string;
  props?: Record<string, any>;
  subComponents?: TBlock[];
}

export interface IconButtonBlock<TCondition extends string = string> extends ModularBlock<"IconButton"> {
  props?: Record<string, any>;
  icon: string;
  title?: string;
  action: string;
  disabledIf?: TCondition[];
}

export interface SeparatorBlock extends ModularBlock<"Separator"> {
  className?: string;
}

export interface IfBlock<TBlock, TCondition extends string = string> extends ModularBlock<"If"> {
  conditions: TCondition[];
  ifMet: TBlock[];
  else?: TBlock[];
}

export type BaseLeafBlock<TBlock = ModularBlock> = EmbeddedComponentBlock<TBlock> | IconButtonBlock | SeparatorBlock;

export type ModularPage<TBlock, TMeta extends object = {}> = {
  pageIdentifier: string;
  page: TBlock[];
} & TMeta;
