<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { AppProcess } from "$ts/apps/process";
  import { contextProps } from "$ts/context/actions.svelte";

  const {
    openedProcess,
    pid,
    process,
  }: { openedProcess: AppProcess; pid: number; process: ShellRuntime } =
    $props();
  const { windowTitle, windowIcon } = openedProcess;
  const { userPreferences } = process;
  const { focusedPid } = openedProcess.handler.renderer!;

  function focus() {
    openedProcess.handler.renderer?.focusPid(pid);

    if (openedProcess.app.desktop)
      process.userDaemon?.switchToDesktopByUuid(openedProcess.app.desktop);
  }
</script>

<button
  class="opened-app"
  onclick={focus}
  class:active={$focusedPid == openedProcess.pid}
  class:iconic={!$userPreferences.shell.taskbar.labels}
  data-pid={pid}
  data-contextmenu="taskbar-openedapp"
  use:contextProps={[openedProcess]}
>
  <img src={$windowIcon} alt="" />
  {#if $userPreferences.shell.taskbar.labels}
    <span class="title">{$windowTitle}</span>
  {/if}
</button>
