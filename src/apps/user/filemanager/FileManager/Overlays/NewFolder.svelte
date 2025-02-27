<script lang="ts">
  import { FolderIcon } from "$ts/images/filesystem";
  import type { NewFolderRuntime } from "../../newfolder/runtime";

  const { process }: { process: NewFolderRuntime } = $props();
  const { newFolder } = process;
</script>

<div class="top">
  <img src={FolderIcon} alt="" />
  <div class="right">
    <h1>New folder</h1>
    <p>Think of a wonderful name for this new folder:</p>
    <input type="text" bind:value={$newFolder} />
  </div>
</div>
<div class="bottom">
  <button onclick={() => process.closeWindow()}>Cancel</button>
  <button
    class="suggested"
    disabled={!$newFolder}
    onclick={() => process.createFolder()}
  >
    Create
  </button>
</div>
