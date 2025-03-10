<script lang="ts">
  import type { ShellRuntime } from "../../runtime";
  import Battery from "./StatusTray/Battery.svelte";
  import StackBusy from "./StatusTray/StackBusy.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { stackBusy } = process;
  const { battery, networkSpeed } = process.userDaemon || {}!;
</script>

<div class="status-tray">
  <StackBusy {stackBusy} />
  {#if networkSpeed && battery}
    <Battery {battery} userPreferences={process.userPreferences} />
  {:else}
    <span class="lucide error-text battery icon-triangle-alert" title="ERR_NO_DAEMON"></span>
  {/if}
</div>
