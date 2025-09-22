<script lang="ts">
  import { UploadIcon } from "$ts/images/general";
  import { UserPaths } from "$ts/server/user/store";
  import type { IconEditDialogRuntime } from "../runtime";

  const { process }: { process: IconEditDialogRuntime } = $props();
  const { values, type } = process;

  async function browse() {
    const [path] = await process.userDaemon!.LoadSaveDialog({
      title: "Choose an icon to load",
      extensions: [".svg", ".png", ".jpg", ".bmp", ".gif", ".jpeg"],
      icon: UploadIcon,
      startDir: UserPaths.Pictures,
    });

    if (path) $values[$type] = path;
  }
</script>

<div class="edit type-app">
  <h2>File path:</h2>
  <div class="input">
    <input type="text" readonly value={$values[$type]} />
    <button class="lucide icon-folder-open" onclick={browse} aria-label="Choose file" title="Choose file"></button>
  </div>
</div>
