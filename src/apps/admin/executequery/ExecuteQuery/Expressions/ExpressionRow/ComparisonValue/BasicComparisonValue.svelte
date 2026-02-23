<script lang="ts">
  import type { ExecuteQueryRuntime } from "$apps/admin/executequery/runtime";

  const { process, i }: { process: ExecuteQueryRuntime; i: number } = $props();
  const { selectedSource, expressions } = process;
</script>

<input class="comparison-value" bind:value={$expressions[$selectedSource][i].comparisonValue} placeholder="Value..." />
