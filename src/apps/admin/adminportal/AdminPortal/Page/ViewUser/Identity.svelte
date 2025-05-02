<script lang="ts">
  import type { ExpandedUserInfo } from "$types/user";

  const { user }: { user: ExpandedUserInfo } = $props();
</script>

<div class="identity">
  <img src={user.profile.profilePicture} alt="" />
  <div>
    <h1>{user.profile.displayName || user.profile.username}</h1>
    <p>{user.email} - {user.username}</p>
    <div class="badges">
      {#if user.admin}
        <div class="badge admin">Admin</div>
      {/if}
      {#if user.approved}
        <div class="badge approved">Approved</div>
      {/if}
      <div class="badge account-number">#{user.accountNumber}</div>
    </div>
  </div>
</div>
