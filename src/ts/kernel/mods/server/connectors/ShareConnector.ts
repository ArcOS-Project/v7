import type { ICommandResult } from "$interfaces/ICommandResult";
import type { IShareConnector } from "$interfaces/modules/server/IShareConnector";
import { Server } from "$ts/env";
import { CommandResult } from "$ts/result";
import { ToAxiosProgress } from "$ts/util";
import { arrayBufferToBlob } from "$ts/util/convert";
import { toForm } from "$ts/util/form";
import { getItemNameFromPath, join } from "$ts/util/fs";
import {
  type DirectoryReadReturn,
  type ExtendedStat,
  type FilesystemProgressCallback,
  type FsAccess,
  type RecursiveDirectoryReadReturn,
  type UserQuota,
} from "$types/fs";
import type { SharedDriveType } from "$types/shares";
import { ServerConnector } from ".";

export class ShareConnector extends ServerConnector implements IShareConnector {
  override prefix = "/share";

  async DirGet(shareId: string, path: string = ""): Promise<ICommandResult<DirectoryReadReturn>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/dir/${shareId}` + (path ? `/${path}` : "")));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async DirPost(shareId: string, path: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.post(`/dir/${shareId}/${path}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async FileGet(shareId: string, path: string, onProgress?: FilesystemProgressCallback): Promise<ICommandResult<ArrayBuffer>> {
    try {
      return CommandResult.FromResponse(
        await this.server.get(`/file/${shareId}/${path}`, {
          responseType: "arraybuffer",
          onDownloadProgress: ToAxiosProgress(onProgress),
        })
      );
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async FilePost(shareId: string, path: string, blob: Blob, onProgress?: FilesystemProgressCallback): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(
        await this.server.post(`/file/${shareId}/${path}`, blob, {
          onUploadProgress: ToAxiosProgress(onProgress),
        })
      );
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async TreeGet(shareId: string, path: string = ""): Promise<ICommandResult<RecursiveDirectoryReadReturn>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/tree/${shareId}` + (path ? `/${path}` : "")));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async CpPost(shareId: string, source: string, destination: string): Promise<ICommandResult> {
    const sourceFilename = getItemNameFromPath(source);
    destination = destination.endsWith(sourceFilename) ? destination : join(destination, sourceFilename);

    try {
      return CommandResult.FromResponse(await this.server.post(`/cp/${shareId}/${source}`, toForm({ destination })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async MvPost(shareId: string, source: string, destination: string): Promise<ICommandResult> {
    const sourceFilename = getItemNameFromPath(source);
    destination = destination.endsWith(sourceFilename) ? destination : join(destination, sourceFilename);

    try {
      return CommandResult.FromResponse(await this.server.post(`/mv/${shareId}/${source}`, toForm({ destination })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async RmDelete(shareId: string, path: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.delete(`/rm/${shareId}/${path}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async QuotaGet(shareId: string): Promise<ICommandResult<UserQuota>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/quota/${shareId}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async AccessorPost(shareId: string, path: string): Promise<ICommandResult<string>> {
    try {
      const response = CommandResult.FromResponse(await this.server.post<FsAccess>(`/accessor/${shareId}/${path}`));
      if (!response.success) return response as ICommandResult<string>;

      return CommandResult.Ok(this.server.getUri({ baseURL: `/direct/${shareId}/${response.result!.accessor}` }));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async BulkGet<T = any>(shareId: string, ext: string, path: string): Promise<ICommandResult<Record<string, T>>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/bulk/${shareId}/${ext}/${path}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async StatGet(shareId: string, path: string): Promise<ICommandResult<ExtendedStat>> {
    try {
      const response = CommandResult.FromResponse(await this.server.get(`/stat/${shareId}/${path}`));
      if (!response.success) return response as ICommandResult<ExtendedStat>;

      response.result.modifiers.createdBy.user.profilePicture = `${Server.url}${response.result.modifiers.createdBy.user.profilePicture}`;
      response.result.modifiers.lastWrite.user.profilePicture = `${Server.url}${response.result.modifiers.lastWrite.user.profilePicture}`;

      return response;
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async ThumbnailGet(shareId: string, path: string, width: number, height: number = width): Promise<ICommandResult<string>> {
    try {
      const response = await this.server.get(`/thumbnail/${shareId}/${width}x${height}/${path}`, {
        responseType: "arraybuffer",
      });
      if (response.status !== 200) return CommandResult.Error(response.statusText);

      return CommandResult.Ok(
        URL.createObjectURL(arrayBufferToBlob(response.data, response.headers["Content-Type"]?.toString()))
      );
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async OwnedGet(): Promise<ICommandResult<SharedDriveType[]>> {
    try {
      return CommandResult.FromResponse(await this.server.get("/owned"));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async JoinedGet(): Promise<ICommandResult<SharedDriveType[]>> {
    try {
      return CommandResult.FromResponse(await this.server.get("/joined"));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Create(name: string, password: string): Promise<ICommandResult<SharedDriveType>> {
    try {
      return CommandResult.FromResponse(await this.server.post(`/`, toForm({ name, password })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async Delete(shareId: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.delete(`/${shareId}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async ChangePswdPost(shareId: string, newPassword: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.post(`/${shareId}/changepswd`, toForm({ newPassword })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async RenamePost(shareId: string, newName: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.post(`/${shareId}/rename`, toForm({ newName })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async JoinPost(username: string, shareName: string, password: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.post(`/join/${username}/${shareName}`, toForm({ password })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async LeavePost(shareId: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.post(`/leave/${shareId}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async KickPost(shareId: string, userId: string): Promise<ICommandResult> {
    try {
      return CommandResult.FromResponse(await this.server.post(`/kick/${shareId}`, toForm({ userId })));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async MembersGet(shareId: string): Promise<ICommandResult<Record<string, string>>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/members/${shareId}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async InfoByName(username: string, shareName: string): Promise<ICommandResult<SharedDriveType>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/info/byname/${username}/${shareName}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }

  async InfoById(shareId: string): Promise<ICommandResult<SharedDriveType>> {
    try {
      return CommandResult.FromResponse(await this.server.get(`/info/byid/${shareId}`));
    } catch (e) {
      return CommandResult.AxiosError(e);
    }
  }
}
