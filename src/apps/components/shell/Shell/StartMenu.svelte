<script lang="ts">
  import type { BooleanStore } from "$ts/writable";
  import type { UserPreferencesStore } from "$types/user";
  import type { ShellRuntime } from "../runtime";
  import Folders from "./Folders.svelte";
  import AppList from "./StartMenu/AppList.svelte";

  const {
    process,
    userPreferences,
    startMenuOpened,
    username,
  }: {
    userPreferences: UserPreferencesStore;
    startMenuOpened: BooleanStore;
    process: ShellRuntime;
    username: string;
  } = $props();
</script>

<div
  class="startmenu shell-colored"
  class:colored={$userPreferences.shell.taskbar.colored}
  class:opened={$startMenuOpened}
>
  <div class="top">
    <AppList {process} />
    <Folders {process} {userPreferences} {username} />
  </div>
  <div class="bottom">
    <div class="search">
      <span class="lucide icon-search"></span>
      <input type="text" placeholder="Search..." />
    </div>
    <div class="actions">
      <button class="settings" aria-label="Settings">
        <span class="lucide icon-settings-2"></span>
      </button>
      <button class="shutdown" aria-label="Shutdown">
        <span class="lucide icon-power"></span>
      </button>
    </div>
  </div>
</div>
