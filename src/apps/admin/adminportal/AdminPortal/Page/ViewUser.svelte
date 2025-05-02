<script lang="ts">
  import Spinner from "$lib/Spinner.svelte";
  import type { UserStatistics } from "$types/admin";
  import { onMount } from "svelte";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { ViewUserData } from "../../types";
  import Filesystem from "./ViewUser/Filesystem.svelte";
  import Identity from "./ViewUser/Identity.svelte";
  import Shares from "./ViewUser/Shares.svelte";

  const { process, data }: { process: AdminPortalRuntime; data: ViewUserData } = $props();
  const { user } = data;

  let statistics: UserStatistics | undefined = $state();

  onMount(async () => {
    statistics = await process.admin.getStatisticsOf(user._id);
  });
</script>

<div class="leftpanel">
  <Identity {user} />
  <Filesystem {user} {process} />
  <Shares {user} {process} />
</div>
<div class="rightpanel">
  {#if statistics}
    <div class="statistics">
      {#each Object.entries(statistics) as [what, count]}
        <div class="statistic">
          <h1>{what}</h1>
          <p class="big-value">{count}</p>
        </div>
      {/each}
    </div>
  {:else}
    <Spinner height={32} />
  {/if}
</div>
