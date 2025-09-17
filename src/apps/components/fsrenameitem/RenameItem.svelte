<script lang="ts">
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
<div class="bottom">
  <button onclick={() => process.closeWindow()}>Cancel</button>
  <button class="suggested" disabled={!$newName} onclick={() => process.rename()}> Rename </button>
</div>
