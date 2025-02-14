<script lang="ts">
  import { FilesystemDrive } from "$ts/fs/drive";
  import { FolderIcon } from "$ts/images/filesystem";
  import type { FolderEntry } from "$types/fs";
  import type { FileManagerRuntime } from "../runtime";

  const { process }: { process: FileManagerRuntime } = $props();

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
      <button class="folder">
        <img src={FolderIcon} alt="" />
        <span>{folder.name}</span>
      </button>
    {/each}
  </section>
  <section>
    <h1>Drives</h1>
    {#each drives as drive}
      <button class="drive">
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
