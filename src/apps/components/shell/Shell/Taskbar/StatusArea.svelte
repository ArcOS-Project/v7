<script lang="ts">
  import { Daemon } from "$ts/server/user/daemon";
  import type { ShellRuntime } from "../../runtime";
  import Battery from "./StatusTray/Battery.svelte";
  import StackBusy from "./StatusTray/StackBusy.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { stackBusy } = process;
  const { battery } = Daemon?.power! || {}!;
</script>

<div class="status-area">
  <StackBusy {stackBusy} />
  {#if Daemon?.power}
    <Battery {battery} userPreferences={process.userPreferences} />
  {:else}
    <span class="lucide error-text battery icon-triangle-alert" title="ERR_NO_DAEMON"></span>``
  {/if}
</div>
