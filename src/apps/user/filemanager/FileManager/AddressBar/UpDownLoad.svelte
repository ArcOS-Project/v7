<script lang="ts">
  import type { FileManagerRuntime } from "../../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
</script>

<div class="portion">
  <button
    class="lucide icon-upload"
    aria-label="Upload..."
    onclick={() => process.uploadItems()}
  ></button>
  <button
    class="lucide icon-download"
    aria-label="Download"
    onclick={() => process.notImplemented("Downloading items")}
  ></button>
  <button
    class="lucide icon-plus"
    aria-label="New..."
    onclick={() => process.notImplemented("Creating new files")}
  ></button>
</div>
