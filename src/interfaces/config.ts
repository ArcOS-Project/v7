export interface IConfigurator<T = object> {
  readConfiguration(): Promise<T>;
  writeConfiguration(configuration?: T): Promise<T>;
  initialize(): Promise<void>;
}
