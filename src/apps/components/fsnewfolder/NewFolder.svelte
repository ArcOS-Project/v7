<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import type { NewFolderRuntime } from "./runtime";

  const { process }: { process: NewFolderRuntime } = $props();
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
