<script lang="ts">
  import type { NewFolderRuntime } from "./runtime";

  const { process }: { process: NewFolderRuntime } = $props();
  const { newFolder } = process;
</script>

<div class="top">
  <img src={process.getIconCached("FolderIcon")} alt="" />
  <div class="right">
    <h1>%apps.FsNewFolder.title%</h1>
    <p>%apps.FsNewFile.subtitle%</p>
    <input type="text" bind:value={$newFolder} />
  </div>
</div>
<div class="bottom">
  <button onclick={() => process.closeWindow()}>%general.cancel%</button>
  <button class="suggested" disabled={!$newFolder} onclick={() => process.createFolder()}> %apps.FsNewFolder.create% </button>
</div>
