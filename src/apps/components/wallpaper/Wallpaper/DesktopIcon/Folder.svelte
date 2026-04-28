<script lang="ts">
  import type { IWallpaperRuntime } from "$interfaces/runtimes/IWallpaperRuntime";
  import { Env, Fs } from "$ts/env";
  import { join } from "$ts/util/fs";
  import type { FolderEntry } from "$types/fs";
  import DesktopIcon from "../DesktopIcon.svelte";

  const { process, folder, i }: { process: IWallpaperRuntime; folder: FolderEntry; i: number } = $props();

  const path = join(process.directory, folder.name);
  const proxy = Fs.tryGetProxyInfo(path, true);
</script>

{#if path}
  <DesktopIcon
    {process}
    identifier={folder.itemId}
    caption={proxy?.displayName ?? folder.name}
    alt={`Location: ${path}`}
    props={[folder, path]}
    contextMenu="folder-icon"
    icon={process.getIconCached("FolderIcon")}
    action={() => process.spawnApp("fileManager", +Env.get("shell_pid"), path)}
    {i}
  />
{/if}
