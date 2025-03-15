<script lang="ts">
  import type { FileManagerRuntime } from "../runtime";
  import DriveEntry from "./Sidebar/DriveEntry.svelte";
  import RootFolder from "./Sidebar/RootFolder.svelte";

  const { process }: { process: FileManagerRuntime } = $props();
  const { path, rootFolders, drives } = process;
</script>

<div class="sidebar">
  <section>
    <h1>Your Places</h1>
    {#each $rootFolders as folder (`${folder.name}-${folder.itemId}`)}
      <RootFolder {process} {folder} />
    {/each}
  </section>
  <section>
    <h1>Drives</h1>
    {#each Object.entries($drives) as [id, drive] (`${id}-${drive.data.uuid}`)}
      <DriveEntry {process} {drive} {id} />
    {/each}
  </section>
</div>
