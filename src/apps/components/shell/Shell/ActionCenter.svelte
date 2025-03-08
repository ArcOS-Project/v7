<script lang="ts">
  import type { BooleanStore } from "$ts/writable";
  import type { UserPreferencesStore } from "$types/user";
  import type { ShellRuntime } from "../runtime";
  import CardStack from "./ActionCenter/CardStack.svelte";
  import Clock from "./ActionCenter/Clock.svelte";
  import Notifications from "./ActionCenter/Notifications.svelte";

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
    <CardStack {userPreferences} {process} />
  </div>
  <Notifications {process} />
  {#if !$userPreferences.shell.actionCenter.hideQuickSettings}
    <div class="quick-settings"></div>
  {/if}
</div>
