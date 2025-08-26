<script lang="ts">
  import { DefaultIcon } from "$ts/images/apps";
  import type { PublicUserInfo } from "$types/user";
  import ProfilePicture from "./ProfilePicture.svelte";

  const { user, fallback = "", noPfp = false }: { user: PublicUserInfo; fallback?: string; noPfp?: boolean } = $props();
</script>

{#if user.displayName || user.username || fallback}
  <button class="link user-link" title={user.username || fallback}>
    {#if !noPfp}
      <ProfilePicture height={14} fallback={user.profilePicture} />
    {/if}
    <span>{user.displayName || user.username || fallback}</span>
  </button>
{/if}
