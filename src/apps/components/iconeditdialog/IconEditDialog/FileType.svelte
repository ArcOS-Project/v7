<script lang="ts">
  import { UploadIcon } from "$ts/images/general";
  import { UserPaths } from "$ts/server/user/store";
  import type { IconEditDialogRuntime } from "../runtime";

  const { process }: { process: IconEditDialogRuntime } = $props();
  const { values, type } = process;

  async function browse() {
    const [path] = await process.userDaemon!.LoadSaveDialog({
      title: "%apps.IconEditDialog.fileType.loadSaveTitle%",
      extensions: [".svg", ".png", ".jpg", ".bmp", ".gif", ".jpeg"],
      icon: UploadIcon,
      startDir: UserPaths.Pictures,
    });

    if (path) $values[$type] = path;
  }
</script>

<div class="edit type-app">
  <h2>%fileType.title%</h2>
  <div class="input">
    <input type="text" readonly value={$values[$type]} />
    <button class="lucide icon-folder-open" onclick={browse} aria-label="%" title="%fileType.buttonTitle%"></button>
  </div>
</div>
