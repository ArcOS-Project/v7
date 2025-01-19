export interface Notification {
  title: string;
  message: string;
  icon?: string;
  image?: string;
  timeout?: number;
  buttons?: ErrorButton[];
  timestamp?: number;
  deleted?: boolean;
}

export interface ErrorButton {
  caption: string;
  action: () => void;
  suggested?: boolean;
}
