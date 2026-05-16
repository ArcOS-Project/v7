import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IStoreConnector } from "$interfaces/modules/server/IStoreConnector";
import { CommandResult } from "$ts/result";
import { ToAxiosProgress } from "$ts/util";
import type { FilesystemProgressCallback } from "$types/fs";
import type { UpdateWriteOpResult } from "$types/mongo";
import type { PartialStoreItem, StoreItem } from "$types/package";
import { ServerConnector } from ".";

export class StoreConnector extends ServerConnector implements IStoreConnector {
  prefix = "/store";

  async GetPackageById(id: string): Promise<ICommandResult<StoreItem>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/id/${id}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async GetPackageByName(name: string): Promise<ICommandResult<StoreItem>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/name/${name}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async DeleteStoreItem(id: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.delete(`/publish/${id}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async DeprecateStoreItem(id: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.post(`/publish/deprecate/${id}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async GetPublishedStoreItems(): Promise<ICommandResult<StoreItem[]>> {
    try {
      return CommandResult.FromResponse(await this.server.post(`/publish/list`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async PublishStoreItem(data: Blob, onProgress?: FilesystemProgressCallback): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.post(`/publish`, data));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async UpdateStoreItem(
    id: string,
    data: Blob,
    onProgress?: FilesystemProgressCallback
  ): Promise<ICommandResult<UpdateWriteOpResult>> {
    try {
      return CommandResult.FromResponse(await this.server.post(`/publish/${id}`, data));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Download(id: string, onProgress?: FilesystemProgressCallback): Promise<ICommandResult<ArrayBuffer>> {
    try {
      return CommandResult.FromResponse(
        await this.server.get(`/download/${id}`, {
          responseType: "arraybuffer",
          onDownloadProgress: ToAxiosProgress(onProgress),
        })
      );
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async GetAllStoreItems(): Promise<ICommandResult<PartialStoreItem[]>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/list`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async SearchStoreItems(query: string): Promise<ICommandResult<PartialStoreItem[]>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/search/${query}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async GetPackageReadme(id: string): Promise<ICommandResult<string>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/assets/${id}/readme`, { responseType: "text" }));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }
}
