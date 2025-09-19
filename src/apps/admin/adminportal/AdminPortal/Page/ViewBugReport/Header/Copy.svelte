<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { ViewBugReportData } from "$apps/admin/adminportal/types";
  import { MessageBox } from "$ts/dialog";
  import type { MessageCreateData } from "$types/messaging";

  const { data, process }: { data: ViewBugReportData; process: AdminPortalRuntime } = $props();
  const { report } = data;

  function share() {
    MessageBox(
      {
        title: "Share Report...",
        message: `You're about to perform a potentially dangerous operation. Do not share this report with a non-admin! We don't want to leak sensitive data of our users. How do you want to share this report?`,
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Send...",
            action: () => {
              const message: MessageCreateData = {
                title: `Report ${report._id}`,
                body: `Please refer to the below bug report.\n\n[arc://admin_bugrep?id=${report._id}](arc://admin_bugrep?id=${report._id})`,
                attachments: [],
                recipients: [],
              };
              process.spawnOverlayApp("MessageComposer", process.pid, message);
            },
          },
          {
            caption: "Copy JSON",
            action: () => {
              navigator.clipboard.writeText(JSON.stringify(report, null, 2));
            },
          },
          {
            caption: "Copy ID",
            action: () => {
              navigator.clipboard.writeText(report._id!);
            },
          },
          {
            caption: "Copy Proto",
            action: () => {
              navigator.clipboard.writeText(
                `[\`${report._id}\`](https://v7.izkuipers.nl/?proto=arc://admin_bugrep?id=${report._id})`
              );
            },
            suggested: true,
          },
        ],
        image: "MemoryIcon",
        sound: "arcos.dialog.info",
      },
      process.pid,
      true
    );
  }
</script>

<button class="lucide icon-share-2" aria-label="Share..." title="Share..." onclick={share}></button>
