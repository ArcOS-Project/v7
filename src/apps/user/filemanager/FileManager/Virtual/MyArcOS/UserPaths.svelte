<script lang="ts">
  import type { FileManagerRuntime } from "$apps/user/filemanager/runtime";
  import { UserPaths } from "$ts/server/user/store";
  import { onMount } from "svelte";
  import Item from "./UserPaths/Item.svelte";

  const { process }: { process: FileManagerRuntime } = $props();
  const { userPreferences } = process;

  onMount(() => {
    $userPreferences.appPreferences.fileManager.myExpandUserPaths ??= true;
  });
</script>

<section class="user-paths">
  <button
    class="expander"
    onclick={() =>
      ($userPreferences.appPreferences.fileManager.myExpandUserPaths =
        !$userPreferences.appPreferences.fileManager.myExpandUserPaths)}
    class:expanded={$userPreferences.appPreferences.fileManager.myExpandUserPaths}
  >
    <span>Locations</span>
    <span class="lucide icon-chevron-down"></span>
  </button>
  {#if $userPreferences.appPreferences.fileManager.myExpandUserPaths}
    <div class="content">
      {#each Object.entries(UserPaths) as [id, path] (id)}
        <Item {path} {id} {process} />
      {/each}
    </div>
  {/if}
</section>
