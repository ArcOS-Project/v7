<script lang="ts">
  import type { BugReport } from "$types/bughunt";
  import type { BugHuntRuntime } from "../runtime";

  const { process }: { process: BugHuntRuntime } = $props();
  const { selectedReport, store } = process;

  let report = $state<BugReport | undefined>();

  selectedReport.subscribe((v) => {
    report = $store.filter((r) => r._id === v)[0];
  });
</script>

{#if report}
  {report.title}
{:else}
  Report not found
{/if}
