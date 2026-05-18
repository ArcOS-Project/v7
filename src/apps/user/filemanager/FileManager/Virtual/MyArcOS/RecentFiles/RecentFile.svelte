<script lang="ts">
  import type { FileManagerRuntime } from "$apps/user/filemanager/runtime";
  import { Daemon } from "$ts/daemon";
  import { Fs } from "$ts/env";
  import type { RecentFilesService } from "$ts/servicehost/services/RecentFilesSvc";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import { getItemNameFromPath, getParentDirectory } from "$ts/util/fs";
  import { onMount } from "svelte";

  let {
    path,
    service,
    process,
    selected = $bindable(),
  }: { path: string; service: RecentFilesService; process: FileManagerRuntime; selected: string } = $props();

  const icon = Daemon.icons?.getIconCached(Daemon.assoc?.getFileAssociation(path)?.icon || "DefaultMimeIcon");
  const name = getItemNameFromPath(path);
  const parent = getParentDirectory(path);

  let driveIsMounted = $state<boolean>(true);

  onMount(() => {
    try {
      Fs.getDriveByPath(path);
    } catch {
      driveIsMounted = false;
    }
  });
</script>

<button
  class="recent-file"
  class:selected={selected === path}
  onclick={() => (selected = path)}
  ondblclick={() => Daemon.files?.openFile(path)}
  disabled={!driveIsMounted}
  use:contextMenu={[
    [
      {
        caption: "Open file",
        icon: "rocket",
        action: () => {
          Daemon.files?.openFile(path);
        },
      },
      {
        caption: "Open file location",
        icon: "folder-open",
        action: () => {
          process.navigate(parent);
        },
      },
      { sep: true },
      {
        caption: "Remove from recents",
        icon: "x",
        action: () => {
          service.removeFromRecents(path);
        },
      },
    ],
    process,
  ]}
>
  <img src={icon} alt="" />
  <span class="name" title={name}>{name}</span>
  <span class="path">{driveIsMounted ? "" : "(Not mounted) "}{parent}</span>
</button>
