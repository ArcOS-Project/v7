<script lang="ts">
  import type { BooleanStore } from "$ts/writable";
  import type { UserPreferencesStore } from "$types/user";

  const {
    userPreferences,
    startMenuOpened,
  }: {
    userPreferences: UserPreferencesStore;
    startMenuOpened: BooleanStore;
  } = $props();
</script>

<div
  class="startmenu shell-colored"
  class:colored={$userPreferences.shell.taskbar.colored}
  class:opened={$startMenuOpened}
></div>
