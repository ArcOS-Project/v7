import type { IBaseService } from "$interfaces/IServiceHost";
import type { DevEnvActivationResult, ProjectMetadata } from "$types/devenv";

export interface IDevelopmentEnvironment extends IBaseService {
  connected: boolean;
  meta?: ProjectMetadata;
  connect(port: number): Promise<DevEnvActivationResult>;
  disconnect(): Promise<undefined>;
  getProjectMeta(): Promise<ProjectMetadata | undefined>;
  mountDevDrive(): Promise<boolean | undefined>;
  restartTpa(): Promise<undefined>;
  killTpa(): Promise<undefined>;
  refreshCSS(filename: string): Promise<void>;
}