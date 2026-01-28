<script lang="ts">
  import type { ArcTermColorsRuntime } from "../runtime";
  import ColorModifier from "./ColorModifier.svelte";

  const { process }: { process: ArcTermColorsRuntime } = $props();
  const { arcTermConfiguration } = process;
</script>

<ColorModifier caption="Red text" bind:value={$arcTermConfiguration.red} />
<ColorModifier caption="Green text" bind:value={$arcTermConfiguration.green} />
<ColorModifier caption="Yellow text" bind:value={$arcTermConfiguration.yellow} />
<ColorModifier caption="Blue text" bind:value={$arcTermConfiguration.blue} />
<ColorModifier caption="Cyan text" bind:value={$arcTermConfiguration.cyan} />
<ColorModifier caption="Magenta text" bind:value={$arcTermConfiguration.magenta} />
<ColorModifier caption="Foreground" bind:value={$arcTermConfiguration.foreground} />
<ColorModifier caption="Background" bind:value={$arcTermConfiguration.background} />
<hr />
<div class="color-modifier">
  <p class="name">Backdrop opacity</p>
  <input type="range" min="0" max="1" step="0.1" bind:value={$arcTermConfiguration.backdropOpacity} />
  <span class="percent">{($arcTermConfiguration.backdropOpacity ?? 0) * 100}%</span>
</div>
