<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import CircularProgress from "$lib/CircularProgress.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import { ShareManager } from "$ts/shares";
  import { formatBytes } from "$ts/util/fs";
  import type { UserQuota } from "$types/fs";
  import type { SharedDriveType } from "$types/shares";
  import type { ExpandedUserInfo } from "$types/user";
  import { onMount } from "svelte";

  const {
    process,
    share,
    author,
  }: { process: AdminPortalRuntime; share: SharedDriveType; author: ExpandedUserInfo | undefined } = $props();

  const username = author?.username;

  let loading = $state(true);
  let quota: UserQuota | undefined = $state();

  onMount(async () => {
    quota = await process.admin.getShareQuotaOf(share._id);

    loading = false;
  });

  async function mountShare() {
    if (process.fs.drives[share._id]) await process.fs.umountDrive(share._id, true);
    else {
      const drive = await process.userDaemon!.serviceHost!.getService<ShareManager>("ShareMgmt")!.mountShareById(share._id);
      if (drive) process.spawnApp("fileManager", +process.env.get("shell_pid"), `${drive.uuid}:/`);
    }

    process.switchPage("viewShare", { share }, true);
  }
</script>

<div class="header" class:centered={loading}>
  {#if loading}
    <Spinner height={32} />
  {:else if quota}
    <CircularProgress size={48} max={share.maxSize} value={quota.used} strokeWidth={5} />
    <div>
      <h1>{share.shareName}</h1>
      <p class="author">
        Share of <button class="link" onclick={() => process.switchPage("viewUser", { user: author })}>{username}</button>
      </p>
      <p class="usage">Using {formatBytes(quota.used)} of {formatBytes(quota.max)} ({quota.percentage.toFixed(2)}%)</p>
    </div>
    <button onclick={mountShare}>{process.fs.drives[share._id] ? "Unmount" : "Mount"}</button>
  {:else}
    <p class="error-text">Failed to get quota</p>
  {/if}
</div>
