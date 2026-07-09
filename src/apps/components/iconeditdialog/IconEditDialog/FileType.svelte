<script lang="ts">
  import type { IIconEditDialogRuntime } from "$interfaces/runtimes/IIconEditDialogRuntime";
  import { Daemon } from "$ts/env";
  import { UploadIcon } from "$ts/images/general";
  import { UserPaths } from "$ts/user/store";

  const { process }: { process: IIconEditDialogRuntime } = $props();
  const { values, type } = process;

  async function browse() {
    const [path] = await Daemon!.files!.LoadSaveDialog({
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
    <input type="text" readonly value={$values[$type]} placeholder="Choose a file path" />
    <button class="lucide icon-folder-open" onclick={browse} aria-label="%" title="%fileType.buttonTitle%"></button>
  </div>
</div>
