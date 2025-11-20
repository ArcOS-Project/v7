<script lang="ts">
  import { FilesystemDrive } from "$ts/drives/drive";
  import { getDriveLetter, getItemNameFromPath } from "$ts/util/fs";
  import { onMount } from "svelte";
  import type { FileManagerRuntime } from "../../runtime";
  import { DriveIcons } from "../../store";
  import { Fs } from "$ts/env";

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
          drive = Fs().getDriveByLetter(driveIdentifier.slice(0, -1), false);

          driveLabel = drive?.label || "";
        } catch {}
      }

      name = getItemNameFromPath(v);
    });

    return () => sub();
  });
</script>

<div class="path" class:read-only={drive?.READONLY}>
  <div class="pill">
    <span class="lucide icon-{$virtual?.icon || DriveIcons[drive?.IDENTIFIES_AS || ''] || 'hard-drive'}"></span>
    <span>{$virtual ? $virtual.name : driveLetter || driveLabel}</span>
  </div>
  {#if name && !$virtual}
    <div class="current-dir">
      <img src={process.getIconCached("FolderIcon")} alt="" />
      <span>
        {name}
      </span>
    </div>
  {/if}
  {#if drive?.READONLY}
    <div class="pill readonly-notice">
      <span class="lucide icon-pencil-off"></span>
      <span>Read-only</span>
    </div>
  {/if}
</div>
