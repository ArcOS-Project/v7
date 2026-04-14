import { CommandResult } from "$ts/result";
import type { GlobalDispatchClient } from "$types/dispatch";
import type { PublicUserInfo, UserInfo, UserPreferences } from "$types/user";
import { ServerConnector } from ".";
import { ApiCallBuilder } from "../builder";
import { toForm } from "$ts/util/form";

export class UserConnector extends ServerConnector("/user") {
  static async Self(token: string): Promise<CommandResult<UserInfo>> {
    return await ApiCallBuilder.Get().UseInstance(this.server).WithToken(token).Produces<UserInfo>().Execute(`/self`);
  }

  static async Rename(token: string, newUsername: string): Promise<CommandResult> {
    return await ApiCallBuilder.Patch()
      .UseInstance(this.server)
      .WithToken(token)
      .WithPostBody(toForm({ newUsername }))
      .Execute("/rename");
  }

  static async ChangePassword(token: string, newPassword: string): Promise<CommandResult> {
    return await ApiCallBuilder.Post()
      .UseInstance(this.server)
      .WithToken(token)
      .WithPostBody(toForm({ newPassword }))
      .Execute("/changepswd");
  }

  static async Info(token: string, userId: string): Promise<CommandResult<PublicUserInfo>> {
    return await ApiCallBuilder.Get()
      .UseInstance(this.server)
      .WithToken(token)
      .Produces<PublicUserInfo>()
      .Execute(`/info/${userId}`);
  }

  static async PreferencesPut(token: string, userPreferences: UserPreferences): Promise<CommandResult> {
    return await ApiCallBuilder.Put()
      .UseInstance(this.server)
      .WithToken(token)
      .WithPostBody(userPreferences)
      .Execute("/preferences");
  }

  static async AvailabilityUsername(username: string): Promise<CommandResult> {
    return await ApiCallBuilder.Get().UseInstance(this.server).WithParams({ name: username }).Execute("/availability/username");
  }

  static async AvailabilityEmail(email: string): Promise<CommandResult> {
    return await ApiCallBuilder.Get().UseInstance(this.server).WithParams({ email }).Execute("/availability/email");
  }

  static async DispatchGet(token: string): Promise<CommandResult<GlobalDispatchClient[]>> {
    return await ApiCallBuilder.Get()
      .UseInstance(this.server)
      .WithToken(token)
      .Produces<GlobalDispatchClient[]>()
      .Execute("/dispatch");
  }

  static async DispatchKick(token: string, clientId: string): Promise<CommandResult> {
    return await ApiCallBuilder.Post()
      .UseInstance(this.server)
      .WithToken(token)
      .WithParams({ clientId })
      .Execute("/dispatch/kick");
  }
}
