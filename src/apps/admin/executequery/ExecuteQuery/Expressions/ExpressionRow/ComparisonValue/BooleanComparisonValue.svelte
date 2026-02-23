<script lang="ts">
  import type { ExecuteQueryRuntime } from "$apps/admin/executequery/runtime";

  const { process, i }: { process: ExecuteQueryRuntime; i: number } = $props();
  const { selectedSource, expressions } = process;
</script>

<label for="">
  <input type="checkbox" bind:checked={$expressions[$selectedSource][i].comparisonValue as boolean} />
  <span>{$expressions[$selectedSource][i].comparisonValue}</span>
</label>
