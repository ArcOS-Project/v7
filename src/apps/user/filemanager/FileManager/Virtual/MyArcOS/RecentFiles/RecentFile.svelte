<script lang="ts">
  import type { FileManagerRuntime } from "$apps/user/filemanager/runtime";
  import { contextMenu } from "$ts/context/actions.svelte";
  import { Daemon } from "$ts/server/user/daemon";
  import type { RecentFilesService } from "$ts/server/user/recents";
  import { getItemNameFromPath, getParentDirectory } from "$ts/util/fs";

  let {
    path,
    service,
    process,
    selected = $bindable(),
  }: { path: string; service: RecentFilesService; process: FileManagerRuntime; selected: string } = $props();

  const icon = Daemon.icons?.getIconCached(Daemon.assoc?.getFileAssociation(path)?.icon || "DefaultMimeIcon");
  const name = getItemNameFromPath(path);
  const parent = getParentDirectory(path);
</script>

<button
  class="recent-file"
  class:selected={selected === path}
  onclick={() => (selected = path)}
  ondblclick={() => Daemon.files?.openFile(path)}
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
  <span class="path">{parent}</span>
</button>
