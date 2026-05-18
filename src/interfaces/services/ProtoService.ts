import type { IBaseService } from "$interfaces/service";
import type { ArcProtocol, ProtocolHandler } from "$types/proto";

export interface IProtocolServiceProcess extends IBaseService {
  lockObserver: boolean;
  observer?: MutationObserver;
  store: Record<string, ProtocolHandler>;
  start(): Promise<void>;
  parseProtoParam(): void;
  processMutations(mutations: MutationRecord[]): void;
  parseAnchor(anchor: HTMLAnchorElement): void;
  parseUrl(str: string): ArcProtocol | undefined;
  executeUrl(url: string): Promise<boolean | undefined>;
  registerHandler(command: string, handler: ProtocolHandler): boolean;
  unregisterHandler(command: string): boolean;
}
