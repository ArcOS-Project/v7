<script lang="ts">
  import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";

  const { process, i }: { process: IExecuteQueryRuntime; i: number } = $props();
  const { expressions, selectedSource, columns } = process;
</script>

<select class="column-name" bind:value={$expressions[$selectedSource][i].columnName}>
  <option value="" disabled selected></option>
  {#each $columns as column (column)}
    <option value={column}>{column}</option>
  {/each}
</select>
