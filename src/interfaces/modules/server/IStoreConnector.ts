import type { CommandResult } from "$ts/result";
import type { FilesystemProgressCallback } from "$types/fs";
import type { UpdateWriteOpResult } from "$types/mongo";
import type { PartialStoreItem, StoreItem } from "$types/package";
import type { IServerConnector } from "../IServerManager";

export interface IStoreConnector extends IServerConnector {
  GetPackageById(id: string): Promise<CommandResult<StoreItem>>;
  GetPackageByName(name: string): Promise<CommandResult<StoreItem>>;
  DeleteStoreItem(id: string): Promise<CommandResult>;
  DeprecateStoreItem(id: string): Promise<CommandResult>;
  GetPublishedStoreItems(): Promise<CommandResult<StoreItem[]>>;
  PublishStoreItem(data: Blob, onProgress?: FilesystemProgressCallback): Promise<CommandResult>;
  UpdateStoreItem(id: string, data: Blob, onProgress?: FilesystemProgressCallback): Promise<CommandResult<UpdateWriteOpResult>>;
  Download(id: string, onProgress?: FilesystemProgressCallback): Promise<CommandResult<ArrayBuffer>>;
  GetAllStoreItems(): Promise<CommandResult<PartialStoreItem[]>>;
  SearchStoreItems(query: string): Promise<CommandResult<PartialStoreItem[]>>;
  GetPackageReadme(id: string): Promise<CommandResult<string>>;
}
