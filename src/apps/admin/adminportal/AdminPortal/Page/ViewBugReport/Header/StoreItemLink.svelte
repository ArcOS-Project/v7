<script lang="ts">
  import type { ViewBugReportData } from "$apps/admin/adminportal/types";
  import type { IAdminPortalRuntime } from "$interfaces/admin";

  const { data, process }: { data: ViewBugReportData; process: IAdminPortalRuntime } = $props();
  const { report } = data;
</script>

<button
  class="lucide icon-shopping-bag"
  aria-label="View store item"
  title="View store item"
  disabled={!report.reportAppPkgId}
  onclick={() => process.switchPage("viewStoreItem", { id: report.reportAppPkgId })}
></button>
