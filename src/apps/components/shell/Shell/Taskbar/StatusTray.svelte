<script lang="ts">
  import type { ShellRuntime } from "../../runtime";
  import Battery from "./StatusTray/Battery.svelte";
  import Network from "./StatusTray/Network.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { battery, networkSpeed } = process.userDaemon!;
</script>

<div class="status-tray">
  <Network {networkSpeed} />
  <Battery {battery} />
</div>
