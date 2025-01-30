<script lang="ts">
  import type { ReadableStore } from "$ts/writable";
  import type { BatteryType } from "$types/navigator";

  const { battery }: { battery: ReadableStore<BatteryType | undefined> } =
    $props();
</script>

<div class="battery">
  {#if $battery}
    {#if $battery.charging}
      <span class="lucide icon-battery-charging" title="Charging"></span>
    {:else if $battery.level === 0}
      <span class="lucide icon-battery" title="Empty"></span>
    {:else if $battery.level <= 0.3}
      <span class="lucide icon-battery-low" title="Low battery"></span>
    {:else if $battery.level <= 0.6}
      <span class="lucide icon-battery-medium" title="Medium battery charge"
      ></span>
    {:else}
      <span class="lucide icon-battery-full" title="Full battery"></span>
    {/if}
    {$battery.level * 100}%
  {:else}
    <span class="lucide icon-battery-warning"></span>
  {/if}
</div>
