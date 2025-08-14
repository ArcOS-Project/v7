<script lang="ts">
  import { MessageBox } from "$ts/dialog";
  import { DefaultIcon } from "$ts/images/apps";
  import type { PublicUserInfo } from "$types/user";
  import ProfilePicture from "./ProfilePicture.svelte";

  const { user, fallback = "", noPfp = false }: { user: PublicUserInfo; fallback?: string; noPfp?: boolean } = $props();

  function dialog() {
    MessageBox(
      {
        title: "src/lib/UserLink.svelte",
        message: "Not implemented",
        image: DefaultIcon,
        buttons: [{ caption: "Okay", action: () => {}, suggested: true }],
      },
      2,
    );
  }
</script>

{#if user.displayName || user.username || fallback}
  <button class="user-link" onclick={dialog} title={user.username || fallback}>
    {#if !noPfp}
      <ProfilePicture height={14} fallback={user.profilePicture} online={user.dispatchClients > 0} showOnline />
    {/if}
    <span>{user.displayName || user.username || fallback}</span>
  </button>
{/if}
