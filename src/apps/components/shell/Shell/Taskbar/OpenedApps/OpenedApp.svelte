<script lang="ts">
  import type { AppProcess } from "$ts/apps/process";

  const { openedProcess, pid }: { openedProcess: AppProcess; pid: number } =
    $props();
  const { windowTitle, windowIcon } = openedProcess;

  const { focusedPid } = openedProcess.handler.renderer!;

  function focus() {
    openedProcess.handler.renderer?.focusPid(pid);
  }
</script>

<button
  class="opened-app"
  onclick={focus}
  class:active={$focusedPid == openedProcess.pid}
>
  <img src={$windowIcon} alt="" />
  <span class="title">{$windowTitle}</span>
</button>
