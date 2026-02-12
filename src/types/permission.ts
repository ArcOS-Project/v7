import type { IProcess } from "$interfaces/process";
import type { FilesystemDrive } from "$ts/kernel/mods/fs/drives/drive";
import type { PermissionedFilesystemInteractor } from "$ts/permissions/filesystem";
import type { PermissionError, PermissionString } from "$ts/permissions/store";
import type {
  DirectoryReadReturn,
  ExtendedStat,
  FilesystemProgressCallback,
  RecursiveDirectoryReadReturn,
  UploadReturn,
} from "./fs";

export enum PermissionGrantResult {
  InvalidPermission,
  AlreadyGranted,
  Ok,
}

export enum PermissionRevokeResult {
  InvalidPermission,
  NotGranted,
  Ok,
}

export type PermissionStorage = {
  allowed: Record<string, string[]>;
  denied: Record<string, string[]>;
  registration: Record<string, string>;
};

export interface PermissionInfo {
  friendlyName: string;
  friendlyDescription: string;
  icon: string;
  permission: PermissionString;
  canDo: PermissionCanDo[];
  cantDo: PermissionCanDo[];
}

export interface PermissionCanDo {
  what: string;
  icon: string;
  critical?: boolean;
  extraWarning?: string;
}

export type SudoPermissions = Record<string, number>; // R<id,exp>
