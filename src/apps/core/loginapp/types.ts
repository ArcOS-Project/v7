import type { IUserDaemon } from "$interfaces/IUserDaemon";
import type { MessageBoxButton } from "$types/shared/messagebox";

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

export interface LoginQuestionPrompt {
  message: string;
  buttons: MessageBoxButton[];
}
