<script lang="ts">
  import CircularProgress from "$lib/CircularProgress.svelte";
  import { formatBytes } from "$ts/util/fs";
  import type { QuotedDrive } from "../../types";
  const { drive }: { drive: QuotedDrive } = $props();
</script>

<div class="drive">
  <div class="header">
    <CircularProgress max={drive.quota.max} size={64} strokeWidth={6} value={drive.quota.used} />
    <h1>{drive.data.label}</h1>
    <p>{drive.data.FILESYSTEM_LONG}</p>
  </div>
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
</div>
