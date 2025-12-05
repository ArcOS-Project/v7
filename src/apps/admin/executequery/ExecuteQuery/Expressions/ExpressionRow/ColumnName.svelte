<script lang="ts">
  import type { ExecuteQueryRuntime } from "../../../runtime";

  const { process, i }: { process: ExecuteQueryRuntime; i: number } = $props();
  const { expressions, selectedSource, columns } = process;
</script>

<select class="column-name" bind:value={$expressions[$selectedSource][i].columnName}>
  <option value="" disabled selected></option>
  {#each $columns as column (column)}
    <option value={column}>{column}</option>
  {/each}
</select>
