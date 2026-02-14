import type { IUserContext } from "$interfaces/daemon";
import type { ArcShortcut } from "$types/shortcut";

export interface IShortcutsUserContext extends IUserContext {
  handleShortcut(path: string, shortcut: ArcShortcut): Promise<any>;
  createShortcut(data: ArcShortcut, path: string, dispatch?: boolean): Promise<boolean>;
  newShortcut(location: string): Promise<void>;
}
