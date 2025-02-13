<script lang="ts">
  import type { FileManagerRuntime } from "../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
</script>

<div class="address-bar">
  <button class="lucide icon-chevron-up" aria-label="Parent Directory"></button>
  <div class="bar">address bar</div>
  <div class="search">
    <input type="text" />
    <span class="lucide icon-search"></span>
  </div>
</div>
