<script lang="ts">
  import type { INewExecuteQueryOverlayRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
  import ActionBar from "$lib/Window/ActionBar.svelte";
  import ActionButton from "$lib/Window/ActionBar/ActionButton.svelte";

  let { process }: { process: INewExecuteQueryOverlayRuntime } = $props();
  const {
    parent: { selectedCollection, selectedColumns, columns, allowSensitiveColumns },
  } = process;

  function selectAll() {
    $selectedColumns[$selectedCollection] = $columns.filter((column) => !column.sensitive || allowSensitiveColumns);
  }

  function selectNone() {
    $selectedColumns[$selectedCollection] = [];
  }
</script>

<div class="top">
  <h1>Select columns</h1>
  <p>Select the columns that you want to query from <b>{$selectedCollection}</b>:</p>
  <div class="selection">
    {#each $columns as column (column.column)}
      <label for="">
        <input
          type="checkbox"
          disabled={column.sensitive && !allowSensitiveColumns}
          bind:group={$selectedColumns[$selectedCollection]}
          value={column}
        />
        <span>
          <span class="column-name">{column.column}</span>
          {#if column.sensitive}
            <span class="lucide icon-triangle-alert" title="This column holds sensitive data"></span>
          {/if}
        </span>
      </label>
    {/each}
  </div>
</div>
<ActionBar>
  {#snippet leftContent()}
    <ActionButton onclick={selectAll}>All</ActionButton>
    <ActionButton onclick={selectNone}>None</ActionButton>
  {/snippet}
  {#snippet rightContent()}
    <ActionButton suggested onclick={() => process.closeWindow()}>Close</ActionButton>
  {/snippet}
</ActionBar>
