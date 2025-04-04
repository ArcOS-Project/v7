export interface ItemInfo {
  meta: {
    sort: "file" | "folder";
    mimetype?: string;
    size?: number;
    created: string;
    modified: string;
  };
  location: {
    fullPath: string;
    extension?: string;
    parent?: string;
    drive?: string;
    driveFs?: string;
  };
  isFolder: boolean;
  isShortcut: boolean;
  name: string;
}
