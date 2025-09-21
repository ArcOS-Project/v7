<script lang="ts">
  import type { IconEditorRuntime } from "../runtime";

  const { process }: { process: IconEditorRuntime } = $props();
  const { icons, hasChanges } = process;
</script>

<div class="action-bar">
  <p class="count">{Object.entries($icons)?.length} icons</p>
  <button disabled={!$hasChanges} onclick={() => process.revert()}>Revert</button>
  <button class="suggested" disabled={!$hasChanges} onclick={() => process.save()}>
    <span class="lucide icon-shield"></span>
    <span>Save</span>
  </button>
</div>
