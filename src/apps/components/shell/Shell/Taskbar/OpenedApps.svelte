<script lang="ts">
  import { AppProcess } from "$ts/apps/process";
  import { isPopulatable } from "$ts/apps/util";
  import type { ShellRuntime } from "../../runtime";
  import OpenedApp from "./OpenedApps/OpenedApp.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const {
    handler: { store },
  } = process;
</script>

<div class="opened-apps">
  {#each [...$store] as [pid, openedProcess]}
    {#if openedProcess instanceof AppProcess && !openedProcess._disposed && isPopulatable(openedProcess.app.data)}
      <OpenedApp {pid} {openedProcess} {process} />
    {/if}
  {/each}
</div>
