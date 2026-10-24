import type { IMuiRenderer } from "$interfaces/IMuiRenderer";
import type { ISettingsRuntime } from "$interfaces/runtimes/ISettingsRuntime";
import SafeModeNotice from "$lib/Daemon/SafeModeNotice.svelte";
import { MuiRenderer } from "$ts/ui/mui";
import type { SettingsBlock, SettingsPage } from "$types/system/mui/settings";
import type { Component } from "svelte";

export class SettingsMuiRenderer extends MuiRenderer<SettingsBlock, SettingsPage, ISettingsRuntime> implements IMuiRenderer {
  public EmbeddedComponents: Record<string, Component<any, {}, string>> = {
    SafeModeNotice
  }
}
