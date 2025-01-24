export interface ContextMenuItem {
  className?: string;
  disabled?: boolean;
  default?: boolean;
  caption: string;
  action: (option: ContextMenuItem) => void;
  separator?: boolean;
  icon?: string;
  image?: string;
}

export type ContextItemCallback =
  | (() => Promise<ContextMenuItem[]>)
  | undefined;
