<script lang="ts">
  import type { ExecuteQueryRuntime } from "$apps/admin/executequery/runtime";

  const { process, i }: { process: ExecuteQueryRuntime; i: number } = $props();
  const { expressions, selectedSource } = process;
</script>

{#if $expressions[$selectedSource][i].columnName == undefined || $expressions[$selectedSource][i].comparisonType == undefined || $expressions[$selectedSource][i].comparisonValue == undefined}
  <img src={process.getIconCached("WarningIcon")} alt="" title="This expression is incomplete" />
{/if}
