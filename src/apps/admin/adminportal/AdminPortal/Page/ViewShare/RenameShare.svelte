<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { SharedDriveType } from "$types/shares";

  const { share, process }: { share: SharedDriveType; process: AdminPortalRuntime } = $props();
  let newName = $state("");
  let loading = $state<boolean>(false);

  async function rename() {
    const confirm = await process.userDaemon?.helpers?.Confirm(
      "Confirm rename?",
      `Are you sure you want to change the name of share '${share.shareName}' to '${newName}'?`,
      "Cancel",
      "Rename",
      "QuestionIcon"
    );

    if (!confirm || !newName) return;

    loading = true;

    await process.admin.renameShare(share._id, newName);
    process.switchPage("viewShare", { share: (await process.admin.getAllShares()).filter((s) => s._id === share._id)[0] }, true);
  }
</script>

<div class="section rename">
  <h1>Change share name</h1>
  <div>
    <input type="text" placeholder={share.shareName} bind:value={newName} />
    <div class="buttons">
      <button class:suggested={newName} disabled={!newName} onclick={rename}>Change</button>
    </div>
  </div>
</div>
