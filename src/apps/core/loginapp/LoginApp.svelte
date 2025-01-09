<script lang="ts">
  import type { AppComponentProps } from "$types/app";
  import ErrorMessage from "./ErrorMessage.svelte";
  import Loading from "./Loading.svelte";
  import LockScreen from "./LockScreen.svelte";
  import LoginForm from "./LoginForm.svelte";
  import type { LoginAppRuntime } from "./runtime";
  import Topbar from "./Topbar.svelte";

  const { process }: AppComponentProps<LoginAppRuntime> = $props();
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
    <img src={$profileImage} alt="" class="profile-picture" />
  {/if}
  {#if $loadingStatus}
    <Loading {loadingStatus} />
  {:else if $errorMessage}
    <ErrorMessage {errorMessage} />
  {:else}
    <LoginForm {process} />
  {/if}
</div>

<LockScreen {hideLockscreen} />
