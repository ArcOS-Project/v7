<script lang="ts">
  import { QueryComparisonTypes } from "$apps/admin/executequery/types";
  import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";

  const { process, i }: { process: IExecuteQueryRuntime; i: number } = $props();
  const { expressions, selectedSource } = process;
</script>

{#if $expressions[$selectedSource][i].columnName}
  <select
    class="comparison-type"
    bind:value={$expressions[$selectedSource][i].comparisonType}
    onchange={() => ($expressions[$selectedSource][i].comparisonValue = undefined)}
  >
    {#each QueryComparisonTypes as value}
      <option {value} disabled={!value} selected={!value}>{value}</option>
    {/each}
  </select>
{/if}
