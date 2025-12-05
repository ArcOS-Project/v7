<script lang="ts">
  import type { ExecuteQueryRuntime } from "$apps/admin/executequery/runtime";
  import type { QueryExpression } from "$apps/admin/executequery/types";

  const { process, expression, i }: { process: ExecuteQueryRuntime; expression: QueryExpression; i: number } = $props();
  const { selectedSource, expressions } = process;
  const { comparisonValue } = expression;
</script>

<label for="">
  <input type="checkbox" bind:checked={$expressions[$selectedSource][i].comparisonValue as boolean} />
  <span>{comparisonValue}</span>
</label>
