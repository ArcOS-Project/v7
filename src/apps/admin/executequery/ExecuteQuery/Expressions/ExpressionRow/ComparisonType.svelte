<script lang="ts">
  import type { ExecuteQueryRuntime } from "$apps/admin/executequery/runtime";
  import { QueryComparisonTypes } from "$apps/admin/executequery/store";
  import type { QueryExpression } from "$apps/admin/executequery/types";

  const { process, expression, i }: { process: ExecuteQueryRuntime; expression: QueryExpression; i: number } = $props();
  const { expressions, selectedSource } = process;
</script>

{#if expression.columnName}
  <select class="comparison-type" bind:value={$expressions[$selectedSource][i].comparisonType}>
    {#each QueryComparisonTypes as value}
      <option {value} disabled={!value} selected={!value}>{value}</option>
    {/each}
  </select>
{/if}
