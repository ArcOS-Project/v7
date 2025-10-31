import type { UserDaemon } from "$ts/server/user/daemon";

export interface LoginAppProps {
  userDaemon?: UserDaemon;
  type?: string;
  safeMode?: boolean;
}

export interface PersistenceInfo {
  username: string;
  profilePicture: string;
  loginWallpaper?: string;
  serverUrl: string;
}
