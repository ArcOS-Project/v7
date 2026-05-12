<script lang="ts">
  import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";

  const { process, i }: { process: IExecuteQueryRuntime; i: number } = $props();
  const { selectedSource, expressions } = process;
</script>

<input class="comparison-value" bind:value={$expressions[$selectedSource][i].comparisonValue} placeholder="Value..." />
