<script lang="ts">
  import type { AppComponentProps } from "$types/app";
  import type { ShellRuntime } from "./runtime";
  import ActionCenter from "./Shell/ActionCenter.svelte";
  import StartMenu from "./Shell/StartMenu.svelte";
  import Taskbar from "./Shell/Taskbar.svelte";

  const { process }: AppComponentProps<ShellRuntime> = $props();
  const { userPreferences, startMenuOpened, actionCenterOpened } = process;
</script>

<div
  class="shell taskbar-bounds fullscreen"
  class:docked={$userPreferences.shell.taskbar.docked}
>
  <div class="primary">
    <StartMenu {userPreferences} {startMenuOpened} />
    <div></div>
    <ActionCenter {actionCenterOpened} />
  </div>
  <div class="secondary">
    <Taskbar {process} />
  </div>
</div>
