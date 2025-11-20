<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { ExpandedUserInfo } from "$types/user";

  const { process, user }: { process: AdminPortalRuntime; user: ExpandedUserInfo } = $props();
  let newEmail = $state<string>();
  let loading = $state<boolean>(false);

  async function rename() {
    const confirm = await process.userDaemon?.helpers?.Confirm(
      "Confirm rename?",
      `Are you sure you want to change the email of '${user.username}' to '${newEmail}'?`,
      "Cancel",
      "Rename",
      "QuestionIcon"
    );

    if (!confirm || !newEmail) return;

    loading = true;

    await process.admin.changeEmailOf(user.username, newEmail);
    process.switchPage("viewUser", { user: await process.admin.getUserByUsername(user.username) }, true);
  }
</script>

<div class="section email">
  <h1>Change user email</h1>
  <div>
    <input type="text" placeholder={user.email} bind:value={newEmail} />
    <div class="buttons">
      <button
        class:suggested={newEmail}
        disabled={!newEmail || !process.admin.canAccess("admin.users.changeemail")}
        onclick={rename}>Change</button
      >
    </div>
  </div>
</div>
