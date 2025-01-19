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
</script>

<div class="actioncenter" class:opened={$actionCenterOpened}>
  <div class="top">
    <Clock />
    <CardStack {userPreferences} {process} />
  </div>
  <Notifications {process} />
  <div class="quick-settings"></div>
</div>
