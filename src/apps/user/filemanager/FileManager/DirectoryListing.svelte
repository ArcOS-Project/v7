<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { FileManagerRuntime } from "../runtime";
  import FileItem from "./DirectoryListing/FileItem.svelte";
  import FolderItem from "./DirectoryListing/FolderItem.svelte";
  import HeaderRow from "./DirectoryListing/HeaderRow.svelte";
  import InfoPane from "./InfoPane.svelte";

  const { process }: { process: FileManagerRuntime } = $props();
  const { loading, contents, userPreferences, directoryListing, loadSave } = process;
</script>

<div class="viewer-wrapper">
  <div
    class="directory-viewer"
    role="directory"
    class:loading={$loading}
    class:grid={$userPreferences.appPreferences.fileManager?.grid}
    class:compact={$userPreferences.appPreferences.fileManager?.compact}
    class:thumbnail={$userPreferences.appPreferences.fileManager?.thumbnails}
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
