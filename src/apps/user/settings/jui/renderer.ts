import type { IJuiRenderer } from "$interfaces/IJuiRenderer";
import type { ISettingsRuntime } from "$interfaces/runtimes/ISettingsRuntime";
import SafeModeNotice from "$lib/Daemon/SafeModeNotice.svelte";
import ProfilePicture from "$lib/ProfilePicture.svelte";
import { Daemon } from "$ts/env";
import { JuiRenderer } from "$ts/ui/jui";
import type { MaybePromise } from "$types/shared/common";
import type { JoltSettingsPage, JoltSettingsBlock } from "$types/system/jui/settings";
import type { Component } from "svelte";
import Header from "../Settings/Page/Account/Header.svelte";
import LayoutRenderer from "./BlockImplementations/LayoutRenderer.svelte";
import OptionRenderer from "./BlockImplementations/OptionRenderer.svelte";
import SectionRenderer from "./BlockImplementations/SectionRenderer.svelte";

export class SettingsJuiRenderer
  extends JuiRenderer<JoltSettingsBlock, JoltSettingsPage, ISettingsRuntime>
  implements IJuiRenderer<ISettingsRuntime>
{
  public EmbeddedComponents: Record<string, Component<any, {}, string>> = {
    SafeModeNotice,
    ProfilePicture,
    AccountHeader: Header,
  };

  public BlockImplementations: Record<string, Component<any, {}, string>> = {
    Layout: LayoutRenderer,
    Section: SectionRenderer,
    Option: OptionRenderer,
  };

  override ConditionCallbacks: Record<string, () => MaybePromise<boolean>> = {
    HAS_PREFERENCES: () => !!Daemon.preferences?.(),
    HAS_TOTP: () => !!Daemon.userInfo?.hasTotp,
    HAS_USERINFO: () => !!Daemon.userInfo,
    SAFE_MODE: () => !!Daemon.safeMode,
  };

  override Actions: Record<string, (...args: any[]) => MaybePromise<any>> = {
    show_changeUsername: () => this.Process.spawnOverlay("changeUsername"),
    show_changePassword: () => this.Process.spawnOverlay("changePassword"),
    setup2fa: () => this.Process.setup2fa(),
    disableTotp: () => this.Process.disableTotp(),
    show_loginActivity: () => this.Process.loginActivity(),
    logOutEverywhere: () => this.Process.logOutEverywhere(),
    deleteAccount: () => Daemon.account?.deleteAccount(),
  };

  override async Initialize(): Promise<void> {
    this.Process.userPreferences.subscribe(() => this.UpdateConditions());
  }
}
