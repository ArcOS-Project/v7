<script lang="ts">
  import type { BooleanStore } from "$ts/writable";
  import type { UserPreferencesStore } from "$types/user";
  import type { ShellRuntime } from "../runtime";
  import CardStack from "./ActionCenter/CardStack.svelte";
  import Clock from "./ActionCenter/Clock.svelte";

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
  <div class="notifications">
    <h1>
      <span>Notifications</span>
      <button class="lucide icon-eraser" aria-label="Clear Notifications"
      ></button>
    </h1>
    <div class="content"></div>
  </div>
</div>
