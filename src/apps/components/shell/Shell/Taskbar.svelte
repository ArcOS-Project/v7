<script lang="ts">
  import type { ShellRuntime } from "../runtime";
  import ActionCenterButton from "./Taskbar/ActionCenterButton.svelte";
  import OpenedApps from "./Taskbar/OpenedApps.svelte";
  import PinnedApps from "./Taskbar/PinnedApps.svelte";
  import StartButton from "./Taskbar/StartButton.svelte";
  import SystemArea from "./Taskbar/SystemArea.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { userPreferences } = process;
</script>

<div
  class="taskbar shell-colored"
  class:colored={$userPreferences.shell.taskbar.colored}
>
  <StartButton {process} />
  {#if $userPreferences.shell.taskbar.pinnedApps && $userPreferences.shell.taskbar.pinnedApps.length}
    <PinnedApps {process} />
  {/if}
  <OpenedApps {process} />
  <SystemArea {process} />
  <ActionCenterButton {process} />
</div>
