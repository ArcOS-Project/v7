<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import ReportContent from "./BugHunt/ReportContent.svelte";
  import Sidebar from "./BugHunt/Sidebar.svelte";
  import type { BugHuntRuntime } from "./runtime";

  const { process }: { process: BugHuntRuntime } = $props();
  const { selectedReport, loading } = process;
</script>

<Sidebar {process} />
<div class="container">
  <CustomTitlebar {process} />
  <div class="report-content" class:loading={$loading}>
    {#if !$loading}
      {#if $selectedReport}
        <ReportContent {process} />
      {:else}
        No reprot
      {/if}
    {:else}
      <Spinner height={32} />
    {/if}
  </div>
  <div class="actionbar"></div>
</div>
