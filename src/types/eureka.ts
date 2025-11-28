export interface UserPreferences {
  zoomLevel?: number;
}

export interface EurekaUser {
  username: string;
  passwordHash: string;
  preferences: UserPreferences;
}

export interface ExistingEurekaUser extends EurekaUser {
  _id: string;
}

export interface EurekaNote {
  folderId?: string;
  userId: string;
  name: string;
  data: string;
}

export interface ExistingEurekaNote extends EurekaNote {
  _id: string;
  updatedAt: string;
  createdAt: string;
}

export type PartialEurekaNote = Omit<Omit<Omit<ExistingEurekaNote, "data">, "folderId">, "userId">;
export type PartialEurekaNoteWithData = PartialEurekaNote & { data: string };
export type NoteSearchResults = { itemRef: number; item: PartialEurekaNote }[];

export interface EurekaFolder {
  userId: string;
  parentId?: string;
  name: string;
}

export interface ExistingEurekaFolder extends EurekaFolder {
  _id: string;
  createdAt: string;
  modifiedAt: string;
}

export interface FolderRead {
  folders: ExistingEurekaFolder[];
  notes: PartialEurekaNote[];
  totalSize: number;
  folderId: string;
  folderName: string;
  parentFolderId?: string;
}
