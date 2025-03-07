<script lang="ts">
  import { join } from "$ts/fs/util";
  import { FolderIcon } from "$ts/images/filesystem";
  import type { FolderEntry } from "$types/fs";
  import type { WallpaperRuntime } from "../../runtime";
  import DesktopIcon from "../DesktopIcon.svelte";

  const {
    process,
    folder,
  }: { process: WallpaperRuntime; folder: FolderEntry } = $props();

  const path = join(process.directory, folder.name);
</script>

<DesktopIcon
  {process}
  identifier={folder.itemId}
  caption={folder.name}
  alt={`Location: ${path}`}
  icon={FolderIcon}
  action={() => process.spawnApp("fileManager", process.pid, path)}
/>
