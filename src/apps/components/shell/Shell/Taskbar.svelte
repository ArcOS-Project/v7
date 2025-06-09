<script lang="ts">
  import type { ShellRuntime } from "../runtime";
  import ActionCenterButton from "./Taskbar/ActionCenterButton.svelte";
  import OpenedApps from "./Taskbar/OpenedApps.svelte";
  import PinnedApps from "./Taskbar/PinnedApps.svelte";
  import StartButton from "./Taskbar/StartButton.svelte";
  import StatusArea from "./Taskbar/StatusArea.svelte";
  import SystemTray from "./Taskbar/SystemTray.svelte";
  import TrayIcon from "./Taskbar/SystemTray/TrayIcon.svelte";
  import WorkspaceManagerButton from "./Taskbar/WorkspaceManagerButton.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { userPreferences, trayHost } = process;
  const { trayIcons } = trayHost!;
</script>

<div
  class="taskbar shell-colored"
  class:colored={$userPreferences.shell.taskbar.colored}
  class:docked={$userPreferences.shell.taskbar.docked}
  data-contextmenu="shell-taskbar"
>
  <StartButton {process} />
  <WorkspaceManagerButton {process} />
  <PinnedApps {process} />
  <OpenedApps {process} />
  {#if Object.entries($trayIcons).length}
    <div class="tray-icons">
      {#each Object.entries($trayIcons) as [discriminator, icon] (discriminator)}
        <TrayIcon {discriminator} {icon} {process} />
      {/each}
    </div>
  {/if}
  <StatusArea {process} />
  <SystemTray {process} />
  <ActionCenterButton {process} />
</div>
