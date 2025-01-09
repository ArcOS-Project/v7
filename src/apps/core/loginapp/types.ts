import type { UserDaemon } from "$ts/server/user/daemon";

export interface LoginAppProps {
  userDaemon?: UserDaemon;
  type?: string;
}
