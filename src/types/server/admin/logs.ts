export interface ServerLogItem {
  message: string;
  origin: string;
  timestamp: number;
  subs: string[];
}

export enum ServerLogLevel {
  info,
  warning,
  error,
  critical,
}
