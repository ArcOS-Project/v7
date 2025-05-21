import type { ArcPackage } from "./package";

export interface ProjectMetadata {
  metadata: ArcPackage;
  devPort?: number;
  repository?: string;
  outFile: string;
  payloadDir: string;
  buildHash?: string;
  noHotRelaunch?: boolean;
}

export type DevEnvActivationResult =
  | "success"
  | "ping_failed"
  | "port_mismatch"
  | "build_mismatch"
  | "already_connected"
  | "websock_failed"
  | "drivemnt_failed";
