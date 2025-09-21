export interface GoogleDriveFile {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
  modifiedTime: string;
}

export interface GoogleStoredCredentials {
  access_token: string;
  refresh_token?: string;
  expires_at: number;
  scope: string;
  id_token?: string;
}
