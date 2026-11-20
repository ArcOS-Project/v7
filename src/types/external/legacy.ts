// !tpa
export interface LegacyConnectionInfo {
  url: string;
  authCode?: string;
  username: string;
  password: string;
}

export interface LegacyUserDirectory {
  name: string;
  scopedPath: string;
  files: LegacyPartialArcFile[];
  directories: LegacyPartialUserDir[];
}

export interface LegacyPartialUserDir {
  name: string;
  scopedPath: string;
}

export interface LegacyPartialArcFile {
  size?: number;
  mime: string;
  filename: string;
  scopedPath: string;
  dateCreated: number;
  dateModified: number;
}

export interface LegacyFilesystemQuota {
  username: string;
  max: number;
  free: number;
  used: number;
}
// !endtpa
