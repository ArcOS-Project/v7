<script lang="ts">
  import type { SaveQueryOverlayRuntime } from "../SaveQuery/runtime";

  const { process }: { process: SaveQueryOverlayRuntime } = $props();
  const { queryName } = process;
</script>

<div class="top">
  <p>Enter a name for this query:</p>
  <input type="text" bind:value={$queryName} placeholder="Users called 'banana'" />
</div>

<div class="actions">
  <button onclick={() => process.closeWindow()}>Cancel</button>
  <button onclick={() => process.Confirm()} class="suggested">Save</button>
</div>
