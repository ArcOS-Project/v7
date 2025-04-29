<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { ViewBugReportData } from "$apps/admin/adminportal/types";
  import { textToBlob } from "$ts/fs/convert";
  import { getDirectoryName } from "$ts/fs/util";
  import { SaveIcon } from "$ts/images/general";

  const { data, process }: { data: ViewBugReportData; process: AdminPortalRuntime } = $props();
  const { report } = data;

  async function download() {
    const [path] = await process.userDaemon!.LoadSaveDialog({
      isSave: true,
      title: "Choose where to export the report to",
      icon: SaveIcon,
      startDir: "U:/",
      extensions: [".json"],
      saveName: `Report-${report._id}.json`,
    });

    if (!path) return;

    const prog = await process.userDaemon!.FileProgress(
      {
        type: "size",
        waiting: true,
        icon: SaveIcon,
        caption: "Exporting report...",
        subtitle: `${getDirectoryName(path)}`,
      },
      process.pid,
    );

    await process.fs.writeFile(path, textToBlob(JSON.stringify(report, null, 2)), (progress) => {
      prog.show();
      prog.setMax(progress.max);
      prog.setDone(progress.value);
      prog.setWait(false);
      prog.setWork(true);
    });

    prog.stop();
  }
</script>

<button class="lucide icon-download" aria-label="Download report" title="Download report" onclick={download}></button>
