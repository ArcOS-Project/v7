<script lang="ts">
  import type { ArcTermColorsRuntime } from "../runtime";
  import { DarkColorPresets, LightColorPresets } from "../store";
  import type { ArcTermColorPreset } from "../types";
  import Preset from "./Preset.svelte";

  const { process }: { process: ArcTermColorsRuntime } = $props();

  let selected = $state<ArcTermColorPreset>();
</script>

<div class="presets">
  <h1>Dark-mode themes</h1>
  {#each DarkColorPresets as preset}
    <Preset bind:selected {preset} {process} />
  {/each}
  <h1>Light-mode themes</h1>
  {#each LightColorPresets as preset}
    <Preset bind:selected {preset} {process} />
  {/each}
</div>
{#if selected}
  <hr />
  <div class="preview" style="background-color: {selected?.background};">
    <p style="--color: {selected?.foreground}">The quick brown fox jumps over the lazy dog</p>
    <span style="--color: {selected?.red}">red&nbsp;</span>
    <span style="--color: {selected?.yellow}">yellow&nbsp;</span>
    <span style="--color: {selected?.cyan}">cyan&nbsp;</span>
    <span style="--color: {selected?.green}">green&nbsp;</span>
    <span style="--color: {selected?.blue}">blue&nbsp;</span>
    <span style="--color: {selected?.magenta}">magenta</span>
  </div>
{/if}
