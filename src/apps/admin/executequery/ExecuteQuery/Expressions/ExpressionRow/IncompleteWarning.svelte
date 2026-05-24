<script lang="ts">
  import type { IExecuteQueryRuntime } from "$interfaces/runtimes/IExecuteQueryRuntime";
  import Icon from "$lib/Icon.svelte";

  const { process, i }: { process: IExecuteQueryRuntime; i: number } = $props();
  const { process, i }: { process: IExecuteQueryRuntime; i: number } = $props();
  const { expressions, selectedSource } = process;
</script>

{#if $expressions[$selectedSource][i].columnName == undefined || $expressions[$selectedSource][i].comparisonType == undefined || $expressions[$selectedSource][i].comparisonValue == undefined}
  <Icon title="This expression is incomplete" icon="WarningIcon" />
{/if}
