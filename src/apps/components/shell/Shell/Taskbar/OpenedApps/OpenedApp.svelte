<script lang="ts">
  import type { ShellRuntime } from "$apps/components/shell/runtime";
  import type { AppProcess } from "$ts/apps/process";
  import { contextProps } from "$ts/context/actions.svelte";
  import { Stack } from "$ts/env";
  import { Daemon } from "$ts/server/user/daemon";
  import { onMount } from "svelte";

  const { openedProcess, pid, process }: { openedProcess: AppProcess; pid: number; process: ShellRuntime } = $props();
  const { windowTitle, windowIcon } = openedProcess;
  const { userPreferences } = process;
  const { focusedPid } = Stack.renderer!;

  let wndIcon = $state<string>();

  onMount(() => {
    windowIcon.subscribe((v) => {
      wndIcon = process.getIconCached(v) || v || process.getIconCached("ComponentIcon");
    });
  });

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
  data-pid={pid}
  data-contextmenu="taskbar-openedapp"
  use:contextProps={[openedProcess]}
>
  <img src={wndIcon} alt="" class="backdrop" />
  <img src={wndIcon} alt="" />
  {#if $userPreferences.shell.taskbar.labels}
    <span class="title">{$windowTitle}</span>
  {/if}
</button>
