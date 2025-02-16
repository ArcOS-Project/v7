<script lang="ts">
  import { contextProps } from "$ts/context/actions.svelte";
  import { MessageBox } from "$ts/dialog";
  import type { FilesystemDrive } from "$ts/fs/drive";
  import { DriveIcon } from "$ts/images/filesystem";
  import type { FileManagerRuntime } from "../../runtime";

  const {
    process,
    drive,
    id,
  }: { process: FileManagerRuntime; drive: FilesystemDrive; id: string } =
    $props();

  const { path } = process;

  let identifier = `${drive.driveLetter || drive.uuid}:`;

  function unmount() {
    MessageBox(
      {
        title: `Unmount ${drive.label || identifier}`,
        message: `Are you sure you want to unmount this drive?`,
        buttons: [
          { caption: "Cancel", action: () => {} },
          {
            caption: "Unmount",
            action: async () => {
              await process.fs.umountDrive(id);
            },
            suggested: true,
          },
        ],
        image: DriveIcon,
        sound: "arcos.dialog.warning",
      },
      process.pid,
      true
    );
  }
</script>

<button
  class="drive"
  onclick={() => process.navigate(`${identifier}/`)}
  class:selected={$path.startsWith(`${identifier}/`)}
  data-contextmenu="sidebar-drive"
  use:contextProps={[drive, identifier, unmount]}
>
  <span class="lucide icon-hard-drive"></span>
  <span>
    {drive.driveLetter ? `${drive.label} (${drive.driveLetter}:)` : drive.label}
  </span>
</button>
