export interface ArcShortcut {
  icon: string;
  name: string;
  type: "folder" | "file" | "app" | "new";
  target: string; // U:/Music, U:/testapp/main.tpa, fileManager
}

export type ShortcutStore = Record<string, ArcShortcut>;
