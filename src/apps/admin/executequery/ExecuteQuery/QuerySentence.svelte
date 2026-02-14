<script lang="ts">
  import { tryJsonStringify } from "$ts/util/json";
  /**
   * This is a messy file. Yes.
   */
  import type { ExecuteQueryRuntime } from "../runtime";

  const { process }: { process: ExecuteQueryRuntime } = $props();
  const { selectedSource, expressions } = process;
</script>

<div class="query-sentence">
  Selecting from <b>{$selectedSource}</b>
  {#each $expressions[$selectedSource] as expression, i}
    {#if expression.columnName && expression.comparisonType && expression.comparisonValue !== undefined && expression.comparisonValue !== null}
      {#if i}, and{/if} where
      {#if expression.hierarchyValue}
        address <b>{expression.comparisonValue}</b> of <b>{expression.columnName}</b>
        {expression.comparisonType}
        <b>{tryJsonStringify(expression.hierarchyValue, 0)}</b>
      {:else}
        <b>{expression.columnName}</b> {expression.comparisonType} <b>{tryJsonStringify(expression.comparisonValue, 0)}</b>
      {/if}
    {/if}
  {/each}.
</div>
