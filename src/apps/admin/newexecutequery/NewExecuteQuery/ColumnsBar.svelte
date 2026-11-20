<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";

  let { process }: { process: INewExecuteQueryRuntime } = $props();
  const { selectedColumns, selectedCollection } = process;
</script>

<div class="bar columns-bar">
  <h1>Select:</h1>
  <div class="columns">
    {#each $selectedColumns[$selectedCollection] || [] as column (column)}
      <div class="column" class:clr-yellow={column.sensitive}>
        {column.column}
        {#if column.sensitive}
          <span class="lucide icon-triangle-alert" title="This column holds sensitive data"></span>
        {/if}
      </div>
    {/each}

    {#if !$selectedColumns[$selectedCollection]?.length}
      <p class="empty">(nothing)</p>
    {/if}
  </div>
  <button onclick={() => process.SelectAllColumns()}>All</button>
  <button onclick={() => process.ShowSelectColumns()}>Choose...</button>
</div>
