<script lang="ts">
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import type { ShellRuntime } from "../runtime";
  import ActionCenterButton from "./Taskbar/ActionCenterButton.svelte";
  import OpenedApps from "./Taskbar/OpenedApps.svelte";
  import PinnedApps from "./Taskbar/PinnedApps.svelte";
  import StartButton from "./Taskbar/StartButton.svelte";
  import StatusTray from "./Taskbar/StatusTray.svelte";
  import SystemArea from "./Taskbar/SystemArea.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { userPreferences } = process;
</script>

<div
  class="taskbar shell-colored"
  class:colored={$userPreferences.shell.taskbar.colored}
  class:docked={$userPreferences.shell.taskbar.docked}
  use:contextMenu={{
    process,
    options: async () => [
      {
        caption: "Settings",
        action: () => {
          process.spawnApp("systemSettings", undefined, "shell");
        },
        icon: "settings-2",
      },
    ],
  }}
>
  <StartButton {process} />
  <PinnedApps {process} />
  <OpenedApps {process} />
  <StatusTray {process} />
  <SystemArea {process} />
  <ActionCenterButton {process} />
</div>
