<script lang="ts">
  import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";
  import { tryJsonParse } from "$ts/util/json";

  const { process, i }: { process: IExecuteQueryRuntime; i: number } = $props();
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
