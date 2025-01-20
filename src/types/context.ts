export interface ContextMenuItem {
  label: string;
  icon?: string;
  action?: () => void;
  submenu?: ContextMenuItem[];
}
