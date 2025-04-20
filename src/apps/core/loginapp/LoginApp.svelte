<script lang="ts">
  import safeModeBg from "$assets/bg/safemode.png";
  import type { AppComponentProps } from "$types/app";
  import ErrorMessage from "./ErrorMessage.svelte";
  import Loading from "./Loading.svelte";
  import LoginForm from "./LoginForm.svelte";
  import type { LoginAppRuntime } from "./runtime";

  const { process }: AppComponentProps<LoginAppRuntime> = $props();
  const {
    loadingStatus,
    errorMessage,
    profileImage,
    profileName,
    hideProfileImage,
    loginBackground,
    serverInfo,
    DEFAULT_WALLPAPER,
  } = process;
</script>

<div
  class="container"
  class:full={$hideProfileImage}
  style="--bgurl: url('{process.safeMode ? safeModeBg : $loginBackground}')"
  class:server-bg={serverInfo?.loginWallpaper && $loginBackground === $DEFAULT_WALLPAPER}
  class:safemode={process.safeMode}
>
  {#if !$hideProfileImage}
    <div class="profile-picture" style="--src: url('{$profileImage}')"></div>
    {#if $profileName}
      <h1 class="name">{$profileName}</h1>
    {/if}
  {/if}

  {#if $loadingStatus}
    <Loading {loadingStatus} />
  {:else if $errorMessage}
    <ErrorMessage {errorMessage} />
  {:else}
    <LoginForm {process} />
  {/if}
</div>

{#if !$loadingStatus && !$errorMessage}
  <div class="power-options">
    <button class="restart icon-rotate-ccw" aria-label="Restart" onclick={() => process.restart()}></button>
    <button class="shutdown icon-power" aria-label="Shutdown" onclick={() => process.shutdown()}></button>
  </div>
{/if}

{#if serverInfo?.loginBottomText}
  <p class="bottom-text">{serverInfo?.loginBottomText}</p>
{/if}
