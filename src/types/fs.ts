export interface FileEntry {
  name: string;
  size: number;
  dateCreated: Date;
  dateModified: Date;
}

export interface FolderEntry {
  name: string;
  dateCreated: Date;
  dateModified: Date;
}

export interface DirectoryReadReturn {
  dirs: FolderEntry[];
  files: FileEntry[];
}

export interface RecursiveDirectoryReadReturn {
  dirs: (FolderEntry & { children: RecursiveDirectoryReadReturn })[];
  files: FileEntry[];
}

export interface UserQuota {
  used: number;
  max: number;
  free: number;
  percentage: number;
}
