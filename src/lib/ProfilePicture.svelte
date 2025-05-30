<script lang="ts">
  import type { UserDaemon } from "$ts/server/user/daemon";
  import { onMount } from "svelte";

  interface Props {
    userDaemon?: UserDaemon | undefined;
    fallback?: string;
    pfp?: string | number;
    height: number;
    className?: string;
    showOnline?: boolean;
    online?: boolean;
  }
  const { userDaemon, fallback = "", pfp = "", height, className = "", showOnline = false, online = false }: Props = $props();
  const { preferences } = userDaemon || {}!;

  let url = $state<string | undefined>("");
  let currentPfp = $state<string | number>();

  onMount(() => {
    url = fallback;

    preferences?.subscribe((v) => {
      if (!fallback && currentPfp === (pfp || v.account.profilePicture!)) return;

      url =
        fallback ||
        `${import.meta.env.DW_SERVER_URL}/user/pfp/${userDaemon?.userInfo._id}?authcode=${import.meta.env.DW_SERVER_AUTHCODE}`;

      currentPfp = pfp || v.account.profilePicture!;
    });
  });
</script>

{#if url}
  <!-- svelte-ignore element_invalid_self_closing_tag -->
  <div
    class="pfprenderer {className} pfp"
    style="background-image:url('{url}'); --h: {height}px;"
    class:is-online={online}
    class:show-online={showOnline}
  />
{/if}

<style scoped>
  div.pfprenderer {
    aspect-ratio: 1/1;
    background-size: cover;
    /* overflow: hidden; */
    border-radius: 50%;
    background-position: center;
    display: inline-block;
    background-color: var(--button-glass-bg);
    min-width: var(--h);
    max-width: var(--h);
    height: var(--h);
    min-height: var(--h);
    max-height: var(--h);
    position: relative;
  }

  div.pfprenderer.show-online::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 5px;
    /* border: var(--button-glass-hover-bg) 2px solid; */
    background-color: var(--button-active-bg);
    outline: var(--win-bg) 2px solid;
    box-sizing: border-box;
    position: absolute;
    bottom: 1px;
    right: 1px;
  }

  div.pfprenderer.show-online.is-online::after {
    border: none;
    background-color: var(--clr-green-fg);
  }
</style>
