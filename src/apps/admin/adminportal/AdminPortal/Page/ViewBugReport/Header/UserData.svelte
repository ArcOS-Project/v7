<script lang="ts">
  import type { ViewBugReportData } from "$apps/admin/adminportal/types";
  import type { IAdminPortalRuntime } from "$interfaces/admin";

  const { data, process }: { data: ViewBugReportData; process: IAdminPortalRuntime } = $props();
  const { report } = data;

  async function download() {
    process.spawnOverlay("userdata", report.userData);
  }
</script>

<button
  class="lucide icon-braces"
  aria-label="View user data"
  title="View user data"
  disabled={!report.userData}
  onclick={download}
></button>
