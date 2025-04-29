<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { ViewBugReportData } from "$apps/admin/adminportal/types";
  import { MessageBox } from "$ts/dialog";
  import { MemoryIcon } from "$ts/images/general";

  const { data, process }: { data: ViewBugReportData; process: AdminPortalRuntime } = $props();
  const { report } = data;

  function copy() {
    MessageBox(
      {
        title: "Copy Report...",
        message: `Please be so kind to choose how to copy Bug Report ${report._id} to your clipboard. Click Cancel to leave the clipboard untouched.`,
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Copy full report",
            action: () => {
              navigator.clipboard.writeText(JSON.stringify(report, null, 2));
            },
          },
          {
            caption: "Copy ID",
            action: () => {
              navigator.clipboard.writeText(report._id!);
            },
            suggested: true,
          },
        ],
        image: MemoryIcon,
        sound: "arcos.dialog.info",
      },
      process.pid,
      true,
    );
  }
</script>

<button class="lucide icon-share" aria-label="Copy..." title="Copy..." onclick={copy}></button>
