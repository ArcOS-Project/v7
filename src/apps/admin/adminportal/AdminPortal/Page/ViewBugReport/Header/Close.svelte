<script lang="ts">
  import type { ViewBugReportData } from "$apps/admin/adminportal/types";
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import Spinner from "$lib/Spinner.svelte";
  import { MessageBox } from "$ts/dialog";

  const { process, data }: { process: IAdminPortalRuntime; data: ViewBugReportData } = $props();
  const { report, quickView } = data;

  let loading = $state(false);

  async function close() {
    loading = true;
    MessageBox(
      {
        title: report.closed ? "Confirm Reopen?" : "Confirm Close?",
        message: report.closed ? "Are you sure you want to reopen this report?" : "Are you sure you want to close this report?",
        buttons: [
          {
            caption: "Abort!",
            action: () => {
              loading = false;
            },
          },
          {
            caption: "Continue",
            action: async () => {
              if (report.closed) {
                await process.admin.reopenBugReport(report._id!);
                report.closed = false;
                process.switchPage("viewBugReport", { id: report._id }, true);

                return;
              }

              await process.admin.closeBugReport(report._id!);

              if ($quickView) $quickView = "";
              else process.switchPage("bughunt");
            },
            suggested: true,
          },
        ],
        image: "QuestionIcon",
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }
</script>

<button class="close" onclick={close} class:closed={report.closed} disabled={loading}>
  {#if !loading}
    {report.closed ? "Reopen" : "Close"}
  {:else}
    <Spinner height={16} />
  {/if}
</button>
