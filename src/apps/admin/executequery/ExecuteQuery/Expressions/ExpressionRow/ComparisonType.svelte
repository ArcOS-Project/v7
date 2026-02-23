<script lang="ts">
  import type { ExecuteQueryRuntime } from "$apps/admin/executequery/runtime";
  import { QueryComparisonTypes } from "$apps/admin/executequery/store";

  const { process, i }: { process: ExecuteQueryRuntime; i: number } = $props();
  const { expressions, selectedSource } = process;
</script>

{#if $expressions[$selectedSource][i].columnName}
  <select class="comparison-type" bind:value={$expressions[$selectedSource][i].comparisonType}>
    {#each QueryComparisonTypes as value}
      <option {value} disabled={!value} selected={!value}>{value}</option>
    {/each}
  </select>
{/if}
