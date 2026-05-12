<script lang="ts">
  import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";

  const { process, i }: { process: IExecuteQueryRuntime; i: number } = $props();
  const { selectedSource, expressions } = process;
</script>

<label for="">
  <input type="checkbox" bind:checked={$expressions[$selectedSource][i].comparisonValue as boolean} />
  <span>{$expressions[$selectedSource][i].comparisonValue}</span>
</label>
