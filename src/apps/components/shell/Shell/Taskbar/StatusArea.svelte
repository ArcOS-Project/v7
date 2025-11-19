<script lang="ts">
  import type { ShellRuntime } from "../../runtime";
  import Battery from "./StatusTray/Battery.svelte";
  import StackBusy from "./StatusTray/StackBusy.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { stackBusy } = process;
  const { battery } = process.userDaemon?.status! || {}!;
</script>

<div class="status-area">
  <StackBusy {stackBusy} />
  {#if process?.userDaemon?.status}
    <Battery {battery} userPreferences={process.userPreferences} />
  {:else}
    <span class="lucide error-text battery icon-triangle-alert" title="ERR_NO_DAEMON"></span>``
  {/if}
</div>
