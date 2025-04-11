<script lang="ts">
  import CustomTitlebar from "$lib/CustomTitlebar.svelte";
  import type { BugReport } from "$types/bughunt";
  import dayjs from "dayjs";
  import ActionBar from "./BugHunt/ActionBar.svelte";
  import Loading from "./BugHunt/Loading.svelte";
  import ReportContent from "./BugHunt/ReportContent.svelte";
  import NoPrivates from "./BugHunt/ReportContent/NoPrivates.svelte";
  import NoReport from "./BugHunt/ReportContent/NoReport.svelte";
  import Sidebar from "./BugHunt/Sidebar.svelte";
  import type { BugHuntRuntime } from "./runtime";

  const { process }: { process: BugHuntRuntime } = $props();
  const { selectedReport, loading, store } = process;

  let report = $state<BugReport | undefined>();
  let date = $state<string>();
  let time = $state<string>();

  selectedReport.subscribe((v) => {
    report = $store.filter((r) => r._id === v)[0];

    if (report) {
      date = dayjs(report.createdAt).format("D MMMM YYYY");
      time = dayjs(report.createdAt).format("HH:mm:ss");
    }
  });
</script>

<Sidebar {process} />
<div class="container" class:full={!$loading && !$store.length}>
  <CustomTitlebar {process} />
  <div class="report-content" class:loading={$loading}>
    {#if !$loading}
      {#if !$store.length}
        <NoPrivates {process} />
      {:else if $selectedReport}
        <ReportContent {process} {report} {date} {time} />
      {:else}
        <NoReport />
      {/if}
    {:else}
      <Loading />
    {/if}
  </div>
  {#if $selectedReport && !$loading}
    <ActionBar {process} {report} />
  {/if}
</div>
