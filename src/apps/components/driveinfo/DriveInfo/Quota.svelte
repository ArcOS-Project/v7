<script lang="ts">
  import type { IDriveInfoRuntime } from "$interfaces/runtimes/IDriveInfoRuntime";
  import { formatBytes } from "$ts/util/fs";
  import type { UserQuota } from "$types/system/fs";

  const { quota, process }: { quota: UserQuota; process: IDriveInfoRuntime } = $props();
</script>

<div class="quota">
  {#if quota.max > 0}
    <div class="part used">
      <div class="dot"></div>
      <div class="info">
        <h1>
          Used ({quota.percentage.toFixed(0)}%)
        </h1>
        <p>{formatBytes(quota.used)}</p>
      </div>
    </div>
    <div class="part free">
      <div class="dot"></div>
      <div class="info">
        <h1>
          Free ({(100 - quota.percentage).toFixed(0)}%)
        </h1>
        <p>{formatBytes(quota.free)}</p>
      </div>
    </div>
  {:else}
    <div class="warning">
      <img src={process.getIconCached("WarningIcon")} alt="" />
      <span>Couldn't get the quota of this drive</span>
    </div>
  {/if}
</div>
