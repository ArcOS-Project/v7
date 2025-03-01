<script lang="ts">
  import { onFolderChange } from "$ts/fs/util";
  import { FolderIcon } from "$ts/images/filesystem";
  import type { FolderEntry } from "$types/fs";
  import type { UserPreferencesStore } from "$types/user";
  import { onMount } from "svelte";
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

  let dirs: FolderEntry[] = $state([]);

  onMount(() => {
    onFolderChange("U:/", update);
  });

  async function update() {
    const root = await process.fs.readDir("U:/");

    if (!root) return;

    dirs = root?.dirs;
  }
</script>

<div class="folders">
  <UserButton {userPreferences} {username} {process} />
  <div class="content">
    {#each dirs as dir}
      <button class="folder" onclick={() => process.notImplemented()}>
        <img src={FolderIcon} alt="" />
        <span class="name">{dir.name}</span>
      </button>
    {/each}
  </div>
</div>
