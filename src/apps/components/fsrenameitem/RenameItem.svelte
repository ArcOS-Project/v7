<script lang="ts">
  import type { RenameItemRuntime } from "./runtime";

  const { process }: { process: RenameItemRuntime } = $props();
  const { newName } = process;
</script>

<div class="top">
  <img src={process.getIconCached("TextEditorIcon")} alt="" />
  <div class="right">
    <h1>%apps.FsRenameItem.title%</h1>
    <p>%apps.FsRenameItem.subtitle%</p>
    <input type="text" bind:value={$newName} />
  </div>
</div>
<div class="bottom">
  <button onclick={() => process.closeWindow()}>%general.cancel%</button>
  <button class="suggested" disabled={!$newName} onclick={() => process.rename()}> %apps.FsRenameItem.rename% </button>
</div>
