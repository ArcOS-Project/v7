import type { IUserDaemon } from "$interfaces/daemon";

export interface LoginAppProps {
  userDaemon?: IUserDaemon;
  type?: string;
  safeMode?: boolean;
}

export interface PersistenceInfo {
  username: string;
  profilePicture: string;
  loginWallpaper?: string;
}
