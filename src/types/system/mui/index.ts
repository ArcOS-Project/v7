export interface ModularBlock<TType extends string = string> {
  type: TType;
}

export interface EmbeddedComponentBlock<TBlock> extends ModularBlock<"EmbeddedComponent"> {
  id: string;
  props?: Record<string, any>;
  subComponents?: TBlock[];
}

export interface IconButtonBlock extends ModularBlock<"IconButton"> {
  props?: Record<string, any>;
  icon: string;
  title?: string;
  onclick: ModularOnClick;
  disabledIf?: string[];
}

export interface SeparatorBlock extends ModularBlock<"Separator"> {
  className?: string;
}

export interface IfBlock<TBlock> extends ModularBlock<"If"> {
  conditions: string[];
  ifMet: TBlock[];
  else?: TBlock[];
}

export type BaseLeafBlock<TBlock = ModularBlock> = EmbeddedComponentBlock<TBlock> | IconButtonBlock | SeparatorBlock;

export type ModularPage<TBlock, TMeta extends object = {}> = {
  pageIdentifier: string;
  page: TBlock[];
} & TMeta;

export interface ModularOnClick {
  operation: string;
  arguments: any[];
}
