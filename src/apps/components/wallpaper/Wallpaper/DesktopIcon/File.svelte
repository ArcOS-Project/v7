<script lang="ts">
  import { formatBytes, join } from "$ts/fs/util";
  import { getIconPath } from "$ts/images";
  import { DefaultMimeIcon } from "$ts/images/mime";
  import type { FileEntry } from "$types/fs";
  import type { ArcShortcut } from "$types/shortcut";
  import { onMount } from "svelte";
  import type { WallpaperRuntime } from "../../runtime";
  import DesktopIcon from "../DesktopIcon.svelte";

  const { process, file }: { process: WallpaperRuntime; file: FileEntry } = $props();
  const { shortcuts } = process;

  const path = join(process.directory, file.name);
  const size = formatBytes(file.size);
  let shortcut = $state<ArcShortcut>();
  let icon = $state<string>();
  let render = $state<boolean>(false);

  onMount(() => {
    const info = process.userDaemon?.assoc?.getFileAssociation(file.name);
    shortcut = $shortcuts[file.name];
    icon = info?.icon || DefaultMimeIcon;
    render = true;
  });
</script>

{#if render}
  <DesktopIcon
    {process}
    caption={shortcut?.name || file.name}
    icon={(shortcut ? getIconPath(shortcut.icon) : icon) || DefaultMimeIcon}
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
  />
{/if}
