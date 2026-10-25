import type { BaseLeafBlock, EmbeddedComponentBlock, IconButtonBlock, IfBlock, ModularBlock, ModularOnClick, ModularPage, SeparatorBlock } from ".";

interface BaseInput {
  disabledIf?: string[];
}

export interface SwitchInput extends BaseInput {
  type: "switch";
  affects: string;
}

export interface ButtonInput extends BaseInput {
  type: "Button";
  caption: string;
  action: string;
}

export interface EmbeddedInput extends BaseInput {
  type: "EmbeddedComponent";
  id: string;
  props?: Record<string, any>;
}

export type SettingsOptionInput = SwitchInput | ButtonInput | EmbeddedInput;

export interface SettingsLayoutBlock extends ModularBlock<"Layout"> {
  variant: "centered";
  children: SettingsBlock[];
}

export interface SettingsSectionBlock extends ModularBlock<"Section"> {
  title?: string;
  className?: string;
  children: SettingsBlock[];
}

export interface SettingsOptionBlock extends ModularBlock<"Option"> {
  caption: string;
  image?: string;
  chevron?: boolean;
  input?: SettingsOptionInput;
  onclick?: ModularOnClick;
  disabledIf?: string[];
}

export type SettingsBlock =
  | SeparatorBlock
  | IconButtonBlock
  | IfBlock<SettingsBlock>
  | EmbeddedComponentBlock<SettingsBlock>
  | SettingsLayoutBlock
  | SettingsSectionBlock
  | SettingsOptionBlock;

export type ModularSettingsPage = ModularPage<
  SettingsBlock,
  {
    title: string;
    icon: string;
    description?: string;
    hidden?: boolean;
    separator?: boolean;
    noSafeMode?: boolean;
  }
>;
