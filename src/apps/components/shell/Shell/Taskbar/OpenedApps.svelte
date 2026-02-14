<script lang="ts">
  import { AppProcess } from "$ts/apps/process";
  import { isPopulatable } from "$ts/util/apps";
  import { Stack } from "$ts/env";
  import { Daemon } from "$ts/daemon";
  import type { IShellRuntime } from "$interfaces/shell";
  import OpenedApp from "./OpenedApps/OpenedApp.svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { userPreferences } = process;
  const { store } = Stack;
</script>

<div class="opened-apps">
  {#each [...$store] as [pid, openedProcess] (pid)}
    {#if openedProcess instanceof AppProcess && !openedProcess._disposed && (isPopulatable(openedProcess.app.data) || openedProcess.overridePopulatable) && (!$userPreferences.shell.taskbar.openedAppsPerWorkspace || Daemon?.workspaces?.getDesktopIndexByUuid(openedProcess.app.desktop || "") === $userPreferences.workspaces.index)}
      <OpenedApp {pid} {openedProcess} {process} />
    {/if}
  {/each}
</div>
