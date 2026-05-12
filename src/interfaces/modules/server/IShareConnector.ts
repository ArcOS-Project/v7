import type { ICommandResult } from "$interfaces/ICommandResult";
import type {
  DirectoryReadReturn,
  ExtendedStat,
  FilesystemProgressCallback,
  RecursiveDirectoryReadReturn,
  UserQuota,
} from "$types/fs";
import type { SharedDriveType } from "$types/shares";
import type { IServerConnector } from "../IServerManager";

export interface IShareConnector extends IServerConnector {
  DirGet(shareId: string, path?: string): Promise<ICommandResult<DirectoryReadReturn>>;
  DirPost(shareId: string, path: string): Promise<ICommandResult>;
  FileGet(shareId: string, path: string, onProgress?: FilesystemProgressCallback): Promise<ICommandResult<ArrayBuffer>>;
  FilePost(shareId: string, path: string, blob: Blob, onProgress?: FilesystemProgressCallback): Promise<ICommandResult>;
  TreeGet(shareId: string, path?: string): Promise<ICommandResult<RecursiveDirectoryReadReturn>>;
  CpPost(shareId: string, source: string, destination: string): Promise<ICommandResult>;
  MvPost(shareId: string, source: string, destination: string): Promise<ICommandResult>;
  RmDelete(shareId: string, path: string): Promise<ICommandResult>;
  QuotaGet(shareId: string): Promise<ICommandResult<UserQuota>>;
  AccessorPost(shareId: string, path: string): Promise<ICommandResult<string>>;
  BulkGet<T = any>(shareId: string, ext: string, path: string): Promise<ICommandResult<Record<string, T>>>;
  StatGet(shareId: string, path: string): Promise<ICommandResult<ExtendedStat>>;
  ThumbnailGet(shareId: string, path: string, width: number, height?: number): Promise<ICommandResult<string>>;
  OwnedGet(): Promise<ICommandResult<SharedDriveType[]>>;
  JoinedGet(): Promise<ICommandResult<SharedDriveType[]>>;
  Create(name: string, password: string): Promise<ICommandResult<SharedDriveType>>;
  Delete(shareId: string): Promise<ICommandResult>;
  ChangePswdPost(shareId: string, newPassword: string): Promise<ICommandResult>;
  RenamePost(shareId: string, newName: string): Promise<ICommandResult>;
  JoinPost(username: string, shareName: string, password: string): Promise<ICommandResult>;
  LeavePost(shareId: string): Promise<ICommandResult>;
  KickPost(shareId: string, userId: string): Promise<ICommandResult>;
  MembersGet(shareId: string): Promise<ICommandResult<Record<string, string>>>;
  InfoByName(username: string, shareName: string): Promise<ICommandResult<SharedDriveType>>;
  InfoById(shareId: string): Promise<ICommandResult<SharedDriveType>>;
}
