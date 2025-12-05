<script lang="ts">
  import type { ExecuteQueryRuntime } from "$apps/admin/executequery/runtime";
  import type { QueryExpression } from "$apps/admin/executequery/types";
  import { tryJsonParse } from "$ts/json";

  const { process, expression, i }: { process: ExecuteQueryRuntime; expression: QueryExpression; i: number } = $props();
  const { selectedSource, expressions } = process;
  const { comparisonValue, comparisonType } = expression;
</script>

<input
  class="comparison-value"
  bind:value={$expressions[$selectedSource][i].comparisonValue}
  placeholder="Hierarchy..."
  title={JSON.stringify(tryJsonParse(comparisonValue))}
/>
<p>{comparisonType}</p>
<input class="hierarchy-value" bind:value={$expressions[$selectedSource][i].hierarchyValue} placeholder="Value..." />
