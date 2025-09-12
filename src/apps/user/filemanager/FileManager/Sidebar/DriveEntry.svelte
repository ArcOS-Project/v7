<script lang="ts">
  import CircularProgress from "$lib/CircularProgress.svelte";
  import { contextProps } from "$ts/context/actions.svelte";
  import { SharedDrive } from "$ts/kernel/mods/fs/shares/drive";
  import { formatBytes } from "$ts/kernel/mods/fs/util";
  import type { FileManagerRuntime } from "../../runtime";
  import { DriveIcons } from "../../store";
  import type { QuotedDrive } from "../../types";

  const { process, drive, id }: { process: FileManagerRuntime; drive: QuotedDrive; id: string } = $props();

  const { path } = process;

  const locked = drive.data.IDENTIFIES_AS === "share" && (drive.data as SharedDrive).shareInfo?.locked;
  let identifier = `${drive.data.driveLetter || drive.data.uuid}:`;
  let identifiesAs = drive.data.IDENTIFIES_AS || "generic";

  function unmount() {
    process.unmountDrive(drive.data, id);
  }
</script>

<button
  class="drive"
  onclick={() => process.navigate(`${identifier}/`)}
  class:selected={$path === `${identifier}/`}
  data-contextmenu={identifiesAs === "share" ? "sidebar-shared-drive" : "sidebar-drive"}
  use:contextProps={[drive, identifier, unmount]}
  title={drive.quota.unknown
    ? drive.data.label
    : `${drive.data.label}\nUsed: ${formatBytes(drive.quota.used)}\nSize: ${formatBytes(drive.quota.max)}`}
  disabled={locked}
>
  <span class="lucide icon-{locked ? 'ban' : DriveIcons[drive.data.IDENTIFIES_AS] || 'hard-drive'}"></span>
  <span>
    {drive.data.driveLetter ? `${drive.data.label} (${drive.data.driveLetter}:)` : drive.data.label}
    {#if locked}
      (locked)
    {/if}
  </span>
  {#if !drive.quota.unknown}
    <CircularProgress
      className="progress {drive.quota.percentage >= 80 ? 'almost-full' : ''}"
      max={drive.quota.max}
      value={drive.quota.used}
    />
  {/if}
</button>
