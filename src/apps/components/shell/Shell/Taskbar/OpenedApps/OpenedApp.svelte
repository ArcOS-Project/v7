<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { AppProcess } from "$ts/apps/process";
  import { contextMenu } from "$ts/ui/context/actions.svelte";
  import type { ContextItemCallback } from "$types/context";

  const {
    openedProcess,
    pid,
    process,
  }: { openedProcess: AppProcess; pid: number; process: ShellRuntime } =
    $props();
  const { windowTitle, windowIcon } = openedProcess;
  const { userPreferences } = process;
  const { focusedPid } = openedProcess.handler.renderer!;

  const options: ContextItemCallback = async () => [
    {
      caption: "Pin app",
      action: () => {
        if (
          $userPreferences.shell.taskbar.pinnedApps.includes(
            openedProcess.app.id
          )
        ) {
          process.unpinApp(openedProcess.app.id);
        } else {
          process.pinApp(openedProcess.app.id);
        }
      },
      checked: () =>
        $userPreferences.shell.taskbar.pinnedApps.includes(
          openedProcess.app.id
        ),
      icon: "pin",
      separator: true,
    },
    {
      caption: openedProcess.app.data.metadata.name,
      image: openedProcess.app.data.metadata.icon,
      action: () => {
        process.spawnApp(openedProcess.app.id);
      },
    },
    {
      caption: "Close window",
      icon: "x",
      action: () => {
        openedProcess.closeWindow();
      },
    },
  ];

  function focus() {
    openedProcess.handler.renderer?.focusPid(pid);
  }
</script>

<button
  class="opened-app"
  onclick={focus}
  class:active={$focusedPid == openedProcess.pid}
  class:iconic={!$userPreferences.shell.taskbar.labels}
  use:contextMenu={{ process, options }}
>
  <img src={$windowIcon} alt="" />
  {#if $userPreferences.shell.taskbar.labels}
    <span class="title">{$windowTitle}</span>
  {/if}
</button>
