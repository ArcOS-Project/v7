<script lang="ts">
  import { contextProps } from "$ts/context/actions.svelte";
  import type { FilesystemDrive } from "$ts/fs/drive";
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
    process.unmountDrive(drive, id);
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
