<script lang="ts">
  import { UserPaths } from "$ts/server/user/store";
  import type { FileManagerRuntime } from "../runtime";
  import DriveEntry from "./Sidebar/DriveEntry.svelte";
  import RootFolder from "./Sidebar/RootFolder.svelte";

  const { process }: { process: FileManagerRuntime } = $props();
  const { path, rootFolders, drives } = process;
</script>

<div class="sidebar">
  <section>
    <h1>Your Places</h1>

    <button class="folder" onclick={() => process.navigate(UserPaths.Home)} class:selected={$path === UserPaths.Home}>
      <span class="lucide icon-user"></span>
      <span>{process.userPreferences().account.displayName || process.username}</span>
    </button>

    {#each $rootFolders as folder (`${folder.name}-${folder.itemId}`)}
      <RootFolder {process} {folder} />
    {/each}
  </section>
  <section>
    <h1>Drives</h1>
    {#each Object.entries($drives) as [id, drive] (`${id}-${drive.data.uuid}`)}
      {#if !drive.data.HIDDEN}
        <DriveEntry {process} {drive} {id} />
      {/if}
    {/each}
  </section>
</div>
