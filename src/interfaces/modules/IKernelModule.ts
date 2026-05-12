export interface IKernelModule {
  id: string;
  _init(): Promise<void>;
  __init(): Promise<void>;
  isKmod(): void;
}
