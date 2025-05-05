<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { ViewBugReportData } from "$apps/admin/adminportal/types";

  const { data, process }: { data: ViewBugReportData; process: AdminPortalRuntime } = $props();
  const { report } = data;

  async function logs() {
    process.spawnOverlayApp("logging", process.pid, "", "all", report.logs);
  }
</script>

<button
  class="lucide icon-scroll-text"
  aria-label="Open log archive"
  title="Open log archive"
  disabled={!report.logs.length}
  onclick={logs}
></button>
