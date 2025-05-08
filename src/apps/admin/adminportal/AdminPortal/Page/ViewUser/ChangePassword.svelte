<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import { QuestionIcon } from "$ts/images/dialog";
  import type { ExpandedUserInfo } from "$types/user";
  import { generate } from "generate-password-ts";

  const { process, user }: { process: AdminPortalRuntime; user: ExpandedUserInfo } = $props();
  let newPassword = $state<string>();
  let loading = $state<boolean>(false);

  async function changePassword() {
    const confirm = await process.userDaemon?.Confirm(
      "Confirm password reset?",
      `Are you sure you want to change the password of '${user.username}'?`,
      "Cancel",
      "Change",
      QuestionIcon,
    );

    if (!confirm || !newPassword) return;

    loading = true;

    await process.admin.changePasswordOf(user.username, newPassword);
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
