export interface TypedProcess {
  start?: () => any;
  stop?: () => any;
  killSelf: () => Promise<boolean>;
  pid: number;
  parentPid?: number;
  name: string;
  _disposed: boolean;
  _criticalProcess: boolean;
}
