<script lang="ts">
  import type { AdminPortalRuntime } from "../../runtime";
  import type { ViewBugReportData } from "../../types";
  import Header from "./ViewBugReport/Header.svelte";
  import LeftPanel from "./ViewBugReport/LeftPanel.svelte";
  import RightPanel from "./ViewBugReport/RightPanel.svelte";

  const { process, data }: { process: AdminPortalRuntime; data: ViewBugReportData } = $props();
  const { report } = data;
</script>

<Header {data} {process} />
<div class="panels">
  <LeftPanel {report} {process} />
  <RightPanel {report} />
</div>
