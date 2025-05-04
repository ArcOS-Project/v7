<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import CircularProgress from "$lib/CircularProgress.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import { formatBytes } from "$ts/fs/util";
  import type { UserQuota } from "$types/fs";
  import type { ExpandedUserInfo } from "$types/user";
  import { onMount } from "svelte";

  const { process, user }: { process: AdminPortalRuntime; user: ExpandedUserInfo } = $props();

  let quota: UserQuota | undefined = $state();
  let loading = $state(true);

  onMount(async () => {
    quota = await process.admin.getQuotaOf(user.username);
    loading = false;
  });
</script>

<div class="section quota">
  <h1>Filesystem</h1>
  <div class:centered={loading || !quota}>
    {#if loading}
      <Spinner height={16} />
    {:else if quota}
      <CircularProgress size={48} strokeWidth={5} max={quota.max} value={quota.used} />
      <div>
        <p class="used">{formatBytes(quota.used)} / {formatBytes(quota.max)}</p>
        <p class="percentage">({quota.percentage.toFixed(2)}%)</p>
      </div>
    {:else}
      <p class="error-text">Failed to get quota</p>
    {/if}
  </div>
</div>
