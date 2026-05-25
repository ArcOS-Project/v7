<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import type { ITrayHostService } from "$interfaces/services/ITrayHostService";
  import ServiceGate from "$lib/ServiceGate.svelte";
  import ActionCenterButton from "./Taskbar/ActionCenterButton.svelte";
  import OpenedApps from "./Taskbar/OpenedApps.svelte";
  import PinnedApps from "./Taskbar/PinnedApps.svelte";
  import StartButton from "./Taskbar/StartButton.svelte";
  import Clock from "./Taskbar/SystemArea/Clock.svelte";
  import SystemTray from "./Taskbar/SystemTray.svelte";
  import WorkspaceManagerButton from "./Taskbar/WorkspaceManagerButton.svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { userPreferences } = process;
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

  <ServiceGate id="TrayHostSvc">
    {#snippet ifActive(service: ITrayHostService)}
      <SystemTray {process} {service} />
    {/snippet}
  </ServiceGate>
  <Clock {process} {userPreferences} />
  <ActionCenterButton {process} />
</div>
