<script lang="ts">
  import type { ShellRuntime } from "../../runtime";
  import Battery from "./StatusTray/Battery.svelte";
  import Network from "./StatusTray/Network.svelte";
  import StackBusy from "./StatusTray/StackBusy.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { stackBusy } = process;
  const { battery, networkSpeed } = process.userDaemon!;
</script>

<div class="status-tray">
  <StackBusy {stackBusy} />
  <Network {networkSpeed} />
  <Battery {battery} userPreferences={process.userPreferences} />
</div>
