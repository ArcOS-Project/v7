<script lang="ts">
  import type { FileManagerRuntime } from "../../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
  const { selection, contents, drive } = process;
</script>

<div class="portion">
  <button
    class="lucide icon-upload"
    title="Upload files..."
    aria-label="Upload..."
    onclick={() => process.uploadItems()}
    disabled={$drive?.READONLY}
  ></button>
  {#if !process.loadSave}
    <button
      class="lucide icon-download"
      aria-label="Download"
      title="Download file..."
      disabled={$selection.length !== 1 || !$contents}
      onclick={() => process.downloadSelected()}
    ></button>
  {/if}
</div>
