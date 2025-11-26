<script lang="ts">
  import type { ArcTermColorsRuntime } from "../runtime";
  import { DarkColorPresets, LightColorPresets } from "../store";
  import Preset from "./Preset.svelte";

  const { process }: { process: ArcTermColorsRuntime } = $props();

  let selectedName = $state<string>();
</script>

<div class="presets">
  <h1>Dark-mode themes</h1>
  {#each DarkColorPresets as preset}
    <Preset bind:selectedName {preset} {process} />
  {/each}
  <h1>Light-mode themes</h1>
  {#each LightColorPresets as preset}
    <Preset bind:selectedName {preset} {process} />
  {/each}
</div>
<div class="preview">
  <p>The quick brown fox jumps over the lazy dog</p>
  <span class="red">red&nbsp;</span>
  <span class="yellow">yellow&nbsp;</span>
  <span class="cyan">cyan&nbsp;</span>
  <span class="green">green&nbsp;</span>
  <span class="blue">blue&nbsp;</span>
  <span class="magenta">magenta</span>
</div>
