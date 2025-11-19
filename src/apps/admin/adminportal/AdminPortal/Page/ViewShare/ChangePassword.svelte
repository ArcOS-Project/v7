<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { SharedDriveType } from "$types/shares";
  import { generate } from "generate-password-ts";

  const { share, process }: { share: SharedDriveType; process: AdminPortalRuntime } = $props();
  let newPassword = $state<string>();
  let loading = $state<boolean>(false);

  async function changePassword() {
    const confirm = await process.userDaemon?.helpers?.Confirm(
      "Confirm password reset?",
      `Are you sure you want to change the password of '${share.shareName}'?`,
      "Cancel",
      "Change",
      "QuestionIcon"
    );

    if (!confirm || !newPassword) return;

    loading = true;

    await process.admin.changeSharePassword(share._id, newPassword);
    process.switchPage("viewShare", { share: (await process.admin.getAllShares()).filter((s) => s._id === share._id)[0] }, true);
  }
</script>

<div class="section password">
  <h1>Change password</h1>
  <div>
    <input bind:value={newPassword} />
    <div class="buttons">
      <button
        onclick={() =>
          (newPassword = generate({
            length: 16,
            numbers: true,
            symbols: true,
          }))}
      >
        Generate
      </button>
      <button class:suggested={newPassword} disabled={!newPassword} onclick={changePassword}>Change</button>
    </div>
  </div>
</div>
