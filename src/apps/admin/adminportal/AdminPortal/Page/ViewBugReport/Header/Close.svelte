<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { ViewBugReportData } from "$apps/admin/adminportal/types";
  import Spinner from "$lib/Spinner.svelte";
  import { MessageBox } from "$ts/dialog";

  const { process, data }: { process: AdminPortalRuntime; data: ViewBugReportData } = $props();
  const { report } = data;

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
            action: () => {},
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
              process.switchPage("bughunt");
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
