<script lang="ts">
  import { FilesystemDrive } from "$ts/fs/drive";
  import { getDriveLetter, getItemNameFromPath } from "$ts/fs/util";
  import { FolderIcon } from "$ts/images/filesystem";
  import { onMount } from "svelte";
  import type { FileManagerRuntime } from "../../runtime";
  import { DriveIcons } from "../../store";

  const { process }: { process: FileManagerRuntime } = $props();
  const { path, virtual } = process;

  let driveLetter = $state<string | undefined>();
  let driveLabel = $state<string>("");
  let drive = $state<FilesystemDrive>();
  let name = $state<string>("");

  onMount(() => {
    const sub = path.subscribe((v) => {
      driveLetter = getDriveLetter(v, false);

      const driveIdentifier = getDriveLetter(v, true);

      if (driveIdentifier) {
        try {
          const drive = process.fs.getDriveByLetter(driveIdentifier.slice(0, -1), false);

          driveLabel = drive?.label || "";
        } catch {}
      }

      name = getItemNameFromPath(v);
    });

    return () => sub();
  });
</script>

<div class="path">
  <div class="pill">
    <span class="lucide icon-{$virtual?.icon || DriveIcons[drive?.IDENTIFIES_AS || ''] || 'hard-drive'}"></span>
    <span>{$virtual ? $virtual.name : driveLetter || driveLabel}</span>
  </div>
  {#if name && !$virtual}
    <img src={FolderIcon} alt="" />
    <span>
      {name}
    </span>
  {/if}
</div>
