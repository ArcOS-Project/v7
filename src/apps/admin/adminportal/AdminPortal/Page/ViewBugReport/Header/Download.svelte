<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { ViewBugReportData } from "$apps/admin/adminportal/types";
  import { textToBlob } from "$ts/fs/convert";
  import { getItemNameFromPath } from "$ts/fs/util";
  import { SaveIcon } from "$ts/images/general";
  import { UserPaths } from "$ts/server/user/store";

  const { data, process }: { data: ViewBugReportData; process: AdminPortalRuntime } = $props();
  const { report } = data;

  async function download() {
    const [path] = await process.userDaemon!.LoadSaveDialog({
      isSave: true,
      title: "Choose where to export the report to",
      icon: SaveIcon,
      startDir: UserPaths.Documents,
      extensions: [".json"],
      saveName: `Report-${report._id}.json`,
    });

    if (!path) return;

    const prog = await process.userDaemon!.FileProgress(
      {
        type: "size",
        icon: SaveIcon,
        caption: "Exporting report...",
        subtitle: `${getItemNameFromPath(path)}`,
      },
      process.pid
    );

    try {
      await process.fs.writeFile(path, textToBlob(JSON.stringify(report, null, 2)), (progress) => {
        prog.show();
        prog.setMax(progress.max);
        prog.setDone(progress.value);
      });
    } catch {
      // silently error
    }

    prog.stop();
  }
</script>

<button class="lucide icon-download" aria-label="Download report" title="Download report" onclick={download}></button>
