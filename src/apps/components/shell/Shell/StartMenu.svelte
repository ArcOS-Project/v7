<script lang="ts">
  import type { UserPreferencesStore } from "$types/user";
  import type { BooleanStore } from "$types/writable";
  import type { ShellRuntime } from "../runtime";
  import Bottom from "./StartMenu/Bottom.svelte";
  import Folders from "./StartMenu/Folders.svelte";
  import NewAppList from "./StartMenu/NewAppList.svelte";

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
    <NewAppList {process} />
    <Folders {process} {userPreferences} {username} />
  </div>
  <Bottom {process} />
</div>
