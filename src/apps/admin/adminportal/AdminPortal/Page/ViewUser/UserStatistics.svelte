<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import Spinner from "$lib/Spinner.svelte";
  import { AdminScopes } from "$ts/servicehost/services/AdminBootstrapper/store";
  import type { UserStatistics } from "$types/server/admin";

  let { statistics, process }: { statistics: UserStatistics | undefined; process: IAdminPortalRuntime } = $props();
</script>

<div class="statistics" class:centered={!statistics || !process.admin.canAccess(AdminScopes.adminStats)}>
  {#if statistics}
    {#each Object.entries(statistics) as [what, count]}
      <div class="statistic">
        <h1>{what}</h1>
        <p class="big-value">{count}</p>
      </div>
    {/each}
  {:else if !process.admin.canAccess(AdminScopes.adminStats)}
    <p class="error-text">NO_BUGHUNT_STAT_PERMISSION</p>
  {:else}
    <Spinner height={32} />
  {/if}
</div>
