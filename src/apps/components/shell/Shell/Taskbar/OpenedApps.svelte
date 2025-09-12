<script lang="ts">
  import { AppProcess } from "$ts/apps/process";
  import { isPopulatable } from "$ts/apps/util";
  import { KernelStack } from "$ts/env";
  import type { ShellRuntime } from "../../runtime";
  import OpenedApp from "./OpenedApps/OpenedApp.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { store } = KernelStack();
</script>

<div class="opened-apps">
  {#each [...$store] as [pid, openedProcess] (pid)}
    {#if openedProcess instanceof AppProcess && !openedProcess._disposed && (isPopulatable(openedProcess.app.data) || openedProcess.overridePopulatable)}
      <OpenedApp {pid} {openedProcess} {process} />
    {/if}
  {/each}
</div>
