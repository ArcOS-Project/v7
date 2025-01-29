<script lang="ts">
  import type { ShellRuntime } from "../../runtime";
  import Clock from "./SystemArea/Clock.svelte";

  const { process }: { process: ShellRuntime } = $props();
  const { battery } = process.userDaemon!;
  const { userPreferences } = process;

  // TODO: tray icons + popups
</script>

{#if $battery}
  <div class="battery">
    {#if $battery.charging}
      <span class="lucide icon-battery-charging"></span>
    {:else if $battery.level === 0}
      <span class="lucide icon-battery"></span>
    {:else if $battery.level <= 0.3}
      <span class="lucide icon-battery-low"></span>
    {:else if $battery.level <= 0.6}
      <span class="lucide icon-battery-medium"></span>
    {:else}
      <span class="lucide icon-battery-full"></span>
    {/if}
    {$battery.level * 100}%
  </div>
{/if}

<div class="system-area">
  <div class="tray-icons"></div>
  <Clock {userPreferences} />
</div>
