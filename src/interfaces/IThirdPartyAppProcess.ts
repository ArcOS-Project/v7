import type { IAppProcess } from "./IAppProcess";

// !tpa-prop name=ThirdPartyAppProcess
export interface IThirdPartyAppProcess extends IAppProcess {
  workingDirectory: string;
  operationId: string;
  mutationLock: boolean;
  urlCache: Record<string, string>;
  elements: Record<string, Element>;
  __render__(body: HTMLDivElement): Promise<void>;
}
// !endtpa