<script lang="ts">
  import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";

  const { process, i }: { process: IExecuteQueryRuntime; i: number } = $props();
  const { expressions, selectedSource } = process;
</script>

{#if $expressions[$selectedSource][i].columnName == undefined || $expressions[$selectedSource][i].comparisonType == undefined || $expressions[$selectedSource][i].comparisonValue == undefined}
  <img src={process.getIconCached("WarningIcon")} alt="" title="This expression is incomplete" />
{/if}
