<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import type { UserPreferencesStore } from "$types/user";
  import type { BooleanStore } from "$types/writable";
  import Bottom from "./StartMenu/Bottom.svelte";
  import RightPane from "./StartMenu/RightPane.svelte";
  import LeftPane from "./StartMenu/LeftPane.svelte";

  const {
    process,
    userPreferences,
    startMenuOpened,
    username,
  }: {
    userPreferences: UserPreferencesStore;
    startMenuOpened: BooleanStore;
    process: IShellRuntime;
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
    <LeftPane {process} />
    <RightPane {process} {userPreferences} {username} />
  </div>
  <Bottom {process} />
</div>
