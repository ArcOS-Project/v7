<script lang="ts">
  import type { ReadableStore } from "$ts/writable";
  import type { BatteryType } from "$types/navigator";
  import type { UserPreferencesStore } from "$types/user";

  const {
    battery,
    userPreferences,
  }: {
    battery: ReadableStore<BatteryType | undefined>;
    userPreferences: UserPreferencesStore;
  } = $props();
</script>

<div class="battery" title={$battery ? `${Math.floor($battery.level * 100)}%` : ""}>
  {#if $battery}
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
    {#if $userPreferences.shell.taskbar.batteryPercentage}
      {Math.floor($battery.level * 100)}%
    {/if}
  {:else}
    <span class="lucide icon-battery-warning"></span>
  {/if}
</div>
