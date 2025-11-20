<script lang="ts">
  import { Env } from "$ts/env";
  import { join } from "$ts/util/fs";
  import type { FolderEntry } from "$types/fs";
  import type { WallpaperRuntime } from "../../runtime";
  import DesktopIcon from "../DesktopIcon.svelte";

  const { process, folder, i }: { process: WallpaperRuntime; folder: FolderEntry; i: number } = $props();

  const path = join(process.directory, folder.name);
</script>

{#if path}
  <DesktopIcon
    {process}
    identifier={folder.itemId}
    caption={folder.name}
    alt={`Location: ${path}`}
    props={[folder, path]}
    contextMenu="folder-icon"
    icon={process.getIconCached("FolderIcon")}
    action={() => process.spawnApp("fileManager", +Env().get("shell_pid"), path)}
    {i}
  />
{/if}
