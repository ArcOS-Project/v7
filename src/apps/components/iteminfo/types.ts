// !tpa
/**
 * An interface that specifies information about a filesystem item.
 */
export interface ItemInfo {
  /**
   * Basic item metadata
   */
  meta: {
    /**
     * The type of the item (file, folder)
     */
    sort: "file" | "folder";
    /**
     * The file's mimetype
     */
    mimetype?: string;
    /**
     * The size of the file
     */
    size?: number;
    /**
     * When the file was created
     */
    created: string;
    /**
     * When the file was modified
     */
    modified: string;
  };
  /**
   * Where the file is stored
   */
  location: {
    /**
     * The file's full path
     */
    fullPath: string;
    /**
     * The file's extension
     */
    extension?: string;
    /**
     * The parent folder of the file
     */
    parent?: string;
    /**
     * The drive letter (U:) or drive UUID (A1B2-C3D4-E5F6-A7B8C9:) of the drive on which the item is stored
     */
    drive?: string;
    /**
     * The shorthand (UFS, SDFS) of the filesystem of the drive on which the item is stored
     */
    driveFs?: string;
  };
  /**
   * Is it a folder?
   */
  isFolder: boolean;
  /**
   * Is it a shortcut? (.arclnk)
   */
  isShortcut: boolean;
  /**
   * The name of the item
   */
  name: string;
}
// !endtpa
