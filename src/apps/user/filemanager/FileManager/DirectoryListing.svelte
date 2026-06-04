<script lang="ts">
  import type { IFileManagerRuntime } from "$interfaces/runtimes/IFileManagerRuntime";
  import Spinner from "$lib/Spinner.svelte";
  import FileItem from "./DirectoryListing/FileItem.svelte";
  import FolderItem from "./DirectoryListing/FolderItem.svelte";
  import HeaderRow from "./DirectoryListing/HeaderRow.svelte";
  import InfoPane from "./InfoPane.svelte";

  const { process }: { process: IFileManagerRuntime } = $props();
  const { loading, contents, userPreferences, directoryListing, loadSave } = process;
</script>

<div class="viewer-wrapper">
  <div
    class="directory-viewer {$userPreferences.appPreferences.fileManager?.viewMode}"
    role="directory"
    class:loading={$loading}
    class:compact={$userPreferences.appPreferences.fileManager?.compact}
    bind:this={$directoryListing}
    data-contextmenu={loadSave ? "" : "directory-listing"}
  >
    {#if $loading}
      <Spinner height={32} />
    {:else}
      <HeaderRow />
      {#if $contents && ($contents.dirs.length || $contents.files.length)}
        {#each $contents.dirs as dir (dir.name)}
          <FolderItem {dir} {process} />
        {/each}
        {#each $contents.files as file (file.name)}
          <FileItem {file} {process} />
        {/each}
      {:else}
        <p class="empty">This folder is empty</p>
      {/if}
    {/if}
  </div>
  {#if $userPreferences.appPreferences.fileManager?.showInfoPane && !process.loadSave}
    <InfoPane {process} />
  {/if}
</div>
