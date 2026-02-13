<script lang="ts">
  import type { ViewBugReportData } from "$apps/admin/adminportal/types";
  import type { IAdminPortalRuntime } from "$interfaces/admin";

  const { data, process }: { data: ViewBugReportData; process: IAdminPortalRuntime } = $props();
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
