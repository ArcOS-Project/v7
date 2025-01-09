export interface MessageBoxData {
  title: string;
  message?: string;
  buttons: MessageBoxButton[];
  image?: string;
}

export interface MessageBoxButton {
  caption: string;
  action: () => void;
  suggested?: boolean;
}
