<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { FilesystemsPageQuota } from "$apps/admin/adminportal/types";
  import CircularProgress from "$lib/CircularProgress.svelte";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import { Env, Fs } from "$ts/env";
  import type { AdminBootstrapper } from "$ts/server/admin";
  import { Daemon } from "$ts/server/user/daemon";
  import { formatBytes } from "$ts/util/fs";

  const {
    admin,
    process,
    quota,
  }: {
    admin: AdminBootstrapper;
    process: AdminPortalRuntime;
    quota: FilesystemsPageQuota;
  } = $props();

  const { redacted } = process;

  let indexing = $state<boolean>(false);
  let mounting = $state<boolean>(false);

  async function index() {
    indexing = true;
    const result = await admin.forceIndexFor(quota.user.username);

    Daemon?.notifications?.sendNotification({
      title: `Indexing for ${quota.user.username} completed`,
      message: result.length ? `- ${result.join("<br>- ")}` : "No unindexed items were found during indexing.",
      image: "GoodStatusIcon",
      timeout: 4000,
    });
    indexing = false;
  }

  async function mountUser() {
    mounting = true;
    if (Fs.drives[btoa(quota.user.username)]) await Fs.umountDrive(btoa(quota.user.username), true);
    else {
      const drive = await admin.mountUserDrive(quota.user.username);
      if (drive) process.spawnApp("fileManager", +Env.get("shell_pid"), `${drive.uuid}:/`);
    }

    process.switchPage("filesystems", {}, true);
  }
</script>

<div class="row">
  <div class="segment pfp">
    <ProfilePicture height={20} fallback={quota.user.profile.profilePicture} />
  </div>
  <div class="segment username">
    <button class="link" onclick={() => process.switchPage("viewUser", { user: quota.user })} class:redacted={$redacted}
      >{quota.user.username}</button
    >
  </div>
  <div class="segment used">
    {quota ? formatBytes(quota.used) : "-"}
  </div>
  <div class="segment available">
    {quota ? formatBytes(quota.free) : "-"}
  </div>
  <div class="segment total">
    {quota ? formatBytes(quota.max) : "-"}
  </div>
  <div class="segment quota">
    {#if quota}
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
    <button onclick={mountUser} disabled={mounting}>{Fs.drives[btoa(quota.user.username)] ? "Unmount" : "Mount"}</button>
  </div>
</div>
