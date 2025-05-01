<script lang="ts">
  import type { UserQuota } from "$types/fs";
  import type { SharedDriveType } from "$types/shares";
  import { onMount } from "svelte";
  import type { AdminPortalRuntime } from "../../runtime";
  import type { ViewUserData } from "../../types";
  import CircularProgress from "$lib/CircularProgress.svelte";
  import { formatBytes } from "$ts/fs/util";
  import type { UserStatistics } from "$types/admin";
  import Spinner from "$lib/Spinner.svelte";

  const { process, data }: { process: AdminPortalRuntime; data: ViewUserData } = $props();
  const { user } = data;

  let quota: UserQuota | undefined = $state();
  let shares: SharedDriveType[] = $state([]);
  let statistics: UserStatistics | undefined = $state();

  onMount(async () => {
    quota = await process.admin.getQuotaOf(user.username);
    shares = await process.admin.getSharesOf(user._id);
    statistics = await process.admin.getStatisticsOf(user._id);
  });
</script>

<div class="leftpanel">
  <div class="identity">
    <img src={user.profile.profilePicture} alt="" />
    <div>
      <h1>{user.profile.displayName || user.profile.username}</h1>
      <p>{user.email} - {user.username}</p>
      <div class="badges">
        {#if user.admin}
          <div class="badge admin">Admin</div>
        {/if}
        {#if user.approved}
          <div class="badge approved">Approved</div>
        {/if}
        <div class="badge account-number">#{user.accountNumber}</div>
      </div>
    </div>
  </div>
  {#if quota}
    <div class="section quota">
      <h1>Filesystem</h1>
      <div>
        <CircularProgress size={48} strokeWidth={5} max={quota.max} value={quota.used} />
        <div>
          <p class="used">{formatBytes(quota.used)} / {formatBytes(quota.max)}</p>
          <p class="percentage">({quota.percentage.toFixed(2)}%)</p>
        </div>
      </div>
    </div>
  {/if}
  {#if shares}
    <div class="section shares">
      <h1>Shares</h1>
      <div class="share-list">
        <div class="share-row header">
          <div class="segment icon">
            <span class="lucide icon-hard-drive"></span>
          </div>
          <div class="segment name">Share name</div>
          <div class="segment size">Size</div>
          <div class="segment members">ACC</div>
          <div class="segment locked">LCK</div>
        </div>
        {#each shares as share (share._id)}
          <div class="share-row">
            <div class="segment icon">
              <span class="lucide icon-hard-drive"></span>
            </div>
            <div class="segment name">{share.shareName}</div>
            <div class="segment size">{formatBytes(share.maxSize)}</div>
            <div class="segment members">{share.accessors.length}</div>
            <div class="segment locked" class:is-locked={share.locked}>{share.locked ? "Yes" : "No"}</div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
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
