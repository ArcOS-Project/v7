<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import CircularProgress from "$lib/CircularProgress.svelte";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import { MessageBox } from "$ts/dialog";
  import { formatBytes } from "$ts/fs/util";
  import { GoodStatusIcon } from "$ts/images/status";
  import type { AdminBootstrapper } from "$ts/server/admin";
  import type { UserQuota } from "$types/fs";
  import type { ExpandedUserInfo } from "$types/user";
  import { onMount } from "svelte";

  const { admin, user, process }: { admin: AdminBootstrapper; user: ExpandedUserInfo; process: AdminPortalRuntime } = $props();

  let quota = $state<UserQuota>();
  let loading = $state<boolean>(true);
  let indexing = $state<boolean>(false);
  let mounting = $state<boolean>(false);

  onMount(async () => {
    quota = await admin.getQuotaOf(user.username);
    loading = false;
  });

  async function index() {
    indexing = true;
    const result = await admin.forceIndexFor(user.username);

    process.userDaemon?.sendNotification({
      title: `Indexing for ${user.username} completed`,
      message: result.length ? `- ${result.join("<br>- ")}` : "No unindexed items were found during indexing.",
      image: GoodStatusIcon,
      timeout: 4000,
    });
    indexing = false;
  }

  async function mountUser() {
    mounting = true;
    if (process.fs.drives[btoa(user.username)]) await process.fs.umountDrive(btoa(user.username), true);
    else {
      const drive = await admin.mountUserDrive(user.username);
      if (drive) process.spawnApp("fileManager", +process.env.get("shell_pid"), `${drive.uuid}:/`);
    }

    process.switchPage("filesystems", {}, true);
  }
</script>

<div class="row">
  <div class="segment pfp">
    <ProfilePicture height={20} fallback={user.profile.profilePicture} />
  </div>
  <div class="segment username">
    <button class="link" onclick={() => process.switchPage("viewUser", { user })}>{user.username}</button>
  </div>
  <div class="segment used">
    {#if !loading}
      {quota ? formatBytes(quota.used) : "-"}
    {:else}
      <Spinner height={16} />
    {/if}
  </div>
  <div class="segment available">
    {#if !loading}
      {quota ? formatBytes(quota.free) : "-"}
    {:else}
      <Spinner height={16} />
    {/if}
  </div>
  <div class="segment total">
    {#if !loading}
      {quota ? formatBytes(quota.max) : "-"}
    {:else}
      <Spinner height={16} />
    {/if}
  </div>
  <div class="segment quota">
    {#if loading}
      <Spinner height={16} />
    {:else if quota}
      <CircularProgress max={quota.max} value={quota.used} size={20} strokeWidth={2} />
    {:else}
      -
    {/if}
  </div>
  <div class="segment index">
    <button onclick={index} disabled={indexing}>
      {#if !indexing}Index{:else}<Spinner height={16} />{/if}
    </button>
  </div>
  <div class="segment mount">
    <button onclick={mountUser} disabled={mounting}>{process.fs.drives[btoa(user.username)] ? "Unmount" : "Mount"}</button>
  </div>
</div>
