<script lang="ts">
  import { TextEditorIcon } from "$ts/images/apps";
  import type { RenameItemRuntime } from "../renameitem/runtime";

  const { process }: { process: RenameItemRuntime } = $props();
  const { newName } = process;
</script>

<div class="top">
  <img src={TextEditorIcon} alt="" />
  <div class="right">
    <h1>Rename file or folder</h1>
    <p>Enter a new name for the item:</p>
    <input type="text" bind:value={$newName} />
  </div>
</div>
<div class="bottom">
  <button onclick={() => process.closeWindow()}>Cancel</button>
  <button
    class="suggested"
    disabled={!$newName}
    onclick={() => process.rename()}
  >
    Rename
  </button>
</div>
