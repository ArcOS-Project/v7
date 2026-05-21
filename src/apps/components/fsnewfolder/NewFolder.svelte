<script lang="ts">
  import type { INewFolderRuntime } from "$interfaces/runtimes/INewFolderRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";

  const { process }: { process: INewFolderRuntime } = $props();
  const { newFolder } = process;
</script>

<div class="top">
  <img src={process.getIconCached("FolderIcon")} alt="" />
  <div class="right">
    <h1>New folder</h1>
    <p>Think of a wonderful name for this new folder:</p>
    <input type="text" bind:value={$newFolder} />
  </div>
</div>

<ActionBar>
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>Cancel</ActionButton>
    <ActionButton suggested disabled={!$newFolder} onclick={() => process.createFolder()}>Create</ActionButton>
  {/snippet}
</ActionBar>
