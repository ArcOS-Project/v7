<script lang="ts">
  import type { BooleanStore } from "$ts/writable";
  import type { UserPreferencesStore } from "$types/user";
  import type { ShellRuntime } from "../runtime";
  import { QuickSettings } from "../store";
  import CardStack from "./ActionCenter/CardStack.svelte";
  import Clock from "./ActionCenter/Clock.svelte";
  import Notifications from "./ActionCenter/Notifications.svelte";
  import QuickSetting from "./ActionCenter/QuickSetting.svelte";

  const {
    actionCenterOpened,
    userPreferences,
    process,
  }: {
    actionCenterOpened: BooleanStore;
    userPreferences: UserPreferencesStore;
    process: ShellRuntime;
  } = $props();

  // TODO: implement quick settings
  // TODO: remove fade-in animation from "No notifications" text if animations are turned off
</script>

<div class="actioncenter shell-colored" class:colored={$userPreferences.shell.taskbar.colored} class:opened={$actionCenterOpened}>
  <div class="top">
    <Clock />
    {#if !process.safeMode}
      <CardStack {userPreferences} {process} />
    {/if}
  </div>
  <Notifications {process} />
  {#if !process.safeMode}
    <div class="quick-settings" class:hidden={$userPreferences.shell.actionCenter.hideQuickSettings}>
      <button
        class="lucide icon-settings-2 settings"
        aria-label="Open Settings"
        title="Open Settings"
        onclick={() => process.spawnApp("systemSettings", process.pid)}
      ></button>
      <button class="lucide icon-log-out logout" aria-label="Log out" title="Log out..." onclick={() => process.exit()}></button>
      <div class="sep"></div>
      {#each QuickSettings as setting}
        <QuickSetting {process} {setting} />
      {/each}
    </div>
  {/if}
</div>
