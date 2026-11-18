<script lang="ts">
  import type { INewExecuteQueryRuntime } from "$interfaces/runtimes/INewExecuteQueryRuntime";
  import { DB_QUERY_WHERE_MODES, WhereModeCaptions } from "$types/server/admin";

  let { process, i }: { process: INewExecuteQueryRuntime; i: number } = $props();
  const { whereClauses, selectedCollection } = process;

  function onchange() {
    $whereClauses[$selectedCollection][i].value = $whereClauses[$selectedCollection][i].mode === "isBoolean" ? false : undefined;
  }
</script>

<select bind:value={$whereClauses[$selectedCollection][i].mode} {onchange}>
  {#each DB_QUERY_WHERE_MODES as mode (mode)}
    <option value={mode}>{WhereModeCaptions[mode]}</option>
  {/each}
</select>
