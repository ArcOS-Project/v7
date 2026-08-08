import type { IUserDaemon } from "$interfaces/IUserDaemon";

export interface LoginState {
  wallpaperUrl?: string;
  profilePictureUrl?: string;
  displayName?: string;
  selectedUser?: LoginPersistenceUser;
  hideProfileImage?: boolean;
}

export interface LoginStatus {
  variant: LoginStatusVariant;
  content?: string;
}

export enum LoginStatusVariant {
  None,
  Error,
  Loading,
}

export interface LoginPersistence {
  lastUserId?: string;
  users: LoginPersistenceUser[];
}

export interface LoginPersistenceUser {
  userId: string;
  username: string;
  displayName: string;
  wallpaperUrl: string;
  profilePictureUrl: string;
  administrator: boolean;
}

export interface LoginScreenOptions {
  userDaemon?: IUserDaemon;
  type?: string;
  safeMode?: boolean;
}
