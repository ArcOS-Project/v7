<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { ViewBugReportData } from "$apps/admin/adminportal/types";
  import { Fs } from "$ts/env";
  import { Daemon } from "$ts/server/user/daemon";
  import { UserPaths } from "$ts/server/user/store";
  import { textToBlob } from "$ts/util/convert";
  import { getItemNameFromPath } from "$ts/util/fs";

  const { data, process }: { data: ViewBugReportData; process: AdminPortalRuntime } = $props();
  const { report } = data;

  async function download() {
    const [path] = await Daemon()!.files!.LoadSaveDialog({
      isSave: true,
      title: "Choose where to export the report to",
      icon: "SaveIcon",
      startDir: UserPaths.Documents,
      extensions: [".json"],
      saveName: `Report-${report._id}.json`,
    });

    if (!path) return;

    const prog = await Daemon()!.files!.FileProgress(
      {
        type: "size",
        icon: "SaveIcon",
        caption: "Exporting report...",
        subtitle: `${getItemNameFromPath(path)}`,
      },
      process.pid
    );

    try {
      await Fs().writeFile(path, textToBlob(JSON.stringify(report, null, 2)), (progress) => {
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
