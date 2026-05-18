<script lang="ts">
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";
  import type { RenameItemRuntime } from "./runtime";

  const { process }: { process: RenameItemRuntime } = $props();
  const { newName } = process;
</script>

<div class="top">
  <img src={process.getIconCached("TextEditorIcon")} alt="" />
  <div class="right">
    <h1>Rename file or folder</h1>
    <p>Enter a new name for the item:</p>
    <input type="text" bind:value={$newName} />
  </div>
</div>

<ActionBar>
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>Cancel</ActionButton>
    <ActionButton suggested disabled={!$newName} onclick={() => process.rename()}>Rename</ActionButton>
  {/snippet}
</ActionBar>
