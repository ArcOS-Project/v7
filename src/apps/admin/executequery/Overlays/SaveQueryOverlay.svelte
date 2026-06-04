<script lang="ts">
  import type { ISaveQueryOverlayRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";

  const { process }: { process: ISaveQueryOverlayRuntime } = $props();
  const { queryName } = process;
</script>

<div class="top">
  <p>Enter a name for this query:</p>
  <input type="text" bind:value={$queryName} placeholder="Users called 'banana'" />
</div>

<ActionBar>
  {#snippet rightContent()}
    <ActionButton onclick={() => process.closeWindow()}>Cancel</ActionButton>
    <ActionButton suggested disabled={!$queryName} onclick={() => process.Confirm()}>Save</ActionButton>
  {/snippet}
</ActionBar>
