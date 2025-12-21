<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { ViewBugReportData } from "$apps/admin/adminportal/types";

  const { data, process }: { data: ViewBugReportData; process: AdminPortalRuntime } = $props();
  const { report } = data;
</script>

<button
  class="lucide icon-shopping-bag"
  aria-label="View store item"
  title="View store item"
  disabled={!report.reportAppPkgId}
  onclick={() => process.switchPage("viewStoreItem", { id: report.reportAppPkgId })}
></button>
