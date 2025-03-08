<script lang="ts">
  import type { FileManagerRuntime } from "../../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
  const { selection, contents } = process;
</script>

<div class="portion">
  <button class="lucide icon-upload" aria-label="Upload..." onclick={() => process.uploadItems()}></button>
  {#if !process.loadSave}
    <button
      class="lucide icon-download"
      aria-label="Download"
      disabled={$selection.length !== 1 || !$contents}
      onclick={() => process.downloadSelected()}
    ></button>
  {/if}
</div>
