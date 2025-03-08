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

  onMount(() => {
    shortcut = $shortcuts[file.name];
    icon = process.userDaemon?.getMimeIconByFilename(file.name);
  });
</script>

<DesktopIcon
  {process}
  caption={shortcut?.name || file.name}
  icon={(shortcut ? getIconPath(shortcut.icon) : icon) || DefaultMimeIcon}
  alt={shortcut
    ? `Target: ${shortcut.target}\nType: Shortcut (${shortcut.type})`
    : `Location: ${path}\nType: ${file.mimeType}\nSize: ${size}`}
  identifier={file.itemId}
  cornerIcon={shortcut ? "arrow-up-right" : ""}
  action={() => {
    process.userDaemon?.openFile(path, shortcut);
  }}
/>
