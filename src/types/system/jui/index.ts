export interface JoltBlock<TType extends string = string> {
  type: TType;
}

export interface JoltEmbeddedComponentBlock<TBlock> extends JoltBlock<"EmbeddedComponent"> {
  id: string;
  props?: Record<string, any>;
  subComponents?: TBlock[];
}

export interface JoltIconButtonBlock extends JoltBlock<"IconButton"> {
  props?: Record<string, any>;
  icon: string;
  title?: string;
  onclick: JoltOnClick;
  disabledIf?: string[];
}

export interface JoltSeparatorBlock extends JoltBlock<"Separator"> {
  className?: string;
}

export interface JoltIfBlock<TBlock> extends JoltBlock<"If"> {
  conditions: string[];
  ifMet: TBlock[];
  else?: TBlock[];
}

export type JoltBaseLeafBlock = JoltIconButtonBlock | JoltSeparatorBlock;

export type JoltUiPage<TBlock, TMeta extends object = {}> = {
  pageIdentifier: string;
  page: TBlock[];
} & TMeta;

export interface JoltOnClick {
  operation: string;
  arguments: any[];
}
