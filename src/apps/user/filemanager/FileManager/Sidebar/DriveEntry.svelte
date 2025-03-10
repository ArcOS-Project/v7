<script lang="ts">
  import CircularProgress from "$lib/CircularProgress.svelte";
  import { contextProps } from "$ts/context/actions.svelte";
  import { formatBytes } from "$ts/fs/util";
  import type { FileManagerRuntime } from "../../runtime";
  import type { QuotedDrive } from "../../types";

  const { process, drive, id }: { process: FileManagerRuntime; drive: QuotedDrive; id: string } = $props();

  const { path } = process;

  let identifier = `${drive.data.driveLetter || drive.data.uuid}:`;

  function unmount() {
    process.unmountDrive(drive.data, id);
  }
</script>

<button
  class="drive"
  onclick={() => process.navigate(`${identifier}/`)}
  class:selected={$path.startsWith(`${identifier}/`)}
  data-contextmenu="sidebar-drive"
  use:contextProps={[drive, identifier, unmount]}
  title={drive.quota.unknown
    ? drive.data.label
    : `${drive.data.label}\nUsed: ${formatBytes(drive.quota.used)}\nSize: ${formatBytes(drive.quota.max)}`}
>
  <span class="lucide icon-hard-drive"></span>
  <span>
    {drive.data.driveLetter ? `${drive.data.label} (${drive.data.driveLetter}:)` : drive.data.label}
  </span>
  {#if !drive.quota.unknown}
    <CircularProgress
      className="progress {drive.quota.percentage >= 80 ? 'almost-full' : ''}"
      max={drive.quota.max}
      value={drive.quota.used}
    />
  {/if}
</button>
