<script lang="ts">
  import { formatBytes } from "$ts/fs/util";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { DashboardData } from "../../types";

  const { process, data }: { process: AdminPortalRuntime; data: DashboardData } = $props();
  const { logs, stats } = data;
</script>

<div class="statistics">
  {#each Object.entries(stats.sizes) as [id, size] (id)}
    <div class="statistic">
      <p class="name">{id}</p>
      <p class="big-value">{stats.counts[id]}</p>
      <p class="size">{formatBytes(size)}</p>
    </div>
  {/each}
</div>
<div class="logs">
  <h1>
    <span>Server Logs</span>
    <button class="link" onclick={() => process.switchPage("logs")}>
      <span>View All</span>
      <span class="lucide icon-chevron-right"></span>
    </button>
  </h1>
  <code>
    {#each Array(10) as _, i}
      {logs[i].origin}: {logs[i].message}<br />
    {/each}
  </code>
</div>
