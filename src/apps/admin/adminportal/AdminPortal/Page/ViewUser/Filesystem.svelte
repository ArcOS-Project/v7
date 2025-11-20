<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import CircularProgress from "$lib/CircularProgress.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import { Env, Fs } from "$ts/env";
  import { formatBytes } from "$ts/util/fs";
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

  async function mountUser() {
    if (Fs().drives[btoa(user.username)]) await Fs().umountDrive(btoa(user.username), true);
    else {
      const drive = await process.admin.mountUserDrive(user.username);
      if (drive) process.spawnApp("fileManager", +Env().get("shell_pid"), `${drive.uuid}:/`);
    }

    process.switchPage("viewUser", { user }, true);
  }
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
      <button onclick={mountUser}>{Fs().drives[btoa(user.username)] ? "Unmount" : "Mount"}</button>
    {:else}
      <p class="error-text">QUOTA_FAILED</p>
    {/if}
  </div>
</div>
