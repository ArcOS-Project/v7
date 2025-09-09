<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import { formatBytes } from "$ts/fs/util";
  import { QuestionIcon } from "$ts/images/dialog";
  import type { SharedDriveType } from "$types/shares";

  const { share, process }: { share: SharedDriveType; process: AdminPortalRuntime } = $props();

  let newQuota = $state<number | undefined>();
  let loading = $state<boolean>(false);

  const PRESETS = [1024 ** 2 * 512, 1024 ** 3, 1024 ** 3 * 2, 1024 ** 3 * 5, 1024 ** 3 * 10];

  async function changeQuota() {
    if (!newQuota) return;
    const confirm = await process.userDaemon?.Confirm(
      "Confirm quota change?",
      `Are you sure you want to change the quota of '${share.shareName}' to ${formatBytes(newQuota)}?`,
      "Cancel",
      "Change",
      QuestionIcon
    );

    if (!confirm) return;

    loading = true;

    await process.admin.setShareQuotaOf(share._id, newQuota);
    process.switchPage("viewShare", { share: (await process.admin.getAllShares()).filter((s) => s._id === share._id)[0] }, true);
  }
</script>

<div class="section quota">
  <h1>Change share quota</h1>
  <div>
    <input
      bind:value={newQuota}
      type="number"
      min={1024 ** 2 * 512}
      max={1024 ** 3 * 10}
      placeholder={share.maxSize.toString()}
    />
    {#each PRESETS as preset}
      <button class:suggested={newQuota === preset} onclick={() => (newQuota = preset)}
        >{formatBytes(preset).replace(".0", "")}</button
      >
    {/each}
    <button class:suggested={!!newQuota} disabled={!newQuota} onclick={changeQuota}>Change</button>
  </div>
</div>
