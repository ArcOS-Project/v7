<script lang="ts">
  import type { FileManagerRuntime } from "../../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
</script>

<div class="bread-crumbs">
  <button
    class="lucide icon-pencil"
    aria-label="Edit path"
    onclick={() => process.editingAddress.set(true)}
  ></button>
</div>
