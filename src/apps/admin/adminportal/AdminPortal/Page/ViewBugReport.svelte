<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import type { ViewBugReportData } from "../../types";
  import Header from "./ViewBugReport/Header.svelte";
  import LeftPanel from "./ViewBugReport/LeftPanel.svelte";
  import RightPanel from "./ViewBugReport/RightPanel.svelte";

  const { process, data }: { process: IAdminPortalRuntime; data: ViewBugReportData } = $props();
  const { report } = data;
</script>

{#if report}
  <Header {data} {process} />
  <div class="panels">
    <LeftPanel {report} {process} />
    <RightPanel {report} />
  </div>
{:else}
  <p class="error-text">REPORT_NOT_FOUND</p>
{/if}
