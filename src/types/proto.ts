import type { IUserDaemon } from "$interfaces/daemon";
import type { MaybePromise } from "./common";

export interface ArcProtocol {
  subCommand: string;
  command: string;
  payload: Record<string, any>;
  path: string;
}

export interface SpawnAppProtocol extends ArcProtocol {
  subCommand: "";
  command: "spawn_app";
  payload: {
    id: string;
    args: any[];
  };
  path: "/";
}

export interface ProtocolHandler {
  name: string;
  className?: string;
  info: (payload: Record<string, any>, daemon: IUserDaemon) => { icon: string; caption: string; title?: string } | undefined;
  action: (payload: Record<string, any>, daemon: IUserDaemon, proto: ArcProtocol) => MaybePromise<boolean>;
}
