<script lang="ts">
  import type { PublicUserInfo } from "$types/user";
  import ProfilePicture from "./ProfilePicture.svelte";

  const {
    user,
    fallback = "",
    noPfp = false,
    onClick,
  }: { user: PublicUserInfo; fallback?: string; noPfp?: boolean; onClick?: () => void } = $props();

  function onclick() {
    onClick?.();
    // room for future expansion: figma frame 381
  }
</script>

{#if user?.displayName || user?.username || fallback}
  <button class="link user-link" title={user?.username || fallback} {onclick}>
    {#if !noPfp}
      <ProfilePicture height={14} fallback={user?.profilePicture} />
    {/if}
    <span>{user?.displayName || user?.username || fallback}</span>
  </button>
{/if}
