<script lang="ts">
  import type { AdminPortalRuntime } from "$apps/admin/adminportal/runtime";
  import type { SharedDriveType } from "$types/shares";
  import type { ExpandedUserInfo } from "$types/user";

  const { process, users, share }: { process: AdminPortalRuntime; users: ExpandedUserInfo[]; share: SharedDriveType } = $props();

  let contestant = $state<string>();
  let loading = $state<boolean>(false);

  async function addUser() {
    const confirm = await process.userDaemon?.helpers?.Confirm(
      "Confirm user add?",
      `Are you sure you want to add this user to '${share.shareName}'?`,
      "Cancel",
      "Add",
      "QuestionIcon"
    );

    if (!confirm || !contestant) return;

    loading = true;

    await process.admin.addUserToShare(share._id, contestant);
    process.switchPage("viewShare", { share: (await process.admin.getAllShares()).filter((s) => s._id === share._id)[0] }, true);
  }
</script>

<div class="section add-user">
  <h1>Add user to share</h1>
  <div>
    <select bind:value={contestant}>
      <option value="" selected disabled>Pick one...</option>
      {#each users.filter((u) => !share.accessors.includes(u._id) && share.userId !== u._id) as user (user._id)}
        <option value={user._id}>{user.username}</option>
      {/each}
    </select>
    <div class="buttons">
      <button class:suggested={contestant} disabled={!contestant} onclick={addUser}>Add</button>
    </div>
  </div>
</div>
