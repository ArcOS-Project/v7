<script lang="ts">
  import type { FileManagerRuntime } from "../../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
</script>

<div class="group">
  <button class="lucide icon-upload" aria-label="Upload..."></button>
  <button class="lucide icon-download" aria-label="Download"></button>
</div>
