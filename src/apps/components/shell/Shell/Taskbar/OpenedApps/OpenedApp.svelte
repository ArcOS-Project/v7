<script lang="ts">
  import type { IAppProcess } from "$interfaces/IAppProcess";
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
<<<<<<< HEAD
  import Icon from "$lib/Icon.svelte";
=======
>>>>>>> development
  import { Daemon, Stack } from "$ts/env";
  import { contextProps } from "$ts/ui/context/actions.svelte";

  const { openedProcess, pid, process }: { openedProcess: IAppProcess; pid: number; process: IShellRuntime } = $props();
  const { windowTitle, windowIcon, blinking } = openedProcess;
  const { userPreferences } = process;
  const { focusedPid } = Stack.renderer!;

  function focus() {
    Stack.renderer?.focusPid(pid);

    if (openedProcess.app.desktop) Daemon?.workspaces?.switchToDesktopByUuid(openedProcess.app.desktop);
  }
</script>

<button
  class="opened-app"
  onclick={focus}
  class:active={$focusedPid == openedProcess.pid}
  class:iconic={!$userPreferences.shell.taskbar.labels}
  class:blinking={$blinking}
  data-pid={pid}
  data-contextmenu="taskbar-openedapp"
  use:contextProps={[openedProcess]}
>
  <Icon icon={$windowIcon || "ComponentIcon"} className="backdrop" />
  <Icon icon={$windowIcon || "ComponentIcon"} />
  {#if $userPreferences.shell.taskbar.labels}
    <span class="title">{$windowTitle}</span>
  {/if}
</button>
