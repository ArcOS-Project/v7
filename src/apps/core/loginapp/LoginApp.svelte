<script lang="ts">
  import type { AppComponentProps } from "$types/app";
  import ErrorMessage from "./ErrorMessage.svelte";
  import Loading from "./Loading.svelte";
  import LockScreen from "./LockScreen.svelte";
  import LoginForm from "./LoginForm.svelte";
  import type { LoginAppRuntime } from "./runtime";
  import Topbar from "./Topbar.svelte";

  const { process, safe }: AppComponentProps<LoginAppRuntime> = $props();
  const {
    hideLockscreen,
    loadingStatus,
    errorMessage,
    profileImage,
    hideProfileImage,
  } = process;
</script>

<Topbar {hideLockscreen} {loadingStatus} {errorMessage} />

<div class="container" class:full={$hideProfileImage}>
  {#if !$hideProfileImage}
    <div class="profile-picture" style="--src: url('{$profileImage}')"></div>
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
    <button
      class="restart icon-rotate-ccw"
      aria-label="Restart"
      onclick={safe(() => process.restart())}
    ></button>
    <button
      class="shutdown icon-power"
      aria-label="Shutdown"
      onclick={safe(() => process.shutdown())}
    ></button>
  </div>
{/if}

<LockScreen {hideLockscreen} />
