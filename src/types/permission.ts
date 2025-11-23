export enum PermissionGrantResult {
  InvalidPermission,
  AlreadyGranted,
  Ok
}

export enum PermissionRevokeResult {
  InvalidPermission,
  NotGranted,
  Ok
}

export type PermissionStorage = {
  allowed: Record<string, string[]>;
  denied: Record<string, string[]>;
  registration: Record<string, string>;
}