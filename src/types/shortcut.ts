export interface ArcShortcut {
  icon: string;
  name: string;
  type: "folder" | "file" | "app";
  target: string; // U:/Music, U:/testapp/main.msl, fileManager
}

export type ShortcutStore = Record<string, ArcShortcut>;
