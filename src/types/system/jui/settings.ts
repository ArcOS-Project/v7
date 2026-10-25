import type {
  JoltBlock,
  JoltEmbeddedComponentBlock,
  JoltIconButtonBlock,
  JoltIfBlock,
  JoltOnClick,
  JoltSeparatorBlock,
  JoltUiPage
} from ".";

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

export interface JoltSettingsLayoutBlock extends JoltBlock<"Layout"> {
  variant: "centered";
  children: JoltSettingsBlock[];
}

export interface JoltSettingsSectionBlock extends JoltBlock<"Section"> {
  title?: string;
  className?: string;
  children: JoltSettingsBlock[];
}

export interface JoltSettingsOptionBlock extends JoltBlock<"Option"> {
  caption: string;
  image?: string;
  chevron?: boolean;
  input?: SettingsOptionInput;
  onclick?: JoltOnClick;
  disabledIf?: string[];
}

export type JoltSettingsBlock =
  | JoltSeparatorBlock
  | JoltIconButtonBlock
  | JoltIfBlock<JoltSettingsBlock>
  | JoltEmbeddedComponentBlock<JoltSettingsBlock>
  | JoltSettingsLayoutBlock
  | JoltSettingsSectionBlock
  | JoltSettingsOptionBlock;

export type JoltSettingsPage = JoltUiPage<
  JoltSettingsBlock,
  {
    title: string;
    icon: string;
    description?: string;
    hidden?: boolean;
    separator?: boolean;
    noSafeMode?: boolean;
  }
>;
