<script lang="ts">
  import type { FileManagerRuntime } from "../../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
</script>

<div class="portion">
  <button class="lucide icon-upload" aria-label="Upload..."></button>
  <button class="lucide icon-download" aria-label="Download"></button>
  <button class="lucide icon-plus" aria-label="New..."></button>
</div>
