<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { ViewBugReportData } from "$apps/admin/adminportal/types";
  import Spinner from "$lib/Spinner.svelte";
  import { MessageBox } from "$ts/dialog";

  const { process, data }: { process: AdminPortalRuntime; data: ViewBugReportData } = $props();
  const { report } = data;

  let loading = $state(false);

  async function deleteReport() {
    MessageBox(
      {
        title: "Confirm Delete?",
        message:
          "Are you really, really REALLY sure you want to delete this report? It may be a smarter option to simply close it as this action CANNOT be reverted.",
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Delete",
            action: () => {
              process.admin.deleteBugReport(report._id!);
              process.switchPage("bughunt");
            },
            suggested: true,
          },
        ],
        image: "WarningIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }
</script>

<button class="delete" disabled={loading} onclick={deleteReport}>
  {#if !loading}
    Delete
  {:else}
    <Spinner height={16} />
  {/if}
</button>
