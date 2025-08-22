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

export const DevEnvActivationResultCaptions: Record<DevEnvActivationResult, string> = {
  success: "Connected successfully",
  ping_failed: "Tried to ping the ArcDev server, but got no response",
  port_mismatch: "Reported port doesn't match actual port",
  build_mismatch: "Project build differs from ArcOS build",
  already_connected: "Service is already connected",
  websock_failed: "Connection to websocket failed",
  drivemnt_failed: "ArcDev drive failed to mount",
};
