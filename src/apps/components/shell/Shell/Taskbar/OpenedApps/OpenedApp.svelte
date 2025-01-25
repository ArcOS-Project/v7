<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { AppProcess } from "$ts/apps/process";

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
  }
</script>

<button
  class="opened-app"
  onclick={focus}
  class:active={$focusedPid == openedProcess.pid}
  class:iconic={!$userPreferences.shell.taskbar.labels}
>
  <img src={$windowIcon} alt="" />
  {#if $userPreferences.shell.taskbar.labels}
    <span class="title">{$windowTitle}</span>
  {/if}
</button>
