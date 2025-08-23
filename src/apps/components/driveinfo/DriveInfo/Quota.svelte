<script lang="ts">
  import { formatBytes } from "$ts/fs/util";
  import type { UserQuota } from "$types/fs";

  const { quota }: { quota: UserQuota } = $props();
</script>

<div class="quota">
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
</div>
