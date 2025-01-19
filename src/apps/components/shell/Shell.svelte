<script lang="ts">
  import type { AppComponentProps } from "$types/app";
  import type { ShellRuntime } from "./runtime";
  import ActionCenter from "./Shell/ActionCenter.svelte";
  import PushNotification from "./Shell/PushNotification.svelte";
  import StartMenu from "./Shell/StartMenu.svelte";
  import Taskbar from "./Shell/Taskbar.svelte";

  const { process }: AppComponentProps<ShellRuntime> = $props();
  const { userPreferences, startMenuOpened, actionCenterOpened, username } =
    process;
</script>

<div
  class="shell taskbar-bounds fullscreen"
  class:docked={$userPreferences.shell.taskbar.docked}
>
  <div class="primary">
    <StartMenu {userPreferences} {startMenuOpened} {process} {username} />
    <div></div>
    <ActionCenter {actionCenterOpened} {userPreferences} {process} />
    <PushNotification {process} />
  </div>
  <div class="secondary">
    <Taskbar {process} />
  </div>
</div>
