<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";

  let { process }: { process: INewExecuteQueryRuntime } = $props();
  const { selectedCollection, orderBy, selectedColumns, allowSensitiveColumns } = process;
</script>

<div class="bar order-by">
  <h1>Order by:</h1>

  {#if $selectedColumns[$selectedCollection]?.length}
  <select bind:value={$orderBy[$selectedCollection].column}>
    <option value="" selected disabled>(column)</option>
    {#each $selectedColumns[$selectedCollection] as column (column.column)}
      <option value={column.column} disabled={column.sensitive && !allowSensitiveColumns}>{column.column}</option>
    {/each}
  </select>
  <label>
    <input type="checkbox" bind:checked={$orderBy[$selectedCollection].descending} />
    <span>Descending?</span>
  </label>
  {:else}
  <p class="empty">(nothing)</p>
  {/if}
</div>
