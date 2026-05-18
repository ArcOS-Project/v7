<script lang="ts">
  import CircularProgress from "$lib/CircularProgress.svelte";
  import { Daemon } from "$ts/daemon";
  import { formatBytes } from "$ts/util/fs";
  import { DriveIconsMulticolor } from "../../store";
  import type { QuotedDrive } from "../../types";
  const { drive }: { drive: QuotedDrive } = $props();
  const canQuota = drive.data.tryIsCapable("quota");
</script>

<div class="drive">
  <div class="header">
    {#if canQuota}
      <CircularProgress max={drive.quota.max} size={64} strokeWidth={6} value={drive.quota.used} />
    {:else}
      <img src={Daemon.icons?.getIconCached(DriveIconsMulticolor[drive.data.IDENTIFIES_AS] ?? "DriveIcon")} alt="" />
    {/if}
    <h1>{drive.data.label}</h1>
    <p>{drive.data.FILESYSTEM_LONG}</p>
  </div>
  {#if canQuota}
    <div class="legend">
      <div class="part used">
        <div class="dot"></div>
        <div class="info">
          <h1>
            Used ({drive.quota.percentage.toFixed(0)}%)
          </h1>
          <p>{formatBytes(drive.quota.used)}</p>
        </div>
      </div>
      <div class="part free">
        <div class="dot"></div>
        <div class="info">
          <h1>
            Free ({(100 - drive.quota.percentage).toFixed(0)}%)
          </h1>
          <p>{formatBytes(drive.quota.free)}</p>
        </div>
      </div>
    </div>
  {/if}
</div>
