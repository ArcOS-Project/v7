export interface ContextMenuItem {
  className?: string;
  default?: boolean;
  caption: string;
  action: (option: ContextMenuItem) => void;
  checked?: () => boolean;
  disabled?: () => boolean;
  separator?: boolean;
  icon?: string;
  image?: string;
}

export type ContextItemCallback =
  | (() => Promise<ContextMenuItem[]>)
  | undefined;
