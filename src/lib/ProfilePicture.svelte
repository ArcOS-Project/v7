<script lang="ts">
  import type { UserDaemon } from "$ts/server/user/daemon";

  interface Props {
    userDaemon?: UserDaemon | undefined;
    fallback?: string;
    pfp?: string | number;
    height: number;
    className?: string;
  }
  const { userDaemon, fallback = "", pfp = "", height, className = "" }: Props = $props();
  const { preferences } = userDaemon || {}!;

  let url = $state<string | undefined>("");
  let currentPfp = $state<string | number>();

  preferences?.subscribe((v) => {
    if (!fallback && currentPfp === (pfp || v.account.profilePicture!)) return;

    url =
      fallback ||
      `${import.meta.env.DW_SERVER_URL}/user/pfp/${userDaemon?.userInfo._id}?authcode=${import.meta.env.DW_SERVER_AUTHCODE}`;

    currentPfp = pfp || v.account.profilePicture!;
  });
</script>

{#if url}
  <!-- svelte-ignore element_invalid_self_closing_tag -->
  <div class="pfprenderer {className} pfp" style="background-image:url('{url}'); --h: {height}px;" />
{/if}

<style scoped>
  div.pfprenderer {
    aspect-ratio: 1/1;
    background-size: cover;
    overflow: hidden;
    border-radius: 50%;
    background-position: center;
    display: inline-block;
    background-color: var(--button-glass-bg);
    min-width: var(--h);
    max-width: var(--h);
    height: var(--h);
    min-height: var(--h);
    max-height: var(--h);
  }
</style>
