<script lang="ts">
  import type { IAdminPortalRuntime } from "$interfaces/runtimes/IAdminPortalRuntime";
  import ProfilePicture from "$lib/ProfilePicture.svelte";
  import type { ExpandedUserInfo } from "$types/user";

  let { user, process }: { process: IAdminPortalRuntime; user: ExpandedUserInfo | undefined } = $props();
  const { redacted } = process;
</script>

<div class="username-display">
  {#if user}
    <ProfilePicture height={20} fallback={user.profile.profilePicture} showOnline online={user.profile.dispatchClients > 0}/>
    <button class="link" onclick={() => process.switchPage("viewUser", { user })} class:redacted={$redacted}>
      {user.username}
    </button>
  {:else}
    Stranger
  {/if}
</div>
