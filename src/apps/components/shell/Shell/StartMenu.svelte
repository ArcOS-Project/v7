<script lang="ts">
  import type { BooleanStore } from "$ts/writable";
  import type { UserPreferencesStore } from "$types/user";
  import type { ShellRuntime } from "../runtime";
  import Bottom from "./StartMenu/Bottom.svelte";
  import Folders from "./StartMenu/Folders.svelte";
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

  const { searchQuery } = process;
</script>

<div
  class="startmenu shell-colored"
  class:colored={$userPreferences.shell.taskbar.colored}
  class:opened={$startMenuOpened}
  class:searching={$searchQuery}
>
  <div class="top">
    <AppList {process} />
    <Folders {process} {userPreferences} {username} />
  </div>
  <Bottom {process} />
</div>
