<script lang="ts">
  import type { IShellRuntime } from "$interfaces/runtimes/IShellRuntime";
  import { Daemon, Stack } from "$ts/env";
  import { ProcessesHelper } from "$ts/helpers/processes";
  import { isPopulatable } from "$ts/util/apps";
  import OpenedApp from "./OpenedApps/OpenedApp.svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { userPreferences } = process;
  const { store } = Stack;
</script>

<div class="opened-apps">
  {#each [...$store] as [pid, openedProcess] (pid)}
    {#if ProcessesHelper.IsAnyGraphicalAppProcess(openedProcess) && !openedProcess._disposed && (isPopulatable(openedProcess.app.data) || openedProcess.overridePopulatable) && (!$userPreferences.shell.taskbar.openedAppsPerWorkspace || Daemon?.workspaces?.getDesktopIndexByUuid(openedProcess.app.desktop || "") === $userPreferences.workspaces.index)}
      <OpenedApp {pid} openedProcess={openedProcess as any} {process} />
    {/if}
  {/each}
</div>
