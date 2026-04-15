import type { IUserConnector } from "$interfaces/modules/server/UserConnector";
import { CommandResult } from "$ts/result";
import { toForm } from "$ts/util/form";
import type { GlobalDispatchClient } from "$types/dispatch";
import type { PublicUserInfo, UserInfo, UserPreferences } from "$types/user";
import { ServerConnector } from ".";
import { ApiCallBuilder } from "../builder";

export class UserConnector extends ServerConnector implements IUserConnector {
  override prefix = "/user";
  override name = "UserConnector";

  async Self(): Promise<CommandResult<UserInfo>> {
    return await ApiCallBuilder.Get().UseInstance(this.server).WithToken(this.token).Produces<UserInfo>().Execute(`/self`);
  }

  async Rename(newUsername: string): Promise<CommandResult> {
    return await ApiCallBuilder.Patch()
      .UseInstance(this.server)
      .WithToken(this.token)
      .WithPostBody(toForm({ newUsername }))
      .Execute("/rename");
  }

  async ChangePassword(newPassword: string): Promise<CommandResult> {
    return await ApiCallBuilder.Post()
      .UseInstance(this.server)
      .WithToken(this.token)
      .WithPostBody(toForm({ newPassword }))
      .Execute("/changepswd");
  }

  async Info(userId: string): Promise<CommandResult<PublicUserInfo>> {
    return await ApiCallBuilder.Get()
      .UseInstance(this.server)
      .WithToken(this.token)
      .Produces<PublicUserInfo>()
      .Execute(`/info/${userId}`);
  }

  async PreferencesPut(userPreferences: UserPreferences): Promise<CommandResult> {
    return await ApiCallBuilder.Put()
      .UseInstance(this.server)
      .WithToken(this.token)
      .WithPostBody(userPreferences)
      .Execute("/preferences");
  }

  async AvailabilityUsername(username: string): Promise<CommandResult> {
    return await ApiCallBuilder.Get().UseInstance(this.server).WithParams({ name: username }).Execute("/availability/username");
  }

  async AvailabilityEmail(email: string): Promise<CommandResult> {
    return await ApiCallBuilder.Get().UseInstance(this.server).WithParams({ email }).Execute("/availability/email");
  }

  async DispatchGet(): Promise<CommandResult<GlobalDispatchClient[]>> {
    return await ApiCallBuilder.Get()
      .UseInstance(this.server)
      .WithToken(this.token)
      .Produces<GlobalDispatchClient[]>()
      .Execute("/dispatch");
  }

  async DispatchKick(clientId: string): Promise<CommandResult> {
    return await ApiCallBuilder.Post()
      .UseInstance(this.server)
      .WithToken(this.token)
      .WithParams({ clientId })
      .Execute("/dispatch/kick");
  }
}
