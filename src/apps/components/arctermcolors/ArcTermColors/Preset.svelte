<script lang="ts">
  import type { ArcTermColorsRuntime } from "../runtime";
  import type { ArcTermColorPreset } from "../types";

  let { preset, selected = $bindable(), process }: { preset: ArcTermColorPreset; selected?: ArcTermColorPreset; process: ArcTermColorsRuntime } = $props();
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="preset" onclick={() => (selected = preset)} class:selected={selected?.name === preset.name}>
  <p class="name">{preset.name}</p>
  <div class="buttons">
    <button class="lucide icon-pencil" aria-label="Edit..." onclick={() => process.customFromPreset(preset)}></button>
    <button class="lucide icon-check" aria-label="Apply" onclick={() => process.choosePreset(preset)}></button>
  </div>
  <div class="display" style="background-color: {preset.background}; border-color: {preset.brightBlack};">
    <div style="--color: {preset.red};"></div>
    <div style="--color: {preset.green};"></div>
    <div style="--color: {preset.yellow};"></div>
    <div style="--color: {preset.blue};"></div>
    <div style="--color: {preset.magenta};"></div>
    <div style="--color: {preset.cyan};"></div>
    <div style="--color: {preset.foreground};"></div>
  </div>
</div>
