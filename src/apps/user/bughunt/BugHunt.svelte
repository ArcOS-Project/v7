<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import Loading from "./BugHunt/Loading.svelte";
  import ReportContent from "./BugHunt/ReportContent.svelte";
  import NoPrivates from "./BugHunt/ReportContent/NoPrivates.svelte";
  import NoReport from "./BugHunt/ReportContent/NoReport.svelte";
  import Sidebar from "./BugHunt/Sidebar.svelte";
  import type { BugHuntRuntime } from "./runtime";

  const { process }: { process: BugHuntRuntime } = $props();
  const { selectedReport, loading, store } = process;
</script>

<Sidebar {process} />
<div class="container" class:full={!$loading && !$store.length}>
  <CustomTitlebar {process} />
  <div class="report-content" class:loading={$loading}>
    {#if !$loading}
      {#if !$store.length}
        <NoPrivates {process} />
      {:else if $selectedReport}
        <ReportContent {process} />
      {:else}
        <NoReport />
      {/if}
    {:else}
      <Loading />
    {/if}
  </div>
  {#if $selectedReport && !$loading}
    <div class="actionbar"></div>
  {/if}
</div>
