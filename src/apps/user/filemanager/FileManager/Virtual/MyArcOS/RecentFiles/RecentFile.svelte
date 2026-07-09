<script lang="ts">
  import type { IFileManagerRuntime } from "$interfaces/runtimes/IFileManagerRuntime";
  import type { IRecentFilesService } from "$interfaces/services/IRecentFilesService";
  import Icon from "$lib/Icon.svelte";
  import { Daemon, Fs, SysDispatch } from "$ts/env";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import { getItemNameFromPath, getParentDirectory } from "$ts/util/fs";
  import { onDestroy, onMount } from "svelte";

  let {
    path,
    service,
    process,
    selected = $bindable(),
  }: { path: string; service: IRecentFilesService; process: IFileManagerRuntime; selected: string } = $props();

  const icon = Daemon.assoc?.getFileAssociation(path)?.icon || "DefaultMimeIcon";
  const name = getItemNameFromPath(path);
  const parent = getParentDirectory(path);

  let driveIsMounted = $state<boolean>(true);
  let umountSubscriber = -1;
  let mountSubscriber = -1;

  function determineIsMounted() {
    try {
      Fs.getDriveByPath(path);
      driveIsMounted = true;
    } catch {
      driveIsMounted = false;
    }
  }

  onMount(() => {
    umountSubscriber = SysDispatch.subscribe("fs-umount-drive", () => determineIsMounted());
    mountSubscriber = SysDispatch.subscribe("fs-mount-drive", () => determineIsMounted());

    determineIsMounted();
  });

  onDestroy(() => {
    SysDispatch.unsubscribeId("fs-umount-drive", umountSubscriber);
    SysDispatch.unsubscribeId("fs-mount-drive", mountSubscriber);
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
  <Icon icon={icon ?? "DefaultMimeIcon"} />
  <span class="name" title={name}>{name}</span>
  <span class="path">{driveIsMounted ? "" : "(Not mounted) "}{parent}</span>
</button>
