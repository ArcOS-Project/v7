<script lang="ts">
  import safeModeBg from "$assets/bg/safemode.png";
  import type { INewLoginAppRuntime } from "$interfaces/runtimes/INewLoginAppRuntime";
  import Spinner from "$lib/Spinner.svelte";
  import NewLoginForm from "./NewLogin/NewLoginForm.svelte";
  import UserSelector from "./NewLogin/UserSelector.svelte";
  import { LoginStatusVariant } from "./types";

  let { process }: { process: INewLoginAppRuntime } = $props();

  const { State, Status, ServerInfo } = process;
</script>

<div
  class="login-screen theme-dark"
  style="--url: url({process.safeMode ? safeModeBg : $State.wallpaperUrl})"
  class:server-bg={ServerInfo?.loginWallpaper}
  class:safemode={process.safeMode}
>
  {#if !$State.hideProfileImage}
    <div class="profile-picture" style="--src: url('{$State.profilePictureUrl}')"></div>

    {#if $State.displayName}
      <h1 class="display-name">{$State.displayName}</h1>
    {/if}
  {/if}

  {#if $Status.variant === LoginStatusVariant.Error}
    <p class="message">
      {@html $Status.content}
    </p>
    <button class="login-action" onclick={() => process.DismissError()}>Okay</button>
  {:else if $Status.variant === LoginStatusVariant.Loading}
    <p class="loading">
      <Spinner height={24} />
      <span>{@html $Status.content}</span>
    </p>
  {:else}
    <NewLoginForm {process} />
  {/if}

  {#if $Status.variant === LoginStatusVariant.None}
    <UserSelector {process} />

    <div class="power-options">
      <button class="restart icon-rotate-ccw" aria-label="Restart" onclick={() => process.PerformRestart()}></button>
      <button class="shutdown icon-power" aria-label="Shutdown" onclick={() => process.PerformShutdown()}></button>
    </div>
  {/if}

  {#if ServerInfo?.loginBottomText}
    <p class="bottom-text">
      {[ServerInfo?.loginBottomText, import.meta.env.DW_PREVIEW_DEP_BRANCH].filter(Boolean).join(" -- ")}
    </p>
  {/if}
</div>
