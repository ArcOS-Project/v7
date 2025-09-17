<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import { formatBytes } from "$ts/util/fs";
  import type { ExpandedUserInfo } from "$types/user";

  const { user, process }: { user: ExpandedUserInfo; process: AdminPortalRuntime } = $props();

  let newQuota = $state<number | undefined>();
  let loading = $state<boolean>(false);

  const PRESETS = [1024 ** 2 * 512, 1024 ** 3, 1024 ** 3 * 2, 1024 ** 3 * 5, 1024 ** 3 * 10];

  async function changeQuota() {
    if (!newQuota) return;
    const confirm = await process.userDaemon?.Confirm(
      "Confirm quota change?",
      `Are you sure you want to change the quota of '${user.username}' to ${formatBytes(newQuota)}?`,
      "Cancel",
      "Change",
      process.getIconCached("QuestionIcon")
    );

    if (!confirm) return;

    loading = true;

    await process.admin.setQuotaOf(user.username, newQuota);
    process.switchPage("viewUser", { user: await process.admin.getUserByUsername(user.username) }, true);
  }
</script>

<div class="section quota">
  <h1>Change user quota</h1>
  <div>
    <input
      bind:value={newQuota}
      type="number"
      min={1024 ** 2 * 512}
      max={1024 ** 3 * 10}
      placeholder={user.storageSize.toString()}
    />
    {#each PRESETS as preset}
      <button class:suggested={newQuota === preset} onclick={() => (newQuota = preset)}
        >{formatBytes(preset).replace(".0", "")}</button
      >
    {/each}
    <button class:suggested={!!newQuota} disabled={!newQuota} onclick={changeQuota}>Change</button>
  </div>
</div>
