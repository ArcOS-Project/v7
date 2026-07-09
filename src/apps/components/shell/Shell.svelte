<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import { ArcOSVersion, Daemon, Server } from "$ts/env";
  import { ArcBuild } from "$ts/metadata/build";
  import { ArcMode } from "$ts/metadata/mode";
  import type { AppComponentProps } from "$types/apps/app";
  import { onMount } from "svelte";
  import ActionCenter from "./Shell/ActionCenter.svelte";
  import PushNotification from "./Shell/PushNotification.svelte";
  import StartMenu from "./Shell/StartMenu.svelte";
  import Taskbar from "./Shell/Taskbar.svelte";
  import VirtualDesktopIndicator from "./Shell/VirtualDesktopIndicator.svelte";
  import VirtualDesktops from "./Shell/VirtualDesktops.svelte";

  const { process }: AppComponentProps<IShellRuntime> = $props();
  const { userPreferences, startMenuOpened, actionCenterOpened, username, FullscreenCount } = process;

  let currentDesktop = $state<string>();

  onMount(() => {
    userPreferences.subscribe(() => {
      const desktop = Daemon?.workspaces?.getCurrentDesktop()?.id;

      if (!desktop) return;

      currentDesktop = desktop;
    });
  });
</script>

<div
  class="shell taskbar-bounds fullscreen"
  class:docked={$userPreferences.shell.taskbar.docked}
  class:has-fullscreen={currentDesktop && $FullscreenCount[currentDesktop]?.size > 0}
>
  <div class="primary">
    <VirtualDesktops {process} />
    <VirtualDesktopIndicator {process} />
    <StartMenu {userPreferences} {startMenuOpened} {process} {username} />
    <div></div>
    <ActionCenter {actionCenterOpened} {userPreferences} {process} />
    <PushNotification {process} />
    {#if Daemon.userInfo.isSystem}
      <div class="desktop-watermark">
        ArcOS v{ArcOSVersion}-{ArcMode()}_{ArcBuild()}<br />
        {Daemon.username}@{Server.hostname}<br />
        THIS IS A SYSTEM ACCOUNT. WATCH OUT.
      </div>
    {/if}
  </div>
  <div class="secondary">
    <Taskbar {process} />
  </div>
</div>
