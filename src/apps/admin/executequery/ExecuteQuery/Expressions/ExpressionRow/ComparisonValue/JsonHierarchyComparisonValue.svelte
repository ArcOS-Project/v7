<script lang="ts">
  import type { ExecuteQueryRuntime } from "$apps/admin/executequery/runtime";
  import { tryJsonParse } from "$ts/json";

  const { process, i }: { process: ExecuteQueryRuntime; i: number } = $props();
  const { selectedSource, expressions } = process;
</script>

<input
  class="comparison-value"
  bind:value={$expressions[$selectedSource][i].comparisonValue}
  placeholder="Hierarchy..."
  title={JSON.stringify(tryJsonParse($expressions[$selectedSource][i].comparisonValue))}
/>
<p>{$expressions[$selectedSource][i].comparisonType}</p>
<input class="hierarchy-value" bind:value={$expressions[$selectedSource][i].hierarchyValue} placeholder="Value..." />
