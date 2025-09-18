<script lang="ts">
  import { formatBytes, join } from "$ts/util/fs";
  import type { FileEntry } from "$types/fs";
  import type { ArcShortcut } from "$types/shortcut";
  import { onMount } from "svelte";
  import type { WallpaperRuntime } from "../../runtime";
  import DesktopIcon from "../DesktopIcon.svelte";

  const { process, file, i }: { process: WallpaperRuntime; file: FileEntry; i: number } = $props();
  const { shortcuts } = process;

  const path = join(process.directory, file.name);
  const size = formatBytes(file.size);
  let shortcut = $state<ArcShortcut>();
  let icon = $state<string>();
  let render = $state<boolean>(false);
  let shortcutIcon = $state<string>();

  onMount(async () => {
    const info = process.userDaemon?.assoc?.getFileAssociation(file.name);
    shortcut = $shortcuts[file.name];
    if (shortcut) shortcutIcon = process.getIconCached(shortcut.icon);
    icon = info?.icon || process.getIconCached("DefaultMimeIcon");
    if (info?.friendlyName === "Image file") icon = (await process.userDaemon?.getThumbnailFor(path)) || icon;
    render = true;
  });
</script>

{#if render}
  <DesktopIcon
    {process}
    caption={shortcut?.name || file.name}
    icon={(shortcut ? shortcutIcon : icon) || process.getIconCached("DefaultMimeIcon")}
    alt={shortcut
      ? `Target: ${shortcut.target}\nType: Shortcut (${shortcut.type})`
      : `Location: ${path}\nType: ${file.mimeType}\nSize: ${size}`}
    identifier={file.itemId}
    cornerIcon={shortcut ? "arrow-up-right" : ""}
    contextMenu={shortcut ? "shortcut-icon" : "file-icon"}
    props={[file, path, shortcut]}
    action={() => {
      process.userDaemon?.openFile(path, shortcut);
    }}
    {i}
  />
{/if}
