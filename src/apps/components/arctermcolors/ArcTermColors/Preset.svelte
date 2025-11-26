<script lang="ts">
  import type { ArcTermColorsRuntime } from "../runtime";
  import type { ArcTermColorPreset } from "../types";

  let { preset, selectedName = $bindable(), process }: { preset: ArcTermColorPreset; selectedName?: string; process: ArcTermColorsRuntime } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="preset" onclick={() => (selectedName = preset.name)} class:selected={selectedName === preset.name}>
  <p class="name">{preset.name}</p>
  <div class="buttons">
    <button class="lucide icon-pencil" aria-label="Edit..." onclick={() => process.customFromPreset(preset)}></button>
    <button class="lucide icon-check" aria-label="Apply" onclick={() => process.applyPreset(preset)}></button>
  </div>
  <div class="display">
    <div style="--color: {preset.red};"></div>
    <div style="--color: {preset.green};"></div>
    <div style="--color: {preset.yellow};"></div>
    <div style="--color: {preset.blue};"></div>
    <div style="--color: {preset.magenta};"></div>
    <div style="--color: {preset.cyan};"></div>
    <div style="--color: {preset.foreground};"></div>
  </div>
</div>
