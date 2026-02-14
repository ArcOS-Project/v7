import type { ArcPackage, InstallStatus, InstallStatusMode, InstallStatusType } from "$types/package";
import type { ReadableStore } from "$types/writable";
import type JSZip from "jszip";
import type { Constructs } from "./common";
import type { IDistributionServiceProcess } from "./service";

export interface IInstallerProcessBase {
  parent: IDistributionServiceProcess;
  failReason: ReadableStore<string>;
  installing: ReadableStore<boolean>;
  TOTAL_COUNT: ReadableStore<number>;
  completed: ReadableStore<boolean>;
  COUNT: ReadableStore<number>;
  focused: ReadableStore<string>;
  status: ReadableStore<InstallStatus>;
  start(): Promise<void>;
  initialize(): Promise<void>;
  stop(): Promise<void>;
  onStop(): Promise<void>;
  logStatus(content: string, type?: InstallStatusType, status?: InstallStatusMode): void;
  setCurrentStatus(status: InstallStatusMode): Promise<void>;
  setCurrentContent(content: string): Promise<void>;
  fail(reason: string): void;
  __go(): Promise<boolean>;
  go(): Promise<boolean>;
  mkdir(path: string): Promise<boolean>;
  writeFile(path: string, content: ArrayBuffer): Promise<boolean>;
  createInstallLocation(): Promise<boolean>;
  getFiles(): Promise<{
    files: {
      [k: string]: JSZip.JSZipObject;
    };
    sortedPaths: string[];
  }>;
}

export interface IInstallerProcessBaseConstructor extends Constructs<IInstallerProcessBase> {
  validatePackage(metadata: ArcPackage, zip: JSZip): Promise<boolean>;
  uninstallPackage(metadata: ArcPackage, deleteFiles?: boolean, onStage?: (stage: string) => void): Promise<void>;
}
