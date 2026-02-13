<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/admin";
  import { AdminScopes } from "$ts/server/admin/store";
  import { Daemon } from "$ts/server/user/daemon";
  import type { ExpandedUserInfo } from "$types/user";
  import { generate } from "generate-password-ts";

  const { process, user }: { process: IAdminPortalRuntime; user: ExpandedUserInfo } = $props();
  let newPassword = $state<string>();
  let loading = $state<boolean>(false);

  async function changePassword() {
    const confirm = await Daemon?.helpers?.Confirm(
      "Confirm password reset?",
      `Are you sure you want to change the password of '${user.username}'?`,
      "Cancel",
      "Change",
      "QuestionIcon"
    );

    if (!confirm || !newPassword) return;

    loading = true;

    await process.admin.changePasswordOf(user.username, newPassword);
    process.switchPage("viewUser", { user: await process.admin.getUserByUsername(user.username) }, true);
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
      <button
        class:suggested={newPassword}
        disabled={!newPassword || !process.admin.canAccess(AdminScopes.adminUsersChangePswd)}
        onclick={changePassword}>Change</button
      >
    </div>
  </div>
</div>
