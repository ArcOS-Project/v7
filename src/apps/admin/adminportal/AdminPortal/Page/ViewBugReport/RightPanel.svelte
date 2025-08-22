<script lang="ts">
  import { stringifyLogs } from "$apps/admin/adminportal/util";
  import type { BugReport } from "$types/bughunt";

  const { report }: { report: BugReport } = $props();
  const tabs = ["meta", "location", "log"];

  let selected = $state("log");
</script>

<div class="rightpanel">
  <div class="tabs">
    {#each tabs as tab}
      <button class:selected={selected === tab} onclick={() => (selected = tab)}>{tab.toUpperCase()}</button>
    {/each}
  </div>
  {#if selected === "meta"}
    <div class="value meta">{JSON.stringify(report.meta, null, 2)}</div>
  {:else if selected === "location"}
    <div class="value location">{JSON.stringify(report.location, null, 2)}</div>
  {:else if selected === "log" && report.logs.length}
    <div class="value logs">{stringifyLogs(report.logs)}</div>
  {:else}
    <div class="value no-data">NO_DATA</div>
  {/if}
</div>
