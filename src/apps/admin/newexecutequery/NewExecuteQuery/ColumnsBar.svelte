<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";

  let { process }: { process: INewExecuteQueryRuntime } = $props();
  const { selectedColumns, selectedCollection } = process;
</script>

<div class="columns-bar">
  <h1>Select:</h1>
  <div class="columns">
    {#each $selectedColumns[$selectedCollection] || [] as column (column)}
      <div class="column">
        {column}
      </div>
    {/each}
  </div>
  <button onclick={() => process.ShowSelectColumns()}>Choose...</button>
</div>
