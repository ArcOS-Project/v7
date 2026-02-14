<script lang="ts">
  import { UserPaths } from "$ts/user/store";
  import type { FileManagerRuntime } from "../runtime";
  import DriveEntry from "./Sidebar/DriveEntry.svelte";
  import RootFolder from "./Sidebar/RootFolder.svelte";

  const { process }: { process: FileManagerRuntime } = $props();
  const { userPreferences } = process;

  const { path, rootFolders, drives } = process;
</script>

<div class="sidebar">
  <section>
    <h1>{process.userPreferences().account.displayName || process.username}</h1>

    <button class="folder" onclick={() => process.navigate(UserPaths.Home)} class:selected={$path === UserPaths.Home}>
      <span class="lucide icon-house"></span>
      <span>Home</span>
    </button>

    {#each $rootFolders as folder (`${folder.name}-${folder.itemId}`)}
      <RootFolder {process} {folder} />
    {/each}
  </section>
  {#if Object.values(process.virtualLocations).filter((l) => !l.hidden).length}
    <section>
      <h1>Places</h1>
      {#each Object.entries(process.virtualLocations) as [id, location] (id)}
        {#if !location.hidden || $userPreferences.appPreferences.fileManager?.showHiddenDrives}
          <button
            class="folder"
            onclick={() => process.navigate(`::${id}`)}
            class:selected={$path === `::${id}`}
            data-contextmenu="place-{id}"
          >
            <span class="lucide icon-{location.icon}"></span>
            <span>{location.name}</span>
          </button>
        {/if}
      {/each}
    </section>
  {/if}
  <section>
    <h1>Drives</h1>
    {#each Object.entries($drives) as [id, drive] (`${id}-${drive.data.uuid}`)}
      {#if !drive.data.HIDDEN || $userPreferences.appPreferences.fileManager?.showHiddenDrives}
        <DriveEntry {process} {drive} {id} />
      {/if}
    {/each}
  </section>
</div>
