export interface LogItem {
  source: string;
  message: string;
  timestamp: number;
  level: LogLevel;
}

export enum LogLevel {
  info,
  warning,
  error,
  critical,
}

export const LogLevelCaptions: Record<LogLevel, string> = {
  [LogLevel.info]: "Information",
  [LogLevel.warning]: "Warning",
  [LogLevel.error]: "Error",
  [LogLevel.critical]: "Critical",
};

export const ShortLogLevelCaptions: Record<LogLevel, string> = {
  [LogLevel.info]: "INFO",
  [LogLevel.warning]: "WARN",
  [LogLevel.error]: "ERRR",
  [LogLevel.critical]: "CRIT",
};
