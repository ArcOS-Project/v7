export interface PageButton {
  to?: number;
  action?: () => Promise<void>;
  caption: string;
  suggested?: boolean;
  disabled?: () => boolean | Promise<boolean>;
}

export interface PageButtonPage {
  left?: PageButton;
  previous: PageButton;
  next: PageButton;
}

export type PageButtons = PageButtonPage[];
