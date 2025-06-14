<script lang="ts">
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import type { ReadableStore } from "$ts/writable";
  import type { ExpandedUserInfo } from "$types/user";

  const { user, redacted }: { user: ExpandedUserInfo; redacted: ReadableStore<boolean> } = $props();
</script>

<div class="identity">
  <ProfilePicture fallback={user.profile.profilePicture} showOnline online={user.profile.dispatchClients > 0} height={64} />
  <div>
    <h1>{user.profile.displayName || user.profile.username}</h1>
    <p class:redacted={$redacted}>{user.email} - {user.username}</p>
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
