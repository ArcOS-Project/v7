import type { IAppProcess } from "./app";

export interface IThirdPartyAppProcess extends IAppProcess {
  workingDirectory: string;
  operationId: string;
  mutationLock: boolean;
  urlCache: Record<string, string>;
  elements: Record<string, Element>;
  __render__(body: HTMLDivElement): Promise<void>;
}
