<script lang="ts">
  import type { FilesystemsPageQuota } from "$apps/admin/adminportal/types";
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import type { IAdminBootstrapper } from "$interfaces/services/IAdminBootstrapper";
  import CircularProgress from "$lib/CircularProgress.svelte";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import Spinner from "$lib/Spinner.svelte";
  import { Daemon, Env, Fs } from "$ts/env";
  import { formatBytes } from "$ts/util/fs";
  import UsernameDisplay from "../../UsernameDisplay.svelte";

  const {
    admin,
    process,
    quota,
  }: {
    admin: IAdminBootstrapper;
    process: IAdminPortalRuntime;
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

<tr>
  <td>
    <UsernameDisplay user={quota.user} {process} />
  </td>
  <td>{quota ? formatBytes(quota.used) : "-"}</td>
  <td>{quota ? formatBytes(quota.free) : "-"}</td>
  <td>{quota ? formatBytes(quota.max) : "-"}</td>
  <td class="quota-column">
    {#if quota}
      <CircularProgress max={quota.max} value={quota.used} size={20} strokeWidth={2} />
    {:else}
      -
    {/if}
  </td>
  <td class="actions">
    <button onclick={index} disabled={indexing}>
      {#if !indexing}Index{:else}<Spinner height={16} />{/if}
    </button>
    <button onclick={mountUser} disabled={mounting}>{Fs.drives[btoa(quota.user.username)] ? "Unmount" : "Mount"}</button>
  </td>
</tr>
