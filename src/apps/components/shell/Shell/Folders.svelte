<script lang="ts">
  import type { UserPreferencesStore } from "$types/user";
  import type { ShellRuntime } from "../runtime";
  import UserButton from "./Folders/UserButton.svelte";

  const {
    process,
    userPreferences,
    username,
  }: {
    process: ShellRuntime;
    userPreferences: UserPreferencesStore;
    username: string;
  } = $props();
</script>

<div class="folders">
  <UserButton {userPreferences} {username} {process} />
  <div class="content"></div>
</div>
