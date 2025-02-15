<script lang="ts">
  import { FilesystemDrive } from "$ts/fs/drive";
  import { join } from "$ts/fs/util";
  import { FolderIcon } from "$ts/images/filesystem";
  import type { FolderEntry } from "$types/fs";
  import type { FileManagerRuntime } from "../runtime";

  const { process }: { process: FileManagerRuntime } = $props();
  const { path } = process;

  let folders = $state<FolderEntry[]>([]);
  let drives = $state<FilesystemDrive[]>([]);

  $effect(() => {
    process.globalDispatch.subscribe("fs-flush-folder", ([path]) => {
      if (path && path.startsWith("U:")) {
        updateHomeFolders();
      }
    });

    process.globalDispatch.subscribe("fs-umount-drive", updateDrives);
    process.globalDispatch.subscribe("fs-mount-drive", updateDrives);

    updateDrives();
    updateHomeFolders();
  });

  function updateDrives() {
    drives = Object.values(process.fs.drives);
  }

  async function updateHomeFolders() {
    try {
      const root = await process.fs.readDir("U:/");

      folders = root?.dirs || [];
    } catch {
      folders = [];
    }
  }
</script>

<div class="sidebar">
  <section>
    <h1>Your Places</h1>
    {#each folders as folder}
      <button
        class="folder"
        onclick={() => process.navigate(`U:/${folder.name}`)}
        class:selected={$path.startsWith(`U:/${folder.name}`)}
      >
        <img src={FolderIcon} alt="" />
        <span>{folder.name}</span>
      </button>
    {/each}
  </section>
  <section>
    <h1>Drives</h1>
    {#each drives as drive}
      <button
        class="drive"
        onclick={() => process.navigate(`${drive.driveLetter || drive.uuid}:/`)}
        class:selected={$path.startsWith(
          `${drive.driveLetter || drive.uuid}:/`
        )}
      >
        <span class="lucide icon-hard-drive"></span>
        <span>
          {drive.driveLetter
            ? `${drive.label} (${drive.driveLetter}:)`
            : drive.label}
        </span>
      </button>
    {/each}
  </section>
</div>
