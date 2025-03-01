<script lang="ts">
  import type { ShellRuntime } from "../../runtime";

  const { process }: { process: ShellRuntime } = $props();
</script>

<div class="bottom">
  <div class="search">
    <span class="lucide icon-search"></span>
    <input type="text" placeholder="Search..." />
  </div>
  <div class="actions">
    <button
      class="settings"
      aria-label="Settings"
      onclick={() => process.spawnApp("systemSettings", process.pid)}
    >
      <span class="lucide icon-settings-2"></span>
    </button>
    <button
      class="shutdown"
      aria-label="Shutdown"
      onclick={() => process.notImplemented()}
    >
      <span class="lucide icon-power"></span>
    </button>
  </div>
</div>
