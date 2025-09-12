<script lang="ts">
  import { formatBytes } from "$ts/kernel/mods/fs/util";
  import type { CategorizedDiskUsage } from "$types/user";

  const { usage }: { usage: CategorizedDiskUsage } = $props();
  const entries = Object.entries(usage.absolutePercentages).sort(([_, p1], [__, p2]) => p2 - p1);
</script>

<div class="usage">
  <div class="bar">
    {#each entries as [id, percentage]}
      <div class="part {id}" style="--percent: {percentage}%;"></div>
    {/each}
  </div>
  <div class="legend">
    {#each entries as [id, percentage]}
      <div class="part {id}">
        <div class="dot"></div>
        <div class="info">
          <h1>
            {id.replace(id[0], id[0].toUpperCase())} ({percentage.toFixed(1)}%)
          </h1>
          <p>{formatBytes((usage.sizes as any)[id] || 0)}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
