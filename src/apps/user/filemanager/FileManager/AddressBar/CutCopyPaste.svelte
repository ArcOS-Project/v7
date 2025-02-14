<script lang="ts">
  import type { FileManagerRuntime } from "../../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
</script>

<div class="portion copy-paste">
  <button class="lucide icon-scissors" aria-label="Cut items"></button>
  <button class="lucide icon-copy" aria-label="Copy items"></button>
  <button class="lucide icon-clipboard" aria-label="Paste items"></button>
</div>
