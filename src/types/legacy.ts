export interface LegacyConnectionInfo {
  url: string;
  authCode?: string;
  username: string;
  password: string;
}

export interface UserDirectory {
  name: string;
  scopedPath: string;
  files: PartialArcFile[];
  directories: PartialUserDir[];
}

export interface PartialUserDir {
  name: string;
  scopedPath: string;
}

export interface PartialArcFile {
  size?: number;
  mime: string;
  filename: string;
  scopedPath: string;
  dateCreated: number;
  dateModified: number;
}

export interface FSQuota {
  username: string;
  max: number;
  free: number;
  used: number;
}
