<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
  import { DB_QUERY_WHERE_MODES, WhereModeCaptions } from "$types/server/admin";

  let { process, i }: { process: INewExecuteQueryRuntime; i: number } = $props();
  const { selectedColumns, whereClauses, selectedCollection, allowSensitiveColumns } = process;
</script>

<select bind:value={$whereClauses[$selectedCollection][i].mode}>
  {#each DB_QUERY_WHERE_MODES as mode (mode)}
    <option value={mode}>{WhereModeCaptions[mode]}</option>
  {/each}
</select>
