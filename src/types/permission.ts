import type { PermissionString } from "$ts/permissions/store";

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
