<script lang="ts">
  import type { AppComponentProps } from "$types/app";
  import { onMount } from "svelte";
  import type { ShellRuntime } from "./runtime";
  import ActionCenter from "./Shell/ActionCenter.svelte";
  import ContextMenuRenderer from "./Shell/ContextMenuRenderer.svelte";
  import PushNotification from "./Shell/PushNotification.svelte";
  import StartMenu from "./Shell/StartMenu.svelte";
  import Taskbar from "./Shell/Taskbar.svelte";
  import VirtualDesktopIndicator from "./Shell/VirtualDesktopIndicator.svelte";
  import VirtualDesktops from "./Shell/VirtualDesktops.svelte";

  const { process }: AppComponentProps<ShellRuntime> = $props();
  const {
    userPreferences,
    startMenuOpened,
    actionCenterOpened,
    username,
    FullscreenCount,
  } = process;

  let currentDesktop = $state<string>();

  onMount(() => {
    userPreferences.subscribe(() => {
      const desktop = process.userDaemon?.getCurrentDesktop()?.id;

      if (!desktop) return;

      currentDesktop = desktop;
    });
  });
</script>

<div
  class="shell taskbar-bounds fullscreen"
  class:docked={$userPreferences.shell.taskbar.docked}
  class:has-fullscreen={currentDesktop && $FullscreenCount[currentDesktop] > 0}
>
  <div class="primary">
    <VirtualDesktops {process} />
    <VirtualDesktopIndicator {process} />
    <StartMenu {userPreferences} {startMenuOpened} {process} {username} />
    <div></div>
    <ActionCenter {actionCenterOpened} {userPreferences} {process} />
    <PushNotification {process} />
  </div>
  <div class="secondary">
    <Taskbar {process} />
  </div>
  <ContextMenuRenderer {process} />
</div>
