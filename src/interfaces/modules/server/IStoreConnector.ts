import type { ICommandResult } from "$interfaces/ICommandResult";
import type { FilesystemProgressCallback } from "$types/fs";
import type { UpdateWriteOpResult } from "$types/mongo";
import type { PartialStoreItem, StoreItem } from "$types/package";
import type { IServerConnector } from "../IServerManager";

export interface IStoreConnector extends IServerConnector {
  GetPackageById(id: string): Promise<ICommandResult<StoreItem>>;
  GetPackageByName(name: string): Promise<ICommandResult<StoreItem>>;
  DeleteStoreItem(id: string): Promise<ICommandResult>;
  DeprecateStoreItem(id: string): Promise<ICommandResult>;
  GetPublishedStoreItems(): Promise<ICommandResult<StoreItem[]>>;
  PublishStoreItem(data: Blob, onProgress?: FilesystemProgressCallback): Promise<ICommandResult>;
  UpdateStoreItem(id: string, data: Blob, onProgress?: FilesystemProgressCallback): Promise<ICommandResult<UpdateWriteOpResult>>;
  Download(id: string, onProgress?: FilesystemProgressCallback): Promise<ICommandResult<ArrayBuffer>>;
  GetAllStoreItems(): Promise<ICommandResult<PartialStoreItem[]>>;
  SearchStoreItems(query: string): Promise<ICommandResult<PartialStoreItem[]>>;
  GetPackageReadme(id: string): Promise<ICommandResult<string>>;
}
