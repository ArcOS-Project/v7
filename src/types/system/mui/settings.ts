import type { BaseLeafBlock, IfBlock, ModularBlock, ModularPage } from ".";

interface BaseInput {
  disabledIf?: SettingsCondition[];
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

export type SettingsCondition = "SAFE_MODE";

export interface SettingsLayoutBlock extends ModularBlock<"Layout"> {
  variant: "centered";
  children: SettingsBlock[];
}

export interface SettingsSectionBlock extends ModularBlock<"Section"> {
  title?: string;
  children: SettingsBlock[];
}

export interface SettingsOptionBlock extends ModularBlock<"Option"> {
  caption: string;
  image?: string;
  chevron?: boolean;
  input?: SettingsOptionInput;
}

export type SettingsBlock =
  | BaseLeafBlock
  | IfBlock<SettingsBlock, SettingsCondition>
  | SettingsLayoutBlock
  | SettingsSectionBlock
  | SettingsOptionBlock;

export type SettingsPage = ModularPage<
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
