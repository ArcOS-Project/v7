<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";

  let { process, i }: { process: INewExecuteQueryRuntime; i: number } = $props();
  const { selectedColumns, whereClauses, selectedCollection, allowSensitiveColumns } = process;
</script>

<select bind:value={$whereClauses[$selectedCollection][i].columnName}>
  <option value="" selected disabled>(column)</option>
  {#each $selectedColumns[$selectedCollection] as column (column.column)}
    <option value={column.column} disabled={column.sensitive && !allowSensitiveColumns}>{column.column}</option>
  {/each}
</select>
