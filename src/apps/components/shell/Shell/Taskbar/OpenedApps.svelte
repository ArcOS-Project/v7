<script lang="ts">
  import type { IShellRuntime } from "$interfaces/shell";
  import OpenedApp from "./OpenedApps/OpenedApp.svelte";

  const { process }: { process: IShellRuntime } = $props();
  const { openedApps } = process;
</script>

<div class="opened-apps">
  {#each $openedApps as [pid, openedProcess] (pid)}
    <OpenedApp {pid} {openedProcess} {process} />
  {/each}
</div>
