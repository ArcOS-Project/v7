<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import { QuestionIcon } from "$ts/images/dialog";
  import type { ExpandedUserInfo } from "$types/user";

  const { process, user }: { process: AdminPortalRuntime; user: ExpandedUserInfo } = $props();
  let newEmail = $state<string>();
  let loading = $state<boolean>(false);

  async function rename() {
    const confirm = await process.userDaemon?.Confirm(
      "Confirm rename?",
      `Are you sure you want to change the email of '${user.username}' to '${newEmail}'?`,
      "Cancel",
      "Rename",
      QuestionIcon,
    );

    if (!confirm || !newEmail) return;

    loading = true;

    await process.admin.changeEmailOf(user.username, newEmail);
  }
</script>

<div class="section email">
  <h1>Change user email</h1>
  <div>
    <input type="text" placeholder={user.email} bind:value={newEmail} />
    <div class="buttons">
      <button class:suggested={newEmail} disabled={!newEmail} onclick={rename}>Change</button>
    </div>
  </div>
</div>
