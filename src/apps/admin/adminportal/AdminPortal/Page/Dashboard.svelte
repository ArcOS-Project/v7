<script lang="ts">
  import { formatBytes } from "$ts/fs/util";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { DashboardData } from "../../types";

  const { process, data }: { process: AdminPortalRuntime; data: DashboardData } = $props();
  const { logs, stats } = data;
</script>

<div class="statistics">
  {#each Object.entries(stats.counts) as [id, value] (id)}
    <div class="statistic">
      <p class="name">{id}</p>
      <p class="big-value">{value}</p>
    </div>
  {/each}
</div>
<div class="logs">
  <h1>
    <span>Server Logs - last 50</span>
    <button onclick={() => process.switchPage("logs")}>
      <span>View All</span>
      <span class="lucide icon-chevron-right"></span>
    </button>
  </h1>
  <div class="log">
    <code>
      {#each Array(50) as _, i}
        {logs[i].origin}: {logs[i].message}<br />
      {/each}
    </code>
  </div>
</div>
